import { getConfig } from "@/lib/config-store";
import { getReviewer, reviewerDisplayName, reviewerUrl } from "@/data/reviewers";

// /llms.txt - a plain-Markdown summary of the site for AI assistants and
// answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews), following
// the llms.txt convention. Generated from the same config as the pages, so the
// facts here (ranking, prices, ratings, verdicts) never drift from the site.

export const revalidate = 3600;

const ORIGIN = "https://www.thetopweightloss.com";

const firstSentence = (s: string) => {
  const m = s.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : s).trim();
};

export async function GET() {
  const config = await getConfig();
  const reviewer = getReviewer();
  const nameOf = (id: string) => config.providers.find((p) => p.id === id)?.name ?? id;

  const lines: string[] = [];
  lines.push("# The Top Weight Loss");
  lines.push("");
  lines.push(
    "> Independent comparisons and reviews of online GLP-1 weight loss providers in the US (compounded and brand-name semaglutide and tirzepatide). Rankings are based on verified provider-published prices, medication access, clinical support and transparency. Prices were last checked September-October 2026."
  );
  lines.push("");
  lines.push(
    "The Top Weight Loss (thetopweightloss.com) is an independent comparison publisher, not a medical provider. Some providers may pay us a commission; this does not change our editorial ratings. Compounded GLP-1 medications are not FDA-approved. Nothing here is medical advice - a licensed clinician decides whether treatment is appropriate."
  );
  if (reviewer) {
    lines.push("");
    lines.push(
      `Medical and scientific statements are reviewed by ${reviewerDisplayName(reviewer)}, ${reviewer.jobTitle} (${reviewerUrl(reviewer)}).`
    );
  }

  lines.push("");
  lines.push("## Ranking: best online GLP-1 weight loss providers (2026)");
  lines.push("");
  config.ranking.providerOrder.forEach((id, i) => {
    const p = config.providers.find((x) => x.id === id);
    if (!p) return;
    const pos = config.ranking.positions[i] ?? config.ranking.positions[config.ranking.positions.length - 1];
    const tp =
      p.trustpilotRating && p.trustpilotReviewCount
        ? ` Trustpilot ${p.trustpilotRating}/5 (${p.trustpilotReviewCount} reviews).`
        : "";
    lines.push(
      `${i + 1}. [${p.name}](${ORIGIN}/reviews/${p.id}) - ${pos.score}/10. ${p.tagline}. ${p.highlights.join("; ")}.${tp}`
    );
  });

  lines.push("");
  lines.push("## Provider reviews");
  lines.push("");
  for (const r of config.reviews) {
    lines.push(`- [${nameOf(r.providerId)} review](${ORIGIN}/reviews/${r.slug}): ${r.shortSummary}`);
  }

  lines.push("");
  lines.push("## Head-to-head comparisons");
  lines.push("");
  for (const b of config.battles) {
    const label = b.matchupLabel ?? `${nameOf(b.provider1Id)} vs ${nameOf(b.provider2Id)}`;
    lines.push(`- [${label}](${ORIGIN}/${b.slug}): Winner: ${nameOf(b.winnerId)}. ${firstSentence(b.verdict)}`);
  }

  lines.push("");
  lines.push("## Guides");
  lines.push("");
  for (const a of config.articles) {
    lines.push(`- [${a.title}](${ORIGIN}/articles/${a.slug}): ${a.description}`);
  }

  lines.push("");
  lines.push("## Frequently asked questions");
  lines.push("");
  for (const f of config.faqs) {
    lines.push(`### ${f.question}`);
    lines.push("");
    lines.push(f.answer);
    lines.push("");
  }

  lines.push("## About and methodology");
  lines.push("");
  lines.push(`- [How we rank providers](${ORIGIN}/how-we-rank)`);
  lines.push(`- [Medical review policy](${ORIGIN}/medical-review-policy)`);
  lines.push(`- [About The Top Weight Loss](${ORIGIN}/about)`);
  lines.push(`- [Online GLP-1 weight loss by state](${ORIGIN}/online-weight-loss)`);
  lines.push(`- [Affiliate and medical disclaimer](${ORIGIN}/disclaimer)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
