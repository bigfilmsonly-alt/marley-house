'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { joinHouse } from '@/lib/tracking';

/* ── page ─────────────────────────────────────────────────────── */

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="relative min-h-full bg-[var(--bg)] flex flex-col">

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — R-M Monogram + Taglines — fits one screen
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full bg-black pt-8 pb-4 flex-shrink-0">
        <div className="flex flex-col items-center justify-center px-8">
          <div className="relative w-[260px] h-[260px] mb-4">
            <Image
              src="/brand/rhr-monogram-transparent.png"
              alt="R-M Monogram"
              fill
              className="object-contain"
              priority
              sizes="260px"
            />
          </div>

          <h1 className="text-2xl font-semibold text-white tracking-wide text-center leading-[1.3] mb-2">
            Awaken the Lion<br />in Everyone
          </h1>

          <p className="text-[10px] tracking-[0.45em] uppercase text-[#E8C23A] font-medium">
            The Legacy of Rohan Marley
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. JOIN THE INNER CIRCLE — dropdown with lead form
      ═══════════════════════════════════════════════════════════ */}
      <nav className="w-full">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          className="w-full border-b border-[var(--line)] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-[var(--panel)] transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E8C23A] rotate-45 shrink-0" />
            <span className="text-white font-semibold text-[16px]">
              Join the Inner Circle
            </span>
          </div>
          {menuOpen ? (
            <ChevronUp className="w-5 h-5 text-[#E8C23A]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#E8C23A]" />
          )}
        </button>

        {menuOpen && (
          <div className="bg-[var(--panel)] border-b border-[var(--line)]">
            <div className="px-6 py-8">
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-3 text-center font-medium">
                Enter the House
              </p>
              <p className="text-white text-[18px] font-semibold text-center mb-2">
                Join the Inner Circle
              </p>
              <p className="text-[var(--dim)] text-[13px] text-center mb-6 font-normal">
                Be the first to know. No noise. Just the movement.
              </p>

              {submitted ? (
                <div className="text-center py-4">
                  <p className="text-[#E8C23A] text-lg font-semibold mb-2">Welcome to the House.</p>
                  <p className="text-[var(--dim)] text-[13px]">Check your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <input
                    name="social"
                    placeholder="Instagram @handle"
                    className="w-full bg-transparent border border-[var(--line)] px-4 py-3 text-[var(--cream)] text-[14px] font-normal placeholder:text-[var(--dim)]/40 focus:outline-none focus:border-[#E8C23A]/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-[#E8C23A] text-[var(--bg)] text-[13px] tracking-[0.2em] uppercase font-semibold py-3.5 hover:bg-[#E8C23A]/90 transition-colors disabled:opacity-50"
                  >
                    {formLoading ? '...' : 'Enter'}
                  </button>
                  <p className="text-[var(--dim)] text-[9px] text-center mt-3 opacity-50">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ═══════════════════════════════════════════════════════════
          3. BRAND BOOK — scrollable gallery, always visible
      ═══════════════════════════════════════════════════════════ */}
      <div className="gold-rule mx-6 mt-2" />

      <div className="px-4 py-8">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#E8C23A] mb-2 text-center font-medium">
          The Brand Book
        </p>
        <p className="text-white text-[15px] font-semibold text-center mb-1">
          Lion Order
        </p>
        <p className="text-[var(--dim)] text-[11px] text-center mb-6">
          65 Pages — Visual Identity & Creative Direction
        </p>

        <div className="space-y-2">
          {Array.from({ length: 65 }, (_, i) => {
            const num = String(i + 1).padStart(2, '0');
            return (
              <div key={i} className="border border-[var(--line)] overflow-hidden">
                <Image
                  src={`/brandbook/p${num}.jpg`}
                  alt={`Brand Book — Page ${i + 1}`}
                  width={800}
                  height={618}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
