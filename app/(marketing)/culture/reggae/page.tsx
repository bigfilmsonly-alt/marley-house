import type { Metadata } from 'next';
import Link from 'next/link';
import { artists } from '@/content/artists';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Reggae — The Root Frequency',
  description:
    'The genre Bob Marley carried to the world. From Trench Town to global consciousness, reggae is the root frequency of the Marley legacy.',
  alternates: { canonical: `${SITE_URL}/culture/reggae` },
  openGraph: {
    title: 'Reggae — The Root Frequency',
    description: 'The genre Bob Marley carried to the world.',
    url: `${SITE_URL}/culture/reggae`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const reggaeArtists = artists.filter(
  (a) => a.genre === 'reggae' || a.genre === 'reggae-fusion'
);
const dancehallArtists = artists.filter((a) => a.genre === 'dancehall');

const streams = [
  { name: 'Spotify — Reggae Classics', href: 'https://open.spotify.com/genre/reggae' },
  { name: 'Apple Music — Reggae', href: 'https://music.apple.com/genre/reggae' },
  { name: 'Tidal — Reggae Royalty', href: 'https://tidal.com/browse/genre/reggae' },
];

export default function ReggaePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Reggae
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The root frequency. Born in the yards of Kingston, amplified by Bob Marley
        into a global language of resistance, spirituality, and joy.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Through the Marley Lens
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Reggae did not begin with the Marleys, but its global reach is inseparable from
          them. Bob Marley transformed a local Jamaican sound into one of the most recognized
          musical languages on earth. Every generation since has carried that frequency forward
          — from Ziggy and Stephen to Damian, Julian, and now YG Marley.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley&apos;s role has been institutional. Through Tuff Gong, Lion Order, and
          ROOTS Media, he builds the infrastructure that keeps the culture alive — not just
          the music, but the philosophy it carries.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Key Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reggaeArtists.map((a) => (
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

      {dancehallArtists.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Dancehall</h2>
          <p className="text-[var(--dim)] leading-relaxed mb-6">
            The rhythmic sibling of roots reggae. Dancehall carries the same Kingston DNA
            through faster tempos, digital production, and global pop crossover.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dancehallArtists.map((a) => (
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
      )}

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Stream Reggae</h2>
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
        <Link href="/culture/afrobeats" className="hover:text-[var(--gold)] transition-colors">Afrobeats</Link>
        <Link href="/culture/collaborations" className="hover:text-[var(--gold)] transition-colors">Collaborations</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
      </nav>
    </article>
  );
}
