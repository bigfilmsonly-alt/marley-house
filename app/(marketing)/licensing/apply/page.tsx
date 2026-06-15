import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Apply for a License — The Marley Group',
  description:
    'Submit a licensing application for Lion Order characters, the ROOTS format, or Marley brand marks. Review takes 2-4 weeks.',
  alternates: { canonical: `${SITE}/licensing/apply` },
  openGraph: {
    title: 'Apply for a License — The Marley Group',
    description:
      'Submit a licensing application for Marley Group intellectual property.',
    url: `${SITE}/licensing/apply`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const fields = [
  { label: 'Full Name', type: 'text', name: 'name' },
  { label: 'Company', type: 'text', name: 'company' },
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'License Type', type: 'select', name: 'license_type', options: ['Character License', 'ROOTS Format', 'Brand Marks', 'Multiple / Other'] },
  { label: 'Territory', type: 'text', name: 'territory' },
];

const timeline = [
  { week: 'Week 1', label: 'Application received and acknowledged' },
  { week: 'Week 2', label: 'Internal review by licensing and creative teams' },
  { week: 'Week 3', label: 'Follow-up call with qualified applicants' },
  { week: 'Week 4', label: 'Term sheet issued for approved partners' },
];

export default function LicensingApplyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Apply for a License
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        Tell us about your company and how you intend to use Marley Group intellectual
        property. Our team reviews every application and responds within two to four weeks.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Application</h2>
        <form className="space-y-5 max-w-lg">
          {fields.map((f) => (
            <div key={f.name}>
              <label className="block text-[var(--cream)] text-sm font-semibold mb-1">{f.label}</label>
              {f.type === 'select' ? (
                <select name={f.name} className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none">
                  <option value="">Select&hellip;</option>
                  {f.options?.map((o) => (<option key={o} value={o}>{o}</option>))}
                </select>
              ) : (
                <input type={f.type} name={f.name} className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
              )}
            </div>
          ))}
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Project Description</label>
            <textarea name="description" rows={4} className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <button type="submit" className="bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Submit Application
          </button>
        </form>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Review Timeline</h2>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.week} className="flex gap-4">
              <span className="text-[var(--gold)] font-bold text-sm shrink-0 w-16">{t.week}</span>
              <p className="text-[var(--dim)] text-sm">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-3">Contact</h2>
        <p className="text-[var(--dim)] leading-relaxed">
          For general licensing inquiries, reach us at{' '}
          <a href="mailto:licensing@marley-house.com" className="text-[var(--gold)] hover:underline">licensing@marley-house.com</a>.
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/licensing" className="hover:text-[var(--gold)] transition-colors">Licensing Overview</Link>
        <Link href="/licensing/characters" className="hover:text-[var(--gold)] transition-colors">Characters</Link>
        <Link href="/licensing/roots-format" className="hover:text-[var(--gold)] transition-colors">ROOTS Format</Link>
      </nav>
    </article>
  );
}
