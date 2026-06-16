import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Stephen Marley — Grammy-Winning Artist and Producer',
  description:
    'Stephen Robert Nesta Marley is a Jamaican-American musician, producer, and eight-time Grammy Award winner. The son of Bob Marley and Rita Marley, he is regarded as one of reggae\'s foremost producers.',
  alternates: { canonical: `${SITE}/stephen-marley` },
  openGraph: {
    title: 'Stephen Marley — Grammy-Winning Artist and Producer',
    description:
      'Son of Bob Marley and Rita Marley. Eight-time Grammy winner. Producer, musician, and pillar of the Marley legacy.',
    url: `${SITE}/stephen-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function StephenMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Stephen Marley
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          Stephen Robert Nesta Marley is a Jamaican-American musician, singer, songwriter, and
          producer. The son of Bob Marley and Rita Marley, he has won eight Grammy Awards both
          as a solo artist and as a producer for his siblings. He is widely regarded as one of
          reggae&apos;s foremost producers and musical architects.
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Stephen Marley was born on 20 April 1972 in Wilmington, Delaware, while his parents
          were on tour. He grew up between Jamaica and the United States and began performing as
          a child with the Melody Makers alongside his siblings Ziggy, Cedella, and Sharon.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          With the Melody Makers, Stephen contributed to multiple Grammy-winning albums. He
          subsequently established himself as a solo artist with <em>Mind Control</em> (2007),
          which won the Grammy Award for Best Reggae Album. His follow-up, <em>Mind Control &ndash;
          Acoustic</em>, won in the same category the following year.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Beyond his solo work, Stephen has produced Grammy-winning projects for his brother
          Damian Marley, including <em>Halfway Tree</em> and <em>Welcome to Jamrock</em>. His
          production credits span the entire Marley catalogue, making him the sonic backbone of
          the family&apos;s recorded output.
        </p>
      </section>

      {/* Production and Artistry */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Production and Artistry</h2>
        <div className="grid gap-3">
          {[
            { title: 'Mind Control', year: '2007', note: 'Grammy Award, Best Reggae Album' },
            { title: 'Mind Control — Acoustic', year: '2008', note: 'Grammy Award, Best Reggae Album' },
            { title: 'Revelation Pt. 1 — Root of Life', year: '2011', note: 'Solo album' },
            { title: 'Revelation Pt. 2 — The Fruit of Life', year: '2016', note: 'Solo album' },
            { title: 'Old Soul', year: '2023', note: 'Solo album, Grammy nominated' },
          ].map((album) => (
            <div key={album.year + album.title} className="bg-[var(--panel)] border border-[var(--line)] rounded-lg p-4">
              <p className="text-[var(--gold)] font-display text-sm">
                <em>{album.title}</em> ({album.year})
              </p>
              <p className="text-[var(--dim)] text-xs mt-1">{album.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connection to the Family */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to the Family
        </h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Stephen Marley serves as the musical engine of the Marley family. His production work
          has shaped the careers of Ziggy, Damian, Julian, and other siblings. Together with his
          brother Rohan, who leads the business enterprises, Stephen ensures that the creative
          standard set by their father remains uncompromised across generations.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.stephenmarley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            stephenmarley.com
          </a>
          <a
            href="https://open.spotify.com/artist/4GRszIrMbP4UbJoYSRIbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/stephenmarley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/bob-marley" className="hover:text-[var(--gold)] transition-colors">Bob Marley</Link>
        <Link href="/ziggy-marley" className="hover:text-[var(--gold)] transition-colors">Ziggy Marley</Link>
        <Link href="/julian-marley" className="hover:text-[var(--gold)] transition-colors">Julian Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
