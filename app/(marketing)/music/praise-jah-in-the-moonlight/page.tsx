import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Praise Jah in the Moonlight — YG Marley',
  description:
    'YG Marley\'s "Praise Jah in the Moonlight" — over 1 billion streams. Stream on Spotify, Apple Music, Tidal, and YouTube. The next chapter of the Marley legacy.',
  alternates: { canonical: `${SITE}/music/praise-jah-in-the-moonlight` },
  openGraph: {
    title: 'Praise Jah in the Moonlight — YG Marley',
    description:
      'The breakout single carrying the Marley legacy into a new generation. Over 1 billion streams worldwide.',
    url: `${SITE}/music/praise-jah-in-the-moonlight`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const streamLinks = [
  { name: 'Spotify', href: 'https://open.spotify.com/track/2TbCHRCtyQWG2MePRPBv79' },
  { name: 'Apple Music', href: 'https://music.apple.com/album/praise-jah-in-the-moonlight' },
  { name: 'YouTube Music', href: 'https://music.youtube.com/watch?v=PkGwI7nGehA' },
  { name: 'Tidal', href: 'https://tidal.com/track/praise-jah-in-the-moonlight' },
  { name: 'Amazon Music', href: 'https://music.amazon.com/albums/praise-jah-in-the-moonlight' },
];

export default function PraiseJahPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Praise Jah in the Moonlight
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Released by YG Marley, son of Rohan Marley and Lauryn Hill, &ldquo;Praise Jah in
        the Moonlight&rdquo; has surpassed one billion streams worldwide. The single blends
        reggae roots with contemporary soul, introducing the Marley legacy to Gen Z and
        making it one of the most-streamed reggae-influenced tracks of all time.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">About the Track</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          &ldquo;Praise Jah in the Moonlight&rdquo; channels the spiritual reverence of Bob
          Marley through a modern sonic lens. YG Marley&apos;s delivery carries the ancestral
          weight of reggae while speaking directly to a generation raised on streaming.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The track went viral on TikTok before climbing Billboard charts globally, proving
          that the Marley DNA transcends eras and algorithms.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Stream Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {streamLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--line)] rounded-lg p-5 text-center hover:border-[var(--gold)] transition-colors"
            >
              <span className="text-[var(--cream)] text-sm font-semibold">{s.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Artist</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          YG Marley carries forward a lineage that reshaped global music. Born into the
          intersection of reggae royalty and hip-hop excellence, he channels both traditions
          into something entirely his own.
        </p>
        <Link
          href="/music/yg-marley"
          className="text-[var(--gold)] text-sm font-semibold hover:underline"
        >
          Full YG Marley Profile &rarr;
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/music/releases" className="hover:text-[var(--gold)] transition-colors">Releases</Link>
        <Link href="/music/playlists" className="hover:text-[var(--gold)] transition-colors">Playlists</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
      </nav>
    </article>
  );
}
