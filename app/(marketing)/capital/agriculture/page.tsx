import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Agriculture — The Marley Group',
  description:
    'Marley Group agriculture investments — Jamaica Blue Mountain coffee farming, sustainable agriculture, and seed-to-shelf supply chain ownership.',
  alternates: { canonical: `${SITE}/capital/agriculture` },
  openGraph: {
    title: 'Agriculture — The Marley Group',
    description: 'Coffee farming, sustainable agriculture, and seed-to-shelf ownership.',
    url: `${SITE}/capital/agriculture`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  { title: 'Jamaica Blue Mountain', text: 'Direct ownership of farmland in the Blue Mountains. Single-origin, shade-grown, hand-picked beans cultivated using traditional methods.' },
  { title: 'Sustainable Practices', text: 'Organic-first cultivation, regenerative soil management, and water conservation across all farming operations.' },
  { title: 'Farmer Partnerships', text: 'Long-term partnerships with Jamaican farming families — fair pricing, training programs, and shared infrastructure.' },
  { title: 'Seed-to-Shelf', text: 'Full vertical integration from cultivation through roasting, packaging, and distribution via Marley Coffee.' },
];

export default function AgriculturePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Agriculture
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Agriculture is where The Marley Group began — on Jamaican soil, growing
        coffee that carries the family name. Today, our agricultural investments
        span farming, processing, and sustainable supply chain ownership.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Our Roots in the Soil</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley&apos;s journey as an entrepreneur began on the family estate
          in the Blue Mountains of Jamaica. What started as a personal connection
          to the land became a fully integrated agricultural business — one that
          now supplies Marley Coffee worldwide.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          We believe the future of premium agriculture is rooted in provenance,
          sustainability, and direct relationships with the people who work the
          land. Every cup of Marley Coffee traces back to a specific farm, a
          specific family, and a specific commitment to quality.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Investment Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{p.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Taste the Difference</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Experience what seed-to-shelf agriculture produces — explore Marley Coffee.
        </p>
        <Link
          href="/marley-coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Explore Marley Coffee
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/capital/investments" className="hover:text-[var(--gold)] transition-colors">Investments</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/capital/global-economics" className="hover:text-[var(--gold)] transition-colors">Global Economics</Link>
      </nav>
    </article>
  );
}
