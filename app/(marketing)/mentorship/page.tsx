import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Mentorship — The Marley Group',
  description:
    'The Marley Group Mentorship Program — direct guidance from Marley Group operators for culture-driven entrepreneurs.',
  alternates: { canonical: `${SITE}/mentorship` },
  openGraph: {
    title: 'Mentorship — The Marley Group',
    description: 'Apply for mentorship from Marley Group operators and brand builders.',
    url: `${SITE}/mentorship`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const tracks = [
  { title: 'Brand Builder', duration: '6 months', description: 'For founders in the first two years of building a consumer brand. Focus on positioning, storytelling, and go-to-market strategy.' },
  { title: 'Growth Operator', duration: '6 months', description: 'For entrepreneurs with revenue traction seeking to scale. Focus on operations, team building, and capital strategy.' },
  { title: 'Legacy Architect', duration: '12 months', description: 'For established operators building multi-generational enterprises. Focus on succession, portfolio expansion, and cultural IP.' },
];

export default function MentorshipPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Mentorship
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group Mentorship Program pairs emerging entrepreneurs with
        experienced operators from across our portfolio. Direct guidance.
        Real accountability. No shortcuts.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Program Structure</h2>
        <p className="text-[var(--dim)] leading-relaxed mb-4">
          Each mentee is matched with a Marley Group operator based on industry,
          stage, and strategic needs. The program includes bi-weekly one-on-one
          sessions, quarterly cohort gatherings, and direct access to Marley
          Group resources and network.
        </p>
        <p className="text-[var(--dim)] leading-relaxed">
          This is not a passive program. We expect mentees to execute between
          sessions, share honest progress, and contribute to the cohort
          community. Mentorship is earned through effort, not tuition.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Tracks</h2>
        <div className="space-y-4">
          {tracks.map((t) => (
            <div key={t.title} className="border border-[var(--line)] rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[var(--gold)] font-semibold">{t.title}</h3>
                <span className="text-[var(--dim)] text-xs tracking-wider">{t.duration}</span>
              </div>
              <p className="text-[var(--dim)] text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Who Should Apply</h2>
        <ul className="space-y-3 text-[var(--dim)] leading-relaxed">
          <li>Culture-driven founders building consumer-facing brands</li>
          <li>Entrepreneurs in food, beverage, cannabis, hospitality, or media</li>
          <li>Operators committed to long-term, legacy-minded building</li>
          <li>Individuals willing to be held accountable and do the work</li>
        </ul>
      </section>

      <section className="text-center py-12 border border-[var(--line)] rounded-lg">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Apply Now</h2>
        <p className="text-[var(--dim)] mb-6 max-w-md mx-auto">
          Applications are reviewed on a rolling basis. Cohorts begin quarterly.
          Include your story, your brand, and what you need most.
        </p>
        <a
          href="mailto:mentorship@marley-house.com"
          className="inline-block bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Submit Application
        </a>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/education" className="hover:text-[var(--gold)] transition-colors">Education</Link>
        <Link href="/courses" className="hover:text-[var(--gold)] transition-colors">Courses</Link>
        <Link href="/fellowship" className="hover:text-[var(--gold)] transition-colors">Fellowship</Link>
        <Link href="/summit" className="hover:text-[var(--gold)] transition-colors">Summit</Link>
      </nav>
    </article>
  );
}
