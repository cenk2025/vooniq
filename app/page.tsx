'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
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
        <div id="top" />
        <HeroSection />

        <div className="space-y-32">
          <ServicesSection />
          <UseCasesSection />
          <ProcessSection />
          <ProofSection />
          <PricingSection />
          <ContactSection />
          <FAQSection />
        </div>
      </main>

      <Footer />
      <CookieConsent />
      <Chatbot />

      {/* Global backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
