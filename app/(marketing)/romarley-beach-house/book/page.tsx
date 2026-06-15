import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Book Your Stay — RoMarley Beach House',
  description:
    'Book your stay at RoMarley Beach House, Rohan Marley\'s luxury beachfront property on the Caribbean coast. Rooms, rates, and reservation details.',
  alternates: { canonical: `${SITE}/romarley-beach-house/book` },
  openGraph: {
    title: 'Book Your Stay — RoMarley Beach House',
    description: 'Reserve your room at the Caribbean\'s premier Marley hospitality experience.',
    url: `${SITE}/romarley-beach-house/book`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const steps = [
  { step: '1', title: 'Choose Your Room', desc: 'Browse ocean-view rooms, garden suites, the Marley Suite, or family bungalows.' },
  { step: '2', title: 'Select Your Dates', desc: 'Check availability and pick your travel window. Peak season runs December through April.' },
  { step: '3', title: 'Confirm & Prepare', desc: 'Receive your confirmation with a digital welcome guide, packing tips, and excursion options.' },
];

export default function BookPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Reservations
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Book Your Stay
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Reserve your room at RoMarley Beach House — luxury hospitality on the Caribbean
        coast by Rohan Marley. Book directly for the best rates, complimentary Marley Coffee,
        and priority access to House Sessions.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">How to Book</h2>
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5">
              <span className="text-[var(--gold)] font-display text-3xl leading-none">{s.step}</span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold mb-1">{s.title}</h3>
                <p className="text-[var(--dim)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What Is Included</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Every reservation includes daily Marley Coffee service, access to the infinity pool
          and private beach, complimentary Wi-Fi, and a curated welcome playlist. Suites
          include additional perks such as private terrace dining and spa credits.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Airport transfers, cultural excursions, and private dining can be arranged through
          the concierge after booking.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Cancellation Policy</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Flexible cancellation is available on most room types up to 72 hours before arrival.
          Full policy details are provided during the booking process at romarleybeachhouse.com.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Ready to Experience It?
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Book directly at romarleybeachhouse.com for guaranteed best rates.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Book Now at romarleybeachhouse.com
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/romarley-beach-house/rooms" className="hover:text-[var(--gold)] transition-colors">Rooms</Link>
        <Link href="/romarley-beach-house/events" className="hover:text-[var(--gold)] transition-colors">Events</Link>
        <Link href="/experiences" className="hover:text-[var(--gold)] transition-colors">Experiences</Link>
        <Link href="/retreats" className="hover:text-[var(--gold)] transition-colors">Retreats</Link>
      </nav>
    </article>
  );
}
