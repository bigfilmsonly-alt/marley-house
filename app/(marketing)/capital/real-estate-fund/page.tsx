import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Real Estate Fund — The Marley Group',
  description:
    'The Marley Group Real Estate Fund — hospitality-driven real estate investment across the Caribbean and select global markets.',
  alternates: { canonical: `${SITE}/capital/real-estate-fund` },
  openGraph: {
    title: 'Real Estate Fund — The Marley Group',
    description: 'Hospitality-driven real estate investment vehicle with Caribbean focus.',
    url: `${SITE}/capital/real-estate-fund`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const strategies = [
  { label: 'Boutique Hospitality', description: 'Culturally-rooted hotel and guest house properties in high-demand tourism corridors.' },
  { label: 'Mixed-Use Development', description: 'Retail, dining, and co-working spaces anchored by Marley Group brand tenants.' },
  { label: 'Residential Communities', description: 'Branded residential projects combining lifestyle curation with long-term appreciation.' },
  { label: 'Land Banking', description: 'Strategic land acquisitions in emerging Caribbean and Central American markets.' },
];

export default function RealEstateFundPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Real Estate Fund
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group Real Estate Fund invests in hospitality-driven
        properties where culture, location, and brand converge. Built on the
        success of Ro Marley Beach House, the fund extends our hospitality
        vision across select markets.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Thesis</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The strongest hospitality assets are not just buildings — they are
          cultural destinations. The Marley Group Real Estate Fund identifies
          properties where authentic narrative, experiential design, and tourism
          demand create outsized returns.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Our anchor property, Ro Marley Beach House in Montego Bay, proved the
          model: a branded hospitality experience with premium positioning,
          loyal repeat guests, and deep cultural resonance. The fund replicates
          and expands this approach.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Strategies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {strategies.map((s) => (
            <div key={s.label} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{s.label}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Investment Inquiries</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The Real Estate Fund is open to accredited investors and institutional
          partners. Contact us for the current offering memorandum.
        </p>
        <a
          href="mailto:capital@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Request Information
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/real-estate" className="hover:text-[var(--gold)] transition-colors">Real Estate</Link>
        <Link href="/capital/partner-with-us" className="hover:text-[var(--gold)] transition-colors">Partner With Us</Link>
      </nav>
    </article>
  );
}
