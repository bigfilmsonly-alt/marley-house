import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The AI Building Playbook — The Marley Group',
  description:
    'A practical guide to using AI in brand building — frameworks, workflows, and case studies from The Marley Group portfolio.',
  alternates: { canonical: `${SITE}/ai-building-playbook` },
  openGraph: {
    title: 'The AI Building Playbook — The Marley Group',
    description: 'Practical AI frameworks for culture-driven brand building.',
    url: `${SITE}/ai-building-playbook`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const chapters = [
  { num: '01', title: 'Foundation', description: 'Defining your brand voice before any tool touches it. AI amplifies what exists — build the signal first.' },
  { num: '02', title: 'Content Engine', description: 'Building a content system that scales without losing soul. Templates, workflows, and quality gates.' },
  { num: '03', title: 'Market Intelligence', description: 'Using AI to listen to your market in real time — competitor analysis, trend detection, and customer sentiment.' },
  { num: '04', title: 'Operations', description: 'Supply chain optimization, demand forecasting, and inventory management powered by machine learning.' },
  { num: '05', title: 'Customer Experience', description: 'Personalization that feels human. Dynamic recommendations, pricing, and communication at scale.' },
  { num: '06', title: 'Revenue Architecture', description: 'Using AI to identify new revenue streams, optimize pricing, and model business scenarios.' },
];

export default function AIBuildingPlaybookPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The AI Building Playbook
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        A practical guide to building brands with artificial intelligence —
        drawn from real implementation across The Marley Group portfolio.
        Not theory. Not hype. What actually works.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Why This Playbook</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Most AI advice is written by technologists for technologists. This
          playbook is written by operators for operators — entrepreneurs who
          need to build brands, not just deploy models.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Every framework in this guide was tested across real Marley Group
          businesses: coffee supply chains, cannabis brand marketing,
          hospitality guest experience, and media content production.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Chapters</h2>
        <div className="space-y-4">
          {chapters.map((ch) => (
            <div key={ch.num} className="border border-[var(--line)] rounded-lg p-6 flex gap-5 items-start">
              <span className="text-[var(--gold)] font-display text-2xl leading-none">{ch.num}</span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold mb-1">{ch.title}</h3>
                <p className="text-[var(--dim)] text-sm leading-relaxed">{ch.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Get the Full Playbook</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          The complete AI Building Playbook is available to Marley Group
          members. Join the inner circle for full access.
        </p>
        <Link
          href="/membership"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join for Access
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/ai-for-business" className="hover:text-[var(--gold)] transition-colors">AI for Business</Link>
        <Link href="/courses" className="hover:text-[var(--gold)] transition-colors">Courses</Link>
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/business-building" className="hover:text-[var(--gold)] transition-colors">Brand Building</Link>
      </nav>
    </article>
  );
}
