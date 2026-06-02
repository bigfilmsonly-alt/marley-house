'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

const TOTAL_PAGES = 65;
const INITIAL_VISIBLE = 8;
const LOAD_INCREMENT = 4;

const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return { number: i + 1, label: `p${num}`, src: `/brandbook/p${num}.jpg` };
});

/* -- Spread labels for key pages -- */
const spreadLabels: Record<number, string> = {
  1: 'Cover',
  2: 'Title',
  4: 'The Lion Crest',
  10: 'Color System',
  14: 'Typography',
  20: 'Art Direction',
  30: 'Photography',
  40: 'Packaging',
  52: 'Font Stack',
  60: 'Applications',
  65: 'Back Cover',
};

export default function BookPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  /* Infinite scroll -- load more pages as user scrolls */
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_INCREMENT, TOTAL_PAGES));
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore(); },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* HEADER */}
      <section className="px-8 pt-16 pb-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">The Book</p>
        <h1 className="font-display text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.1] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          Brand<br /><span className="italic font-normal">Book</span>
        </h1>
        <div className="gold-rule w-10 mx-auto mb-8" />
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto">
          The complete 65-page Lion Order brand book. Every page of the maison&apos;s visual identity, guidelines, and creative direction.
        </p>
        <p className="text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase mt-4">
          {TOTAL_PAGES} pages
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* GALLERY */}
      <section className="px-4 py-14">
        <div className="space-y-3">
          {pages.slice(0, visibleCount).map((p) => {
            const label = spreadLabels[p.number];
            return (
              <div key={p.number} className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--line)]">
                  <span className="text-[var(--gold)] text-[10px] font-display">{p.label}</span>
                  {label && (
                    <span className="text-[var(--dim)] text-[9px] tracking-[0.15em] uppercase">{label}</span>
                  )}
                </div>
                <Image
                  src={p.src}
                  alt={`Brand Book — Page ${p.number}${label ? ` — ${label}` : ''}`}
                  width={800}
                  height={618}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Scroll sentinel for infinite load */}
        {visibleCount < TOTAL_PAGES && <div ref={sentinelRef} className="h-1" />}

        {/* Page index -- all cells gold/active */}
        <div className="mt-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">Page Index</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {pages.map((p) => (
              <div
                key={p.number}
                className="w-8 h-8 flex items-center justify-center text-[10px] border border-[var(--gold)]/30 text-[var(--cream)]"
              >
                {p.number}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      <div className="px-8 pb-8 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase hover:text-[var(--gold)] transition-colors"
        >
          <ChevronUp size={14} /> Back to top
        </button>
      </div>

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Brand Book &middot; {TOTAL_PAGES} Pages
        </p>
      </footer>
    </div>
  );
}
