import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getAllCitySlugs } from '@/content/cities';

const SITE_URL = 'https://marley-house.vercel.app';

export async function generateStaticParams() {
  return getAllCitySlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) return {};
  const title = `${c.name} — The Marley Group`;
  return {
    title,
    description: c.description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}` },
    openGraph: {
      title,
      description: c.description,
      url: `${SITE_URL}/cities/${c.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

const subPages = (slug: string, hasDispensaries: boolean, hasStay: boolean) => {
  const pages = [
    { href: `/cities/${slug}/coffee`, label: 'Marley Coffee' },
    { href: `/cities/${slug}/where-to-buy`, label: 'Where to Buy' },
    { href: `/cities/${slug}/events`, label: 'Events' },
    { href: `/cities/${slug}/culture`, label: 'Culture' },
    { href: `/cities/${slug}/community`, label: 'Community' },
    { href: `/cities/${slug}/real-estate`, label: 'Real Estate' },
    { href: `/cities/${slug}/franchise`, label: 'Franchise' },
  ];
  if (hasDispensaries) pages.splice(1, 0, { href: `/cities/${slug}/dispensaries`, label: 'Dispensaries' });
  if (hasStay) pages.push({ href: `/cities/${slug}/stay`, label: 'Stay' });
  return pages;
};

export default async function CityHubPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  const links = subPages(c.slug, c.hasDispensaries, c.hasStay);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        {c.name} &mdash; The Marley Group
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        {c.description}
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Overview</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          The Marley Group is active in {c.name}, {c.region} through its family of brands —
          Marley Coffee, Lion Order, RoMarley Beach House, and ROOTS Media. Explore what we are
          building in {c.name} and how you can connect with the legacy.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">Explore {c.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group border border-[var(--line)] rounded-lg p-5 hover:border-[var(--gold)] transition-colors bg-[var(--bg)]"
            >
              <span className="text-[var(--gold)] font-display text-lg group-hover:underline">{l.label}</span>
              <span className="block text-[var(--dim)] text-sm mt-1">{l.label} in {c.name}, {c.region}</span>
            </Link>
          ))}
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        {cities.filter((o) => o.slug !== c.slug).slice(0, 5).map((o) => (
          <Link key={o.slug} href={`/cities/${o.slug}`} className="hover:text-[var(--gold)] transition-colors">
            {o.name}
          </Link>
        ))}
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
