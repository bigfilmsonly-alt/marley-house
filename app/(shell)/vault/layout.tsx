import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music — The Frequency Never Stops',
  description: 'Stream the Marley music legacy — Bob Marley & The Wailers, YG Marley, Ziggy, Damian, Stephen Marley and the whole family on Spotify, Apple Music, Tidal, and more.',
  alternates: { canonical: '/vault' },
  openGraph: {
    title: 'Music — The Frequency Never Stops | Marley House',
    description: 'Stream the Marley music legacy across every platform.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Marley House Music' }],
  },
};

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
