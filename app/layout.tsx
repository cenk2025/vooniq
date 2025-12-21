import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vooniq.com";
const siteName = "Voon IQ — AI & Technology for Business";
const siteDescription = "Helping Finnish companies adopt AI safely and fast: automation, analytics, copilots, and pragmatic implementations. Expert AI consulting and implementation services in Finland.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Voon IQ`
  },
  description: siteDescription,
  keywords: [
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
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voon IQ - AI & Technology for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@vooniq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192.png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
    languages: {
      'fi': siteUrl,
      'en': `${siteUrl}/en`,
    },
  },
  category: "technology",
  classification: "Business Services, AI Consulting, Technology Consulting",
  other: {
    'google-site-verification': 'your-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200`}
      >
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
