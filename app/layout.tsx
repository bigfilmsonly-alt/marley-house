import type { Metadata, Viewport } from 'next';
import { fraunces, splineSans } from '@/lib/fonts';
import TrackingScripts, { GTMNoScript } from '@/components/TrackingScripts';
import { OrganizationSchema, WebSiteSchema, FAQSchema } from '@/components/StructuredData';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: {
    default: 'Marley House — Coffee is the Invitation',
    template: '%s | Marley House',
  },
  description: 'A digital home for the Marley legacy — coffee, music, story, and community under one roof. Coffee is the invitation. Belonging is the product.',
  keywords: ['Marley Coffee', 'Rohan Marley', 'coffee', 'legacy', 'Marley House', 'Lion Order', 'Tuff Gong', 'Bob Marley'],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Marley House',
    title: 'Marley House — Coffee is the Invitation',
    description: 'A digital home for the Marley legacy — coffee, music, story, and community under one roof.',
    images: [{ url: '/rhr-logo.png', width: 1200, height: 630, alt: 'Marley House' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marley House — Coffee is the Invitation',
    description: 'A digital home for the Marley legacy — coffee, music, story, and community.',
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
  themeColor: '#0A0A0A',
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
