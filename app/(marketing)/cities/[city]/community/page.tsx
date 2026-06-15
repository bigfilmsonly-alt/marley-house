import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, getAllCitySlugs } from '@/content/cities';

const SITE_URL = 'https://marley-house.vercel.app';

export async function generateStaticParams() {
  return getAllCitySlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) return {};
  const title = `Marley Community in ${c.name} — The Marley Group`;
  const description = `Connect with The Marley Group community in ${c.name}, ${c.region}. Join fellow entrepreneurs, creatives, and culture lovers.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/community` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/community` },
  };
}

export default async function CommunityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Community in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group is building a network of entrepreneurs, creatives, and culture lovers
        in {c.name}, {c.region}. This is more than a brand — it is a community rooted in legacy.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Inner Circle — {c.name}</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The Inner Circle is our private membership community. Members in {c.name} get early
          access to events, product drops, masterclass episodes, and direct connections with
          the Marley team.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Local Ambassadors</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We are looking for cultural ambassadors in {c.name} who embody the Marley ethos —
          heritage, craft, and purpose. If that is you, join the Inner Circle and let us know.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/events`} className="hover:text-[var(--gold)] transition-colors">Events</Link>
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Join the Inner Circle</Link>
      </nav>
    </article>
  );
}
