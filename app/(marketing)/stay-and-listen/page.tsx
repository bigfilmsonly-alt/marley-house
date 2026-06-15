import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Stay & Listen — The Marley Group',
  description:
    'Where hospitality meets music — RoMarley Beach House, House Sessions, and the Marley approach to immersive cultural experiences.',
  alternates: { canonical: `${SITE}/stay-and-listen` },
  openGraph: {
    title: 'Stay & Listen — The Marley Group',
    description: 'Hospitality + music. Beach House + House Sessions.',
    url: `${SITE}/stay-and-listen`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function StayAndListenPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Stay &amp; Listen
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        In the Marley world, hospitality and music are not separate industries — they are one
        experience. Stay somewhere that sounds as good as it feels. Listen to something that
        feels like home.
      </p>

      <div className="gold-rule mb-12" />

      {/* The Concept */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Concept</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Bob Marley&apos;s home on Hope Road was always open — musicians, thinkers, and seekers
          gathered there to create, reason, and rest. That spirit lives on in everything The Marley
          Group builds. A hotel is not just a bed. It is a stage, a studio, a sanctuary.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Stay &amp; Listen is the philosophy that connects our hospitality and music ventures into
          a single cultural offering.
        </p>
      </section>

      {/* Beach House */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">RoMarley Beach House</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Boutique beachfront hospitality on the Jamaican coast. Every room is curated with local
          craft, live acoustic sets rotate through the property, and guests wake to the same
          rhythms that shaped the Marley family for generations.
        </p>
        <Link
          href="/romarley-beach-house"
          className="text-[var(--gold)] text-sm font-bold uppercase tracking-wider hover:underline"
        >
          Explore the Beach House
        </Link>
      </section>

      {/* House Sessions */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">House Sessions</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Intimate live performances recorded at Marley properties — unplugged sets, late-night
          reasoning sessions, and collaborations between legacy artists and the next generation.
          House Sessions capture the sound of a place, not just an artist.
        </p>
        <Link
          href="/roots/watch"
          className="text-[var(--gold)] text-sm font-bold uppercase tracking-wider hover:underline"
        >
          Watch House Sessions
        </Link>
      </section>

      <div className="gold-rule mb-12" />

      {/* Booking CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Book Your Stay</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Experience hospitality and music as one. Reserve your room at RoMarley Beach House.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/music/the-roots-sound" className="hover:text-[var(--gold)] transition-colors">The Roots Sound</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
