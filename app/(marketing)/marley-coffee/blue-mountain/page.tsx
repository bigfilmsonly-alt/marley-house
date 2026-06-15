import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Jamaican Blue Mountain Coffee — Marley Coffee',
  description:
    'Jamaican Blue Mountain coffee is one of the world\'s rarest coffees. Grown at 900-1,700m in Jamaica\'s Blue Mountains. Zero bitterness, refined complexity.',
  alternates: { canonical: `${SITE}/marley-coffee/blue-mountain` },
  openGraph: {
    title: 'Jamaican Blue Mountain Coffee — Marley Coffee',
    description:
      'One of the world\'s rarest and most sought-after coffees. Grown at elevation in Jamaica\'s Blue Mountains.',
    url: `${SITE}/marley-coffee/blue-mountain`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const facts = [
  { label: 'Elevation', value: '900 – 1,700 m' },
  { label: 'Region', value: 'Blue Mountains, Jamaica' },
  { label: 'Processing', value: 'Washed, sun-dried' },
  { label: 'Harvest', value: 'September – March' },
  { label: 'Global Share', value: 'Less than 0.1%' },
  { label: 'Certification', value: 'JCB Board Certified' },
];

export default function BlueMountainPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          Origin Deep Dive
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Jamaican Blue Mountain Coffee
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Jamaican Blue Mountain coffee is one of the world&rsquo;s rarest and
          most sought-after coffees. Grown at 900–1,700 meters elevation in
          Jamaica&rsquo;s Blue Mountains, it is prized for zero bitterness,
          refined complexity, and a smooth, sweet profile.
        </p>
      </header>

      {/* Facts Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
        {facts.map((f) => (
          <div
            key={f.label}
            className="border border-[var(--line)] rounded-lg p-4 text-center"
          >
            <p className="text-[var(--gold)] font-display text-lg mb-1">
              {f.value}
            </p>
            <p className="text-[var(--dim)] text-xs tracking-wider uppercase">
              {f.label}
            </p>
          </div>
        ))}
      </section>

      {/* Why Premium */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Why Blue Mountain Is Premium
        </h2>
        <div className="space-y-4 text-[var(--cream)] leading-relaxed">
          <p>
            The Blue Mountains of Jamaica create a microclimate unlike anywhere
            else on Earth. Cool temperatures, volcanic soil, consistent rainfall,
            and heavy mist slow the maturation of coffee cherries — producing
            beans with unmatched density and sugar concentration.
          </p>
          <p>
            Every lot is hand-picked and wet-processed, then sun-dried on
            raised beds. The Jamaica Coffee Board certifies each barrel before
            export, ensuring that only beans meeting strict quality thresholds
            carry the Blue Mountain name.
          </p>
          <p>
            The result is a cup with zero bitterness, a silky body, bright
            sweetness, and a complexity that unfolds over minutes. This is not
            everyday coffee. This is ceremony.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border border-[var(--line)] rounded-2xl p-8 text-center mb-16">
        <p className="text-[var(--dim)] text-xs tracking-[0.2em] uppercase mb-2">
          Premium Single Origin
        </p>
        <p className="font-display text-3xl text-[var(--gold)] mb-4">$42.99</p>
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Buy Blue Mountain
        </Link>
      </section>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          href="/marley-coffee"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          &larr; All Blends
        </Link>
        <Link
          href="/marley-coffee/sourcing"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          How We Source &rarr;
        </Link>
        <Link
          href="/marley-coffee/story"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          Our Story &rarr;
        </Link>
      </div>
    </article>
  );
}
