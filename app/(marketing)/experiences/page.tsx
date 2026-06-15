import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Experiences — The Marley Group',
  description:
    'Explore hospitality experiences from the Marley Group: RoMarley Beach House, wellness retreats, cultural excursions, and private events curated by Rohan Marley.',
  alternates: { canonical: `${SITE}/experiences` },
  openGraph: {
    title: 'Experiences — The Marley Group',
    description: 'Luxury hospitality rooted in Jamaican heritage by Rohan Marley.',
    url: `${SITE}/experiences`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const experiences = [
  { name: 'RoMarley Beach House', desc: 'A luxury beachfront escape on the Caribbean coast. Ocean views, Marley Coffee at sunrise, and live music under the stars.', href: '/romarley-beach-house' },
  { name: 'Wellness Retreats', desc: 'Multi-day immersions blending mindfulness, movement, farm-to-table nutrition, and Rastafari wellness traditions.', href: '/retreats' },
  { name: 'Cultural Excursions', desc: 'Guided journeys to Nine Mile, Blue Mountain coffee estates, Kingston music studios, and historic Marley landmarks.', href: '/romarley-beach-house/events' },
  { name: 'Private Events', desc: 'Weddings, corporate retreats, and milestone celebrations hosted with Marley hospitality at its finest.', href: '/romarley-beach-house/events' },
];

export default function ExperiencesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Hospitality
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Experiences
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group hospitality portfolio brings Jamaican heritage to life through
        luxury stays, wellness retreats, cultural excursions, and private events — all
        curated with the intention and warmth that define the Marley name.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Our Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((e) => (
            <Link
              key={e.name}
              href={e.href}
              className="block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">{e.name}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{e.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Marley Standard</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Every Marley Group experience is built on three pillars: heritage, hospitality,
          and heart. Guests arrive as visitors and leave as family. From the locally sourced
          cuisine to the curated music playlists, every detail is intentional.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley&apos;s vision for hospitality is not about grandeur for its own sake.
          It is about creating spaces where people feel welcomed, nourished, and connected
          to something larger than themselves.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Start Your Journey
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Book a stay, join a retreat, or plan a private event with the Marley Group.
        </p>
        <Link
          href="/romarley-beach-house/book"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Book Your Stay
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/romarley-beach-house/rooms" className="hover:text-[var(--gold)] transition-colors">Rooms</Link>
        <Link href="/retreats" className="hover:text-[var(--gold)] transition-colors">Retreats</Link>
        <Link href="/hospitality" className="hover:text-[var(--gold)] transition-colors">Hospitality</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
      </nav>
    </article>
  );
}
