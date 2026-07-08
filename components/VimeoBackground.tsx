'use client';

import { useState, useRef, useEffect } from 'react';

interface VimeoBackgroundProps {
  videoId: string;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
}

export default function VimeoBackground({
  videoId,
  aspectRatio = '16 / 9',
  priority = false,
  className = '',
}: VimeoBackgroundProps) {
  const [loadIframe, setLoadIframe] = useState(priority);
  const [iframeReady, setIframeReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || loadIframe) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, loadIframe]);

  const iframeSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&dnt=1&transparent=0&playsinline=1&quality=auto&title=0&byline=0&portrait=0&badge=0&autopause=0`;
  const posterUrl = `https://vumbnail.com/${videoId}.jpg`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={{ aspectRatio }}
    >
      {/* Poster — shows instantly */}
      <img
        src={posterUrl}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          iframeReady ? 'opacity-0' : 'opacity-100'
        }`}
        loading={priority ? 'eager' : 'lazy'}
      />

      {/* Iframe — mounts when visible or priority */}
      {loadIframe && (
        <iframe
          src={iframeSrc}
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => setIframeReady(true)}
        />
      )}
    </div>
  );
}
