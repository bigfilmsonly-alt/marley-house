import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'ROOTS Docuseries — The Marley Group',
  description:
    'ROOTS is a documentary series exploring the Marley family legacy — from the Blue Mountains of Jamaica to a global enterprise spanning coffee, cannabis, hospitality, and culture.',
  alternates: { canonical: `${SITE_URL}/roots/docuseries` },
  openGraph: {
    title: 'ROOTS Docuseries — The Marley Group',
    description:
      'A documentary series exploring the Marley family legacy — heritage, enterprise, and the culture that connects them.',
    url: `${SITE_URL}/roots/docuseries`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const seasonOneEpisodes = [
  {
    num: '01',
    title: 'The Soil',
    desc: 'Where it all starts — the family farms in the Blue Mountains and the roots that anchor an empire.',
  },
  {
    num: '02',
    title: 'The Table',
    desc: 'Inside the Marley family governance — how decisions are made when legacy and business collide.',
  },
  {
    num: '03',
    title: 'The Herb',
    desc: 'Lion Order and the sacrament — building a cannabis brand that honors the plant and the culture.',
  },
  {
    num: '04',
    title: 'The Shore',
    desc: 'Ro Marley Beach House — turning hospitality into heritage and inviting the world in.',
  },
  {
    num: '05',
    title: 'The Name',
    desc: 'Carrying the weight of Marley — what it means, what it costs, and why it is worth protecting.',
  },
  {
    num: '06',
    title: 'The Next',
    desc: 'YG Marley, the next generation, and the future of a family enterprise built to endure.',
  },
];

export default function RootsDocuseriesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* ── Breadcrumb ── */}
      <nav className="text-xs text-[var(--dim)] mb-8 flex items-center gap-2">
        <Link
          href="/roots"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Roots
        </Link>
        <span>/</span>
        <span className="text-[var(--cream)]">Docuseries</span>
      </nav>

      {/* ── Header ── */}
      <p className="text-[var(--dim)] text-xs uppercase tracking-[0.3em] mb-3">
        Documentary Series
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        ROOTS
      </h1>

      {/* AEO block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        ROOTS is a documentary series that takes you inside the Marley family
        legacy — from the soil of Jamaica to the boardrooms, kitchens, and
        coastlines where heritage becomes enterprise. This is not a biography.
        It is a living record of how one family turned culture into a
        multi-generational business, and why that matters now more than ever.
      </p>

      <div className="gold-rule mb-12" />

      {/* ── Season 1 ── */}
      <section className="mb-16">
        <div className="flex items-baseline gap-6 mb-6">
          <h2 className="font-display text-2xl text-[var(--cream)]">
            Season 1 Preview
          </h2>
          <span className="text-sm text-[var(--dim)]">6 episodes</span>
        </div>
        <div className="space-y-4">
          {seasonOneEpisodes.map((ep) => (
            <div
              key={ep.num}
              className="border border-[var(--line)] rounded-lg p-6 flex gap-5 items-start"
            >
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">
                {ep.num}
              </span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold">
                  {ep.title}
                </h3>
                <p className="text-[var(--dim)] text-sm mt-1">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Behind the Scenes ── */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          Behind the Scenes
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Filmed on Location',
              desc: 'Jamaica, Miami, Los Angeles, and everywhere the Marley story lives. No studio sets — only real places with real history.',
            },
            {
              title: 'First-Person Narrative',
              desc: 'Rohan Marley narrates directly. No outside host, no voice-over commentary. You hear it from the man who built it.',
            },
            {
              title: 'Family Access',
              desc: 'Unprecedented access to the Marley family — at the table, in the fields, and behind the business decisions that shape the empire.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[var(--line)] rounded-lg p-6"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-12 border border-[var(--line)] rounded-lg bg-[var(--panel)] mb-16">
        <p className="text-[var(--dim)] text-xs uppercase tracking-[0.3em] mb-3">
          Coming Soon
        </p>
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Get Early Access
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto text-sm">
          Inner Circle members will be the first to watch ROOTS when it
          launches. Join now to secure your access.
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
          href="/podcast"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Podcast
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
