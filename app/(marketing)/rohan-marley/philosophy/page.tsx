import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Philosophy — Rohan Marley',
  description:
    'The guiding principles of Rohan Marley: legacy over profit, fire over comfort, One Love Economics, Rastafari wisdom, and the family table.',
  alternates: { canonical: `${SITE}/rohan-marley/philosophy` },
  openGraph: {
    title: 'Philosophy — Rohan Marley',
    description: 'Legacy, fire, family, and Rastafari principles — the philosophy behind The Marley Group.',
    url: `${SITE}/rohan-marley/philosophy`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const tenets = [
  {
    title: 'Legacy Over Profit',
    quote: 'Build something your grandchildren will be proud to inherit.',
    body: 'Every decision at The Marley Group is measured in decades, not quarters. A brand is not built for exit — it is built for permanence. The goal is not wealth for one generation but a foundation for every generation that follows.',
  },
  {
    title: 'Fire',
    quote: 'Comfort is the enemy of greatness. Stay in the fire.',
    body: 'From the football field to the boardroom, Rohan believes in the transformative power of struggle. Fire refines. Pressure creates diamonds. Every brand under The Marley Group was forged in challenge, not convenience.',
  },
  {
    title: 'The Family Table',
    quote: 'If everyone cannot eat, the table is too small.',
    body: 'Business is family and family is business. The Marley table is long — partners, farmers, artists, and community sit together. Abundance is not hoarded. It is shared.',
  },
  {
    title: 'One Love Economics',
    quote: 'Commerce should heal, not exploit.',
    body: 'One Love is not just a song — it is an economic philosophy. Fair wages for Jamaican farmers. Equity in cannabis. Hospitality that lifts a community. Every transaction should leave both sides better.',
  },
  {
    title: 'Rastafari Principles',
    quote: 'Respect the earth. Honor the herb. Protect the culture.',
    body: 'Rastafari is the spiritual root of everything Rohan builds. Respect for nature, reverence for the sacred herb, commitment to community, and the belief that culture is the most valuable currency on earth.',
  },
];

export default function PhilosophyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Philosophy — Rohan Marley
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-16 border-l-2 border-[var(--gold)] pl-5">
        Rohan Marley operates by five principles: legacy over profit, the transformative
        power of fire, the family table, One Love Economics, and Rastafari wisdom. These
        beliefs shape every brand, partnership, and decision within The Marley Group.
      </p>

      {/* Tenets */}
      {tenets.map((t, i) => (
        <section
          key={t.title}
          className="mb-16 bg-[var(--panel)] border border-[var(--line)] rounded-lg p-8"
        >
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase mb-3">
            {String(i + 1).padStart(2, '0')}
          </p>
          <h2 className="font-display text-2xl text-[var(--cream)] mb-4">{t.title}</h2>
          <blockquote className="text-[var(--gold-soft)] italic text-lg font-display leading-relaxed mb-4 border-l-2 border-[var(--gold)] pl-5">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="text-[var(--dim)] leading-relaxed">{t.body}</p>
        </section>
      ))}

      {/* CTA */}
      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Live the philosophy.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/rohan-marley/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">The Marley Group</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
