import type { MetadataRoute } from "next";

const SITE_URL = "https://www.thetopweightloss.com";

// AI search and answer-engine crawlers are allowed explicitly (not just via the
// wildcard) so they can read, cite and link the comparisons: OpenAI (search +
// on-demand fetch + training), Perplexity, Anthropic, Google's Gemini/AI
// Overviews opt-in token, Apple Intelligence, Microsoft/Bing (Copilot) and
// Common Crawl (used by many model builders).
const AI_CRAWLERS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

const DISALLOW = ["/admin", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
