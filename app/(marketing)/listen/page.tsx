import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Listen — The Marley Sound',
  description:
    'Stream the Marley family across every platform. Bob Marley, Ziggy, Stephen, Damian, YG Marley, Skip Marley and more — on Spotify, Apple Music, and Tidal.',
  alternates: { canonical: `${SITE_URL}/listen` },
  openGraph: {
    title: 'Listen — The Marley Sound',
    description: 'The Marley family on every streaming platform.',
    url: `${SITE_URL}/listen`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

type StreamLink = { platform: string; url: string };
type Artist = { name: string; href: string; note: string; streams: StreamLink[] };

const artists: Artist[] = [
  {
    name: 'Bob Marley & The Wailers',
    href: '/bob-marley',
    note: '75 million records sold. The foundation of everything.',
    streams: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD' },
      { platform: 'Apple Music', url: 'https://music.apple.com/artist/bob-marley-the-wailers/879273' },
      { platform: 'Tidal', url: 'https://tidal.com/browse/artist/145' },
    ],
  },
  {
    name: 'Ziggy Marley',
    href: '/ziggy-marley',
    note: 'Eight-time Grammy winner. Melody Makers to solo excellence.',
    streams: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/4FMRrNbpWriSdOlONCFxgz' },
      { platform: 'Apple Music', url: 'https://music.apple.com/artist/ziggy-marley/91047' },
      { platform: 'Tidal', url: 'https://tidal.com/browse/artist/14945' },
    ],
  },
  {
    name: 'Stephen Marley',
    href: '/stephen-marley',
    note: 'Five Grammys. Producer behind some of reggae\'s defining records.',
    streams: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/6LeJnUECRikjYBBg2bsxHo' },
      { platform: 'Apple Music', url: 'https://music.apple.com/artist/stephen-marley/3996865' },
      { platform: 'Tidal', url: 'https://tidal.com/browse/artist/3621' },
    ],
  },
  {
    name: 'Damian "Jr. Gong" Marley',
    href: '/damian-marley',
    note: 'Two-time Grammy winner. "Welcome to Jamrock" changed the game.',
    streams: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/6MkCrsNmMFVYOjnmalNTiY' },
      { platform: 'Apple Music', url: 'https://music.apple.com/artist/damian-jr-gong-marley/5765479' },
      { platform: 'Tidal', url: 'https://tidal.com/browse/artist/15363' },
    ],
  },
  {
    name: 'YG Marley',
    href: '/yg-marley',
    note: 'Global No. 1 with "Praise Jah in the Moonlight." The next wave.',
    streams: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/3LZkYnVjyNnqIGBpgJvAU6' },
      { platform: 'Apple Music', url: 'https://music.apple.com/artist/yg-marley/1672840987' },
      { platform: 'Tidal', url: 'https://tidal.com/browse/artist/37670714' },
    ],
  },
  {
    name: 'Skip Marley',
    href: '/skip-marley',
    note: 'Grammy-nominated. Collaborations with Katy Perry and H.E.R.',
    streams: [
      { platform: 'Spotify', url: 'https://open.spotify.com/artist/0sVbbzmqpG1qJDI4TiWJ30' },
      { platform: 'Apple Music', url: 'https://music.apple.com/artist/skip-marley/1098452939' },
      { platform: 'Tidal', url: 'https://tidal.com/browse/artist/8263730' },
    ],
  },
];

export default function ListenPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Listen
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Stream the Marley family across every platform. From Bob&apos;s catalog to YG&apos;s
        global breakthrough — the sound that defined a culture, available everywhere.
      </p>

      <div className="gold-rule mb-12" />

      {artists.map((artist) => (
        <section key={artist.name} className="mb-12">
          <div className="flex items-baseline gap-3 mb-2">
            <Link href={artist.href} className="font-display text-xl text-[var(--cream)] hover:text-[var(--gold)] transition-colors">
              {artist.name}
            </Link>
          </div>
          <p className="text-[var(--dim)] text-sm mb-4">{artist.note}</p>
          <div className="flex flex-wrap gap-3">
            {artist.streams.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--line)] rounded px-4 py-2 text-xs tracking-wider text-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              >
                {s.platform}
              </a>
            ))}
          </div>
          <div className="gold-rule mt-8 opacity-30" />
        </section>
      ))}

      <section className="mb-12 mt-4">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Marley Catalog</h2>
        <p className="text-[var(--dim)] leading-relaxed text-sm">
          The combined Marley catalog spans over 50 years of recorded music — from the Wailers&apos;
          early ska recordings through three generations of solo work. Over 20 Grammy nominations.
          13 wins. Billions of streams. One family.
        </p>
      </section>

      <nav className="flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/dynasty" className="hover:text-[var(--gold)] transition-colors">The Dynasty</Link>
        <Link href="/watch-all" className="hover:text-[var(--gold)] transition-colors">Watch</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/the-family-tree" className="hover:text-[var(--gold)] transition-colors">Family Tree</Link>
      </nav>
    </article>
  );
}
