import { products } from '@/content/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marley House',
    url: SITE_URL,
    logo: `${SITE_URL}/marley-logo.png`,
    description: 'Coffee is the invitation. Belonging is the product. A digital home for the Marley legacy — coffee, music, story, and community.',
    sameAs: [
      'https://www.instagram.com/marleycoffee/',
      'https://www.instagram.com/romarley/',
      'https://www.facebook.com/MarleyCoffee/',
      'https://www.linkedin.com/in/rohanmarley',
      'https://lionorder.com/',
    ],
    founder: {
      '@type': 'Person',
      name: 'Rohan Marley',
      url: 'https://www.instagram.com/romarley/',
    },
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
    name: 'Marley House',
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
      seller: { '@type': 'Organization', name: 'Marley House' },
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
    { q: 'What is Marley House?', a: 'Marley House is a digital home for the Marley legacy — coffee, music, story, and community under one roof. Coffee is the invitation. Belonging is the product.' },
    { q: 'Is the coffee store real?', a: 'The store is currently a prototype experience showcasing real Marley Coffee blends. Visit marleycoffee.com for live purchases.' },
    { q: 'Who is behind Marley House?', a: 'Marley House is built around the vision of Rohan Marley, connecting the coffee, music, and lifestyle legacy of the Marley family.' },
    { q: 'What is Ask the House?', a: 'Ask the House is an AI-powered archive that speaks as the house itself — sharing wisdom about legacy, fire, coffee, music, and family.' },
    { q: 'How can I partner with Marley House?', a: 'Use the contact form for wholesale, press, or partnership inquiries. Someone from the House will respond within 48 hours.' },
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
