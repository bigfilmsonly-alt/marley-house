'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { joinHouse, trackEvent } from '@/lib/tracking';

const elegant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

const slowFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] as const },
} as const;

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
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
          phone: '',
          social: form.get('social') || '',
          source: 'invitation-request',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        joinHouse('invitation-request');
      }
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <div className="relative min-h-full">

      {/* HERO */}
      <section className="w-full flex flex-col items-center justify-center px-6" style={{ minHeight: 'calc(100vh - 160px)' }}>
          <h1 className="sr-only">RM — Request Invitation</h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-[85vw] max-w-[380px] aspect-square -mb-4"
          >
            <Image
              src="/brand/rm-logo-gold-transparent.png"
              alt="RM Logo"
              fill
              className="object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
              priority
              sizes="380px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="-mt-2"
          >
            <Image
              src="/brand/rohan-signature.png"
              alt="Rohan Marley"
              width={320}
              height={105}
              className="brightness-[1.8] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6"
          >
            <button
              onClick={() => {
                setShowModal(true);
                trackEvent('enter');
              }}
              className="bg-black text-[#F6C800] text-[11px] tracking-[0.3em] uppercase font-semibold px-16 py-4 border border-[#F6C800]/25 hover:border-[#F6C800]/50 transition-all duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              Request Invitation
            </button>
          </motion.div>
      </section>

      {/* REQUEST INVITATION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[85] bg-black/95 backdrop-blur-md overflow-y-auto">
          <div className="min-h-full flex flex-col items-center justify-center px-6 py-16">
            <div className="w-full max-w-[400px]">

              {!submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="text-center mb-10">
                    <Image
                      src="/brand/rm-logo-gold-transparent.png"
                      alt="RM"
                      width={100}
                      height={67}
                      className="mx-auto mb-6"
                      
                    />
                    <h3 className="text-[#FAF3E0] text-[15px] tracking-[0.3em] uppercase font-light mb-4">
                      Request Invitation
                    </h3>
                    <p className="text-white/30 text-[11px] tracking-[0.1em] leading-[1.8]">
                      Access is considered on an individual basis.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="name"
                      placeholder="Full Name"
                      required
                      autoFocus
                      className="w-full bg-transparent border-b border-white/12 px-1 py-3.5 text-white text-[13px] tracking-[0.05em] placeholder:text-white/25 focus:outline-none focus:border-[#F6C800]/40 transition-colors duration-500"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full bg-transparent border-b border-white/12 px-1 py-3.5 text-white text-[13px] tracking-[0.05em] placeholder:text-white/25 focus:outline-none focus:border-[#F6C800]/40 transition-colors duration-500"
                    />
                    <input
                      name="social"
                      placeholder="Instagram or Website"
                      className="w-full bg-transparent border-b border-white/12 px-1 py-3.5 text-white text-[13px] tracking-[0.05em] placeholder:text-white/25 focus:outline-none focus:border-[#F6C800]/40 transition-colors duration-500"
                    />
                    <div className="relative">
                      <select
                        name="interest"
                        defaultValue=""
                        className="w-full bg-transparent border-b border-white/12 px-1 py-3.5 text-[13px] tracking-[0.05em] focus:outline-none focus:border-[#F6C800]/40 transition-colors duration-500 appearance-none cursor-pointer text-white/25 [&:has(option:checked:not([value=''']))]:text-white"
                        onChange={(e) => {
                          e.target.classList.toggle('text-white', e.target.value !== '');
                          e.target.classList.toggle('text-white/25', e.target.value === '');
                        }}
                      >
                        <option value="" disabled>Area of Interest</option>
                        <option value="collection">Collection</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="services">Services</option>
                        <option value="partnership">Partnership</option>
                      </select>
                      <svg className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 text-white/20 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message (optional)"
                      rows={3}
                      className="w-full bg-transparent border-b border-white/12 px-1 py-3.5 text-white text-[13px] tracking-[0.05em] placeholder:text-white/25 focus:outline-none focus:border-[#F6C800]/40 transition-colors duration-500 resize-none"
                    />

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full bg-black text-[#F6C800] text-[10px] tracking-[0.35em] uppercase font-medium py-4 border border-[#F6C800]/25 hover:border-[#F6C800]/50 transition-all duration-700 disabled:opacity-40"
                      >
                        {formLoading ? '...' : 'Request Invitation'}
                      </button>
                    </div>
                  </form>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full text-white/20 text-[9px] tracking-[0.2em] uppercase mt-6 py-2 hover:text-white/40 transition-colors duration-500"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center py-16"
                >
                  <Image
                    src="/brand/rm-logo-gold-transparent.png"
                    alt="RM"
                    width={100}
                    height={67}
                    className="mx-auto mb-8"
                    
                  />
                  <p className="text-[#FAF3E0] text-[14px] tracking-[0.2em] font-light mb-3">
                    Thank you.
                  </p>
                  <p className="text-white/30 text-[11px] tracking-[0.1em]">
                    Your request has been received.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white/20 text-[9px] tracking-[0.2em] uppercase mt-10 py-2 hover:text-white/40 transition-colors duration-500"
                  >
                    Close
                  </button>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* THREE PILLARS */}
      <section className="w-full pt-8 pb-4">

        {/* Marley Coffee — sized to fit between header and footer logos */}
        <motion.div {...elegant} className="mb-10">
          <div className="relative w-full" style={{ height: 'calc(100vh - 200px)', maxHeight: '700px' }}>
            <iframe
              src="https://player.vimeo.com/video/1198572971?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="px-8 py-6 text-center">
            <h2 className="font-display text-[22px] tracking-[0.15em] text-black font-semibold mb-2">
              Marley Coffee
            </h2>
            <p className="text-black/50 text-[12px] tracking-[0.05em] leading-[1.8] max-w-[300px] mx-auto mb-4">
              Single-origin from the Blue Mountains of Jamaica.
            </p>
            <a
              href="https://marleycoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('shop_coffee')}
              className="text-black/40 text-[10px] tracking-[0.3em] uppercase hover:text-black/70 transition-colors duration-500"
            >
              Explore
            </a>
          </div>
        </motion.div>

        {/* Lion Order — sized to fit between header and footer logos */}
        <motion.div {...elegant} className="mb-10">
          <div className="relative w-full" style={{ height: 'calc(100vh - 200px)', maxHeight: '700px' }}>
            <iframe
              src="https://player.vimeo.com/video/1198233695?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="px-8 py-6 text-center">
            <h2 className="font-display text-[22px] tracking-[0.15em] text-black font-semibold mb-2">
              Lion Order
            </h2>
            <p className="text-black/50 text-[12px] tracking-[0.05em] leading-[1.8] max-w-[300px] mx-auto mb-4">
              Roots-luxury cannabis, cultivated with intention.
            </p>
            <a
              href="https://lionorder.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('explore_lionorder')}
              className="text-black/40 text-[10px] tracking-[0.3em] uppercase hover:text-black/70 transition-colors duration-500"
            >
              Explore
            </a>
          </div>
        </motion.div>

        {/* RoMarley Beach House — 16:9 fits naturally */}
        <motion.div {...elegant} className="mb-8">
          <div className="relative w-full" style={{ height: 'calc(100vh - 200px)', maxHeight: '700px' }}>
            <iframe
              src="https://player.vimeo.com/video/1198237050?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="px-8 py-6 text-center">
            <h2 className="font-display text-[22px] tracking-[0.15em] text-black font-semibold mb-2">
              RoMarley Beach House
            </h2>
            <p className="text-black/50 text-[12px] tracking-[0.05em] leading-[1.8] max-w-[300px] mx-auto mb-4">
              Private hospitality on the Caribbean coast.
            </p>
            <a
              href="https://www.romarleybeachhouse.com/en"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('book_stay')}
              className="text-black/40 text-[10px] tracking-[0.3em] uppercase hover:text-black/70 transition-colors duration-500"
            >
              Explore
            </a>
          </div>
        </motion.div>

      </section>

      {/* PHOTO GALLERY */}
      <motion.section {...slowFade} className="py-16">
        <div className="space-y-3 px-4">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: n * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <Image
                src={`/brand/gallery/${String(n).padStart(2, '0')}.jpg`}
                alt={`Rohan Marley -- ${n}`}
                width={800}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer {...elegant} className="px-8 py-20 text-center">
        <Image
          src="/brand/rm-logo-gold-transparent.png"
          alt="RM Logo"
          width={200}
          height={141}
          className="mx-auto mb-6"
          
        />
        <Image
          src="/brand/rohan-signature.png"
          alt="Rohan Marley"
          width={240}
          height={80}
          className="mx-auto mb-12 brightness-150 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {[
            { label: 'marleycoffee.com', url: 'https://marleycoffee.com' },
            { label: 'lionorder.com', url: 'https://lionorder.com' },
            { label: 'romarleybeachhouse.com', url: 'https://www.romarleybeachhouse.com/en' },
          ].map((site) => (
            <a
              key={site.label}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/50 text-[11px] tracking-[0.08em] hover:text-black/80 transition-colors duration-500"
            >
              {site.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-10 mb-10">
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
              className="text-black/40 text-[10px] tracking-[0.2em] uppercase hover:text-black/70 transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* SITEMAP -- collapsible dropdown */}
        <details className="mb-8 group">
          <summary className="flex items-center justify-center gap-2 cursor-pointer list-none py-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-bold">Sitemap</span>
            <svg className="w-3 h-3 text-black/60 transition-transform duration-300 ease-in-out group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>

          <div className="pt-4 pb-2">
            <div className="gold-rule mx-4 mb-6" />
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 text-[11px]">

            {/* THE GROUP */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">The Group</p>
              <div className="space-y-1">
                <a href="/about" className="block text-black/70 hover:text-black">About</a>
                <a href="/rohan-marley" className="block text-black/70 hover:text-black">Rohan Marley</a>
                <a href="/rohan-marley/story" className="block text-black/70 hover:text-black">Rohan -- Story</a>
                <a href="/rohan-marley/philosophy" className="block text-black/70 hover:text-black">Rohan -- Philosophy</a>
                <a href="/rohan-marley/timeline" className="block text-black/70 hover:text-black">Rohan -- Timeline</a>
                <a href="/rohan-marley/press" className="block text-black/70 hover:text-black">Rohan -- Press</a>
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

            {/* COFFEE */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Marley Coffee</p>
              <div className="space-y-1">
                <a href="/marley-coffee" className="block text-black/70 hover:text-black">Overview</a>
                <a href="/marley-coffee/story" className="block text-black/70 hover:text-black">The Story</a>
                <a href="/marley-coffee/blue-mountain" className="block text-black/70 hover:text-black">Blue Mountain</a>
                <a href="/marley-coffee/sourcing" className="block text-black/70 hover:text-black">Sourcing</a>
                <a href="/marley-coffee/sustainability" className="block text-black/70 hover:text-black">Sustainability</a>
                <a href="/marley-coffee/no-pesticide-promise" className="block text-black/70 hover:text-black">No Pesticide Promise</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">One Love</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">Get Up, Stand Up</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">Buffalo Soldier</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">Lively Up</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">Simmer Down</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">Mystic Morning</a>
                <a href="https://marleycoffee.com" target="_blank" rel="noopener noreferrer" className="block text-black/70 hover:text-black font-semibold">Blue Mountain</a>
                <a href="/marley-coffee/brewing-guide" className="block text-black/70 hover:text-black">Brewing Guide</a>
                <a href="/marley-coffee/recipes" className="block text-black/70 hover:text-black">Recipes</a>
                <a href="/marley-coffee/subscribe" className="block text-black/70 hover:text-black">Subscribe & Save</a>
                <a href="/marley-coffee/wholesale" className="block text-black/70 hover:text-black">Wholesale</a>
                <a href="/marley-coffee/franchise" className="block text-black/70 hover:text-black">Franchise</a>
              </div>
            </div>

            {/* LION ORDER */}
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

            {/* MUSIC & MEDIA */}
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

            {/* HOSPITALITY */}
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

            {/* BUSINESS & EDUCATION */}
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

            {/* COMMUNITY & MEMBERSHIP */}
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

            {/* FOUNDATION */}
            <div>
              <p className="text-black font-bold text-[10px] tracking-[0.15em] uppercase mb-1.5">Foundation</p>
              <div className="space-y-1">
                <a href="/foundation" className="block text-black/70 hover:text-black">Foundation</a>
                <a href="/foundation/waterwise-project" className="block text-black/70 hover:text-black">WaterWise Project</a>
                <a href="/foundation/1love" className="block text-black/70 hover:text-black">1Love Initiative</a>
                <a href="/foundation/give" className="block text-black/70 hover:text-black">Give</a>
              </div>
            </div>

            {/* CITIES */}
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

            {/* LEGAL */}
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

        <div className="gold-rule mx-4 mb-8" />

        <p className="text-black/30 text-[9px] tracking-[0.2em]">
          &copy; 2026 RM. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
