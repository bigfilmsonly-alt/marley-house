import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '@/content/cities';

const SITE = 'https://marley-house.vercel.app';

/* ── Static params — only cities where cannabis is legal ── */
export function generateStaticParams() {
  return cities.filter((c) => c.hasDispensaries).map((c) => ({ city: c.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasDispensaries) return { title: 'Not Found' };

  const title = `Dispensary Near Me in ${c.name} — Lion Order Cannabis`;
  const desc = `Find Lion Order cannabis dispensary partners near you in ${c.name}, ${c.region}. Premium, lab-tested flower, pre-rolls, and edibles by Rohan Marley.`;

  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE}/dispensary-near-me/${c.slug}` },
    openGraph: {
      title,
      description: desc,
      url: `${SITE}/dispensary-near-me/${c.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function DispensaryNearMePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasDispensaries) notFound();

  const otherCities = cities.filter((o) => o.hasDispensaries && o.slug !== c.slug);

  /* LocalBusiness JSON-LD */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Lion Order Dispensary — ${c.name}`,
    description: `Find Lion Order cannabis products at dispensaries in ${c.name}, ${c.region}.`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: c.lat,
      longitude: c.lng,
    },
    url: `${SITE}/dispensary-near-me/${c.slug}`,
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
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <span>/</span>
        <Link href="/lion-order/dispensary-locator" className="hover:text-[var(--gold)] transition-colors">Dispensary Locator</Link>
        <span>/</span>
        <span className="text-[var(--cream)]">{c.name}</span>
      </nav>

      {/* H1 */}
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-6 tracking-tight">
        Dispensary Near Me in {c.name}
      </h1>

      {/* AEO answer block */}
      <div
        data-answer="true"
        className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5"
      >
        Looking for Lion Order cannabis in {c.name}, {c.region}? Lion Order is a
        Rastafari-rooted luxury cannabis brand by Rohan Marley. Find lab-tested
        premium flower, pre-rolls, and edibles at licensed dispensary partners
        throughout {c.name}. All products comply with {c.region} regulations.
      </div>

      {/* Cannabis disclaimer */}
      <div className="border border-[var(--gold)]/30 rounded-lg p-4 mb-12 bg-[var(--panel)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          <strong className="text-[var(--cream)]">Cannabis Compliance Notice:</strong>{' '}
          Cannabis products are available only where legally permitted. You must be
          21 or older to purchase. Lion Order products are lab-tested and compliant
          with all applicable state and local regulations in {c.region}. Cannabis
          has intoxicating effects and may be habit forming. Keep out of reach of
          children. It is illegal to drive a motor vehicle while under the influence
          of cannabis.
        </p>
      </div>

      <div className="gold-rule mb-12" />

      {/* City context */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Lion Order in {c.name}
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          {c.description}
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lion Order partners with licensed dispensaries across {c.name} to bring
          Rohan Marley&apos;s vision of conscious cannabis to the community. Ask for
          Lion Order by name at your local dispensary, or visit{' '}
          <a
            href="https://lionorder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] underline underline-offset-4 decoration-[var(--line)] hover:decoration-[var(--gold)] transition-colors"
          >
            lionorder.com
          </a>{' '}
          for the latest retail locations.
        </p>
      </section>

      {/* Featured products */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'King Clementine', desc: 'Citrus-forward hybrid. Bright and uplifting.', href: '/lion-order/strains/king-clementine' },
            { name: 'Lion Order Flower', desc: 'Premium small-batch cannabis flower.', href: '/lion-order/the-flower' },
            { name: 'Lion Order Pre-Rolls', desc: 'Hand-rolled, lab-tested, ready to enjoy.', href: '/lion-order/products' },
            { name: 'Lab Results', desc: 'Transparency in every product. View full reports.', href: '/lion-order/lab-results' },
          ].map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <h3 className="text-[var(--gold)] font-display text-base mb-1">{product.name}</h3>
              <p className="text-[var(--dim)] text-sm">{product.desc}</p>
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
                href={`/dispensary-near-me/${o.slug}`}
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
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
        <Link href="/lion-order/dispensary-locator" className="hover:text-[var(--gold)] transition-colors">All Dispensaries</Link>
        <Link href="/lion-order/responsible-use" className="hover:text-[var(--gold)] transition-colors">Responsible Use</Link>
      </nav>
    </article>
  );
}
