import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Investor Relations — The Marley Group',
  description:
    'The Marley Group is a multi-brand family holding with ventures across coffee, cannabis, hospitality, and media. The investor room provides key metrics, growth narrative, and partnership opportunities for qualified investors.',
  alternates: { canonical: `${SITE}/investor` },
  openGraph: {
    title: 'Investor Relations — The Marley Group',
    description:
      'Key metrics, growth narrative, and partnership opportunities for qualified investors.',
    url: `${SITE}/investor`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const reasons = [
  { title: 'Cultural Moat', desc: 'The Marley name carries global recognition and generational trust that cannot be replicated or outspent.' },
  { title: 'Multi-Vertical Portfolio', desc: 'Diversified across coffee, cannabis, hospitality, media, and music — reducing single-sector risk.' },
  { title: 'Proven Operators', desc: 'Led by Rohan Marley with decades of brand-building experience across five verticals and nine cities.' },
  { title: 'Growing TAM', desc: 'Legal cannabis, specialty coffee, and experiential hospitality are each projected to exceed $50B by 2030.' },
];

const brands = [
  { name: 'Marley Coffee', vertical: 'Coffee & Agriculture' },
  { name: 'Lion Order', vertical: 'Cannabis & Wellness' },
  { name: 'Ro Marley Beach House', vertical: 'Hospitality & Tourism' },
  { name: 'ROOTS Media', vertical: 'Media & Content' },
  { name: 'House Sessions', vertical: 'Music & Events' },
];

export default function InvestorPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Investor Relations
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group is a multi-brand family holding with ventures across coffee,
        cannabis, hospitality, and media. The investor room provides key metrics, growth
        narrative, and partnership opportunities for qualified investors.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Why Invest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold">{r.title}</h3>
              <p className="text-[var(--dim)] text-sm mt-2">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Brand Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {brands.map((b) => (
            <div key={b.name} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--cream)] font-semibold">{b.name}</h3>
              <p className="text-[var(--dim)] text-sm mt-1">{b.vertical}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Total Addressable Market</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The Marley Group operates at the intersection of multiple high-growth markets.
          Global specialty coffee is projected at $83B by 2028. Legal cannabis is expected
          to reach $57B by 2030. Experiential hospitality and cultural media continue to
          outpace traditional sectors as consumers shift spending toward meaning-driven brands.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Request Access</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The full investor data room is available to qualified investors upon request and NDA.
        </p>
        <Link href="/investor/apply" className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Apply to Invest
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/investor/metrics" className="hover:text-[var(--gold)] transition-colors">Key Metrics</Link>
        <Link href="/investor/deck" className="hover:text-[var(--gold)] transition-colors">Investor Deck</Link>
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/licensing" className="hover:text-[var(--gold)] transition-colors">Licensing</Link>
      </nav>
    </article>
  );
}
