import type { Metadata, Viewport } from 'next';
import { fraunces, splineSans } from '@/lib/fonts';
import TrackingScripts, { GTMNoScript } from '@/components/TrackingScripts';
import { OrganizationSchema, PersonSchema, WebSiteSchema, FAQSchema } from '@/components/StructuredData';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Lion Order · R-M — The Maison',
    template: '%s | Lion Order · R-M',
  },
  description: 'The maison of Rohan Marley — heritage, craft, and legacy. Lion Order, Marley Coffee, and the houses that carry the name forward.',
  keywords: ['Rohan Marley', 'Lion Order', 'Marley Coffee', 'Tuff Gong', 'Bob Marley', 'RoMarley Beach House', 'House of Marley'],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Lion Order · R-M',
    title: 'Lion Order · R-M — The Maison',
    description: 'Heritage, craft, and legacy — the maison of Rohan Marley.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Lion Order — R-M' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lion Order · R-M — The Maison',
    description: 'Heritage, craft, and legacy — the maison of Rohan Marley.',
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
  themeColor: '#0b0805',
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
      <head>
        <OrganizationSchema />
        <PersonSchema />
        <WebSiteSchema />
        <FAQSchema />
      </head>
      <body className="h-full overflow-hidden">
        <GTMNoScript />
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
