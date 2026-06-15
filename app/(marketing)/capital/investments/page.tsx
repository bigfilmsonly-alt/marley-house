import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Investments — The Marley Group',
  description:
    'Current investment portfolio of The Marley Group — culture-driven brands across coffee, cannabis, hospitality, media, and music.',
  alternates: { canonical: `${SITE}/capital/investments` },
  openGraph: {
    title: 'Investments — The Marley Group',
    description:
      'Explore the Marley Group investment portfolio spanning five verticals of culture and commerce.',
    url: `${SITE}/capital/investments`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const sectors = [
  { label: 'Coffee & Agriculture', count: 3, status: 'Active' },
  { label: 'Cannabis & Wellness', count: 2, status: 'Active' },
  { label: 'Hospitality & Tourism', count: 2, status: 'Active' },
  { label: 'Media & Content', count: 4, status: 'Active' },
  { label: 'Music & Events', count: 3, status: 'Active' },
];

export default function InvestmentsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Investments
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group manages an active portfolio of culture-driven brands
        and strategic positions across five core verticals. Each investment
        carries purpose alongside performance.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Portfolio Overview</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-6">
          Our investments span direct ownership, joint ventures, and strategic
          equity positions. We prioritize brands with authentic cultural roots,
          vertical integration, and multi-generational staying power.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sectors.map((s) => (
            <div key={s.label} className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="text-[var(--cream)] font-semibold">{s.label}</h3>
              <p className="text-[var(--dim)] text-sm mt-1">
                {s.count} active positions &middot; {s.status}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Investment Criteria</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Authentic cultural narrative and brand provenance</li>
          <li>Clear path to vertical integration and margin ownership</li>
          <li>Founder alignment with long-term, legacy-driven building</li>
          <li>Addressable market across at least two geographies</li>
          <li>Potential for cross-portfolio synergy within The Marley Group</li>
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Explore the Portfolio</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          See brand-by-brand details, performance highlights, and sector strategy.
        </p>
        <Link
          href="/capital/portfolio"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Full Portfolio
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/capital/portfolio" className="hover:text-[var(--gold)] transition-colors">Portfolio</Link>
        <Link href="/capital/ventures" className="hover:text-[var(--gold)] transition-colors">Ventures</Link>
        <Link href="/capital/partner-with-us" className="hover:text-[var(--gold)] transition-colors">Partner With Us</Link>
      </nav>
    </article>
  );
}
