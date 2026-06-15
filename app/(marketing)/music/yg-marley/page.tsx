import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'YG Marley — Singer, Songwriter, Next Generation',
  description:
    'YG Marley is a Jamaican-American singer-songwriter known for "Praise Jah in the Moonlight." Son of Rohan Marley and Lauryn Hill.',
  alternates: { canonical: `${SITE}/music/yg-marley` },
  openGraph: {
    title: 'YG Marley — Singer, Songwriter, Next Generation',
    description:
      'Carrying the Marley legacy into a new era of reggae, R&B, and soul.',
    url: `${SITE}/music/yg-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const discography = [
  { title: 'Praise Jah in the Moonlight', year: '2023', note: '1B+ streams worldwide' },
  { title: 'Alive', year: '2024', note: 'Follow-up single' },
  { title: 'More releases', year: '2025', note: 'New music forthcoming' },
];

const streams = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/yg-marley' },
  { name: 'Apple Music', href: 'https://music.apple.com/artist/yg-marley' },
  { name: 'Tidal', href: 'https://tidal.com/artist/yg-marley' },
];

export default function YGMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* H1 */}
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        The Next Generation
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        YG Marley
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        YG Marley is a Jamaican-American singer-songwriter who burst onto the global stage with
        &ldquo;Praise Jah in the Moonlight.&rdquo; Born to Rohan Marley and Lauryn Hill, he carries
        the Marley musical DNA into a new era of reggae, R&amp;B, and soul.
      </p>

      <div className="gold-rule mb-12" />

      {/* Bio */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Raised between Miami and New Jersey, YG Marley grew up surrounded by two of music&apos;s
          most iconic bloodlines. His grandfather Bob Marley defined reggae for the world; his
          mother Lauryn Hill redefined hip-hop and neo-soul. That dual inheritance fuels a sound
          that is entirely his own.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          His 2023 breakout &ldquo;Praise Jah in the Moonlight&rdquo; went viral on TikTok before
          climbing to the top of global charts, earning over a billion streams across platforms.
          The song&apos;s meditative, spiritual quality signaled a new chapter for the Marley name
          in popular music.
        </p>
      </section>

      {/* Discography Highlights */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Discography</h2>
        <div className="space-y-4">
          {discography.map((d) => (
            <div
              key={d.title}
              className="border border-[var(--line)] rounded-lg p-5 flex items-center justify-between hover:border-[var(--gold)] transition-colors"
            >
              <div>
                <h3 className="text-[var(--cream)] font-semibold">{d.title}</h3>
                <p className="text-[var(--dim)] text-sm">{d.note}</p>
              </div>
              <span className="text-[var(--dim)] text-xs tracking-wider">{d.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Streaming Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Listen Now</h2>
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

      {/* Tour Info */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Tour &amp; Live</h2>
        <div className="border border-[var(--line)] rounded-2xl p-8 text-center">
          <p className="text-[var(--dim)] leading-relaxed mb-2">
            Tour dates and live appearances will be announced here. Follow YG Marley on social
            media for the latest updates on shows and festival appearances.
          </p>
          <p className="text-[var(--gold)] text-sm font-semibold">Coming Soon</p>
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Explore the Legacy</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Discover how the Marley family continues to shape music, business, and culture.
        </p>
        <Link
          href="/watch"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Watch the Masterclass
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
