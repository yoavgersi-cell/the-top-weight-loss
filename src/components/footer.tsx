import Link from "next/link";
import { getConfig } from "@/lib/config-store";

// Single-site weight-loss footer. Category links are absolute site routes. Popular
// comparisons are resolved from live config, so an entry that isn't a real
// battle is silently dropped (the footer never renders a dead link).
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Reviews",
    links: [
      { label: "embody", href: "/reviews/embody" },
      { label: "Ro", href: "/reviews/ro" },
      { label: "altRx", href: "/reviews/altrx" },
      { label: "trimrx", href: "/reviews/trimrx" },
      { label: "wellmedr", href: "/reviews/wellmedr" },
      { label: "MEDVi", href: "/reviews/medvi" },
      { label: "All Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Compounded vs Brand-Name GLP-1s", href: "/articles/compounded-vs-brand-name-glp1" },
      { label: "Semaglutide vs Tirzepatide", href: "/articles/semaglutide-vs-tirzepatide" },
      { label: "The Real Cost of GLP-1s", href: "/articles/real-cost-of-glp1-weight-loss" },
      { label: "GLP-1 Side Effects", href: "/articles/glp1-side-effects-first-12-weeks" },
      { label: "Stopping a GLP-1", href: "/articles/stopping-glp1-maintenance" },
      { label: "Online Weight Loss by State", href: "/online-weight-loss" },
      { label: "All Guides", href: "/articles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Rank", href: "/how-we-rank" },
      { label: "Contact", href: "/contact" },
      { label: "Medical Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

async function featuredComparisons(): Promise<{ label: string; href: string }[]> {
  try {
    const cfg = await getConfig();
    const nameOf = (id: string) => cfg.providers.find((p) => p.id === id)?.name ?? id;
    return (cfg.battles ?? []).slice(0, 5).map((b) => ({
      label: b.matchupLabel || `${nameOf(b.provider1Id)} vs ${nameOf(b.provider2Id)}`,
      href: `/${b.slug}`,
    }));
  } catch {
    return [];
  }
}

export async function Footer() {
  const comparisons = await featuredComparisons();
  const columns = [
    ...COLUMNS,
    ...(comparisons.length > 0 ? [{ title: "Popular Comparisons", links: comparisons }] : []),
  ];

  return (
    <footer className="mt-auto border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand blurb */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[13px] leading-relaxed text-gray-500">
              <span className="font-bold text-[#1A5DB8]">The Top Weight Loss</span> is an independent comparison
              publisher for online GLP-1 weight-loss programs.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-2.5 text-[12px] font-bold uppercase tracking-wider text-[#191919]">{col.title}</h4>
              <nav className="space-y-1.5">
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="block text-[13px] text-gray-500 hover:text-[#1A5DB8]">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="mb-4 text-xs text-gray-400">
            <strong className="text-gray-500">Affiliate Disclosure:</strong> The Top Weight Loss may earn a commission
            when you click on links and make a purchase. This does not affect our rankings or reviews. We are
            committed to providing honest, independent comparisons to help you make informed decisions.
          </p>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] text-gray-400">
              &copy; {new Date().getFullYear()} The Top Weight Loss. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-300">
              thetopweightloss.com is not a medical provider. Always consult a licensed clinician.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
