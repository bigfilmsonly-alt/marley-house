import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Lion Order Characters — Manga Meets Rastafari',
  description:
    'Meet the Lion Order manga universe: King Clem, Kai Suna, and Runna Gyal — animated characters where manga storytelling meets Rastafari culture.',
  alternates: { canonical: `${SITE}/lion-order/characters` },
  openGraph: {
    title: 'Lion Order Characters',
    description: 'The animated world of Lion Order — manga storytelling meets Rastafari culture.',
    url: `${SITE}/lion-order/characters`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const characters = [
  {
    name: 'King Clem',
    role: 'The Warrior',
    img: '/lion-order/king-clem.jpg',
    desc: 'Strength and justice personified. King Clem is the guardian of the order — a warrior who fights not with violence but with conviction. Named after the King Clementine strain, he embodies the citrus brightness and fierce sovereignty at the heart of Lion Order.',
    href: '/lion-order/king-clem',
  },
  {
    name: 'Kai Suna',
    role: 'The Seeker',
    img: '/brand/kai-suna.jpg',
    desc: 'Kai Suna represents the spirit of exploration that drives Lion Order\'s strain-hunting mission. A wanderer moving through landscapes and cultures, Kai carries the curiosity and open-heartedness that fuels discovery. The seeker reminds us that the journey is the destination.',
    href: null,
  },
  {
    name: 'Runna Gyal',
    role: 'The Spirit',
    img: '/brand/runna-gyal.jpg',
    desc: 'Runna Gyal is the spiritual pulse of Lion Order. She embodies the nurturing, healing energy of the Rastafari tradition — the feminine force that balances strength with compassion. Her presence in the manga universe grounds the action in deeper meaning.',
    href: null,
  },
];

export default function CharactersPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Lion Order Characters
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Lion Order manga universe brings Rastafari culture to life through animated
        storytelling. Three core characters — King Clem, Kai Suna, and Runna Gyal —
        carry the brand&apos;s values of strength, exploration, and spiritual connection.
      </p>

      <div className="gold-rule mb-12" />

      {/* Manga Meets Rastafari */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Manga Meets Rastafari
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lion Order chose manga as its storytelling medium because it shares the same
          DNA as Rastafari culture: epic narratives, archetypal characters, and the
          eternal battle between consciousness and complacency. Japanese manga tradition
          meets Caribbean spiritual lineage in a visual language that speaks to a global
          audience.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Each character represents a pillar of the Lion Order philosophy. Together, they
          form a universe where the codes of strength, justice, and quality are not
          abstractions — they are living stories.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* Character Cards */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">The Characters</h2>
        <div className="space-y-8">
          {characters.map((c) => (
            <div
              key={c.name}
              className="border border-[var(--line)] rounded-lg overflow-hidden bg-[var(--bg)]"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2">
                    {c.role}
                  </p>
                  <h3 className="font-display text-2xl text-[var(--cream)] mb-3">{c.name}</h3>
                  <p className="text-[var(--dim)] leading-relaxed text-sm mb-4">{c.desc}</p>
                  {c.href && (
                    <Link
                      href={c.href}
                      className="text-[var(--gold)] text-xs tracking-wider uppercase hover:opacity-80 transition-opacity"
                    >
                      Read more &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Enter the Universe</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The characters come alive through Lion Order products and stories.
        </p>
        <a
          href="https://lionorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Shop Lion Order
        </a>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/king-clem" className="hover:text-[var(--gold)] transition-colors">King Clem Deep Dive</Link>
        <Link href="/lion-order/strains/king-clementine" className="hover:text-[var(--gold)] transition-colors">King Clementine Strain</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/lion-order/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
      </nav>

      {/* Disclaimer */}
      <footer className="mt-16 pt-8 border-t border-[var(--line)]">
        <p className="text-[var(--dim)] text-[10px] leading-relaxed tracking-wide">
          Cannabis products are intended for adults 21 and older. Check your local and state laws
          before purchasing. Lion Order does not make medical or health claims about cannabis.
          Consume responsibly.
        </p>
      </footer>
    </article>
  );
}
