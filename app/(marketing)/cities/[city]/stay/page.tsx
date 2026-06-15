import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '@/content/cities';

const SITE_URL = 'https://marley-house.vercel.app';

export async function generateStaticParams() {
  return cities.filter((c) => c.hasStay).map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasStay) return {};
  const title = `Stay in ${c.name} — RoMarley Beach House & The Marley Group`;
  const description = `Book your stay in ${c.name}, ${c.region} with The Marley Group. Boutique hospitality, retreat experiences, and curated getaways.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/stay` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/stay` },
  };
}

export default async function StayPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c || !c.hasStay) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Stay in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Experience Marley hospitality in {c.name}, {c.region}. From boutique stays to curated retreat
        experiences, The Marley Group brings heritage and comfort together.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Accommodations</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          RoMarley Beach House and affiliated properties in {c.name} offer an intimate hospitality
          experience — thoughtfully designed spaces, locally sourced cuisine, and the unmistakable
          warmth of the Marley family tradition.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Book Your Stay</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Availability in {c.name} is limited by design. Contact our hospitality team or visit
          romarleybeachhouse.com to reserve your dates and learn about seasonal packages.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href="/romarley-beach-house" className="hover:text-[var(--gold)] transition-colors">RoMarley Beach House</Link>
        <Link href={`/cities/${c.slug}/culture`} className="hover:text-[var(--gold)] transition-colors">Culture</Link>
      </nav>
    </article>
  );
}
