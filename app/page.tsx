'use client';

import { Header } from '@/components/Header';
import { ScrollHeroSection } from '@/components/ScrollHeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { UseCasesSection } from '@/components/UseCasesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProofSection } from '@/components/ProofSection';
import { PricingSection } from '@/components/PricingSection';
import { ContactSection } from '@/components/ContactSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <main>
        <ScrollHeroSection />
        <ServicesSection />
        <UseCasesSection />
        <ProcessSection />
        <ProofSection />
        <PricingSection />
        <ContactSection />
        <FAQSection />
      </main>

      <Footer />
      <CookieConsent />
      <Chatbot />
    </div>
  );
}
