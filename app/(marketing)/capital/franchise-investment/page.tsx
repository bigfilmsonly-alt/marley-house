import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Franchise Investment — The Marley Group',
  description:
    'Franchise investment opportunities with The Marley Group — Marley Coffee franchise model, ROI projections, and partnership details.',
  alternates: { canonical: `${SITE}/capital/franchise-investment` },
  openGraph: {
    title: 'Franchise Investment — The Marley Group',
    description: 'Franchise model details, unit economics, and partnership structure.',
    url: `${SITE}/capital/franchise-investment`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const metrics = [
  { label: 'Target Markets', value: 'Global' },
  { label: 'Format', value: 'Cafe & Kiosk' },
  { label: 'Avg. Build-Out', value: '90 Days' },
  { label: 'Support', value: 'Full Stack' },
];

export default function FranchiseInvestmentPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Franchise Investment
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Own a piece of the Marley legacy. Our franchise model brings
        culture-driven hospitality and premium product to your market — backed
        by the operational infrastructure and brand authority of The Marley Group.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Model</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Marley Coffee franchises operate as branded cafe and kiosk formats
          with standardized design, menu, and supply chain. Franchisees receive
          direct access to our single-origin Jamaican coffee supply,
          proprietary roasting profiles, and brand marketing platform.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Each location is designed to be more than a point of sale — it is a
          cultural touchpoint. Interior design, music programming, and guest
          experience are curated to reflect the Marley aesthetic and values.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">At a Glance</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="border border-[var(--line)] rounded-lg p-5 text-center">
              <p className="text-[var(--gold)] font-display text-xl mb-1">{m.value}</p>
              <p className="text-[var(--dim)] text-xs tracking-wider uppercase">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What You Receive</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Exclusive territory rights and brand licensing</li>
          <li>Turnkey build-out support and interior design package</li>
          <li>Direct supply chain access to Jamaican Blue Mountain coffee</li>
          <li>Marketing toolkit, social media assets, and launch strategy</li>
          <li>Ongoing operational training and quarterly business reviews</li>
          <li>Access to Marley Group events and franchise partner network</li>
        </ul>
      </section>

      <section className="text-center py-12 border border-[var(--line)] rounded-lg">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">ROI Projections</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Detailed unit economics, projected returns, and investment tiers are
          available upon request for qualified applicants.
        </p>
        <a
          href="mailto:franchise@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Request Franchise Package
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/capital/partner-with-us" className="hover:text-[var(--gold)] transition-colors">Partner With Us</Link>
        <Link href="/capital/portfolio" className="hover:text-[var(--gold)] transition-colors">Portfolio</Link>
      </nav>
    </article>
  );
}
