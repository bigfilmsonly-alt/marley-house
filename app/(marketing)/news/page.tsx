import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'News — The Marley Group',
  description:
    'The latest news, announcements, and updates from The Marley Group — Marley Coffee, Lion Order, RoMarley Beach House, and ROOTS Media.',
  alternates: { canonical: `${SITE}/news` },
  openGraph: {
    title: 'News — The Marley Group',
    description: 'Stay current with every move from The Marley Group.',
    url: `${SITE}/news`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const articles = [
  {
    date: '2026-06-10',
    title: 'Marley Coffee Expands to 12 New Markets Across Europe',
    summary:
      'Blue Mountain blends will now reach specialty retailers in France, Germany, the Netherlands, and nine additional territories by Q3 2026.',
  },
  {
    date: '2026-05-22',
    title: 'Lion Order Debuts Limited-Edition King Clementine Reserve',
    summary:
      'The small-batch harvest celebrates five years of craft cannabis rooted in Rastafari tradition.',
  },
  {
    date: '2026-04-15',
    title: 'ROOTS Season 2 Streaming Now',
    summary:
      'Eight new masterclass episodes with Rohan Marley — from athlete to entrepreneur, family business, and revenue streams.',
  },
  {
    date: '2026-03-01',
    title: 'RoMarley Beach House Named Top 10 Boutique Stay in the Caribbean',
    summary:
      'Travel + Leisure recognizes the property for its cultural authenticity and world-class hospitality.',
  },
];

export default function NewsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        News
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The latest announcements, launches, and milestones from across The Marley Group portfolio.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16 space-y-10">
        {articles.map((a) => (
          <div key={a.title} className="border-b border-[var(--line)] pb-8">
            <time className="text-xs text-[var(--dim)] uppercase tracking-wider">{a.date}</time>
            <h2 className="font-display text-xl text-[var(--cream)] mt-2 mb-2">{a.title}</h2>
            <p className="text-[var(--dim)] leading-relaxed text-sm">{a.summary}</p>
          </div>
        ))}
      </section>

      <div className="gold-rule mb-12" />

      {/* Subscribe CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Never Miss an Update</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Subscribe to The Marley Group newsletter for first access to news, drops, and exclusive content.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Subscribe
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
        <Link href="/marley-coffee" className="hover:text-[var(--gold)] transition-colors">Marley Coffee</Link>
        <Link href="/lion-order" className="hover:text-[var(--gold)] transition-colors">Lion Order</Link>
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">Beach House</Link>
      </nav>
    </article>
  );
}
