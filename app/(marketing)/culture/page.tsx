import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Culture — RM',
  description:
    'The sonic and visual universe connected to the Marley legacy. Reggae, Afrobeats, and the artists who carry the frequency forward.',
  alternates: { canonical: `${SITE_URL}/culture` },
  openGraph: {
    title: 'Culture — RM',
    description:
      'Reggae, Afrobeats, and the artists connected to the Marley legacy.',
    url: `${SITE_URL}/culture`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const sections = [
  {
    title: 'Reggae',
    subtitle: 'The Root Frequency',
    description:
      'The foundation of everything. From Trench Town to every corner of the earth, reggae is the frequency the Marley name was built on.',
    href: '/culture/reggae',
  },
  {
    title: 'Afrobeats',
    subtitle: 'The New Wave',
    description:
      'The Atlantic current that connects Kingston to Lagos. Afrobeats carries reggae DNA into the most vital sound movement of the decade.',
    href: '/culture/afrobeats',
  },
  {
    title: 'Collaborations',
    subtitle: 'Verified Connections',
    description:
      'Real projects, real records, real partnerships. The collaborations that extend the Marley frequency across genres and borders.',
    href: '/culture/collaborations',
  },
  {
    title: 'Stations & Radio',
    subtitle: 'Curated Listening',
    description:
      'Reggae and Afrobeats radio stations, playlists, and editorial streams selected by the culture.',
    href: '/culture/stations',
  },
];

export default function CulturePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Culture
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The sonic and visual universe connected to the Marley legacy.
        Reggae, Afrobeats, and the artists who carry the frequency forward.
      </p>

      <div className="gold-rule mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {sections.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="border border-[var(--line)] rounded-2xl p-8 hover:border-[var(--gold)] transition-colors group"
          >
            <span className="text-[var(--dim)] text-[10px] tracking-[0.3em] uppercase block mb-2">
              {s.subtitle}
            </span>
            <h2 className="font-display text-2xl text-[var(--cream)] mb-3 group-hover:text-[var(--gold)] transition-colors">
              {s.title}
            </h2>
            <p className="text-[var(--dim)] text-sm leading-relaxed">
              {s.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Explore the Network
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Twelve artists across reggae, Afrobeats, and dancehall — each connected to the Marley legacy.
        </p>
        <Link
          href="/culture/artists/damian-marley"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Artists
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/culture/reggae" className="hover:text-[var(--gold)] transition-colors">Reggae</Link>
        <Link href="/culture/afrobeats" className="hover:text-[var(--gold)] transition-colors">Afrobeats</Link>
        <Link href="/culture/collaborations" className="hover:text-[var(--gold)] transition-colors">Collaborations</Link>
        <Link href="/culture/stations" className="hover:text-[var(--gold)] transition-colors">Stations</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
