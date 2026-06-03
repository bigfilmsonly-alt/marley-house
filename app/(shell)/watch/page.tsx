'use client';

import { useState, useMemo, useRef, useCallback } from 'react';
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

/* ── category label map for pills ────────────────────────── */

const categoryLabelMap: Record<string, string> = {
  podcast: 'Podcast',
  interview: 'Interview',
  coffee: 'Coffee',
  taste: 'Taste',
  football: 'Football',
  music: 'Music',
  lifestyle: 'Ventures',
  story: 'Story',
  sessions: 'Sessions',
};

/* ── filter out videos without a videoId ────────────────────── */

const allVideos: VideoRef[] = [
  ...podcastVideos,
  ...storyVideos,
  ...interviewVideos,
  ...coffeeVideos,
  ...tasteVideos,
  ...footballVideos,
  ...musicVideos,
  ...lifestyleVideos,
].filter((v) => v.videoId);

/* ── quick-clips pool (interviews + podcasts for short-form feel) */
const quickClipsPool = [...interviewVideos, ...podcastVideos]
  .filter((v) => v.videoId)
  .slice(0, 8);

/* ── up-next pool (varied mix for horizontal discovery row) */
const upNextPool = [
  ...tasteVideos.slice(0, 3),
  ...coffeeVideos.slice(0, 3),
  ...musicVideos.slice(0, 3),
  ...footballVideos.slice(0, 2),
  ...lifestyleVideos.slice(0, 2),
].filter((v) => v.videoId);

/* ── types for now-playing state ─────────────────────────────── */

type NowPlaying =
  | { kind: 'video'; video: VideoRef }
  | { kind: 'playlist'; playlist: VideoRef };

/* ── duration badge helper ───────────────────────────────────── */

function fakeDuration(videoId: string): string {
  let hash = 0;
  for (let i = 0; i < videoId.length; i++) {
    hash = ((hash << 5) - hash) + videoId.charCodeAt(i);
    hash |= 0;
  }
  const mins = Math.abs(hash % 45) + 3;
  const secs = Math.abs((hash >> 8) % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/* ── component ────────────────────────────────────────────────── */

export default function WatchPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const pool =
      activeCategory === 'all'
        ? allVideos
        : (categoryVideos[activeCategory] ?? []).filter((v) => v.videoId);
    return pool;
  }, [activeCategory]);

  const videos = useMemo(() => {
    if (!query.trim()) return filtered;
    const q = query.toLowerCase();
    return filtered.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.channel?.toLowerCase().includes(q),
    );
  }, [filtered, query]);

  /* ── up next suggestions for the active player ─────────────── */
  const upNextSuggestions = useMemo(() => {
    if (!nowPlaying) return [];
    const currentId = nowPlaying.kind === 'video' ? nowPlaying.video.id : nowPlaying.playlist.id;
    return allVideos
      .filter((v) => v.id !== currentId && v.videoId)
      .slice(0, 3);
  }, [nowPlaying]);

  /* ── unified play handler ──────────────────────────────────── */

  const playVideo = useCallback(
    (v: VideoRef) => {
      if (v.videoId) {
        setNowPlaying({ kind: 'video', video: v });
        watchVideo(v.videoId, v.title);
      } else if (v.playlistId) {
        setNowPlaying({ kind: 'playlist', playlist: v });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [],
  );

  const playPlaylist = useCallback(() => {
    setNowPlaying({ kind: 'playlist', playlist: sessionsPlaylist });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const dismissPlayer = useCallback(() => {
    setNowPlaying(null);
  }, []);

  /* ── render ──────────────────────────────────────────────────── */

  return (
    <div ref={topRef} className="relative min-h-full bg-[var(--bg)]">

      {/* ── MasterClass-style header ─────────────────────────────── */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-white">Watch</h1>
            <p className="text-[var(--dim)] text-xs mt-0.5">
              {videos.length} of {allVideos.length} videos
            </p>
          </div>
          <Image
            src="/brand/lion-crest-icon.png"
            alt=""
            width={28}
            height={28}
            className="opacity-60"
          />
        </div>

        {/* search bar */}
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

      {/* ── Hero Player (when a video is active) ────────────────── */}
      {nowPlaying && (
        <div className="px-4 pt-2 pb-4">
          {/* NOW PLAYING label */}
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2 font-semibold">
            Now Playing
          </p>

          <div className="relative bg-black border-2 border-[var(--gold)]/30 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
            <div className="relative w-full aspect-video">
              <iframe
                src={
                  nowPlaying.kind === 'playlist'
                    ? `https://www.youtube.com/embed/videoseries?list=${nowPlaying.playlist.playlistId}&autoplay=1&rel=0&modestbranding=1`
                    : `https://www.youtube.com/embed/${nowPlaying.video.videoId}?autoplay=1&rel=0&modestbranding=1`
                }
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-white text-[16px] font-semibold leading-snug">
                  {nowPlaying.kind === 'playlist'
                    ? nowPlaying.playlist.title
                    : nowPlaying.video.title}
                </p>
                {(() => {
                  const ch =
                    nowPlaying.kind === 'playlist'
                      ? nowPlaying.playlist.channel
                      : nowPlaying.video.channel;
                  return ch ? (
                    <p className="text-[var(--dim)] text-[12px] mt-1">{ch}</p>
                  ) : null;
                })()}
              </div>
              <button
                onClick={dismissPlayer}
                aria-label="Close player"
                className="shrink-0 p-1 hover:bg-white/10 transition-colors"
              >
                <X size={18} className="text-[var(--dim)]" />
              </button>
            </div>
          </div>

          {/* Up Next auto-queue suggestions */}
          {upNextSuggestions.length > 0 && (
            <div className="mt-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] mb-2.5">
                Up Next
              </p>
              <div className="grid grid-cols-3 gap-2">
                {upNextSuggestions.map((sv) => (
                  <button
                    key={sv.id}
                    onClick={() => playVideo(sv)}
                    className="group text-left"
                  >
                    <div className="relative w-full aspect-video bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
                      {sv.videoId && (
                        <Image
                          src={`https://img.youtube.com/vi/${sv.videoId}/hqdefault.jpg`}
                          alt={sv.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      {/* duration badge */}
                      {sv.videoId && (
                        <span className="absolute bottom-1 right-1 bg-black/85 text-white text-[9px] font-medium px-1 py-0.5 leading-none">
                          {fakeDuration(sv.videoId)}
                        </span>
                      )}
                    </div>
                    <p className="text-[var(--cream)] text-[10px] mt-1 line-clamp-2 leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sv.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Featured / Hero -- Sessions Playlist (only when not playing) */}
      {!nowPlaying && activeCategory === 'all' && !query && (
        <div className="px-4 pt-2 pb-4">
          <div className="relative overflow-hidden bg-[var(--panel)] border border-[var(--line)]">
            <button
              onClick={playPlaylist}
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

              {/* FEATURED badge top-left */}
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[var(--gold)] text-[var(--bg)] text-[9px] tracking-[0.2em] uppercase font-bold">
                Featured
              </div>

              {/* play button center -- pulsing animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[var(--gold)]/90 flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:scale-105 transition-all shadow-lg shadow-black/40 animate-[pulse-gold_2.5s_ease-in-out_infinite]">
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
                  House Sessions &middot; Playlist
                </p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ── Category chips ──────────────────────────────────────── */}
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

      {/* ── Search result count ──────────────────────────────────── */}
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

      {/* ── Video feed with interleaved sections ─────────────────── */}
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
                  index={i}
                  isActive={
                    nowPlaying?.kind === 'video' &&
                    nowPlaying.video.id === v.id
                  }
                  onPlay={() => playVideo(v)}
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
                          onClick={() => playVideo(uv)}
                          className="shrink-0 w-[180px] group text-left"
                        >
                          <div className="relative w-[180px] aspect-video bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
                            <Image
                              src={`https://img.youtube.com/vi/${uv.videoId}/hqdefault.jpg`}
                              alt={uv.title}
                              fill
                              unoptimized
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-9 h-9 rounded-full bg-[var(--gold)]/80 flex items-center justify-center shadow-md shadow-black/30">
                                <Play size={14} className="text-[var(--bg)] ml-0.5" fill="var(--bg)" />
                              </div>
                            </div>
                            {/* duration badge */}
                            {uv.videoId && (
                              <span className="absolute bottom-1.5 right-1.5 bg-black/85 text-white text-[9px] font-medium px-1.5 py-0.5 leading-none">
                                {fakeDuration(uv.videoId)}
                              </span>
                            )}
                          </div>
                          <p className="text-[var(--cream)] text-[11px] mt-1.5 line-clamp-2 leading-tight group-hover:text-[var(--gold)] transition-colors">
                            {uv.title}
                          </p>
                          {/* category label */}
                          <p className="text-[var(--gold)]/60 text-[9px] mt-0.5 tracking-wide uppercase">
                            {categoryLabelMap[uv.category] ?? uv.category}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── "Short Takes" row after 6th video ─── */}
                {i === 5 && activeCategory === 'all' && !query && (
                  <div className="mt-6 mb-2">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-3 px-0.5">
                      Short Takes
                    </p>
                    <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-2 scrollbar-hide">
                      {quickClipsPool.map((qv) => (
                        <button
                          key={qv.id}
                          onClick={() => playVideo(qv)}
                          className="shrink-0 w-[160px] group text-left"
                        >
                          <div className="relative w-[160px] aspect-square bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
                            {/* gold left accent bar */}
                            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[var(--gold)]/50 z-10" />
                            <Image
                              src={`https://img.youtube.com/vi/${qv.videoId}/hqdefault.jpg`}
                              alt={qv.title}
                              fill
                              unoptimized
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            {/* play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-[var(--gold)]/80 flex items-center justify-center shadow-md shadow-black/30">
                                <Play size={16} className="text-[var(--bg)] ml-0.5" fill="var(--bg)" />
                              </div>
                            </div>
                            {/* duration badge */}
                            {qv.videoId && (
                              <span className="absolute top-2 right-2 bg-black/85 text-white text-[9px] font-medium px-1.5 py-0.5 leading-none z-10">
                                {fakeDuration(qv.videoId)}
                              </span>
                            )}
                            <div className="absolute bottom-2 left-3 right-2 z-10">
                              <p className="text-[var(--cream)] text-[10px] line-clamp-2 leading-tight">
                                {qv.title}
                              </p>
                              <p className="text-[var(--gold)]/60 text-[8px] mt-0.5 tracking-wide uppercase">
                                {categoryLabelMap[qv.category] ?? qv.category}
                              </p>
                            </div>
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

      {/* ── Channels section ──────────────────────────────────────── */}
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
              className="flex flex-col items-center gap-2.5 border border-[var(--line)] bg-[var(--panel)] p-5 hover:border-[var(--gold)]/30 transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--bg)] border border-[var(--gold)]/20 flex items-center justify-center group-hover:border-[var(--gold)]/50 transition-colors">
                <Play size={18} className="text-[var(--gold)] ml-0.5" fill="var(--gold)" />
              </div>
              <div>
                <span className="text-[12px] text-[var(--cream)] font-light leading-tight block">
                  {ch.name}
                </span>
                <span className="text-[var(--gold)] text-[9px] tracking-[0.15em] uppercase mt-1 block opacity-70 group-hover:opacity-100 transition-opacity">
                  Subscribe
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="px-8 pb-12 text-center">
        <div className="h-px bg-[var(--line)] mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Watch
        </p>
      </footer>

      {/* ── Pulse animation for featured play button ─────────────── */}
      <style jsx global>{`
        @keyframes pulse-gold {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(212, 175, 55, 0);
          }
        }
      `}</style>
    </div>
  );
}

/* ── VideoCard component ──────────────────────────────────────── */

function VideoCard({
  video,
  index,
  isActive,
  onPlay,
}: {
  video: VideoRef;
  index: number;
  isActive: boolean;
  onPlay: () => void;
}) {
  const isTrending = index < 3;

  return (
    <div className="overflow-hidden">
      <button
        onClick={onPlay}
        className="w-full text-left group"
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-[16/9] bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
          {video.videoId && (
            <Image
              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
              alt={video.title}
              fill
              unoptimized
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          )}
          {/* play button -- always visible for mobile, highlight on active */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-black/30 transition-all group-hover:scale-110 ${
                isActive
                  ? 'bg-white/90'
                  : 'bg-[var(--gold)]/80 group-hover:bg-[var(--gold)]'
              }`}
            >
              <Play
                size={20}
                className={`ml-0.5 ${isActive ? 'text-black' : 'text-[var(--bg)]'}`}
                fill={isActive ? 'black' : 'var(--bg)'}
              />
            </div>
          </div>

          {/* "Now Playing" badge */}
          {isActive && (
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-[var(--gold)] text-[var(--bg)] text-[9px] tracking-[0.15em] uppercase font-medium">
              Now Playing
            </div>
          )}

          {/* "TRENDING" badge -- first 3 videos */}
          {isTrending && !isActive && (
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-[var(--gold)] text-[var(--bg)] text-[9px] tracking-[0.15em] uppercase font-bold">
              Trending
            </div>
          )}

          {/* Duration badge bottom-right */}
          {video.videoId && (
            <span className="absolute bottom-2 right-2 bg-black/85 text-white text-[10px] font-medium px-1.5 py-0.5 leading-none tracking-wide">
              {fakeDuration(video.videoId)}
            </span>
          )}

          {/* Gold progress bar for Now Playing card */}
          {isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--gold)]/20">
              <div className="h-full w-1/3 bg-[var(--gold)] animate-[progress-shimmer_3s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* Meta below thumbnail */}
        <div className="pt-2.5 pb-1">
          <p className={`text-[14px] font-light leading-snug line-clamp-2 ${isActive ? 'text-[var(--gold)]' : 'text-[var(--cream)]'}`}>
            {video.title}
          </p>
          <div className="flex items-center gap-2 mt-1">
            {video.channel && (
              <p className="text-[var(--dim)] text-[12px]">
                {video.channel}
              </p>
            )}
            {video.channel && video.category && (
              <span className="text-[var(--dim)]/30 text-[10px]">&middot;</span>
            )}
            {video.category && (
              <span className="text-[var(--gold)]/60 text-[10px] tracking-wide uppercase">
                {categoryLabelMap[video.category] ?? video.category}
              </span>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
