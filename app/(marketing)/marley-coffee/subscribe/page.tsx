import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Subscribe & Save — Marley Coffee',
  description:
    'Never run out of Marley Coffee. Subscribe and save 10% on every delivery. Choose your blend, grind, and frequency. Free shipping. Skip or cancel anytime.',
  alternates: { canonical: `${SITE}/marley-coffee/subscribe` },
  openGraph: {
    title: 'Subscribe & Save — Marley Coffee',
    description:
      'Save 10% on every delivery. Choose your blend, grind, and frequency.',
    url: `${SITE}/marley-coffee/subscribe`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const perks = [
  { label: '10% Off', desc: 'Every order, automatically applied' },
  { label: 'Free Shipping', desc: 'On all subscription deliveries' },
  { label: 'Flexible', desc: 'Skip a month or cancel anytime' },
  { label: 'Fresh Roasted', desc: 'Beans roasted and shipped to order' },
];

const howItWorks = [
  { step: '01', title: 'Choose Your Blend', text: 'Pick from One Love, Buffalo Soldier, Lively Up, Mystic Morning, or any single-origin selection.' },
  { step: '02', title: 'Select Your Grind', text: 'Whole bean, coarse, medium, or fine — matched to your brewing method.' },
  { step: '03', title: 'Set Your Frequency', text: 'Every 1, 2, 3, or 4 weeks. Adjust anytime from your account.' },
  { step: '04', title: 'Enjoy & Repeat', text: 'Fresh Marley Coffee arrives at your door. No commitments, no contracts.' },
];

export default function SubscribePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Never Run Out
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Subscribe &amp; Save
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Lock in 10% savings on every delivery. Choose your blend, grind, and
          frequency — we handle the rest. Free shipping on every subscription
          order. Skip or cancel anytime, no questions asked.
        </p>
      </header>

      {/* Perks */}
      <section className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {perks.map((p) => (
            <div
              key={p.label}
              className="border border-[var(--line)] rounded-lg p-4 text-center"
            >
              <p className="text-[var(--gold)] font-semibold text-sm mb-1">{p.label}</p>
              <p className="text-[var(--dim)] text-xs">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-8">
          How It Works
        </h2>
        <div className="space-y-6">
          {howItWorks.map((s) => (
            <div key={s.step} className="border-l-2 border-[var(--line)] pl-6">
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-semibold mb-1">
                {s.step} — {s.title}
              </p>
              <p className="text-[var(--cream)] text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Start Your Subscription
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee" className="hover:text-[var(--gold)]">
            &larr; Explore All Blends
          </Link>
        </p>
      </section>
    </article>
  );
}
