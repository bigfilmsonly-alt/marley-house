import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Shop Marley Coffee',
  description:
    'Browse and buy Marley Coffee blends. Single-origin, Fairtrade certified coffee from Rohan Marley.',
  alternates: { canonical: 'https://marley-house.vercel.app/coffee' },
  robots: { index: false, follow: true },
};

export default function ShopRedirect() {
  redirect('/coffee');
}
