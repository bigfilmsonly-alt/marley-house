import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watch — Stories in Motion',
  description: 'Watch every Rohan Marley video — House Sessions, brand films, podcasts, interviews, football, music legacy, and more. Every video plays on tap.',
  alternates: { canonical: '/watch' },
  openGraph: {
    title: 'Watch — Stories in Motion | Marley House',
    description: 'Every video featuring Rohan Marley — tap to play.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Marley House Watch' }],
  },
};

export default function WatchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
