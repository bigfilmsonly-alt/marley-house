import type { MetadataRoute } from 'next';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* ── Standard crawlers ─────────────────────────────────── */
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },

      /* ── AI bots — explicitly welcome on key content ───────── */
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/about',
          '/rohan-marley',
          '/rohan-marley/',
          '/family',
          '/the-marleys',
          '/marley-coffee',
          '/marley-coffee/',
          '/lion-order',
          '/lion-order/',
          '/romarley-beach-house',
          '/romarley-beach-house/',
          '/music',
          '/music/',
          '/foundation',
          '/foundation/',
          '/education',
          '/faq',
          '/glossary',
          '/cities/',
        ],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: [
          '/',
          '/about',
          '/rohan-marley',
          '/rohan-marley/',
          '/family',
          '/the-marleys',
          '/marley-coffee',
          '/marley-coffee/',
          '/lion-order',
          '/lion-order/',
          '/romarley-beach-house',
          '/romarley-beach-house/',
          '/music',
          '/music/',
          '/foundation',
          '/foundation/',
          '/education',
          '/faq',
          '/glossary',
          '/cities/',
        ],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: [
          '/',
          '/about',
          '/rohan-marley',
          '/rohan-marley/',
          '/family',
          '/the-marleys',
          '/marley-coffee',
          '/marley-coffee/',
          '/lion-order',
          '/lion-order/',
          '/romarley-beach-house',
          '/romarley-beach-house/',
          '/music',
          '/music/',
          '/foundation',
          '/foundation/',
          '/education',
          '/faq',
          '/glossary',
          '/cities/',
        ],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
