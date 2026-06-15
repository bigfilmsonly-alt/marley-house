import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Timeline — The Marley Group',
  description:
    'The complete timeline of The Marley Group — from Bob Marley\'s birth in 1945 to the launch of ROOTS Media in 2025. Every milestone, one thread.',
  alternates: { canonical: `${SITE}/timeline` },
  openGraph: {
    title: 'Timeline — The Marley Group',
    description: 'Eighty years of Marley milestones in a single timeline.',
    url: `${SITE}/timeline`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const entries = [
  { year: '1945', event: 'Robert Nesta Marley born in Nine Mile, St. Ann Parish, Jamaica.' },
  { year: '1963', event: 'The Wailers form in Kingston with Bob Marley, Bunny Wailer, and Peter Tosh.' },
  { year: '1967', event: 'Cedella Marley born — the eldest daughter of Bob and Rita Marley.' },
  { year: '1972', event: 'Rohan Marley born in Kingston, Jamaica.' },
  { year: '1973', event: 'Catch a Fire released by Island Records, introducing reggae to the global mainstream.' },
  { year: '1977', event: 'Exodus released — later named Album of the Century by Time magazine.' },
  { year: '1978', event: 'Damian "Jr. Gong" Marley born in Kingston. One Love Peace Concert unites rival political factions.' },
  { year: '1981', event: 'Bob Marley passes at age 36. The legacy shifts from music to meaning.' },
  { year: '1991', event: 'Rohan enrolls at the University of Miami on a football scholarship.' },
  { year: '1993', event: 'Rohan plays linebacker for the Miami Hurricanes — discipline forged on the field.' },
  { year: '2001', event: 'Damian Marley wins his first Grammy for Halfway Tree.' },
  { year: '2005', event: '"Welcome to Jamrock" wins two Grammys, redefining reggae for a new generation.' },
  { year: '2009', event: 'Marley Coffee launches — seed-to-cup from the Blue Mountains of Jamaica.' },
  { year: '2014', event: 'Marley Coffee expands into major retail across North America and Europe.' },
  { year: '2018', event: 'Lion Order cannabis brand development begins, rooted in Rastafari tradition.' },
  { year: '2020', event: 'RoMarley Beach House opens on the Jamaican coast.' },
  { year: '2023', event: 'Lion Order enters the legal U.S. cannabis market.' },
  { year: '2024', event: 'YG Marley\'s "Praise Jah in the Moonlight" goes global. The Marley Group formalizes as the family holding company.' },
  { year: '2025', event: 'ROOTS Media launches. The Inner Circle masterclass goes live. The Marley Group Foundation expands programs.' },
];

export default function GroupTimelinePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Timeline
      </h1>
      <p className="text-[var(--dim)] text-sm mb-12 uppercase tracking-wider">The Marley Group</p>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Eighty years of milestones — from a boy in Nine Mile to a global family enterprise.
        This is the complete chronological record of the Marley journey: the music, the
        business, the culture, and the people who carried it forward.
      </p>

      <section className="mb-16">
        <div className="relative border-l border-[var(--line)] ml-4">
          {entries.map((e) => (
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

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Read the full history.
        </p>
        <Link
          href="/history"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          The History
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/history" className="hover:text-[var(--gold)] transition-colors">History</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/rohan-marley/timeline" className="hover:text-[var(--gold)] transition-colors">Rohan Timeline</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
      </nav>
    </article>
  );
}
