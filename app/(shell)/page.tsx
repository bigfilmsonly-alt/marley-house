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

      {/* ═══ THE MASTERCLASS — Inner Circle ═══ */}
      <motion.section {...fadeIn} id="inner-circle" className="px-4 py-12">
        <div className="text-center mb-8">
          <Image
            src="/brand/rhr-monogram-transparent.png"
            alt="R-M"
            width={50}
            height={50}
            className="mx-auto mb-4 opacity-50"
          />
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#E8C23A] mb-3 font-medium">
            The Inner Circle
          </p>
          <h2 className="text-white text-xl font-semibold mb-2">
            The Rohan Marley<br />Business Masterclass
          </h2>
          <p className="text-white/50 text-[12px] max-w-[300px] mx-auto">
            8 episodes. Build a legacy brand. From the man who turned heritage into an empire.
          </p>
        </div>

        {/* Masterclass episodes grid */}
        <div className="space-y-3 mb-10">
          {[
            { ep: '01', title: 'From Blue Mountain to Global Impact', desc: 'Building a legacy brand that honors heritage while scaling internationally.', image: '/lion-order/field-sunset.jpg' },
            { ep: '02', title: 'The Cannabis Entrepreneur\'s Playbook', desc: 'Navigating Lion Order — from regulatory challenges to luxury positioning.', image: '/lion-order/crest-gold.jpg' },
            { ep: '03', title: 'Multi-Generational Family Business', desc: 'Keeping the table at the center — making decisions where hierarchy disappears.', image: '/lion-order/community-table.jpg' },
            { ep: '04', title: 'Hospitality as Heritage', desc: 'Creating luxury experiences that feel like home — the Beach House blueprint.', image: '/lion-order/rainforest.jpg' },
            { ep: '05', title: 'Storytelling as Business Strategy', desc: 'Craft a brand narrative that transcends products and creates cultural movement.', image: '/lion-order/heritage.jpg' },
            { ep: '06', title: 'From Athlete to Entrepreneur', desc: 'Building a second act that\'s bigger and more meaningful than the first.', image: '/lion-order/rohan-portrait.jpg' },
            { ep: '07', title: 'Rastafari Business Principles', desc: 'Blending spirituality with commerce — One Love Economics.', image: '/lion-order/selassie.jpg' },
            { ep: '08', title: 'Building Revenue Streams', desc: 'The portfolio playbook — creating synergy across an empire.', image: '/lion-order/culture.jpg' },
          ].map((ep) => (
            <div key={ep.ep} className="flex gap-3 border border-[var(--gold)]/15 bg-[var(--panel)] overflow-hidden">
              <div className="relative w-24 shrink-0">
                <Image src={ep.image} alt={ep.title} fill className="object-cover" sizes="96px" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-[#E8C23A] text-[10px] font-semibold">{ep.ep}</span>
                </div>
              </div>
              <div className="py-3 pr-3">
                <p className="text-white text-[13px] font-medium leading-snug mb-1">{ep.title}</p>
                <p className="text-white/40 text-[10px] leading-[1.5]">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription form */}
        <div className="border border-[#E8C23A]/20 bg-[var(--panel)] p-6 max-w-[380px] mx-auto">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#E8C23A] mb-2 text-center font-medium">
            Subscribe Now
          </p>
          <p className="text-white text-[15px] font-semibold text-center mb-1">
            Join the Inner Circle
          </p>
          <p className="text-white/40 text-[11px] text-center mb-5">
            Get all 8 episodes + exclusive drops + early access to everything.
          </p>

          {submitted ? (
            <div className="text-center py-4">
              <p className="text-[#E8C23A] text-base font-semibold mb-1">Welcome to the Inner Circle.</p>
              <p className="text-white/50 text-[11px]">Episode 1 is on its way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input name="name" placeholder="Your Name" className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
              <input name="email" type="email" placeholder="Email" required className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
              <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
              <input name="social" placeholder="Instagram @handle" className="w-full bg-transparent border border-white/15 px-4 py-2.5 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[#E8C23A]/50 transition-colors" />
              <button type="submit" disabled={formLoading} className="w-full bg-[#E8C23A] text-black text-[11px] tracking-[0.25em] uppercase font-semibold py-3.5 hover:bg-[#E8C23A]/90 transition-colors disabled:opacity-50">
                {formLoading ? '...' : 'Subscribe — Free Access'}
              </button>
              <p className="text-white/25 text-[7px] text-center">Cancel anytime. We respect your privacy.</p>
            </form>
          )}
        </div>

        {/* Social proof */}
        <div className="flex justify-center gap-6 mt-8">
          <div className="text-center">
            <p className="text-[#E8C23A] text-lg font-semibold">663K</p>
            <p className="text-white/40 text-[9px] tracking-[0.1em] uppercase">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-[#E8C23A] text-lg font-semibold">8</p>
            <p className="text-white/40 text-[9px] tracking-[0.1em] uppercase">Episodes</p>
          </div>
          <div className="text-center">
            <p className="text-[#E8C23A] text-lg font-semibold">5+</p>
            <p className="text-white/40 text-[9px] tracking-[0.1em] uppercase">Brands Built</p>
          </div>
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
