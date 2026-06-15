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
  const title = `Marley Culture in ${c.name} — The Marley Group`;
  const description = `Explore the intersection of Marley legacy, Rastafari tradition, and local culture in ${c.name}, ${c.region}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/culture` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/culture` },
  };
}

export default async function CulturePage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Culture in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley legacy meets {c.name}&apos;s cultural landscape. From music to food to art,
        discover how The Marley Group connects Rastafari tradition with the local scene in {c.region}.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Cultural Roots</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Every Marley venture is built on culture first. In {c.name}, that means engaging with
          local artists, musicians, and community leaders who share a vision of heritage-driven
          entrepreneurship and creative excellence.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Marley Influence</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          From Bob Marley&apos;s global musical revolution to Rohan&apos;s modern brand empire, the
          Marley name carries weight in {c.name}. We honor that influence through partnerships,
          programming, and products that reflect both tradition and innovation.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/events`} className="hover:text-[var(--gold)] transition-colors">Events</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
      </nav>
    </article>
  );
}
