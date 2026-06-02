'use client';

import { useState } from 'react';
import Image from 'next/image';
import { watchVideo } from '@/lib/tracking';
import { wisdomCards } from '@/content/wisdom';
import { sessionsPlaylist, storyVideos } from '@/content/videos';

/* ── static data ─────────────────────────────────────────────── */

const drop = {
  number: 1,
  tags: ['legacy', 'reflection'],
  body: 'The lion does not turn around when the small dog barks. Stay focused on the mission. The legacy is not in what you build — it is what endures.',
};

const photoGrid: { src: string; label: string }[] = [
  { src: '/lion-order/culture.jpg', label: 'Culture' },
  { src: '/lion-order/heritage.jpg', label: 'Heritage' },
  { src: '/lion-order/beauty.jpg', label: 'Beauty' },
  { src: '/lion-order/roots.jpg', label: 'Roots' },
];

const maison = [
  {
    crest: '/brand/lion-head-gold.png',
    name: 'Lion Order',
    description: 'Sacred herb. Elevated ritual. The cannabis arm of the Marley legacy.',
  },
  {
    crest: '/brand/lion-crest-clean.png',
    name: 'Marley Coffee',
    description: 'Farm-to-cup excellence from the Blue Mountains of Jamaica.',
  },
  {
    crest: '/brand/rhr-monogram-transparent.png',
    name: 'RoMarley Beach House',
    description: 'Where culture, cuisine, and community meet the shore.',
  },
];

const communityImages = [
  { src: '/lion-order/community-vinyl.jpg', label: 'Vinyl' },
  { src: '/lion-order/community-bar.jpg', label: 'Gather' },
  { src: '/lion-order/community-table.jpg', label: 'Table' },
];

const featuredVideos = storyVideos.slice(0, 3);

/* ── page ─────────────────────────────────────────────────────── */

export default function HomePage() {
  const [playingSession, setPlayingSession] = useState(false);
  const [expandedWisdom, setExpandedWisdom] = useState<string | null>(null);

  const sessionThumb = `https://img.youtube.com/vi/XE-uV_DsurA/maxresdefault.jpg`;

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — Full-bleed editorial
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full">
        {/* Monogram — floating above image */}
        <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
          <Image
            src="/brand/rhr-monogram-transparent.png"
            alt="R-M Monogram"
            width={56}
            height={56}
            className="opacity-80"
            priority
          />
        </div>

        {/* Hero image */}
        <div className="relative w-full aspect-[3/4] max-h-[85vh] overflow-hidden">
          <Image
            src="/lion-order/rohan-portrait.jpg"
            alt="Rohan Marley"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
        </div>

        {/* Hero text */}
        <div className="absolute bottom-10 left-0 right-0 z-10 px-8 text-center">
          <p className="font-display text-2xl text-[var(--cream)] italic leading-[1.4] tracking-[0.01em]">
            Awaken the lion<br />in everyone.
          </p>
        </div>
      </section>

      {/* Gold rule */}
      <div className="gold-rule mx-8 mt-6" />

      {/* ═══════════════════════════════════════════════════════════
          2. FEATURED VIDEO — House Sessions
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-0 pt-14 pb-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-5 text-center">
          House Sessions
        </p>

        <div className="relative w-full aspect-video bg-black">
          {!playingSession ? (
            <button
              onClick={() => {
                setPlayingSession(true);
                watchVideo(
                  sessionsPlaylist.playlistId ?? '',
                  sessionsPlaylist.title,
                );
              }}
              className="relative w-full h-full group cursor-pointer"
              aria-label="Play House Sessions"
            >
              <Image
                src={sessionThumb}
                alt={sessionsPlaylist.title}
                fill
                className="object-cover"
                unoptimized
                sizes="100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              {/* Gold play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[var(--gold)] flex items-center justify-center bg-black/50">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                    <path d="M24 14L0 28V0L24 14Z" fill="var(--gold)" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${sessionsPlaylist.playlistId}&autoplay=1`}
              title={sessionsPlaylist.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>

        <div className="px-6 mt-4">
          <p className="font-display text-base text-[var(--cream)] leading-snug">
            {sessionsPlaylist.title}
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] mt-1">
            {sessionsPlaylist.channel}
          </p>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          3. DAILY DROP — editorial card
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">
          Daily Drop
        </p>

        <div className="border border-[var(--line)] bg-[var(--panel)] p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-4xl text-[var(--gold)] leading-none tracking-tight">
              {String(drop.number).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {drop.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)] border border-[var(--line)] px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="font-body text-[15px] text-[var(--cream)] leading-[1.9] font-light">
            {drop.body}
          </p>

          <div className="gold-rule mt-8" />

          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--dim)] mt-4 text-center">
            From the House
          </p>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          4. VISUAL STORY — photo grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">
          Visual Story
        </p>

        <div className="grid grid-cols-2 gap-2">
          {photoGrid.map((photo) => (
            <div key={photo.label} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[10px] tracking-[0.3em] uppercase text-[var(--cream)]">
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          5. WISDOM CARDS — expandable
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">
          Wisdom
        </p>

        <div className="space-y-6">
          {wisdomCards.slice(0, 3).map((card) => (
            <button
              key={card.id}
              onClick={() =>
                setExpandedWisdom(expandedWisdom === card.id ? null : card.id)
              }
              className="w-full text-left border border-[var(--line)] bg-[var(--panel)] p-6 cursor-pointer transition-colors hover:border-[var(--gold)]/30"
            >
              {/* Gold quote mark */}
              <span className="font-display text-3xl text-[var(--gold)] leading-none block mb-3">
                &ldquo;
              </span>

              <p className="font-display text-base text-[var(--cream)] italic leading-[1.6]">
                {card.lesson}
              </p>

              {expandedWisdom === card.id && (
                <p className="font-body text-[13px] text-[var(--dim)] leading-[1.8] mt-4 font-light">
                  {card.expanded}
                </p>
              )}

              <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--dim)] mt-4">
                Room: {card.room}
              </p>
            </button>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          6. THE FOUNDER — Rohan section
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14">
        <div className="relative w-full aspect-[3/4] max-h-[70vh] overflow-hidden">
          <Image
            src="/lion-order/rohan-bw.jpg"
            alt="Rohan Marley"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
        </div>

        <div className="px-8 -mt-20 relative z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-3">
            The Founder
          </p>
          <h2 className="font-display text-3xl text-[var(--cream)] italic leading-tight mb-5">
            Rohan Marley
          </h2>
          <p className="font-body text-[14px] text-[var(--dim)] leading-[1.8] font-light mb-8">
            Son of Bob. Father of legacy. From the gridiron to the coffee fields of Jamaica, Rohan
            carries the frequency forward — building a house where culture, craft, and consciousness
            meet under one roof.
          </p>

          <Image
            src="/brand/rohan-signature.png"
            alt="Rohan Marley signature"
            width={140}
            height={48}
            className="opacity-60"
          />
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          7. THE MAISON — brand ecosystem
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">
          The Maison
        </p>

        <div className="space-y-4">
          {maison.map((brand) => (
            <div
              key={brand.name}
              className="border border-[var(--line)] bg-[var(--panel)] p-6 flex items-start gap-4"
            >
              <Image
                src={brand.crest}
                alt={brand.name}
                width={32}
                height={32}
                className="opacity-70 mt-0.5 shrink-0"
              />
              <div>
                <p className="font-display text-base text-[var(--cream)] leading-snug mb-1">
                  {brand.name}
                </p>
                <p className="font-body text-[12px] text-[var(--dim)] leading-[1.7] font-light">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          8. COMMUNITY — lifestyle strip
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">
          Community
        </p>

        <div className="flex gap-3 overflow-x-auto px-6 pb-2 scrollbar-hide">
          {communityImages.map((img) => (
            <div
              key={img.label}
              className="relative w-40 aspect-square shrink-0 overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-2 left-3 text-[9px] tracking-[0.3em] uppercase text-[var(--cream)]">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          9. FEATURED STORIES — video cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6 text-center">
          Featured
        </p>

        <div className="space-y-4">
          {featuredVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => video.videoId && watchVideo(video.videoId, video.title)}
              className="block border border-[var(--line)] bg-[var(--panel)] overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4">
                <p className="font-display text-sm text-[var(--cream)] leading-snug">
                  {video.title}
                </p>
                {video.channel && (
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] mt-1">
                    {video.channel}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          10. MISSION / VISION
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-8 py-16 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
          Our Mission
        </p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[320px] mx-auto mb-16">
          Create the highest quality goods that elevate consciousness and culture.
        </p>

        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
          Our Vision
        </p>
        <p className="font-display text-lg text-[var(--cream)] italic leading-[1.5] max-w-[320px] mx-auto">
          To awaken the lion in everyone.
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════════════════════════════════════════════════════════
          11. FOOTER
      ═══════════════════════════════════════════════════════════ */}
      <footer className="px-8 py-14 text-center">
        <Image
          src="/brand/lion-crest-icon.png"
          alt="Lion Order"
          width={36}
          height={36}
          className="mx-auto mb-4 opacity-40"
        />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; Est. 2022
        </p>
      </footer>
    </div>
  );
}
