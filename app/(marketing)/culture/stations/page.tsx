import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Stations & Radio — Culture — RM',
  description:
    'Curated reggae and Afrobeats radio stations, playlists, and editorial streams connected to the Marley cultural network.',
  alternates: { canonical: `${SITE_URL}/culture/stations` },
  openGraph: {
    title: 'Stations & Radio — Culture — RM',
    description: 'Curated reggae and Afrobeats radio and streaming stations.',
    url: `${SITE_URL}/culture/stations`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const reggaeStations = [
  { name: 'Tuff Gong Radio', description: 'The official Marley family radio stream.', href: 'https://www.instagram.com/tuffgongradio/' },
  { name: 'Spotify — Reggae Classics', description: 'Essential roots and rocksteady from the golden era.', href: 'https://open.spotify.com/genre/reggae' },
  { name: 'Apple Music — Pure Reggae', description: 'Apple\'s curated reggae editorial playlist.', href: 'https://music.apple.com/genre/reggae' },
  { name: 'BBC Radio 1Xtra', description: 'UK\'s leading station for reggae, dancehall, and Caribbean music.', href: 'https://www.bbc.co.uk/1xtra' },
  { name: 'Irie FM', description: 'Jamaica\'s premier reggae radio station, broadcasting from Kingston.', href: 'https://iriefm.net/' },
];

const afrobeatsStations = [
  { name: 'Spotify — Afrobeats Hits', description: 'The definitive Afrobeats playlist, updated weekly.', href: 'https://open.spotify.com/genre/afrobeats' },
  { name: 'Apple Music — Africa Now', description: 'Apple\'s flagship African music editorial.', href: 'https://music.apple.com/playlist/africa-now' },
  { name: 'Tidal — Afrobeats Essential', description: 'Tidal\'s curated Afrobeats selection.', href: 'https://tidal.com/browse/genre/afrobeats' },
  { name: 'Beats 1 — Africa Rising', description: 'Interviews and exclusives from the Afrobeats frontier.', href: 'https://music.apple.com/show/africa-now-radio' },
];

function StationGrid({ stations }: { stations: typeof reggaeStations }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stations.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors group"
        >
          <h3 className="text-[var(--cream)] text-sm font-semibold mb-1 group-hover:text-[var(--gold)] transition-colors">
            {s.name}
          </h3>
          <p className="text-[var(--dim)] text-xs leading-relaxed">{s.description}</p>
        </a>
      ))}
    </div>
  );
}

export default function StationsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Stations &amp; Radio
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Curated listening. Reggae and Afrobeats radio stations, editorial playlists,
        and streaming channels selected by the culture.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Reggae</h2>
        <StationGrid stations={reggaeStations} />
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Afrobeats</h2>
        <StationGrid stations={afrobeatsStations} />
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Explore the Network
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Artists, collaborations, and the genres that connect to the Marley frequency.
        </p>
        <Link
          href="/culture"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Back to Culture
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/culture" className="hover:text-[var(--gold)] transition-colors">Culture</Link>
        <Link href="/culture/reggae" className="hover:text-[var(--gold)] transition-colors">Reggae</Link>
        <Link href="/culture/afrobeats" className="hover:text-[var(--gold)] transition-colors">Afrobeats</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
      </nav>
    </article>
  );
}
