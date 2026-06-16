import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Collaborations — Culture — RM',
  description:
    'Verified collaborations across the Marley family network. Real records, real projects, real cultural connections.',
  alternates: { canonical: `${SITE_URL}/culture/collaborations` },
  openGraph: {
    title: 'Collaborations — Culture — RM',
    description: 'Verified collaborations across the Marley family network.',
    url: `${SITE_URL}/culture/collaborations`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const collaborations = [
  {
    title: 'YG Marley x Davido',
    artists: ['YG Marley', 'Davido'],
    year: '2024',
    description:
      'A direct bridge between the Marley reggae lineage and West African Afrobeats. This collaboration brought together Rohan Marley\'s son with one of Nigeria\'s biggest artists, marking a generational and geographic crossover.',
    genre: 'Reggae / Afrobeats',
    links: [
      { label: 'YG Marley on Spotify', href: 'https://open.spotify.com/artist/4ZUNH3kgbpLDqFfFLjCi2j' },
      { label: 'Davido on Spotify', href: 'https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh' },
    ],
  },
  {
    title: 'Damian Marley x Nas — Distant Relatives',
    artists: ['Damian Marley', 'Nas'],
    year: '2010',
    description:
      'A full-length collaborative album that connected Jamaican reggae with East Coast hip-hop and Pan-African consciousness. Produced by Damian Marley, the album explored shared roots across the African diaspora.',
    genre: 'Reggae / Hip-Hop',
    links: [
      { label: 'Listen on Spotify', href: 'https://open.spotify.com/album/0MvSMeFf0KaKXoGNRUIDGR' },
    ],
  },
  {
    title: 'Stephen Marley x Damian Marley — Traffic Jam',
    artists: ['Stephen Marley', 'Damian Marley'],
    year: '2006',
    description:
      'A Grammy-winning collaboration between brothers that brought modern reggae production to mainstream audiences. The track demonstrated the Marley family\'s ability to evolve the sound while honoring its roots.',
    genre: 'Reggae',
    links: [
      { label: 'Stephen Marley on Spotify', href: 'https://open.spotify.com/artist/6KpCMFryGEIKzYGat9xJFR' },
    ],
  },
  {
    title: 'Skip Marley x H.E.R. — Slow Down',
    artists: ['Skip Marley', 'H.E.R.'],
    year: '2020',
    description:
      'A reggae-R&B crossover that reached number one on the Billboard Reggae chart. Skip Marley, nephew to Rohan, carried the family sound into mainstream pop territory with Grammy-nominated collaborator H.E.R.',
    genre: 'Reggae / R&B',
    links: [
      { label: 'Listen on Spotify', href: 'https://open.spotify.com/track/3tJotiSMwlWDUhvVSaDw4O' },
    ],
  },
  {
    title: 'Ziggy Marley x Lauryn Hill',
    artists: ['Ziggy Marley', 'Lauryn Hill'],
    year: '2014',
    description:
      'A collaboration connecting two pillars of the extended Marley family. Lauryn Hill, mother to YG Marley with Rohan, brought her singular voice to Ziggy\'s Fly Rasta album sessions.',
    genre: 'Reggae / Soul',
    links: [
      { label: 'Ziggy Marley on Spotify', href: 'https://open.spotify.com/artist/4dVDRjkFHYKejsfJjByDAX' },
    ],
  },
  {
    title: 'Damian Marley x Skrillex — Make It Bun Dem',
    artists: ['Damian Marley', 'Skrillex'],
    year: '2012',
    description:
      'A landmark collaboration that fused reggae-dancehall with electronic bass music. The track became one of the most recognizable reggae-electronic crossovers, bringing the Marley frequency to EDM audiences worldwide.',
    genre: 'Reggae / Electronic',
    links: [
      { label: 'Listen on Spotify', href: 'https://open.spotify.com/track/1MOWAO6sBqpDNsVCnq7a1Q' },
    ],
  },
];

export default function CollaborationsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Collaborations
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Verified connections. Real records, real projects, real partnerships that extend
        the Marley frequency across genres and borders.
      </p>

      <div className="gold-rule mb-12" />

      <div className="space-y-6 mb-16">
        {collaborations.map((c) => (
          <section
            key={c.title}
            className="border border-[var(--line)] rounded-2xl p-8 hover:border-[var(--gold)]/30 transition-colors"
          >
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
              <h2 className="font-display text-xl text-[var(--cream)]">{c.title}</h2>
              <span className="text-[var(--dim)] text-xs">{c.year}</span>
            </div>
            <span className="text-[var(--dim)] text-[10px] tracking-[0.3em] uppercase block mb-4">
              {c.genre}
            </span>
            <p className="text-[var(--dim)] text-sm leading-relaxed mb-5">
              {c.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--gold)] text-xs font-semibold hover:underline"
                >
                  {l.label} &rarr;
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Explore the Full Network
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Twelve artists across reggae, Afrobeats, and dancehall — each connected to the Marley legacy.
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
        <Link href="/culture/stations" className="hover:text-[var(--gold)] transition-colors">Stations</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
      </nav>
    </article>
  );
}
