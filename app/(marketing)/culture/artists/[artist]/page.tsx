import type { Metadata } from 'next';
import Link from 'next/link';
import { artists, getArtistBySlug, getAllArtistSlugs } from '@/content/artists';

const SITE_URL = 'https://marley-house.vercel.app';

export function generateStaticParams() {
  return getAllArtistSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ artist: string }>;
}): Promise<Metadata> {
  const { artist: slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return { title: 'Artist — RM' };
  return {
    title: `${artist.name} — Culture — RM`,
    description: artist.bio,
    alternates: { canonical: `${SITE_URL}/culture/artists/${slug}` },
    openGraph: {
      title: `${artist.name} — Culture — RM`,
      description: artist.bio,
      url: `${SITE_URL}/culture/artists/${slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

const genreLabels: Record<string, string> = {
  reggae: 'Reggae',
  afrobeats: 'Afrobeats',
  dancehall: 'Dancehall',
  'reggae-fusion': 'Reggae Fusion',
};

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ artist: string }>;
}) {
  const { artist: slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return (
      <article className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="font-display text-4xl text-[var(--cream)]">Artist not found</h1>
        <Link href="/culture" className="text-[var(--gold)] text-sm mt-4 inline-block">
          Back to Culture &rarr;
        </Link>
      </article>
    );
  }

  const related = artists
    .filter((a) => a.genre === artist.genre && a.slug !== artist.slug)
    .slice(0, 4);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/culture"
        className="text-[var(--dim)] text-xs tracking-wider uppercase hover:text-[var(--gold)] transition-colors mb-8 inline-block"
      >
        &larr; Culture
      </Link>

      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-2 tracking-tight">
        {artist.name}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-[var(--dim)] text-xs tracking-[0.2em] uppercase">
          {genreLabels[artist.genre] || artist.genre}
        </span>
        <span className="text-[var(--line)]">/</span>
        <span className="text-[var(--dim)] text-xs">{artist.country}</span>
      </div>

      <div className="gold-rule mb-12" />

      <section className="mb-12">
        <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl">
          {artist.bio}
        </p>
      </section>

      <section className="border border-[var(--line)] rounded-2xl p-8 mb-12">
        <h2 className="text-[var(--dim)] text-[10px] tracking-[0.3em] uppercase mb-3">
          Marley Connection
        </h2>
        <p className="text-[var(--cream)] leading-relaxed">{artist.collaboration}</p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl text-[var(--cream)] mb-4">Listen</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href={artist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] rounded-lg px-6 py-3 text-[var(--cream)] text-sm font-semibold hover:border-[var(--gold)] transition-colors"
          >
            Spotify
          </a>
          <a
            href={`https://instagram.com/${artist.instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] rounded-lg px-6 py-3 text-[var(--cream)] text-sm font-semibold hover:border-[var(--gold)] transition-colors"
          >
            {artist.instagramHandle}
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mb-12">
          <h2 className="font-display text-xl text-[var(--cream)] mb-4">Related Artists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/culture/artists/${r.slug}`}
                className="border border-[var(--line)] rounded-lg p-4 hover:border-[var(--gold)] transition-colors text-center"
              >
                <span className="text-[var(--cream)] text-sm font-semibold">{r.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/culture" className="hover:text-[var(--gold)] transition-colors">Culture</Link>
        <Link href="/culture/reggae" className="hover:text-[var(--gold)] transition-colors">Reggae</Link>
        <Link href="/culture/afrobeats" className="hover:text-[var(--gold)] transition-colors">Afrobeats</Link>
        <Link href="/culture/collaborations" className="hover:text-[var(--gold)] transition-colors">Collaborations</Link>
      </nav>
    </article>
  );
}
