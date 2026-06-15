import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/content/cities';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Find Marley Coffee Near You — Store Locator',
  description:
    'Find Marley Coffee near you. Browse all cities where Marley Coffee is available — single-origin, Fairtrade certified coffee by Rohan Marley.',
  alternates: { canonical: `${SITE}/marley-coffee/find-near-me` },
  openGraph: {
    title: 'Find Marley Coffee Near You — Store Locator',
    description: 'Ethically sourced coffee from the Marley family. Find locations in your city.',
    url: `${SITE}/marley-coffee/find-near-me`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function FindMarleyCoffeeNearMePage() {
  const coffeeCities = cities.filter((c) => c.hasCoffee);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Breadcrumb */}
      <nav className="text-[var(--dim)] text-xs mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <span>/</span>
        <span className="text-[var(--cream)]">Find Near Me</span>
      </nav>

      {/* H1 */}
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-6 tracking-tight">
        Find Marley Coffee Near You
      </h1>

      {/* AEO answer block */}
      <div
        data-answer="true"
        className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5"
      >
        Marley Coffee is available in {coffeeCities.length} cities worldwide.
        Founded by Rohan Marley, it is single-origin, Fairtrade certified coffee
        sourced from the Blue Mountains of Jamaica and partner farms across
        Ethiopia and Central America. Find your nearest location below.
      </div>

      <div className="gold-rule mb-12" />

      {/* Description */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Where to Buy Marley Coffee
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Marley Coffee partners with specialty cafes, grocery stores, and retail
          chains across the globe. Select a city below to find availability in
          your area, including popular blends like One Love, Buffalo Soldier, Blue
          Mountain, and Simmer Down.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Can&apos;t find your city? Order directly from{' '}
          <a
            href="https://marleycoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] underline underline-offset-4 decoration-[var(--line)] hover:decoration-[var(--gold)] transition-colors"
          >
            marleycoffee.com
          </a>{' '}
          for delivery to your door.
        </p>
      </section>

      {/* City grid */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          All Locations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coffeeCities.map((c) => (
            <Link
              key={c.slug}
              href={`/coffee-near-me/${c.slug}`}
              className="group border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <h3 className="text-[var(--gold)] font-display text-lg mb-1 group-hover:underline">
                {c.name}
              </h3>
              <p className="text-[var(--dim)] text-xs tracking-wider uppercase mb-2">
                {c.region}
              </p>
              <p className="text-[var(--dim)] text-sm line-clamp-2">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          From Seed to Soul
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Every cup of Marley Coffee carries a legacy of ethical sourcing, family
          heritage, and uncompromising quality.
        </p>
        <Link
          href="/marley-coffee"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Explore Marley Coffee
        </Link>
      </section>

      {/* Internal links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/marley-coffee/sourcing" className="hover:text-[var(--gold)] transition-colors">Sourcing</Link>
        <Link href="/marley-coffee/shop" className="hover:text-[var(--gold)] transition-colors">Shop</Link>
        <Link href="/marley-coffee/brewing-guide" className="hover:text-[var(--gold)] transition-colors">Brewing Guide</Link>
      </nav>
    </article>
  );
}
