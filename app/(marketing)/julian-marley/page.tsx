import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Julian Marley — Grammy-Winning Musician, Son of Bob Marley',
  description:
    'Julian Ricardo Marley is a Jamaican-British reggae musician and the son of Bob Marley. A Grammy Award winner for "As I Am," he is known for blending roots reggae with global influences.',
  alternates: { canonical: `${SITE}/julian-marley` },
  openGraph: {
    title: 'Julian Marley — Grammy-Winning Musician, Son of Bob Marley',
    description:
      'Son of Bob Marley. Grammy winner for "As I Am." Roots reggae with global influence.',
    url: `${SITE}/julian-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function JulianMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Julian Marley
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          Julian Ricardo Marley is a Jamaican-British reggae musician, singer, songwriter, and
          producer. The son of Bob Marley and Lucy Pounder, he won the Grammy Award for Best
          Reggae Album with <em>As I Am</em> (2022). His music blends roots reggae with
          international influences drawn from his upbringing across Jamaica, London, and Miami.
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Julian Marley was born on 4 June 1975 in London, England. He grew up between London
          and Kingston, Jamaica, absorbing the musical traditions of both cities. He learned
          guitar, drums, bass, and keyboards at a young age and began recording in his teens.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          His debut album, <em>Lion in the Morning</em> (1996), established him as a serious
          artist in his own right. He followed with <em>A Time &amp; Place</em> (2003) and
          <em> Awake</em> (2009), the latter earning a Grammy nomination for Best Reggae Album.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          In 2022, <em>As I Am</em> won the Grammy Award for Best Reggae Album, cementing
          Julian&apos;s place among the most accomplished artists in the genre. The album was
          praised for its spiritual depth, musicianship, and faithful extension of the roots
          reggae tradition.
        </p>
      </section>

      {/* Discography Highlights */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Discography Highlights</h2>
        <div className="grid gap-3">
          {[
            { title: 'Lion in the Morning', year: '1996', note: 'Solo debut' },
            { title: 'A Time & Place', year: '2003', note: 'Second studio album' },
            { title: 'Awake', year: '2009', note: 'Grammy nominated, Best Reggae Album' },
            { title: 'As I Am', year: '2022', note: 'Grammy Award, Best Reggae Album' },
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

      {/* Connection to the Family */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to the Family
        </h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Julian Marley carries forward the spiritual and musical essence of his father&apos;s
          work. Alongside his brothers Ziggy, Stephen, Ky-Mani, and Damian, and his brother
          Rohan&apos;s business ventures, Julian represents the global reach of the Marley name.
          His European upbringing has given his music a distinct international perspective within
          the family&apos;s collective body of work.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.julianmarley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            julianmarley.com
          </a>
          <a
            href="https://open.spotify.com/artist/3sNVsGU96cFHiUbOeTMgbE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/julianrmarley"
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
        <Link href="/stephen-marley" className="hover:text-[var(--gold)] transition-colors">Stephen Marley</Link>
        <Link href="/ky-mani-marley" className="hover:text-[var(--gold)] transition-colors">Ky-Mani Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
