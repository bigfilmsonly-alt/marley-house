'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

const TOTAL_PAGES = 65;
const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return { number: i + 1, label: `p${num}`, src: `/brandbook/p${num}.jpg` };
});

/* ── Spread labels for key pages ── */
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
  const [available, setAvailable] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const sentinelRef = useRef<HTMLDivElement>(null);

  /* Probe which pages actually exist */
  useEffect(() => {
    let cancelled = false;
    async function probe() {
      const found = new Set<number>();
      // Check first 5 pages to determine if brandbook is populated
      const probes = pages.slice(0, 5).map(async (p) => {
        try {
          const res = await fetch(p.src, { method: 'HEAD' });
          if (res.ok) found.add(p.number);
        } catch { /* missing */ }
      });
      await Promise.all(probes);

      if (!cancelled && found.size > 0) {
        // Brandbook exists — probe all pages
        const remaining = pages.slice(5).map(async (p) => {
          try {
            const res = await fetch(p.src, { method: 'HEAD' });
            if (res.ok) found.add(p.number);
          } catch { /* missing */ }
        });
        await Promise.all(remaining);
        if (!cancelled) setAvailable(new Set(found));
      }
      if (!cancelled) setChecked(true);
    }
    probe();
    return () => { cancelled = true; };
  }, []);

  /* Infinite scroll — load more pages as user scrolls */
  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + 4, TOTAL_PAGES));
  }, []);

  useEffect(() => {
    if (available.size === 0) return;
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) loadMore(); },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [available, loadMore]);

  const hasPages = available.size > 0;

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ HEADER ═══════ */}
      <section className="px-8 pt-16 pb-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">The Book</p>
        <h1 className="font-display text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.1] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          Brand<br /><span className="italic font-normal">Book</span>
        </h1>
        <div className="gold-rule w-10 mx-auto mb-8" />
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto">
          The complete 65-page Lion Order brand book. Every page of the maison&apos;s visual identity, guidelines, and creative direction.
        </p>
        {hasPages && (
          <p className="text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase mt-4">
            {available.size} of {TOTAL_PAGES} pages
          </p>
        )}
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ GALLERY or PLACEHOLDER ═══════ */}
      {!checked ? (
        <section className="px-6 py-14 text-center">
          <p className="text-[var(--dim)] text-xs font-light">Loading brand book...</p>
        </section>
      ) : hasPages ? (
        /* ── Full gallery ── */
        <section className="px-4 py-14">
          <div className="space-y-3">
            {pages.slice(0, visibleCount).map((p) => {
              const exists = available.has(p.number);
              const label = spreadLabels[p.number];

              if (!exists) return null;

              return (
                <div key={p.number} className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
                  {/* Page number bar */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--line)]">
                    <span className="text-[var(--gold)] text-[10px] font-display">{p.label}</span>
                    {label && (
                      <span className="text-[var(--dim)] text-[9px] tracking-[0.15em] uppercase">{label}</span>
                    )}
                  </div>
                  {/* Page image */}
                  <div className="relative w-full">
                    <Image
                      src={p.src}
                      alt={`Brand Book — Page ${p.number}${label ? ` — ${label}` : ''}`}
                      width={800}
                      height={1035}
                      className="w-full h-auto"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll sentinel for infinite load */}
          {visibleCount < TOTAL_PAGES && <div ref={sentinelRef} className="h-1" />}

          {/* Page index */}
          <div className="mt-10">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">Page Index</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {pages.map((p) => (
                <div
                  key={p.number}
                  className={`w-8 h-8 flex items-center justify-center text-[10px] border ${
                    available.has(p.number)
                      ? 'border-[var(--gold)]/30 text-[var(--cream)]'
                      : 'border-[var(--line)] text-[var(--dim)]/30'
                  }`}
                >
                  {p.number}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* ── Placeholder — no pages yet ── */
        <section className="px-6 py-14">
          <div className="border border-[var(--line)] bg-[var(--panel)] p-8 text-center mb-6">
            <div className="w-16 h-20 border border-dashed border-[var(--gold)]/20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-[var(--gold)]/30 text-2xl font-display">B</span>
            </div>
            <p className="text-[var(--cream)] text-sm font-display italic mb-3">Brand book pages not yet uploaded.</p>
            <p className="text-[var(--dim)] text-xs font-light leading-[1.8] max-w-[260px] mx-auto mb-6">
              Add page images to the brandbook directory to populate this gallery. Pages are lazy-loaded and indexed automatically.
            </p>
            <div className="border border-[var(--line)] bg-[var(--bg)] px-4 py-3 inline-block">
              <code className="text-[var(--gold)] text-[11px] font-mono">public/brandbook/p01.jpg</code>
              <span className="text-[var(--dim)] text-[11px] mx-2">→</span>
              <code className="text-[var(--gold)] text-[11px] font-mono">p65.jpg</code>
            </div>
          </div>

          {/* Expected page structure */}
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">Expected Structure</p>
          <div className="space-y-1">
            {Object.entries(spreadLabels).map(([page, label]) => (
              <div key={page} className="flex items-center justify-between border-b border-[var(--line)] py-3 px-2">
                <span className="text-[var(--gold)] text-xs font-display">p{String(Number(page)).padStart(2, '0')}</span>
                <span className="text-[var(--cream)] text-sm font-light">{label}</span>
              </div>
            ))}
          </div>

          {/* 65-page grid preview */}
          <div className="mt-8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">All 65 Pages</p>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {pages.map((p) => (
                <div
                  key={p.number}
                  className="w-7 h-7 flex items-center justify-center text-[9px] border border-[var(--line)] text-[var(--dim)]/40"
                >
                  {p.number}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ BACK TO TOP ═══════ */}
      {hasPages && (
        <div className="px-8 pb-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase hover:text-[var(--gold)] transition-colors"
          >
            <ChevronUp size={14} /> Back to top
          </button>
        </div>
      )}

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Brand Book &middot; {TOTAL_PAGES} Pages
        </p>
      </footer>
    </div>
  );
}
