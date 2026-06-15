import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/content/cities';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Community — The Marley Group',
  description:
    'The Marley Group community connects fans, entrepreneurs, and culture-makers across the globe. From local chapters in 9 cities to online forums and member directories, the House is where heritage meets hustle.',
  alternates: { canonical: `${SITE}/community` },
  openGraph: {
    title: 'Community — The Marley Group',
    description:
      'Forums, member directory, and local chapters in 9 cities worldwide.',
    url: `${SITE}/community`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const features = [
  { label: 'Forums', desc: 'Discuss coffee, business, music, and lifestyle with fellow members.', href: '/community/forums' },
  { label: 'Member Directory', desc: 'Find and connect with House members by city, industry, or interest.', href: '/community/directory' },
  { label: 'Local Chapters', desc: 'Join meetups, tastings, and events in your city.', href: '/community/chapters' },
  { label: 'Events Calendar', desc: 'Exclusive House events, pop-ups, and virtual gatherings.' },
];

export default function CommunityPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The House Community
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group community connects fans, entrepreneurs, and culture-makers
        across the globe. From local chapters in 9 cities to online forums and member
        directories, the House is where heritage meets hustle.
      </p>

      <div className="gold-rule mb-12" />

      {/* What is the Community */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What is the Community?</h2>
        <p className="text-[var(--dim)] text-sm leading-relaxed max-w-2xl">
          The House Community is where Marley Group members share ideas, build
          connections, and grow together. Whether you are a coffee connoisseur, a
          budding entrepreneur, or a lifelong fan of the Marley legacy, the Community
          is your space to connect with like-minded people worldwide.
        </p>
      </section>

      {/* Membership Required */}
      <section className="mb-16 rounded-lg border border-[var(--line)] bg-[var(--bg)] p-6">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-2">Membership Required</h2>
        <p className="text-[var(--dim)] text-sm leading-relaxed mb-4">
          Community access is available to <strong className="text-[var(--cream)]">Inner Circle</strong> and{' '}
          <strong className="text-[var(--cream)]">Legacy</strong> members. Upgrade your tier to unlock
          forums, the member directory, local chapters, and exclusive events.
        </p>
        <Link
          href="/membership"
          className="inline-block text-sm font-bold uppercase tracking-wider px-6 py-3 rounded bg-[var(--gold)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          View Membership Tiers
        </Link>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Community Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.label} className="rounded-lg border border-[var(--line)] bg-[var(--bg)] p-5">
              <h3 className="text-[var(--gold)] font-bold mb-1">{f.label}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed mb-3">{f.desc}</p>
              {f.href && (
                <Link href={f.href} className="text-xs text-[var(--gold)] hover:underline">
                  Explore &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* City Chapters Grid */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Chapters Worldwide</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/cities/${c.slug}/community`}
              className="rounded-lg border border-[var(--line)] bg-[var(--bg)] p-4 hover:border-[var(--gold)] transition-colors"
            >
              <span className="text-[var(--cream)] font-bold text-sm">{c.name}</span>
              <span className="block text-[var(--dim)] text-xs mt-0.5">{c.region}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t border-[var(--line)]">
        <p className="text-[var(--cream)] mb-4">Ready to join the conversation?</p>
        <Link
          href="/membership"
          className="inline-block text-sm font-bold uppercase tracking-wider px-8 py-3 rounded bg-[var(--gold)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          Become a Member
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
        <Link href="/community/forums" className="hover:text-[var(--gold)] transition-colors">Forums</Link>
        <Link href="/community/directory" className="hover:text-[var(--gold)] transition-colors">Directory</Link>
        <Link href="/community/chapters" className="hover:text-[var(--gold)] transition-colors">Chapters</Link>
      </nav>
    </article>
  );
}
