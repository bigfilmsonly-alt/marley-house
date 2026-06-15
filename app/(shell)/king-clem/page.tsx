'use client';

import Image from 'next/image';

export default function KingClemPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══ HERO VIDEO — full vertical, fits iPhone screen ═══ */}
      <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
        <iframe
          src="https://player.vimeo.com/video/1201516192?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          loading="lazy"
        />
        {/* Gradient overlay at bottom for smooth transition to content */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />
        {/* Title overlay */}
        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
          <p className="text-[9px] tracking-[0.5em] uppercase text-[var(--gold)] font-medium mb-1">
            Lion Order
          </p>
          <p className="text-white text-2xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            King Clementine
          </p>
        </div>
      </div>

      {/* ═══ STRAIN GUIDE — scroll down for the PDF pages ═══ */}
      <section className="px-4 py-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#F6C800] mb-2 text-center font-medium">
          Strain Reference Guide
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

      <footer className="px-8 pb-12 text-center">
        <div className="h-px bg-[var(--gold)]/25 mb-8" />
        <p className="text-white/40 text-[8px] tracking-[0.3em] uppercase">
          Lion Order · King Clementine
        </p>
      </footer>
    </div>
  );
}
