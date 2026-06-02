'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Play, Search, X } from 'lucide-react';
import { watchVideo } from '@/lib/tracking';
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

/* ── category definitions with counts ─────────────────────── */

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

const categories = [
  { id: 'all', label: 'All' },
  { id: 'podcast', label: 'Podcasts', count: podcastVideos.length },
  { id: 'interview', label: 'Interviews', count: interviewVideos.length },
  { id: 'coffee', label: 'Coffee', count: coffeeVideos.length },
  { id: 'taste', label: 'Taste of Marley', count: tasteVideos.length },
  { id: 'football', label: 'Football', count: footballVideos.length },
  { id: 'music', label: 'Music', count: musicVideos.length },
  { id: 'lifestyle', label: 'Ventures', count: lifestyleVideos.length },
  { id: 'story', label: 'Story', count: storyVideos.length },
];

const allVideos: VideoRef[] = [
  ...podcastVideos,
  ...storyVideos,
  ...interviewVideos,
  ...coffeeVideos,
  ...tasteVideos,
  ...footballVideos,
  ...musicVideos,
  ...lifestyleVideos,
];

/* ── quick-clips pool (interviews + podcasts for short-form feel) */
const quickClipsPool = [...interviewVideos, ...podcastVideos].slice(0, 8);

/* ── up-next pool (varied mix for horizontal discovery row) */
const upNextPool = [
  ...tasteVideos.slice(0, 3),
  ...coffeeVideos.slice(0, 3),
  ...musicVideos.slice(0, 3),
  ...footballVideos.slice(0, 2),
  ...lifestyleVideos.slice(0, 2),
];

/* ── component ────────────────────────────────────────────── */

export default function WatchPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? allVideos
    : (categoryVideos[activeCategory] ?? []);

  const videos = useMemo(() => {
    if (!query.trim()) return filtered;
    const q = query.toLowerCase();
    return filtered.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.channel?.toLowerCase().includes(q),
    );
  }, [filtered, query]);

  function handlePlay(v: VideoRef) {
    setPlayingVideo(v.id);
    if (v.videoId) watchVideo(v.videoId, v.title);
  }

  /* ── render ──────────────────────────────────────────────── */

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ── Sticky search bar ───────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-[var(--bg)]/95 backdrop-blur-sm px-4 pt-4 pb-3">
        <div className="flex items-center gap-2.5 border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 focus-within:border-[var(--gold)] transition-colors">
          <Search size={16} className="text-[var(--dim)] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search videos & channels..."
            className="flex-1 bg-transparent text-sm text-[var(--cream)] placeholder:text-[var(--dim)]/40 outline-none font-light"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="p-1"
            >
              <X size={14} className="text-[var(--dim)]" />
            </button>
          )}
        </div>
      </div>

      {/* ── Featured / Hero — Sessions Playlist ─────────────── */}
      {activeCategory === 'all' && !query && (
        <div className="px-4 pt-2 pb-4">
          <div className="relative overflow-hidden bg-[var(--panel)] border border-[var(--line)]">
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
                className="relative w-full aspect-video group"
              >
                <Image
                  src="https://img.youtube.com/vi/XE-uV_DsurA/maxresdefault.jpg"
                  alt="House Sessions"
                  fill
                  unoptimized
                  className="object-cover"
                />
                {/* dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* play button center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)]/90 flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:scale-105 transition-all shadow-lg shadow-black/40">
                    <Play size={28} className="text-[var(--bg)] ml-1" fill="var(--bg)" />
                  </div>
                </div>

                {/* title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-1">
                    Featured Playlist
                  </p>
                  <h2 className="font-display text-lg text-[var(--cream)] tracking-wide">
                    House Sessions — Preparaciones
                  </h2>
                  <p className="text-[var(--dim)] text-xs mt-1">
                    {sessionsPlaylist.channel}
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Category chips ──────────────────────────────────── */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-1.5 text-[11px] tracking-[0.08em] transition-colors rounded-full whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[var(--gold)] text-[var(--bg)] font-medium'
                  : 'border border-[var(--line)] text-[var(--dim)] hover:text-[var(--cream)] hover:border-[var(--dim)]'
              }`}
            >
              {cat.label}
              {cat.count !== undefined && (
                <span className={`ml-1.5 ${activeCategory === cat.id ? 'opacity-70' : 'opacity-50'}`}>
                  {cat.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Search result count ─────────────────────────────── */}
      {query && (
        <div className="px-4 pb-3 flex items-center justify-between">
          <p className="text-[var(--dim)] text-xs">
            {videos.length} result{videos.length !== 1 ? 's' : ''}
          </p>
          <button
            onClick={() => {
              setQuery('');
              setActiveCategory('all');
            }}
            className="text-[var(--gold)] text-xs"
          >
            Clear
          </button>
        </div>
      )}

      {/* ── Video feed with interleaved sections ────────────── */}
      <div className="px-4 pb-6">
        {videos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--dim)] text-sm font-light mb-3">
              No videos found
            </p>
            <button
              onClick={() => {
                setQuery('');
                setActiveCategory('all');
              }}
              className="text-[var(--gold)] text-xs tracking-wide uppercase"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {videos.map((v, i) => (
              <div key={v.id}>
                {/* ── Video card ─── */}
                <VideoCard
                  video={v}
                  isPlaying={playingVideo === v.id}
                  onPlay={() => handlePlay(v)}
                />

                {/* ── "Up Next" row after 3rd video ─── */}
                {i === 2 && activeCategory === 'all' && !query && (
                  <div className="mt-6 mb-2">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3 px-0.5">
                      Up Next
                    </p>
                    <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                      {upNextPool.map((uv) => (
                        <button
                          key={uv.id}
                          onClick={() => handlePlay(uv)}
                          className="shrink-0 w-[160px] group text-left"
                        >
                          <div className="relative w-[160px] aspect-video bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
                            {playingVideo === uv.id ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${uv.videoId}?autoplay=1&rel=0`}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                              />
                            ) : (
                              <>
                                {uv.videoId && (
                                  <Image
                                    src={`https://img.youtube.com/vi/${uv.videoId}/hqdefault.jpg`}
                                    alt={uv.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-9 h-9 rounded-full bg-[var(--gold)]/80 flex items-center justify-center">
                                    <Play size={14} className="text-[var(--bg)] ml-0.5" fill="var(--bg)" />
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                          <p className="text-[var(--cream)] text-[11px] mt-1.5 line-clamp-2 leading-tight group-hover:text-[var(--gold)] transition-colors">
                            {uv.title}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── "Quick Clips" row after 6th video ─── */}
                {i === 5 && activeCategory === 'all' && !query && (
                  <div className="mt-6 mb-2">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3 px-0.5">
                      Quick Clips
                    </p>
                    <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                      {quickClipsPool.map((qv) => (
                        <button
                          key={qv.id}
                          onClick={() => handlePlay(qv)}
                          className="shrink-0 w-[140px] group text-left"
                        >
                          <div className="relative w-[140px] aspect-square bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
                            {playingVideo === qv.id ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${qv.videoId}?autoplay=1&rel=0`}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                              />
                            ) : (
                              <>
                                {qv.videoId && (
                                  <Image
                                    src={`https://img.youtube.com/vi/${qv.videoId}/hqdefault.jpg`}
                                    alt={qv.title}
                                    fill
                                    unoptimized
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                  />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/80 flex items-center justify-center">
                                    <Play size={16} className="text-[var(--bg)] ml-0.5" fill="var(--bg)" />
                                  </div>
                                </div>
                                <p className="absolute bottom-2 left-2 right-2 text-[var(--cream)] text-[10px] line-clamp-2 leading-tight">
                                  {qv.title}
                                </p>
                              </>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Channels section ────────────────────────────────── */}
      <div className="px-4 pb-10">
        <div className="h-px bg-[var(--line)] mb-8" />
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
          Channels
        </p>
        <div className="grid grid-cols-2 gap-3">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 border border-[var(--line)] bg-[var(--panel)] p-5 hover:border-[var(--gold)]/30 transition-colors text-center group"
            >
              <div className="w-11 h-11 rounded-full bg-[var(--bg)] border border-[var(--gold)]/20 flex items-center justify-center group-hover:border-[var(--gold)]/50 transition-colors">
                <Play size={14} className="text-[var(--gold)] ml-0.5" fill="var(--gold)" />
              </div>
              <span className="text-[12px] text-[var(--cream)] font-light leading-tight">
                {ch.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="px-8 pb-12 text-center">
        <div className="h-px bg-[var(--line)] mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Watch
        </p>
      </footer>
    </div>
  );
}

/* ── VideoCard component ──────────────────────────────────── */

function VideoCard({
  video,
  isPlaying,
  onPlay,
}: {
  video: VideoRef;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  return (
    <div className="overflow-hidden">
      {isPlaying ? (
        <div className="relative w-full aspect-video bg-black border border-[var(--line)]">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          onClick={onPlay}
          className="w-full text-left group"
        >
          {/* Thumbnail */}
          <div className="relative w-full aspect-video bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
            {video.videoId && (
              <Image
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            )}
            {/* hover play overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                <Play size={20} className="text-[var(--bg)] ml-0.5" fill="var(--bg)" />
              </div>
            </div>
          </div>

          {/* Meta below thumbnail */}
          <div className="pt-2.5 pb-1">
            <p className="text-[var(--cream)] text-[14px] font-light leading-snug line-clamp-2">
              {video.title}
            </p>
            {video.channel && (
              <p className="text-[var(--dim)] text-[12px] mt-1">
                {video.channel}
              </p>
            )}
          </div>
        </button>
      )}
    </div>
  );
}
