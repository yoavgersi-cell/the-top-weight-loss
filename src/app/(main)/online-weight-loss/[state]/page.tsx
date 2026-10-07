import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { ComparisonCard } from "@/components/comparison-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { getConfig } from "@/lib/config-store";
import { CONTENT_LAST_UPDATED } from "@/lib/config";
import { STATES, STATE_BY_SLUG } from "@/lib/states";

export const revalidate = 60;

const SITE_URL = "https://www.thetopweightloss.com";

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = STATE_BY_SLUG.get(state);
  if (!s) return {};
  const url = `${SITE_URL}/online-weight-loss/${s.slug}`;
  const title = `Online GLP-1 Weight Loss in ${s.name} (2026)`;
  const description =
    `Compare licensed online GLP-1 weight loss providers serving ${s.name}. Telehealth care from ${s.abbr}-licensed clinicians for semaglutide and tirzepatide, brand-name or compounded, shipped to your door.`;
  return {
    title: { absolute: `${title} | The Top Weight Loss` },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const s = STATE_BY_SLUG.get(state);
  if (!s) return notFound();

  const config = await getConfig();
  const { positions } = config.ranking;

  // Providers available in this state = ranking order, minus any that exclude it.
  const availableIds = config.ranking.providerOrder.filter((id) => {
    const p = config.providers.find((pr) => pr.id === id);
    return p && !(p.excludedStates ?? []).includes(s.abbr);
  });

  const displayList = availableIds
    .map((id, index) => {
      const provider = config.providers.find((p) => p.id === id)!;
      const position = positions[index] || positions[positions.length - 1];
      return {
        id: provider.id,
        name: provider.name,
        tagline: provider.tagline,
        logo: provider.logo,
        highlights: provider.highlights,
        affiliateUrl: provider.affiliateUrl,
        ctaText: provider.ctaText,
        rank: index + 1,
        rating: position.score,
        ratingLabel: position.label,
        starRating: position.starRating,
        badge: position.badge,
      };
    });

  const topName = displayList[0]?.name ?? "our top-rated provider";
  const topSlug = displayList[0]?.id ?? "";
  const [c0, c1, c2] = s.cities;
  const citiesPhrase = s.cities.length >= 3 ? `${c0}, ${c1}, and ${c2}` : s.cities.join(" and ");

  const faqs = [
    {
      question: `Can I get GLP-1 weight loss medication online in ${s.name}?`,
      answer: `Yes. Licensed telehealth providers serve adults across ${s.name} - from ${citiesPhrase} to smaller towns and rural areas. A clinician licensed in ${s.name} reviews your health history and decides whether semaglutide, tirzepatide or another option is appropriate. A prescription is never guaranteed.`,
    },
    {
      question: `Do I need an in-person visit in ${s.name}?`,
      answer: `Usually not. Most providers use an online intake plus messaging or a video visit. Some may ask for recent labs or a photo ID, and some situations - complex medical histories, or symptoms like severe abdominal pain - need in-person care.`,
    },
    {
      question: `How is GLP-1 medication delivered in ${s.name}?`,
      answer: `Compounded medication is typically shipped cold-packed to your ${s.name} address from a licensed pharmacy, usually within 1-7 days depending on the provider. Brand-name prescriptions may be sent to a local pharmacy or shipped. Confirm the provider ships to ${s.name} before you sign up.`,
    },
    {
      question: `How much does online GLP-1 treatment cost in ${s.name}?`,
      answer: `Among the providers we rank, compounded semaglutide is advertised at roughly $49-$199 per month and compounded tirzepatide at roughly $89-$299, depending on plan length and promos. Brand-name medication often costs $1,000+ per month at self-pay list price, but may be far less with insurance. Check the regular price after any intro offer.`,
    },
  ];

  const author = config.experts?.[0];
  const url = `${SITE_URL}/online-weight-loss/${s.slug}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Online GLP-1 Weight Loss in ${s.name} (2026)`,
    description: `Compare licensed online GLP-1 weight loss providers serving ${s.name}.`,
    url,
    inLanguage: "en-US",
    dateModified: CONTENT_LAST_UPDATED,
    isPartOf: { "@type": "WebSite", name: "The Top Weight Loss", url: SITE_URL },
    about: { "@type": "Thing", name: `GLP-1 weight loss treatment in ${s.name}` },
    ...(author && { author: { "@type": "Organization", name: author.name, url: `${SITE_URL}/about` } }),
    ...pageReviewSchema(`/online-weight-loss/${s.slug}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Online GLP-1 Weight Loss by State", item: `${SITE_URL}/online-weight-loss` },
      { "@type": "ListItem", position: 3, name: s.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        backgroundImageUrl=""
        imageAlt=""
        updatedLabel="Last Updated: September 2026"
        h1={`Online GLP-1 Weight Loss in ${s.name}`}
        h2={`Compare licensed telehealth weight loss providers serving ${s.name}`}
        description={`Clinician-guided GLP-1 treatment in ${s.name} - semaglutide and tirzepatide, brand-name or compounded, shipped to your door. Compare your options below.`}
      />

      <section className="mx-auto max-w-[1200px] px-4 pt-5">
        <MedicalReviewBar path={`/online-weight-loss/${s.slug}`} className="max-w-[760px]" />
      </section>

      {/* Breadcrumb */}
      <section className="mx-auto max-w-[1200px] px-4 pt-4">
        <nav className="text-[13px] text-gray-500">
          <Link href="/" className="hover:text-[#1A5DB8] hover:underline">Home</Link>
          <span className="px-1.5">/</span>
          <Link href="/online-weight-loss" className="hover:text-[#1A5DB8] hover:underline">By State</Link>
          <span className="px-1.5">/</span>
          <span className="text-[#191919]">{s.name}</span>
        </nav>
      </section>

      {/* Provider comparison */}
      <section className="mx-auto max-w-[900px] px-4 pt-6 pb-6">
        <div className="space-y-4">
          {displayList.map((product) => (
            <ComparisonCard key={product.id} product={product} socialProof={config.cardSocialProof} />
          ))}
        </div>
      </section>

      {/* Valuable, state-specific editorial */}
      <div className="mx-auto max-w-[1200px] px-4 pb-12 text-[16px] leading-[1.7] text-gray-800">
        <hr className="mb-8 border-gray-200" />

        <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
          Getting GLP-1 Weight Loss Treatment in {s.name}
        </h2>
        <p className="mb-4">
          If you live in {s.name} - whether in {citiesPhrase}, or a smaller community across {s.region} - you
          do not need a local obesity-medicine clinic to be evaluated for semaglutide or tirzepatide. Licensed
          online providers can assess you and, where appropriate, prescribe treatment by telehealth. Here is how it
          works, how medication reaches you in {s.name}, and how to choose.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          How Online GLP-1 Care Works in {s.name}
        </h2>
        <ol className="mb-4 ml-5 list-decimal space-y-2">
          <li><strong>Complete an online intake.</strong> You share your weight, height, health history and current medications. Treatment is generally for adults with a BMI of 30+, or 27+ with a weight-related condition.</li>
          <li><strong>Get a licensed clinician review.</strong> A clinician licensed in {s.name} screens for contraindications (such as a history of pancreatitis, medullary thyroid carcinoma or MEN2, or pregnancy) and decides whether a GLP-1 is appropriate.</li>
          <li><strong>Start low and titrate.</strong> If prescribed, medication ships to your {s.name} address and your dose is raised gradually, with check-ins to manage side effects like nausea.</li>
        </ol>
        <p className="mb-4">
          Not sure where to start? {topName} is our current top pick - read our{" "}
          {topSlug ? (
            <Link href={`/reviews/${topSlug}`} className="font-semibold text-[#1A5DB8] hover:underline">
              full {topName} review
            </Link>
          ) : (
            <Link href="/reviews" className="font-semibold text-[#1A5DB8] hover:underline">in-depth reviews</Link>
          )}
          , see the full{" "}
          <Link href="/" className="font-semibold text-[#1A5DB8] hover:underline">provider comparison</Link>, or
          read{" "}
          <Link href="/articles/semaglutide-vs-tirzepatide" className="font-semibold text-[#1A5DB8] hover:underline">
            semaglutide vs tirzepatide
          </Link>.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          Delivery &amp; Pharmacy Access Across {s.name}
        </h2>
        <p className="mb-4">
          The providers listed above serve <strong>{s.name}</strong> - from metros like {c0} to rural areas far
          from the nearest weight-management clinic. Compounded GLP-1s usually ship cold-packed from a licensed
          pharmacy directly to your {s.abbr} address, typically in 1-7 days depending on the provider; brand-name
          prescriptions may go to a local pharmacy instead. Refills and dose changes are handled by your online care
          team, so you are not taking time off work for every follow-up.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          Is Online GLP-1 Treatment Legal in {s.name}?
        </h2>
        <p className="mb-4">
          Telehealth prescribing is an established way to receive care in {s.name} when a licensed clinician is
          involved. GLP-1s are prescription-only, so a clinician licensed in {s.name} must review your history first.
          Keep in mind that compounded semaglutide and tirzepatide are not FDA-approved, and federal rules on
          compounding have tightened since the drug shortages ended - ask any provider how its medication is sourced
          and prescribed. Provider availability varies by state; the comparison above shows options that serve{" "}
          {s.name}.
        </p>

        <h2 className="mb-4 mt-8 text-[24px] font-bold text-[#191919]">
          Online vs a Weight Loss Clinic in {s.name}
        </h2>
        <p className="mb-4">
          Searching &quot;semaglutide near me&quot; in {s.name} will surface local med spas and weight-loss clinics.
          In-person care can suit complex medical histories or people who want hands-on support. Online care is
          often cheaper and faster, but it works best alongside your regular doctor. Before you choose, read{" "}
          <Link href="/articles/compounded-vs-brand-name-glp1" className="font-semibold text-[#1A5DB8] hover:underline">
            compounded vs brand-name GLP-1s
          </Link>{" "}
          and{" "}
          <Link href="/articles/real-cost-of-glp1-weight-loss" className="font-semibold text-[#1A5DB8] hover:underline">
            the real cost of GLP-1 weight loss
          </Link>.
        </p>

        <p className="mt-8 text-[13.5px] text-gray-500">
          This page is general information, not medical advice. GLP-1 medications carry risks, including
          gastrointestinal side effects, pancreatitis and gallbladder disease, and results vary. Compounded GLP-1s are
          not FDA-approved. Whether any treatment is right for you is a decision for you and a licensed clinician.
          Always confirm current pricing, availability and terms directly with the provider.
        </p>
      </div>

      <FaqAccordion items={faqs} />
    </>
  );
}
