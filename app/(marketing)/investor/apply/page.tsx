import type { Metadata } from 'next';
import Link from 'next/link';

const SITE = 'https://marley-house.vercel.app';

export const metadata: Metadata = {
  title: 'Apply to Invest — The Marley Group',
  description:
    'Submit an investor application to The Marley Group. Accredited investors can access the data room, investor deck, and schedule meetings.',
  alternates: { canonical: `${SITE}/investor/apply` },
  openGraph: {
    title: 'Apply to Invest — The Marley Group',
    description:
      'Accredited investor application for The Marley Group data room.',
    url: `${SITE}/investor/apply`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const investmentRanges = [
  '$25K – $100K',
  '$100K – $500K',
  '$500K – $1M',
  '$1M – $5M',
  '$5M+',
];

const interests = [
  'Marley Coffee',
  'Lion Order (Cannabis)',
  'Beach House (Hospitality)',
  'ROOTS Media',
  'House Sessions (Music)',
  'Full Portfolio',
];

const steps = [
  { step: '01', label: 'Apply', desc: 'Submit the application below with your investment profile and areas of interest' },
  { step: '02', label: 'Review', desc: 'Our investor relations team evaluates your application within five business days' },
  { step: '03', label: 'NDA', desc: 'Approved applicants receive a mutual NDA for electronic signature' },
  { step: '04', label: 'Deck', desc: 'Access the full investor deck and data room with detailed financials' },
  { step: '05', label: 'Meeting', desc: 'Schedule a one-on-one with The Marley Group leadership team' },
];

export default function InvestorApplyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-4 tracking-tight">
        Apply to Invest
      </h1>

      <p className="text-[var(--cream)] text-lg leading-relaxed max-w-2xl mb-12 border-l-2 border-[var(--gold)] pl-5">
        The Marley Group welcomes qualified investors who share our long-term vision for
        culture-driven brands. Complete the application below to begin the process.
      </p>

      <div className="gold-rule mb-12" />

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-6">Investor Application</h2>
        <form className="space-y-5 max-w-lg">
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Full Name</label>
            <input type="text" name="name" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Email</label>
            <input type="email" name="email" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Firm / Fund</label>
            <input type="text" name="firm" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none" />
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Investment Range</label>
            <select name="range" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none">
              <option value="">Select&hellip;</option>
              {investmentRanges.map((r) => (<option key={r} value={r}>{r}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-[var(--cream)] text-sm font-semibold mb-1">Areas of Interest</label>
            <select name="interest" className="w-full rounded bg-[var(--bg)] border border-[var(--line)] text-[var(--cream)] px-4 py-2.5 text-sm focus:border-[var(--gold)] outline-none">
              <option value="">Select&hellip;</option>
              {interests.map((i) => (<option key={i} value={i}>{i}</option>))}
            </select>
          </div>
          <div className="border border-[var(--line)] rounded-lg p-4">
            <label className="flex items-start gap-3">
              <input type="checkbox" name="accredited" className="mt-1 accent-[var(--gold)]" />
              <span className="text-[var(--dim)] text-sm leading-relaxed">
                I confirm that I am an accredited investor as defined by the SEC, or the
                equivalent designation in my jurisdiction, and I understand that investment
                involves risk including possible loss of principal.
              </span>
            </label>
          </div>
          <button type="submit" className="bg-[var(--gold)] text-[var(--bg)] font-bold text-sm tracking-wider uppercase px-8 py-3 rounded hover:opacity-90 transition-opacity">
            Submit Application
          </button>
        </form>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl text-[var(--cream)] mb-4">Process</h2>
        <div className="space-y-5">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4">
              <span className="text-[var(--gold)] font-bold text-lg shrink-0">{s.step}</span>
              <div>
                <h3 className="text-[var(--cream)] font-semibold">{s.label}</h3>
                <p className="text-[var(--dim)] text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-4 text-xs text-[var(--dim)]">
        <Link href="/investor" className="hover:text-[var(--gold)] transition-colors">Investor Overview</Link>
        <Link href="/investor/metrics" className="hover:text-[var(--gold)] transition-colors">Key Metrics</Link>
        <Link href="/investor/deck" className="hover:text-[var(--gold)] transition-colors">Investor Deck</Link>
      </nav>
    </article>
  );
}
