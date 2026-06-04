'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { joinHouse, shopCoffee, exploreLionOrder, bookStay, trackEvent } from '@/lib/tracking';
import { useInAppBrowser } from '@/components/InAppBrowser';
import AgeGate from '@/components/AgeGate';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

const pillars = [
  {
    name: 'Marley Coffee',
    line: 'The original. Coffee from the Blue Mountains of Jamaica — legacy in every cup.',
    cta: 'Shop the Coffee',
    ctaSecondary: 'Start a Subscription',
    url: 'https://marleycoffee.com',
    image: '/lion-order/community-table.jpg',
    accent: '#E8C23A',
  },
  {
    name: 'Lion Order',
    line: 'Flower to the people. Roots-luxury cannabis that elevates consciousness.',
    cta: 'Explore Lion Order',
    ctaSecondary: 'Join the Movement',
    url: 'https://lionorder.com',
    image: '/lion-order/lion-eyes.jpg',
    accent: '#E8C23A',
    ageGate: true,
  },
  {
    name: 'RoMarley Beach House',
    line: 'Where the Caribbean meets luxury — Puerto Morelos, Riviera Maya.',
    cta: 'Book Your Stay',
    ctaSecondary: 'View the House',
    url: 'https://www.romarleybeachhouse.com/en',
    image: '/lion-order/rainforest.jpg',
    accent: '#E8C23A',
  },
];

export default function HomePage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [ageGateOpen, setAgeGateOpen] = useState(false);
  const [pendingPillar, setPendingPillar] = useState<typeof pillars[0] | null>(null);
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
    if (pillar.ageGate) {
      const confirmed = sessionStorage.getItem('lion-order-age');
      if (!confirmed) {
        setPendingPillar(pillar);
        setAgeGateOpen(true);
        return;
      }
    }
    // Track + open
    if (pillar.name === 'Marley Coffee') shopCoffee();
    else if (pillar.name === 'Lion Order') exploreLionOrder();
    else if (pillar.name === 'RoMarley Beach House') bookStay();
    openLink(pillar.url, pillar.name);
  }

  function handleAgeConfirm() {
    sessionStorage.setItem('lion-order-age', '1');
    setAgeGateOpen(false);
    if (pendingPillar) {
      exploreLionOrder();
      openLink(pendingPillar.url, pendingPillar.name);
      setPendingPillar(null);
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
            width={180}
            height={60}
            className="mb-8 opacity-80 brightness-125"
          />

          <button
            onClick={() => { trackEvent('enter'); document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="border border-[#E8C23A]/50 text-[#E8C23A] text-[11px] tracking-[0.3em] uppercase px-10 py-3 hover:bg-[var(--gold)]/5 transition-colors"
          >
            Enter
          </button>
        </div>
      </section>

      {/* ═══ LEGACY LINE ═══ */}
      <motion.section {...fadeIn} className="px-8 py-10 text-center">
        <p className="font-display text-base text-[var(--cream)] italic leading-[1.7] max-w-[340px] mx-auto">
          From Bob to Rohan — a legacy carried forward through coffee, culture, and craft.
        </p>
      </motion.section>

      <div className="gold-rule mx-8" />

      {/* ═══ THREE VIDEOS — stacked, CTAs below each ═══ */}
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
            <button onClick={() => handlePillarClick(pillars[0])} className="border border-[#E8C23A]/40 text-[#E8C23A] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#E8C23A]/5 transition-colors">
              Shop the Coffee
            </button>
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
            <button onClick={() => handlePillarClick(pillars[1])} className="border border-[#E8C23A]/40 text-[#E8C23A] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#E8C23A]/5 transition-colors">
              Explore Lion Order
            </button>
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
            <button onClick={() => handlePillarClick(pillars[2])} className="border border-[#E8C23A]/40 text-[#E8C23A] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#E8C23A]/5 transition-colors">
              Book Your Stay
            </button>
          </div>
        </motion.div>

      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ KING CLEMENTINE STRAIN GUIDE ═══ */}
      <section className="px-4 py-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#E8C23A] mb-2 text-center font-medium">
          Strain Reference Guide
        </p>
        <p className="text-white text-[16px] font-semibold text-center mb-1">
          King Clementine
        </p>
        <p className="text-white/50 text-[11px] text-center mb-6">
          6 Pages — Scroll to explore
        </p>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="border border-[var(--gold)]/20 overflow-hidden">
              <Image
                src={`/brand/strain-guide/page-${n}.jpg`}
                alt={`King Clementine Strain Guide — Page ${n}`}
                width={800}
                height={1035}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ INNER CIRCLE ═══ */}
      <motion.section {...fadeIn} className="px-6 py-12">
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
          width={140}
          height={45}
          className="mx-auto mb-6 opacity-60"
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

      {/* ═══ AGE GATE OVERLAY ═══ */}
      {ageGateOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0b0805]/98 backdrop-blur-sm">
          <div className="text-center px-8 max-w-[320px]">
            <Image src="/brand/lion-crest-icon.png" alt="Lion Order" width={48} height={48} className="mx-auto mb-8 opacity-60" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Age Verification</p>
            <p className="text-[var(--cream)] font-display text-lg italic mb-6">This content involves plant medicine.</p>
            <p className="text-white/60 text-xs font-light leading-[1.8] mb-8">You must be of legal age in your jurisdiction to view this content.</p>
            <button onClick={handleAgeConfirm} className="w-full border border-[var(--gold)]/30 text-[var(--gold)] text-[11px] tracking-[0.25em] uppercase px-6 py-3 hover:bg-[var(--gold)]/5 transition-colors mb-3">
              I am of legal age
            </button>
            <button onClick={() => { setAgeGateOpen(false); setPendingPillar(null); }} className="text-white/60 text-[10px]">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
