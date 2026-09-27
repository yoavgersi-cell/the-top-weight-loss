import { BookOpen } from "lucide-react";

// Authoritative outgoing citations, per vertical. Every entry is a real,
// verifiable source (FDA pages and labels, peer-reviewed trials via DOI, NIH/NIDDK)
// - never invent or approximate a citation. Rendered as a "Sources" section on
// articles, reviews and comparisons so YMYL pages visibly ground their claims.
export interface MedicalSource {
  label: string;
  publisher: string;
  href: string;
}

export const SOURCES_BY_VERTICAL: Record<string, MedicalSource[]> = {
  wl: [
    {
      label: "FDA's Concerns with Unapproved GLP-1 Drugs Used for Weight Loss",
      publisher: "U.S. Food & Drug Administration",
      href: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
    },
    {
      label: "FDA clarifies policies for compounders as national GLP-1 supply begins to stabilize",
      publisher: "U.S. Food & Drug Administration",
      href: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize",
    },
    {
      label: "Wegovy (semaglutide) injection - prescribing information",
      publisher: "U.S. Food & Drug Administration (Drugs@FDA)",
      href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf",
    },
    {
      label: "Zepbound (tirzepatide) injection - prescribing information",
      publisher: "U.S. Food & Drug Administration (Drugs@FDA)",
      href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf",
    },
    {
      label: "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1) - Wilding et al.",
      publisher: "New England Journal of Medicine, 2021;384:989-1002",
      href: "https://doi.org/10.1056/NEJMoa2032183",
    },
    {
      label: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1) - Jastreboff et al.",
      publisher: "New England Journal of Medicine, 2022;387:205-216",
      href: "https://doi.org/10.1056/NEJMoa2206038",
    },
    {
      label: "Tirzepatide as Compared with Semaglutide for the Treatment of Obesity (SURMOUNT-5) - Aronne et al.",
      publisher: "New England Journal of Medicine, 2025",
      href: "https://doi.org/10.1056/NEJMoa2416394",
    },
    {
      label: "Weight regain and cardiometabolic effects after withdrawal of semaglutide: the STEP 1 trial extension - Wilding et al.",
      publisher: "Diabetes, Obesity and Metabolism, 2022",
      href: "https://doi.org/10.1111/dom.14725",
    },
    {
      label: "Prescription Medications to Treat Overweight & Obesity",
      publisher: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), NIH",
      href: "https://www.niddk.nih.gov/health-information/weight-management/prescription-medications-treat-overweight-obesity",
    },
  ],
};

// Compact citation list for the bottom of YMYL content pages. Renders nothing
// for verticals without a curated source list yet.
export function MedicalSources({ vertical }: { vertical: string }) {
  const sources = SOURCES_BY_VERTICAL[vertical];
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-[#0369A1]" strokeWidth={2} />
        <h2 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#191919]">
          Sources &amp; medical references
        </h2>
      </div>
      <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
        Treatment facts on this page are grounded in regulatory guidance and peer-reviewed research.
        Pricing and plan details come from each provider&apos;s published information. This content
        is for information only and is not medical advice - always consult a licensed clinician
        before starting treatment.
      </p>
      <ol className="space-y-2">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
            <span className="shrink-0 font-semibold text-gray-300">{i + 1}.</span>
            <span className="text-gray-600">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#0369A1] underline underline-offset-2 hover:text-[#075985]"
              >
                {s.label}
              </a>{" "}
              <span className="text-gray-400">- {s.publisher}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// One-line affiliate disclosure under the byline, above the first affiliate
// link (FTC: clear, conspicuous, before the links). Deliberately compact - the
// "not medical advice" disclaimer lives once at the bottom of these pages
// (SourcesMethodology footer, or the MedicalSources intro below) instead of
// being repeated here.
export function TrustDisclosure({ disclaimerHref }: { disclaimerHref: string }) {
  return (
    <p className="mt-2.5 max-w-[720px] text-[11.5px] leading-[1.55] text-gray-400 sm:mt-3 sm:text-[12px]">
      We may earn a commission from links on this page - it never affects our rankings (
      <a href={disclaimerHref} className="font-medium text-[#0369A1] hover:underline">
        how we stay objective
      </a>
      ).
    </p>
  );
}
