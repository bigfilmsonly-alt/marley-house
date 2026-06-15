import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Watch ROOTS — The Marley Group',
  description:
    'Stream the ROOTS masterclass series with Rohan Marley — eight episodes covering coffee, cannabis, hospitality, storytelling, and building a family empire.',
  alternates: { canonical: `${SITE}/roots/watch` },
  openGraph: {
    title: 'Watch ROOTS — The Marley Group',
    description: 'Eight masterclass episodes. One legacy.',
    url: `${SITE}/roots/watch`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const episodes = [
  { num: 1, title: 'Blue Mountain', desc: 'The origin of Marley Coffee and Jamaica\'s legendary beans.' },
  { num: 2, title: 'The Cannabis Playbook', desc: 'Building Lion Order from Rastafari roots to legal markets.' },
  { num: 3, title: 'Family Business', desc: 'Lessons in running a multi-generational brand empire.' },
  { num: 4, title: 'Hospitality', desc: 'Creating world-class experiences at RoMarley Beach House.' },
  { num: 5, title: 'Storytelling', desc: 'How the Marley name communicates culture to the world.' },
  { num: 6, title: 'Athlete to Entrepreneur', desc: 'Rohan\'s journey from the football pitch to the boardroom.' },
  { num: 7, title: 'Rastafari Principles', desc: 'The spiritual foundation behind every business decision.' },
  { num: 8, title: 'Revenue Streams', desc: 'Diversifying income across coffee, cannabis, hospitality, and media.' },
];

export default function WatchRootsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Watch ROOTS
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The ROOTS masterclass is an eight-part series where Rohan Marley shares the principles,
        playbooks, and stories behind building a family empire rooted in culture.
      </p>

      <div className="gold-rule mb-12" />

      {/* Featured Video Placeholder */}
      <section className="mb-16">
        <div className="aspect-video bg-[var(--bg)] border border-[var(--line)] rounded-lg flex items-center justify-center mb-4">
          <span className="text-[var(--dim)] text-sm uppercase tracking-wider">Featured Episode — Coming Soon</span>
        </div>
        <p className="text-[var(--dim)] text-sm">New episodes stream exclusively for Inner Circle members.</p>
      </section>

      {/* Episode Grid */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">All Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {episodes.map((ep) => (
            <div
              key={ep.num}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-wider">
                Episode {String(ep.num).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg text-[var(--cream)] mt-2 mb-2">{ep.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{ep.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Membership CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Unlock the Full Series</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Join the Inner Circle to stream every ROOTS episode, plus behind-the-scenes content and early access to drops.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/music" className="hover:text-[var(--gold)] transition-colors">Music</Link>
        <Link href="/news" className="hover:text-[var(--gold)] transition-colors">News</Link>
      </nav>
    </article>
  );
}
