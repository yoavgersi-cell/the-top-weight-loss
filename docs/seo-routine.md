# Daily SEO routine

A scheduled Claude session runs this every morning. It audits the site, fixes
mechanical problems on its own, and reports everything else to the owner.

## Steps

1. `git pull origin main`, `npm ci` (if `node_modules` is missing), `npm run build`.
   If the build fails, that is the first thing to fix (only if the cause is
   mechanical - see below) or report.
2. `npm run seo-audit`. Read `seo-audit-report.md`.
3. Check the last production deploy went live: the newest commit on `main`
   must have a successful Vercel status
   (`https://api.github.com/repos/yoavgersi-cell/the-top-weight-loss/commits/main/status`).
4. Fix the **safe** items below, re-run build + audit until they are clean,
   commit with a clear message and push to `main` (Vercel deploys it).
5. Report: what was fixed (with commit), what needs the owner, and the
   error/warning counts before and after. If nothing changed and nothing needs
   the owner, say so in one line.

## Safe to fix automatically

Mechanical problems with exactly one correct fix that change no facts:

- Broken internal links (point them at the existing page they meant).
- Titles over ~65 characters or duplicated: shorten them while keeping the
  keyword and brand casing (e.g. give an article an override title, or drop
  the " | The Top Weight Loss" suffix for long titles).
- Meta descriptions over 170 or under 70 characters: tighten or extend
  using only facts already on the page.
- A page missing from the sitemap, `llms.txt` or the homepage/footer links.
- Invalid JSON-LD, a missing or wrong canonical tag, a missing H1 or extra H1s.
- A Trustpilot count or price that differs between files when the provider
  entry in `src/lib/seeds/weight-loss.ts` has the newer value (that file
  is the source of truth).
- Build errors caused by typos or type errors in content files.

## Report only - never change without the owner

- Prices, promo terms, rankings, scores, comparison winners, verdicts.
- Trustpilot ratings or counts that need re-checking on Trustpilot itself.
- Medical or regulatory statements, and the medical review log
  (`src/data/reviewers.ts`) - only the owner confirms reviews.
- Affiliate links, provider additions or removals, page deletions.
- Anything that needs the live site, Search Console or Vercel settings.
- Stale-data warnings (e.g. `PROVIDER_DATA_CHECKED`): remind the owner to
  re-verify promo prices.

## House rules

- Brand casing: embody, ro, altRx, trimrx, wellmedr, MEDVi, DirectMeds, SHED.
- Hyphens " - ", not em dashes. No invented facts, statistics or reviews.
- Run `npx tsc --noEmit -p .` and `npm run build` before every push.
