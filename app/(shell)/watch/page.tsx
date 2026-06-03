'use client';

import { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { watchVideo } from '@/lib/tracking';
import {
  sessionsPlaylist,
  storyVideos,
  podcastVideos,
  interviewVideos,
  tasteVideos,
  footballVideos,
  musicVideos,
  lifestyleVideos,
  coffeeVideos,
} from '@/content/videos';
import type { VideoRef } from '@/lib/types';

/* ── curated collections ──────────────────────────────────────── */

const conversations: VideoRef[] = [
  podcastVideos.find((v) => v.videoId === 'X0SZf3r63ls')!,   // Drink Champs
  podcastVideos.find((v) => v.videoId === 'hBd-JIpdc50')!,   // I AM ATHLETE
  podcastVideos.find((v) => v.videoId === 'rhgStTzkeUo')!,   // The Pivot
  podcastVideos.find((v) => v.videoId === 'WY1tP2qy7Vg')!,   // We In Miami
  podcastVideos.find((v) => v.videoId === 'XLaevehZqqQ')!,   // More Than A Title
];

const theStory: VideoRef[] = [
  storyVideos.find((v) => v.videoId === 'XE-uV_DsurA')!,    // Marley Coffee Brand Film
  storyVideos.find((v) => v.videoId === '112LQ_4P9rI')!,     // Rooted in Legacy
  storyVideos.find((v) => v.videoId === 'vkkJycAr45E')!,     // The Marley Coffee Story
  storyVideos.find((v) => v.videoId === 'OwNLYwn15V4')!,     // Bob Marley Inspires
];

const tasteOfJamaica: VideoRef[] = tasteVideos.slice(0, 5);

const theLegacy: VideoRef[] = [
  footballVideos.find((v) => v.videoId === 'ogZDby-8cOo')!,  // Stories of The U
  musicVideos.find((v) => v.videoId === 'cDpEzmYx0qs')!,     // YG Marley Praise Jah
  musicVideos.find((v) => v.videoId === 'XJ8FmHoaEcI')!,     // Africa Road Trip
  footballVideos.find((v) => v.videoId === 'CEg7qD5Cpuw')!,   // Beast at Miami
  interviewVideos.find((v) => v.videoId === '1vjUHbZ0tu8')!,  // One Love Film
  lifestyleVideos.find((v) => v.videoId === 'WoJrJQZEysg')!,  // Lion Order Movement
];

/* ── all videos flat (for the "All Videos" vertical feed) ────── */

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

/* ── types ─────────────────────────────────────────────────────── */

type NowPlaying =
  | { kind: 'video'; video: VideoRef }
  | { kind: 'playlist'; playlist: VideoRef };

/* ── component ─────────────────────────────────────────────────── */

export default function WatchPage() {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const playVideo = useCallback((v: VideoRef) => {
    if (v.videoId) {
      setNowPlaying({ kind: 'video', video: v });
      watchVideo(v.videoId, v.title);
    } else if (v.playlistId) {
      setNowPlaying({ kind: 'playlist', playlist: v });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const playPlaylist = useCallback(() => {
    setNowPlaying({ kind: 'playlist', playlist: sessionsPlaylist });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const dismissPlayer = useCallback(() => {
    setNowPlaying(null);
  }, []);

  /* ── render ───────────────────────────────────────────────────── */

  return (
    <div ref={topRef} className="relative min-h-full bg-[var(--bg)]">

      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="px-4 pt-5 pb-3">
        <h1 className="text-2xl font-bold text-white tracking-tight">Watch</h1>
      </div>

      {/* ── Now Playing (when active) ──────────────────────────── */}
      {nowPlaying && (
        <div className="px-4 pt-1 pb-6">
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
        </div>
      )}

      {/* ── Hero — House Sessions (only when nothing is playing) ─ */}
      {!nowPlaying && (
        <div className="px-4 pt-1 pb-6">
          <div className="relative overflow-hidden bg-[var(--panel)] border border-[var(--line)]">
            <button
              onClick={playPlaylist}
              className="relative w-full aspect-[16/10] group"
            >
              <Image
                src="https://img.youtube.com/vi/XE-uV_DsurA/maxresdefault.jpg"
                alt="House Sessions"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[72px] h-[72px] rounded-full bg-[var(--gold)]/90 flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:scale-105 transition-all shadow-lg shadow-black/40">
                  <Play size={32} className="text-[var(--bg)] ml-1" fill="var(--bg)" />
                </div>
              </div>

              {/* title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2 className="font-display text-xl text-[var(--cream)] tracking-wide">
                  House Sessions — Preparaciones
                </h2>
                <p className="text-[var(--dim)] text-xs mt-1.5">
                  House Sessions &middot; Playlist
                </p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ── The Conversations ──────────────────────────────────── */}
      <CuratedSection
        title="The Conversations"
        videos={conversations}
        onPlay={playVideo}
        nowPlayingId={nowPlaying?.kind === 'video' ? nowPlaying.video.id : null}
      />

      {/* ── The Story ──────────────────────────────────────────── */}
      <CuratedSection
        title="The Story"
        videos={theStory}
        onPlay={playVideo}
        nowPlayingId={nowPlaying?.kind === 'video' ? nowPlaying.video.id : null}
      />

      {/* ── Taste of Jamaica ───────────────────────────────────── */}
      <CuratedSection
        title="Taste of Jamaica"
        videos={tasteOfJamaica}
        onPlay={playVideo}
        nowPlayingId={nowPlaying?.kind === 'video' ? nowPlaying.video.id : null}
      />

      {/* ── The Legacy ─────────────────────────────────────────── */}
      <CuratedSection
        title="The Legacy"
        videos={theLegacy}
        onPlay={playVideo}
        nowPlayingId={nowPlaying?.kind === 'video' ? nowPlaying.video.id : null}
      />

      {/* ── Divider ────────────────────────────────────────────── */}
      <div className="px-4 pt-4 pb-2">
        <div className="h-px bg-[var(--gold)]/20" />
      </div>

      {/* ── All Videos ─────────────────────────────────────────── */}
      <div className="px-4 pt-4 pb-6">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)] font-medium mb-5">
          All Videos
        </p>
        <div className="space-y-4">
          {allVideos.map((v) => (
            <VideoCard
              key={v.id}
              video={v}
              isActive={
                nowPlaying?.kind === 'video' && nowPlaying.video.id === v.id
              }
              onPlay={() => playVideo(v)}
            />
          ))}
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="px-8 pb-12 text-center">
        <div className="h-px bg-[var(--line)] mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Watch
        </p>
      </footer>
    </div>
  );
}

/* ── CuratedSection ────────────────────────────────────────────── */

function CuratedSection({
  title,
  videos,
  onPlay,
  nowPlayingId,
}: {
  title: string;
  videos: VideoRef[];
  onPlay: (v: VideoRef) => void;
  nowPlayingId: string | null;
}) {
  return (
    <section className="mb-8">
      <p className="text-[11px] tracking-[0.3em] uppercase text-[#E8C23A] font-medium mb-4 px-4">
        {title}
      </p>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => onPlay(v)}
            className="shrink-0 w-[200px] group text-left"
          >
            <div className="relative w-[200px] aspect-video bg-[var(--panel)] border border-[var(--line)] overflow-hidden">
              {v.videoId && (
                <Image
                  src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt={v.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md shadow-black/30 transition-all group-hover:scale-110 ${
                    nowPlayingId === v.id
                      ? 'bg-white/90'
                      : 'bg-[var(--gold)]/80 group-hover:bg-[var(--gold)]'
                  }`}
                >
                  <Play
                    size={16}
                    className={`ml-0.5 ${nowPlayingId === v.id ? 'text-black' : 'text-[var(--bg)]'}`}
                    fill={nowPlayingId === v.id ? 'black' : 'var(--bg)'}
                  />
                </div>
              </div>
              {nowPlayingId === v.id && (
                <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-[var(--gold)] text-[var(--bg)] text-[8px] tracking-[0.12em] uppercase font-medium">
                  Now Playing
                </div>
              )}
            </div>
            <p className={`text-[12px] mt-2 line-clamp-2 leading-snug font-medium transition-colors ${
              nowPlayingId === v.id ? 'text-[var(--gold)]' : 'text-[var(--cream)] group-hover:text-[var(--gold)]'
            }`}>
              {v.title}
            </p>
            {v.channel && (
              <p className="text-[var(--dim)] text-[10px] mt-0.5">{v.channel}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

/* ── VideoCard ──────────────────────────────────────────────────── */

function VideoCard({
  video,
  isActive,
  onPlay,
}: {
  video: VideoRef;
  isActive: boolean;
  onPlay: () => void;
}) {
  return (
    <div className="overflow-hidden">
      <button onClick={onPlay} className="w-full text-left group">
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

          {/* Now Playing badge */}
          {isActive && (
            <div className="absolute top-2 left-2 px-2 py-0.5 bg-[var(--gold)] text-[var(--bg)] text-[9px] tracking-[0.15em] uppercase font-medium">
              Now Playing
            </div>
          )}

          {/* Gold progress bar for Now Playing */}
          {isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[var(--gold)]/20">
              <div className="h-full w-1/3 bg-[var(--gold)]" />
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="pt-2.5 pb-1">
          <p className={`text-[14px] font-light leading-snug line-clamp-2 ${isActive ? 'text-[var(--gold)]' : 'text-[var(--cream)]'}`}>
            {video.title}
          </p>
          {video.channel && (
            <p className="text-[var(--dim)] text-[12px] mt-1">
              {video.channel}
            </p>
          )}
        </div>
      </button>
    </div>
  );
}
