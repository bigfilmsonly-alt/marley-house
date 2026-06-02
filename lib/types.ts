export type Room = 'coffee' | 'fire' | 'wisdom' | 'music' | 'legacy' | 'family' | 'future';

export interface Story {
  id: string;
  room: Room;
  title: string;
  body: string;
  kind: 'reflection' | 'lesson' | 'journal' | 'video';
  video?: VideoRef;
  date?: string;
  featured?: boolean;
}

export interface VideoRef {
  id: string;
  title: string;
  source: 'youtube';
  videoId?: string;
  playlistId?: string;
  channel?: string;
  category: 'sessions' | 'story' | 'podcast' | 'interview' | 'coffee' | 'taste' | 'football' | 'lifestyle' | 'music';
}

export interface Product {
  id: string;
  name: string;
  roast: string;
  notes: string;
  origin: string;
  price: number;
  badges: string[];
  image?: string;
  prototype: true;
}

export interface WisdomCard {
  id: string;
  lesson: string;
  room: Room;
  expanded: string;
}

export interface BrandLink {
  id: string;
  name: string;
  category: 'coffee' | 'rohan' | 'ventures' | 'music';
  url: string;
  handle?: string;
  metric?: string;
  status: 'active' | 'dormant' | 'licensed' | 'verify';
}

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  condition: string;
  icon: string;
}

export interface CoffeeRitual {
  blend: string;
  message: string;
}
