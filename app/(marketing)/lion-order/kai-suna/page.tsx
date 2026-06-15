import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Kai Suna — Lion Order Character',
  description:
    'Kai Suna is the Seeker archetype in the Lion Order manga universe. A wanderer searching for truth through discipline, stillness, and the sacred herb.',
  alternates: { canonical: `${SITE}/lion-order/kai-suna` },
  openGraph: {
    title: 'Kai Suna — The Seeker',
    description: 'Meet Kai Suna, the seeker archetype in Lion Order.',
    url: `${SITE}/lion-order/kai-suna`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function KaiSunaPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-[var(--dim)] text-xs tracking-[0.3em] uppercase mb-4">
        Character Deep-Dive
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Kai Suna
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Kai Suna is the Seeker — a wanderer whose journey through the Lion Order universe
        mirrors the human search for truth, purpose, and inner sovereignty.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Seeker Archetype</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Every mythology needs a character who asks the question the audience is afraid to ask.
          Kai Suna is that character. He arrives in the story stripped of certainty, carrying
          nothing but discipline and an instinct for truth.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          His archetype is ancient — the wandering student, the ronin, the pilgrim. In Lion
          Order, that archetype is filtered through Rastafari consciousness: the seeker does
          not look outward for answers but inward, toward the divine spark.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Stillness as Strength</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Where other characters move through force, Kai moves through observation. His
          power is patience. He reads the room before he enters it. He listens before he speaks.
          In the manga panels, you will often find him in the margins — watching, learning,
          cataloging.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          That stillness is not passivity. It is the coiled readiness of a lion before the
          strike. When Kai acts, the world moves with him.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Connection to the Sacred Herb
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          In the Lion Order narrative, the sacred herb is a tool of meditation and clarity.
          For Kai Suna, it is part of his seeking ritual — a practice that opens perception
          and quiets the noise of the external world.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          This mirrors the real Rastafari tradition where the herb is treated not as recreation
          but as sacrament — a bridge between the earthly and the spiritual.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Explore Lion Order Characters
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Kai Suna is one voice in a larger chorus. Meet the full cast.
        </p>
        <Link
          href="/lion-order/characters"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          All Characters
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/lion-order/runna-gyal" className="hover:text-[var(--gold)] transition-colors">Runna Gyal</Link>
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
