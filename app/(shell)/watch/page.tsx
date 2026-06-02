'use client';

import { Play } from 'lucide-react';
import VideoPlayer, { VideoCard } from '@/components/VideoPlayer';

export default function WatchPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--ember)] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <div className="relative px-6 pt-14 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <Play size={16} className="text-[var(--ember)]" strokeWidth={1.5} />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--ember)] font-medium">
            Watch
          </p>
        </div>
        <h1 className="font-display text-2xl text-[var(--cream)] font-light">
          Stories in Motion
        </h1>
        <p className="text-[var(--dim)] text-xs font-light mt-1">
          Tap any video to play
        </p>
      </div>

      <div className="px-6 pb-10 space-y-10">
        {/* Featured: House Sessions Playlist */}
        <div>
          <p className="font-display text-base text-[var(--cream)] mb-0.5">House Sessions</p>
          <p className="text-[var(--dim)] text-[10px] font-light mb-3">
            Preparaciones &mdash; Marley Coffee Latam
          </p>
          <VideoPlayer
            playlistId="PLC7UTUpH-pK182kGnMXGHcutFSDNYZrYP"
            title="House Sessions — Preparaciones (Full Playlist)"
            thumbnail="https://img.youtube.com/vi/XE-uV_DsurA/hqdefault.jpg"
          />
          <p className="text-[var(--dim)] text-[10px] font-light mt-2 text-center">
            Full playlist &mdash; multiple episodes
          </p>
        </div>

        {/* The Story */}
        <div>
          <p className="font-display text-base text-[var(--cream)] mb-0.5">The Story</p>
          <p className="text-[var(--dim)] text-[10px] font-light mb-3">
            Brand films &amp; origin stories
          </p>
          <div className="space-y-3">
            <VideoPlayer
              videoId="XE-uV_DsurA"
              title="Marley Coffee Brand Film"
              compact
            />
            <VideoCard
              videoId="112LQ_4P9rI"
              title="Rooted in Legacy — The Marley Coffee Story"
              subtitle="6:44"
            />
          </div>
        </div>

        {/* The Music Legacy */}
        <div>
          <p className="font-display text-base text-[var(--cream)] mb-0.5">The Music Legacy</p>
          <p className="text-[var(--dim)] text-[10px] font-light mb-3">
            Tuff Gong &amp; family
          </p>
          <div className="space-y-2">
            <VideoCard
              videoId="dQw4w9WgXcQ"
              title="Tuff Gong Studio Sessions"
              subtitle="Tuff Gong Television"
            />
            <VideoCard
              videoId="cDpEzmYx0qs"
              title="YG Marley — Praise Jah in the Moonlight"
              subtitle="Official Music Video"
            />
          </div>
        </div>

        {/* Channels */}
        <div>
          <p className="font-display text-base text-[var(--cream)] mb-0.5">Channels</p>
          <p className="text-[var(--dim)] text-[10px] font-light mb-3">
            Follow on YouTube
          </p>
          <div className="space-y-2">
            {[
              { name: 'Marley Coffee Latam', url: 'https://www.youtube.com/@MarleyCoffeeLatam' },
              { name: 'Tuff Gong Television', url: 'https://www.youtube.com/user/TuffGongTelevision' },
              { name: 'House of Marley', url: 'https://www.youtube.com/user/TheHouseofMarley' },
            ].map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3 hover:border-[var(--ember)]/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--ember)]/10 flex items-center justify-center shrink-0">
                  <Play size={12} className="text-[var(--ember)] ml-px" fill="currentColor" />
                </div>
                <span className="text-sm text-[var(--cream)]">{ch.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
