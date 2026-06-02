import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lion Order — Awaken the Lion',
  description: 'Lion Order is a Rastafari-rooted movement of roots luxury — cannabis, manga, lifestyle, and cultural connectivity. Founded by Rohan Marley. To awaken the lion in everyone.',
  alternates: { canonical: '/lion-order' },
  openGraph: {
    title: 'Lion Order — Awaken the Lion | Marley House',
    description: 'Roots luxury. Cannabis. Manga. Culture. Founded by Rohan Marley.',
    images: [{ url: '/lion-order/crest-gold.jpg', width: 500, height: 500, alt: 'Lion Order Crest' }],
  },
};

export default function LionOrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
