import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Timeline — Rohan Marley',
  description:
    'A chronological timeline of Rohan Marley\'s life, career, and business milestones — from Kingston to the University of Miami to the founding of The Marley Group.',
  alternates: { canonical: `${SITE}/rohan-marley/timeline` },
  openGraph: {
    title: 'Timeline — Rohan Marley',
    description: 'Every milestone in Rohan Marley\'s journey from athlete to entrepreneur.',
    url: `${SITE}/rohan-marley/timeline`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const events = [
  { year: '1972', event: 'Born in Kingston, Jamaica — son of Bob Marley and Janet Hunt.' },
  { year: '1981', event: 'Bob Marley passes. Rohan is nine years old; the weight of legacy begins.' },
  { year: '1991', event: 'Enrolls at the University of Miami on a football scholarship.' },
  { year: '1993', event: 'Plays linebacker for the Miami Hurricanes; earns a reputation for discipline and intensity.' },
  { year: '1994', event: 'Brief stint with the Ottawa Rough Riders in the CFL.' },
  { year: '2002', event: 'Returns to Jamaica. Begins working the family coffee farm in the Blue Mountains.' },
  { year: '2009', event: 'Launches Marley Coffee — estate-grown, seed-to-cup, globally distributed.' },
  { year: '2014', event: 'Marley Coffee expands into retail partnerships across North America and Europe.' },
  { year: '2018', event: 'Begins developing the Lion Order cannabis brand, rooted in Rastafari tradition.' },
  { year: '2020', event: 'RoMarley Beach House opens on the Jamaican coast — boutique hospitality meets Marley culture.' },
  { year: '2023', event: 'Lion Order enters the legal U.S. cannabis market with curated flower and edibles.' },
  { year: '2024', event: 'The Marley Group formalizes as the family holding company uniting all brands.' },
  { year: '2025', event: 'ROOTS Media launches. The Inner Circle masterclass goes live with eight episodes.' },
];

export default function RohanTimelinePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Timeline
      </h1>
      <p className="text-[var(--dim)] text-sm mb-12 uppercase tracking-wider">Rohan Marley</p>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        From Kingston to the gridiron to the boardroom — every chapter of Rohan Marley&apos;s
        life has been a step toward building something that lasts. This is the chronological
        record of a man turning inheritance into enterprise.
      </p>

      <section className="mb-16">
        <div className="relative border-l border-[var(--line)] ml-4">
          {events.map((e) => (
            <div key={`${e.year}-${e.event}`} className="pl-8 pb-8 relative">
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-bold mb-1">
                {e.year}
              </p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{e.event}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What Comes Next</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley&apos;s timeline is still being written. New markets, new brands, and a new
          generation of Marleys are entering the frame. The only constant is the principle
          that started it all: build with your hands, honor the land, and leave the table
          bigger than you found it.
        </p>
      </section>

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Read the full story.
        </p>
        <Link
          href="/rohan-marley/story"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          The Story
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/rohan-marley/press" className="hover:text-[var(--gold)] transition-colors">Press</Link>
        <Link href="/rohan-marley/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
