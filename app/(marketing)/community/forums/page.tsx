import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Forums — The House Community',
  description:
    'Discuss coffee culture, Lion Order, business and entrepreneurship, music and heritage, wellness, and more in The Marley Group community forums.',
  alternates: { canonical: `${SITE}/community/forums` },
  openGraph: {
    title: 'Forums — The House Community',
    description:
      'Six forum categories covering coffee, business, music, wellness, and more.',
    url: `${SITE}/community/forums`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const categories = [
  {
    name: 'Coffee Culture',
    desc: 'Origins, brewing methods, Marley Coffee reviews, and Blue Mountain deep-dives.',
  },
  {
    name: 'Lion Order',
    desc: 'Cannabis industry talk, strain guides, dispensary news, and Lion Order updates.',
  },
  {
    name: 'Business & Entrepreneurship',
    desc: 'Building brands, scaling ventures, and lessons from the Marley playbook.',
  },
  {
    name: 'Music & Heritage',
    desc: 'Reggae roots, new releases, cultural preservation, and the Marley legacy.',
  },
  {
    name: 'Wellness & Lifestyle',
    desc: 'Mindfulness, Rastafari principles, nutrition, and holistic living.',
  },
  {
    name: 'General Discussion',
    desc: 'Introduce yourself, share wins, ask questions, and connect with the House.',
  },
];

export default function ForumsPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Community Forums
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Discuss coffee culture, Lion Order, business and entrepreneurship, music and
        heritage, wellness, and more in The Marley Group community forums.
      </p>

      <div className="gold-rule mb-12" />

      {/* Categories */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Forum Categories</h2>
        <div className="space-y-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-lg border border-[var(--line)] bg-[var(--bg)] p-5 flex items-start justify-between gap-4"
            >
              <div>
                <h3 className="text-[var(--cream)] font-bold mb-1">{cat.name}</h3>
                <p className="text-[var(--dim)] text-sm leading-relaxed">{cat.desc}</p>
              </div>
              <span className="shrink-0 text-[10px] uppercase tracking-widest font-bold text-[var(--gold)] border border-[var(--gold)] rounded-full px-3 py-1">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">How It Works</h2>
        <ul className="space-y-2 text-sm text-[var(--dim)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
            Join as an Inner Circle or Legacy member to unlock all forums.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
            Post topics, reply to threads, and earn House Points for engagement.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
            Moderated by the Marley Group team to keep conversations respectful.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t border-[var(--line)]">
        <p className="text-[var(--cream)] mb-4">Get access to every forum category.</p>
        <Link
          href="/membership"
          className="inline-block text-sm font-bold uppercase tracking-wider px-8 py-3 rounded bg-[var(--gold)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          Join the House
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/community" className="hover:text-[var(--gold)] transition-colors">Community</Link>
        <Link href="/community/directory" className="hover:text-[var(--gold)] transition-colors">Directory</Link>
        <Link href="/community/chapters" className="hover:text-[var(--gold)] transition-colors">Chapters</Link>
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
      </nav>
    </article>
  );
}
