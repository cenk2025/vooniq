import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Tietosuojaseloste',
  description: 'Miten VOON IQ käsittelee henkilötietoja voon.fi-sivustolla (GDPR, tietosuojalaki 1050/2018).',
  alternates: { canonical: 'https://voon.fi/tietosuoja' },
};

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}
