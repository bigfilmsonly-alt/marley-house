import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Wholesale — Marley Coffee',
  description:
    'Partner with Marley Coffee for wholesale supply. Ethically sourced, single-origin coffee for retailers, cafes, hotels, and distributors worldwide.',
  alternates: { canonical: `${SITE}/marley-coffee/wholesale` },
  openGraph: {
    title: 'Wholesale — Marley Coffee',
    description:
      'Ethically sourced wholesale coffee for retailers, cafes, and hotels.',
    url: `${SITE}/marley-coffee/wholesale`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const tiers = [
  { name: 'Starter', min: '25 lbs / mo', discount: '15% off retail', ideal: 'Small cafes & boutiques' },
  { name: 'Growth', min: '100 lbs / mo', discount: '25% off retail', ideal: 'Multi-location cafes & grocers' },
  { name: 'Enterprise', min: '500 lbs / mo', discount: 'Custom pricing', ideal: 'Hotels, airlines & distributors' },
];

const benefits = [
  'Access to all single-origin blends and seasonal releases',
  'Dedicated account manager and priority support',
  'Co-branded marketing materials and POS displays',
  'Staff training on Marley Coffee origins and brewing',
  'Flexible delivery schedules and drop-ship options',
];

export default function WholesalePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          For Business
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Wholesale
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Bring Marley Coffee to your customers. We partner with retailers,
          cafes, hotels, and distributors who share our commitment to quality and
          ethical sourcing.
        </p>
      </header>

      {/* Pricing Tiers */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-8">
          Pricing Tiers
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="border border-[var(--line)] rounded-xl p-6 text-center"
            >
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                {t.name}
              </p>
              <p className="text-[var(--cream)] font-display text-lg mb-1">{t.min}</p>
              <p className="text-[var(--gold)] text-sm font-semibold mb-3">{t.discount}</p>
              <p className="text-[var(--dim)] text-xs">{t.ideal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-8">
          Partnership Benefits
        </h2>
        <ul className="space-y-3 max-w-lg mx-auto">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--cream)] text-sm leading-relaxed">
              <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/connect"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Apply for Wholesale
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee/franchise" className="hover:text-[var(--gold)]">
            Explore Franchise Opportunities &rarr;
          </Link>
        </p>
      </section>
    </article>
  );
}
