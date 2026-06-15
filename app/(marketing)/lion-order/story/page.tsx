import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Lion Order Story — Rohan Marley',
  description:
    'Lion Order is a Rastafari-rooted luxury lifestyle brand founded by Rohan Marley, encompassing cannabis, manga storytelling, and cultural connectivity.',
  alternates: { canonical: `${SITE}/lion-order/story` },
  openGraph: {
    title: 'The Lion Order Story',
    description: 'Heritage, healing, and consciousness — how Rohan Marley built Lion Order.',
    url: `${SITE}/lion-order/story`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function LionOrderStoryPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Lion Order Story
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order is a Rastafari-rooted luxury lifestyle brand founded by Rohan Marley.
        It encompasses roots-luxury cannabis, manga storytelling, and cultural connectivity
        — a movement built on heritage, healing, and consciousness.
      </p>

      <div className="gold-rule mb-12" />

      {/* Origin */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Origin</h2>
        <div className="mb-8 border border-[var(--line)] overflow-hidden rounded-lg">
          <Image
            src="/lion-order/heritage.jpg"
            alt="Lion Order heritage"
            width={800}
            height={400}
            className="w-full h-64 object-cover"
          />
        </div>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lion Order began as a conviction — that the Rastafari tradition of honoring
          the earth and elevating the spirit could live inside a modern luxury brand.
          Rohan Marley, son of Bob Marley, carried this vision from the hills of Jamaica
          to the global stage.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The name itself is a declaration. In Rastafari culture, the lion represents
          sovereignty, courage, and the divine spark in every person. &quot;Order&quot;
          speaks to discipline, community, and a shared code of conduct. Together, they
          form the foundation of everything the brand creates.
        </p>
      </section>

      {/* Rohan's Vision */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Rohan&apos;s Vision</h2>
        <div className="mb-8 border border-[var(--line)] overflow-hidden rounded-lg">
          <Image
            src="/lion-order/rohan-portrait.jpg"
            alt="Rohan Marley"
            width={800}
            height={400}
            className="w-full h-64 object-cover object-top"
          />
        </div>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley envisioned a brand where Rastafari principles meet the highest
          standards of craft. His taste acts as a stamp of approval — his association
          signals authenticity and quality. Every product, every character, every story
          must pass through the filter of intention.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          From strain-hunted cannabis to manga storytelling, Rohan built Lion Order as
          a cultural ecosystem, not just a product line. The story is the order. The
          order is the movement.
        </p>
      </section>

      {/* Rastafari Meets Luxury */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">
          Where Rastafari Meets Luxury
        </h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Lion Order rejects the false choice between roots culture and premium quality.
          Rastafari tradition teaches reverence for the natural world, intentional
          cultivation, and communal upliftment. These principles translate directly into
          how Lion Order approaches cannabis: strain-hunted with care, cultivated in
          small batches, presented with beauty.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          The result is roots luxury — products and stories that honor where they come
          from while aspiring to the highest standards of craft and consciousness.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Enter the Order</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Explore the philosophy, the flower, and the characters that define Lion Order.
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
        <Link href="/lion-order/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/lion-order/codes" className="hover:text-[var(--gold)] transition-colors">The Codes</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/lion-order/king-clem" className="hover:text-[var(--gold)] transition-colors">King Clem</Link>
        <Link href="/lion-order/strains/king-clementine" className="hover:text-[var(--gold)] transition-colors">King Clementine Strain</Link>
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
