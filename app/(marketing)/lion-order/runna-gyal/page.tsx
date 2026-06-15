import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Runna Gyal — Lion Order Character',
  description:
    'Runna Gyal is the Spirit archetype in the Lion Order manga universe — a kinetic force of movement, rhythm, and untamed energy.',
  alternates: { canonical: `${SITE}/lion-order/runna-gyal` },
  openGraph: {
    title: 'Runna Gyal — The Spirit',
    description: 'Meet Runna Gyal, the kinetic force of Lion Order.',
    url: `${SITE}/lion-order/runna-gyal`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function RunnaGyalPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Character Deep-Dive
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Runna Gyal
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Runna Gyal is the Spirit — a kinetic force of movement, rhythm, and untamed energy.
        She does not wait for permission. She runs, and the world rearranges itself around her.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Spirit Archetype</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          If Kai Suna is the question, Runna Gyal is the answer that arrives before the question
          is finished. She embodies instinct, velocity, and the raw creative force that moves
          through Jamaican culture — from dancehall riddims to the sprint lanes of Track Town.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Her archetype draws from the divine feminine in motion: the river that carves the
          canyon, the wind that bends the tree, the bass frequency that moves the body before
          the mind can object.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Movement as Language</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Runna Gyal communicates through action. In the manga panels she is rendered in
          motion lines and afterimages — always arriving, always already gone. Her dialogue
          is sparse because her body says everything.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          This mirrors the Jamaican cultural tradition where movement — dance, sport,
          physical labor — is a language as rich and nuanced as spoken patois. Runna Gyal
          is that tradition given a name and a story.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          The Untamed Frequency
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Where the Order values discipline and codes, Runna Gyal represents the wild
          frequency that discipline alone cannot contain. She is the reminder that sovereignty
          is not only stillness — it is also the courage to move without a map.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Her presence in the Lion Order universe ensures the story never becomes rigid. She
          is chaos with a heartbeat, spirit with a stride.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Explore Lion Order Characters
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Runna Gyal runs alongside a cast built on Rastafari archetypes.
        </p>
        <Link
          href="/lion-order/characters"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          All Characters
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/kai-suna" className="hover:text-[var(--gold)] transition-colors">Kai Suna</Link>
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/lion-order/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/lion-order/products" className="hover:text-[var(--gold)] transition-colors">Products</Link>
      </nav>

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
