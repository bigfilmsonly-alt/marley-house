import { products } from '@/content/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lion Order',
    alternateName: 'Rohan Marley — The Maison',
    url: SITE_URL,
    logo: `${SITE_URL}/brand/lion-crest-icon.png`,
    description: 'The maison of Rohan Marley — heritage, craft, and legacy. Lion Order, Marley Coffee, and the houses that carry the name forward.',
    sameAs: [
      'https://www.instagram.com/romarley/',
      'https://www.instagram.com/lionorder/',
      'https://www.instagram.com/marleycoffee/',
      'https://www.facebook.com/MarleyCoffee/',
      'https://www.linkedin.com/in/rohanmarley',
      'https://lionorder.com/',
      'https://marleycoffee.com/',
      'https://www.youtube.com/@MrRohanmarley',
    ],
    founder: {
      '@type': 'Person',
      name: 'Rohan Marley',
      url: 'https://www.instagram.com/romarley/',
      jobTitle: 'Founder',
      sameAs: [
        'https://www.instagram.com/romarley/',
        'https://www.linkedin.com/in/rohanmarley',
        'https://www.youtube.com/@MrRohanmarley',
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohan Marley',
    url: 'https://www.instagram.com/romarley/',
    jobTitle: 'Founder, Lion Order',
    description: 'Entrepreneur, founder of Lion Order and Marley Coffee. Son of Bob Marley. Heritage, craft, and legacy.',
    sameAs: [
      'https://www.instagram.com/romarley/',
      'https://www.linkedin.com/in/rohanmarley',
      'https://www.youtube.com/@MrRohanmarley',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lion Order — R-M',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/ask?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductSchemas() {
  const schemas = products.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: { '@type': 'Brand', name: 'Marley Coffee' },
    description: `${p.roast} roast — ${p.notes}`,
    offers: {
      '@type': 'Offer',
      price: p.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      seller: { '@type': 'Organization', name: 'Lion Order' },
    },
    ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
  }));

  return (
    <>
      {schemas.map((s) => (
        <script
          key={s.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

export function FAQSchema() {
  const faqs = [
    { q: 'What is Lion Order?', a: 'Lion Order is a luxury lifestyle brand founded by Rohan Marley — rooted in heritage, healing, and consciousness. The maison encompasses coffee, cannabis, hospitality, and cultural storytelling.' },
    { q: 'Who is Rohan Marley?', a: 'Rohan Marley is an entrepreneur, former athlete, and founder of Lion Order and Marley Coffee. Son of Bob Marley, he carries the family legacy forward through heritage, craft, and culture.' },
    { q: 'What is Marley Coffee?', a: 'Marley Coffee is single-origin, sustainably sourced coffee from the Marley family estate in the Blue Mountains of Jamaica. Visit marleycoffee.com for live purchases.' },
    { q: 'What is the Brand Book?', a: 'The Lion Order Brand Book is a 65-page guide to the visual identity, guidelines, and creative direction of the maison.' },
    { q: 'How can I connect with the maison?', a: 'Join the House through the Connect tab — no incentives, no noise. Just the inner circle. For partnerships, use the contact form.' },
  ];

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
