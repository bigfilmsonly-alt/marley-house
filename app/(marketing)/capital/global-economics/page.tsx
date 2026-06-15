import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Global Economics — The Marley Group',
  description:
    'Rohan Marley\'s economic philosophy — One Love Economics. A framework for building wealth through culture, community, and commerce.',
  alternates: { canonical: `${SITE}/capital/global-economics` },
  openGraph: {
    title: 'Global Economics — The Marley Group',
    description: 'One Love Economics — wealth through culture, community, and commerce.',
    url: `${SITE}/capital/global-economics`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const principles = [
  { title: 'Roots Before Returns', text: 'Every investment must be grounded in authentic cultural soil. The strongest returns come from brands people believe in, not just buy from.' },
  { title: 'Vertical Sovereignty', text: 'Own the supply chain from seed to shelf. Margin is found in integration, and independence is found in ownership.' },
  { title: 'Generational Capital', text: 'Build balance sheets that outlive you. True wealth is measured in decades, not quarters.' },
  { title: 'Community Multiplier', text: 'Capital deployed into community returns compounding value — economic, social, and spiritual.' },
];

export default function GlobalEconomicsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Global Economics
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        One Love Economics — a framework born from Rastafari principles and
        refined through decades of building across continents. Rohan Marley&apos;s
        philosophy for wealth that carries meaning.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Philosophy</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Conventional economics separates profit from purpose. One Love Economics
          rejects that division. The Marley Group was built on the belief that
          culture is the most durable form of capital — and that commerce rooted
          in authentic narrative outperforms extraction every time.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          From Jamaican coffee farms to global cannabis markets, from Montego Bay
          hospitality to digital media, every venture follows the same economic
          logic: build from the roots, own the value chain, and reinvest in the
          communities that make the brand real.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Core Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div key={p.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{p.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Study the Model</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Explore how these principles translate into real portfolio performance
          and investment strategy.
        </p>
        <Link
          href="/capital/investments"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Investments
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
      </nav>
    </article>
  );
}
