import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Bob Marley — Singer, Songwriter, Pioneer of Reggae',
  description:
    'Robert Nesta Marley OM (1945–1981) was a Jamaican singer-songwriter and musician. Considered one of the pioneers of reggae, he is the father of Rohan Marley and grandfather of YG Marley.',
  alternates: { canonical: `${SITE}/bob-marley` },
  openGraph: {
    title: 'Bob Marley — Singer, Songwriter, Pioneer of Reggae',
    description:
      'Robert Nesta Marley OM (1945–1981). Pioneer of reggae. Father of Rohan Marley, grandfather of YG Marley.',
    url: `${SITE}/bob-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BobMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Bob Marley
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          Robert Nesta Marley OM (6 February 1945 &ndash; 11 May 1981) was a Jamaican
          singer-songwriter and musician. Considered one of the pioneers of reggae, his music
          incorporated elements of ska, rocksteady, and reggae. He is the father of Rohan Marley
          and grandfather of YG Marley.
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Bob Marley was born in Nine Mile, Saint Ann Parish, Jamaica. He began his professional
          music career in 1963 after forming The Wailers with Bunny Wailer and Peter Tosh. The
          group released their debut studio album, <em>The Wailing Wailers</em>, in 1965.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          After signing with Island Records in 1972, the group recorded <em>Catch a Fire</em> and
          <em> Burnin&apos;</em>, which brought international attention. As a solo artist backed by
          The Wailers, Marley released a series of landmark albums including <em>Natty Dread</em>
          {' '}(1974), <em>Rastaman Vibration</em> (1976), <em>Exodus</em> (1977), and
          <em> Kaya</em> (1978).
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          He was diagnosed with acral lentiginous melanoma in 1977 and continued performing until
          his health declined. He passed away on 11 May 1981 at the age of thirty-six. He received
          a state funeral in Jamaica and was buried at his birthplace in Nine Mile.
        </p>
      </section>

      {/* Musical Legacy */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Musical Legacy</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Bob Marley&apos;s discography includes over a dozen studio albums and numerous
          compilations. <em>Exodus</em> was named Album of the Century by Time magazine in 1999.
          Songs such as &ldquo;No Woman, No Cry,&rdquo; &ldquo;Redemption Song,&rdquo;
          &ldquo;One Love,&rdquo; and &ldquo;Three Little Birds&rdquo; remain among the most
          recognized recordings in popular music.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          He was inducted into the Rock and Roll Hall of Fame in 1994. In 2001, he was
          posthumously awarded the Grammy Lifetime Achievement Award. His music is credited with
          bringing Jamaican music and Rastafari culture to a worldwide audience.
        </p>
      </section>

      {/* The Family He Built */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Family He Built</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Bob Marley fathered eleven children who have continued his musical and cultural legacy.
          Among them are Ziggy Marley, Stephen Marley, Julian Marley, Ky-Mani Marley, Damian
          Marley, and Cedella Marley. His son Rohan Marley has built an enterprise spanning coffee,
          fashion, and hospitality. His grandson YG Marley, son of Rohan and Lauryn Hill, represents
          the next generation of Marley music.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The Marley family collectively holds multiple Grammy Awards and continues to influence
          music, business, and culture worldwide.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://www.bobmarley.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            bobmarley.com
          </a>
          <a
            href="https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Bob_Marley"
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
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/yg-marley" className="hover:text-[var(--gold)] transition-colors">YG Marley</Link>
        <Link href="/ziggy-marley" className="hover:text-[var(--gold)] transition-colors">Ziggy Marley</Link>
        <Link href="/stephen-marley" className="hover:text-[var(--gold)] transition-colors">Stephen Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
