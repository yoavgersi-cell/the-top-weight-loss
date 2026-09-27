import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAnalytics } from "@/components/google-analytics";
import { hreflangLanguages } from "@/lib/regions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.thetopweightloss.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Top Weight Loss - Compare the Best Online GLP-1 Weight Loss Providers",
    template: "%s | The Top Weight Loss",
  },
  description:
    "Compare the best online GLP-1 weight loss programs of 2026 - licensed telehealth providers of semaglutide and tirzepatide ranked by verified price, medication access, clinical support and transparency.",
  keywords: [
    "online weight loss",
    "GLP-1 weight loss",
    "semaglutide online",
    "tirzepatide online",
    "compounded semaglutide",
    "Wegovy online",
    "Zepbound online",
    "best GLP-1 providers",
  ],
  openGraph: {
    title: "The Top Weight Loss - Compare the Best Online GLP-1 Weight Loss Providers",
    description:
      "Independent, side-by-side comparisons of top online GLP-1 weight loss providers - ranked on price, medication and support.",
    type: "website",
    siteName: "The Top Weight Loss",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Top Weight Loss - Compare the Best Online GLP-1 Weight Loss Providers",
    description:
      "Independent, side-by-side comparisons of top online GLP-1 weight loss providers.",
  },
  other: {
    "geo.region": "US",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
    "content-language": "en-US",
  },
  alternates: {
    canonical: SITE_URL,
    languages: hreflangLanguages(SITE_URL, "/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Top Weight Loss",
              url: SITE_URL,
              areaServed: { "@type": "Country", name: "United States" },
              description:
                "Independent guides and provider comparisons for online GLP-1 weight loss - expert reviews, verified pricing research, and side-by-side comparisons.",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Top Weight Loss",
              url: SITE_URL,
              description:
                "Compare trusted online GLP-1 weight loss providers side by side.",
            }),
          }}
        />
        <MetaPixel />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
