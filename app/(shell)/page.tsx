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
          <h1 className="sr-only">The Marley Group — Heritage, Craft & Legacy by Rohan Marley</h1>
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
            <p className="text-[#F6C800] text-sm font-semibold">Welcome to the Inner Circle.</p>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-[#F6C800] text-[11px] tracking-[0.3em] uppercase font-semibold px-12 py-3.5 hover:bg-black/80 transition-colors"
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
                    <p className="text-[9px] tracking-[0.5em] uppercase text-[#F6C800] mb-2 font-medium">
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
                    <input name="name" placeholder="Your Name" autoFocus className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#F6C800]/50 transition-colors" />
                    <input name="email" type="email" placeholder="Email" required className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#F6C800]/50 transition-colors" />
                    <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#F6C800]/50 transition-colors" />
                    <input name="social" placeholder="Instagram @handle" className="w-full bg-[#120d07] border border-white/15 px-4 py-3.5 text-white text-[14px] placeholder:text-white/30 focus:outline-none focus:border-[#F6C800]/50 transition-colors" />
                    <button type="submit" disabled={formLoading} className="w-full bg-[#F6C800] text-black text-[12px] tracking-[0.25em] uppercase font-semibold py-4 hover:bg-[#F6C800]/90 transition-colors disabled:opacity-50">
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
                    <p className="text-[9px] tracking-[0.5em] uppercase text-[#F6C800] mb-3 font-medium">
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
                      { title: 'Rastafari Business Principles', desc: 'Blending spirituality with commerce — One Love Economics.', image: '/lion-order/rastafari-principles.jpg' },
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
                      <p className="text-[#F6C800] text-lg font-bold">663K</p>
                      <p className="text-white/40 text-[9px] uppercase font-semibold">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#F6C800] text-lg font-bold">8</p>
                      <p className="text-white/40 text-[9px] uppercase font-semibold">Episodes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#F6C800] text-lg font-bold">5+</p>
                      <p className="text-white/40 text-[9px] uppercase font-semibold">Brands Built</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowForm(false)}
                    className="w-full bg-[#F6C800] text-black text-[12px] tracking-[0.25em] uppercase font-semibold py-4 hover:bg-[#F6C800]/90 transition-colors"
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
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#F6C800] mb-2 font-medium">01</p>
            <h2 className="font-display text-2xl text-black font-bold mb-2">Marley Coffee</h2>
            <p className="text-black/70 text-[13px] font-medium mb-5 max-w-[300px] mx-auto">
              The original. Coffee from the Blue Mountains of Jamaica — legacy in every cup.
            </p>
            <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F6C800]/40 text-[#F6C800] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#F6C800]/5 transition-colors mb-4">
              Shop the Coffee
            </a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-2">
              <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="text-black text-[14px] font-black hover:text-black/60 transition-colors">marleycoffee.com</a>
              <a href="https://instagram.com/marleycoffee" target="_blank" rel="noopener noreferrer" className="text-black text-[14px] font-black hover:text-black/60 transition-colors">@marleycoffee</a>
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
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#F6C800] mb-2 font-medium">02</p>
            <h2 className="font-display text-2xl text-black font-bold mb-2">Lion Order</h2>
            <p className="text-black/70 text-[13px] font-medium mb-5 max-w-[300px] mx-auto">
              Flower to the people. Roots-luxury cannabis that elevates consciousness.
            </p>
            <a href="https://lionorder.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F6C800]/40 text-[#F6C800] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#F6C800]/5 transition-colors mb-4">
              Explore Lion Order
            </a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-2">
              <a href="https://lionorder.com" target="_blank" rel="noopener noreferrer" className="text-black text-[14px] font-black hover:text-black/60 transition-colors">lionorder.com</a>
              <a href="https://instagram.com/lionorder" target="_blank" rel="noopener noreferrer" className="text-black text-[14px] font-black hover:text-black/60 transition-colors">@lionorder</a>
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
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#F6C800] mb-2 font-medium">03</p>
            <h2 className="font-display text-2xl text-black font-bold mb-2">RoMarley Beach House</h2>
            <p className="text-black/70 text-[13px] font-medium mb-5 max-w-[300px] mx-auto">
              Where the Caribbean meets luxury — Puerto Morelos, Riviera Maya.
            </p>
            <a href="https://www.romarleybeachhouse.com/en" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F6C800]/40 text-[#F6C800] text-[10px] tracking-[0.25em] uppercase px-8 py-2.5 hover:bg-[#F6C800]/5 transition-colors mb-4">
              Book Your Stay
            </a>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-2">
              <a href="https://www.romarleybeachhouse.com/en" target="_blank" rel="noopener noreferrer" className="text-black text-[14px] font-black hover:text-black/60 transition-colors">romarleybeachhouse.com</a>
              <a href="https://instagram.com/romarleybeachhouse" target="_blank" rel="noopener noreferrer" className="text-black text-[14px] font-black hover:text-black/60 transition-colors">@romarleybeachhouse</a>
            </div>
          </div>
        </motion.div>

      </section>

      <div className="gold-rule mx-8" />

      {/* ═══ PHOTO GALLERY ═══ */}
      <motion.section {...fadeIn} className="py-10">
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#F6C800] mb-6 text-center font-medium">
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
        <div className="flex justify-center gap-8 mb-6">
          {[
            { label: 'Instagram', url: 'https://www.instagram.com/romarley/' },
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

        {/* ═══ SITEMAP — collapsible dropdown ═══ */}
        <details className="mb-8 group">
          <summary className="flex items-center justify-center gap-2 cursor-pointer list-none py-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-bold">Sitemap</span>
            <svg className="w-3 h-3 text-black/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>

          <div className="pt-4 pb-2">
            <div className="gold-rule mx-4 mb-6" />
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 text-[11px]">

            {/* ── THE GROUP ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">The Group</p>
              <div className="space-y-1">
                <a href="/about" className="block text-black/70 hover:text-black">About</a>
                <a href="/rohan-marley" className="block text-black/70 hover:text-black">Rohan Marley</a>
                <a href="/rohan-marley/story" className="block text-black/70 hover:text-black">Rohan — Story</a>
                <a href="/rohan-marley/philosophy" className="block text-black/70 hover:text-black">Rohan — Philosophy</a>
                <a href="/rohan-marley/timeline" className="block text-black/70 hover:text-black">Rohan — Timeline</a>
                <a href="/rohan-marley/press" className="block text-black/70 hover:text-black">Rohan — Press</a>
                <a href="/family" className="block text-black/70 hover:text-black">The Family</a>
                <a href="/the-marleys" className="block text-black/70 hover:text-black">The Marleys</a>
                <a href="/yg-marley" className="block text-black/70 hover:text-black">YG Marley</a>
                <a href="/cedella-marley" className="block text-black/70 hover:text-black">Cedella Marley</a>
                <a href="/damian-marley" className="block text-black/70 hover:text-black">Damian Marley</a>
                <a href="/legacy" className="block text-black/70 hover:text-black">Legacy</a>
                <a href="/history" className="block text-black/70 hover:text-black">History</a>
                <a href="/timeline" className="block text-black/70 hover:text-black">Timeline</a>
                <a href="/the-name" className="block text-black/70 hover:text-black">The Name</a>
              </div>
            </div>

            {/* ── COFFEE — blends link to marleycoffee.com ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Marley Coffee</p>
              <div className="space-y-1">
                <a href="/marley-coffee" className="block text-black/70 hover:text-black">Overview</a>
                <a href="/marley-coffee/story" className="block text-black/70 hover:text-black">The Story</a>
                <a href="/marley-coffee/blue-mountain" className="block text-black/70 hover:text-black">Blue Mountain</a>
                <a href="/marley-coffee/sourcing" className="block text-black/70 hover:text-black">Sourcing</a>
                <a href="/marley-coffee/sustainability" className="block text-black/70 hover:text-black">Sustainability</a>
                <a href="/marley-coffee/no-pesticide-promise" className="block text-black/70 hover:text-black">No Pesticide Promise</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ One Love — Buy</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ Get Up, Stand Up — Buy</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ Buffalo Soldier — Buy</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ Lively Up — Buy</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ Simmer Down — Buy</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ Mystic Morning — Buy</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">☕ Blue Mountain — Buy</a>
                <a href="/marley-coffee/brewing-guide" className="block text-black/70 hover:text-black">Brewing Guide</a>
                <a href="/marley-coffee/recipes" className="block text-black/70 hover:text-black">Recipes</a>
                <a href="/marley-coffee/subscribe" className="block text-black/70 hover:text-black">Subscribe & Save</a>
                <a href="/marley-coffee/wholesale" className="block text-black/70 hover:text-black">Wholesale</a>
                <a href="/marley-coffee/franchise" className="block text-black/70 hover:text-black">Franchise</a>
              </div>
            </div>

            {/* ── LION ORDER ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Lion Order</p>
              <div className="space-y-1">
                <a href="/lion-order/story" className="block text-black/70 hover:text-black">Story</a>
                <a href="/lion-order/philosophy" className="block text-black/70 hover:text-black">Philosophy</a>
                <a href="/lion-order/codes" className="block text-black/70 hover:text-black">The Codes</a>
                <a href="/lion-order/the-flower" className="block text-black/70 hover:text-black">The Flower</a>
                <a href="/lion-order/strains/king-clementine" className="block text-black/70 hover:text-black">King Clementine</a>
                <a href="/lion-order/characters" className="block text-black/70 hover:text-black">Characters</a>
                <a href="/lion-order/king-clem" className="block text-black/70 hover:text-black">King Clem</a>
                <a href="/lion-order/kai-suna" className="block text-black/70 hover:text-black">Kai Suna</a>
                <a href="/lion-order/runna-gyal" className="block text-black/70 hover:text-black">Runna Gyal</a>
                <a href="/lion-order/products" className="block text-black/70 hover:text-black">Products</a>
                <a href="/lion-order/education" className="block text-black/70 hover:text-black">Education</a>
                <a href="/lion-order/lab-results" className="block text-black/70 hover:text-black">Lab Results</a>
                <a href="/lion-order/responsible-use" className="block text-black/70 hover:text-black">Responsible Use</a>
                <a href="/lion-order/dispensary-locator" className="block text-black/70 hover:text-black">Dispensary Locator</a>
              </div>
            </div>

            {/* ── MUSIC & MEDIA ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Music & Media</p>
              <div className="space-y-1">
                <a href="/music" className="block text-black/70 hover:text-black">Music Hub</a>
                <a href="/music/yg-marley" className="block text-black/70 hover:text-black">YG Marley</a>
                <a href="/music/praise-jah-in-the-moonlight" className="block text-black/70 hover:text-black">Praise Jah in the Moonlight</a>
                <a href="/music/releases" className="block text-black/70 hover:text-black">Releases</a>
                <a href="/music/tour" className="block text-black/70 hover:text-black">Tour & Live</a>
                <a href="/music/the-roots-sound" className="block text-black/70 hover:text-black">The Roots Sound</a>
                <a href="/music/playlists" className="block text-black/70 hover:text-black">Playlists</a>
                <a href="/music/licensing" className="block text-black/70 hover:text-black">Music Licensing</a>
                <a href="/roots" className="block text-black/70 hover:text-black">ROOTS</a>
                <a href="/roots/podcast" className="block text-black/70 hover:text-black">ROOTS Podcast</a>
                <a href="/roots/docuseries" className="block text-black/70 hover:text-black">ROOTS Docuseries</a>
                <a href="/roots/episodes" className="block text-black/70 hover:text-black">ROOTS Episodes</a>
                <a href="/podcast" className="block text-black/70 hover:text-black">Podcast</a>
                <a href="/media" className="block text-black/70 hover:text-black">Media</a>
                <a href="/blog" className="block text-black/70 hover:text-black">Blog</a>
                <a href="/news" className="block text-black/70 hover:text-black">News</a>
                <a href="/press-room" className="block text-black/70 hover:text-black">Press Room</a>
                <a href="/the-archive" className="block text-black/70 hover:text-black">The Archive</a>
              </div>
            </div>

            {/* ── HOSPITALITY ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Hospitality</p>
              <div className="space-y-1">
                <a href="/romarley-beach-house" className="block text-black/70 hover:text-black">Beach House</a>
                <a href="/romarley-beach-house/rooms" className="block text-black/70 hover:text-black">Rooms & Suites</a>
                <a href="/romarley-beach-house/book" className="block text-black/70 hover:text-black">Book Your Stay</a>
                <a href="/romarley-beach-house/events" className="block text-black/70 hover:text-black">Events</a>
                <a href="/experiences" className="block text-black/70 hover:text-black">Experiences</a>
                <a href="/hospitality" className="block text-black/70 hover:text-black">Hospitality</a>
                <a href="/retreats" className="block text-black/70 hover:text-black">Retreats</a>
                <a href="/stay-and-listen" className="block text-black/70 hover:text-black">Stay & Listen</a>
                <a href="/real-estate" className="block text-black/70 hover:text-black">Real Estate</a>
              </div>
            </div>

            {/* ── BUSINESS & EDUCATION ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Business</p>
              <div className="space-y-1">
                <a href="/masterclass" className="block text-black/70 hover:text-black">Masterclass</a>
                <a href="/education" className="block text-black/70 hover:text-black">Education</a>
                <a href="/entrepreneurship" className="block text-black/70 hover:text-black">Entrepreneurship</a>
                <a href="/business-building" className="block text-black/70 hover:text-black">Brand Building</a>
                <a href="/ai-for-business" className="block text-black/70 hover:text-black">AI for Business</a>
                <a href="/courses" className="block text-black/70 hover:text-black">Courses</a>
                <a href="/mentorship" className="block text-black/70 hover:text-black">Mentorship</a>
                <a href="/fellowship" className="block text-black/70 hover:text-black">Fellowship</a>
                <a href="/summit" className="block text-black/70 hover:text-black">The Summit</a>
                <a href="/resources" className="block text-black/70 hover:text-black">Resources</a>
                <a href="/capital" className="block text-black/70 hover:text-black">Capital</a>
                <a href="/capital/investments" className="block text-black/70 hover:text-black">Investments</a>
                <a href="/capital/partner-with-us" className="block text-black/70 hover:text-black">Partner With Us</a>
              </div>
            </div>

            {/* ── COMMUNITY & MEMBERSHIP ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Community</p>
              <div className="space-y-1">
                <a href="/membership" className="block text-black/70 hover:text-black">Membership</a>
                <a href="/community" className="block text-black/70 hover:text-black">Community</a>
                <a href="/community/forums" className="block text-black/70 hover:text-black">Forums</a>
                <a href="/community/directory" className="block text-black/70 hover:text-black">Directory</a>
                <a href="/community/chapters" className="block text-black/70 hover:text-black">Chapters</a>
                <a href="/investor" className="block text-black/70 hover:text-black">Investor</a>
                <a href="/licensing" className="block text-black/70 hover:text-black">Licensing</a>
                <a href="/brand-protection" className="block text-black/70 hover:text-black">Brand Protection</a>
                <a href="/verify" className="block text-black/70 hover:text-black">Verify Product</a>
                <a href="/api-docs" className="block text-black/70 hover:text-black">Public API</a>
                <a href="/ask-rohan" className="block text-black/70 hover:text-black">Ask Rohan AI</a>
              </div>
            </div>

            {/* ── FOUNDATION ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Foundation</p>
              <div className="space-y-1">
                <a href="/foundation" className="block text-black/70 hover:text-black">Foundation</a>
                <a href="/foundation/waterwise-project" className="block text-black/70 hover:text-black">WaterWise Project</a>
                <a href="/foundation/1love" className="block text-black/70 hover:text-black">1Love Initiative</a>
                <a href="/foundation/give" className="block text-black/70 hover:text-black">Give</a>
              </div>
            </div>

            {/* ── CITIES ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">City Hubs</p>
              <div className="space-y-1">
                <a href="/cities/miami" className="block text-black/70 hover:text-black">Miami</a>
                <a href="/cities/kingston" className="block text-black/70 hover:text-black">Kingston</a>
                <a href="/cities/new-york" className="block text-black/70 hover:text-black">New York</a>
                <a href="/cities/los-angeles" className="block text-black/70 hover:text-black">Los Angeles</a>
                <a href="/cities/london" className="block text-black/70 hover:text-black">London</a>
                <a href="/cities/toronto" className="block text-black/70 hover:text-black">Toronto</a>
                <a href="/cities/puerto-morelos" className="block text-black/70 hover:text-black">Puerto Morelos</a>
                <a href="/cities/atlanta" className="block text-black/70 hover:text-black">Atlanta</a>
                <a href="/cities/sidama" className="block text-black/70 hover:text-black">Sidama</a>
              </div>
            </div>

            {/* ── LEGAL ── */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Legal</p>
              <div className="space-y-1">
                <a href="/faq" className="block text-black/70 hover:text-black">FAQ</a>
                <a href="/privacy-policy" className="block text-black/70 hover:text-black">Privacy Policy</a>
                <a href="/terms" className="block text-black/70 hover:text-black">Terms</a>
                <a href="/cannabis-compliance" className="block text-black/70 hover:text-black">Cannabis Compliance</a>
                <a href="/medical-disclaimer" className="block text-black/70 hover:text-black">Medical Disclaimer</a>
                <a href="/accessibility" className="block text-black/70 hover:text-black">Accessibility</a>
                <a href="/cookie-policy" className="block text-black/70 hover:text-black">Cookie Policy</a>
                <a href="/shipping-returns" className="block text-black/70 hover:text-black">Shipping & Returns</a>
                <a href="/glossary" className="block text-black/70 hover:text-black">Glossary</a>
                <a href="/do-not-sell" className="block text-black/70 hover:text-black">Do Not Sell</a>
              </div>
            </div>

          </div>
          </div>
        </details>

        <div className="gold-rule mx-4 mb-6" />

        <p className="text-black text-[11px] tracking-[0.3em] uppercase font-bold mb-3">
          The Marley Group · Est. 2022
        </p>
        <p className="text-black/80 text-[9px] tracking-[0.15em] font-bold">
          &copy; 2026 The Marley Group. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
