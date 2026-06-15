import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/content/products';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Marley Coffee — Single-Origin, Ethically Sourced',
  description:
    'Marley Coffee is single-origin, ethically sourced coffee founded by Rohan Marley. Fairtrade certified, grown in the Blue Mountains of Jamaica.',
  alternates: { canonical: `${SITE}/marley-coffee` },
  openGraph: {
    title: 'Marley Coffee — Single-Origin, Ethically Sourced',
    description:
      'Fairtrade certified coffee founded by Rohan Marley. From seed to soul — legacy in every cup.',
    url: `${SITE}/marley-coffee`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const badges = [
  { label: 'Fairtrade Certified', icon: '\u2714' },
  { label: 'One Tree Planted', icon: '\u25CF' },
  { label: 'Single Origin', icon: '\u2606' },
  { label: 'Swiss Water Decaf', icon: '\u223F' },
];

export default function MarleyCoffeePage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="text-center mb-20">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          From Seed to Soul
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          Marley Coffee
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] text-base leading-relaxed">
          Marley Coffee is single-origin, ethically sourced coffee founded by
          Rohan Marley. Grown in the Blue Mountains of Jamaica, it is Fairtrade
          certified and sustainably produced. From seed to soul — legacy in
          every cup.
        </p>
      </header>

      {/* Origin Preview */}
      <section className="mb-20">
        <div className="border border-[var(--line)] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
            Rooted in Jamaica
          </h2>
          <p className="text-[var(--dim)] max-w-lg mx-auto leading-relaxed mb-6">
            What began on the slopes of the Blue Mountains became a global
            mission: coffee that honors the land, the farmer, and the legacy.
          </p>
          <Link
            href="/marley-coffee/story"
            className="text-[var(--gold)] text-sm font-semibold hover:underline"
          >
            Read the Full Story &rarr;
          </Link>
        </div>
      </section>

      {/* Blends Grid */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-10">
          The Blends
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/marley-coffee/${p.id}`}
              className="group border border-[var(--line)] rounded-xl p-6 hover:border-[var(--gold)] transition-colors"
            >
              <p className="text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase mb-1">
                {p.roast}
              </p>
              <h3 className="font-display text-lg text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors mb-2">
                {p.name}
              </h3>
              <p className="text-[var(--dim)] text-sm mb-3">{p.notes}</p>
              <p className="text-[var(--gold)] text-sm font-semibold">
                ${p.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-[var(--cream)] text-center mb-8">
          Sourcing &amp; Sustainability
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="border border-[var(--line)] rounded-lg p-4 text-center"
            >
              <span className="text-[var(--gold)] text-xl block mb-2">
                {b.icon}
              </span>
              <span className="text-[var(--cream)] text-xs">{b.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <Link
            href="/marley-coffee/sourcing"
            className="text-[var(--gold)] text-sm hover:underline"
          >
            How We Source &rarr;
          </Link>
          <Link
            href="/marley-coffee/sustainability"
            className="text-[var(--gold)] text-sm hover:underline"
          >
            Sustainability &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Shop All Coffee
        </Link>
        <p className="text-[var(--dim)] text-xs mt-4">
          <Link href="/marley-coffee/blue-mountain" className="hover:text-[var(--gold)]">
            Explore Blue Mountain &rarr;
          </Link>
        </p>
      </section>
    </article>
  );
}
