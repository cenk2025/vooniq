import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Käyttöehdot',
  description: 'voon.fi-sivuston käyttöehdot.',
  alternates: { canonical: 'https://voon.fi/kayttoehdot' },
};

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}
