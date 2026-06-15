import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Marley Group — About',
  description:
    'The Marley Group is the family holding of Rohan Marley, uniting Marley Coffee, Lion Order, RoMarley Beach House, and ROOTS Media under one legacy-driven house.',
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    title: 'The Marley Group — About',
    description: 'Heritage, craft, and legacy — one house for every Marley brand.',
    url: `${SITE}/about`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const brands = [
  {
    name: 'Marley Coffee',
    href: '/marley-coffee',
    desc: 'Farm-to-cup coffee sourced from the Blue Mountains of Jamaica and beyond.',
    img: '/brand/marley-coffee-lion-gold.png',
  },
  {
    name: 'Lion Order',
    href: '/lion-order',
    desc: 'Premium cannabis rooted in Rastafari tradition and modern craft.',
    img: '/brand/lion-order-crest.png',
  },
  {
    name: 'RoMarley Beach House',
    href: '/romarley-beach-house',
    desc: 'Boutique hospitality on the shores of Jamaica.',
    img: '/brand/lion-crest-clean.png',
  },
  {
    name: 'ROOTS Media',
    href: '/legacy',
    desc: 'Storytelling, masterclasses, and cultural media from the Marley family.',
    img: '/brand/rastafari-lion-university.png',
  },
];

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* H1 */}
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marley Group
      </h1>

      {/* AEO Block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group is the family holding of Rohan Marley, encompassing Marley Coffee,
        Lion Order cannabis, RoMarley Beach House hospitality, and ROOTS Media. Founded on
        heritage, craft, and legacy — one house for every brand that carries the name forward.
      </p>

      <div className="gold-rule mb-12" />

      {/* Overview */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Overview</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Born from a lineage that changed global music, The Marley Group channels that same
          revolutionary energy into coffee, cannabis, hospitality, and media. Every venture
          carries the Marley name with intention — rooted in Jamaican soil, built for the world.
        </p>
      </section>

      {/* Our Brands */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Our Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="group border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={b.img}
                  alt={b.name}
                  width={40}
                  height={40}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="font-display text-lg text-[var(--gold)]">{b.name}</h3>
              </div>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{b.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* The Vision */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Vision</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley envisions a family enterprise where heritage is the foundation, not a
          marketing strategy. Each brand under The Marley Group operates with autonomy but
          shares a single philosophy: create with craft, serve with purpose, build for
          generations.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          From Jamaican coffee farms to dispensary shelves to beachfront villas, the thread is
          the same — excellence rooted in culture.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Join the Inner Circle</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Get early access to drops, masterclass episodes, and behind-the-scenes content from
          The Marley Group.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join Now
        </Link>
      </section>

      {/* Internal Links */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
      </nav>
    </article>
  );
}
