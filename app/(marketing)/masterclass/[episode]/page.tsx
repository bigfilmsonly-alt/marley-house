import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  episodes,
  getEpisodeBySlug,
  getAllEpisodeSlugs,
} from '@/content/episodes';

const SITE_URL = 'https://marley-house.vercel.app';

/* ── Static params ── */
export function generateStaticParams() {
  return getAllEpisodeSlugs();
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ episode: string }>;
}): Promise<Metadata> {
  const { episode: slug } = await params;
  const ep = getEpisodeBySlug(slug);
  if (!ep) return {};

  return {
    title: `${ep.title} — The Marley Masterclass`,
    description: ep.description,
    alternates: { canonical: `${SITE_URL}/masterclass/${ep.slug}` },
    openGraph: {
      title: `${ep.title} — The Marley Masterclass`,
      description: ep.description,
      url: `${SITE_URL}/masterclass/${ep.slug}`,
      images: [{ url: ep.image, width: 1200, height: 630 }],
    },
  };
}

/* ── Page ── */
export default async function EpisodePage({
  params,
}: {
  params: Promise<{ episode: string }>;
}) {
  const { episode: slug } = await params;
  const ep = getEpisodeBySlug(slug);
  if (!ep) notFound();

  const related = episodes.filter((e) => e.slug !== ep.slug).slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* ── Breadcrumb ── */}
      <nav className="text-xs text-[var(--dim)] mb-8 flex items-center gap-2">
        <Link
          href="/masterclass"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Masterclass
        </Link>
        <span>/</span>
        <span className="text-[var(--cream)]">Episode {ep.num}</span>
      </nav>

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="relative w-full md:w-72 aspect-[4/3] shrink-0 rounded-lg overflow-hidden border border-[var(--line)]">
          <Image
            src={ep.image}
            alt={ep.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 288px"
            priority
          />
          <div className="absolute top-3 left-3 bg-[var(--bg)]/80 backdrop-blur-sm text-[var(--gold)] text-xs font-bold px-3 py-1 rounded">
            EP {ep.num}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-4 tracking-tight leading-tight">
            {ep.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--dim)] mb-6">
            <span>{ep.duration}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--dim)]" />
            <span>
              {ep.tier === 'free' ? 'Free Episode' : 'Inner Circle'}
            </span>
          </div>

          {/* AEO block */}
          <p className="text-[var(--cream)] leading-relaxed border-l-2 border-[var(--gold)] pl-5">
            {ep.description}
          </p>
        </div>
      </div>

      <div className="gold-rule mb-12" />

      {/* ── What You'll Learn ── */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          What You Will Learn
        </h2>
        <ul className="space-y-3">
          {ep.learnings.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[var(--cream)]"
            >
              <span className="text-[var(--gold)] mt-1 shrink-0">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7.5L5.5 11L12 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-12 border border-[var(--line)] rounded-lg bg-[var(--panel)] mb-16">
        {ep.tier === 'free' ? (
          <>
            <p className="text-[var(--dim)] text-xs uppercase tracking-[0.3em] mb-3">
              Free Episode
            </p>
            <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
              Ready to Start?
            </h2>
            <p className="text-[var(--dim)] mb-6 max-w-md mx-auto text-sm">
              This episode is free to watch. No sign-up required.
            </p>
            <Link
              href="/"
              className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Watch Now
            </Link>
          </>
        ) : (
          <>
            <p className="text-[var(--dim)] text-xs uppercase tracking-[0.3em] mb-3">
              Inner Circle Exclusive
            </p>
            <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
              Unlock This Episode
            </h2>
            <p className="text-[var(--dim)] mb-6 max-w-md mx-auto text-sm">
              Join the Inner Circle to access all eight episodes and exclusive
              bonus content from Rohan Marley.
            </p>
            <Link
              href="/membership"
              className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Unlock with Inner Circle
            </Link>
          </>
        )}
      </section>

      {/* ── Related Episodes ── */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          More Episodes
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/masterclass/${rel.slug}`}
              className="block border border-[var(--line)] rounded-lg overflow-hidden hover:border-[var(--gold)]/40 transition-colors group"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={rel.image}
                  alt={rel.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute top-2 left-2 bg-[var(--bg)]/80 backdrop-blur-sm text-[var(--gold)] text-[10px] font-bold px-2 py-0.5 rounded">
                  EP {rel.num}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[var(--cream)] text-sm font-semibold leading-snug mb-1">
                  {rel.title}
                </h3>
                <p className="text-[var(--dim)] text-xs">
                  {rel.duration} &middot;{' '}
                  {rel.tier === 'free' ? 'Free' : 'Inner Circle'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Back link ── */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link
          href="/masterclass"
          className="hover:text-[var(--gold)] transition-colors"
        >
          All Episodes
        </Link>
        <Link
          href="/education"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Education
        </Link>
        <Link
          href="/entrepreneurship"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Entrepreneurship
        </Link>
        <Link
          href="/about"
          className="hover:text-[var(--gold)] transition-colors"
        >
          About Rohan
        </Link>
      </nav>
    </article>
  );
}
