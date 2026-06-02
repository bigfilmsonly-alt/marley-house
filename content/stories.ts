import type { Story } from '@/lib/types';

export const stories: Story[] = [
  {
    id: 'rooted-in-legacy',
    room: 'legacy',
    title: 'Rooted in Legacy',
    body: 'Every cup carries the weight of the mountain it grew on. The Marley name is not a brand — it is a root system. From the Blue Mountains of Jamaica to every kitchen table where the pot is on, the legacy moves through the ritual.',
    kind: 'reflection',
    video: {
      id: 'rooted-in-legacy',
      title: 'Rooted in Legacy — The Marley Coffee Story',
      source: 'youtube',
      videoId: '112LQ_4P9rI',
      channel: 'Marley Coffee',
      category: 'story',
    },
    featured: true,
  },
  {
    id: 'ritual-of-coffee',
    room: 'coffee',
    title: 'The Ritual of Coffee',
    body: 'It is never just coffee. It is the first act of the day — the one you do before the world asks anything of you. Grind, pour, wait. In the waiting is the teaching.',
    kind: 'reflection',
    featured: true,
  },
  {
    id: 'faith-over-fear',
    room: 'fire',
    title: 'Faith Over Fear',
    body: 'The fire does not ask permission. It takes what is dead and makes room for what is alive. Every mistake, every failure, every morning you got up anyway — that is the fire doing its work.',
    kind: 'lesson',
  },
  {
    id: 'tuff-gong-sessions',
    room: 'music',
    title: 'Tuff Gong Studio Sessions',
    body: 'The walls of Tuff Gong have heard more truth than most churches. Music is not entertainment here — it is testimony.',
    kind: 'journal',
  },
  {
    id: 'the-family-table',
    room: 'family',
    title: 'The Family Table',
    body: 'The house is built around a table. Not a boardroom, not a stage — a table. Where everyone eats the same food and no one sits above anyone else.',
    kind: 'reflection',
  },
  {
    id: 'future-forward',
    room: 'future',
    title: 'Building Forward',
    body: 'The next generation does not carry the legacy — they remix it. YG on the mic, new blends in the lab, new rooms in the house. The foundation stays. Everything else evolves.',
    kind: 'lesson',
  },
];
