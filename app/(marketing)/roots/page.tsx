import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'ROOTS — The Marley Group',
  description:
    'ROOTS is the media brand of The Marley Group — podcasts, docuseries, and cultural content rooted in the Marley legacy. Stream episodes, explore Rastafari philosophy, and go deeper with a membership.',
  alternates: { canonical: `${SITE}/roots` },
  openGraph: {
    title: 'ROOTS — The Marley Group',
    description: 'Podcasts, docuseries, and cultural storytelling from the Marley family.',
    url: `${SITE}/roots`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  {
    title: 'ROOTS Podcast',
    desc: 'Long-form conversations with Rohan Marley and guests across music, business, and culture. New episodes weekly.',
    tag: 'Audio',
  },
  {
    title: 'ROOTS Docuseries',
    desc: 'A multi-part documentary tracing the Marley business empire from Kingston to the world.',
    tag: 'Video',
  },
  {
    title: 'Cultural Library',
    desc: 'Essays, archival footage, and photo collections exploring Rastafari tradition, Jamaican heritage, and the Marley family story.',
    tag: 'Archive',
  },
];

const previews = [
  { ep: 1, title: 'Blue Mountain', desc: 'How Rohan turned a family farm into a global coffee brand.', duration: '42 min', free: true },
  { ep: 2, title: 'The Cannabis Playbook', desc: 'Building Lion Order in a shifting legal landscape.', duration: '38 min', free: false },
  { ep: 3, title: 'Family Business', desc: 'Managing legacy, ego, and ten siblings under one name.', duration: '45 min', free: false },
];

export default function RootsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        ROOTS
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        ROOTS is the media brand of The Marley Group — podcasts, docuseries, and
        cultural content rooted in the Marley legacy. Stream episodes, explore
        Rastafari philosophy, and go deeper with a membership.
      </p>

      <div className="gold-rule mb-12" />

      {/* Media Pillars */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">The Platform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="border border-[var(--line)] rounded-lg p-6 bg-[var(--bg)]">
              <span className="text-[10px] uppercase tracking-widest text-[var(--gold)] font-bold">{p.tag}</span>
              <h3 className="font-display text-lg text-[var(--cream)] mt-2 mb-2">{p.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Episode Previews */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Episode Previews</h2>
        <div className="space-y-4">
          {previews.map((ep) => (
            <div
              key={ep.ep}
              className="flex items-center justify-between border border-[var(--line)] rounded-lg p-5 bg-[var(--bg)]"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--gold)] font-bold mb-1">
                  Episode {ep.ep} &middot; {ep.duration}
                </p>
                <h3 className="text-[var(--cream)] font-bold">{ep.title}</h3>
                <p className="text-[var(--dim)] text-sm mt-1">{ep.desc}</p>
              </div>
              <span
                className={`shrink-0 ml-4 text-xs font-bold uppercase px-3 py-1 rounded ${
                  ep.free
                    ? 'bg-[var(--gold)]/10 text-[var(--gold)]'
                    : 'bg-[var(--line)] text-[var(--dim)]'
                }`}
              >
                {ep.free ? 'Free' : 'Members'}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/roots/episodes"
            className="text-[var(--gold)] text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
          >
            View All Episodes &rarr;
          </Link>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Listen & Watch</h2>
        <p className="text-[var(--dim)] text-sm leading-relaxed mb-4">
          ROOTS is available on Apple Podcasts, Spotify, YouTube, and exclusively on
          The Marley Group platform for full-length episodes and bonus content.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Membership CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Unlock Full Episodes</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Join Inner Circle or Legacy to stream every episode, access the cultural library, and get behind-the-scenes content.
        </p>
        <Link
          href="/membership"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          See Membership Plans
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/roots/episodes" className="hover:text-[var(--gold)] transition-colors">Episodes</Link>
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
