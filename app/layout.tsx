import type { Metadata, Viewport } from 'next';
import { fraunces, splineSans } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marley House',
  description: 'Coffee is the invitation. Belonging is the product.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0c0a08',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${splineSans.variable} h-full`}
    >
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
