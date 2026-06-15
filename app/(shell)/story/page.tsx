'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ChevronDown, ChevronUp } from 'lucide-react';
import { stories } from '@/content/stories';
import { wisdomCards } from '@/content/wisdom';
import { storyVideos, sessionsPlaylist } from '@/content/videos';
import { roomOpen, dropRead, watchVideo } from '@/lib/tracking';

/* ── From the House feed entries ── */
const feedEntries = stories.map((s, i) => ({
  number: i + 1,
  tag: s.room,
  type: s.kind,
  title: s.title,
  body: s.body,
  id: s.id,
  videoId: s.video?.videoId,
}));

/* ── Room definitions ── */
const rooms = [
  { slug: 'legacy', name: 'Legacy', color: '#B5851E', count: stories.filter(s => s.room === 'legacy').length + wisdomCards.filter(w => w.room === 'legacy').length },
  { slug: 'fire', name: 'Fire', color: '#F6C800', count: stories.filter(s => s.room === 'fire').length + wisdomCards.filter(w => w.room === 'fire').length },
  { slug: 'healing', name: 'Healing', color: '#946312', count: wisdomCards.filter(w => w.room === 'coffee').length },
  { slug: 'music', name: 'Music', color: '#B5851E', count: stories.filter(s => s.room === 'music').length + wisdomCards.filter(w => w.room === 'music').length },
  { slug: 'movement', name: 'Movement', color: '#F6C800', count: 0 },
  { slug: 'story', name: 'Story', color: '#946312', count: stories.filter(s => s.room === 'family').length },
  { slug: 'future', name: 'Future', color: '#F6F1E6', count: stories.filter(s => s.room === 'future').length + wisdomCards.filter(w => w.room === 'future').length },
];

/* ── Characters ── */
const characters = [
  { name: 'King Clementine', image: '/brand/king-clem.jpg', role: 'The Saga', desc: 'A tale of heritage and sovereignty — the king who guards the roots of the order.' },
  { name: 'Kai & Suna', image: '/brand/kai-suna.jpg', role: 'The Guides', desc: 'Twin spirits of exploration and stillness — the compass points of the maison.' },
  { name: 'Runna Gyal', image: '/brand/runna-gyal.jpg', role: 'The Spirit', desc: 'The kinetic force — movement as medicine, speed as prayer.' },
];

/* ── Movement codes ── */
const codes = [
  'Strength of Spirit',
  'Fight for Justice',
  'Rastafari Virtues',
  'Provoke Consciousness',
  'Respect Your Nature',
  'High Quality',
];

/* ── Values ── */
const values = [
  { name: 'Exploration', text: 'Seeking truth through the natural world.' },
  { name: 'Excellence', text: 'The highest quality in everything we touch.' },
  { name: 'Legacy', text: 'Building what outlives us.' },
  { name: 'Healing', text: 'Reconnecting mind, body, and spirit.' },
  { name: 'Beauty', text: 'Finding the sacred in the everyday.' },
];

export default function StoryPage() {
  const [expandedFeed, setExpandedFeed] = useState(3);
  const [openWisdom, setOpenWisdom] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ WELCOME ═══════ */}
      <section className="px-8 pt-16 pb-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-6">Our Story</p>
        <h1 className="font-display text-[clamp(2rem,8vw,3rem)] leading-[1.1] tracking-[0.04em] uppercase text-[var(--cream)] mb-6">
          We&apos;ve Been Around<br /><span className="italic font-normal">A Long Time</span>
        </h1>
        <div className="gold-rule w-10 mx-auto mb-8" />
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[320px] mx-auto mb-6">
          Rastafari is a way of life, a mindset. Lion Order will forever be associated with Rastafari virtues. We seek the best genetics, the finest flower, and hold ourselves to the highest standard — because the culture demands it.
        </p>
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[320px] mx-auto">
          A movement led by Rohan Marley and a collection of professional athletes, activists, and visionaries around the world who seek everlasting change.
        </p>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ VISION & MISSION ═══════ */}
      <section className="px-8 py-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Brand Truth</p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="font-display text-lg text-[var(--cream)] italic">High Craft</span>
          <span className="text-[var(--gold)] text-xl">+</span>
          <span className="font-display text-lg text-[var(--cream)] italic">Cultural Connectivity</span>
        </div>
        <div className="gold-rule w-8 mx-auto mb-6" />
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {['Integrity', 'Valor', 'Self-Reflection', 'Self-Empowerment', 'Self-Love'].map((v) => (
            <span key={v} className="text-[var(--dim)] text-xs tracking-[0.1em]">{v}</span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-1 max-w-[280px] mx-auto text-left">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]">Mission</p>
          <p className="text-[var(--cream)] text-xs font-light italic leading-[1.6]">Create the highest quality goods that elevate consciousness and culture.</p>
          <div className="col-span-2 gold-rule my-4" />
          <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]">Vision</p>
          <p className="text-[var(--cream)] text-xs font-light italic leading-[1.6]">To awaken the lion in everyone.</p>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ FROM THE HOUSE — numbered feed ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">From the House</p>

        <div className="space-y-4">
          {feedEntries.slice(0, expandedFeed).map((entry) => (
            <div key={entry.id} className="border border-[var(--line)] bg-[var(--panel)] p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-2xl text-[var(--gold)] leading-none">
                  {String(entry.number).padStart(2, '0')}
                </span>
                <div className="flex gap-2 items-center">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)] border border-[var(--line)] px-2 py-0.5">
                    {entry.tag}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)]">
                    {entry.type}
                  </span>
                </div>
              </div>
              <p className="font-display text-base text-[var(--cream)] mb-2">{entry.title}</p>
              <p className="text-[var(--dim)] text-[13px] font-light leading-[1.8]">{entry.body}</p>

              {entry.videoId && (
                <div className="mt-4">
                  {playingVideo === entry.id ? (
                    <div className="relative w-full aspect-video bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${entry.videoId}?autoplay=1&rel=0`}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => { setPlayingVideo(entry.id); watchVideo(entry.videoId!, entry.title); }}
                      className="flex items-center gap-2 text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase hover:text-[var(--cream)] transition-colors"
                    >
                      <Play size={12} /> Watch
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {expandedFeed < feedEntries.length && (
          <button
            onClick={() => setExpandedFeed((p) => Math.min(p + 3, feedEntries.length))}
            className="w-full mt-6 border border-[var(--line)] py-3 text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] hover:bg-[var(--panel)] transition-colors"
          >
            More from the House
          </button>
        )}
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ ENTER A ROOM ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Enter a Room</p>
        <div className="grid grid-cols-2 gap-3">
          {rooms.map((r) => (
            <Link
              key={r.slug}
              href={`/story/rooms/${r.slug}`}
              onClick={() => roomOpen(r.slug)}
              className="border border-[var(--line)] bg-[var(--panel)] p-6 text-center hover:border-[var(--gold)]/30 transition-colors block"
            >
              <div className="w-2.5 h-2.5 rounded-full mx-auto mb-3" style={{ background: r.color }} />
              <p className="font-display text-sm text-[var(--cream)] tracking-[0.1em] uppercase mb-1">{r.name}</p>
              {r.count > 0 && (
                <p className="text-[var(--dim)] text-[9px]">{r.count} {r.count === 1 ? 'entry' : 'entries'}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ VALUES ═══════ */}
      <section className="px-8 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Our Values</p>
        <div className="space-y-6">
          {values.map((v, i) => (
            <div key={v.name} className="text-center">
              <p className="font-display text-xl text-[var(--cream)] mb-1">{v.name}</p>
              <p className="text-[var(--dim)] text-xs font-light tracking-wide">{v.text}</p>
              {i < values.length - 1 && <div className="w-6 h-px bg-[var(--gold)]/20 mx-auto mt-6" />}
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ THE MOVEMENT ═══════ */}
      <section className="px-8 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">The Movement</p>
        <h2 className="font-display text-2xl text-[var(--cream)] text-center leading-[1.3] mb-10 italic">
          Find the Lion Within
        </h2>
        <div className="space-y-4">
          {codes.map((c) => (
            <div key={c} className="flex items-center gap-4 py-3 border-b border-[var(--line)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <p className="font-display text-base text-[var(--cream)]">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ KING CLEMENTINE SAGA ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">The Saga</p>
        <div className="space-y-4">
          {characters.map((c) => (
            <div key={c.name} className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden">
              <div className="relative h-52">
                <Image src={c.image} alt={c.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d07] via-[#120d07]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-1">{c.role}</p>
                  <p className="font-display text-xl text-[var(--cream)]">{c.name}</p>
                </div>
              </div>
              <div className="p-5 pt-3">
                <p className="text-[var(--dim)] text-xs font-light leading-[1.8]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ WISDOM CARDS ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Wisdom</p>
        <div className="space-y-3">
          {wisdomCards.map((w) => (
            <button
              key={w.id}
              onClick={() => setOpenWisdom(openWisdom === w.id ? null : w.id)}
              className="w-full text-left border border-[var(--line)] bg-[var(--panel)] p-5 hover:border-[var(--gold)]/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-sm text-[var(--cream)] italic leading-[1.5]">{w.lesson}</p>
                {openWisdom === w.id ? (
                  <ChevronUp size={14} className="text-[var(--gold)] shrink-0 mt-1" />
                ) : (
                  <ChevronDown size={14} className="text-[var(--dim)] shrink-0 mt-1" />
                )}
              </div>
              {openWisdom === w.id && (
                <div className="mt-4 pt-4 border-t border-[var(--line)]">
                  <p className="text-[var(--dim)] text-xs font-light leading-[1.8]">{w.expanded}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)]/60 mt-3">{w.room}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ WATCH — House Sessions ═══════ */}
      <section className="px-6 py-14">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4 text-center">Watch</p>
        <p className="text-[var(--dim)] text-xs text-center mb-8 font-light">House Sessions + Brand Films</p>

        {/* Sessions playlist */}
        <div className="border border-[var(--line)] bg-[var(--panel)] overflow-hidden mb-4">
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
              <p className="absolute bottom-4 left-0 right-0 text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] text-center">
                House Sessions — Playlist
              </p>
            </button>
          )}
        </div>

        {/* Brand films */}
        <div className="space-y-2">
          {storyVideos.slice(0, 3).map((v) => (
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
                  <div>
                    <p className="text-[var(--cream)] text-sm font-light">{v.title}</p>
                    {v.channel && <p className="text-[var(--dim)] text-[10px] mt-0.5">{v.channel}</p>}
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/watch"
          className="block mt-6 border border-[var(--line)] py-3 text-center text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] hover:bg-[var(--panel)] transition-colors"
        >
          All Videos
        </Link>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ ROHAN PORTRAIT ═══════ */}
      <section className="px-8 py-14 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">The Founder</p>
        <h2 className="font-display text-3xl text-[var(--cream)] leading-[1.1] mb-6 tracking-[0.04em] uppercase">
          Rohan<br />Marley
        </h2>
        <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto mb-8">
          Rohan&apos;s taste acts like a stamp of approval. His association with the brand signals both authenticity and quality. A symbol of heritage, purpose, and uncompromising craft.
        </p>
        <Image
          src="/brand/rohan-signature.png"
          alt="Rohan Marley signature"
          width={140}
          height={45}
          className="mx-auto opacity-50 mb-4"
        />
        <p className="text-[var(--dim)] text-[9px] tracking-[0.2em] uppercase">
          @romarley
        </p>
      </section>

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; The Story
        </p>
      </footer>
    </div>
  );
}
