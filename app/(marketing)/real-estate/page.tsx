import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Real Estate — The Marley Group',
  description:
    'Real estate ventures from The Marley Group — boutique hospitality properties, development projects, and investment opportunities rooted in culture and craft.',
  alternates: { canonical: `${SITE}/real-estate` },
  openGraph: {
    title: 'Real Estate — The Marley Group',
    description: 'Culture-driven development and hospitality real estate.',
    url: `${SITE}/real-estate`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pipeline = [
  {
    name: 'RoMarley Beach House',
    location: 'Jamaica',
    status: 'Operating',
    desc: 'Boutique beachfront hospitality rooted in Jamaican culture and world-class service.',
  },
  {
    name: 'Marley Coffee Flagship',
    location: 'Miami, FL',
    status: 'In Development',
    desc: 'A flagship retail and experiential space for Marley Coffee in the heart of Miami.',
  },
  {
    name: 'Lion Order Wellness Retreat',
    location: 'Caribbean Basin',
    status: 'Planning',
    desc: 'An immersive wellness destination integrating cannabis culture, holistic health, and Rastafari principles.',
  },
];

export default function RealEstatePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Real Estate
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group invests in properties and developments that blend hospitality, culture,
        and community — creating destinations that carry the Marley name with intention.
      </p>

      <div className="gold-rule mb-12" />

      {/* Investment Philosophy */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Investment Philosophy</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Every property in The Marley Group portfolio begins with a question: does this space
          serve culture? We develop and acquire assets where heritage, hospitality, and craft
          converge — from beachfront resorts to flagship retail, each project is built for
          generations, not quarters.
        </p>
      </section>

      {/* Development Pipeline */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Development Pipeline</h2>
        <div className="space-y-6">
          {pipeline.map((p) => (
            <div
              key={p.name}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display text-lg text-[var(--gold)]">{p.name}</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--dim)] border border-[var(--line)] rounded px-2 py-1">
                  {p.status}
                </span>
              </div>
              <p className="text-[var(--cream)] text-sm mb-1">{p.location}</p>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Inquiry CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Investment Inquiries</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          For partnership, investment, or development inquiries, reach out to The Marley Group team.
        </p>
        <Link
          href="mailto:info@themarleygroup.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/foundation" className="hover:text-[var(--gold)] transition-colors">Foundation</Link>
      </nav>
    </article>
  );
}
