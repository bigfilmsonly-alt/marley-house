import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Sustainability at Marley Coffee',
  description:
    'Marley Coffee is committed to sustainable farming, recyclable packaging, carbon-conscious shipping, and reforestation through One Tree Planted.',
  alternates: { canonical: `${SITE}/marley-coffee/sustainability` },
  openGraph: {
    title: 'Sustainability at Marley Coffee',
    description:
      'Sustainable farming, recyclable packaging, and reforestation — our commitment to the planet.',
    url: `${SITE}/marley-coffee/sustainability`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  { title: 'Regenerative Farming', body: 'Our partner farms use shade-grown practices, crop rotation, and organic composting to maintain soil health. No synthetic pesticides — the land gives back what it receives.' },
  { title: 'One Tree Planted', body: 'For every bag of Marley Coffee sold, a tree is planted through our partnership with One Tree Planted. To date, the initiative has supported reforestation across Jamaica, Ethiopia, and Central America.' },
  { title: 'Recyclable Packaging', body: 'Our bags are made from recyclable materials with minimal plastic. We are actively transitioning to 100% compostable packaging across all SKUs.' },
  { title: 'Carbon-Conscious Shipping', body: 'We consolidate shipments, optimize container loads, and offset remaining emissions through verified carbon credit programs.' },
  { title: 'Water Stewardship', body: 'At our washing stations, wastewater is treated through natural filtration before returning to the ecosystem. We use 30% less water than industry standard processing.' },
  { title: 'Community Investment', body: 'A percentage of every sale funds education and infrastructure programs in the farming communities that grow our coffee. Legacy is a circle.' },
];

export default function SustainabilityPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Our Commitment
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Sustainability at Marley Coffee
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Marley Coffee is committed to regenerative farming, recyclable
          packaging, carbon-conscious logistics, and reforestation through One
          Tree Planted. We believe great coffee and environmental stewardship
          are inseparable — what we take from the earth, we give back.
        </p>
      </header>

      {/* Pillars */}
      <section className="mb-16 grid sm:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="border border-[var(--line)] rounded-xl p-6"
          >
            <h2 className="text-[var(--cream)] font-semibold mb-2">
              {p.title}
            </h2>
            <p className="text-[var(--dim)] text-sm leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </section>

      {/* Impact Numbers */}
      <section className="border border-[var(--line)] rounded-2xl p-8 text-center mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">
          Impact by the Numbers
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { stat: '50K+', label: 'Trees Planted' },
            { stat: '30%', label: 'Less Water Used' },
            { stat: '100%', label: 'Fairtrade Supply Chain' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl text-[var(--gold)]">{s.stat}</p>
              <p className="text-[var(--dim)] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="/marley-coffee"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          &larr; All Blends
        </Link>
        <Link
          href="/marley-coffee/sourcing"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          How We Source &rarr;
        </Link>
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop Coffee
        </Link>
      </div>
    </article>
  );
}
