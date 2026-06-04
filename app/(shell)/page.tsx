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
  const [showForm, setShowForm] = useState(false);
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
    <div className="relative min-h-full">

      {/* ═══ HERO ═══ */}
      <section className="w-full pt-12 pb-8">
        <div className="flex flex-col items-center justify-center px-8">
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]"
              priority
              sizes="220px"
            />
          </div>

          <Image
            src="/brand/rohan-signature.png"
            alt="Rohan Marley"
            width={260}
            height={85}
            className="mb-8 opacity-95 brightness-150 drop-shadow-[0_0_3px_rgba(0,0,0,0.8)]"
          />

          {/* Single CTA — opens form modal */}
          {submitted ? (
            <p className="text-[#EEC11E] text-sm font-semibold">Welcome to the Inner Circle.</p>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-[#EEC11E] text-[11px] tracking-[0.3em] uppercase font-semibold px-12 py-3.5 hover:bg-black/80 transition-colors"
            >
              Join the Inner Circle
            </button>
          )}
        </div>
      </section>

      {/* ═══ FORM / MASTERCLASS MODAL ═══ */}
      {showForm && (
        <div className="fixed inset-0 z-[85] bg-black/95 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-full flex flex-col items-center px-6 py-10">
            <div className="w-full max-w-[380px]">

              {!submitted ? (
                <>
                  <div className="text-center mb-6">
                    <Image
                      src="/brand/rhr-monogram-transparent.png"
                      alt="R-M"
                      width={60}
                      height={60}
                      className="mx-auto mb-4 opacity-60"
                    />
                    <p className="text-[9px] tracking-[0.5em] uppercase text-[#EEC11E] mb-2 font-medium">
                      The Inner Circle
                    </p>
                    <p className="text-white text-[17px] font-semibold mb-1">
                      Join the Movement
                    </p>
                    <p className="text-white/40 text-[11px]">
                      8 masterclass episodes + exclusive access.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input name="name" placeholder="Your Name" autoFocus className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#EEC11E]/50 transition-colors" />
                    <input name="email" type="email" placeholder="Email" required className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#EEC11E]/50 transition-colors" />
                    <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#EEC11E]/50 transition-colors" />
                    <input name="social" placeholder="Instagram @handle" className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#EEC11E]/50 transition-colors" />
                    <button type="submit" disabled={formLoading} className="w-full bg-[#EEC11E] text-black text-[12px] tracking-[0.25em] uppercase font-semibold py-4 hover:bg-[#EEC11E]/90 transition-colors disabled:opacity-50">
                      {formLoading ? '...' : 'Subscribe — Free Access'}
                    </button>
                    <p className="text-white/25 text-[8px] text-center">Cancel anytime. We respect your privacy.</p>
                  </form>

                  <button
                    onClick={() => setShowForm(false)}
                    className="w-full text-white/30 text-[10px] tracking-[0.15em] uppercase mt-4 py-2 hover:text-white/50 transition-colors"
                  >
                    Maybe Later
                  </button>
                </>
              ) : (
                <>
                  {/* MASTERCLASS — shown after joining */}
                  <div className="text-center mb-8">
                    <Image
                      src="/brand/rhr-monogram-transparent.png"
                      alt="R-M"
                      width={70}
                      height={70}
                      className="mx-auto mb-4 opacity-70"
                    />
                    <p className="text-[9px] tracking-[0.5em] uppercase text-[#EEC11E] mb-3 font-medium">
                      Welcome to the Inner Circle
                    </p>
                    <h2 className="text-white text-xl font-bold mb-2">
                      The Rohan Marley<br />Business Masterclass
                    </h2>
                    <p className="text-white/50 text-[12px] max-w-[300px] mx-auto">
                      8 episodes. Build a legacy brand. From the man who turned heritage into an empire.
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {[
                      { title: 'From Blue Mountain to Global Impact', desc: 'Building a legacy brand that honors heritage while scaling internationally.', image: '/lion-order/field-sunset.jpg' },
                      { title: 'The Cannabis Entrepreneur\'s Playbook', desc: 'Navigating Lion Order — from regulatory challenges to luxury positioning.', image: '/lion-order/crest-gold.jpg' },
                      { title: 'Multi-Generational Family Business', desc: 'Keeping the table at the center — making decisions where hierarchy disappears.', image: '/lion-order/community-table.jpg' },
                      { title: 'Hospitality as Heritage', desc: 'Creating luxury experiences that feel like home — the Beach House blueprint.', image: '/lion-order/rainforest.jpg' },
                      { title: 'Storytelling as Business Strategy', desc: 'Craft a brand narrative that transcends products and creates cultural movement.', image: '/lion-order/heritage.jpg' },
                      { title: 'From Athlete to Entrepreneur', desc: 'Building a second act that\'s bigger and more meaningful than the first.', image: '/lion-order/rohan-portrait.jpg' },
                      { title: 'Rastafari Business Principles', desc: 'Blending spirituality with commerce — One Love Economics.', image: '/lion-order/selassie.jpg' },
                      { title: 'Building Revenue Streams', desc: 'The portfolio playbook — creating synergy across an empire.', image: '/lion-order/culture.jpg' },
                    ].map((ep) => (
                      <div key={ep.title} className="flex gap-3 border border-white/10 bg-white/5 overflow-hidden">
                        <div className="relative w-24 shrink-0">
                          <Image src={ep.image} alt={ep.title} fill className="object-cover object-top" sizes="96px" />
                        </div>
                        <div className="py-3 pr-3">
                          <p className="text-white text-[13px] font-bold leading-snug mb-1">{ep.title}</p>
                          <p className="text-white/40 text-[10px] leading-[1.5]">{ep.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-6 mb-8">
                    <div className="text-center">
                      <p className="text-[#EEC11E] text-lg font-bold">663K</p>
                      <p className="text-white/40 text-[9px] uppercase font-semibold">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#EEC11E] text-lg font-bold">8</p>
                      <p className="text-white/40 text-[9px] uppercase font-semibold">Episodes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#EEC11E] text-lg font-bold">5+</p>
                      <p className="text-white/40 text-[9px] uppercase font-semibold">Brands Built</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowForm(false)}
                    className="w-full bg-[#EEC11E] text-black text-[12px] tracking-[0.25em] uppercase font-semibold py-4 hover:bg-[#EEC11E]/90 transition-colors"
                  >
                    Start Watching
                  </button>
                </>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ═══ LEGACY LINE ═══ */}
      <motion.section {...fadeIn} className="px-8 py-10 text-center">
        <p className="font-display text-base text-black font-bold italic leading-[1.7] max-w-[340px] mx-auto">
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
              src="https://player.vimeo.com/video/1198572971?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="px-6 py-6 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#EEC11E] mb-2 font-medium">01</p>
            <h2 className="font-display text-2xl text-black font-bold mb-2">Marley Coffee</h2>
            <p className="text-black/70 text-[13px] font-medium mb-5 max-w-[300px] mx-auto">
              The original. Coffee from the Blue Mountains of Jamaica — legacy in every cup.
            </p>
            <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#EEC11E]/40 text-[#EEC11E] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#EEC11E]/5 transition-colors mb-4">
              Shop the Coffee
            </a>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="text-black text-[11px] font-bold hover:text-black/60 transition-colors">marleycoffee.com</a>
              <a href="https://instagram.com/marleycoffee" target="_blank" rel="noopener noreferrer" className="text-black text-[11px] font-bold hover:text-black/60 transition-colors">Instagram</a>
            </div>
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
          <div className="px-6 py-6 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#EEC11E] mb-2 font-medium">02</p>
            <h2 className="font-display text-2xl text-black font-bold mb-2">Lion Order</h2>
            <p className="text-black/70 text-[13px] font-medium mb-5 max-w-[300px] mx-auto">
              Flower to the people. Roots-luxury cannabis that elevates consciousness.
            </p>
            <a href="https://lionorder.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#EEC11E]/40 text-[#EEC11E] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#EEC11E]/5 transition-colors mb-4">
              Explore Lion Order
            </a>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <a href="https://lionorder.com" target="_blank" rel="noopener noreferrer" className="text-black text-[11px] font-bold hover:text-black/60 transition-colors">lionorder.com</a>
              <a href="https://instagram.com/lionorder" target="_blank" rel="noopener noreferrer" className="text-black text-[11px] font-bold hover:text-black/60 transition-colors">Instagram</a>
            </div>
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
          <div className="px-6 py-6 text-center">
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#EEC11E] mb-2 font-medium">03</p>
            <h2 className="font-display text-2xl text-black font-bold mb-2">RoMarley Beach House</h2>
            <p className="text-black/70 text-[13px] font-medium mb-5 max-w-[300px] mx-auto">
              Where the Caribbean meets luxury — Puerto Morelos, Riviera Maya.
            </p>
            <a href="https://www.romarleybeachhouse.com/en" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#EEC11E]/40 text-[#EEC11E] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#EEC11E]/5 transition-colors mb-4">
              Book Your Stay
            </a>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <a href="https://www.romarleybeachhouse.com/en" target="_blank" rel="noopener noreferrer" className="text-black text-[11px] font-bold hover:text-black/60 transition-colors">romarleybeachhouse.com</a>
              <a href="https://instagram.com/romarleybeachhouse" target="_blank" rel="noopener noreferrer" className="text-black text-[11px] font-bold hover:text-black/60 transition-colors">Instagram</a>
            </div>
          </div>
        </motion.div>

      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ PHOTO GALLERY ═══ */}
      <motion.section {...fadeIn} className="py-10">
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#EEC11E] mb-6 text-center font-medium">
          The Legacy
        </p>
        <div className="space-y-2 px-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="overflow-hidden">
              <Image
                src={`/brand/gallery/${String(n).padStart(2, '0')}.jpg`}
                alt={`Rohan Marley — ${n}`}
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.section>

      <div className="gold-rule mx-8" />


      <div className="gold-rule mx-8" />

      {/* ═══ FOOTER ═══ */}
      <motion.footer {...fadeIn} className="px-8 py-12 text-center">
        <Image
          src="/brand/rhr-monogram-transparent.png"
          alt="R-M Monogram"
          width={200}
          height={200}
          className="mx-auto mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        />
        <Image
          src="/brand/rohan-signature.png"
          alt="Rohan Marley"
          width={300}
          height={100}
          className="mx-auto mb-8 brightness-150 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {[
            { label: 'marleycoffee.com', url: 'https://marleycoffee.com' },
            { label: 'lionorder.com', url: 'https://lionorder.com' },
            { label: 'romarleybeachhouse.com', url: 'https://www.romarleybeachhouse.com/en' },
            { label: 'rohanmarley.com', url: 'https://rohananthonymarley.com' },
          ].map((site) => (
            <a key={site.label} href={site.url} target="_blank" rel="noopener noreferrer" className="text-black text-[12px] tracking-[0.05em] font-bold hover:text-black/60 transition-colors">
              {site.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-8 mb-8">
          {[
            { label: 'Instagram', url: 'https://instagram.com/romarley' },
            { label: 'YouTube', url: 'https://youtube.com/@MrRohanmarley' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/rohanmarley' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-[13px] tracking-[0.1em] uppercase font-bold hover:text-black/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-black text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
          Lion Order · Est. 2022
        </p>
        <p className="text-black/80 text-[9px] tracking-[0.15em] font-bold">
          &copy; 2026 Lion Order. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
