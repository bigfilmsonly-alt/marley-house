'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';
import { useState } from 'react';
import { stories } from '@/content/stories';
import { wisdomCards } from '@/content/wisdom';

const roomMeta: Record<string, { name: string; color: string; desc: string; mappedRooms: string[] }> = {
  legacy: { name: 'Legacy', color: '#B98524', desc: 'Building what outlives us. The root system that holds everything up.', mappedRooms: ['legacy'] },
  fire: { name: 'Fire', color: '#F6C800', desc: 'The fire does not ask permission. Every failure was fuel.', mappedRooms: ['fire'] },
  healing: { name: 'Healing', color: '#825B0D', desc: 'Reconnecting mind, body, and spirit. The ritual of presence.', mappedRooms: ['coffee', 'wisdom'] },
  music: { name: 'Music', color: '#B98524', desc: 'The frequency carries. The house holds the sound.', mappedRooms: ['music'] },
  movement: { name: 'Movement', color: '#F6C800', desc: 'Speed as prayer. The kinetic force of the maison.', mappedRooms: ['movement'] },
  story: { name: 'Story', color: '#b8a87f', desc: 'The table is the truest meeting room. Family is the foundation.', mappedRooms: ['family'] },
  future: { name: 'Future', color: '#F3E9D8', desc: 'The next generation does not carry the legacy — they remix it.', mappedRooms: ['future'] },
};

export default function RoomPage() {
  const { room } = useParams<{ room: string }>();
  const meta = roomMeta[room] || { name: room, color: '#B98524', desc: '', mappedRooms: [room] };
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const roomStories = stories.filter((s) => meta.mappedRooms.includes(s.room));
  const roomWisdom = wisdomCards.filter((w) => meta.mappedRooms.includes(w.room));

  return (
    <div className="relative min-h-full bg-[var(--bg)]">

      {/* ═══════ HEADER ═══════ */}
      <section className="px-8 pt-6 pb-14">
        <Link
          href="/story"
          className="inline-flex items-center gap-2 text-[var(--dim)] text-[10px] tracking-[0.2em] uppercase mb-10 hover:text-[var(--gold)] transition-colors"
        >
          <ArrowLeft size={12} /> Rooms
        </Link>

        <div className="text-center">
          <div className="w-4 h-4 rounded-full mx-auto mb-6" style={{ background: meta.color }} />
          <h1 className="font-display text-[clamp(2rem,8vw,3rem)] leading-[1.1] tracking-[0.06em] uppercase text-[var(--cream)] mb-6">
            {meta.name}
          </h1>
          <div className="gold-rule w-10 mx-auto mb-6" />
          <p className="text-[var(--dim)] text-sm font-light leading-[1.9] max-w-[300px] mx-auto">
            {meta.desc}
          </p>
        </div>
      </section>

      <div className="gold-rule mx-8" />

      {/* ═══════ STORIES ═══════ */}
      {roomStories.length > 0 && (
        <section className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">
            From the House &middot; {meta.name}
          </p>
          <div className="space-y-4">
            {roomStories.map((s, i) => (
              <div key={s.id} className="border border-[var(--line)] bg-[var(--panel)] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-2xl text-[var(--gold)] leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--dim)]">{s.kind}</span>
                </div>
                <p className="font-display text-base text-[var(--cream)] mb-2">{s.title}</p>
                <p className="text-[var(--dim)] text-[13px] font-light leading-[1.8]">{s.body}</p>

                {s.video?.videoId && (
                  <div className="mt-4">
                    {playingVideo === s.id ? (
                      <div className="relative w-full aspect-video bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${s.video.videoId}?autoplay=1&rel=0`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() => setPlayingVideo(s.id)}
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
        </section>
      )}

      {roomStories.length > 0 && roomWisdom.length > 0 && <div className="gold-rule mx-8" />}

      {/* ═══════ WISDOM ═══════ */}
      {roomWisdom.length > 0 && (
        <section className="px-6 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--gold)] mb-8 text-center">Wisdom</p>
          <div className="space-y-4">
            {roomWisdom.map((w) => (
              <div key={w.id} className="border border-[var(--line)] bg-[var(--panel)] p-6">
                <p className="font-display text-sm text-[var(--cream)] italic leading-[1.6] mb-3">
                  &ldquo;{w.lesson}&rdquo;
                </p>
                <p className="text-[var(--dim)] text-xs font-light leading-[1.8]">{w.expanded}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {roomStories.length === 0 && roomWisdom.length === 0 && (
        <section className="px-8 py-14 text-center">
          <p className="text-[var(--dim)] text-sm font-light">This room is being prepared.</p>
        </section>
      )}

      <footer className="px-8 pb-12 text-center">
        <div className="gold-rule mb-8" />
        <p className="text-[var(--dim)] text-[8px] tracking-[0.3em] uppercase">
          Lion Order &middot; {meta.name} Room
        </p>
      </footer>
    </div>
  );
}
