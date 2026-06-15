import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Key Metrics — The Marley Group',
  description:
    'Headline metrics for The Marley Group: social following, brand count, markets, masterclass episodes, and product lines.',
  alternates: { canonical: `${SITE}/investor/metrics` },
  openGraph: {
    title: 'Key Metrics — The Marley Group',
    description:
      'Headline metrics across the Marley Group portfolio.',
    url: `${SITE}/investor/metrics`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const metrics = [
  { value: '663K+', label: 'Social Following', note: 'Combined audience across Instagram, YouTube, and TikTok' },
  { value: '5+', label: 'Brands', note: 'Active portfolio brands across coffee, cannabis, hospitality, media, and music' },
  { value: '9', label: 'Cities', note: 'Active markets including Miami, Kingston, Los Angeles, London, and more' },
  { value: '8', label: 'Masterclass Episodes', note: 'Flagship educational series covering every Marley Group vertical' },
  { value: '7', label: 'Coffee Products', note: 'Marley Coffee SKUs from Blue Mountain estates to ready-to-drink' },
  { value: '1', label: 'Lion Order', note: 'Cannabis brand with character IP, strain guide, and dispensary network' },
];

export default function MetricsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Key Metrics
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Headline numbers across The Marley Group portfolio. These figures represent
        publicly available metrics as of 2024.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="border border-[var(--line)] rounded-lg p-6 text-center">
              <p className="text-[var(--gold)] font-display text-4xl font-bold">{m.value}</p>
              <h3 className="text-[var(--cream)] font-semibold mt-2">{m.label}</h3>
              <p className="text-[var(--dim)] text-xs mt-2">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Growth Indicators</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Masterclass waitlist growing organically through inner-circle signups</li>
          <li>Lion Order strain guide driving dispensary referral traffic</li>
          <li>Beach House bookings expanding from Jamaica to Miami</li>
          <li>ROOTS format generating licensing interest across multiple territories</li>
          <li>House Sessions building recurring live-event audience</li>
        </ul>
      </section>

      <section className="mb-16 border border-[var(--line)] rounded-lg p-6">
        <h2 className="font-display text-xl text-[var(--cream)] mb-3">Detailed Financials</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Detailed financial metrics, revenue breakdowns, and unit economics are available
          upon request and execution of a non-disclosure agreement. Contact us through the
          investor application to begin the process.
        </p>
      </section>

      <section className="text-center py-12">
        <Link href="/investor/apply" className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
          Request Full Metrics
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/investor" className="hover:text-[var(--gold)] transition-colors">Investor Overview</Link>
        <Link href="/investor/deck" className="hover:text-[var(--gold)] transition-colors">Investor Deck</Link>
        <Link href="/investor/apply" className="hover:text-[var(--gold)] transition-colors">Apply to Invest</Link>
      </nav>
    </article>
  );
}
