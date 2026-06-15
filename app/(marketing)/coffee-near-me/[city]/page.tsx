import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '@/content/cities';

const SITE = 'https://marley-house.vercel.app';

/* ── Static params ── */
export function generateStaticParams() {
  return cities.filter((c) => c.hasCoffee).map((c) => ({ city: c.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasCoffee) return { title: 'Not Found' };

  const title = `Marley Coffee Near Me in ${c.name} — Find Locations`;
  const desc = `Find Marley Coffee near you in ${c.name}, ${c.region}. Ethically sourced, single-origin coffee from Rohan Marley. Shop locations, cafes, and retail partners.`;

  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE}/coffee-near-me/${c.slug}` },
    openGraph: {
      title,
      description: desc,
      url: `${SITE}/coffee-near-me/${c.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function CoffeeNearMePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasCoffee) notFound();

  const otherCities = cities.filter((o) => o.hasCoffee && o.slug !== c.slug);

  /* LocalBusiness JSON-LD */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Marley Coffee — ${c.name}`,
    description: `Find Marley Coffee retailers and cafes in ${c.name}, ${c.region}.`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: c.lat,
      longitude: c.lng,
    },
    url: `${SITE}/coffee-near-me/${c.slug}`,
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-[var(--dim)] text-xs mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <span>/</span>
        <Link href="/marley-coffee/find-near-me" className="hover:text-[var(--gold)] transition-colors">Find Near Me</Link>
        <span>/</span>
        <span className="text-[var(--cream)]">{c.name}</span>
      </nav>

      {/* H1 */}
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-6 tracking-tight">
        Marley Coffee Near Me in {c.name}
      </h1>

      {/* AEO answer block */}
      <div
        data-answer="true"
        className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5"
      >
        Looking for Marley Coffee in {c.name}, {c.region}? Marley Coffee is a
        single-origin, Fairtrade certified coffee brand founded by Rohan Marley.
        Check local retailers, specialty cafes, and grocery stores in {c.name} for
        availability of blends like One Love, Buffalo Soldier, and Blue Mountain.
      </div>

      <div className="gold-rule mb-12" />

      {/* City context */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Marley Coffee in {c.name}
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          {c.description}
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Marley Coffee partners with independent cafes, specialty grocers, and
          retail chains across {c.name} and the greater {c.region} area. Whether
          you prefer whole bean, ground, or single-serve formats, you can find
          Marley Coffee at select locations throughout the city.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Can&apos;t find it locally? Order directly from{' '}
          <a
            href="https://marleycoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] underline underline-offset-4 decoration-[var(--line)] hover:decoration-[var(--gold)] transition-colors"
          >
            marleycoffee.com
          </a>{' '}
          and have Marley Coffee delivered to your door in {c.name}.
        </p>
      </section>

      {/* Popular blends */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Popular Blends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'One Love', desc: 'Smooth medium roast. Chocolate and citrus notes.', href: '/marley-coffee/one-love' },
            { name: 'Buffalo Soldier', desc: 'Bold dark roast. Rich and full-bodied.', href: '/marley-coffee/buffalo-soldier' },
            { name: 'Blue Mountain', desc: 'Jamaica\'s finest. Rare and extraordinary.', href: '/marley-coffee/blue-mountain' },
            { name: 'Simmer Down', desc: 'Swiss Water decaf. All the flavor, none of the caffeine.', href: '/marley-coffee/simmer-down' },
          ].map((blend) => (
            <Link
              key={blend.name}
              href={blend.href}
              className="group border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <h3 className="text-[var(--gold)] font-display text-base mb-1">{blend.name}</h3>
              <p className="text-[var(--dim)] text-sm">{blend.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Other cities */}
      {otherCities.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
            Also Available In
          </h2>
          <nav className="flex flex-wrap gap-3">
            {otherCities.map((o) => (
              <Link
                key={o.slug}
                href={`/coffee-near-me/${o.slug}`}
                className="text-sm text-[var(--dim)] border border-[var(--line)] rounded-full px-4 py-2 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              >
                {o.name}
              </Link>
            ))}
          </nav>
        </section>
      )}

      <div className="gold-rule mb-12" />

      {/* Internal links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/marley-coffee/sourcing" className="hover:text-[var(--gold)] transition-colors">Sourcing</Link>
        <Link href="/marley-coffee/find-near-me" className="hover:text-[var(--gold)] transition-colors">All Locations</Link>
        <Link href="/marley-coffee/shop" className="hover:text-[var(--gold)] transition-colors">Shop</Link>
      </nav>
    </article>
  );
}
