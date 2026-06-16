import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Skip Marley — Singer-Songwriter, Grandson of Bob Marley',
  description:
    'Skip Marley is a Jamaican singer-songwriter and the grandson of Bob Marley through his mother Cedella Marley. Signed to Island Records, he is known for "Slow Down" with H.E.R. and "Lions."',
  alternates: { canonical: `${SITE}/skip-marley` },
  openGraph: {
    title: 'Skip Marley — Singer-Songwriter, Grandson of Bob Marley',
    description:
      'Grandson of Bob Marley. Island Records artist. Known for "Slow Down" with H.E.R.',
    url: `${SITE}/skip-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function SkipMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Skip Marley
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          Skip Marley is a Jamaican singer-songwriter and the grandson of Bob Marley. The son of
          Cedella Marley, he is signed to Tuff Gong and Island Records. He gained international
          recognition with &ldquo;Slow Down&rdquo; featuring H.E.R. and his debut single
          &ldquo;Lions,&rdquo; which was featured in a Super Bowl commercial.
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Skip Marley was born on 4 June 1996 in Kingston, Jamaica. His mother, Cedella Marley,
          is the eldest daughter of Bob and Rita Marley. He grew up immersed in the Marley
          musical tradition and began writing songs as a teenager.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In 2017, his debut single &ldquo;Lions&rdquo; was selected for a Super Bowl LI
          advertisement, bringing him to a global audience before he had released a full project.
          The song&apos;s message of empowerment and its Marley-rooted sound signaled the arrival
          of a new generation.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          His 2019 collaboration with H.E.R., &ldquo;Slow Down,&rdquo; reached the top ten on
          the Billboard Hot 100 and was certified platinum in the United States. It earned a
          Grammy nomination for Best R&B Song. His debut EP, <em>Higher Place</em> (2020),
          further established his voice as a bridge between classic reggae and contemporary R&B.
        </p>
      </section>

      {/* Music */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Music</h2>
        <div className="grid gap-3">
          {[
            { title: 'Lions', year: '2017', note: 'Debut single, featured in Super Bowl LI ad' },
            { title: 'Slow Down (ft. H.E.R.)', year: '2019', note: 'Top 10 Billboard Hot 100, Grammy nominated' },
            { title: 'Higher Place (EP)', year: '2020', note: 'Debut EP, Island Records / Tuff Gong' },
            { title: 'Change (ft. Katy Perry)', year: '2020', note: 'Collaboration single' },
          ].map((item) => (
            <div key={item.year + item.title} className="bg-[var(--panel)] border border-[var(--line)] rounded-lg p-4">
              <p className="text-[var(--gold)] font-display text-sm">
                <em>{item.title}</em> ({item.year})
              </p>
              <p className="text-[var(--dim)] text-xs mt-1">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connection to the Family */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to the Family
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          As the son of Cedella Marley and grandson of Bob Marley, Skip represents the third
          generation of the Marley musical dynasty. Alongside his cousin YG Marley, son of Rohan
          Marley and Lauryn Hill, Skip carries the family tradition forward into contemporary
          music.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          His signing to both Tuff Gong, the label founded by his grandfather, and Island Records,
          the label that first brought Bob Marley to a global audience, underscores the continuity
          of the Marley legacy across generations and institutions.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://open.spotify.com/artist/0Lhtz2KBPZ3cFGbBKbacPn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/skipmarley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Instagram
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Skip_Marley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Wikipedia
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/bob-marley" className="hover:text-[var(--gold)] transition-colors">Bob Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/ziggy-marley" className="hover:text-[var(--gold)] transition-colors">Ziggy Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
