'use client';

import { useState } from 'react';
import ConnectedProperties from '@/components/ConnectedProperties';
import JoinHouse from '@/components/JoinHouse';
import WeatherDisplay from '@/components/WeatherDisplay';
import VideoPlayer from '@/components/VideoPlayer';
import FooterNewsletter from '@/components/FooterNewsletter';
import { Flame, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { stories } from '@/content/stories';
import { roomAccents } from '@/lib/theme';

const rooms = [
  { name: 'Coffee', color: '#c98a3c' },
  { name: 'Fire', color: '#e2622f' },
  { name: 'Wisdom', color: '#d8b15a' },
  { name: 'Music', color: '#7ba36e' },
  { name: 'Legacy', color: '#b98a5a' },
  { name: 'Family', color: '#caa15e' },
  { name: 'Future', color: '#86b4cc' },
];

const featuredStory = stories.find((s) => s.featured);
const storyStream = stories.filter((s) => s !== featuredStory);

export default function HomePage() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Weather + Coffee Ritual */}
      <WeatherDisplay />

      {/* Hero Video */}
      <VideoPlayer
        playlistId="PLC7UTUpH-pK182kGnMXGHcutFSDNYZrYP"
        title="House Sessions — Marley Coffee"
        thumbnail="https://img.youtube.com/vi/XE-uV_DsurA/maxresdefault.jpg"
        hero
      />

      {/* Daily Drop */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] font-medium">
            Daily Drop
          </p>
          <span className="text-[9px] tracking-wider uppercase text-[var(--dim)] bg-[var(--bg2)] px-2 py-0.5 rounded-full border border-[var(--line)]">
            Today
          </span>
        </div>
        {featuredStory && (
          <div className="relative rounded-2xl overflow-hidden bg-[var(--bg2)] border border-[var(--line)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold)]/[0.04] to-transparent" />
            <div className="relative p-6 py-10 text-center">
              <Flame size={28} className="text-[var(--gold)] mx-auto mb-3 opacity-60" strokeWidth={1.5} />
              <p className="font-display text-lg text-[var(--cream)] font-light italic leading-relaxed">
                {featuredStory.title}
              </p>
              <p className="text-[var(--dim)] text-sm font-light mt-3 leading-relaxed px-2">
                {featuredStory.body}
              </p>
              <p className="text-[var(--dim)] text-[10px] font-light mt-3 capitalize">
                {featuredStory.room} Room
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Quick actions */}
      <div className="px-6 pb-6 flex gap-2">
        <Link href="/watch" className="flex-1 rounded-xl bg-[var(--ember)]/8 border border-[var(--ember)]/15 p-3 flex items-center gap-2 group">
          <span className="text-xs text-[var(--cream)]">Watch</span>
          <ChevronRight size={12} className="text-[var(--ember)] ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
        <Link href="/coffee" className="flex-1 rounded-xl bg-[var(--room-coffee)]/8 border border-[var(--room-coffee)]/15 p-3 flex items-center gap-2 group">
          <span className="text-xs text-[var(--cream)]">Shop</span>
          <ChevronRight size={12} className="text-[var(--room-coffee)] ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
        <Link href="/ask" className="flex-1 rounded-xl bg-[var(--gold)]/8 border border-[var(--gold)]/15 p-3 flex items-center gap-2 group">
          <span className="text-xs text-[var(--cream)]">Ask</span>
          <ChevronRight size={12} className="text-[var(--gold)] ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* Story stream — multi-room */}
      <div className="px-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] mb-4 font-medium">
          From the House
        </p>
        <div className="space-y-3">
          {storyStream.map((story, i) => (
            <div
              key={story.id}
              className="rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-4 flex gap-4"
            >
              <span className="font-display italic text-xl opacity-60 shrink-0 w-6" style={{ color: roomAccents[story.room] }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: roomAccents[story.room] }} />
                  <p className="text-[10px] tracking-[0.15em] uppercase font-medium capitalize" style={{ color: roomAccents[story.room] }}>
                    {story.room}
                  </p>
                  <span className="text-[var(--dim)] text-[9px] font-light">&middot; {story.kind}</span>
                </div>
                <p className="font-display text-sm text-[var(--cream)] font-light leading-relaxed">
                  {story.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rooms rail */}
      <div className="px-6 pb-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--dim)] mb-4 font-medium">
          Enter a Room
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="shrink-0 w-20 rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-3 text-center cursor-pointer hover:border-[var(--gold)]/20 transition-colors"
            >
              <div
                className="w-8 h-8 rounded-full mx-auto mb-2"
                style={{
                  background: `radial-gradient(circle, ${room.color}35, ${room.color}08)`,
                  boxShadow: `0 0 24px ${room.color}12`,
                }}
              />
              <p className="text-[10px] text-[var(--dim)] font-light">{room.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lion Order — connected property */}
      <div className="px-6 pb-6">
        <a
          href="https://lionorder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-[var(--ember)]/30 p-4 bg-gradient-to-br from-[var(--ember)]/[0.08] to-transparent"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--ember)]/15 flex items-center justify-center shrink-0">
              <Flame size={18} className="text-[var(--ember)]" />
            </div>
            <div className="flex-1">
              <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--ember)] mb-0.5 font-medium">
                Connected Property
              </p>
              <p className="font-display text-lg text-[var(--cream)] font-light">Lion Order</p>
              <p className="text-[var(--dim)] text-xs font-light mt-1 leading-relaxed">
                A roots-luxury lifestyle movement. The sister house to Marley House.
              </p>
            </div>
            <ArrowUpRight size={16} className="text-[var(--ember)] shrink-0 mt-1" />
          </div>
        </a>
      </div>

      {/* Join the House CTA */}
      <div className="px-6 pb-6">
        <button
          onClick={() => setJoinOpen(true)}
          className="w-full rounded-xl border border-[var(--gold)]/20 bg-gradient-to-b from-[var(--gold)]/[0.06] to-transparent p-5 text-center"
        >
          <Sparkles size={18} className="text-[var(--gold)] mx-auto mb-2" />
          <p className="font-display text-base text-[var(--cream)] font-light">Join the House</p>
          <p className="text-[var(--dim)] text-[10px] font-light mt-1">
            Daily drops &middot; stories &middot; first access
          </p>
        </button>
      </div>

      {/* Footer Newsletter */}
      <FooterNewsletter />

      <div className="px-6"><div className="border-t border-[var(--line)]" /></div>

      {/* Connected Properties */}
      <div className="pt-6">
        <ConnectedProperties />
      </div>

      <JoinHouse open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  );
}
