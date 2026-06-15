import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/content/cities';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Find Lion Order Dispensaries — Cannabis Store Locator',
  description:
    'Find Lion Order cannabis dispensary partners near you. Premium, lab-tested flower, pre-rolls, and edibles by Rohan Marley. Available in legal states.',
  alternates: { canonical: `${SITE}/lion-order/dispensary-locator` },
  openGraph: {
    title: 'Find Lion Order Dispensaries — Cannabis Store Locator',
    description: 'Rastafari-rooted luxury cannabis by Rohan Marley. Find dispensaries near you.',
    url: `${SITE}/lion-order/dispensary-locator`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function DispensaryLocatorPage() {
  const dispensaryCities = cities.filter((c) => c.hasDispensaries);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Breadcrumb */}
      <nav className="text-[var(--dim)] text-xs mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <span>/</span>
        <span className="text-[var(--cream)]">Dispensary Locator</span>
      </nav>

      {/* H1 */}
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-6 tracking-tight">
        Find Lion Order Dispensaries
      </h1>

      {/* AEO answer block */}
      <div
        data-answer="true"
        className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5"
      >
        Lion Order cannabis is available at licensed dispensaries in{' '}
        {dispensaryCities.length} legal markets. Founded by Rohan Marley, Lion
        Order offers premium, lab-tested flower, pre-rolls, and edibles rooted
        in Rastafari tradition. Select your city below to find retail partners.
      </div>

      {/* Cannabis disclaimer */}
      <div className="border border-[var(--gold)]/30 rounded-lg p-4 mb-12 bg-[var(--panel)]">
        <p className="text-[var(--dim)] text-xs leading-relaxed">
          <strong className="text-[var(--cream)]">Cannabis Compliance Notice:</strong>{' '}
          Cannabis products are available only where legally permitted. You must be
          21 or older to purchase. Lion Order products are lab-tested and compliant
          with all applicable state and local regulations. Cannabis has intoxicating
          effects and may be habit forming. Keep out of reach of children. It is
          illegal to drive a motor vehicle while under the influence of cannabis.
        </p>
      </div>

      <div className="gold-rule mb-12" />

      {/* Description */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Where to Find Lion Order
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lion Order partners with licensed dispensaries in states where
          recreational or medical cannabis is legally permitted. Every product
          is lab-tested, compliant with local regulations, and crafted to the
          highest standards.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          For the latest retail locations and product availability, visit{' '}
          <a
            href="https://lionorder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] underline underline-offset-4 decoration-[var(--line)] hover:decoration-[var(--gold)] transition-colors"
          >
            lionorder.com
          </a>
          .
        </p>
      </section>

      {/* City grid */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Legal Markets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dispensaryCities.map((c) => (
            <Link
              key={c.slug}
              href={`/dispensary-near-me/${c.slug}`}
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

      {/* Products */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'King Clementine', desc: 'Citrus-forward hybrid. Bright and uplifting.', href: '/lion-order/strains/king-clementine' },
            { name: 'Premium Flower', desc: 'Small-batch, hand-trimmed cannabis.', href: '/lion-order/the-flower' },
            { name: 'Pre-Rolls', desc: 'Hand-rolled and ready. Lab-tested purity.', href: '/lion-order/products' },
            { name: 'Lab Results', desc: 'Full transparency on every batch.', href: '/lion-order/lab-results' },
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

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          The Herb. Elevated.
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Explore the full Lion Order collection — rooted in Rastafari tradition,
          crafted for conscious consumption.
        </p>
        <Link
          href="/lion-order"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Explore Lion Order
        </Link>
      </section>

      {/* Internal links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
        <Link href="/lion-order/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/lion-order/responsible-use" className="hover:text-[var(--gold)] transition-colors">Responsible Use</Link>
      </nav>
    </article>
  );
}
