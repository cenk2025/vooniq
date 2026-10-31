import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Saavutettavuusseloste',
  description: 'Miten voon.fi täyttää saavutettavuusvaatimukset (WCAG 2.1 AA), tunnetut puutteet ja palautteen antaminen.',
  alternates: { canonical: 'https://voon.fi/saavutettavuus' },
};

export default function AccessibilityPage() {
  return <LegalPage doc="accessibility" />;
}
