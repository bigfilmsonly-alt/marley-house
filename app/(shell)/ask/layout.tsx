import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ask the House — Wisdom of the House',
  description: 'Ask the House about legacy, fire, coffee, music, or anything that lives in these walls. An AI-powered archive that speaks as the house itself.',
  alternates: { canonical: '/ask' },
  openGraph: {
    title: 'Ask the House — Wisdom of the House | Marley House',
    description: 'Ask about legacy, fire, coffee, music, or anything that lives in these walls.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Marley House Ask' }],
  },
};

export default function AskLayout({ children }: { children: React.ReactNode }) {
  return children;
}
