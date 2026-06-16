import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Ky-Mani Marley — Musician and Actor, Son of Bob Marley',
  description:
    'Ky-Mani Marley is a Jamaican musician, rapper, and actor. The son of Bob Marley and Anita Belnavis, he is known for his Grammy-nominated music and his starring role in the film Shottas.',
  alternates: { canonical: `${SITE}/ky-mani-marley` },
  openGraph: {
    title: 'Ky-Mani Marley — Musician and Actor, Son of Bob Marley',
    description:
      'Son of Bob Marley and Anita Belnavis. Grammy-nominated musician. Star of Shottas.',
    url: `${SITE}/ky-mani-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function KyManiMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <header className="mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
          Ky-Mani Marley
        </h1>
        <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
          Ky-Mani Marley is a Jamaican musician, rapper, singer, and actor. The son of Bob
          Marley and Anita Belnavis, a Jamaican table tennis champion, he is known for blending
          reggae, hip-hop, and dancehall. He received a Grammy nomination for Best Reggae Album
          and starred in the cult film <em>Shottas</em> (2002).
        </p>
      </header>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Ky-Mani Marley was born on 26 February 1976 in Falmouth, Jamaica. His mother, Anita
          Belnavis, was a Caribbean table tennis champion. He spent part of his childhood in
          inner-city Miami before discovering music as a teenager and connecting with his
          father&apos;s legacy.
        </p>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          His debut album, <em>Like Father Like Son</em> (1996), drew directly from the
          comparison that would define much of his public life. He followed with <em>The
          Journey</em> (2000) and <em>Many More Roads</em> (2001). His album
          <em> Radio</em> received a Grammy nomination for Best Reggae Album.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Ky-Mani&apos;s sound is distinguished by its fusion of reggae with hip-hop and
          dancehall, reflecting both his Jamaican roots and his formative years in Miami. His
          vocal style carries an unmistakable Marley resonance while remaining entirely his own.
        </p>
      </section>

      {/* Film and Music */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Film and Music</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In 2002, Ky-Mani starred in <em>Shottas</em>, a Jamaican crime film that became a cult
          classic in the Caribbean diaspora. His performance brought attention to his range as an
          artist beyond music, and the film remains one of the most recognized Jamaican films
          internationally.
        </p>
        <div className="grid gap-3">
          {[
            { title: 'Like Father Like Son', year: '1996', note: 'Solo debut' },
            { title: 'The Journey', year: '2000', note: 'Second studio album' },
            { title: 'Many More Roads', year: '2001', note: 'Third studio album' },
            { title: 'Radio', year: '2007', note: 'Grammy nominated, Best Reggae Album' },
            { title: 'Maestro', year: '2015', note: 'Fifth studio album' },
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
          Ky-Mani Marley brings a unique dimension to the family legacy. His Miami upbringing
          and hip-hop influences set him apart from his siblings, while his Jamaican roots keep
          him firmly connected to the tradition their father established. Alongside his brothers
          Ziggy, Stephen, Julian, Damian, and Rohan, Ky-Mani contributes to the full spectrum
          of the Marley family&apos;s cultural output.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Official Links */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Official Links</h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="https://open.spotify.com/artist/6fOMl44jA6Bo1pvfRtMzdT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Spotify
          </a>
          <a
            href="https://www.instagram.com/kaboroots"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            Instagram
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Ky-Mani_Marley"
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
        <Link href="/julian-marley" className="hover:text-[var(--gold)] transition-colors">Julian Marley</Link>
        <Link href="/ziggy-marley" className="hover:text-[var(--gold)] transition-colors">Ziggy Marley</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
