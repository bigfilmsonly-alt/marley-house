'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full bg-[var(--bg)] px-6">

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--gold)] blur-[120px] opacity-[0.1] pointer-events-none" />

      {/* Name above logo */}
      <h1 className="relative font-display text-2xl font-light tracking-[0.12em] uppercase mb-4" style={{ color: '#D4A017' }}>
        Rohan Marley
      </h1>

      {/* RM Monogram — hero */}
      <Image
        src="/brand/rhr-monogram-transparent.png"
        alt="Rohan Marley"
        width={200}
        height={240}
        className="relative mb-4 drop-shadow-[0_0_40px_rgba(244,199,31,0.3)]"
        priority
      />

      <p className="relative font-display text-sm text-[var(--gold)] italic tracking-wide opacity-70">
        Flower to the People
      </p>

      {/* Gold rule */}
      <div className="gold-rule w-16 mx-auto my-5" />

      {/* Subtle footer */}
      <p className="relative text-[7px] text-[var(--dim)] tracking-[0.15em] uppercase opacity-50">
        Lion Order &middot; Est. 2022
      </p>
    </div>
  );
}
