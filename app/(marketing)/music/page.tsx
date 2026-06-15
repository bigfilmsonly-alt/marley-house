import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Music — The Marley Group',
  description:
    'From Bob Marley to YG Marley, the Marley music legacy spans generations. Explore Lion Order, ROOTS Media, House Sessions, and streaming links.',
  alternates: { canonical: `${SITE}/music` },
  openGraph: {
    title: 'Music — The Marley Group',
    description:
      'From Bob Marley to YG Marley — heritage, rhythm, and revolution across generations.',
    url: `${SITE}/music`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const streams = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/bob-marley' },
  { name: 'Apple Music', href: 'https://music.apple.com/artist/bob-marley' },
  { name: 'Tidal', href: 'https://tidal.com/artist/bob-marley' },
];

export default function MusicPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* H1 */}
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Music — The Marley Group
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group&apos;s music division spans generations — from Bob Marley&apos;s
        foundational legacy to YG Marley&apos;s &ldquo;Praise Jah in the Moonlight.&rdquo; Rohan
        Marley bridges heritage and future through Lion Order&apos;s cultural movement and
        ROOTS Media.
      </p>

      <div className="gold-rule mb-12" />

      {/* The Legacy Sound */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Legacy Sound</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The Marley name is synonymous with reggae, but the family&apos;s musical reach extends far
          beyond one genre. From Bob&apos;s revolutionary anthems to the next generation blending
          reggae with R&amp;B, soul, and hip-hop — the sound keeps evolving while the roots stay
          deep.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley has been the quiet architect behind this evolution, connecting the dots
          between family heritage and modern culture through every venture he builds.
        </p>
      </section>

      {/* YG Marley Spotlight */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">YG Marley</h2>
        <div className="border border-[var(--line)] rounded-2xl p-8 sm:p-12">
          <p className="text-[var(--dim)] leading-relaxed mb-6">
            Born to Rohan Marley and Lauryn Hill, YG Marley carries the Marley DNA into a new era.
            His breakout single &ldquo;Praise Jah in the Moonlight&rdquo; has amassed over a billion
            streams worldwide, introducing the Marley legacy to Gen Z and beyond.
          </p>
          <Link
            href="/music/yg-marley"
            className="text-[var(--gold)] text-sm font-semibold hover:underline"
          >
            Full YG Marley Profile &rarr;
          </Link>
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

      {/* House Sessions */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">House Sessions</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Intimate live performances filmed at Marley properties across Jamaica. House Sessions
          strips music back to its essence — no studio tricks, just artists, instruments, and the
          Caribbean breeze. New sessions drop monthly on ROOTS Media.
        </p>
      </section>

      {/* ROOTS Media Preview */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">ROOTS Media</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-6">
          The storytelling arm of The Marley Group. ROOTS Media produces documentaries,
          masterclasses, and cultural content that connects the Marley legacy to a global audience.
          Music is where every story begins.
        </p>
        <Link
          href="/watch"
          className="text-[var(--gold)] text-sm font-semibold hover:underline"
        >
          Explore ROOTS Media &rarr;
        </Link>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Watch the Masterclass</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Eight episodes on music, business, and the Marley philosophy — streaming now.
        </p>
        <Link
          href="/watch"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Start Watching
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/music/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
      </nav>
    </article>
  );
}
