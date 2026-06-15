import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Archive — The Marley Group',
  description:
    'The Archive is The Marley Group\'s living knowledge base — a curated collection of history, philosophy, and insider content. Coming soon: Ask Rohan.',
  alternates: { canonical: `${SITE}/the-archive` },
  openGraph: {
    title: 'The Archive — The Marley Group',
    description: 'A living knowledge base of Marley history, philosophy, and culture.',
    url: `${SITE}/the-archive`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const sections = [
  {
    title: 'History Vault',
    desc: 'Key moments in the Marley story — from Nine Mile to the global stage. Timelines, oral histories, and archival records.',
  },
  {
    title: 'Business Playbook',
    desc: 'Principles, frameworks, and case studies from Rohan Marley\'s two decades of building Marley Coffee, Lion Order, and the Beach House.',
  },
  {
    title: 'Rastafari Library',
    desc: 'An introduction to the spiritual and philosophical traditions that underpin every Marley enterprise — from Ital living to Nyabinghi reasoning.',
  },
  {
    title: 'Brand Archive',
    desc: 'Visual identity, packaging evolution, and the design language behind each Marley Group brand.',
  },
];

export default function TheArchivePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Archive
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Archive is The Marley Group&apos;s living knowledge base — a curated collection
        of history, philosophy, business principles, and cultural context. It is being built
        in public, one entry at a time, for the Inner Circle and beyond.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">What&apos;s Inside</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="text-[var(--gold)] font-bold text-sm tracking-wider uppercase mb-2">
                {s.title}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Coming Soon: Ask Rohan</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Ask Rohan is an AI-powered interface trained on Rohan Marley&apos;s public interviews,
          published writings, and business philosophy. It will allow Inner Circle members to
          ask questions and receive answers grounded in two decades of Marley enterprise
          thinking.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Ask Rohan is currently in development. Responses will be clearly labeled as
          AI-generated and should not be taken as personal, legal, or financial advice.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Access</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The Archive is available to Inner Circle members. Select entries will be published
          publicly as the collection grows. If you are not yet a member, join from the
          homepage to unlock the full library as it expands.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          Get access to the full Archive.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/the-name" className="hover:text-[var(--gold)] transition-colors">The Name</Link>
        <Link href="/history" className="hover:text-[var(--gold)] transition-colors">History</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
