import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Ziggy Marley — Grammy-Winning Musician, Eldest Son of Bob Marley',
  description:
    'David Nesta "Ziggy" Marley is a Jamaican musician, singer, songwriter, and philanthropist. The eldest son of Bob Marley, he has won eight Grammy Awards and leads the Tuff Gong legacy.',
  alternates: { canonical: `${SITE}/ziggy-marley` },
  openGraph: {
    title: 'Ziggy Marley — Grammy-Winning Musician, Eldest Son of Bob Marley',
    description:
      'Eldest son of Bob Marley. Eight-time Grammy winner. Musician, philanthropist, and custodian of the Tuff Gong legacy.',
    url: `${SITE}/ziggy-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ZiggyMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Ziggy Marley
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          David Nesta &ldquo;Ziggy&rdquo; Marley is a Jamaican musician, singer, songwriter, and
          philanthropist. The eldest son of Bob Marley and Rita Marley, he has won eight Grammy
          Awards across a career spanning more than four decades. He continues the Tuff Gong
          tradition as one of reggae&apos;s most enduring artists.
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Ziggy Marley was born on 17 October 1968 in Trenchtown, Kingston, Jamaica. He began
          performing alongside his father at a young age, appearing on stage at the age of ten
          during the One Love Peace Concert in 1978.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In 1979, he formed the Melody Makers with his siblings Sharon, Cedella, and Stephen.
          The group released multiple albums including <em>Conscious Party</em> (1988) and
          <em> One Bright Day</em> (1989), both of which won Grammy Awards for Best Reggae Album.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Following the Melody Makers, Ziggy pursued a solo career. His self-titled album
          <em> Ziggy Marley</em> (2016) and <em>Rebellion Rises</em> (2018) continued to earn
          critical praise and Grammy recognition. He has also authored children&apos;s books and
          produced music for animated series.
        </p>
      </section>

      {/* Discography Highlights */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Discography Highlights</h2>
        <div className="grid gap-3">
          {[
            { title: 'Conscious Party', year: '1988', note: 'Grammy Award, Best Reggae Album (with the Melody Makers)' },
            { title: 'One Bright Day', year: '1989', note: 'Grammy Award, Best Reggae Album (with the Melody Makers)' },
            { title: 'Dragonfly', year: '2003', note: 'Solo debut, Grammy Award for Best Pop Collaboration' },
            { title: 'Love Is My Religion', year: '2006', note: 'Grammy Award, Best Reggae Album' },
            { title: 'Fly Rasta', year: '2014', note: 'Grammy Award, Best Reggae Album' },
            { title: 'Ziggy Marley', year: '2016', note: 'Grammy Award, Best Reggae Album' },
            { title: 'Rebellion Rises', year: '2018', note: 'Grammy Award, Best Reggae Album' },
          ].map((album) => (
            <div key={album.year} className="bg-[var(--panel)] border border-[var(--line)] rounded-lg p-4">
              <p className="text-[var(--gold)] font-display text-sm">
                <em>{album.title}</em> ({album.year})
              </p>
              <p className="text-[var(--dim)] text-xs mt-1">{album.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connection to the Group */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to the Family
        </h2>
        <p className="text-[var(--dim)] leading-relaxed">
          As the eldest son of Bob Marley, Ziggy has served as a bridge between his father&apos;s
          foundational legacy and the next generation of Marley artists. His brother Rohan Marley
          has built an enterprise across coffee, cannabis, and hospitality, while his nephew YG
          Marley carries the musical tradition forward. Together, the Marley family represents a
          multi-generational dynasty in music, culture, and business.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.ziggymarley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            ziggymarley.com
          </a>
          <a
            href="https://open.spotify.com/artist/4VnomLtKTm7Ahe6VBkGsC0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/ziggymarley"
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
        <Link href="/stephen-marley" className="hover:text-[var(--gold)] transition-colors">Stephen Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
