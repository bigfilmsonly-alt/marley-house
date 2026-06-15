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
  const title = `Marley Events in ${c.name} — The Marley Group`;
  const description = `Discover upcoming Marley Group events in ${c.name}, ${c.region} — pop-ups, tastings, masterclasses, and cultural gatherings.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/events` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/events` },
  };
}

export default async function EventsPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Events in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group hosts tastings, pop-ups, masterclass screenings, and cultural gatherings
        across {c.name}, {c.region}. Join us and experience the legacy in person.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Upcoming Events</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          We are planning new events in {c.name} for 2026. Join the Inner Circle to get early
          access to tickets, VIP invitations, and behind-the-scenes meet-and-greets with Rohan Marley.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Past Highlights</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          From Marley Coffee tastings to Lion Order launch parties, our events in {c.name} bring
          together culture, music, and entrepreneurship under one roof.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/community`} className="hover:text-[var(--gold)] transition-colors">Community</Link>
        <Link href="/" className="hover:text-[var(--gold)] transition-colors">Join the Inner Circle</Link>
      </nav>
    </article>
  );
}
