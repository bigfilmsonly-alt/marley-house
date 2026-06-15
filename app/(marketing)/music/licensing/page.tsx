import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Music Licensing — The Marley Group',
  description:
    'License Marley Group music for film, television, advertising, events, and digital content. Inquire about sync licensing, commercial use, and event performance rights.',
  alternates: { canonical: `${SITE_URL}/music/licensing` },
  openGraph: {
    title: 'Music Licensing — The Marley Group',
    description:
      'License Marley Group music for film, television, advertising, events, and digital content.',
    url: `${SITE_URL}/music/licensing`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const categories = [
  {
    title: 'Film & Television',
    description:
      'Sync licensing for feature films, documentaries, series, and streaming content. Our catalog spans roots reggae, contemporary fusion, and original score work that brings authentic Jamaican heritage to any visual narrative.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9L16 12L10 15V9Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Advertising',
    description:
      'Commercial licensing for brand campaigns, television spots, radio, and digital advertising. We work with agencies and brands to match the right track to the right message — from global campaigns to regional activations.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Events & Live Performance',
    description:
      'Public performance rights for festivals, brand events, hospitality venues, and corporate functions. Whether you are curating a soundscape for a luxury resort or programming a cultural festival, we license tracks that elevate the experience.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Digital Content',
    description:
      'Licensing for podcasts, YouTube, social media, gaming, and digital platforms. Short-form or long-form, we provide flexible licensing terms that fit creator budgets and enterprise-scale productions alike.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="18" x2="12" y2="18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function MusicLicensingPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      {/* ── Breadcrumb ── */}
      <nav className="text-xs text-[var(--dim)] mb-8 flex items-center gap-2">
        <Link
          href="/music"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Music
        </Link>
        <span>/</span>
        <span className="text-[var(--cream)]">Licensing</span>
      </nav>

      {/* ── Header ── */}
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Music Licensing
      </h1>

      {/* AEO block */}
      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group catalog is available for licensing across film,
        television, advertising, events, and digital content. Every track
        carries the weight of Jamaican heritage and the authenticity of the
        Marley name. We work directly with creators, agencies, and studios to
        find the right music for the right moment.
      </p>

      <div className="gold-rule mb-12" />

      {/* ── Categories ── */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-8">
          Licensing Categories
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)]/30 transition-colors"
            >
              <div className="text-[var(--gold)] mb-4">{cat.icon}</div>
              <h3 className="text-[var(--cream)] font-semibold mb-2">
                {cat.title}
              </h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">
          How It Works
        </h2>
        <ol className="space-y-4">
          {[
            {
              step: '01',
              title: 'Submit an Inquiry',
              desc: 'Tell us about your project, the intended use, territory, and timeline.',
            },
            {
              step: '02',
              title: 'Catalog Review',
              desc: 'Our team curates a shortlist of tracks that fit your brief and brand.',
            },
            {
              step: '03',
              title: 'License & Clear',
              desc: 'We provide a transparent quote, handle all clearances, and deliver master files.',
            },
            {
              step: '04',
              title: 'Go Live',
              desc: 'Use the music in your project with full legal clearance and Marley Group backing.',
            },
          ].map((item) => (
            <li
              key={item.step}
              className="flex gap-5 items-start border border-[var(--line)] rounded-lg p-6"
            >
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">
                {item.step}
              </span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[var(--dim)] text-sm mt-1">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── CTA ── */}
      <section className="text-center py-12 border border-[var(--line)] rounded-lg bg-[var(--panel)] mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">
          Start a Licensing Inquiry
        </h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto text-sm">
          Tell us about your project and we will connect you with the right
          catalog and licensing terms.
        </p>
        <a
          href="mailto:licensing@themarleygroup.com?subject=Music%20Licensing%20Inquiry"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Inquire Now
        </a>
      </section>

      {/* ── Nav ── */}
      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link
          href="/music"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Music
        </Link>
        <Link
          href="/roots/docuseries"
          className="hover:text-[var(--gold)] transition-colors"
        >
          ROOTS Docuseries
        </Link>
        <Link
          href="/podcast"
          className="hover:text-[var(--gold)] transition-colors"
        >
          Podcast
        </Link>
        <Link
          href="/about"
          className="hover:text-[var(--gold)] transition-colors"
        >
          About
        </Link>
      </nav>
    </article>
  );
}
