import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'RoMarley Beach House — Luxury Caribbean Hospitality',
  description:
    'RoMarley Beach House is a luxury beachfront experience by Rohan Marley on the Caribbean coast. Jamaican heritage meets modern luxury.',
  alternates: { canonical: `${SITE}/romarley-beach-house` },
  openGraph: {
    title: 'RoMarley Beach House — Luxury Caribbean Hospitality',
    description:
      'Where the ocean meets the mountain and music never stops. Book your stay.',
    url: `${SITE}/romarley-beach-house`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const highlights = [
  { label: 'Beachfront Rooms', desc: 'Wake up to Caribbean waves and Blue Mountain coffee.' },
  { label: 'Farm-to-Table Dining', desc: 'Jamaican cuisine sourced from local farms and waters.' },
  { label: 'Live Music Nights', desc: 'House Sessions and local artists perform under the stars.' },
  { label: 'Cultural Excursions', desc: 'Guided visits to Nine Mile, Blue Mountains, and beyond.' },
];

export default function BeachHousePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* H1 */}
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Luxury Hospitality
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        RoMarley Beach House
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        RoMarley Beach House is a luxury beachfront hospitality experience by Rohan Marley,
        located on the Caribbean coast. It blends Jamaican heritage with modern luxury — where
        the ocean meets the mountain, and music never stops.
      </p>

      <div className="gold-rule mb-12" />

      {/* The Experience */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Experience</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          More than a hotel, RoMarley Beach House is an immersion into Jamaican culture at its
          finest. Every detail — from the locally crafted furniture to the Marley Coffee served
          at sunrise — reflects Rohan&apos;s vision of hospitality rooted in heritage.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Guests arrive as visitors and leave as family. That&apos;s the Marley way.
        </p>
      </section>

      {/* Location */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Location</h2>
        <div className="border border-[var(--line)] rounded-2xl p-8 sm:p-12 text-center">
          <p className="text-[var(--dim)] leading-relaxed mb-2">
            Nestled along Jamaica&apos;s Caribbean coastline, minutes from the Blue Mountains and
            the heart of Kingston&apos;s music scene. The property sits where the lush mountain
            terrain meets white sand and turquoise water.
          </p>
          <p className="text-[var(--gold)] text-sm font-semibold mt-4">
            Caribbean Coast &middot; Jamaica
          </p>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Rooms &amp; Suites</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-6">
          Each room is designed with natural materials, ocean views, and a curated soundtrack.
          Suites feature private terraces, outdoor showers, and direct beach access. Full room
          details and gallery coming soon.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--gold)] text-sm font-semibold hover:underline"
        >
          View Rooms at romarleybeachhouse.com &rarr;
        </a>
      </section>

      {/* What to Expect */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">What to Expect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">{h.label}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Book Your Stay</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Experience luxury rooted in Jamaican heritage. Reserve your room at RoMarley Beach House.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Book Your Stay
        </a>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
      </nav>
    </article>
  );
}
