'use client';

import { Music, Disc3, Headphones } from 'lucide-react';
import { AppLink } from '@/components/InAppBrowser';

interface Artist {
  name: string;
  role: string;
  spotify?: string;
  apple?: string;
  tidal?: string;
  amazon?: string;
  youtube?: string;
  accent: string;
}

const artists: Artist[] = [
  {
    name: 'Bob Marley & The Wailers',
    role: 'The foundation. The frequency.',
    spotify: 'https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD',
    apple: 'https://music.apple.com/us/artist/bob-marley-the-wailers/3174628',
    tidal: 'https://tidal.com/browse/artist/5927',
    amazon: 'https://music.amazon.com/artists/B000QJJU1K/bob-marley',
    youtube: 'https://www.youtube.com/bobmarley',
    accent: '#d8b15a',
  },
  {
    name: 'YG Marley',
    role: 'The next generation. Rohan\'s son.',
    spotify: 'https://open.spotify.com/artist/0n4Fao9kbjgM76RmVlfSwr',
    apple: 'https://music.apple.com/us/artist/yg-marley/1496864889',
    youtube: 'https://www.youtube.com/@ygmarley',
    accent: '#e2622f',
  },
  {
    name: 'Damian "Jr Gong" Marley',
    role: 'Youngest son. Grammy winner. Welcome to Jamrock.',
    spotify: 'https://open.spotify.com/artist/3QJzdZJYIAcoET1GcfpNGi',
    apple: 'https://music.apple.com/us/artist/damian-marley/1515131285',
    tidal: 'https://tidal.com/browse/artist/14976',
    accent: '#7ba36e',
  },
  {
    name: 'Ziggy Marley',
    role: 'Eight-time Grammy winner. Eldest son.',
    spotify: 'https://open.spotify.com/artist/0o0rlxlC3ApLWsxFkUjMXc',
    apple: 'https://music.apple.com/us/artist/ziggy-marley/74195147',
    accent: '#c98a3c',
  },
  {
    name: 'Stephen Marley',
    role: 'Nine-time Grammy winner. Producer. Second son.',
    spotify: 'https://open.spotify.com/artist/0CIwCGmQMqHqiblnZlFia1',
    apple: 'https://music.apple.com/us/artist/stephen-marley/993659',
    accent: '#86b4cc',
  },
];

interface StudioLink {
  name: string;
  url: string;
  description: string;
  status: 'active' | 'licensed';
}

const studioLinks: StudioLink[] = [
  { name: 'Tuff Gong International', url: 'https://www.tuffgong.com/', description: 'The legendary studio & label. Kingston, Jamaica.', status: 'licensed' },
  { name: 'Tuff Gong Television', url: 'https://www.youtube.com/user/TuffGongTelevision', description: 'Official YouTube — performances, sessions, archive.', status: 'licensed' },
  { name: 'Tuff Gong Radio', url: 'https://tuffgongmusic.com/', description: 'SiriusXM Channel 19 — 24/7 reggae.', status: 'licensed' },
  { name: 'Tuff Gong Worldwide', url: 'http://www.tuffgongworldwide.com/', description: 'Global distribution & publishing.', status: 'licensed' },
  { name: 'Bob Marley Official', url: 'https://www.bobmarley.com/', description: 'The official estate — news, history, merch.', status: 'licensed' },
  { name: 'Bob Marley Shop', url: 'https://shop.bobmarley.com/', description: 'Official merchandise & vinyl.', status: 'licensed' },
];

const platformIcons: Record<string, string> = {
  spotify: 'Spotify',
  apple: 'Apple Music',
  tidal: 'Tidal',
  amazon: 'Amazon',
  youtube: 'YouTube',
};

const platformColors: Record<string, string> = {
  spotify: '#1DB954',
  apple: '#FA243C',
  tidal: '#000000',
  amazon: '#FF9900',
  youtube: '#FF0000',
};

function PlatformPill({ platform, url, artistName }: { platform: string; url: string; artistName: string }) {
  return (
    <AppLink
      href={url}
      title={`${artistName} on ${platformIcons[platform]}`}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-medium transition-colors hover:brightness-110"
    >
      <span
        style={{
          borderColor: `${platformColors[platform]}30`,
          background: `${platformColors[platform]}10`,
          color: platform === 'tidal' ? 'var(--cream)' : platformColors[platform],
        }}
        className="contents"
      >
        {platformIcons[platform]}
      </span>
    </AppLink>
  );
}

export default function MusicPage() {
  return (
    <div className="relative min-h-full bg-[var(--bg)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[var(--room-music)] blur-[100px] opacity-[0.06] pointer-events-none" />

      {/* Header */}
      <div className="relative px-4 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Music size={16} className="text-[var(--room-music)]" strokeWidth={1.5} />
          <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--room-music)] font-medium">
            Music
          </p>
        </div>
        <h1 className="text-2xl font-bold text-[var(--cream)] tracking-tight">
          The Frequency Never Stops
        </h1>
        <p className="text-[var(--dim)] text-xs font-light mt-1">
          Stream the Marley legacy everywhere
        </p>
      </div>

      {/* Artists */}
      <div className="px-4 pb-6 space-y-4">
        {artists.map((artist) => {
          const platforms = (['spotify', 'apple', 'tidal', 'amazon', 'youtube'] as const).filter(
            (p) => artist[p]
          );

          return (
            <div
              key={artist.name}
              className="rounded-2xl bg-[var(--bg2)] border border-[var(--line)] overflow-hidden"
            >
              {/* Accent stripe */}
              <div className="h-0.5" style={{ background: artist.accent }} />

              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${artist.accent}15` }}
                  >
                    <Disc3 size={20} style={{ color: artist.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[var(--cream)]">{artist.name}</p>
                    <p className="text-[var(--dim)] text-[11px] font-light mt-0.5">{artist.role}</p>
                  </div>
                </div>

                {/* Platform pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {platforms.map((p) => (
                    <AppLink
                      key={p}
                      href={artist[p]!}
                      title={`${artist.name} on ${platformIcons[p]}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-medium transition-colors hover:brightness-110"
                    >
                      <span style={{ color: p === 'tidal' ? 'var(--cream)' : platformColors[p] }}>
                        {platformIcons[p]}
                      </span>
                    </AppLink>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tuff Gong & Legacy Links */}
      <div className="px-4 pb-6">
        <div className="flex items-center gap-2 mb-3">
          <Headphones size={14} className="text-[var(--gold)]" />
          <p className="text-sm font-semibold text-[var(--cream)]">Tuff Gong &amp; Legacy</p>
        </div>
        <div className="space-y-2">
          {studioLinks.map((link) => (
            <AppLink
              key={link.url}
              href={link.url}
              title={link.name}
              className="flex items-start gap-3 rounded-xl bg-[var(--bg2)] border border-[var(--line)] p-3 group hover:border-[var(--gold)]/20 transition-colors w-full text-left"
            >
              <div className="w-1 h-full rounded-full bg-[var(--gold)] shrink-0 self-stretch" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[var(--cream)]">{link.name}</p>
                <p className="text-[var(--dim)] text-[10px] font-light mt-0.5">{link.description}</p>
              </div>
              <span className="text-[8px] tracking-wider uppercase text-[var(--gold)] bg-[var(--gold)]/10 px-1.5 py-0.5 rounded-full border border-[var(--gold)]/15 shrink-0 mt-0.5">
                {link.status}
              </span>
            </AppLink>
          ))}
        </div>
      </div>

      {/* Quick Playlists */}
      <div className="px-4 pb-6">
        <p className="text-sm font-semibold text-[var(--cream)] mb-3">Playlists</p>
        <div className="space-y-2">
          <AppLink
            href="https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD"
            title="Bob Marley Essentials on Spotify"
            className="flex items-center gap-3 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/20 p-3 w-full text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1DB954]/20 flex items-center justify-center shrink-0">
              <Music size={16} className="text-[#1DB954]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--cream)]">Bob Marley Essentials</p>
              <p className="text-[#1DB954] text-[10px]">Spotify</p>
            </div>
          </AppLink>

          <AppLink
            href="https://music.apple.com/us/artist/bob-marley-the-wailers/3174628"
            title="Marley on Apple Music"
            className="flex items-center gap-3 rounded-xl bg-[#FA243C]/10 border border-[#FA243C]/20 p-3 w-full text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-[#FA243C]/20 flex items-center justify-center shrink-0">
              <Music size={16} className="text-[#FA243C]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--cream)]">Marley on Apple Music</p>
              <p className="text-[#FA243C] text-[10px]">Apple Music</p>
            </div>
          </AppLink>

          <AppLink
            href="https://tidal.com/browse/artist/5927"
            title="Bob Marley on Tidal"
            className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 w-full text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Music size={16} className="text-[var(--cream)]" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--cream)]">Bob Marley on Tidal</p>
              <p className="text-[var(--dim)] text-[10px]">Tidal Hi-Res</p>
            </div>
          </AppLink>
        </div>
      </div>

      {/* Quote */}
      <div className="px-4 pb-10">
        <div className="rounded-2xl border border-[var(--room-music)]/20 bg-[var(--room-music)]/[0.04] p-5 text-center">
          <div className="rasta-stripe w-12 mx-auto mb-4" />
          <p className="font-display text-base text-[var(--cream)] font-light italic leading-relaxed">
            &ldquo;One good thing about music, when it hits you, you feel no pain.&rdquo;
          </p>
          <p className="text-[var(--dim)] text-[10px] font-light mt-3">
            Bob Marley
          </p>
        </div>
      </div>
    </div>
  );
}
