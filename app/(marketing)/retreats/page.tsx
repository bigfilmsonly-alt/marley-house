import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Retreats — The Marley Group',
  description:
    'Wellness and business retreats by the Marley Group. Yoga, meditation, plant-based nutrition, entrepreneurship workshops, and Rastafari traditions in Jamaica.',
  alternates: { canonical: `${SITE}/retreats` },
  openGraph: {
    title: 'Retreats — The Marley Group',
    description: 'Wellness and business retreats rooted in Jamaican heritage.',
    url: `${SITE}/retreats`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const retreatTypes = [
  { name: 'Wellness Retreat', desc: 'A multi-day immersion in mindfulness, yoga, breathwork, and plant-based cuisine. Mornings begin with sunrise meditation on the beach; evenings close with sound baths and reasoning sessions.' },
  { name: 'Business & Entrepreneurship', desc: 'For founders, creators, and operators. Strategy workshops, brand-building sessions, and candid conversations with Rohan Marley on building a global portfolio from cultural roots.' },
  { name: 'Music & Culture', desc: 'Studio sessions, songwriting workshops, and guided tours of Jamaica\'s musical landmarks. Experience the creative energy that shaped reggae, dancehall, and the Marley legacy.' },
  { name: 'Family Heritage', desc: 'A guided journey through Marley history and Jamaican tradition. Visit Nine Mile, cook ital food with local chefs, and connect with the land that built the legacy.' },
];

export default function RetreatsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Immersive Programs
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Retreats
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Marley Group retreats combine wellness, entrepreneurship, and cultural immersion
        in Jamaica. Whether you seek stillness or strategy, each program is designed to
        nourish the body, sharpen the mind, and reconnect with heritage.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Retreat Programs</h2>
        <div className="space-y-8">
          {retreatTypes.map((r) => (
            <div key={r.name} className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors">
              <h3 className="text-[var(--cream)] font-semibold text-lg mb-2">{r.name}</h3>
              <p className="text-[var(--dim)] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What Is Included</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          All retreats include accommodations at RoMarley Beach House, farm-to-table meals,
          daily programming, and airport transfers. Group sizes are kept intentionally small
          to preserve the intimacy of the experience.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Optional add-ons include private coaching sessions, spa treatments, and extended
          cultural excursions to the Blue Mountains and Kingston.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Join a Retreat
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Upcoming retreat dates and registration available at romarleybeachhouse.com.
        </p>
        <a
          href="https://romarleybeachhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Upcoming Retreats
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/romarley-beach-house/rooms" className="hover:text-[var(--gold)] transition-colors">Rooms</Link>
        <Link href="/romarley-beach-house/events" className="hover:text-[var(--gold)] transition-colors">Events</Link>
        <Link href="/experiences" className="hover:text-[var(--gold)] transition-colors">Experiences</Link>
        <Link href="/hospitality" className="hover:text-[var(--gold)] transition-colors">Hospitality</Link>
      </nav>
    </article>
  );
}
