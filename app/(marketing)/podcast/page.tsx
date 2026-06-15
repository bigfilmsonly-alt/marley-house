import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Podcast — The Marley Group',
  description:
    'Listen to The Marley Group podcast. Rohan Marley in conversation on entrepreneurship, heritage, coffee, cannabis, hospitality, and the principles behind a global family enterprise. Available on Spotify, Apple Podcasts, and YouTube.',
  alternates: { canonical: `${SITE_URL}/podcast` },
  openGraph: {
    title: 'Podcast — The Marley Group',
    description:
      'Rohan Marley in conversation. Entrepreneurship, heritage, and the blueprint behind a global family enterprise.',
    url: `${SITE_URL}/podcast`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const platforms = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.452-1.493c3.632-1.102 8.147-.568 11.232 1.33a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 01-.543-1.79c3.533-1.072 9.404-.865 13.115 1.338a.935.935 0 01-.954 1.611z" />
      </svg>
    ),
  },
  {
    name: 'Apple Podcasts',
    href: 'https://podcasts.apple.com',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 3.33 1.63 6.28 4.13 8.1-.02-.72-.04-1.83.1-2.62.12-.72.8-4.58.8-4.58s-.2-.4-.2-.99c0-.93.54-1.62 1.21-1.62.57 0 .85.43.85.95 0 .57-.37 1.43-.55 2.23-.16.66.33 1.2.98 1.2 1.18 0 2.09-1.24 2.09-3.04 0-1.59-1.14-2.7-2.77-2.7-1.89 0-3 1.42-3 2.88 0 .57.22 1.18.49 1.52.05.07.06.13.05.19-.05.21-.17.66-.19.76-.03.13-.11.16-.25.1-.93-.43-1.51-1.8-1.51-2.9 0-2.36 1.71-4.52 4.94-4.52 2.59 0 4.61 1.85 4.61 4.31 0 2.58-1.63 4.65-3.88 4.65-.76 0-1.47-.39-1.72-.86l-.47 1.78c-.17.65-.63 1.47-.94 1.97A10 10 0 0022 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@MrRohanmarley',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const recentEpisodes = [
  {
    num: '01',
    title: 'The Origin Story',
    desc: 'Rohan Marley on growing up in the shadow of a legend and choosing to build rather than coast.',
    duration: '54 min',
  },
  {
    num: '02',
    title: 'Coffee at Altitude',
    desc: 'What the Blue Mountains taught Rohan about patience, quality, and the economics of origin.',
    duration: '47 min',
  },
  {
    num: '03',
    title: 'Lion Order',
    desc: 'The cannabis conversation — sacrament, legalization, luxury, and the fight for equity.',
    duration: '51 min',
  },
  {
    num: '04',
    title: 'The Beach House Blueprint',
    desc: 'Building a hospitality brand that feels like home — and the numbers behind it.',
    duration: '43 min',
  },
  {
    num: '05',
    title: 'Fatherhood & Enterprise',
    desc: 'Raising children inside a family business and preparing the next generation to lead.',
    duration: '49 min',
  },
];

export default function PodcastPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* ── Header ── */}
      <p className="text-[var(--dim)] text-xs uppercase tracking-[0.3em] mb-3">
        Podcast
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marley Group Podcast
      </h1>

      {/* AEO block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Rohan Marley in conversation — on entrepreneurship, heritage, the
        business of coffee and cannabis, hospitality, fatherhood, and the
        Rastafari principles that guide a global family enterprise. New episodes
        explore the people, decisions, and culture behind The Marley Group.
      </p>

      <div className="gold-rule mb-12" />

      {/* ── Listen On ── */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Listen On
        </h2>
        <div className="flex flex-wrap gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[var(--line)] rounded-lg px-6 py-4 hover:border-[var(--gold)]/40 transition-colors group"
            >
              <span className="text-[var(--gold)] group-hover:scale-110 transition-transform">
                {p.icon}
              </span>
              <span className="text-[var(--cream)] text-sm font-semibold">
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Recent Episodes ── */}
      <section className="mb-16">
        <div className="flex items-baseline gap-6 mb-6">
          <h2 className="font-display text-2xl text-[var(--cream)]">
            Recent Episodes
          </h2>
        </div>
        <div className="space-y-4">
          {recentEpisodes.map((ep) => (
            <div
              key={ep.num}
              className="border border-[var(--line)] rounded-lg p-6 flex gap-5 items-start"
            >
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">
                {ep.num}
              </span>
              <div className="flex-1">
                <h3 className="text-[var(--cream)] font-semibold">
                  {ep.title}
                </h3>
                <p className="text-[var(--dim)] text-sm mt-1">{ep.desc}</p>
              </div>
              <span className="text-[var(--dim)] text-xs shrink-0 hidden sm:block">
                {ep.duration}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About the Host ── */}
      <section className="mb-16 border border-[var(--line)] rounded-lg p-8 bg-[var(--panel)]">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Your Host
        </h2>
        <p className="text-[var(--cream)] leading-relaxed mb-4">
          Rohan Marley is an entrepreneur, father, and the founder of The Marley
          Group — a holding company spanning Marley Coffee, Lion Order, Ro
          Marley Beach House, and a growing media portfolio. A former University
          of Miami linebacker, Rohan brings an athlete&apos;s discipline and a
          philosopher&apos;s curiosity to every conversation.
        </p>
        <p className="text-[var(--dim)] text-sm leading-relaxed">
          The podcast extends the mission of the Marley Masterclass: make the
          playbook available to anyone willing to listen, learn, and build.
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-12 border border-[var(--line)] rounded-lg bg-[var(--panel)] mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Never Miss an Episode
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto text-sm">
          Join the Inner Circle for early access to new episodes, bonus content,
          and direct updates from Rohan.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      {/* ── Nav ── */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link
          href="/roots/docuseries"
          className="hover:text-[var(--gold)] transition-colors"
        >
          ROOTS Docuseries
        </Link>
        <Link
          href="/masterclass"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Masterclass
        </Link>
        <Link
          href="/music"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Music
        </Link>
        <Link
          href="/about"
          className="hover:text-[var(--gold)] transition-colors"
        >
          About
        </Link>
      </nav>
    </article>
  );
}
