import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Hospitality — The Marley Group',
  description:
    'The Marley Group hospitality portfolio: RoMarley Beach House, wellness retreats, and curated experiences. Luxury rooted in Jamaican heritage by Rohan Marley.',
  alternates: { canonical: `${SITE}/hospitality` },
  openGraph: {
    title: 'Hospitality — The Marley Group',
    description: 'Luxury hospitality rooted in Jamaican heritage by Rohan Marley.',
    url: `${SITE}/hospitality`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  { name: 'RoMarley Beach House', desc: 'A luxury beachfront property on the Caribbean coast. Ocean-view rooms, farm-to-table dining, live music, and cultural excursions — all under one roof.', href: '/romarley-beach-house' },
  { name: 'Retreats', desc: 'Multi-day wellness and entrepreneurship immersions hosted at RoMarley Beach House. Small groups, world-class facilitators, and Rastafari-rooted programming.', href: '/retreats' },
  { name: 'Experiences', desc: 'Curated cultural excursions, private events, and bespoke hospitality packages designed for individuals, families, and corporate groups.', href: '/experiences' },
];

export default function HospitalityPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        The Marley Group
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Hospitality
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group hospitality portfolio brings Jamaican heritage to life through
        luxury stays, wellness retreats, and curated cultural experiences. Every property
        and program carries Rohan Marley&apos;s vision: guests arrive as visitors and leave
        as family.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Our Portfolio</h2>
        <div className="space-y-6">
          {pillars.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold text-lg mb-2">{p.name}</h3>
              <p className="text-[var(--dim)] leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Philosophy</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Marley hospitality is not about five-star pretension. It is about warmth, intention,
          and connection. Every detail — from the locally sourced cuisine to the handpicked
          music — reflects a commitment to making people feel at home, even when they are
          far from it.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley built this portfolio on the same principle his father carried through
          music: create something that moves people. In hospitality, that movement happens
          through the senses — taste, sound, sight, and the feeling of belonging.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Heritage Meets Luxury
        </h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Jamaica is the foundation of everything the Marley Group builds. The Blue Mountains
          supply the coffee. The Caribbean coast sets the stage. The culture provides the
          soundtrack. Marley hospitality simply opens the door and invites the world in.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Begin Your Stay
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Book a room, join a retreat, or plan a private event.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Book at romarleybeachhouse.com
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/romarley-beach-house/rooms" className="hover:text-[var(--gold)] transition-colors">Rooms</Link>
        <Link href="/romarley-beach-house/book" className="hover:text-[var(--gold)] transition-colors">Book</Link>
        <Link href="/retreats" className="hover:text-[var(--gold)] transition-colors">Retreats</Link>
        <Link href="/experiences" className="hover:text-[var(--gold)] transition-colors">Experiences</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
      </nav>
    </article>
  );
}
