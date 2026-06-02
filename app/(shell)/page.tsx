'use client';

import { useState } from 'react';
import ConnectedProperties from '@/components/ConnectedProperties';
import JoinHouse from '@/components/JoinHouse';
import VideoPlayer, { VideoCard } from '@/components/VideoPlayer';
import FooterNewsletter from '@/components/FooterNewsletter';
import { Flame, ChevronRight, ArrowUpRight, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import { stories } from '@/content/stories';
import { podcastVideos, storyVideos, tasteVideos, musicVideos } from '@/content/videos';
import { roomAccents } from '@/lib/theme';

const featuredStory = stories.find((s) => s.featured);

export default function HomePage() {
  const [joinOpen, setJoinOpen] = useState(false);

  // Pick a mix of trending videos for the home feed
  const trendingVideos = [
    podcastVideos[0], // Drink Champs
    storyVideos[0],   // Brand Film
    tasteVideos[0],   // Full Series
    musicVideos[0],   // YG Marley
    podcastVideos[1], // I Am Athlete
    storyVideos[1],   // Rooted in Legacy
  ].filter(Boolean);

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Big bold title */}
      <div className="px-4 pt-4 pb-3">
        <h1 className="text-3xl font-bold text-[var(--cream)] tracking-tight">
          Marley House
        </h1>
        <div className="rasta-stripe mt-2 w-20" />
      </div>

      {/* Hero Video — full bleed */}
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
        <Link href="/vault" className="shrink-0 flex items-center gap-1.5 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          The Vault
        </Link>
        <Link href="/ask" className="shrink-0 flex items-center gap-1.5 bg-[var(--bg2)] border border-[var(--line)] text-[var(--cream)] px-4 py-2 rounded-full text-xs">
          <Sparkles size={11} /> Ask
        </Link>
      </div>

      {/* Trending Videos — YouTube-style feed */}
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

      {/* Lion Order */}
      <div className="px-4 pb-6">
        <a
          href="https://lionorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-[var(--ember)]/30 p-4 bg-gradient-to-r from-[var(--ember)]/10 to-transparent"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--ember)] flex items-center justify-center shrink-0">
              <Flame size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--cream)]">Lion Order</p>
              <p className="text-[var(--dim)] text-xs font-light">The sister house &middot; lionorder.com</p>
            </div>
            <ArrowUpRight size={16} className="text-[var(--ember)]" />
          </div>
        </a>
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
