import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Blog — The Marley Group',
  description:
    'Stories, insights, and updates from The Marley Group — covering coffee, cannabis, hospitality, music, and the Marley legacy.',
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: 'Blog — The Marley Group',
    description:
      'Stories and insights from The Marley Group universe. Coming soon.',
    url: `${SITE}/blog`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Blog
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Stories, insights, and updates from The Marley Group universe — covering coffee
        sourcing, cannabis culture, hospitality, music, and the principles that guide a
        legacy brand.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <div className="border border-[var(--line)] rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Coming Soon</h2>
          <p className="text-[var(--dim)] leading-relaxed max-w-lg mx-auto mb-8">
            We are building a library of stories from the Marley world — from the Blue
            Mountains to the boardroom. Be the first to read when we launch.
          </p>
          <div className="max-w-sm mx-auto">
            <p className="text-[var(--dim)] text-sm mb-4">
              Join the Inner Circle for early access to articles, behind-the-scenes
              content, and exclusive updates.
            </p>
            <Link
              href="/"
              className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Join the Inner Circle
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">What to Expect</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Origin stories from Marley Coffee farms and roasting operations</li>
          <li>Behind the scenes at Lion Order cultivation facilities</li>
          <li>Guest dispatches from Ro Marley Beach House</li>
          <li>Entrepreneurship lessons from Rohan Marley</li>
          <li>Music features and cultural commentary</li>
          <li>Rastafari philosophy and its role in modern business</li>
        </ul>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/media" className="hover:text-[var(--gold)] transition-colors">Media</Link>
        <Link href="/roots/podcast" className="hover:text-[var(--gold)] transition-colors">ROOTS Podcast</Link>
        <Link href="/press-room" className="hover:text-[var(--gold)] transition-colors">Press Room</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
