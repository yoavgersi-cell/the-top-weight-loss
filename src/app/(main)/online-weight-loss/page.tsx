import type { Metadata } from "next";
import Link from "next/link";
import { STATES } from "@/lib/states";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";

export const revalidate = 60;

const SITE_URL = "https://www.thetopweightloss.com";

export const metadata: Metadata = {
  title: { absolute: "Online GLP-1 Weight Loss by State (2026) | The Top Weight Loss" },
  description:
    "Get GLP-1 weight loss treatment online in your state. Compare licensed telehealth providers for semaglutide and tirzepatide - pick your state to see who serves you.",
  alternates: { canonical: `${SITE_URL}/online-weight-loss` },
  openGraph: {
    title: "Online GLP-1 Weight Loss by State (2026)",
    description: "Compare licensed online GLP-1 weight loss providers that serve your state.",
    url: `${SITE_URL}/online-weight-loss`,
    type: "website",
  },
};

export default function OnlineWeightLossIndex() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/online-weight-loss`,
    url: `${SITE_URL}/online-weight-loss`,
    name: "Online GLP-1 Weight Loss by State",
    isPartOf: { "@type": "WebSite", name: "The Top Weight Loss", url: SITE_URL },
    ...pageReviewSchema("/online-weight-loss"),
  };

  return (
    <div className="mx-auto max-w-[1000px] px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <h1 className="mb-4 text-3xl font-bold text-[#191919]">Online GLP-1 Weight Loss by State</h1>
      <MedicalReviewBar path="/online-weight-loss" className="mb-5 max-w-[760px]" compact />
      <p className="mb-4 max-w-2xl text-[16px] leading-[1.7] text-gray-700">
        GLP-1 weight loss treatment - semaglutide and tirzepatide, brand-name or compounded - is widely available
        online through licensed telehealth providers: an online health intake, a review by a licensed clinician,
        and medication shipped cold-packed to your door if it is appropriate for you. Because clinicians and
        pharmacies are licensed state by state, choose your state below to see which providers serve your area.
      </p>
      <p className="mb-8 max-w-2xl text-[15px] leading-[1.7] text-gray-600">
        Prefer to jump straight in? See our{" "}
        <Link href="/" className="font-semibold text-[#1A5DB8] hover:underline">full provider comparison</Link>{" "}
        or read{" "}
        <Link href="/articles/compounded-vs-brand-name-glp1" className="font-semibold text-[#1A5DB8] hover:underline">
          compounded vs brand-name GLP-1s
        </Link>.
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
        {STATES.map((s) => (
          <Link
            key={s.slug}
            href={`/online-weight-loss/${s.slug}`}
            className="block rounded-md px-3 py-2 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-[#1A5DB8]"
          >
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
