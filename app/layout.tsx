import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

// Runs before paint so the saved theme is applied without a flash.
// No saved choice means 'system'.
const themeInitScript = `try{var m=localStorage.getItem('theme-mode');var d=m==='dark'||(m!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light')}catch(e){document.documentElement.classList.add('light')}`;

const siteUrl = "https://voon.fi";
const siteName = "VOON IQ — Osaaminen näkyviin";
const siteDescription = "VOON IQ on jyväskyläläinen tekoälystartup: SkillPath, Talent Factory, BizPulse ja Nordway tunnistavat osaamisen ja näyttävät polun työhön, koulutukseen ja kasvuun. Lisäksi tekoälypalvelut yrityksille.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Voon IQ`
  },
  description: siteDescription,
  keywords: [
    "osaamisen tunnistaminen",
    "ESCO",
    "SkillPath",
    "Talent Factory",
    "BizPulse",
    "Nordway",
    "työllisyyspalvelut",
    "kotoutuminen",
    "AI consulting Finland",
    "tekoäly konsultointi",
    "AI implementation",
    "tekoäly toteutus",
    "AI automation",
    "tekoäly automaatio",
    "AI analytics",
    "tekoäly analytiikka",
    "AI copilot",
    "tekoäly assistentti",
    "business AI",
    "yritys tekoäly",
    "ChatGPT for business",
    "GPT-4",
    "Claude AI",
    "LLM implementation",
    "machine learning Finland",
    "data science consulting",
    "AI strategy",
    "digital transformation",
    "Voon IQ",
    "Voon Oy"
  ],
  authors: [{ name: "Voon IQ" }],
  creator: "Voon IQ",
  publisher: "Voon Oy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VOON IQ — Osaaminen näkyviin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
  classification: "AI software, Skills recognition, Employment services, AI consulting",
  applicationName: "Voon IQ",
  // Only emitted once a real code is set in GOOGLE_SITE_VERIFICATION.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-bg text-fg`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <StructuredData />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
