import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Foundation — The Marley Group',
  description:
    'The Marley Group Foundation supports clean water, youth education, and community development across Jamaica and the Caribbean through WaterWise, 1Love, and direct giving.',
  alternates: { canonical: `${SITE}/foundation` },
  openGraph: {
    title: 'Foundation — The Marley Group',
    description: 'Heritage in action — water, education, and community.',
    url: `${SITE}/foundation`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const programs = [
  {
    name: 'WaterWise Project',
    href: '/foundation/waterwise-project',
    desc: 'Delivering clean water infrastructure to underserved communities across rural Jamaica.',
  },
  {
    name: '1Love Initiative',
    href: '/foundation/1love',
    desc: 'Youth mentorship, music education, and cultural programs inspired by the Marley legacy.',
  },
  {
    name: 'Give',
    href: '/foundation/give',
    desc: 'Direct giving — support the foundation\'s mission with a one-time or recurring contribution.',
  },
];

const impact = [
  { figure: '12,000+', label: 'People with clean water access' },
  { figure: '850', label: 'Youth program graduates' },
  { figure: '6', label: 'Caribbean communities served' },
  { figure: '$2.4M', label: 'Deployed since founding' },
];

export default function FoundationPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Foundation
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group Foundation channels the family legacy into tangible impact — clean water,
        youth education, and community development across Jamaica and the Caribbean.
      </p>

      <div className="gold-rule mb-12" />

      {/* Impact Numbers */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {impact.map((i) => (
            <div key={i.label}>
              <p className="font-display text-3xl text-[var(--gold)] mb-1">{i.figure}</p>
              <p className="text-[var(--dim)] text-xs uppercase tracking-wider">{i.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Programs */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Our Programs</h2>
        <div className="space-y-6">
          {programs.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <h3 className="font-display text-lg text-[var(--gold)] mb-2 group-hover:underline">
                {p.name}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      {/* Give CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Support the Foundation</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Every contribution goes directly to water, education, and community programs across the Caribbean.
        </p>
        <Link
          href="/foundation/give"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Give Now
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/family" className="hover:text-[var(--gold)] transition-colors">The Family</Link>
      </nav>
    </article>
  );
}
