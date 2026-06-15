import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Releases — The Marley Group',
  description:
    'The complete Marley discography — from Bob Marley & The Wailers to YG Marley. Explore albums, singles, and collaborative projects across generations.',
  alternates: { canonical: `${SITE}/music/releases` },
  openGraph: {
    title: 'Releases — The Marley Group',
    description:
      'Albums, singles, and collaborative projects spanning the Marley musical legacy.',
    url: `${SITE}/music/releases`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const timeline = [
  { year: '1977', title: 'Exodus', artist: 'Bob Marley & The Wailers', note: 'Named Album of the Century by Time magazine' },
  { year: '1984', title: 'Legend', artist: 'Bob Marley & The Wailers', note: 'Best-selling reggae album of all time' },
  { year: '2009', title: 'Rebel Music', artist: 'The Marley Brothers', note: 'Family collaboration bridging eras' },
  { year: '2023', title: 'Praise Jah in the Moonlight', artist: 'YG Marley', note: 'Over 1 billion streams worldwide' },
  { year: '2024', title: 'Survival', artist: 'YG Marley', note: 'Follow-up single continuing the movement' },
];

export default function ReleasesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Releases
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley catalog is one of the most enduring bodies of work in modern music.
        From the revolutionary recordings of Bob Marley &amp; The Wailers to YG Marley&apos;s
        genre-blending new wave, each release carries the DNA of a legacy built on truth.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Discography Timeline</h2>
        <div className="space-y-6">
          {timeline.map((r) => (
            <div key={r.title} className="border border-[var(--line)] rounded-lg p-6">
              <span className="text-[var(--gold)] text-sm font-bold">{r.year}</span>
              <h3 className="text-[var(--cream)] text-lg font-semibold mt-1">{r.title}</h3>
              <p className="text-[var(--dim)] text-sm mt-1">{r.artist}</p>
              <p className="text-[var(--dim)] text-sm mt-2">{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Stream the Catalog</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The full Marley catalog is available on every major streaming platform.
        </p>
        <Link
          href="/music"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Explore Music
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/music/praise-jah-in-the-moonlight" className="hover:text-[var(--gold)] transition-colors">Praise Jah</Link>
        <Link href="/music/tour" className="hover:text-[var(--gold)] transition-colors">Tour</Link>
        <Link href="/music/playlists" className="hover:text-[var(--gold)] transition-colors">Playlists</Link>
      </nav>
    </article>
  );
}
