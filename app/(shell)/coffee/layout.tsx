import type { Metadata } from 'next';
import { ProductSchemas } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Coffee — From Seed to Soul',
  description: 'Explore the Marley Coffee collection — Get Up Stand Up, One Love, Buffalo Soldier, Lively Up, Simmer Down, Mystic Morning, and Jamaican Blue Mountain. Fairtrade certified, one tree planted.',
  alternates: { canonical: '/coffee' },
  openGraph: {
    title: 'Coffee — From Seed to Soul | Marley House',
    description: 'Explore the Marley Coffee collection. Fairtrade certified, ethically sourced.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Marley Coffee' }],
  },
};

export default function CoffeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductSchemas />
      {children}
    </>
  );
}
