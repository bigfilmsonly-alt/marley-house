import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topics, getTopicBySlug } from '@/content/topics';

const SITE = 'https://marley-house.vercel.app';

/* ── Static params ── */
export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const t = getTopicBySlug(topic);
  if (!t) return { title: 'Not Found' };

  const title = `Rohan Marley on ${t.title}`;

  return {
    title,
    description: t.description,
    alternates: { canonical: `${SITE}/rohan-marley/on-${t.slug}` },
    openGraph: {
      title,
      description: t.description,
      url: `${SITE}/rohan-marley/on-${t.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function RohanMarleyOnTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const t = getTopicBySlug(topic);
  if (!t) notFound();

  const otherTopics = topics.filter((o) => o.slug !== t.slug);

  /* Article JSON-LD */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Rohan Marley on ${t.title}`,
    description: t.description,
    author: {
      '@type': 'Person',
      name: 'Rohan Marley',
      url: `${SITE}/rohan-marley`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Marley Group',
      url: SITE,
    },
    url: `${SITE}/rohan-marley/on-${t.slug}`,
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-[var(--dim)] text-xs mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <span>/</span>
        <span className="text-[var(--cream)]">On {t.title}</span>
      </nav>

      {/* H1 */}
      <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-6 tracking-tight">
        Rohan Marley on {t.title}
      </h1>

      {/* AEO answer block */}
      <div
        data-answer="true"
        className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5"
      >
        {t.description}
      </div>

      <div className="gold-rule mb-12" />

      {/* Quote */}
      <blockquote className="border-l-4 border-[var(--gold)] pl-6 mb-16">
        <p className="font-display text-xl md:text-2xl text-[var(--cream)] italic leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </p>
        <cite className="block mt-4 text-[var(--dim)] text-sm not-italic">
          — Rohan Marley
        </cite>
      </blockquote>

      {/* Body */}
      <section className="mb-16">
        <div className="text-[var(--dim)] leading-relaxed space-y-4">
          {t.body.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Related pages */}
      {t.relatedPages.length > 0 && (
        <section className="mb-16">
          <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
            Related
          </h2>
          <nav className="flex flex-wrap gap-4">
            {t.relatedPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-sm text-[var(--dim)] border border-[var(--line)] rounded-full px-4 py-2 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </section>
      )}

      <div className="gold-rule mb-12" />

      {/* Other topics */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          More from Rohan Marley
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherTopics.map((o) => (
            <Link
              key={o.slug}
              href={`/rohan-marley/on-${o.slug}`}
              className="group border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <h3 className="text-[var(--gold)] font-display text-base mb-1 group-hover:underline">
                On {o.title}
              </h3>
              <p className="text-[var(--dim)] text-sm line-clamp-2">
                {o.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Join the Inner Circle
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Get early access to masterclass episodes, drops, and behind-the-scenes
          content from Rohan Marley.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Join Now
        </Link>
      </section>

      {/* Internal nav */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
        <Link href="/rohan-marley/story" className="hover:text-[var(--gold)] transition-colors">Story</Link>
        <Link href="/rohan-marley/philosophy" className="hover:text-[var(--gold)] transition-colors">Philosophy</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">The Marley Group</Link>
      </nav>
    </article>
  );
}
