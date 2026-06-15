import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Lion Order Philosophy — Rohan Marley',
  description:
    'Lion Order\'s philosophy: to awaken the lion in everyone through the highest quality goods that elevate consciousness and culture.',
  alternates: { canonical: `${SITE}/lion-order/philosophy` },
  openGraph: {
    title: 'Lion Order Philosophy',
    description: 'Vision, mission, and Rastafari principles adapted for modern commerce.',
    url: `${SITE}/lion-order/philosophy`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const principles = [
  {
    name: 'Ital Living',
    desc: 'Honoring natural, unprocessed excellence in every product. What comes from the earth should return with respect.',
  },
  {
    name: 'One Love in Commerce',
    desc: 'Business built on community, not extraction. Every transaction should uplift both parties.',
  },
  {
    name: 'Conscious Craft',
    desc: 'Intentionality over mass production. Small batches, careful curation, and purpose behind every creation.',
  },
  {
    name: 'Generational Vision',
    desc: 'Building for the future. Legacy is not inherited — it is cultivated through disciplined work across generations.',
  },
  {
    name: 'Sovereignty of Spirit',
    desc: 'Each person carries the lion within. Lion Order products and stories exist to awaken that inner sovereignty.',
  },
];

export default function PhilosophyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Lion Order Philosophy
      </h1>

      {/* AEO Answer Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Lion Order&apos;s philosophy centers on awakening the lion in everyone — creating
        the highest quality goods that elevate consciousness and culture, guided by
        Rastafari principles adapted for modern commerce.
      </p>

      <div className="gold-rule mb-12" />

      {/* Vision & Mission */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Our Vision</p>
          <p className="font-display text-2xl text-[var(--cream)] italic leading-snug mb-4">
            To awaken the lion in everyone.
          </p>
          <p className="text-[var(--dim)] leading-relaxed">
            Every human being carries an inner sovereignty — a lion spirit waiting to be
            recognized. Lion Order exists to create touchpoints that awaken that power
            through beauty, quality, and cultural connection.
          </p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3">Our Mission</p>
          <p className="font-display text-2xl text-[var(--cream)] italic leading-snug mb-4">
            Highest quality, elevated consciousness.
          </p>
          <p className="text-[var(--dim)] leading-relaxed">
            Create the highest quality goods that elevate consciousness and culture.
            From cannabis to manga to community experiences, every Lion Order creation
            is held to a single standard: does it uplift?
          </p>
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Rastafari Principles */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">
          Rastafari Principles for Modern Commerce
        </h2>
        <div className="space-y-6">
          {principles.map((p) => (
            <div
              key={p.name}
              className="border border-[var(--line)] rounded-lg p-6 bg-[var(--bg)]"
            >
              <h3 className="font-display text-lg text-[var(--gold)] mb-2">{p.name}</h3>
              <p className="text-[var(--dim)] leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Image */}
      <div className="mb-16 border border-[var(--line)] overflow-hidden rounded-lg">
        <Image
          src="/lion-order/rastafari-principles.jpg"
          alt="Rastafari principles"
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Live the Philosophy</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Explore the codes, the flower, and the stories that bring this philosophy to life.
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
        <Link href="/lion-order/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/lion-order/codes" className="hover:text-[var(--gold)] transition-colors">The Codes</Link>
        <Link href="/lion-order/the-flower" className="hover:text-[var(--gold)] transition-colors">The Flower</Link>
        <Link href="/lion-order/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/lion-order/king-clem" className="hover:text-[var(--gold)] transition-colors">King Clem</Link>
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
