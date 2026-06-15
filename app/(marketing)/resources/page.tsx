import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Resources — The Marley Group',
  description:
    'Your resource hub for the Marley ecosystem — masterclass episodes, courses, blog, The Archive, and Ask Rohan AI concierge.',
  alternates: { canonical: `${SITE}/resources` },
  openGraph: {
    title: 'Resources — The Marley Group',
    description: 'Masterclass, courses, blog, The Archive, and Ask Rohan — all in one place.',
    url: `${SITE}/resources`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const resources = [
  {
    title: 'Rohan Marley Masterclass',
    desc: 'Eight episodes covering Blue Mountain coffee, the cannabis playbook, family business, hospitality, storytelling, athlete-to-entrepreneur, Rastafari principles, and revenue streams.',
    href: '/masterclass',
    tag: 'Video',
  },
  {
    title: 'The Archive',
    desc: 'The Marley Group\'s living knowledge base — curated history, philosophy, business frameworks, and brand evolution.',
    href: '/the-archive',
    tag: 'Knowledge Base',
  },
  {
    title: 'Ask Rohan',
    desc: 'An AI concierge powered by The Archive. Ask questions and get answers grounded in Rohan\'s own words from interviews, podcasts, and published philosophy.',
    href: '/ask-rohan',
    tag: 'AI',
  },
  {
    title: 'Blog',
    desc: 'Long-form writing on coffee culture, Jamaican heritage, entrepreneurship, and the Marley legacy.',
    href: '/blog',
    tag: 'Articles',
  },
  {
    title: 'Education Hub',
    desc: 'Courses and learning paths built around Marley enterprise thinking — from coffee sourcing to brand building.',
    href: '/education',
    tag: 'Courses',
  },
  {
    title: 'Roots',
    desc: 'Documentary episodes and podcast conversations that trace the Marley lineage from Nine Mile to the global stage.',
    href: '/roots',
    tag: 'Media',
  },
];

export default function ResourcesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Resources
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Everything the Marley ecosystem offers for learning, growing, and going deeper —
        masterclass episodes, AI-powered answers, long-form writing, and archival material.
      </p>

      <section className="mb-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)]/40 transition-colors block"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold bg-[var(--gold)]/10 px-2 py-0.5 rounded">
                  {r.tag}
                </span>
              </div>
              <h2 className="text-[var(--cream)] font-bold text-sm tracking-wider uppercase mb-2 group-hover:text-[var(--gold)] transition-colors">
                {r.title}
              </h2>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-2">
          Unlock premium resources.
        </p>
        <p className="text-[var(--dim)] text-sm mb-6 max-w-md mx-auto leading-relaxed">
          Inner Circle members get full access to the Masterclass, unlimited Ask Rohan
          conversations, and early access to new Archive entries.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join the Inner Circle
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/the-archive" className="hover:text-[var(--gold)] transition-colors">The Archive</Link>
        <Link href="/ask-rohan" className="hover:text-[var(--gold)] transition-colors">Ask Rohan</Link>
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
        <Link href="/blog" className="hover:text-[var(--gold)] transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
