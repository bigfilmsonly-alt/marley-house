'use client';

import { useState } from 'react';
import ConnectedProperties from '@/components/ConnectedProperties';
import JoinHouse from '@/components/JoinHouse';
import VideoPlayer, { VideoCard } from '@/components/VideoPlayer';
import FooterNewsletter from '@/components/FooterNewsletter';
import { Flame, ChevronRight, ArrowUpRight, Sparkles, Play, Crown, Sword } from 'lucide-react';
import Link from 'next/link';
import { stories } from '@/content/stories';
import { AppLink } from '@/components/InAppBrowser';
import { podcastVideos, storyVideos, tasteVideos, musicVideos } from '@/content/videos';
import { roomAccents } from '@/lib/theme';

const featuredStory = stories.find((s) => s.featured);

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
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* ═══════ LION ORDER HERO ═══════ */}
      <div className="relative overflow-hidden">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1508] via-[#0f0d06] to-[var(--bg)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-[#FED100] blur-[180px] opacity-[0.08]" />

        <div className="relative px-5 pt-6 pb-8 text-center">
          {/* Lion Order badge */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-[#FED100]/15 flex items-center justify-center">
              <Crown size={16} className="text-[#FED100]" />
            </div>
            <div className="text-left">
              <p className="text-[#FED100] text-[10px] tracking-[0.3em] uppercase font-bold">Lion Order</p>
              <p className="text-[var(--dim)] text-[9px]">by Rohan Marley</p>
            </div>
          </div>

          {/* Site name */}
          <p className="text-[var(--dim)] text-[10px] tracking-[0.3em] uppercase mb-2">rohanmarley.com</p>

          {/* Main headline */}
          <h1 className="text-4xl font-bold text-white leading-[1.1] tracking-tight mb-3">
            Strength.<br />
            <span className="text-[#FED100]">Unity.</span><br />
            Legacy.
          </h1>

          <p className="text-[var(--dim)] text-sm leading-relaxed mb-5 max-w-[300px] mx-auto">
            A roots-luxury movement rooted in Rastafari philosophy. Anime, culture, coffee, and community — all under one roof.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 justify-center">
            <AppLink
              href="https://lionorder.com/"
              title="Lion Order"
              className="flex items-center gap-2 bg-[#FED100] text-black px-5 py-2.5 rounded-full text-xs font-bold tracking-wide"
            >
              <Flame size={14} /> Enter Lion Order
            </AppLink>
            <Link
              href="/watch"
              className="flex items-center gap-2 bg-white/10 border border-white/15 text-white px-5 py-2.5 rounded-full text-xs font-medium"
            >
              <Play size={12} fill="white" /> Watch
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex gap-6 mt-6 pt-5 border-t border-[#FED100]/10 justify-center">
            <div>
              <p className="text-[#FED100] text-lg font-bold">80+</p>
              <p className="text-[var(--dim)] text-[10px]">Videos</p>
            </div>
            <div>
              <p className="text-[#FED100] text-lg font-bold">7</p>
              <p className="text-[var(--dim)] text-[10px]">Coffee Blends</p>
            </div>
            <div>
              <p className="text-[#FED100] text-lg font-bold">5</p>
              <p className="text-[var(--dim)] text-[10px]">Characters</p>
            </div>
            <div>
              <p className="text-[#FED100] text-lg font-bold">&infin;</p>
              <p className="text-[var(--dim)] text-[10px]">Legacy</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ MARLEY HOUSE CONTENT ═══════ */}

      {/* Section title */}
      <div className="px-4 pt-2 pb-3 text-center">
        <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--ember)] font-semibold">Marley House</p>
        <div className="rasta-stripe mt-2 w-16 mx-auto" />
      </div>

      {/* Hero Video */}
      <VideoPlayer
        playlistId="PLC7UTUpH-pK182kGnMXGHcutFSDNYZrYP"
        title="House Sessions — Marley Coffee"
        thumbnail="https://img.youtube.com/vi/XE-uV_DsurA/maxresdefault.jpg"
        hero
      />

      {/* Quick nav pills */}
      <div className="px-4 py-4 flex gap-2 overflow-x-auto">
        <Link href="/watch" className="shrink-0 flex items-center gap-1.5 bg-[var(--ember)] text-white px-4 py-2 rounded-full text-xs font-medium">
          <Play size={12} fill="white" /> Watch All
        </Link>
        <Link href="/coffee" className="shrink-0 flex items-center gap-1.5 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          Shop Coffee
        </Link>
        <Link href="/merch" className="shrink-0 flex items-center gap-1.5 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          Shop Merch
        </Link>
        <Link href="/vault" className="shrink-0 flex items-center gap-1.5 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          The Vault
        </Link>
        <Link href="/ask" className="shrink-0 flex items-center gap-1.5 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          <Sparkles size={11} /> Ask
        </Link>
      </div>

      {/* Trending Videos */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-[var(--cream)]">Trending</h2>
          <Link href="/watch" className="text-[var(--ember)] text-xs flex items-center gap-1">
            See all <ChevronRight size={12} />
          </Link>
        </div>
        <div className="space-y-4">
          {trendingVideos.map((v) => (
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

      {/* Daily Drop */}
      {featuredStory && (
        <div className="px-4 pb-6">
          <div className="rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
            <div className="rasta-stripe" />
            <div className="p-5 text-center">
              <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--ember)] mb-3 font-semibold">
                Daily Drop
              </p>
              <p className="font-display text-lg text-[var(--cream)] font-light italic leading-relaxed">
                {featuredStory.title}
              </p>
              <p className="text-[var(--dim)] text-sm font-light mt-3 leading-relaxed">
                {featuredStory.body}
              </p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-3 capitalize">
                {featuredStory.room} Room
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stories from the House */}
      <div className="px-4 pb-6">
        <h2 className="text-sm font-semibold text-[var(--cream)] mb-3">From the House</h2>
        <div className="space-y-2">
          {stories.filter(s => !s.featured).slice(0, 4).map((story) => (
            <div
              key={story.id}
              className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3 flex gap-3"
            >
              <div
                className="w-1 rounded-full shrink-0"
                style={{ background: roomAccents[story.room] }}
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: roomAccents[story.room] }}>
                    {story.room}
                  </p>
                  <span className="text-[var(--dim)] text-[9px]">&middot; {story.kind}</span>
                </div>
                <p className="text-sm text-[var(--cream)] font-light leading-relaxed">
                  {story.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lion Order — full width banner */}
      <div className="px-4 pb-6">
        <AppLink
          href="https://lionorder.com/"
          title="Lion Order"
          className="block w-full text-left"
        >
          <div className="rounded-2xl overflow-hidden border border-[#FED100]/20 bg-gradient-to-br from-[#1a1508] via-[var(--bg2)] to-[var(--bg2)]">
            <div className="h-1 bg-gradient-to-r from-[#FED100] to-[var(--ember)]" />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#FED100] flex items-center justify-center">
                  <Crown size={22} className="text-black" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Lion Order</p>
                  <p className="text-[#FED100] text-xs">Anime &middot; Culture &middot; Lifestyle</p>
                </div>
                <ArrowUpRight size={18} className="text-[#FED100] ml-auto" />
              </div>
              <p className="text-[var(--dim)] text-xs leading-relaxed">
                A roots-luxury lifestyle movement by Rohan Marley. Characters, chapters, and community rooted in Rastafari philosophy.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-[9px] tracking-wider uppercase bg-[#FED100]/10 text-[#FED100] px-2.5 py-1 rounded-full border border-[#FED100]/20 font-medium">Shop</span>
                <span className="text-[9px] tracking-wider uppercase bg-[#FED100]/10 text-[#FED100] px-2.5 py-1 rounded-full border border-[#FED100]/20 font-medium">Watch</span>
                <span className="text-[9px] tracking-wider uppercase bg-[#FED100]/10 text-[#FED100] px-2.5 py-1 rounded-full border border-[#FED100]/20 font-medium">Characters</span>
              </div>
            </div>
          </div>
        </AppLink>
      </div>

      {/* Join CTA */}
      <div className="px-4 pb-6">
        <button
          onClick={() => setJoinOpen(true)}
          className="w-full rounded-2xl bg-gradient-to-r from-[var(--ja-green)] to-[var(--ember)] p-[1px]"
        >
          <div className="rounded-2xl bg-[var(--bg)] px-5 py-4 text-center">
            <p className="text-base font-semibold text-[var(--cream)]">Join the House</p>
            <p className="text-[var(--dim)] text-xs font-light mt-1">Daily drops &middot; stories &middot; first access</p>
          </div>
        </button>
      </div>

      <FooterNewsletter />

      <div className="px-4"><div className="border-t border-[var(--line)]" /></div>

      <div className="pt-4">
        <ConnectedProperties />
      </div>

      <JoinHouse open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}
