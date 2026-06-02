'use client';

import { Play } from 'lucide-react';
import VideoPlayer, { VideoCard } from '@/components/VideoPlayer';
import {
  sessionsPlaylist,
  storyVideos,
  podcastVideos,
  interviewVideos,
  coffeeVideos,
  tasteVideos,
  footballVideos,
  musicVideos,
  lifestyleVideos,
  channels,
} from '@/content/videos';
import type { VideoRef } from '@/lib/types';

function Section({
  title,
  subtitle,
  videos,
}: {
  title: string;
  subtitle: string;
  videos: VideoRef[];
}) {
  return (
    <div>
      {/* Section header */}
      <div className="px-5 mb-4">
        <p className="font-display text-lg text-[var(--cream)]">{title}</p>
        <p className="text-[var(--dim)] text-xs font-light mt-0.5">
          {subtitle} &mdash; {videos.length} videos
        </p>
      </div>
      {/* Video feed */}
      <div className="px-4 space-y-4">
        {videos.map((v) => (
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
  );
}

export default function WatchPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--ember)] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <div className="relative px-5 pt-14 pb-6">
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
          Scroll &amp; play &mdash; every Rohan Marley video
        </p>
      </div>

      <div className="pb-10 space-y-10">
        {/* Featured: House Sessions Playlist */}
        <div>
          <div className="px-5 mb-4">
            <p className="font-display text-lg text-[var(--cream)]">House Sessions</p>
            <p className="text-[var(--dim)] text-xs font-light mt-0.5">
              Preparaciones &mdash; Marley Coffee Latam
            </p>
          </div>
          <div className="px-4">
            <VideoPlayer
              playlistId={sessionsPlaylist.playlistId}
              title="House Sessions — Preparaciones (Full Playlist)"
              thumbnail={`https://img.youtube.com/vi/XE-uV_DsurA/hqdefault.jpg`}
            />
            <p className="text-[var(--dim)] text-[10px] font-light mt-2 text-center">
              Full playlist &mdash; multiple episodes
            </p>
          </div>
        </div>

        {/* The Story */}
        <Section
          title="The Story"
          subtitle="Brand films & origin stories"
          videos={storyVideos}
        />

        {/* Podcasts */}
        <Section
          title="Podcasts & Conversations"
          subtitle="Long-form interviews & deep conversations"
          videos={podcastVideos}
        />

        {/* Interviews */}
        <Section
          title="Interviews"
          subtitle="Press, TV & media appearances"
          videos={interviewVideos}
        />

        {/* Coffee */}
        <Section
          title="Coffee"
          subtitle="Marley Coffee farm visits, brewing & brand"
          videos={coffeeVideos}
        />

        {/* Taste of Marley */}
        <Section
          title="Taste of Marley"
          subtitle="Jamaica food, culture & island life with Our Taste"
          videos={tasteVideos}
        />

        {/* Football */}
        <Section
          title="Football"
          subtitle="Miami Hurricanes & the gridiron years"
          videos={footballVideos}
        />

        {/* Music & Family */}
        <Section
          title="Music & Family Legacy"
          subtitle="YG Marley, reggae roots & family stories"
          videos={musicVideos}
        />

        {/* Ventures */}
        <Section
          title="Ventures & Lifestyle"
          subtitle="House of Marley, Lion Order & culture"
          videos={lifestyleVideos}
        />

        {/* Channels */}
        <div>
          <div className="px-5 mb-4">
            <p className="font-display text-lg text-[var(--cream)]">Channels</p>
            <p className="text-[var(--dim)] text-xs font-light mt-0.5">
              Follow on YouTube
            </p>
          </div>
          <div className="px-4 space-y-2">
            {channels.map((ch) => (
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
