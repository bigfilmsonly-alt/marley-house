import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Lab Results & COAs — Lion Order',
  description:
    'Lion Order publishes third-party lab results and Certificates of Analysis (COAs) for every cannabis product. Learn how to read a COA.',
  alternates: { canonical: `${SITE}/lion-order/lab-results` },
  openGraph: {
    title: 'Lab Results & COAs — Lion Order',
    description: 'Third-party testing transparency for every Lion Order cannabis product.',
    url: `${SITE}/lion-order/lab-results`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const coaSections = [
  { label: 'Cannabinoid Profile', desc: 'Lists THC, CBD, CBG, and other cannabinoid percentages so you know exactly what you are consuming.' },
  { label: 'Terpene Profile', desc: 'Identifies dominant terpenes and their concentrations, which influence aroma, flavor, and effect.' },
  { label: 'Pesticide Screening', desc: 'Confirms the product is free of harmful pesticides, herbicides, and fungicides.' },
  { label: 'Heavy Metals', desc: 'Tests for lead, arsenic, cadmium, and mercury to ensure safe consumption levels.' },
  { label: 'Microbial Testing', desc: 'Screens for mold, yeast, E. coli, and salmonella to verify product safety.' },
  { label: 'Residual Solvents', desc: 'For extracted products, confirms no harmful solvents remain after processing.' },
];

export default function LabResultsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Transparency
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Lab Results &amp; COAs
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Every Lion Order cannabis product is tested by accredited third-party laboratories.
        We publish full Certificates of Analysis (COAs) because transparency is not optional
        — it is the standard.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Why Third-Party Testing Matters
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Third-party testing means an independent, accredited laboratory — not the producer —
          verifies potency, purity, and safety. This eliminates conflict of interest and gives
          you an unbiased snapshot of what is in your product.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Lion Order partners with ISO 17025-accredited labs to test every batch before it
          reaches shelves.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">
          How to Read a COA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coaSections.map((s) => (
            <div
              key={s.label}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">{s.label}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          View Product COAs
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Product-specific lab results are available on each product page at lionorder.com.
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
        <Link href="/lion-order/education" className="hover:text-[var(--gold)] transition-colors">Cannabis Education</Link>
        <Link href="/lion-order/responsible-use" className="hover:text-[var(--gold)] transition-colors">Responsible Use</Link>
        <Link href="/lion-order/products" className="hover:text-[var(--gold)] transition-colors">Products</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
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
