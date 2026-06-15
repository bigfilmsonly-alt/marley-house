import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Legacy — From Bob to the Next Generation',
  description:
    'The Marley legacy spans three generations: Bob Marley changed global music, Rohan Marley built an enterprise, and YG Marley carries the sound forward.',
  alternates: { canonical: `${SITE}/legacy` },
  openGraph: {
    title: 'The Legacy — From Bob to the Next Generation',
    description: 'From Bob to Rohan to YG — the Marley legacy continues.',
    url: `${SITE}/legacy`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const timeline = [
  { year: '1945', event: 'Bob Marley born in Nine Mile, Jamaica.' },
  { year: '1963', event: 'The Wailers form in Kingston.' },
  { year: '1972', event: 'Rohan Marley born in Kingston, Jamaica.' },
  { year: '1977', event: 'Exodus released — named Album of the Century by Time magazine.' },
  { year: '1981', event: 'Bob Marley passes. The legacy shifts from music to meaning.' },
  { year: '1993', event: 'Rohan plays linebacker for the University of Miami Hurricanes.' },
  { year: '2009', event: 'Marley Coffee launches — seed-to-cup from the Blue Mountains.' },
  { year: '2020', event: 'RoMarley Beach House opens on the Jamaican coast.' },
  { year: '2023', event: 'Lion Order enters the legal cannabis market.' },
  { year: '2024', event: 'YG Marley\'s "Praise Jah in the Moonlight" goes global.' },
  { year: '2024', event: 'The Marley Group formalizes as the family holding company.' },
  { year: '2025', event: 'ROOTS Media and the Masterclass launch to the Inner Circle.' },
];

export default function LegacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Legacy
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley legacy spans three generations. Bob Marley gave the world a new sound and
        a new consciousness. Rohan Marley transformed that inheritance into a portfolio of
        heritage brands. YG Marley carries the music forward. This is the timeline of a
        family that refuses to fade.
      </p>

      {/* Hero Image */}
      <section className="mb-16 text-center">
        <Image
          src="/brand/gallery/01.jpg"
          alt="The Marley Legacy"
          width={800}
          height={500}
          className="w-full max-w-2xl mx-auto rounded-lg object-cover"
        />
        <p className="text-[var(--dim)] text-xs mt-3 italic">From Bob to Rohan — the thread continues.</p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Heritage Narrative */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Heritage</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Bob Marley did not just make music — he gave the dispossessed a voice, a frequency,
          a flag. When he passed in 1981, the question was not whether the legacy would
          survive, but how it would evolve. The answer came not from another album, but from
          the land, the table, and the marketplace.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Rohan Marley chose a different instrument. Instead of a guitar, he picked up
          Jamaican soil. Instead of a mic, he built a boardroom. The result is The Marley
          Group — a family enterprise that translates One Love into One House: coffee,
          cannabis, hospitality, and media under a single roof.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Timeline</h2>
        <div className="relative border-l border-[var(--line)] ml-4">
          {timeline.map((t) => (
            <div key={`${t.year}-${t.event}`} className="pl-8 pb-8 relative">
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase font-bold mb-1">
                {t.year}
              </p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{t.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Future */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Future</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Legacy is not a museum. It is a living enterprise. The next chapter belongs to the
          grandchildren, the new brands, the markets not yet opened. The Marley Group exists
          to ensure that every generation has a platform, a purpose, and a seat at the table.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Be part of the next chapter.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/rohan-marley/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
