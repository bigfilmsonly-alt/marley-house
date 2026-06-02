'use client';

import { useState } from 'react';
import ConnectedProperties from '@/components/ConnectedProperties';
import JoinHouse from '@/components/JoinHouse';
import VideoPlayer, { VideoCard } from '@/components/VideoPlayer';
import FooterNewsletter from '@/components/FooterNewsletter';
import { Flame, ChevronRight, ArrowUpRight, Sparkles, Play, Crown, Coffee, Music, Headphones, Palmtree } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { stories } from '@/content/stories';
import { AppLink } from '@/components/InAppBrowser';
import { podcastVideos, storyVideos, tasteVideos, musicVideos } from '@/content/videos';
import { roomAccents } from '@/lib/theme';

const featuredStory = stories.find((s) => s.featured);

const houses = [
  {
    name: 'Marley House',
    tagline: 'Coffee, legacy, and the daily ritual.',
    href: '/coffee',
    icon: Coffee,
    accent: '#c4a049',
  },
  {
    name: 'Lion Order',
    tagline: 'The movement. Anime, culture, lifestyle.',
    href: '/lion-order',
    icon: Crown,
    accent: '#c4a049',
    crest: '/brand/lion-order-crest.png',
  },
  {
    name: 'RoMarley Beach House',
    tagline: 'Hospitality rooted in the island.',
    href: 'https://www.romarleybeachhouse.com/',
    icon: Palmtree,
    accent: '#c4a049',
    external: true,
  },
  {
    name: 'House of Marley',
    tagline: 'Sustainable audio. Family-licensed.',
    href: 'https://thehouseofmarley.com/',
    icon: Headphones,
    accent: '#c4a049',
    external: true,
    licensed: true,
  },
  {
    name: 'Music Legacy',
    tagline: 'Tuff Gong, Bob Marley, and the frequency.',
    href: '/vault',
    icon: Music,
    accent: '#c4a049',
  },
];

export default function HomePage() {
  const [joinOpen, setJoinOpen] = useState(false);

  const trendingVideos = [
    podcastVideos[0],
    storyVideos[0],
    tasteVideos[0],
    musicVideos[0],
    podcastVideos[1],
    storyVideos[1],
  ].filter(Boolean);

  return (
    <div className="relative min-h-full bg-[var(--bg)] monogram-canvas">

      {/* ═══════ MAISON HERO ═══════ */}
      <div className="relative px-6 pt-6 pb-10 text-center">
        {/* Gold glow behind lion */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[var(--gold)] blur-[120px] opacity-[0.15] pointer-events-none" />

        {/* Lion Head — hero crest, big and bright */}
        <div className="relative">
          <Image
            src="/brand/lion-order-crest.png"
            alt="Lion Order"
            width={300}
            height={300}
            className="mx-auto mb-4 drop-shadow-[0_0_40px_rgba(244,199,31,0.35)] brightness-110 saturate-[1.2]"
            priority
          />
        </div>

        <p className="text-[var(--gold)] text-[9px] tracking-[0.5em] uppercase font-medium mb-2">
          The Maison of
        </p>
        <h1 className="font-display text-4xl text-[var(--cream)] font-light tracking-[0.06em] uppercase mb-2">
          Rohan Marley
        </h1>
        <p className="text-[10px] text-[var(--dim)] font-light italic mt-0.5">Flower to the People</p>

        {/* Gold rule */}
        <div className="gold-rule w-16 mx-auto my-4" />

        <p className="text-[var(--dim)] text-sm font-light leading-relaxed max-w-[280px] mx-auto">
          Heritage, craft, and legacy — a maison built on the philosophy that what you build should outlive you.
        </p>

        <p className="text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase mt-4 opacity-60">
          rohanmarley.com
        </p>
      </div>

      <div className="gold-rule mx-6" />

      {/* ═══════ THE HOUSES ═══════ */}
      <div className="px-6 pt-8 pb-6">
        <p className="text-[var(--gold)] text-[9px] tracking-[0.4em] uppercase font-medium text-center mb-6">
          The Houses
        </p>

        <div className="space-y-3">
          {houses.map((house) => {
            const Icon = house.icon;
            const inner = (
              <div className="flex items-center gap-4 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-4 hover:border-[var(--gold)]/20 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[var(--gold)]/8 flex items-center justify-center shrink-0 overflow-hidden">
                  {house.crest ? (
                    <Image src={house.crest} alt="" width={36} height={36} className="object-contain" />
                  ) : (
                    <Icon size={20} className="text-[var(--gold)]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--cream)] tracking-wide">{house.name}</p>
                  <p className="text-[var(--dim)] text-xs font-light mt-0.5">{house.tagline}</p>
                  {house.licensed && (
                    <span className="text-[8px] tracking-wider uppercase text-[var(--gold)] mt-1 inline-block">Family Licensed</span>
                  )}
                </div>
                <ArrowUpRight size={16} className="text-[var(--gold)] opacity-40 shrink-0" />
              </div>
            );

            return house.external ? (
              <AppLink key={house.name} href={house.href} title={house.name} className="block w-full text-left">
                {inner}
              </AppLink>
            ) : (
              <Link key={house.name} href={house.href} className="block">
                {inner}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="gold-rule mx-6" />

      {/* ═══════ FEATURED VIDEO ═══════ */}
      <div className="pt-6">
        <p className="text-[var(--gold)] text-[9px] tracking-[0.4em] uppercase font-medium text-center mb-4">
          House Sessions
        </p>
        <VideoPlayer
          playlistId="PLC7UTUpH-pK182kGnMXGHcutFSDNYZrYP"
          title="House Sessions — Marley Coffee"
          thumbnail="https://img.youtube.com/vi/XE-uV_DsurA/maxresdefault.jpg"
          hero
        />
      </div>

      {/* Nav */}
      <div className="px-5 py-5 flex gap-2 overflow-x-auto">
        <Link href="/watch" className="shrink-0 flex items-center gap-1.5 bg-[var(--cream)] text-[var(--bg)] px-4 py-2 rounded-full text-xs font-medium">
          <Play size={11} fill="currentColor" /> Watch All
        </Link>
        <Link href="/coffee" className="shrink-0 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          Coffee
        </Link>
        <Link href="/merch" className="shrink-0 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          Merch
        </Link>
        <Link href="/ask" className="shrink-0 flex items-center gap-1 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          <Sparkles size={10} /> Ask
        </Link>
      </div>

      {/* ═══════ JOURNAL / TRENDING ═══════ */}
      <div className="px-5 pb-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[var(--gold)] text-[9px] tracking-[0.4em] uppercase font-medium">From the Journal</p>
          <Link href="/watch" className="text-[var(--dim)] text-xs flex items-center gap-1">
            See all <ChevronRight size={12} />
          </Link>
        </div>
        <div className="space-y-4">
          {trendingVideos.slice(0, 4).map((v) => (
            <VideoCard
              key={v.id}
              videoId={v.videoId}
              playlistId={v.playlistId}
              title={v.title}
              subtitle={v.channel}
            />
          ))}
        </div>
      </div>

      <div className="gold-rule mx-6" />

      {/* Daily Drop */}
      {featuredStory && (
        <div className="px-5 py-8">
          <div className="text-center">
            <p className="text-[var(--gold)] text-[9px] tracking-[0.4em] uppercase font-medium mb-4">
              Daily Drop
            </p>
            <p className="font-display text-xl text-[var(--cream)] font-light italic leading-relaxed">
              &ldquo;{featuredStory.body}&rdquo;
            </p>
            <p className="text-[var(--dim)] text-[10px] font-light mt-4 capitalize tracking-wide">
              {featuredStory.room} Room
            </p>
          </div>
        </div>
      )}

      <div className="gold-rule mx-6" />

      {/* The Private List CTA */}
      <div className="px-5 py-8 text-center">
        <p className="text-[var(--gold)] text-[9px] tracking-[0.4em] uppercase font-medium mb-3">
          The Private List
        </p>
        <p className="font-display text-lg text-[var(--cream)] font-light mb-2">
          Receive the maison&apos;s correspondence.
        </p>
        <p className="text-[var(--dim)] text-xs font-light mb-5">
          Stories, sessions, and rare access — delivered with care.
        </p>
        <button
          onClick={() => setJoinOpen(true)}
          className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 px-6 py-2.5 rounded-full hover:bg-[var(--gold)]/5 transition-colors"
        >
          Request Access
        </button>
      </div>

      <div className="gold-rule mx-6" />

      {/* Signature footer area */}
      <div className="px-5 pt-6">
        <ConnectedProperties />
      </div>

      <FooterNewsletter />

      {/* Lion Order mark */}
      <div className="px-6 py-8 text-center">
        <div className="gold-rule mb-6" />
        <p className="font-display text-xs text-[var(--gold)] italic tracking-wide">
          Lion Order &middot; Est. 2022
        </p>
        <p className="text-[8px] text-[var(--dim)] mt-1 tracking-[0.2em] uppercase">
          Find the Lion Within
        </p>
      </div>

      <JoinHouse open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}
