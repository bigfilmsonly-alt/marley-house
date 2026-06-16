import type { Metadata } from 'next';
import Link from 'next/link';
import { artists } from '@/content/artists';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Afrobeats — The New Wave',
  description:
    'The Atlantic current connecting Kingston to Lagos. Afrobeats carries reggae DNA into the most vital sound movement of the decade.',
  alternates: { canonical: `${SITE_URL}/culture/afrobeats` },
  openGraph: {
    title: 'Afrobeats — The New Wave',
    description: 'Afrobeats and the Marley reggae crossover.',
    url: `${SITE_URL}/culture/afrobeats`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const afrobeatsArtists = artists.filter((a) => a.genre === 'afrobeats');

const streams = [
  { name: 'Spotify — Afrobeats Hits', href: 'https://open.spotify.com/genre/afrobeats' },
  { name: 'Apple Music — Africa Now', href: 'https://music.apple.com/playlist/africa-now' },
  { name: 'Tidal — Afrobeats Essential', href: 'https://tidal.com/browse/genre/afrobeats' },
];

export default function AfrobeatsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Afrobeats
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The new wave. An Atlantic current carrying rhythm from Lagos and Accra to
        London, New York, and the world — with reggae in its bloodstream.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          The Reggae Connection
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Afrobeats did not emerge in isolation. Bob Marley&apos;s 1980 performance at
          Zimbabwe&apos;s independence celebration planted a seed that took root across
          the continent. Fela Kuti and Bob Marley were contemporaries who shared stages
          and philosophies. The rhythmic DNA travels both directions across the Atlantic.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Today, that connection is explicit. Burna Boy builds reggae-dancehall structures
          into Afro-fusion. Davido and YG Marley have collaborated directly, merging the
          Marley lineage with West African melody. The genre boundary between reggae and
          Afrobeats has never been thinner.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          YG Marley and the Bridge
        </h2>
        <div className="border border-[var(--line)] rounded-2xl p-8">
          <p className="text-[var(--dim)] leading-relaxed mb-4">
            Born to Rohan Marley and Lauryn Hill, YG Marley represents the generational
            bridge between Caribbean roots and the global Afrobeats wave. His collaboration
            with Davido made the connection literal — Marley frequency meeting Lagos energy
            on a single track.
          </p>
          <Link
            href="/culture/collaborations"
            className="text-[var(--gold)] text-sm font-semibold hover:underline"
          >
            View Collaborations &rarr;
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Key Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {afrobeatsArtists.map((a) => (
            <Link
              key={a.slug}
              href={`/culture/artists/${a.slug}`}
              className="border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors group"
            >
              <h3 className="text-[var(--cream)] font-semibold text-sm group-hover:text-[var(--gold)] transition-colors">
                {a.name}
              </h3>
              <span className="text-[var(--dim)] text-xs">{a.country}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Stream Afrobeats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {streams.map((s) => (
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

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/culture" className="hover:text-[var(--gold)] transition-colors">Culture</Link>
        <Link href="/culture/reggae" className="hover:text-[var(--gold)] transition-colors">Reggae</Link>
        <Link href="/culture/collaborations" className="hover:text-[var(--gold)] transition-colors">Collaborations</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
      </nav>
    </article>
  );
}
