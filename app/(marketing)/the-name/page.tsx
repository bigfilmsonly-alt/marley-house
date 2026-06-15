import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'The Name — The Marley Group',
  description:
    'What the Marley name means — the responsibility, the standard, and the promise that every family member carries into every venture.',
  alternates: { canonical: `${SITE}/the-name` },
  openGraph: {
    title: 'The Name — The Marley Group',
    description: 'The weight, the meaning, and the responsibility of carrying the Marley name.',
    url: `${SITE}/the-name`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function TheNamePage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Name
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Marley is not just a surname. It is a frequency recognized on every continent — a
        shorthand for resistance, joy, faith, and uncompromising quality. Carrying it is a
        privilege. Honoring it is a daily discipline.
      </p>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Weight</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Few family names carry the cultural weight of Marley. When Bob Marley sang, he did
          not represent a genre — he represented a people, a faith, and a possibility. That
          inheritance does not fade with time. If anything, it grows heavier with each
          generation, because the world&apos;s expectations grow with it.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Every product that bears the Marley name is measured against that standard. Every
          handshake, every partnership, every public statement is filtered through a simple
          question: does this honor the name?
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Responsibility</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Rohan Marley has spoken openly about the tension between legacy and innovation.
          &quot;The name opens every door,&quot; he has said, &quot;but it also means every
          failure is public and every shortcut is unforgivable.&quot; The Marley Group was
          built to formalize that responsibility — to create guardrails, quality standards,
          and a governance structure that protects the name across every brand and every market.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Promise</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          When you see the Marley name on a bag of coffee, a cannabis product, or a hotel
          booking, the promise is the same: this was made with intention, rooted in Jamaica,
          and built to a standard that the family itself would use. No licensing shortcuts.
          No diluted partnerships. The name is not for rent.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          That promise extends to the Inner Circle — every member who joins this community
          is treated as an extension of the family, not a customer. The Marley name demands
          nothing less.
        </p>
      </section>

      <div className="gold-rule mb-12" />

      <section className="text-center py-12">
        <p className="text-[var(--cream)] font-display text-xl mb-4">
          See the story behind the name.
        </p>
        <Link
          href="/history"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Read the History
        </Link>
      </section>

      <nav className="mt-8 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/history" className="hover:text-[var(--gold)] transition-colors">History</Link>
        <Link href="/legacy" className="hover:text-[var(--gold)] transition-colors">The Legacy</Link>
        <Link href="/the-archive" className="hover:text-[var(--gold)] transition-colors">The Archive</Link>
        <Link href="/rohan-marley" className="hover:text-[var(--gold)] transition-colors">Rohan Marley</Link>
      </nav>
    </article>
  );
}
