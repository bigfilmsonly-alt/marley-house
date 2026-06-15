import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Rooms & Suites — RoMarley Beach House',
  description:
    'Explore room types and amenities at RoMarley Beach House: ocean-view rooms, garden suites, and the signature Marley Suite with private terrace and beach access.',
  alternates: { canonical: `${SITE}/romarley-beach-house/rooms` },
  openGraph: {
    title: 'Rooms & Suites — RoMarley Beach House',
    description: 'Ocean-view rooms, garden suites, and the Marley Suite.',
    url: `${SITE}/romarley-beach-house/rooms`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const rooms = [
  { type: 'Ocean View Room', desc: 'Wake up to Caribbean waves. Natural wood furnishings, king bed, floor-to-ceiling windows facing the sea, and Marley Coffee on your nightstand.', amenities: 'King bed, ocean view, rainfall shower, A/C, Wi-Fi' },
  { type: 'Garden Suite', desc: 'Surrounded by tropical flora with a private patio. Ideal for guests who want morning stillness before the beach calls.', amenities: 'King bed, garden patio, outdoor shower, minibar, Wi-Fi' },
  { type: 'The Marley Suite', desc: 'The signature experience. A two-room suite with a private terrace, direct beach access, curated vinyl collection, and an outdoor soaking tub.', amenities: 'King bed, living room, private terrace, beach access, vinyl turntable, soaking tub' },
  { type: 'Family Bungalow', desc: 'Spacious accommodation for families with connecting rooms, a shaded veranda, and a kitchenette stocked with local provisions.', amenities: 'Two bedrooms, kitchenette, veranda, A/C, Wi-Fi' },
];

const amenities = [
  'Marley Coffee served daily at sunrise',
  'Farm-to-table restaurant on property',
  'Infinity pool with ocean views',
  'Live music and House Sessions',
  'Guided cultural excursions',
  'Complimentary beach equipment',
  'Spa and wellness treatments',
  'Concierge and airport transfers',
];

export default function RoomsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Accommodations
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Rooms &amp; Suites
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Every room at RoMarley Beach House is designed with natural materials, ocean air,
        and a curated soundtrack. Choose from ocean-view rooms, garden suites, the signature
        Marley Suite, or a family bungalow.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Room Types</h2>
        <div className="space-y-8">
          {rooms.map((r) => (
            <div key={r.type} className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors">
              <h3 className="text-[var(--cream)] font-semibold text-lg mb-2">{r.type}</h3>
              <p className="text-[var(--dim)] leading-relaxed mb-3">{r.desc}</p>
              <p className="text-[var(--gold)] text-xs tracking-wide">{r.amenities}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Property Amenities</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {amenities.map((a) => (
            <li key={a} className="text-[var(--dim)] text-sm flex items-start gap-2">
              <span className="text-[var(--gold)] mt-1">&#9670;</span>
              {a}
            </li>
          ))}
        </ul>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Reserve Your Room</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Book directly at romarleybeachhouse.com for the best rates and availability.
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

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/romarley-beach-house/book" className="hover:text-[var(--gold)] transition-colors">Book</Link>
        <Link href="/romarley-beach-house/events" className="hover:text-[var(--gold)] transition-colors">Events</Link>
        <Link href="/experiences" className="hover:text-[var(--gold)] transition-colors">Experiences</Link>
        <Link href="/retreats" className="hover:text-[var(--gold)] transition-colors">Retreats</Link>
      </nav>
    </article>
  );
}
