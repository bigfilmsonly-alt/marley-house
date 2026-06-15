import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Playlists — The Marley Group',
  description:
    'Curated playlists from The Marley Group on Spotify and Apple Music. Reggae roots, modern vibes, and the sounds that shaped a dynasty.',
  alternates: { canonical: `${SITE}/music/playlists` },
  openGraph: {
    title: 'Playlists — The Marley Group',
    description:
      'Curated playlists on Spotify and Apple Music — from classic roots to the next generation.',
    url: `${SITE}/music/playlists`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const playlists = [
  { title: 'Roots & Revolution', desc: 'The foundation — Bob Marley classics and the reggae canon that changed the world.' },
  { title: 'Next Generation Marley', desc: 'YG Marley, Skip Marley, and the new wave carrying the legacy forward.' },
  { title: 'House Sessions', desc: 'Acoustic and live recordings from Marley properties across Jamaica.' },
  { title: 'Lion Order Vibes', desc: 'The soundtrack to the Lion Order lifestyle — conscious, elevated, grounded.' },
  { title: 'Morning Coffee Rhythms', desc: 'Pair with Marley Coffee. Slow mornings, deep grooves, Jamaican sunshine.' },
  { title: 'Beach House Sunset', desc: 'Golden hour at Ro Marley Beach House. Downtempo, warm, and timeless.' },
];

export default function PlaylistsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Playlists
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Music curated by The Marley Group — from foundational roots reggae to the sounds
        of the next generation. Each playlist is built to carry a mood, tell a story, and
        connect you to the Marley universe.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Curated Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {playlists.map((p) => (
            <div key={p.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--cream)] font-semibold mb-2">{p.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Follow Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] rounded-lg p-5 text-center hover:border-[var(--gold)] transition-colors"
          >
            <span className="text-[var(--cream)] text-sm font-semibold">Spotify</span>
          </a>
          <a
            href="https://music.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] rounded-lg p-5 text-center hover:border-[var(--gold)] transition-colors"
          >
            <span className="text-[var(--cream)] text-sm font-semibold">Apple Music</span>
          </a>
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/music/releases" className="hover:text-[var(--gold)] transition-colors">Releases</Link>
        <Link href="/music/tour" className="hover:text-[var(--gold)] transition-colors">Tour</Link>
        <Link href="/music/praise-jah-in-the-moonlight" className="hover:text-[var(--gold)] transition-colors">Praise Jah</Link>
      </nav>
    </article>
  );
}
