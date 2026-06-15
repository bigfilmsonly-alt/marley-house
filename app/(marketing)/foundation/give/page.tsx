import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Give — The Marley Group Foundation',
  description:
    'Support The Marley Group Foundation. Every contribution funds clean water, education, and community programs across Jamaica and the Caribbean.',
  alternates: { canonical: `${SITE}/foundation/give` },
  openGraph: {
    title: 'Give — The Marley Group Foundation',
    description: 'Fund clean water, education, and community programs with The Marley Group Foundation.',
    url: `${SITE}/foundation/give`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const ways = [
  {
    title: 'One-Time Gift',
    text: 'Make a direct contribution of any amount. 100% of donations fund programs in clean water access, youth education, and cultural preservation.',
  },
  {
    title: 'Monthly Partner',
    text: 'Join as a recurring supporter and help us plan long-term. Monthly partners receive quarterly impact updates directly from the Foundation team.',
  },
  {
    title: 'Corporate Sponsorship',
    text: 'Align your brand with the Marley legacy. Corporate sponsors gain visibility across Foundation events, media, and community programs.',
  },
  {
    title: 'In-Kind Donations',
    text: 'Contribute equipment, supplies, or professional services. We work with partners in water technology, agriculture, and education.',
  },
];

export default function GivePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Give
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Legacy is built by many hands. The Marley Group Foundation channels every gift into
        programs that deliver clean water, fund education, and preserve the culture that
        gave the world One Love. Here is how you can be part of it.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Where Your Gift Goes</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The Foundation operates with transparency at its core. Administrative costs are
          underwritten by The Marley Group, which means donor funds go directly to programs
          on the ground — water systems, school supplies, mentorship stipends, and
          community gardens.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Every dollar has a destination. Every project has a name, a place, and a report.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Ways to Give</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {ways.map((w) => (
            <div key={w.title} className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="text-[var(--gold)] font-bold text-sm tracking-wider uppercase mb-2">
                {w.title}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12 border border-[var(--line)] rounded-lg bg-white/[0.02]">
        <p className="text-[var(--cream)] font-display text-xl mb-2">
          Ready to contribute?
        </p>
        <p className="text-[var(--dim)] text-sm mb-6 max-w-md mx-auto">
          Contact the Foundation team to arrange your gift or discuss sponsorship opportunities.
        </p>
        <a
          href="mailto:foundation@themarleygroup.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Contact the Foundation
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/foundation/waterwise-project" className="hover:text-[var(--gold)] transition-colors">WaterWise Project</Link>
        <Link href="/foundation/1love" className="hover:text-[var(--gold)] transition-colors">1Love Initiative</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
