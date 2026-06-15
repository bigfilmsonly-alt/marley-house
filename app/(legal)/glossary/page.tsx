import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Glossary',
  description:
    'Definitions of key terms used across The Marley Group — including cannabis, coffee, business, and Rastafari terminology.',
  alternates: { canonical: `${SITE_URL}/glossary` },
};

const terms: { term: string; def: string }[] = [
  { term: 'Blue Mountain', def: 'A premium coffee-growing region in eastern Jamaica. Marley Coffee sources estate-grown beans from the Blue Mountain range, known worldwide for mild flavor, bright acidity, and clean finish.' },
  { term: 'Seed-to-Cup', def: 'A supply-chain philosophy in which a single entity oversees every stage — planting, harvesting, processing, roasting, and distribution — ensuring quality and traceability.' },
  { term: 'Single Origin', def: 'Coffee sourced from one specific region, farm, or lot, allowing the drinker to taste the terroir of a particular place.' },
  { term: 'Terpene', def: 'Aromatic organic compounds found in cannabis (and many plants) that influence flavor, aroma, and the character of each strain.' },
  { term: 'Indica / Sativa / Hybrid', def: 'Traditional cannabis categories. Indica strains are associated with relaxation, sativa with energy, and hybrids combine traits of both. Effects vary by individual.' },
  { term: 'Pre-Roll', def: 'A ready-to-smoke cannabis joint, professionally rolled and packaged. Lion Order pre-rolls use whole flower, never trim.' },
  { term: 'Edible', def: 'A cannabis-infused food product — gummies, chocolates, or beverages — offering a smoke-free consumption method with measured dosing.' },
  { term: 'COA (Certificate of Analysis)', def: 'A lab report verifying the cannabinoid content, terpene profile, and safety testing of a cannabis product. All Lion Order products carry a COA.' },
  { term: 'Ital', def: 'A Rastafari dietary practice emphasizing natural, unprocessed, plant-based foods. The Ital philosophy informs the sourcing standards across Marley Group brands.' },
  { term: 'Nyabinghi', def: 'A Rastafari order and ceremonial tradition centered on drumming, chanting, and communal reasoning. It is one of the spiritual foundations referenced in The Archive.' },
  { term: 'Rastafari', def: 'A spiritual and cultural movement originating in Jamaica in the 1930s, emphasizing African identity, natural living, and resistance to oppression. It is central to the Marley family philosophy.' },
  { term: 'Inner Circle', def: 'The Marley Group\'s membership community. Members receive first access to drops, events, exclusive content, and the eight-episode masterclass series.' },
  { term: 'The Marley Group', def: 'The family holding company founded by Rohan Marley, uniting Marley Coffee, Lion Order, RoMarley Beach House, ROOTS Media, and The Marley Group Foundation under one enterprise.' },
  { term: 'Holding Company', def: 'A parent entity that owns controlling interests in subsidiary companies. The Marley Group functions as a holding company for all Marley-led brands.' },
  { term: 'Wholesale', def: 'The sale of goods in bulk to retailers, distributors, or other businesses at a discount from the retail price. See Wholesale Terms for Marley Group policies.' },
];

export default function GlossaryPage() {
  return (
    <article>
      <h1 className="text-[var(--gold)] font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
        Glossary
      </h1>
      <p className="text-[var(--dim)] text-sm mb-10">
        Key terms used across The Marley Group — cannabis, coffee, business, and culture.
      </p>

      <div className="space-y-6">
        {terms.map(({ term, def }) => (
          <div key={term} className="border-b border-[var(--line)] pb-4">
            <h2 className="text-[var(--cream)] font-bold text-sm mb-1">{term}</h2>
            <p className="text-[var(--cream)] text-sm leading-relaxed opacity-80">{def}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          This glossary is provided for informational purposes only and does not constitute
          legal, medical, or financial advice. Definitions may be updated as terminology
          evolves. Last updated June 2026.
        </p>
      </div>
    </article>
  );
}
