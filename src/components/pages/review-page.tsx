import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Users, Clock, Shield, Star, ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { latestUpdate, VERTICALS, NOINDEX_WL_REVIEW_SLUGS } from "@/lib/config";
import {
  type SiteContext,
  canonicalUrl,
  hubLink,
} from "@/lib/site-context";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProviderCta } from "@/components/provider-cta";
import { TrustpilotCarousel } from "@/components/trustpilot-carousel";
import { ExpertByline } from "@/components/expert-byline";
import { LastUpdated } from "@/components/last-updated";
import { PromoPopup } from "@/components/promo-popup";
import { resolvePromoPopup } from "@/lib/promo-popups";
import { TrustDisclosure } from "@/components/medical-sources";
import { SourcesMethodology } from "@/components/sources-methodology";
import { ProductCarousel } from "@/components/product-carousel";
import { notFound } from "next/navigation";
import { REDDIT_COMMUNITY_FEEDBACK as REVIEW_COMMUNITY_FEEDBACK, RedditMark } from "@/components/reddit-community";
import { YoutubeReviewSection } from "@/components/youtube-review";
import { ReadableProse } from "@/components/prose";
import { ProviderAudit } from "@/components/provider-audit";

// Per-provider SEO overrides, "is X legit?" trust blocks and extra FAQs for
// this site's six providers. Every figure below must match the seed
// (src/lib/seeds/weight-loss.ts) - update both together when prices change.
// Query-matched titles (Oct 2026): Search Console shows these reviews earning
// impressions for "<brand> reviews", "is <brand> legit", "<brand> cost per
// month" - titles and descriptions mirror that phrasing. Figures are the
// provider-published prices in the seed (checked Sep 2026).
const REVIEW_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  embody: {
    title: "embody Reviews 2026: Is It Legit? $69/mo GLP-1, Fine Print",
    description:
      "Is embody legit? Our embody review: compounded semaglutide $69/mo, tirzepatide $119/mo, no commitment, 1-2 day shipping - plus what its 8,398 Trustpilot reviews say.",
  },
  ro: {
    title: "ro Weight Loss Reviews 2026: Cost, Insurance & Is It Legit?",
    description:
      "ro weight loss review: Wegovy, Zepbound, Ozempic and Foundaya with an insurance concierge. Membership $39 first month, then $149/mo - what it really costs and who it fits.",
  },
  altrx: {
    title: "altRx Reviews 2026: Is altRx Legit for GLP-1? Cost & FDA Letter",
    description:
      "Is altRx legit? altRx review: compounded semaglutide $89/mo and tirzepatide $149/mo (promo), regular prices, brand-name shelf - and the June 2026 FDA warning letter explained.",
  },
  trimrx: {
    title: "trimrx Reviews 2026: Is It Legit? Cost, Dosing & Ratings",
    description:
      "trimrx review: semaglutide $149/mo at every dose, tirzepatide $259/mo, custom dosing and unlimited check-ins. What 5,670 Trustpilot reviews say and who should skip it.",
  },
  wellmedr: {
    title: "wellmedr Reviews 2026: Is It Legit? The $49/mo GLP-1 Catch",
    description:
      "Is wellmedr legit? wellmedr review: semaglutide $49/mo on a 12-month plan, tirzepatide $89/mo, 4.6/5 from 1,919 Trustpilot reviews - and what the low price requires.",
  },
  medvi: {
    title: "MEDVi Reviews 2026: Is MEDVi Good? Cost Per Month & Tirzepatide",
    description:
      "Is MEDVi good? MEDVi review: compounded semaglutide $99/mo and tirzepatide $166/mo (promo), dietitian and coaching included, 4.3/5 from 14,836 Trustpilot reviews.",
  },
};

const REVIEW_LEGIT: Record<string, { verdict: string; signals: string[] }> = {
  embody: {
    verdict:
      "Yes. embody is a real telehealth program: a licensed US clinician reviews every intake before anything is prescribed, it is LegitScript-certified, and medication comes from state-licensed 503A compounding pharmacies. Its reviews are mixed rather than suspicious - most complaints are about shipping hiccups and slow support replies, not about whether people received their medication. Remember that compounded GLP-1s are not FDA-approved.",
    signals: ["Licensed US clinician reviews every intake", "LegitScript-certified", "State-licensed 503A pharmacies", "Clear month-to-month pricing"],
  },
  ro: {
    verdict:
      "Yes. ro has operated nationally since 2017 and is one of the largest direct-to-consumer telehealth companies in the US. For weight loss it prescribes only FDA-approved brand-name medications - Wegovy, Zepbound, Ozempic and Foundaya - after a clinician review, and its insurance concierge works directly with your plan.",
    signals: ["Operating since 2017", "FDA-approved brand-name medication only", "Insurance concierge and prior authorization help", "Licensed clinicians, nationwide"],
  },
  altrx: {
    verdict:
      "altRx is a functioning telehealth program - clinicians review your intake and prescriptions ship from a pharmacy - but there is a caveat worth knowing. On June 8, 2026 the FDA sent its parent company, Trinity HealthCare Supply, LLC, a warning letter objecting to claims and labels that made its compounded semaglutide and tirzepatide look FDA-approved. A warning letter is not a recall or a shutdown, but it is a reason to read altRx's claims carefully. altRx does not publish a Trustpilot score.",
    signals: ["Clinician review before prescribing", "Published flat prices at every dose", "No commitment - pause or cancel", "Caution: June 2026 FDA warning letter"],
  },
  trimrx: {
    verdict:
      "Yes. trimrx prescribes through licensed providers after an online questionnaire, ships with tracking, and lets you contact your provider as often as you need. Its 3.7/5 Trustpilot score from 5,670 reviews is middling - praise tends to focus on dosing support, complaints on price and support speed. Compounded GLP-1s are not FDA-approved.",
    signals: ["Licensed providers review every questionnaire", "Unlimited provider check-ins", "Free tracked delivery", "Month-to-month, HSA/FSA eligible"],
  },
  wellmedr: {
    verdict:
      "Yes. wellmedr uses board-certified clinicians, serves all 50 states and has the strongest Trustpilot score of the compounded programs we track - 4.6/5 from 1,919 reviews. The thing to understand is the pricing, not the legitimacy: the $49/mo semaglutide rate requires a 12-month plan, so read the cancellation terms before committing. Compounded GLP-1s are not FDA-approved.",
    signals: ["Board-certified clinicians", "Available in all 50 states", "Same price at every dose", "Clear 12-month vs monthly pricing"],
  },
  medvi: {
    verdict:
      "Yes. MEDVi is a licensed US telehealth program with one of the largest review bases in GLP-1 weight loss - 4.3/5 on Trustpilot from 14,836 reviews. Clinician visits, dietitian access and coaching are included in the monthly price, with no membership fee. Its headline prices are promotional, so confirm what you will pay after the promo. Compounded GLP-1s are not FDA-approved.",
    signals: ["Licensed US clinicians", "Dietitian and coaching included", "No membership or hidden fees", "HSA/FSA accepted"],
  },
};

const REVIEW_EXTRA_FAQS: Record<string, { question: string; answer: string }[]> = {
  embody: [
    { question: "What do embody reviews say?", answer: "embody holds a 3.8/5 Trustpilot score from 8,398 reviews. Positive reviews mostly praise the low $69/mo price and fast 1-2 day shipping; negative ones mostly mention shipping delays and slow replies from support." },
    { question: "Does embody require a commitment?", answer: "No. embody is month-to-month: semaglutide is $69/mo and tirzepatide $119/mo with no plan length required, and you can cancel anytime." },
  ],
  ro: [
    { question: "Does ro take insurance for Wegovy and Zepbound?", answer: "ro's insurance concierge checks your coverage and handles prior authorization for brand-name GLP-1s. If your plan covers the medication, you pay your plan's share plus ro's membership; if not, you pay the manufacturer's self-pay price." },
    { question: "Does ro sell compounded semaglutide?", answer: "No. ro prescribes only FDA-approved brand-name medications for weight loss - Wegovy, Zepbound, Ozempic and Foundaya." },
  ],
  altrx: [
    { question: "How much is altRx per month after the promo?", answer: "altRx's promotional prices are $89/mo for compounded semaglutide and $149/mo for tirzepatide. Its regular prices are $199/mo and $299/mo. Prices are flat at every dose, so they do not rise as your dose increases - ask how long the promo lasts before you sign up." },
    { question: "What was the altRx FDA warning letter about?", answer: "On June 8, 2026 the FDA sent a warning letter to Trinity HealthCare Supply, LLC, which does business as altRx. The FDA objected to claims and product labels that presented its compounded semaglutide and tirzepatide as if they were FDA-approved. The letter is published on the FDA's website." },
  ],
  trimrx: [
    { question: "What do trimrx reviews say?", answer: "trimrx has a 3.7/5 Trustpilot score from 5,670 reviews. Reviewers often credit the custom dosing and easy access to providers; complaints tend to focus on price and support response times." },
    { question: "Does trimrx price change with the dose?", answer: "Not for semaglutide: trimrx charges $149/mo at every dose. Compounded tirzepatide is $259/mo." },
  ],
  wellmedr: [
    { question: "What do wellmedr reviews say?", answer: "wellmedr has a 4.6/5 Trustpilot score from 1,919 reviews - the highest of the compounded GLP-1 programs we track." },
    { question: "How much is wellmedr tirzepatide?", answer: "wellmedr lists compounded tirzepatide at $89/mo, shipped every 4 weeks, at the same price for every dose." },
    { question: "Is wellmedr's $49 price month-to-month?", answer: "No. The $49/mo semaglutide rate is for the 12-month plan; month-to-month is advertised at around $88/mo. Compounded tirzepatide is $89/mo, shipped every 4 weeks." },
  ],
  medvi: [
    { question: "How much does MEDVi cost per month?", answer: "MEDVi's promotional prices are $99/mo for compounded semaglutide and $166/mo for compounded tirzepatide; regular prices are $199/mo and $299/mo. The price includes clinician visits, dietitian access, coaching and free shipping, with no membership fee." },
    { question: "Does MEDVi offer compounded tirzepatide?", answer: "Yes. MEDVi offers compounded tirzepatide at $166/mo at its promotional price ($299/mo regular), alongside compounded semaglutide. Compounded medications are not FDA-approved." },
    { question: "Is MEDVi FDA approved?", answer: "MEDVi is a telehealth company, not a drug, so it is not something the FDA approves. Its core program uses compounded semaglutide and tirzepatide, which are not FDA-approved - the FDA does not review compounded drugs for safety, effectiveness or quality. FDA-approved GLP-1s are brand-name drugs such as Wegovy and Zepbound." },
    { question: "Is MEDVi safe?", answer: "A licensed US clinician reviews your health history before anything is prescribed, which is the key safety step. GLP-1 medications commonly cause nausea, diarrhea or constipation, especially while the dose is being increased, and are not suitable for everyone - including people with a personal or family history of medullary thyroid cancer or MEN2, or who are pregnant. Compounded versions are not FDA-approved." },
    { question: "Is MEDVi good?", answer: "For people who want support beyond a prescription, MEDVi is one of the stronger options: dietitian access and coaching are included, there is no membership fee, and it holds a 4.3/5 Trustpilot score from 14,836 reviews. If price is your only priority, cheaper programs exist." },
  ],
};


export async function reviewMetadata(slug: string, ctx: SiteContext): Promise<Metadata> {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return { title: "Review Not Found" };

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return { title: "Review Not Found" };

  // Overrides are written against weight-loss offers (GLP-1 pricing etc.), so
  // a shared provider id on another vertical (e.g. directmeds on another vertical) falls back to
  // the generic template instead of inheriting weight-loss claims.
  const override = REVIEW_SEO_OVERRIDES[slug];
  // Providers reviewed in more than one vertical (ro, Maximus, PeterMD, Hims)
  // would otherwise emit identical <title>s on two URLs - a duplicate-title
  // signal. Their titles carry the vertical name to differentiate.
  const SHARED_REVIEW_PROVIDER_IDS = ["ro", "maximus", "petermd", "hims"];
  const verticalQualifier = SHARED_REVIEW_PROVIDER_IDS.includes(provider.id)
    ? ` ${VERTICALS.find((v) => v.id === ctx.vertical)?.name ?? ""}`.trimEnd() + " "
    : " ";
  const pageTitle =
    override?.title ?? `${provider.name}${verticalQualifier}Review 2026: Cost, Results & Is It Worth It?`;
  const pageDescription = override?.description ?? review.shortSummary;

  // Operator policy (Aug 2026): provider reviews are indexable by default - the
  // goal is impressions across every vertical first. Exception (Sep 2026): thin
  // filler/unmonetized-brand reviews on weight-loss are noindex,follow so crawl
  // budget on the young hub concentrates on the money pages (see
  // NOINDEX_WL_REVIEW_SLUGS); "follow" keeps link equity flowing.
  const url = canonicalUrl(ctx, `/reviews/${slug}`);
  const isThinNoindex = ctx.vertical === "weight-loss" && NOINDEX_WL_REVIEW_SLUGS.has(slug);

  return {
    // Override titles are already brand-led and length-tuned; skip the
    // " | The Top Weight Loss" suffix so the query words aren't truncated.
    title: override ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    robots: ctx.noindex
      ? { index: false, follow: false }
      : isThinNoindex
        ? { index: false, follow: true }
        : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "article",
    },
  };
}

export async function ReviewPageView({ slug, ctx }: { slug: string; ctx: SiteContext }) {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return notFound();

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return notFound();

  const legit = REVIEW_LEGIT[slug];

  // Site's own editorial rating for this provider (same scoring shown on the
  // homepage), keyed off its ranking position. Surfaced visibly on the page.
  // NOTE: intentionally NOT emitted as review/aggregateRating structured data -
  // re-publishing Trustpilot's aggregate and self-assigned editorial scores as
  // Product rating markup to earn SERP stars is a review-snippet policy risk
  // (and earned ~0 clicks per Search Appearance). The ratings remain visible as
  // page content; only the star-generating schema is removed.
  const rankIndex = config.ranking.providerOrder.indexOf(provider.id);
  const editorial =
    rankIndex >= 0
      ? config.ranking.positions[rankIndex] ??
        config.ranking.positions[config.ranking.positions.length - 1]
      : null;
  const editorialStars = editorial ? editorial.score / 2 : 0;
  const editorialFullStars = Math.floor(editorialStars);
  const editorialHasHalf = editorialStars % 1 >= 0.5;

  // Promo popup for this provider, if it has a registered creative.
  const promoPopup = resolvePromoPopup([provider]);

  // Note: we intentionally do NOT emit an AggregateOffer/price in the schema.
  // A structured price can surface in the SERP rich result and goes stale the
  // moment a provider changes pricing, so on-page pricing tables stay the single
  // source of truth and the search snippet carries no price.

  // Review/AggregateRating Product schema deliberately removed - see the note
  // on the editorial rating above. The visible on-page Trustpilot score and
  // editorial rating stay; we just don't request star rich snippets.

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl(ctx, "/") },
      { "@type": "ListItem", position: 2, name: "Reviews", item: canonicalUrl(ctx, "/reviews") },
      { "@type": "ListItem", position: 3, name: `${provider.name} Review`, item: canonicalUrl(ctx, `/reviews/${slug}`) },
    ],
  };

  // FAQ - real, query-shaped questions answered entirely from this review's
  // own researched content (pricing, treatments, best-for, verdict). Powers
  // both the visible FAQ section and the FAQPage schema (rich results / PAA).
  const reviewFaqs = [
    { question: `Is ${provider.name} legit?`, answer: legit?.verdict ?? review.reviewIntro },
    { question: `How much does ${provider.name} cost?`, answer: review.pricingSummary },
    review.treatmentOptions?.length
      ? { question: `What treatments does ${provider.name} offer?`, answer: `${provider.name} offers ${review.treatmentOptions.join(", ")}.` }
      : null,
    review.bestFor?.length
      ? { question: `Who is ${provider.name} best for?`, answer: `${provider.name} is best for ${review.bestFor.join("; ")}.` }
      : null,
    { question: `Is ${provider.name} worth it?`, answer: review.finalVerdict },
    // Extra FAQs are all researched against weight-loss offers, so they only
    // apply there - a provider id shared across verticals (e.g. directmeds on
    // vertical) must not inherit another vertical's prices and shipping claims.
    ...(REVIEW_EXTRA_FAQS[slug] ?? []),
  ].filter((f): f is { question: string; answer: string } => !!f && !!f.answer);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: reviewFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const relatedBattles = (config.battles ?? []).filter(
    (b) => b.provider1Id === provider.id || b.provider2Id === provider.id
  );

  // This provider's own question cluster (is-X-legit / X-cost / X-alternatives)
  // - the highest-intent internal links a review can carry. Rendered only for
  // cluster articles that actually exist in the config.
  const clusterSlugs = [
    { slug: `is-${provider.id}-legit`, label: `Is ${provider.name} legit?` },
    { slug: `${provider.id}-cost`, label: `How much does ${provider.name} cost?` },
    { slug: `${provider.id}-alternatives`, label: `Best ${provider.name} alternatives` },
  ].filter((c) => (config.articles ?? []).some((a) => a.slug === c.slug));

  // Related articles: actually related, not just the first three in the array.
  // Prefer articles that mention this provider (excluding its own cluster,
  // which has a dedicated box below), then fill with the newest guides.
  const clusterSet = new Set(clusterSlugs.map((c) => c.slug));
  const mentions = (a: { slug: string; title: string }) =>
    a.slug.includes(provider.id) || a.title.toLowerCase().includes(provider.name.toLowerCase());
  const nonCluster = (config.articles ?? []).filter((a) => !clusterSet.has(a.slug));
  const relatedArticles = [
    ...nonCluster.filter(mentions),
    ...nonCluster
      .filter((a) => !mentions(a))
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")),
  ].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: hubLink(ctx, "/") },
              { label: "Reviews", href: hubLink(ctx, "/reviews") },
              { label: `${provider.name} Review` },
            ]}
          />

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-[50px] w-[130px] shrink-0 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logo} alt={`${provider.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h1 className="text-[24px] font-bold text-[#191919] sm:text-[28px]">
                  {provider.name} Reviews
                </h1>
                <p className="mt-0.5 text-[14px] text-gray-700">
                  {provider.tagline}
                </p>
                <LastUpdated date={latestUpdate(review.updatedAt)} className="mt-1" />
                {editorial && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < editorialFullStars
                              ? "fill-[#FDB515] text-[#FDB515]"
                              : i === editorialFullStars && editorialHasHalf
                                ? "fill-[#FDB515]/50 text-[#FDB515]"
                                : "fill-gray-300 text-gray-300"
                          )}
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <span className="text-[14px] font-bold text-[#191919]">
                      {editorial.score}/10
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {editorial.label} - our rating
                    </span>
                  </div>
                )}
              </div>
            </div>
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2F80ED] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#1F6BD1] sm:shrink-0"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
          <TrustDisclosure disclaimerHref={hubLink(ctx, "/disclaimer")} />
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">
        {/* Quick summary strip */}
        <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 sm:gap-6">
          {review.trustBadges && review.trustBadges.length > 0 ? (
            review.trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-[13px] text-gray-600">
                <Check className="h-4 w-4 text-emerald-500" strokeWidth={2} />
                {badge}
              </div>
            ))
          ) : (
            <>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Shield className="h-4 w-4 text-[#1A5DB8]" strokeWidth={1.5} />
                Licensed Providers
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Clock className="h-4 w-4 text-[#1A5DB8]" strokeWidth={1.5} />
                Fast Home Delivery
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Users className="h-4 w-4 text-[#1A5DB8]" strokeWidth={1.5} />
                Ongoing Support
              </div>
            </>
          )}
        </div>

        {/* The Bottom Line - the verdict up top, so the answer to "is it worth
            it" doesn't hide at the bottom of the page. */}
        {review.finalVerdict && (
          <div className="mb-8 rounded-2xl border border-[#2F80ED]/20 bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.07em] text-[#1A5DB8]">The bottom line</p>
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.8] text-gray-800" />
          </div>
        )}

        {/* This provider's products, shopping-style (weight-loss catalog only) */}
        {ctx.vertical === "weight-loss" && (
          <div className="mb-8">
            <ProductCarousel
              providers={config.providers}
              title={`${provider.name} products & prices`}
              subtitle="Published prices with their conditions - the whole card links to the provider."
              onlyProviderIds={[provider.id]}
              pageType="review"
              pageUrl={canonicalUrl(ctx, `/reviews/${slug}`)}
            />
          </div>
        )}

        {/* Intro */}
        <div className="mb-8">
          <ReadableProse text={review.reviewIntro} paragraphClassName="text-[16px] leading-[1.8] text-gray-600" />
          {config.experts && config.experts.length > 0 && (
            <div className="mt-5">
              <ExpertByline
                expert={config.experts[0]}
                label="Reviewed by"
              />
            </div>
          )}
        </div>

        {/* Is [brand] legit? - trust block for the "is X legit" query cluster */}
        {legit && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-emerald-50/50 px-6 py-4">
              <Shield className="h-5 w-5 text-emerald-600" strokeWidth={2} />
              <h2 className="text-[18px] font-bold text-[#191919]">
                Is {provider.name} legit?
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[15px] leading-[1.75] text-gray-600">
                {legit.verdict}
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {legit.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {signal}
                  </li>
                ))}
                {provider.trustpilotRating && provider.trustpilotReviewCount && (
                  <li className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    Rated {provider.trustpilotRating}/5 across {provider.trustpilotReviewCount} Trustpilot reviews
                  </li>
                )}
              </ul>
              <p className="mt-4 text-[12px] leading-relaxed text-gray-400">
                &ldquo;Legitimate&rdquo; here means a real, licensed telehealth operation - not a
                guarantee of results. Compounded medications are not FDA-approved brand drugs. Always
                confirm current details and eligibility with the provider.
              </p>
            </div>
          </div>
        )}

        {/* Key Features + Pricing side by side on desktop */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Section title="Key Features">
            <ul className="space-y-2.5">
              {review.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Treatment Options">
            <ul className="space-y-2.5">
              {review.treatmentOptions.map((option) => (
                <li key={option} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F80ED]" />
                  {option}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Pricing */}
        <Section title="Pricing">
          {review.pricingPlans && review.pricingPlans.length > 0 && (
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              {review.pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-gray-200 bg-gray-50/60 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[15px] font-bold text-[#191919]">{plan.name}</h4>
                    {plan.cadence && (
                      <span className="rounded-full bg-[#2F80ED]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#1A5DB8]">
                        {plan.cadence}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-500">{plan.medication}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-[28px] font-extrabold leading-none text-[#191919]">{plan.price}</span>
                    {plan.unit && <span className="text-[14px] font-semibold text-gray-500">{plan.unit}</span>}
                    {plan.regularPrice && (
                      <span className="text-[15px] font-medium text-gray-400 line-through">{plan.regularPrice}</span>
                    )}
                  </div>
                  {plan.regularPrice && (
                    <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                      Sale price
                    </span>
                  )}
                  {plan.highlights && plan.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {plan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          <ReadableProse text={review.pricingSummary} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
        </Section>

        {/* The Top Weight Loss audit - verified-facts card. Registry-gated:
            providers whose data isn't fully verified render nothing. */}
        <ProviderAudit providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* How it works */}
        {review.howItWorks && review.howItWorks.length > 0 && (
          <Section title={`How ${provider.name} Works`}>
            <ol className="space-y-4">
              {review.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2F80ED] text-[13px] font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    {step.timing && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1A5DB8]">
                        {step.timing}
                      </span>
                    )}
                    <p className="text-[15px] font-bold text-[#191919]">{step.title}</p>
                    {step.detail && (
                      <p className="mt-0.5 text-[14px] leading-[1.65] text-gray-600">{step.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* Pros & Cons */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2">
            <div className="p-6 sm:border-r sm:border-gray-100">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
                </div>
                Pros
              </h3>
              <ul className="space-y-2.5">
                {review.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-100 p-6 sm:border-t-0">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-red-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                </div>
                Cons
              </h3>
              <ul className="space-y-2.5">
                {review.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={2} />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mb-6 rounded-xl border border-[#2F80ED]/10 bg-[#2F80ED]/[0.03] p-5 text-center sm:p-6">
          <p className="mb-3 text-[16px] font-bold text-[#191919]">
            Interested in {provider.name}?
          </p>
          <p className="mb-4 text-[13px] text-gray-500">
            Visit their site to check eligibility and current pricing.
          </p>
          <ProviderCta
            href={provider.affiliateUrl}
            providerName={provider.name}
            providerSlug={provider.id}
            pageType="review"
            sourceFlow="provider_review"
            className="inline-flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2F80ED] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#1F6BD1]"
          >
            Visit {provider.name}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </ProviderCta>
        </div>

        {/* Best For */}
        <Section title="Who It's Best For">
          <ul className="space-y-2.5">
            {review.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#1A5DB8]" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Trustpilot Reviews */}
        {(provider.trustpilotReviews?.length ?? 0) > 0 && (
          <div className="mb-6">
            <TrustpilotCarousel
              providerName={provider.name}
              providerLogo={provider.logo}
              reviews={provider.trustpilotReviews!}
              rating={provider.trustpilotRating}
              reviewCount={provider.trustpilotReviewCount}
            />
          </div>
        )}

        {/* Community feedback - real Reddit threads, rendered Reddit-style.
            Each registry entry names the vertical its threads were captured
            for (legacy entries without one are weight-loss research), so the
            block renders only on the matching vertical. */}
        {REVIEW_COMMUNITY_FEEDBACK[slug] &&
          (REVIEW_COMMUNITY_FEEDBACK[slug].vertical ?? "weight-loss") === ctx.vertical && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <div className="mb-2 flex items-center gap-2.5">
              <RedditMark className="h-7 w-7 shrink-0" />
              <h2 className="text-[20px] font-bold text-[#191919]">
                What Reddit says about {provider.name}
              </h2>
            </div>
            <p className="mb-5 text-[14.5px] leading-relaxed text-gray-700">
              {REVIEW_COMMUNITY_FEEDBACK[slug].intro}
            </p>

            <div className="space-y-4">
              {REVIEW_COMMUNITY_FEEDBACK[slug].threads.map((t, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-[#FCFCFC] p-4 sm:p-5">
                  {/* Post header - the Reddit identity line */}
                  <div className="mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4500] text-[10px] font-bold text-white">
                      r/
                    </span>
                    {t.subreddit ? (
                      <>
                        <span className="font-bold text-[#191919]">{t.subreddit}</span>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500">u/{t.author}</span>
                      </>
                    ) : (
                      <span className="font-bold text-[#191919]">u/{t.author}</span>
                    )}
                    {t.age && (
                      <>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-400">{t.age}</span>
                      </>
                    )}
                  </div>

                  {t.title && (
                    <p className="mb-2 text-[15.5px] font-bold leading-snug text-[#191919]">{t.title}</p>
                  )}

                  <div className="space-y-2">
                    {t.body.map((para, j) => (
                      <p key={j} className="text-[13.5px] leading-[1.7] text-gray-600">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Vote / comment pills - only real counts, never estimates */}
                  {(t.upvotes !== undefined || t.commentCount !== undefined) && (
                    <div className="mt-3 flex items-center gap-2">
                      {t.upvotes !== undefined && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-bold text-gray-600">
                          <ArrowBigUp className="h-4 w-4 text-[#FF4500]" strokeWidth={2} />
                          {t.upvotes}
                          <ArrowBigDown className="h-4 w-4 text-gray-400" strokeWidth={2} />
                        </span>
                      )}
                      {t.commentCount !== undefined && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-gray-600">
                          <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                          {t.commentCount} comments
                        </span>
                      )}
                    </div>
                  )}

                  {/* Replies - threaded with the Reddit comment line */}
                  {t.replies && t.replies.length > 0 && (
                    <div className="mt-3 space-y-3 border-l-2 border-gray-200 pl-4">
                      {t.replies.map((r, j) => (
                        <div key={j}>
                          <div className="mb-1 flex items-center gap-1.5 text-[12px]">
                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gray-300 text-[9px] font-bold uppercase text-white">
                              {r.author.charAt(0)}
                            </span>
                            <span className="font-bold text-gray-800">u/{r.author}</span>
                          </div>
                          <p className="text-[13px] leading-[1.65] text-gray-600">{r.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-gray-100 pt-4 text-[14px] leading-relaxed text-gray-700">
              <span className="font-semibold text-[#191919]">The takeaway: </span>
              {REVIEW_COMMUNITY_FEEDBACK[slug].takeaway}
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-gray-400">
              Excerpts from public Reddit posts, lightly trimmed; vote and comment counts shown as
              captured at the time of review. Reddit is a trademark of Reddit, Inc. and is not
              affiliated with this site.
            </p>
          </div>
        )}

        {/* Independent YouTube review - registry-gated, one real video per
            provider, embedded click-to-load so the iframe never weighs on
            initial load. */}
        <YoutubeReviewSection providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* Final Verdict */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
            <h3 className="text-[18px] font-bold text-[#191919]">Final Verdict</h3>
          </div>
          <div className="p-6">
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#2F80ED] text-[15px] font-bold text-white transition-colors hover:bg-[#1F6BD1] sm:w-auto sm:px-8"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
        </div>

        {/* FAQ */}
        {reviewFaqs.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
              <h2 className="text-[18px] font-bold text-[#191919]">
                {provider.name} Review: FAQs
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {reviewFaqs.map((f, i) => (
                <div key={i} className="p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-[#191919]">{f.question}</h3>
                  <p className="text-[14px] leading-[1.7] text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Related content */}
        {(relatedBattles.length > 0 || relatedArticles.length > 0) && (
          <div className="mb-6">
            <h3 className="mb-4 text-[18px] font-bold text-[#191919]">Related</h3>
            <div className="space-y-2">
              {relatedBattles.map((battle) => {
                const otherProvider = config.providers.find(
                  (p) => p.id === (battle.provider1Id === provider.id ? battle.provider2Id : battle.provider1Id)
                );
                return (
                  <Link
                    key={battle.slug}
                    href={hubLink(ctx, `/${battle.slug}`)}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#2F80ED]/30 hover:bg-[#2F80ED]/[0.02]"
                  >
                    <span className="text-[#1A5DB8]">{provider.name} vs {otherProvider?.name}</span>
                    <span className="ml-auto text-[12px] text-gray-400">Compare</span>
                  </Link>
                );
              })}
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={hubLink(ctx, `/articles/${article.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#2F80ED]/30 hover:bg-[#2F80ED]/[0.02]"
                >
                  <span className="truncate">{article.title}</span>
                  <span className="ml-auto shrink-0 text-[12px] text-gray-400">{article.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Provider question cluster - the review's highest-intent internal links */}
        {clusterSlugs.length > 0 && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <h2 className="mb-1 text-[17px] font-bold text-[#191919]">
              More on {provider.name}
            </h2>
            <p className="mb-4 text-[13.5px] text-gray-500">
              The questions people ask before signing up - answered in depth.
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {clusterSlugs.map((c) => (
                <Link
                  key={c.slug}
                  href={hubLink(ctx, `/articles/${c.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-semibold text-[#1A5DB8] transition-colors hover:border-[#2F80ED]/30 hover:bg-[#2F80ED]/[0.02]"
                >
                  <span className="truncate">{c.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        )}

        <SourcesMethodology
          ctx={ctx}
          providers={[{ id: provider.id, name: provider.name }]}
          headingLabel={provider.name}
          kind="review"
        />
      </div>

      {/* Mobile-only promo popup - shown on the provider's own review page when
          it has a registered creative (same once-per-session behavior as on
          comparisons). */}
      {promoPopup && (
        <PromoPopup
          spec={promoPopup}
          href={provider.affiliateUrl}
          position={rankIndex >= 0 ? rankIndex + 1 : undefined}
        />
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-[17px] font-bold text-[#191919]">{title}</h3>
      {children}
    </div>
  );
}
