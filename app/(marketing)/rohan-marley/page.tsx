import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Rohan Marley — Entrepreneur & Legacy Builder',
  description:
    'Rohan Marley is a Jamaican-American entrepreneur who founded Marley Coffee, Lion Order, and The Marley Group. Son of Bob Marley, born May 19, 1972.',
  alternates: { canonical: `${SITE}/rohan-marley` },
  openGraph: {
    title: 'Rohan Marley — Entrepreneur & Legacy Builder',
    description: 'The son of Bob Marley, founder of Marley Coffee, Lion Order, and The Marley Group.',
    url: `${SITE}/rohan-marley`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const brandsBuilt = [
  { name: 'Marley Coffee', href: '/marley-coffee', year: '2009' },
  { name: 'Lion Order', href: '/lion-order', year: '2023' },
  { name: 'RoMarley Beach House', href: '/romarley-beach-house', year: '2020' },
  { name: 'The Marley Group', href: '/about', year: '2024' },
];

export default function RohanMarleyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <Image
            src="/brand/gallery/01.jpg"
            alt="Rohan Marley"
            width={500}
            height={600}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
            Rohan Marley
          </h1>

          {/* AEO Block */}
          <p className="text-[var(--cream)] text-lg leading-relaxed border-l-2 border-[var(--gold)] pl-5 mb-6">
            Rohan Marley is a Jamaican-American entrepreneur born May 19, 1972 in Kingston,
            Jamaica. The son of Bob Marley and Janet Hunt, he is a former University of Miami
            linebacker who founded Marley Coffee, Lion Order, and The Marley Group.
          </p>
          <div className="flex gap-4">
            <Link
              href="/rohan-marley/story"
              className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
            >
              Full Story
            </Link>
            <Link
              href="/rohan-marley/philosophy"
              className="text-[var(--dim)] text-sm font-bold tracking-wider uppercase hover:text-[var(--gold)] transition-colors"
            >
              Philosophy
            </Link>
          </div>
        </div>
      </div>

      <div className="gold-rule mb-12" />

      {/* Biography */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Biography</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Born in Kingston, Jamaica, Rohan Marley grew up between Nine Mile and Miami, shaped
          by two worlds — the spiritual grounding of Jamaican culture and the competitive fire
          of American athletics. He became a standout linebacker at the University of Miami,
          playing alongside future NFL legends.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          After football, Rohan turned his energy toward entrepreneurship. He purchased
          farmland in the Blue Mountains of Jamaica, launching Marley Coffee with a philosophy
          of seed-to-cup quality. His ventures expanded into cannabis with Lion Order, luxury
          hospitality with RoMarley Beach House, and media through ROOTS — each business a
          chapter in a legacy story that stretches from Bob to the next generation.
        </p>
      </section>

      {/* Brands Founded */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Brands Founded</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brandsBuilt.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="border border-[var(--line)] rounded-lg p-4 text-center hover:border-[var(--gold)] transition-colors"
            >
              <p className="text-[var(--gold)] font-display text-lg">{b.name}</p>
              <p className="text-[var(--dim)] text-xs mt-1">Est. {b.year}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="mb-16 bg-[var(--panel)] border border-[var(--line)] rounded-lg p-8">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Philosophy</h2>
        <blockquote className="text-[var(--gold-soft)] italic text-lg font-display leading-relaxed mb-4">
          &ldquo;Legacy is not what you inherit. It is what you build with what was given.&rdquo;
        </blockquote>
        <Link
          href="/rohan-marley/philosophy"
          className="text-[var(--gold)] text-sm font-bold tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          Read the Philosophy
        </Link>
      </section>

      {/* Press */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">In the Press</h2>
        <ul className="space-y-3 text-[var(--dim)] text-sm">
          <li className="border-b border-[var(--line)] pb-3">Forbes — &ldquo;How Rohan Marley is building a legacy beyond music&rdquo;</li>
          <li className="border-b border-[var(--line)] pb-3">Bloomberg — &ldquo;The Marley name enters the cannabis industry&rdquo;</li>
          <li className="border-b border-[var(--line)] pb-3">GQ — &ldquo;Rohan Marley on fatherhood, fire, and family business&rdquo;</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley/story" className="hover:text-[var(--gold)] transition-colors">The Story</Link>
        <Link href="/rohan-marley/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About The Marley Group</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Marley Family</Link>
      </nav>
    </article>
  );
}
