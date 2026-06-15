import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Flower — Lion Order Cannabis',
  description:
    'Lion Order\'s approach to cannabis: strain-hunted, small batch, beautiful forms. Defined by five quality factors: Strain Hunting, Aroma, Aesthetic, Flavor, Resin-Release, and Efficacy.',
  alternates: { canonical: `${SITE}/lion-order/the-flower` },
  openGraph: {
    title: 'The Flower — Lion Order',
    description: 'Strain-hunted, small batch, beautiful forms. The Lion Order standard.',
    url: `${SITE}/lion-order/the-flower`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const qualityFactors = [
  {
    name: 'Strain Hunting',
    accent: '#B5851E',
    desc: 'Lion Order scouts genetics worldwide, selecting cultivars for distinct expression. Every strain in the portfolio was hand-selected by Rohan Marley and his team through rigorous field evaluation.',
  },
  {
    name: 'Aroma',
    accent: '#946312',
    desc: 'The nose knows. Aroma is the first quality gate — if the terpene profile does not announce itself with clarity and complexity, it does not carry the Lion Order name.',
  },
  {
    name: 'Aesthetic',
    accent: '#F6C800',
    desc: 'The beauty is the message. Trichome coverage, bud structure, color variation, and pistil expression all matter. Lion Order flower is cultivated to be visually stunning.',
  },
  {
    name: 'Flavor',
    accent: '#B5851E',
    desc: 'From first inhale to exhale, the flavor must tell a story. Clean, complex, and true to its terpene lineage — no shortcuts, no artificial enhancement.',
  },
  {
    name: 'Resin-Release',
    accent: '#EFC11F',
    desc: 'The measure of potency and craft. Proper curing and handling ensure that resin glands remain intact, delivering the full expression of the plant at the moment of consumption.',
  },
  {
    name: 'Efficacy',
    accent: '#946312',
    desc: 'Does it deliver on its promise? Efficacy is the final standard — the culmination of genetics, cultivation, and care. Individual experiences vary, but the craft behind the flower does not.',
  },
];

export default function TheFlowerPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Flower
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order cannabis is strain-hunted, cultivated in small batches, and presented
        in beautiful forms. Every flower is evaluated against five quality factors: Strain
        Hunting, Aroma, Aesthetic, Flavor, Resin-Release, and Efficacy.
      </p>

      <div className="gold-rule mb-12" />

      {/* Approach */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Our Approach</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="border border-[var(--line)] overflow-hidden rounded-lg">
            <Image
              src="/lion-order/flower-closeup.jpg"
              alt="Lion Order cannabis flower"
              width={400}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="border border-[var(--line)] overflow-hidden rounded-lg">
            <Image
              src="/lion-order/field-sunset.jpg"
              alt="Cannabis field at sunset"
              width={400}
              height={500}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lion Order does not source from commodity markets. Every cultivar in the
          portfolio was discovered through Rohan Marley&apos;s strain-hunting expeditions
          — selecting genetics from heritage growing regions and developing them through
          careful phenotype selection.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Small-batch cultivation ensures each harvest receives individual attention.
          The result is flower that meets the highest standards of craft cannabis:
          visually stunning, aromatically complex, and consistent in its expression.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Quality Factors */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">
          The Quality Factors
        </h2>
        <div className="space-y-6">
          {qualityFactors.map((f) => (
            <div
              key={f.name}
              className="border border-[var(--line)] rounded-lg p-6 bg-[var(--bg)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: f.accent }}
                />
                <h3 className="font-display text-lg text-[var(--gold)]">{f.name}</h3>
              </div>
              <p className="text-[var(--dim)] leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Experience the Flower</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Explore King Clementine and the full Lion Order portfolio.
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

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/strains/king-clementine" className="hover:text-[var(--gold)] transition-colors">King Clementine Strain</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/lion-order/codes" className="hover:text-[var(--gold)] transition-colors">The Codes</Link>
        <Link href="/lion-order/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
      </nav>

      {/* Disclaimer */}
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
