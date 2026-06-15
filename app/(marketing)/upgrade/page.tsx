import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Upgrade — The Marley Group',
  description:
    'Upgrade from the Free tier to Inner Circle or Legacy membership for full masterclass access, discounts on coffee and merch, and priority booking at the Beach House.',
  alternates: { canonical: `${SITE}/upgrade` },
  openGraph: {
    title: 'Upgrade — The Marley Group',
    description: 'Unlock the full Marley experience — masterclasses, discounts, and priority access.',
    url: `${SITE}/upgrade`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const missing = [
  { feature: 'All 8 masterclass episodes', free: false, inner: true },
  { feature: 'Unlimited Ask questions', free: false, inner: true },
  { feature: '10% off coffee & merch', free: false, inner: true },
  { feature: 'Community access', free: false, inner: true },
  { feature: '2x House Points', free: false, inner: true },
  { feature: '15% off everything', free: false, inner: false, legacy: true },
  { feature: 'Priority booking', free: false, inner: false, legacy: true },
  { feature: 'Private events & drops', free: false, inner: false, legacy: true },
  { feature: '3x House Points', free: false, inner: false, legacy: true },
];

export default function UpgradePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Upgrade Your Membership
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Upgrade from the Free tier to Inner Circle or Legacy membership for full
        masterclass access, discounts on coffee and merch, and priority booking at
        the Beach House.
      </p>

      <div className="gold-rule mb-12" />

      {/* Current Tier Notice */}
      <section className="mb-12 rounded-lg border border-[var(--line)] bg-[var(--bg)] p-6">
        <p className="text-[var(--dim)] text-sm uppercase tracking-wider mb-1">Current Tier</p>
        <p className="text-[var(--cream)] text-2xl font-bold">Free</p>
        <p className="text-[var(--dim)] text-sm mt-2">
          You have access to platform browsing, 1 masterclass preview, and 3 Ask questions per day.
        </p>
      </section>

      {/* What You Are Missing */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">What You&rsquo;re Missing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--line)]">
                <th className="py-3 pr-4 text-[var(--dim)] font-normal">Feature</th>
                <th className="py-3 px-4 text-[var(--dim)] font-normal text-center">Free</th>
                <th className="py-3 px-4 text-[var(--gold)] font-bold text-center">Inner Circle</th>
                <th className="py-3 pl-4 text-[var(--cream)] font-bold text-center">Legacy</th>
              </tr>
            </thead>
            <tbody>
              {missing.map((row) => (
                <tr key={row.feature} className="border-b border-[var(--line)]/30">
                  <td className="py-3 pr-4 text-[var(--cream)]">{row.feature}</td>
                  <td className="py-3 px-4 text-center text-[var(--dim)]">&mdash;</td>
                  <td className="py-3 px-4 text-center text-[var(--gold)]">
                    {row.inner !== false ? '\u2713' : '\u2014'}
                  </td>
                  <td className="py-3 pl-4 text-center text-[var(--gold)]">{'\u2713'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="rounded-lg border border-[var(--gold)] bg-[var(--gold)]/5 p-6">
          <h3 className="font-display text-xl text-[var(--gold)] mb-1">Inner Circle</h3>
          <p className="text-[var(--cream)] text-3xl font-bold mb-1">
            $9.99<span className="text-sm font-normal text-[var(--dim)] ml-1">/mo</span>
          </p>
          <p className="text-[var(--dim)] text-sm mb-6">
            Full masterclass access, community, and 10% off everything.
          </p>
          <Link
            href="/"
            className="block text-center bg-[var(--gold)] text-[var(--bg)] font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Upgrade to Inner Circle
          </Link>
        </div>

        <div className="rounded-lg border border-[var(--line)] bg-[var(--bg)] p-6">
          <h3 className="font-display text-xl text-[var(--cream)] mb-1">Legacy</h3>
          <p className="text-[var(--cream)] text-3xl font-bold mb-1">
            $199<span className="text-sm font-normal text-[var(--dim)] ml-1">one-time</span>
          </p>
          <p className="text-[var(--dim)] text-sm mb-6">
            Everything forever — 15% off, priority booking, private events.
          </p>
          <Link
            href="/"
            className="block text-center border border-[var(--gold)] text-[var(--gold)] font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Go Legacy
          </Link>
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">All Plans</Link>
        <Link href="/roots" className="hover:text-[var(--gold)] transition-colors">ROOTS</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
