import { type SiteConfig } from "./config";
import { weightLossConfig } from "./seeds/weight-loss";

// ─────────────────────────────────────────────────────────────────────────────
// Single-vertical config store.
//
// The original TreatmentsHub platform loaded per-vertical config from Vercel
// Blob (a CMS). This site is a single, standalone GLP-1 weight-loss vertical whose
// content is code-authoritative (src/lib/seeds/weight-loss.ts), so config-store
// collapses to a thin accessor: every page calls getConfig() and gets the weight-loss
// config. The `vertical` argument is accepted (so existing call sites keep
// compiling) but ignored - there is only one vertical here.
// ─────────────────────────────────────────────────────────────────────────────

export async function getConfig(_vertical?: string): Promise<SiteConfig> {
  return weightLossConfig;
}

// No-op: content is code-authoritative on this site (no blob CMS). Kept so the
// admin/api routes that import it continue to type-check.
export async function saveConfig(_config: SiteConfig, _vertical?: string): Promise<void> {
  return;
}
