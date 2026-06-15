import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Investor Deck — The Marley Group',
  description:
    'Request access to The Marley Group investor deck. Includes brand portfolio, market opportunity, financial overview, and partnership structure.',
  alternates: { canonical: `${SITE}/investor/deck` },
  openGraph: {
    title: 'Investor Deck — The Marley Group',
    description:
      'Request access to the full investor deck and data room.',
    url: `${SITE}/investor/deck`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const deckSections = [
  'Executive Summary — mission, vision, and the Marley advantage',
  'Brand Portfolio — Marley Coffee, Lion Order, Beach House, ROOTS, House Sessions',
  'Market Opportunity — TAM across coffee, cannabis, hospitality, and media',
  'Growth Strategy — expansion roadmap, licensing model, and new verticals',
  'Financial Overview — revenue streams, unit economics, and projections',
  'Team & Governance — leadership, advisors, and family structure',
  'Partnership Structure — investment tiers, terms, and co-investment options',
];

const aumRanges = [
  'Under $10M',
  '$10M – $50M',
  '$50M – $250M',
  '$250M – $1B',
  'Over $1B',
];

export default function InvestorDeckPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Investor Deck
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group investor deck is a confidential document shared with qualified
        investors after initial review. Request access below and our team will follow up
        within five business days.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Deck Contents</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {deckSections.map((s) => (<li key={s}>{s}</li>))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Request Access</h2>
        <form className="space-y-5 max-w-lg">
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Full Name</label>
            <input type="text" name="name" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Email</label>
            <input type="email" name="email" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Firm / Fund</label>
            <input type="text" name="firm" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">AUM Range</label>
            <select name="aum" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none">
              <option value="">Select&hellip;</option>
              {aumRanges.map((r) => (<option key={r} value={r}>{r}</option>))}
            </select>
          </div>
          <button type="submit" className="bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Request Deck
          </button>
        </form>
      </section>

      <section className="mb-16 border border-[var(--line)] rounded-lg p-6">
        <h2 className="font-display text-xl text-[var(--cream)] mb-3">NDA Requirement</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Access to the investor deck requires execution of a mutual non-disclosure agreement.
          Once your request is approved, our legal team will send the NDA for electronic
          signature before the deck is shared.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/investor" className="hover:text-[var(--gold)] transition-colors">Investor Overview</Link>
        <Link href="/investor/metrics" className="hover:text-[var(--gold)] transition-colors">Key Metrics</Link>
        <Link href="/investor/apply" className="hover:text-[var(--gold)] transition-colors">Apply to Invest</Link>
      </nav>
    </article>
  );
}
