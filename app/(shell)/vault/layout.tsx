import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Vault — The Legacy Lives Here',
  description: 'The Marley House legacy vault — photos, journals, interviews, audio, video, lessons, and wisdom cards. The most valuable asset.',
  alternates: { canonical: '/vault' },
  openGraph: {
    title: 'The Vault — The Legacy Lives Here | Marley House',
    description: 'The most valuable asset. Explore the Marley legacy archive.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Marley House Vault' }],
  },
};

export default function VaultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
