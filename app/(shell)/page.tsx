'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppLink } from '@/components/InAppBrowser';
import JoinHouse from '@/components/JoinHouse';
import { Play, Coffee, Crown, Headphones, Music, Sparkles, ShoppingBag } from 'lucide-react';

const links = [
  { label: 'Watch', href: '/watch', icon: Play },
  { label: 'Coffee', href: '/coffee', icon: Coffee },
  { label: 'Lion Order', href: '/lion-order', icon: Crown },
  { label: 'Merch', href: '/merch', icon: ShoppingBag },
  { label: 'Vault', href: '/vault', icon: Music },
  { label: 'Ask the House', href: '/ask', icon: Sparkles },
] as const;

const external = [
  { label: 'RoMarley Beach House', href: 'https://www.romarleybeachhouse.com/' },
  { label: 'House of Marley', href: 'https://thehouseofmarley.com/' },
] as const;

export default function HomePage() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-full bg-[var(--bg)] px-6">

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--gold)] blur-[120px] opacity-[0.1] pointer-events-none" />

      {/* RM Monogram */}
      <Image
        src="/brand/rhr-monogram-transparent.png"
        alt="Rohan Marley"
        width={200}
        height={240}
        className="relative mb-3 drop-shadow-[0_0_40px_rgba(244,199,31,0.3)]"
        priority
      />

      {/* Name */}
      <h1 className="relative font-display text-2xl font-light tracking-[0.12em] uppercase mb-1" style={{ color: '#D4A017' }}>
        Rohan Marley
      </h1>

      <p className="font-display text-sm text-[var(--gold)] italic tracking-wide opacity-70 mb-6">
        Flower to the People
      </p>

      {/* CTAs — the main navigation */}
      <div className="relative w-full max-w-[300px] grid grid-cols-3 gap-2 mb-6">
        {links.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center gap-1.5 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg2)] hover:border-[var(--gold)]/30 transition-colors"
          >
            <Icon size={16} className="text-[var(--gold)]" />
            <span className="text-[9px] tracking-[0.1em] uppercase text-[var(--cream)]">{label}</span>
          </Link>
        ))}
      </div>

      {/* External links */}
      <div className="relative flex items-center gap-4 mb-5">
        {external.map(({ label, href }) => (
          <AppLink
            key={label}
            href={href}
            title={label}
            className="text-[9px] tracking-[0.1em] uppercase text-[var(--dim)] hover:text-[var(--gold)] transition-colors"
          >
            {label}
          </AppLink>
        ))}
      </div>

      {/* Join */}
      <button
        onClick={() => setJoinOpen(true)}
        className="relative text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[var(--gold)]/25 px-5 py-2 rounded-full hover:bg-[var(--gold)]/5 transition-colors"
      >
        Join the Private List
      </button>

      {/* Subtle footer */}
      <p className="relative text-[7px] text-[var(--dim)] tracking-[0.15em] uppercase mt-6 opacity-50">
        Lion Order &middot; Est. 2022
      </p>

      <JoinHouse open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}
