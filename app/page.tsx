import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';

// Canonical and robots live here, not in the root layout, so that 404 pages
// don't inherit a canonical pointing at the homepage or an "index" directive.
export const metadata: Metadata = {
  alternates: { canonical: 'https://voon.fi' },
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
};

export default function Page() {
  return <HomePage />;
}
