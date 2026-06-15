import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Events at RoMarley Beach House',
  description:
    'Host weddings, retreats, and private events at RoMarley Beach House. Caribbean beachfront venue with full-service catering, live music, and Marley hospitality.',
  alternates: { canonical: `${SITE}/romarley-beach-house/events` },
  openGraph: {
    title: 'Events at RoMarley Beach House',
    description: 'Weddings, retreats, and private events on the Caribbean coast.',
    url: `${SITE}/romarley-beach-house/events`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const eventTypes = [
  { name: 'Weddings', desc: 'Exchange vows on white sand with the Caribbean Sea as your backdrop. Full-service planning, Jamaican-fusion catering, and live music curated by the Marley team.' },
  { name: 'Corporate Retreats', desc: 'Combine strategy sessions with cultural immersion. Meeting spaces, team-building excursions, and farm-to-table dining — all on property.' },
  { name: 'Wellness Retreats', desc: 'Multi-day programs featuring yoga, meditation, plant-based cuisine, and Rastafari wellness traditions led by expert practitioners.' },
  { name: 'Private Celebrations', desc: 'Birthdays, anniversaries, and milestone gatherings hosted with the warmth and attention to detail that define Marley hospitality.' },
];

export default function EventsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Private Events
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Events at RoMarley Beach House
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        RoMarley Beach House is a Caribbean beachfront venue for weddings, retreats, and
        private events. Full-service catering, live music, and Marley hospitality make
        every gathering unforgettable.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Event Types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {eventTypes.map((e) => (
            <div
              key={e.name}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">{e.name}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Venue</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The property offers multiple event spaces: a beachfront terrace for ceremonies and
          receptions, a covered pavilion for dining, and a garden courtyard for intimate
          gatherings. Each space accommodates 20 to 200 guests.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The events team handles logistics end to end — from floral design and lighting
          to transportation and entertainment. Your only job is to show up.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Plan Your Event</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Contact the RoMarley Beach House events team to start planning.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Inquire at romarleybeachhouse.com
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/romarley-beach-house/rooms" className="hover:text-[var(--gold)] transition-colors">Rooms</Link>
        <Link href="/romarley-beach-house/book" className="hover:text-[var(--gold)] transition-colors">Book</Link>
        <Link href="/experiences" className="hover:text-[var(--gold)] transition-colors">Experiences</Link>
        <Link href="/retreats" className="hover:text-[var(--gold)] transition-colors">Retreats</Link>
      </nav>
    </article>
  );
}
