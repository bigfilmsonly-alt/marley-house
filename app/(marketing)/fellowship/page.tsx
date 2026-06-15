import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Fellowship — The Marley Group',
  description:
    'The Marley Fellowship — an immersive program for young entrepreneurs building culture-driven businesses. Apply for the next cohort.',
  alternates: { canonical: `${SITE}/fellowship` },
  openGraph: {
    title: 'Fellowship — The Marley Group',
    description: 'Immersive fellowship for young entrepreneurs building culture-driven businesses.',
    url: `${SITE}/fellowship`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pillars = [
  { title: 'Immersion', text: 'Fellows spend time embedded within Marley Group operations — on the coffee farm, at the Beach House, inside the content studio. Learning by doing.' },
  { title: 'Curriculum', text: 'Structured education covering brand strategy, supply chain, finance, storytelling, and leadership. Taught by Marley Group operators.' },
  { title: 'Venture Build', text: 'Each fellow develops a real business during the program — from concept to launch plan — with hands-on guidance and Marley Group resources.' },
  { title: 'Community', text: 'Fellows join a lifelong network of Marley Group alumni, operators, and partners. The relationships built here outlast the program.' },
];

export default function FellowshipPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        The Marley Fellowship
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        A twelve-month immersive program for young entrepreneurs who want to
        build businesses that carry culture, create value, and endure across
        generations. No experience required — only conviction.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">The Vision</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          The Marley Fellowship exists because the next generation of great
          brands will come from founders who understand both culture and
          commerce. Traditional business education teaches one without the
          other. We teach both — by building.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          Fellows are selected for hunger, originality, and character. We do
          not look for resumes — we look for people who see the world
          differently and have the discipline to build something in it.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Program Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="border border-[var(--line)] rounded-lg p-6">
              <h3 className="text-[var(--gold)] font-semibold mb-2">{p.title}</h3>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Details</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Duration: 12 months (hybrid — in-person intensives + remote work)</li>
          <li>Cohort size: 10 fellows per year</li>
          <li>Locations: Jamaica, Miami, and select Marley Group partner sites</li>
          <li>Cost: Fully funded — no tuition, stipend provided</li>
          <li>Eligibility: Ages 18-30, any nationality, any background</li>
        </ul>
      </section>

      <section className="text-center py-12 border border-[var(--line)] rounded-lg">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Apply for the Fellowship</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Applications for the 2027 cohort open in January. Tell us who you
          are, what you want to build, and why it matters.
        </p>
        <a
          href="mailto:fellowship@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Apply Now
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/mentorship" className="hover:text-[var(--gold)] transition-colors">Mentorship</Link>
        <Link href="/courses" className="hover:text-[var(--gold)] transition-colors">Courses</Link>
        <Link href="/summit" className="hover:text-[var(--gold)] transition-colors">Summit</Link>
      </nav>
    </article>
  );
}
