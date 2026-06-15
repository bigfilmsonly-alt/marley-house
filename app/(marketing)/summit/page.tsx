import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Marley Summit — The Marley Group',
  description:
    'The Marley Summit — an annual gathering of entrepreneurs, creators, and operators building at the intersection of culture and commerce.',
  alternates: { canonical: `${SITE}/summit` },
  openGraph: {
    title: 'The Marley Summit — The Marley Group',
    description: 'Annual gathering of culture-driven entrepreneurs, creators, and operators.',
    url: `${SITE}/summit`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const tracks = [
  { title: 'Main Stage', description: 'Keynotes and fireside conversations with founders who have built generational brands. Unscripted. Unfiltered.' },
  { title: 'Operator Sessions', description: 'Closed-door workshops on supply chain, brand building, capital raising, and scaling across borders.' },
  { title: 'Culture & Commerce', description: 'Panels exploring the intersection of music, art, food, cannabis, and business — where culture creates the market.' },
  { title: 'Deal Room', description: 'Structured networking for founders and investors. Curated introductions, pitch sessions, and partnership meetings.' },
];

const speakers = [
  'Rohan Marley — The Marley Group',
  'Select portfolio brand operators',
  'International entrepreneurs and culture builders',
  'Industry leaders across cannabis, coffee, hospitality, and media',
];

export default function SummitPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marley Summit
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        An annual gathering of entrepreneurs, creators, and operators who
        build at the intersection of culture and commerce. Three days in
        Jamaica. No panels about panels. Real conversations about real
        businesses.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Event</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The Marley Summit brings together 200 carefully selected founders,
          investors, and cultural leaders for three days of keynotes,
          workshops, deal-making, and community. Held annually in Jamaica at
          Marley Group properties.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          This is not a conference — it is an operating environment. Every
          session is designed to produce action, not applause. Attendees leave
          with partnerships, strategies, and a network that compounds over
          years.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{t.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Speakers</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          {speakers.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="text-[var(--dim)] text-sm mt-4 italic">
          Full speaker lineup announced 60 days before the event.
        </p>
      </section>

      <section className="text-center py-12 border border-[var(--line)] rounded-lg">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Secure Your Seat</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Attendance is limited to 200. Early registration opens to Marley Group
          members first, followed by public allocation.
        </p>
        <a
          href="mailto:summit@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Register Interest
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/fellowship" className="hover:text-[var(--gold)] transition-colors">Fellowship</Link>
        <Link href="/mentorship" className="hover:text-[var(--gold)] transition-colors">Mentorship</Link>
        <Link href="/experiences" className="hover:text-[var(--gold)] transition-colors">Experiences</Link>
      </nav>
    </article>
  );
}
