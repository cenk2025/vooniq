import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
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

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
});

// Runs before paint so the saved theme is applied without a flash.
const themeInitScript = `try{var m=localStorage.getItem('theme-mode');var l=m==='light'||((m==='system'||m==='auto')&&!matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(l?'light':'dark')}catch(e){document.documentElement.classList.add('dark')}`;

const siteUrl = "https://voon.fi";
const siteName = "Voon IQ — Tekoälykonsultointi ja automaatio yrityksille";
const siteDescription = "Voon IQ auttaa suomalaisia yrityksiä ottamaan tekoälyn käyttöön turvallisesti ja nopeasti: tekoälyautomaatio, copilotit ja analytiikka. Pilotti 30–60 päivässä. AI consulting in Finland.";

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
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voon IQ — tekoäly ja automaatio yrityksille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
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
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  classification: "Business Services, AI Consulting, Technology Consulting",
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
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} font-sans antialiased bg-bg text-fg`}
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
