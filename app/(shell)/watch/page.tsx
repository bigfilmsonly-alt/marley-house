'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import VideoPlayer, { VideoCard } from '@/components/VideoPlayer';
import { AppLink } from '@/components/InAppBrowser';
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

const categories = [
  { id: 'all', label: 'All' },
  { id: 'podcast', label: 'Podcasts' },
  { id: 'interview', label: 'Interviews' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'taste', label: 'Taste of Marley' },
  { id: 'football', label: 'Football' },
  { id: 'music', label: 'Music' },
  { id: 'lifestyle', label: 'Ventures' },
  { id: 'story', label: 'Story' },
];

const categoryVideos: Record<string, VideoRef[]> = {
  podcast: podcastVideos,
  interview: interviewVideos,
  coffee: coffeeVideos,
  taste: tasteVideos,
  football: footballVideos,
  music: musicVideos,
  lifestyle: lifestyleVideos,
  story: storyVideos,
};

const allVideos = [
  ...podcastVideos,
  ...storyVideos,
  ...interviewVideos,
  ...coffeeVideos,
  ...tasteVideos,
  ...footballVideos,
  ...musicVideos,
  ...lifestyleVideos,
];

export default function WatchPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const videos = activeCategory === 'all' ? allVideos : (categoryVideos[activeCategory] ?? []);
  const total = allVideos.length;

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[var(--cream)]">Watch</h1>
            <p className="text-[var(--dim)] text-xs mt-0.5">{total} videos</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[var(--ember)] flex items-center justify-center">
            <Play size={14} className="text-white ml-0.5" fill="white" />
          </div>
        </div>
      </div>

      {/* Category filter chips — horizontal scroll */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[var(--cream)] text-[var(--bg)]'
                  : 'bg-[var(--bg2)] text-[var(--dim)] border border-[var(--line)]'
              }`}
            >
              {cat.label}
              {cat.id !== 'all' && categoryVideos[cat.id] && (
                <span className="ml-1 opacity-60">{categoryVideos[cat.id].length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Featured playlist — only show on "all" */}
      {activeCategory === 'all' && (
        <div className="px-4 pb-6">
          <VideoPlayer
            playlistId={sessionsPlaylist.playlistId}
            title="House Sessions — Full Playlist"
            thumbnail="https://img.youtube.com/vi/XE-uV_DsurA/hqdefault.jpg"
          />
        </div>
      )}

      {/* Video feed */}
      <div className="px-4 pb-10 space-y-4">
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

      {/* Channels */}
      <div className="px-4 pb-10">
        <h2 className="text-sm font-semibold text-[var(--cream)] mb-3">Channels</h2>
        <div className="space-y-2">
          {channels.map((ch) => (
            <AppLink
              key={ch.name}
              href={ch.url}
              title={ch.name}
              className="flex items-center gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3 hover:border-[var(--ember)]/30 transition-colors w-full text-left"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--ember)] flex items-center justify-center shrink-0">
                <Play size={12} className="text-white ml-px" fill="white" />
              </div>
              <span className="text-sm text-[var(--cream)] font-medium">{ch.name}</span>
            </AppLink>
          ))}
        </div>
      </div>
    </div>
  );
}
