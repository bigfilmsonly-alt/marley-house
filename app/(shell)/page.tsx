'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { joinHouse, trackEvent } from '@/lib/tracking';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

export default function HomePage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

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

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══ HERO ═══ */}
      <section className="w-full bg-black pt-12 pb-8">
        <div className="flex flex-col items-center justify-center px-8">
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain"
              priority
              sizes="220px"
            />
          </div>

          <Image
            src="/brand/rohan-signature.png"
            alt="Rohan Marley"
            width={260}
            height={85}
            className="mb-8 opacity-95 brightness-150"
          />

          {/* Inner Circle capture — right in the hero */}
          <div className="w-full max-w-[320px]">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#E8C23A] mb-4 text-center font-medium">
              Join the Inner Circle
            </p>
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-[#E8C23A] text-base font-semibold mb-1">Welcome to the House.</p>
                <p className="text-white/50 text-[11px]">Check your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input name="name" placeholder="Your Name" className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
                <input name="email" type="email" placeholder="Email" required className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
                <input name="social" placeholder="Instagram @handle" className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
                <button type="submit" disabled={formLoading} className="w-full bg-[#E8C23A] text-black text-[11px] tracking-[0.25em] uppercase font-semibold py-3 hover:bg-[#E8C23A]/90 transition-colors disabled:opacity-50">
                  {formLoading ? '...' : 'Enter'}
                </button>
                <p className="text-white/30 text-[7px] text-center">We respect your privacy.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ═══ LEGACY LINE ═══ */}
      <motion.section {...fadeIn} className="px-8 py-10 text-center">
        <p className="font-display text-base text-[var(--cream)] italic leading-[1.7] max-w-[340px] mx-auto">
          From Bob to Rohan — a legacy carried forward through coffee, culture, and craft.
        </p>
      </motion.section>

      <div className="gold-rule mx-8" />

      {/* ═══ THREE PILLARS — video + CTA ═══ */}
      <section id="pillars" className="w-full">

        {/* 01 — Marley Coffee */}
        <motion.div {...fadeIn} className="border-t border-[var(--gold)]/20">
          <div className="relative w-full" style={{ paddingTop: '177.8%' }}>
            <iframe
              src="https://player.vimeo.com/video/1198236151?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-[var(--bg)] px-6 py-6 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#E8C23A] mb-2 font-medium">01</p>
            <h2 className="font-display text-2xl text-white font-semibold mb-2">Marley Coffee</h2>
            <p className="text-white/60 text-[13px] font-light mb-5 max-w-[300px] mx-auto">
              The original. Coffee from the Blue Mountains of Jamaica — legacy in every cup.
            </p>
            <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#E8C23A]/40 text-[#E8C23A] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#E8C23A]/5 transition-colors">
              Shop the Coffee
            </a>
          </div>
        </motion.div>

        {/* 02 — Lion Order */}
        <motion.div {...fadeIn} className="border-t border-[var(--gold)]/20">
          <div className="relative w-full" style={{ paddingTop: '168.7%' }}>
            <iframe
              src="https://player.vimeo.com/video/1198233695?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-[var(--bg)] px-6 py-6 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#E8C23A] mb-2 font-medium">02</p>
            <h2 className="font-display text-2xl text-white font-semibold mb-2">Lion Order</h2>
            <p className="text-white/60 text-[13px] font-light mb-5 max-w-[300px] mx-auto">
              Flower to the people. Roots-luxury cannabis that elevates consciousness.
            </p>
            <a href="https://lionorder.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#E8C23A]/40 text-[#E8C23A] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#E8C23A]/5 transition-colors">
              Explore Lion Order
            </a>
          </div>
        </motion.div>

        {/* 03 — RoMarley Beach House */}
        <motion.div {...fadeIn} className="border-t border-[var(--gold)]/20">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1198237050?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="bg-[var(--bg)] px-6 py-6 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#E8C23A] mb-2 font-medium">03</p>
            <h2 className="font-display text-2xl text-white font-semibold mb-2">RoMarley Beach House</h2>
            <p className="text-white/60 text-[13px] font-light mb-5 max-w-[300px] mx-auto">
              Where the Caribbean meets luxury — Puerto Morelos, Riviera Maya.
            </p>
            <a href="https://www.romarleybeachhouse.com/en" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#E8C23A]/40 text-[#E8C23A] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#E8C23A]/5 transition-colors">
              Book Your Stay
            </a>
          </div>
        </motion.div>

      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ INNER CIRCLE ═══ */}
      <motion.section {...fadeIn} id="inner-circle" className="px-6 py-12">
        <div className="text-center mb-6">
          <div className="relative w-[60px] h-[60px] mx-auto mb-4">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain opacity-50"
              sizes="60px"
            />
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 font-medium">
            The Inner Circle
          </p>
          <p className="text-white text-[16px] font-semibold mb-2">
            Join the Movement
          </p>
          <p className="text-white/60 text-[12px]">
            Be the first to know. No noise. Just the order.
          </p>
        </div>

        <div className="border border-[var(--line)] bg-[var(--panel)] p-8 max-w-[400px] mx-auto">
          {submitted ? (
            <div className="text-center py-6">
              <p className="text-[var(--gold)] text-lg font-semibold mb-2">Welcome to the House.</p>
              <p className="text-white/60 text-[13px]">Check your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input name="name" placeholder="Your Name" className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-white/60/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
              <input name="email" type="email" placeholder="Email" required className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-white/60/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
              <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-white/60/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
              <input name="social" placeholder="Instagram @handle" className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] placeholder:text-white/60/40 focus:outline-none focus:border-[var(--gold)]/50 transition-colors" />
              <button type="submit" disabled={formLoading} className="w-full bg-[#E8C23A] text-[var(--bg)] text-[12px] tracking-[0.2em] uppercase font-semibold py-3.5 hover:bg-[#E8C23A]/90 transition-colors disabled:opacity-50">
                {formLoading ? '...' : 'Join'}
              </button>
              <p className="text-white/60 text-[8px] text-center mt-2 opacity-50">We respect your privacy.</p>
            </form>
          )}
        </div>
      </motion.section>

      <div className="gold-rule mx-8" />

      {/* ═══ FOOTER ═══ */}
      <motion.footer {...fadeIn} className="px-8 py-12 text-center">
        <Image
          src="/brand/rhr-monogram-transparent.png"
          alt="R-M Monogram"
          width={80}
          height={80}
          className="mx-auto mb-4 opacity-70"
        />
        <Image
          src="/brand/rohan-signature.png"
          alt="Rohan Marley"
          width={260}
          height={85}
          className="mx-auto mb-6 opacity-95 brightness-150"
        />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {['marleycoffee.com', 'lionorder.com', 'romarleybeachhouse.com', 'rohanmarley.com'].map((site) => (
            <span key={site} className="text-white/60 text-[9px] tracking-[0.1em]">{site}</span>
          ))}
        </div>
        <div className="flex justify-center gap-6 mb-6">
          {[
            { label: 'Instagram', url: 'https://instagram.com/roloaded' },
            { label: 'YouTube', url: 'https://youtube.com/@rohanmarley' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/rohanmarley' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 text-[10px] tracking-[0.15em] uppercase hover:text-[var(--gold)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-white/60 text-[8px] tracking-[0.3em] uppercase mb-2">
          Lion Order · Est. 2022
        </p>
        <p className="text-white/60/40 text-[7px] tracking-[0.2em]">
          &copy; 2026 Lion Order. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
