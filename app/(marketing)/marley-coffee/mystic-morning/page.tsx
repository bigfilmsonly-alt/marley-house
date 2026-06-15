import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/content/products';

const blend = products.find((p) => p.id === 'mystic-morning')!;
const SITE = 'https://marley-house.vercel.app';
const others = products.filter((p) => p.id !== blend.id);

export const metadata: Metadata = {
  title: 'Mystic Morning — Smooth Medium Roast | Marley Coffee',
  description:
    'Mystic Morning is a smooth, balanced medium roast legacy blend by Marley Coffee. Fairtrade certified. Contemplative, timeless, crafted for quiet mornings.',
  alternates: { canonical: `${SITE}/marley-coffee/mystic-morning` },
  openGraph: {
    title: 'Mystic Morning — Marley Coffee',
    description: 'Medium roast. Smooth, balanced, timeless legacy blend.',
    url: `${SITE}/marley-coffee/mystic-morning`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function MysticMorningPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-14">
        <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
          {blend.roast} &middot; {blend.origin}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[var(--gold)] mb-6">
          {blend.name}
        </h1>
        <p className="max-w-xl mx-auto text-[var(--cream)] leading-relaxed">
          Mystic Morning is a smooth, balanced medium roast from Marley Coffee.
          This Fairtrade certified legacy blend is contemplative and timeless,
          crafted for quiet mornings when you want to taste the full profile
          without distraction. The original recipe, unchanged.
        </p>
      </header>

      {/* Flavor Profile */}
      <section className="border border-[var(--line)] rounded-2xl p-8 mb-14">
        <h2 className="font-display text-xl text-[var(--cream)] mb-6 text-center">
          Flavor Profile
        </h2>
        <div className="space-y-4">
          {blend.flavorProfile?.map((f) => (
            <div key={f.label} className="flex items-center gap-4">
              <span className="text-[var(--dim)] text-xs w-24 text-right">
                {f.label}
              </span>
              <div className="flex-1 h-2 bg-[var(--line)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--gold)] rounded-full"
                  style={{ width: `${f.value * 20}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[var(--dim)] text-sm text-center mt-6">
          Tasting notes: {blend.notes}
        </p>
      </section>

      {/* Details */}
      <section className="grid sm:grid-cols-2 gap-6 mb-14">
        <div className="border border-[var(--line)] rounded-xl p-6">
          <h3 className="text-[var(--cream)] font-semibold text-sm mb-2">
            Brewing Tip
          </h3>
          <p className="text-[var(--dim)] text-sm leading-relaxed">
            {blend.brewingTip}
          </p>
        </div>
        <div className="border border-[var(--line)] rounded-xl p-6">
          <h3 className="text-[var(--cream)] font-semibold text-sm mb-2">
            Pairs With
          </h3>
          <p className="text-[var(--dim)] text-sm leading-relaxed">
            {blend.pairing}
          </p>
        </div>
      </section>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {blend.badges.map((b) => (
          <span
            key={b}
            className="border border-[var(--line)] rounded-full px-3 py-1 text-[var(--cream)] text-xs"
          >
            {b}
          </span>
        ))}
      </div>

      {/* CTA */}
      <section className="text-center mb-14">
        <p className="font-display text-3xl text-[var(--gold)] mb-4">
          ${blend.price.toFixed(2)}
        </p>
        <Link
          href="/coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Buy {blend.name}
        </Link>
      </section>

      {/* Other Blends */}
      <section className="mb-14">
        <h2 className="font-display text-xl text-[var(--cream)] text-center mb-6">
          Explore Other Blends
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {others.map((o) => (
            <Link
              key={o.id}
              href={`/marley-coffee/${o.id}`}
              className="border border-[var(--line)] rounded-lg p-3 text-center hover:border-[var(--gold)] transition-colors"
            >
              <p className="text-[var(--cream)] text-sm font-semibold">{o.name}</p>
              <p className="text-[var(--dim)] text-[10px] mt-1">{o.roast}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Link
          href="/marley-coffee"
          className="text-[var(--gold)] text-sm hover:underline"
        >
          &larr; Back to Marley Coffee
        </Link>
      </div>
    </article>
  );
}
