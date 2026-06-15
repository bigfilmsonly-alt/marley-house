import { products } from '@/content/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

// Canonical entity @ids — stable across all pages
const IDS = {
  org: `${SITE_URL}/#organization`,
  rohan: 'https://rohanmarley.com/#person',
  website: `${SITE_URL}/#website`,
  marleyCoffee: 'https://marleycoffee.com/#organization',
  lionOrder: 'https://lionorder.com/#organization',
  beachHouse: 'https://romarleybeachhouse.com/#organization',
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function EntityGraph() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      // Parent Organization
      {
        '@type': 'Organization',
        '@id': IDS.org,
        name: 'The Marley Group',
        alternateName: ['Lion Order', 'Marley House', 'R-M — The Maison'],
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/lion-crest-icon.png`, width: 512, height: 512 },
        image: `${SITE_URL}/og-image.png`,
        description: 'The Marley Group is the family holding of Rohan Marley encompassing Marley Coffee, Lion Order, RoMarley Beach House, and ROOTS Media. Heritage, craft, and legacy.',
        foundingDate: '2022',
        founder: { '@id': IDS.rohan },
        subOrganization: [
          { '@id': IDS.marleyCoffee },
          { '@id': IDS.lionOrder },
          { '@id': IDS.beachHouse },
        ],
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
      },
      // Person — Rohan Marley
      {
        '@type': 'Person',
        '@id': IDS.rohan,
        name: 'Rohan Marley',
        alternateName: 'Rohan Anthony Marley',
        url: 'https://rohananthonymarley.com/',
        image: `${SITE_URL}/brand/gallery/01.jpg`,
        jobTitle: 'Founder & Chairman',
        worksFor: { '@id': IDS.org },
        description: 'Jamaican-American entrepreneur, former University of Miami linebacker, founder of The Marley Group, Marley Coffee, and Lion Order. Son of Bob Marley and Janet Hunt.',
        birthPlace: { '@type': 'Place', name: 'Kingston, Jamaica' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Miami', sameAs: 'https://en.wikipedia.org/wiki/University_of_Miami' },
        parent: { '@type': 'Person', name: 'Bob Marley', sameAs: 'https://en.wikipedia.org/wiki/Bob_Marley' },
        knowsAbout: ['Coffee production', 'Cannabis industry', 'Hospitality', 'Rastafari', 'American football', 'Brand building', 'Jamaican culture'],
        sameAs: [
          'https://en.wikipedia.org/wiki/Rohan_Marley',
          'https://www.wikidata.org/wiki/Q7360215',
          'https://www.instagram.com/romarley/',
          'https://www.linkedin.com/in/rohanmarley',
          'https://www.youtube.com/@MrRohanmarley',
          'https://rohananthonymarley.com/',
        ],
      },
      // Sub-Org — Marley Coffee
      {
        '@type': 'Organization',
        '@id': IDS.marleyCoffee,
        name: 'Marley Coffee',
        url: 'https://marleycoffee.com/',
        description: 'Single-origin and ethically sourced coffee from the Marley family. Fairtrade certified, sustainably grown in the Blue Mountains of Jamaica.',
        parentOrganization: { '@id': IDS.org },
        founder: { '@id': IDS.rohan },
        sameAs: ['https://www.instagram.com/marleycoffee/', 'https://www.facebook.com/MarleyCoffee/'],
      },
      // Sub-Org — Lion Order
      {
        '@type': 'Organization',
        '@id': IDS.lionOrder,
        name: 'Lion Order',
        url: 'https://lionorder.com/',
        description: 'A Rastafari-rooted movement of roots luxury — cannabis, manga, lifestyle, and cultural connectivity. Founded by Rohan Marley.',
        parentOrganization: { '@id': IDS.org },
        founder: { '@id': IDS.rohan },
        sameAs: ['https://www.instagram.com/lionorder/'],
      },
      // Sub-Org — RoMarley Beach House
      {
        '@type': ['LodgingBusiness', 'Organization'],
        '@id': IDS.beachHouse,
        name: 'RoMarley Beach House',
        url: 'https://www.romarleybeachhouse.com/',
        description: 'A beachfront hospitality experience by Rohan Marley — where the Caribbean meets luxury.',
        parentOrganization: { '@id': IDS.org },
        founder: { '@id': IDS.rohan },
        sameAs: ['https://www.instagram.com/romarleybeachhouse/'],
      },
      // WebSite
      {
        '@type': 'WebSite',
        '@id': IDS.website,
        name: 'The Marley Group',
        url: SITE_URL,
        publisher: { '@id': IDS.org },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/ask?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return <JsonLd data={data} />;
}

export function ProductSchemas() {
  const schemas = products.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: { '@id': IDS.marleyCoffee },
    description: `${p.roast} roast — ${p.notes}`,
    offers: {
      '@type': 'Offer',
      price: p.price.toFixed(2),
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      seller: { '@id': IDS.marleyCoffee },
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
    { q: 'What is The Marley Group?', a: 'The Marley Group is the family holding of Rohan Marley encompassing Marley Coffee, Lion Order, RoMarley Beach House, and ROOTS Media. Heritage, craft, and legacy — one hub for every Marley brand.' },
    { q: 'Who is Rohan Marley?', a: 'Rohan Marley is a Jamaican-American entrepreneur, former University of Miami linebacker, and founder of The Marley Group, Marley Coffee, and Lion Order. Son of Bob Marley, he carries the family legacy forward through heritage, craft, and culture.' },
    { q: 'What is Marley Coffee?', a: 'Marley Coffee is single-origin, sustainably sourced coffee from the Blue Mountains of Jamaica. Fairtrade certified. Visit marleycoffee.com for purchases.' },
    { q: 'What is Lion Order?', a: 'Lion Order is a Rastafari-rooted luxury lifestyle brand founded by Rohan Marley — encompassing cannabis, manga, cultural connectivity, and consciousness.' },
    { q: 'How can I connect with The Marley Group?', a: 'Join the Inner Circle through the homepage — no incentives, no noise. For partnerships and wholesale, use the contact form.' },
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

  return <JsonLd data={data} />;
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

  return <JsonLd data={data} />;
}
