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
  const title = `Marley Real Estate in ${c.name} — The Marley Group`;
  const description = `Explore Marley Group real estate ventures in ${c.name}, ${c.region}. Commercial properties, hospitality developments, and branded residences.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cities/${c.slug}/real-estate` },
    openGraph: { title, description, url: `${SITE_URL}/cities/${c.slug}/real-estate` },
  };
}

export default async function RealEstatePage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Real Estate in {c.name}
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group is exploring real estate opportunities in {c.name}, {c.region} — from
        branded hospitality properties to commercial spaces for Marley Coffee and Lion Order retail.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Development Pipeline</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Our real estate strategy in {c.name} focuses on locations that serve the Marley brand
          ecosystem — flagship cafes, dispensary-ready retail, and boutique hospitality venues that
          embody the Marley ethos of heritage and craft.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Investment Inquiries</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          Interested in partnering with The Marley Group on real estate in {c.name}? We welcome
          inquiries from developers, landlords, and investors aligned with our vision.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href={`/cities/${c.slug}`} className="hover:text-[var(--gold)] transition-colors">{c.name} Hub</Link>
        <Link href={`/cities/${c.slug}/franchise`} className="hover:text-[var(--gold)] transition-colors">Franchise</Link>
        <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
      </nav>
    </article>
  );
}
