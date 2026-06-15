import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Roots Sound — The Marley Group',
  description:
    'Explore the musical heritage of the Marley family — from reggae and dancehall to R&B and soul. How the Marley sound evolved across generations.',
  alternates: { canonical: `${SITE}/music/the-roots-sound` },
  openGraph: {
    title: 'The Roots Sound — The Marley Group',
    description: 'Reggae, dancehall, R&B, soul — the Marley sound across generations.',
    url: `${SITE}/music/the-roots-sound`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const genres = [
  {
    name: 'Reggae',
    desc: 'The foundation. Bob Marley made reggae the heartbeat of a global movement — roots rhythms that still define the family sound.',
  },
  {
    name: 'Dancehall',
    desc: 'The evolution. From Kingston studios to worldwide stages, the next generation brought uptempo energy and digital production to the Marley name.',
  },
  {
    name: 'R&B',
    desc: 'The crossover. Smooth melodies and soulful arrangements that bridge Jamaican roots with contemporary American sound.',
  },
  {
    name: 'Soul',
    desc: 'The thread. Across every genre, soul runs through every Marley record — raw emotion, spiritual depth, and unapologetic truth.',
  },
];

const streaming = [
  { name: 'Spotify', href: 'https://open.spotify.com' },
  { name: 'Apple Music', href: 'https://music.apple.com' },
  { name: 'YouTube Music', href: 'https://music.youtube.com' },
  { name: 'Tidal', href: 'https://tidal.com' },
];

export default function TheRootsSoundPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Roots Sound
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley sound did not stop with Bob. It evolved — through his children, his grandchildren,
        and every artist who carries the family frequency. From reggae to dancehall to R&B to soul,
        this is how the roots grew.
      </p>

      <div className="gold-rule mb-12" />

      {/* Generations */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Across Generations</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Bob Marley created a sonic language that transcended Jamaica. His sons — Ziggy, Stephen,
          Damian, Julian, Ky-Mani — each carried it forward with their own inflection. Now a new
          generation, led by artists like YG Marley, is reintroducing those roots to a global
          audience hungry for authenticity. The Roots Sound is not a single genre. It is a
          philosophy: music made from truth, built on rhythm, and delivered with soul.
        </p>
      </section>

      {/* Genre Grid */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">The Four Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {genres.map((g) => (
            <div
              key={g.name}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <h3 className="font-display text-lg text-[var(--gold)] mb-2">{g.name}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Streaming Links */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Listen Now</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Stream the Marley catalog on your preferred platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {streaming.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[var(--gold)] text-[var(--gold)] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/music/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/roots/watch" className="hover:text-[var(--gold)] transition-colors">Watch ROOTS</Link>
      </nav>
    </article>
  );
}
