import type { Metadata, Viewport } from 'next';
import { fraunces, splineSans } from '@/lib/fonts';
import TrackingScripts, { GTMNoScript } from '@/components/TrackingScripts';
import { OrganizationSchema, WebSiteSchema, FAQSchema } from '@/components/StructuredData';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Rohan Marley — The Maison',
    template: '%s | Rohan Marley',
  },
  description: 'The maison of Rohan Marley — heritage, craft, and legacy. Marley House, Lion Order, and the houses that carry the name forward.',
  keywords: ['Rohan Marley', 'Marley Coffee', 'Lion Order', 'Marley House', 'Tuff Gong', 'Bob Marley', 'RoMarley Beach House'],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Rohan Marley',
    title: 'Rohan Marley — The Maison',
    description: 'The maison of Rohan Marley — heritage, craft, and legacy.',
    images: [{ url: '/rhr-logo.png', width: 1200, height: 630, alt: 'Marley House' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Marley — The Maison',
    description: 'Heritage, craft, and legacy — the maison of Rohan Marley.',
    images: ['/rhr-logo.png'],
  },
  icons: {
    icon: '/rhr-logo.png',
    apple: '/rhr-logo.png',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#f7f3ea',
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
