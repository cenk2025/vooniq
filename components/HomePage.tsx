'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { IntroSection } from '@/components/IntroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { BusinessSection } from '@/components/BusinessSection';
import { AIServicesSection } from '@/components/AIServicesSection';
import { PublicSection } from '@/components/PublicSection';
import { FounderSection } from '@/components/FounderSection';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { NewsletterNotice } from '@/components/Newsletter';
import Chatbot from '@/components/Chatbot';

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main id="main">
        <Hero />
        <IntroSection />
        <ProductsSection />
        <BusinessSection />
        <AIServicesSection />
        <PublicSection />
        <FounderSection />
        <ContactSection />
        <FAQSection />
      </main>

      <Footer />
      <CookieConsent />
      <NewsletterNotice />
      <Chatbot />
    </div>
  );
}
