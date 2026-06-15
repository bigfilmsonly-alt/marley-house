import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Portfolio — The Marley Group',
  description:
    'Brand-by-brand breakdown of The Marley Group portfolio — Marley Coffee, Lion Order, Ro Marley Beach House, ROOTS Media, and House Sessions.',
  alternates: { canonical: `${SITE}/capital/portfolio` },
  openGraph: {
    title: 'Portfolio — The Marley Group',
    description: 'Detailed portfolio breakdown across five culture-driven verticals.',
    url: `${SITE}/capital/portfolio`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const brands = [
  { name: 'Marley Coffee', vertical: 'Coffee & Agriculture', description: 'Single-origin, ethically sourced coffee rooted in Jamaican soil and the Marley farming tradition. Direct-to-consumer, wholesale, and franchise distribution.', href: '/marley-coffee' },
  { name: 'Lion Order', vertical: 'Cannabis & Wellness', description: 'Premium cannabis brand built on Rastafari principles. Curated strains, wellness products, and dispensary partnerships across legal markets.', href: '/lion-order' },
  { name: 'Ro Marley Beach House', vertical: 'Hospitality & Tourism', description: 'Boutique hospitality experience in Montego Bay blending Jamaican culture, sustainable design, and curated guest programming.', href: '/romarley-beach-house' },
  { name: 'ROOTS Media', vertical: 'Media & Content', description: 'Content studio producing documentary, editorial, and social media narratives that amplify the Marley legacy and partner brands.', href: '/media' },
  { name: 'House Sessions', vertical: 'Music & Events', description: 'Live music platform and event series celebrating the intersection of culture, community, and sound.', href: '/music' },
];

export default function PortfolioPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Portfolio
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Five brands. Five verticals. One unified vision — building
        culture-driven enterprises that endure across generations.
      </p>

      <div className="gold-rule mb-12" />

      <section className="space-y-8 mb-16">
        {brands.map((b) => (
          <Link
            key={b.name}
            href={b.href}
            className="block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="font-display text-xl text-[var(--cream)]">{b.name}</h2>
              <span className="text-[var(--gold)] text-xs tracking-wider uppercase whitespace-nowrap">
                {b.vertical}
              </span>
            </div>
            <p className="text-[var(--dim)] text-sm leading-relaxed">{b.description}</p>
          </Link>
        ))}
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Invest Alongside Us</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Strategic partnerships and co-investment opportunities are available
          for aligned partners.
        </p>
        <Link
          href="/capital/partner-with-us"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Partner With Us
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/capital" className="hover:text-[var(--gold)] transition-colors">Capital</Link>
        <Link href="/capital/investments" className="hover:text-[var(--gold)] transition-colors">Investments</Link>
        <Link href="/capital/ventures" className="hover:text-[var(--gold)] transition-colors">Ventures</Link>
        <Link href="/capital/franchise-investment" className="hover:text-[var(--gold)] transition-colors">Franchise</Link>
      </nav>
    </article>
  );
}
