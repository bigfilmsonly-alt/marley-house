import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Ventures — The Marley Group',
  description:
    'The Marley Group Ventures — early-stage investment in culture-driven founders building the next generation of authentic brands.',
  alternates: { canonical: `${SITE}/capital/ventures` },
  openGraph: {
    title: 'Ventures — The Marley Group',
    description: 'Early-stage investment arm backing culture-driven founders.',
    url: `${SITE}/capital/ventures`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const focus = [
  'Consumer brands with authentic cultural provenance',
  'Food, beverage, and agriculture technology',
  'Cannabis infrastructure and ancillary services',
  'Hospitality and experiential tourism platforms',
  'Creator economy and cultural media tools',
  'Sustainability and regenerative commerce',
];

export default function VenturesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Ventures
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Marley Group Ventures is our early-stage investment arm. We back
        founders at the intersection of culture and commerce — entrepreneurs
        who build brands with soul, not just scale.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What We Bring</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Beyond capital, Marley Group Ventures offers portfolio companies
          access to the full ecosystem: brand strategy, supply chain
          partnerships, distribution channels, and the cultural platform of
          the Marley name.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          We invest at pre-seed and seed stages, typically leading or
          co-leading rounds. Our check sizes range from strategic
          micro-investments to anchor positions, depending on alignment and
          stage.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Sectors of Focus</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {focus.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">For Founders</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We do not require warm introductions. If you are building something
          real — rooted in culture, built for longevity — we want to hear from
          you. Send your pitch deck and a brief note on why your brand matters
          beyond the market.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Submit Your Deck</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          We review every submission. Expect a response within two weeks.
        </p>
        <a
          href="mailto:ventures@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Send Your Pitch
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/capital/investments" className="hover:text-[var(--gold)] transition-colors">Investments</Link>
        <Link href="/capital/portfolio" className="hover:text-[var(--gold)] transition-colors">Portfolio</Link>
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
      </nav>
    </article>
  );
}
