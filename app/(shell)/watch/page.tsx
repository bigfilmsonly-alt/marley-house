'use client';

import { useState, useMemo } from 'react';
import { Play, Search, X } from 'lucide-react';
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
  const [query, setQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const filtered = activeCategory === 'all' ? allVideos : (categoryVideos[activeCategory] ?? []);
  const videos = useMemo(() => {
    if (!query.trim()) return filtered;
    const q = query.toLowerCase();
    return filtered.filter(v => v.title.toLowerCase().includes(q) || v.channel?.toLowerCase().includes(q));
  }, [filtered, query]);
  const total = allVideos.length;

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Header */}
      <div className="px-8 pt-8 pb-6 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Watch</p>
        <h1 className="font-display text-2xl text-[var(--cream)] tracking-[0.04em] uppercase mb-2">
          House<br /><span className="italic font-normal">Sessions</span>
        </h1>
        <p className="text-[var(--dim)] text-xs">{total} videos</p>
      </div>

      {/* Search */}
      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5">
          <Search size={14} className="text-[var(--dim)] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search videos..."
            className="flex-1 bg-transparent text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/40 outline-none font-light"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear search" className="p-0.5">
              <X size={14} className="text-[var(--dim)]" />
            </button>
          )}
        </div>
      </div>

      {/* Category filter */}
      <div className="px-6 pb-6">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-6 px-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[var(--gold)] text-[var(--bg)]'
                  : 'border border-[var(--line)] text-[var(--dim)] hover:text-[var(--cream)]'
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

      <div className="gold-rule mx-6" />

      {/* Sessions playlist */}
      {activeCategory === 'all' && (
        <div className="px-6 py-6">
          <div className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
            {playingVideo === 'sessions' ? (
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${sessionsPlaylist.playlistId}&autoplay=1&rel=0`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                onClick={() => setPlayingVideo('sessions')}
                className="w-full relative aspect-video bg-[var(--bg)] flex items-center justify-center group"
              >
                <div className="w-14 h-14 rounded-full border border-[var(--gold)]/30 flex items-center justify-center group-hover:border-[var(--gold)] transition-colors">
                  <Play size={20} className="text-[var(--gold)] ml-1" />
                </div>
                <p className="absolute bottom-4 text-[10px] tracking-[0.2em] uppercase text-[var(--dim)]">
                  House Sessions — Full Playlist
                </p>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Result count */}
      {query && (
        <p className="px-6 pb-2 text-[var(--dim)] text-xs">
          {videos.length} result{videos.length !== 1 ? 's' : ''}
        </p>
      )}

      {/* Video feed */}
      <div className="px-6 pb-10 space-y-2">
        {videos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--dim)] text-sm font-light">No videos found</p>
            <button onClick={() => { setQuery(''); setActiveCategory('all'); }} className="text-[var(--gold)] text-xs mt-2">
              Clear filters
            </button>
          </div>
        ) : (
          videos.map((v) => (
            <div key={v.id} className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
              {playingVideo === v.id ? (
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.videoId}?autoplay=1&rel=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  onClick={() => setPlayingVideo(v.id)}
                  className="w-full flex items-center gap-4 p-4 text-left group"
                >
                  <div className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 group-hover:border-[var(--gold)]/30 transition-colors">
                    <Play size={14} className="text-[var(--gold)] ml-0.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[var(--cream)] text-sm font-light truncate">{v.title}</p>
                    {v.channel && <p className="text-[var(--dim)] text-[10px] mt-0.5">{v.channel}</p>}
                  </div>
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {/* Channels */}
      <div className="px-6 pb-10">
        <div className="gold-rule mb-8" />
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">Channels</p>
        <div className="space-y-2">
          {channels.map((ch) => (
            <AppLink
              key={ch.name}
              href={ch.url}
              title={ch.name}
              className="flex items-center gap-4 border border-[var(--line)] bg-[var(--panel)] p-4 hover:border-[var(--gold)]/20 transition-colors w-full text-left"
            >
              <div className="w-9 h-9 rounded-full border border-[var(--gold)]/20 flex items-center justify-center shrink-0">
                <Play size={12} className="text-[var(--gold)] ml-px" />
              </div>
              <span className="text-sm text-[var(--cream)] font-light">{ch.name}</span>
            </AppLink>
          ))}
        </div>
      </div>

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Watch
        </p>
      </footer>
    </div>
  );
}
