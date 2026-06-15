import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Capital — The Marley Group',
  description:
    'The Marley Group Capital — strategic investment in culture-driven brands. Portfolio includes Marley Coffee, Lion Order, Ro Marley Beach House, and ROOTS Media.',
  alternates: { canonical: `${SITE}/capital` },
  openGraph: {
    title: 'Capital — The Marley Group',
    description:
      'Strategic investment in culture-driven brands. Explore the portfolio and partnership opportunities.',
    url: `${SITE}/capital`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const portfolio = [
  { name: 'Marley Coffee', vertical: 'Coffee & Agriculture', href: '/marley-coffee' },
  { name: 'Lion Order', vertical: 'Cannabis & Wellness', href: '/lion-order' },
  { name: 'Ro Marley Beach House', vertical: 'Hospitality & Tourism', href: '/romarley-beach-house' },
  { name: 'ROOTS Media', vertical: 'Media & Content', href: '/media' },
  { name: 'House Sessions', vertical: 'Music & Events', href: '/music' },
];

export default function CapitalPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Capital
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group Capital invests in culture-driven brands that carry meaning beyond
        the marketplace. We partner with founders who build with intention, honor their
        roots, and measure success across generations — not just quarters.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Investment Philosophy</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          We invest where culture meets commerce. Every brand in our portfolio is grounded
          in authentic narrative, operates with vertical integration, and is built to
          endure. We do not chase trends — we back founders who set them.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Our approach combines operational experience across five verticals with the
          cultural authority of the Marley name. We bring more than capital — we bring
          access, story, and strategic partnership.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Portfolio Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolio.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold">{b.name}</h3>
              <p className="text-[var(--dim)] text-sm mt-1">{b.vertical}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Sectors of Focus</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Agriculture &amp; specialty food with provenance</li>
          <li>Legal cannabis, wellness, and plant medicine</li>
          <li>Hospitality, tourism, and experiential real estate</li>
          <li>Media, content, and cultural IP</li>
          <li>Music, live events, and artist ventures</li>
        </ul>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Partner with Us</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          If you are building a culture-driven brand and seeking a strategic partner, we
          want to hear from you.
        </p>
        <a
          href="mailto:capital@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/entrepreneurship" className="hover:text-[var(--gold)] transition-colors">Entrepreneurship</Link>
        <Link href="/business-building" className="hover:text-[var(--gold)] transition-colors">Brand Building</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/press-room" className="hover:text-[var(--gold)] transition-colors">Press Room</Link>
      </nav>
    </article>
  );
}
