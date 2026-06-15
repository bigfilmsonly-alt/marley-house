import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/content/cities';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Local Chapters — The Marley Group',
  description:
    'The Marley Group has local chapters in 9 cities worldwide: Miami, Kingston, New York, Los Angeles, London, Toronto, Puerto Morelos, Atlanta, and Sidama. Join meetups, tastings, and events near you.',
  alternates: { canonical: `${SITE}/community/chapters` },
  openGraph: {
    title: 'Local Chapters — The Marley Group',
    description:
      'Join a House chapter in one of 9 cities — or start one in yours.',
    url: `${SITE}/community/chapters`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const chapterActivities: Record<string, string> = {
  miami: 'Monthly coffee tastings, entrepreneur meetups, and cultural pop-ups in Wynwood and Little Haiti.',
  kingston: 'Farm visits to Blue Mountain, Beach House gatherings, and heritage celebrations.',
  'new-york': 'Specialty coffee walks, business networking in Brooklyn, and live music nights.',
  'los-angeles': 'Lion Order wellness events, studio sessions, and West Coast brand collaborations.',
  london: 'Caribbean diaspora socials, Marley Coffee stockist tours, and panel discussions.',
  toronto: 'Cultural festivals, coffee cuppings, and cross-border entrepreneur exchanges.',
  'puerto-morelos': 'Beach retreats, mindfulness workshops, and Riviera Maya hospitality tastings.',
  atlanta: 'Hip-hop x heritage events, coffee pop-ups, and Southern entrepreneurship roundtables.',
  sidama: 'Origin trips to Ethiopian coffee farms and cultural exchange with local growers.',
};

export default function ChaptersPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Local Chapters
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group has local chapters in 9 cities worldwide. Join meetups,
        tastings, and events near you — or start a chapter in your city.
      </p>

      <div className="gold-rule mb-12" />

      {/* City Chapters */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Active Chapters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/cities/${c.slug}/community`}
              className="rounded-lg border border-[var(--line)] bg-[var(--bg)] p-5 hover:border-[var(--gold)] transition-colors group"
            >
              <h3 className="text-[var(--cream)] font-bold group-hover:text-[var(--gold)] transition-colors">
                {c.name}
              </h3>
              <span className="text-[var(--dim)] text-xs">{c.region}</span>
              <p className="text-[var(--dim)] text-sm leading-relaxed mt-2">
                {chapterActivities[c.slug]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Start a Chapter */}
      <section className="mb-16 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-2">Start a Chapter</h2>
        <p className="text-[var(--dim)] text-sm leading-relaxed mb-4">
          Do not see your city? Legacy members can apply to launch a new local chapter.
          We provide branding, event guidelines, and direct support from the House team.
        </p>
        <Link
          href="/membership"
          className="inline-block text-sm font-bold uppercase tracking-wider px-6 py-3 rounded bg-[var(--gold)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          Join as Legacy
        </Link>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t border-[var(--line)]">
        <p className="text-[var(--cream)] mb-4">Community access requires Inner Circle or Legacy membership.</p>
        <Link
          href="/membership"
          className="inline-block text-sm font-bold uppercase tracking-wider px-8 py-3 rounded bg-[var(--gold)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          View Membership Tiers
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/community" className="hover:text-[var(--gold)] transition-colors">Community</Link>
        <Link href="/community/forums" className="hover:text-[var(--gold)] transition-colors">Forums</Link>
        <Link href="/community/directory" className="hover:text-[var(--gold)] transition-colors">Directory</Link>
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
      </nav>
    </article>
  );
}
