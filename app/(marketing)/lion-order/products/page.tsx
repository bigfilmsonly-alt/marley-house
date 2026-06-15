import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Lion Order Products — Rohan Marley',
  description:
    'Explore the full Lion Order product catalog: roots-luxury cannabis, accessories, and lifestyle goods curated by Rohan Marley.',
  alternates: { canonical: `${SITE}/lion-order/products` },
  openGraph: {
    title: 'Lion Order Products',
    description: 'Roots-luxury cannabis and lifestyle products by Rohan Marley.',
    url: `${SITE}/lion-order/products`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const categories = [
  { name: 'Flower', desc: 'Small-batch, strain-hunted cannabis cultivated with Rastafari intention.' },
  { name: 'Pre-Rolls', desc: 'Hand-rolled and precision-packed for a consistent, elevated session.' },
  { name: 'Edibles', desc: 'Chef-crafted infusions that honor the plant and the palate.' },
  { name: 'Accessories', desc: 'Ritual-grade tools designed for the conscious consumer.' },
  { name: 'Apparel', desc: 'Lifestyle pieces that carry the Lion Order crest into the world.' },
  { name: 'Limited Drops', desc: 'Seasonal collaborations and single-origin releases.' },
];

export default function LionOrderProductsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Product Catalog
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Lion Order Products
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order offers a curated catalog of roots-luxury cannabis, accessories, and lifestyle
        goods. Every product reflects Rohan Marley&apos;s commitment to quality, heritage, and
        conscious consumption.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div
              key={c.name}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">{c.name}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Our Standard</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Every Lion Order product is third-party tested, transparently labeled, and crafted
          in small batches. We publish full COAs for every cannabis SKU and never cut corners
          on sourcing or cultivation.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Quality is not a marketing claim — it is the order.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Shop the Collection</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Browse the full Lion Order catalog at lionorder.com.
        </p>
        <a
          href="https://lionorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Shop Lion Order
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
        <Link href="/lion-order/lab-results" className="hover:text-[var(--gold)] transition-colors">Lab Results</Link>
        <Link href="/lion-order/responsible-use" className="hover:text-[var(--gold)] transition-colors">Responsible Use</Link>
        <Link href="/lion-order/education" className="hover:text-[var(--gold)] transition-colors">Cannabis Education</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
      </nav>

      <footer className="mt-16 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-[10px] leading-relaxed tracking-wide">
          Cannabis products are intended for adults 21 and older. Check your local and state laws
          before purchasing. Lion Order does not make medical or health claims about cannabis.
          Consume responsibly.
        </p>
      </footer>
    </article>
  );
}
