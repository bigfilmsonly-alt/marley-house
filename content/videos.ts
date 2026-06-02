import type { VideoRef } from '@/lib/types';

export const videos: VideoRef[] = [
  {
    id: 'marley-coffee-brand-film',
    title: 'Marley Coffee Brand Film',
    source: 'youtube',
    videoId: 'XE-uV_DsurA',
    channel: 'Marley Coffee',
    category: 'story',
  },
  {
    id: 'rooted-in-legacy',
    title: 'Rooted in Legacy — The Marley Coffee Story',
    source: 'youtube',
    videoId: '112LQ_4P9rI',
    channel: 'Marley Coffee',
    category: 'story',
  },
  {
    id: 'house-sessions-playlist',
    title: 'House Sessions — Preparaciones',
    source: 'youtube',
    playlistId: 'PLC7UTUpH-pK182kGnMXGHcutFSDNYZrYP',
    channel: 'Marley Coffee Latam',
    category: 'sessions',
  },
];

export const channels = [
  { name: 'Marley Coffee Latam', url: 'https://www.youtube.com/@MarleyCoffeeLatam' },
  { name: 'Tuff Gong Television', url: 'https://www.youtube.com/user/TuffGongTelevision' },
  { name: 'House of Marley', url: 'https://www.youtube.com/user/TheHouseofMarley' },
];
