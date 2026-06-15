import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Partner With Us — The Marley Group',
  description:
    'Partner with The Marley Group — partnership criteria, application process, and strategic collaboration opportunities.',
  alternates: { canonical: `${SITE}/capital/partner-with-us` },
  openGraph: {
    title: 'Partner With Us — The Marley Group',
    description: 'Strategic partnership opportunities with The Marley Group.',
    url: `${SITE}/capital/partner-with-us`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const criteria = [
  { title: 'Cultural Authenticity', text: 'Your brand must be rooted in real narrative — not trend-chasing. We partner with founders who build from lived experience.' },
  { title: 'Operational Readiness', text: 'We seek partners with proven execution capability. Revenue traction, supply chain clarity, or deep domain expertise required.' },
  { title: 'Alignment of Values', text: 'Long-term thinking, community commitment, and integrity are non-negotiable. We build with people who share our principles.' },
  { title: 'Strategic Synergy', text: 'The strongest partnerships create value across both portfolios. We look for opportunities where the Marley ecosystem amplifies your brand.' },
];

export default function PartnerWithUsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Partner With Us
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group partners with founders, brands, and institutions that
        share our commitment to culture-driven commerce. If you are building
        something meaningful, we want to hear from you.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Partnership Criteria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {criteria.map((c) => (
            <div key={c.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{c.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">How It Works</h2>
        <ol className="space-y-4 text-[var(--dim)] leading-relaxed">
          <li><span className="text-[var(--gold)] font-semibold">1. Submit</span> — Send your pitch, deck, or partnership proposal to our team.</li>
          <li><span className="text-[var(--gold)] font-semibold">2. Review</span> — Our investment and partnerships team evaluates every submission within two weeks.</li>
          <li><span className="text-[var(--gold)] font-semibold">3. Connect</span> — Qualified candidates are invited to a strategy call with Marley Group leadership.</li>
          <li><span className="text-[var(--gold)] font-semibold">4. Build</span> — Approved partnerships are structured for mutual value creation and long-term growth.</li>
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Partnership Types</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Strategic equity investment and co-ownership</li>
          <li>Brand licensing and co-branded product development</li>
          <li>Distribution and supply chain partnerships</li>
          <li>Joint venture development for new markets</li>
          <li>Franchise and territorial licensing agreements</li>
        </ul>
      </section>

      <section className="text-center py-12 border border-[var(--line)] rounded-lg">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Start the Conversation</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Include a brief overview of your brand, what you are seeking, and why
          The Marley Group is the right partner.
        </p>
        <a
          href="mailto:partnerships@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Apply for Partnership
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/capital/ventures" className="hover:text-[var(--gold)] transition-colors">Ventures</Link>
        <Link href="/capital/franchise-investment" className="hover:text-[var(--gold)] transition-colors">Franchise</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
