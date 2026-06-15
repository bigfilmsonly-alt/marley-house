import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Media — The Marley Group',
  description:
    'ROOTS Media is the storytelling arm of The Marley Group. Documentaries, podcasts, masterclasses, and cultural content connecting the Marley legacy to the world.',
  alternates: { canonical: `${SITE}/media` },
  openGraph: {
    title: 'Media — The Marley Group',
    description:
      'Documentaries, podcasts, masterclasses, and cultural content from The Marley Group.',
    url: `${SITE}/media`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const channels = [
  { title: 'ROOTS Podcast', href: '/roots/podcast', desc: 'Conversations on legacy, entrepreneurship, and Rastafari philosophy.' },
  { title: 'The Marley Masterclass', href: '/masterclass', desc: 'Eight episodes on business, brand building, and the Marley blueprint.' },
  { title: 'House Sessions', href: '/music', desc: 'Live acoustic performances filmed at Marley properties across Jamaica.' },
  { title: 'Press Room', href: '/press-room', desc: 'Media inquiries, press kits, and recent coverage of The Marley Group.' },
  { title: 'Blog', href: '/blog', desc: 'Stories, updates, and insights from The Marley Group universe.' },
];

export default function MediaPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Media
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        ROOTS Media is the storytelling engine of The Marley Group. Through documentaries,
        podcasts, masterclasses, and live content, we connect the Marley legacy to a
        global audience. Every story starts at the root — culture, family, and the
        Jamaican soil that made it all possible.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Content Channels</h2>
        <div className="space-y-4">
          {channels.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="block border border-[var(--line)] rounded-lg p-6 hover:border-[var(--gold)] transition-colors"
            >
              <h3 className="text-[var(--cream)] font-semibold mb-1">{c.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The ROOTS Vision</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          ROOTS Media exists because the Marley story is not finished. Every generation
          adds a new chapter. Our mission is to document, produce, and distribute content
          that honors the past while building the future.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          From the Blue Mountains to global stages, ROOTS Media captures the people,
          places, and principles that make The Marley Group what it is.
        </p>
      </section>

      <section className="text-center py-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Watch the Masterclass</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Our flagship series — eight episodes with Rohan Marley on legacy, brand, and business.
        </p>
        <Link
          href="/masterclass"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Start Watching
        </Link>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/roots/podcast" className="hover:text-[var(--gold)] transition-colors">ROOTS Podcast</Link>
        <Link href="/masterclass" className="hover:text-[var(--gold)] transition-colors">Masterclass</Link>
        <Link href="/press-room" className="hover:text-[var(--gold)] transition-colors">Press Room</Link>
        <Link href="/blog" className="hover:text-[var(--gold)] transition-colors">Blog</Link>
      </nav>
    </article>
  );
}
