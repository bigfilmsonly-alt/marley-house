'use client';

import { useState } from 'react';
import Image from 'next/image';
import { joinHouse } from '@/lib/tracking';
import { useInAppBrowser } from '@/components/InAppBrowser';
import AgeGate from '@/components/AgeGate';

const pillars = [
  {
    name: 'Marley Coffee',
    line: 'The original. Coffee from the Blue Mountains of Jamaica — legacy in every cup.',
    cta: 'Shop the Coffee',
    ctaSecondary: 'Start a Subscription',
    url: 'https://marleycoffee.com',
    image: '/lion-order/roots.jpg',
    accent: '#825B0D',
  },
  {
    name: 'Lion Order',
    line: 'Flower to the people. Roots-luxury cannabis that elevates consciousness.',
    cta: 'Explore Lion Order',
    ctaSecondary: 'Join the Movement',
    url: 'https://lionorder.com',
    image: '/lion-order/flower-closeup.jpg',
    accent: '#E8C23A',
    ageGate: true,
  },
  {
    name: 'RoMarley Beach House',
    line: 'Where the Caribbean meets luxury — Puerto Morelos, Riviera Maya.',
    cta: 'Book Your Stay',
    ctaSecondary: 'View the House',
    url: 'https://www.romarleybeachhouse.com/en',
    image: '/lion-order/landscape-waterfall.jpg',
    accent: '#B98524',
  },
];

export default function HomePage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const { openLink } = useInAppBrowser();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setFormLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name') || '',
          email: form.get('email'),
          phone: form.get('phone') || '',
          social: form.get('social') || '',
          source: 'inner-circle',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        joinHouse('inner-circle');
      }
    } finally {
      setFormLoading(false);
    }
  }

  function handlePillarClick(pillar: typeof pillars[0]) {
    openLink(pillar.url, pillar.name);
  }

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══ HERO ═══ */}
      <section className="w-full bg-black pt-12 pb-8">
        <div className="flex flex-col items-center justify-center px-8">
          <div className="relative w-[220px] h-[220px] mb-6">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain"
              priority
              sizes="220px"
            />
          </div>

          <h1 className="text-2xl font-semibold text-white tracking-wide text-center leading-[1.3] mb-3">
            Awaken the Lion<br />in Everyone
          </h1>

          <p className="text-[10px] tracking-[0.45em] uppercase text-[#E8C23A] font-medium mb-8">
            The Legacy of Rohan Marley
          </p>

          <button
            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-[var(--gold)]/40 text-[var(--gold)] text-[11px] tracking-[0.3em] uppercase px-10 py-3 hover:bg-[var(--gold)]/5 transition-colors"
          >
            Enter
          </button>
        </div>
      </section>

      {/* ═══ LEGACY LINE ═══ */}
      <section className="px-8 py-10 text-center">
        <p className="font-display text-base text-[var(--cream)] italic leading-[1.7] max-w-[340px] mx-auto">
          From Bob to Rohan — a legacy carried forward through coffee, culture, and craft.
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ THREE PILLARS ═══ */}
      <section id="pillars" className="w-full">
        {pillars.map((pillar, i) => (
          <div key={pillar.name}>
            <button
              onClick={() => handlePillarClick(pillar)}
              className="relative w-full aspect-[4/3] overflow-hidden block text-left group"
            >
              <Image
                src={pillar.image}
                alt={pillar.name}
                fill
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                sizes="100vw"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-[10px] tracking-[0.4em] uppercase font-medium mb-2" style={{ color: pillar.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="font-display text-3xl text-white font-semibold leading-[1.1] mb-3">
                  {pillar.name}
                </h2>
                <p className="text-[var(--cream)] text-[14px] font-light leading-[1.7] mb-5 max-w-[300px]">
                  {pillar.line}
                </p>
                <div className="flex items-center gap-4">
                  <span className="border border-white/30 text-white text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 group-hover:bg-white/10 transition-colors">
                    {pillar.cta}
                  </span>
                  <span className="text-[var(--dim)] text-[10px] tracking-[0.15em] uppercase">
                    {pillar.ctaSecondary}
                  </span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ INNER CIRCLE ═══ */}
      <section className="px-6 py-12">
        <div className="text-center mb-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3 font-medium">
            The Inner Circle
          </p>
          <p className="text-white text-[16px] font-semibold mb-2">
            Join the Movement
          </p>
          <p className="text-[var(--dim)] text-[12px]">
            Be the first to know. No noise. Just the order.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <p className="text-[var(--gold)] text-lg font-semibold mb-2">Welcome to the House.</p>
            <p className="text-[var(--dim)] text-[13px]">Check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 max-w-[360px] mx-auto">
            <input name="name" placeholder="Your Name" className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
            <input name="email" type="email" placeholder="Email" required className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
            <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
            <input name="social" placeholder="Instagram @handle" className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
            <button type="submit" disabled={formLoading} className="w-full bg-[var(--gold)] text-[var(--bg)] text-[12px] tracking-[0.2em] uppercase font-semibold py-3.5 hover:bg-[var(--gold)]/90 transition-colors disabled:opacity-50">
              {formLoading ? '...' : 'Join'}
            </button>
            <p className="text-[var(--dim)] text-[8px] text-center mt-2 opacity-50">We respect your privacy.</p>
          </form>
        )}
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ FOOTER ═══ */}
      <footer className="px-8 py-12 text-center">
        <Image
          src="/brand/rohan-signature.png"
          alt="Rohan Marley"
          width={140}
          height={45}
          className="mx-auto mb-6 opacity-60"
        />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {['marleycoffee.com', 'lionorder.com', 'romarleybeachhouse.com', 'rohanmarley.com'].map((site) => (
            <span key={site} className="text-[var(--dim)] text-[9px] tracking-[0.1em]">{site}</span>
          ))}
        </div>
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order · Est. 2022
        </p>
      </footer>
    </div>
  );
}
