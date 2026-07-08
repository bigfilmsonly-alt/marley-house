import type { Metadata, Viewport } from 'next';
import { fraunces, splineSans, inter } from '@/lib/fonts';
import TrackingScripts, { GTMNoScript } from '@/components/TrackingScripts';
import { EntityGraph, FAQSchema } from '@/components/StructuredData';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'The Marley Group — Heritage, Craft & Legacy',
    template: '%s | The Marley Group',
  },
  description: 'The Marley Group — one hub for every Marley brand. Lion Order, Marley Coffee, RoMarley Beach House. Heritage, craft, and legacy by Rohan Marley.',
  keywords: ['Rohan Marley', 'The Marley Group', 'Lion Order', 'Marley Coffee', 'Bob Marley', 'RoMarley Beach House', 'YG Marley'],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'The Marley Group',
    title: 'The Marley Group — Heritage, Craft & Legacy',
    description: 'Heritage, craft, and legacy — the family holding of Rohan Marley.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Marley Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Marley Group — Heritage, Craft & Legacy',
    description: 'Heritage, craft, and legacy — the family holding of Rohan Marley.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/brand/lion-crest-icon.png',
    apple: '/brand/lion-crest-icon.png',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0B0805',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${splineSans.variable} ${inter.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="preconnect" href="https://vumbnail.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://vumbnail.com" />
        <EntityGraph />
        <FAQSchema />
      </head>
      <body className="h-full">
        <GTMNoScript />
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
