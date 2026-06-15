import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Member Directory — The Marley Group',
  description:
    'Find and connect with House members worldwide. Browse the directory by city, industry, or interests — opt-in only, with full control over what you share.',
  alternates: { canonical: `${SITE}/community/directory` },
  openGraph: {
    title: 'Member Directory — The Marley Group',
    description:
      'Browse House members by city, industry, or interests. Privacy-first and opt-in.',
    url: `${SITE}/community/directory`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const browseOptions = [
  { label: 'By City', desc: 'See who is in Miami, Kingston, New York, London, and more.' },
  { label: 'By Industry', desc: 'Coffee, cannabis, hospitality, music, fashion, tech, and beyond.' },
  { label: 'By Interests', desc: 'Brewing, entrepreneurship, wellness, Rastafari culture, and more.' },
];

export default function DirectoryPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Member Directory
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Find and connect with House members worldwide. Browse the directory by city,
        industry, or interests — opt-in only, with full control over what you share.
      </p>

      <div className="gold-rule mb-12" />

      {/* What It Is */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What is the Directory?</h2>
        <p className="text-[var(--dim)] text-sm leading-relaxed max-w-2xl">
          The Member Directory lets you discover other House members around the world.
          Whether you are looking for a business partner in Atlanta, a coffee roaster in
          Sidama, or a creative collaborator in London, the directory makes it easy to
          find your people inside the Marley Group network.
        </p>
      </section>

      {/* Browse By */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Browse Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {browseOptions.map((opt) => (
            <div key={opt.label} className="rounded-lg border border-[var(--line)] bg-[var(--bg)] p-5">
              <h3 className="text-[var(--gold)] font-bold mb-1">{opt.label}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="mb-16 rounded-lg border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Your Privacy Comes First</h2>
        <ul className="space-y-2 text-sm text-[var(--dim)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
            <strong className="text-[var(--cream)]">Opt-in only</strong> — you are never listed unless you choose to be.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
            <strong className="text-[var(--cream)]">Control what you share</strong> — show your city, industry, bio, or just your name.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--gold)] mt-0.5">&#10003;</span>
            <strong className="text-[var(--cream)]">Remove anytime</strong> — toggle your listing off from account settings.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-10 border-t border-[var(--line)]">
        <p className="text-[var(--cream)] mb-4">Join the House to appear in the directory.</p>
        <Link
          href="/membership"
          className="inline-block text-sm font-bold uppercase tracking-wider px-8 py-3 rounded bg-[var(--gold)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          Become a Member
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/community" className="hover:text-[var(--gold)] transition-colors">Community</Link>
        <Link href="/community/forums" className="hover:text-[var(--gold)] transition-colors">Forums</Link>
        <Link href="/community/chapters" className="hover:text-[var(--gold)] transition-colors">Chapters</Link>
        <Link href="/membership" className="hover:text-[var(--gold)] transition-colors">Membership</Link>
      </nav>
    </article>
  );
}
