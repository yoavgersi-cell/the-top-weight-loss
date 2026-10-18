#!/usr/bin/env node
// Daily SEO / GEO audit for thetopweightloss.com.
//
// Usage: npm run build && node scripts/seo-audit.mjs
// Starts the production build on a local port, crawls every URL in the
// sitemap plus every internal link it finds, and checks the things that
// silently break rankings: status codes, titles, descriptions, H1s, canonical
// tags, JSON-LD validity, robots.txt, llms.txt, Trustpilot-count consistency,
// medical-review coverage and provider-data freshness.
//
// Exit code 1 when any ERROR is found. Prints a Markdown report to stdout and
// writes the same report to seo-audit-report.md (gitignored).

import { spawn } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const PORT = 3199;
const BASE = `http://localhost:${PORT}`;
const ORIGIN = "https://www.thetopweightloss.com";
const ROOT = new URL("..", import.meta.url).pathname;

const errors = [];
const warnings = [];
const notes = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// ── start the production server ────────────────────────────────────────────
// Refuse to run against a server that is already on the port - it may be
// serving an older build.
try {
  await fetch(BASE + "/robots.txt");
  console.error(`Port ${PORT} is already in use - stop that server first (it may be an old build).`);
  process.exit(2);
} catch {}

// detached: the server gets its own process group, so stop() can kill npx AND
// the next-server child it spawns (killing only npx leaves a stale server on
// the port, and the next run would audit an old build).
const server = spawn("npx", ["next", "start", "-p", String(PORT)], { cwd: ROOT, stdio: "ignore", detached: true });
const stop = () => { try { process.kill(-server.pid, "SIGTERM"); } catch {} };
process.on("exit", stop);

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try { const r = await fetch(BASE + "/robots.txt"); if (r.ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("server did not start - did you run `npm run build`?");
}

async function get(path) {
  const r = await fetch(BASE + path, { redirect: "manual" });
  return { status: r.status, text: r.status === 200 ? await r.text() : "" };
}

const strip = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim();

// ── source-level helpers ───────────────────────────────────────────────────
function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(f)) out.push(p);
  }
  return out;
}
const SRC = walk(join(ROOT, "src"));
const seed = readFileSync(join(ROOT, "src/lib/seeds/weight-loss.ts"), "utf8");

async function main() {
  await waitForServer();

  // robots.txt
  const robots = await get("/robots.txt");
  if (robots.status !== 200) err("robots.txt does not return 200");
  else {
    if (!robots.text.includes("Sitemap:")) err("robots.txt has no Sitemap line");
    for (const bot of ["GPTBot", "OAI-SearchBot", "PerplexityBot", "ClaudeBot", "Google-Extended", "Bingbot"]) {
      if (!robots.text.includes(bot)) warn(`robots.txt does not name AI crawler ${bot}`);
    }
    if (/Disallow:\s*\/\s*$/m.test(robots.text)) err("robots.txt contains `Disallow: /` - site blocked");
  }

  // sitemap
  const sm = await get("/sitemap.xml");
  if (sm.status !== 200) { err("sitemap.xml does not return 200"); return; }
  const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const offOrigin = urls.filter((u) => !u.startsWith(ORIGIN));
  if (offOrigin.length) err(`sitemap has ${offOrigin.length} URLs not on ${ORIGIN}: ${offOrigin.slice(0, 3).join(", ")}`);
  const paths = urls.map((u) => u.replace(ORIGIN, "") || "/");
  notes.push(`Sitemap URLs: ${paths.length}`);

  // llms.txt
  const llms = await get("/llms.txt");
  if (llms.status !== 200) err("llms.txt does not return 200");
  else {
    const providersBlock = seed.slice(seed.indexOf("  providers: ["), seed.indexOf("  reviews: ["));
    const ids = [...providersBlock.matchAll(/^\s{6}id: "([a-z0-9-]+)",$/gm)].map((m) => m[1]);
    for (const id of ids) if (!llms.text.includes(`/reviews/${id}`)) warn(`llms.txt does not link /reviews/${id}`);
  }

  // crawl pages
  const titles = new Map();
  const internalLinks = new Set();
  for (const p of paths) {
    const { status, text } = await get(p);
    if (status !== 200) { err(`${p} returns ${status}`); continue; }
    const title = strip((text.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
    const desc = strip((text.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
    const canonical = (text.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    const h1s = (text.match(/<h1[\s>]/g) || []).length;
    const robotsMeta = (text.match(/<meta name="robots" content="([^"]+)"/) || [])[1] || "";

    if (!title) err(`${p}: missing <title>`);
    else {
      if (title.length > 70) warn(`${p}: title ${title.length} chars (Google truncates ~60-65): "${title}"`);
      if (titles.has(title)) err(`${p}: duplicate title with ${titles.get(title)}: "${title}"`);
      titles.set(title, p);
    }
    if (!desc) err(`${p}: missing meta description`);
    else if (desc.length > 170) warn(`${p}: meta description ${desc.length} chars (>170)`);
    else if (desc.length < 70) warn(`${p}: meta description only ${desc.length} chars`);
    if (h1s !== 1) warn(`${p}: ${h1s} <h1> tags (expected 1)`);
    if (!canonical) warn(`${p}: no canonical tag`);
    else if (canonical.replace(ORIGIN, "") !== (p === "/" ? "" : p) && canonical !== ORIGIN + p) {
      warn(`${p}: canonical points elsewhere (${canonical})`);
    }
    if (/noindex/.test(robotsMeta)) err(`${p}: is in the sitemap but has robots ${robotsMeta}`);

    for (const block of text.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try { JSON.parse(block[1]); } catch { err(`${p}: invalid JSON-LD block`); }
    }
    for (const m of text.matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = m[1];
      if (!href.startsWith("/_next") && !href.startsWith("/api") && !/\.(png|webp|svg|jpg|ico|txt|xml)$/.test(href)) internalLinks.add(href);
    }
  }

  // broken internal links
  const pathSet = new Set(paths);
  for (const href of internalLinks) {
    if (pathSet.has(href)) continue;
    const { status } = await get(href);
    if (status >= 400) err(`broken internal link: ${href} (${status})`);
    else if (status >= 300) warn(`internal link redirects: ${href} (${status})`);
  }
  notes.push(`Internal links checked: ${internalLinks.size}`);

  // Trustpilot counts: every "N,NNN" near "Trustpilot" in source must be a current count
  const current = new Set([...seed.matchAll(/trustpilotReviewCount: "([\d,]+)"/g)].map((m) => m[1]));
  for (const f of SRC) {
    const t = readFileSync(f, "utf8");
    for (const m of t.matchAll(/Trustpilot[^"`\n]{0,80}?\b(\d{1,2},\d{3})\b|\b(\d{1,2},\d{3})\b[^"`\n]{0,40}Trustpilot/g)) {
      const n = m[1] || m[2];
      if (!current.has(n) && !n.endsWith(",000")) warn(`${f.replace(ROOT, "")}: Trustpilot count ${n} matches no provider's current count (stale?)`);
    }
  }

  // medical review coverage
  const reviewers = readFileSync(join(ROOT, "src/data/reviewers.ts"), "utf8");
  const logged = new Set([...reviewers.matchAll(/^\s+"(\/[^"]*)",$/gm)].map((m) => m[1]));
  for (const m of reviewers.matchAll(/^\s+"(\/[^"]+)": \{ reviewer:/gm)) logged.add(m[1]);
  const exempt = /^\/(about|contact|terms|privacy|disclaimer|medical-review-policy|reviewers\/)/;
  const unreviewed = paths.filter((p) => !exempt.test(p) && !logged.has(p));
  if (unreviewed.length) notes.push(`Pages not yet medically reviewed (${unreviewed.length}): ${unreviewed.join(", ")}`);

  // provider-data freshness
  const cfg = readFileSync(join(ROOT, "src/lib/config.ts"), "utf8");
  const checked = (cfg.match(/PROVIDER_DATA_CHECKED = "([A-Za-z]+ \d{4})"/) || [])[1];
  if (checked) {
    const d = new Date(`1 ${checked}`);
    const days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days > 45) warn(`PROVIDER_DATA_CHECKED is "${checked}" (${days} days ago) - promo prices need re-verifying`);
  }
}


try { await main(); } catch (e) { err(`audit crashed: ${e.message}`); }
stop();

const report = [
  `# SEO audit - ${new Date().toISOString().slice(0, 10)}`,
  "",
  `**${errors.length} errors, ${warnings.length} warnings**`,
  "",
  "## Errors",
  ...(errors.length ? errors.map((e) => `- ${e}`) : ["- none"]),
  "",
  "## Warnings",
  ...(warnings.length ? warnings.map((w) => `- ${w}`) : ["- none"]),
  "",
  "## Notes",
  ...notes.map((n) => `- ${n}`),
  "",
].join("\n");
writeFileSync(join(ROOT, "seo-audit-report.md"), report);
console.log(report);
process.exit(errors.length ? 1 : 0);
