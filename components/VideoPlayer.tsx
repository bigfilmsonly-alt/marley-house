'use client';

import { useState, useCallback } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlayer } from './PlayerContext';
import { watchVideo } from '@/lib/tracking';

interface VideoPlayerProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  thumbnail?: string;
  compact?: boolean;
  hero?: boolean;
}

function getThumbnail(videoId?: string, playlistId?: string, thumbnail?: string): string | null {
  if (thumbnail) return thumbnail;
  if (videoId) return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  if (playlistId) return null; // will use styled placeholder
  return null;
}

function getEmbedUrl(videoId?: string, playlistId?: string): string {
  if (playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&rel=0`;
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
}

export default function VideoPlayer({ videoId, playlistId, title, thumbnail, compact, hero }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const { play } = usePlayer();
  const thumbUrl = getThumbnail(videoId, playlistId, thumbnail);

  const radius = hero ? '' : 'rounded-xl';

  const handlePlay = useCallback(() => {
    setPlaying(true);
    play({ videoId, playlistId, title });
    watchVideo(videoId || playlistId || '', title);
  }, [videoId, playlistId, title, play]);

  if (playing) {
    return (
      <div className={`relative w-full aspect-video ${radius} overflow-hidden bg-black`}>
        <iframe
          src={getEmbedUrl(videoId, playlistId)}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={handlePlay}
      className={`relative w-full aspect-video ${radius} overflow-hidden cursor-pointer group block`}
    >
      {thumbUrl ? (
        <img
          src={thumbUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ember)]/20 via-[var(--bg2)] to-[var(--gold)]/10" />
      )}

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="w-14 h-14 rounded-full bg-[var(--ember)]/90 flex items-center justify-center shadow-lg shadow-[var(--ember)]/20"
        >
          <Play size={22} className="text-white ml-0.5" fill="white" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-sm text-white font-light truncate">{title}</p>
      </div>
    </button>
  );
}

export function VideoCard({
  videoId,
  playlistId,
  title,
  subtitle,
  thumbnail,
}: VideoPlayerProps & { subtitle?: string }) {
  const [playing, setPlaying] = useState(false);
  const { play } = usePlayer();
  const thumbUrl = getThumbnail(videoId, playlistId, thumbnail);

  if (playing) {
    return (
      <div className="rounded-2xl overflow-hidden bg-black">
        <div className="relative w-full aspect-video">
          <iframe
            src={getEmbedUrl(videoId, playlistId)}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="px-4 py-3 bg-[var(--bg2)]">
          <p className="text-sm text-[var(--cream)] font-light">{title}</p>
          {subtitle && <p className="text-[var(--dim)] text-[11px] font-light mt-0.5">{subtitle}</p>}
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        setPlaying(true);
        play({ videoId, playlistId, title });
        watchVideo(videoId || playlistId || '', title);
      }}
      className="w-full text-left rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)] group cursor-pointer block"
    >
      {/* Large thumbnail */}
      <div className="relative w-full aspect-video">
        {thumbUrl ? (
          <img src={thumbUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--ember)]/20 via-[var(--bg2)] to-[var(--gold)]/10" />
        )}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[var(--ember)]/90 flex items-center justify-center shadow-lg shadow-black/30 group-hover:scale-110 transition-transform">
            <Play size={18} className="text-white ml-0.5" fill="white" />
          </div>
        </div>
      </div>
      {/* Title area below thumbnail */}
      <div className="px-4 py-3">
        <p className="text-sm text-[var(--cream)] font-light leading-snug">{title}</p>
        {subtitle && <p className="text-[var(--dim)] text-[11px] font-light mt-0.5">{subtitle}</p>}
      </div>
    </button>
  );
}
