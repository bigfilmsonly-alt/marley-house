export interface Artist {
  slug: string;
  name: string;
  genre: 'reggae' | 'afrobeats' | 'dancehall' | 'reggae-fusion';
  country: string;
  bio: string;
  spotifyUrl: string;
  instagramHandle: string;
  collaboration: string;
}

export const artists: Artist[] = [
  {
    slug: 'damian-marley',
    name: 'Damian Marley',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'The youngest son of Bob Marley and two-time Grammy winner. His album Distant Relatives with Nas bridged reggae and hip-hop for a new generation.',
    spotifyUrl: 'https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW',
    instagramHandle: '@damianmarley',
    collaboration: 'Brother to Rohan. Co-steward of the Marley family legacy across music, cannabis, and cultural enterprise.',
  },
  {
    slug: 'stephen-marley',
    name: 'Stephen Marley',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'Eight-time Grammy winner and producer behind some of the Marley catalogue\'s most vital modern recordings.',
    spotifyUrl: 'https://open.spotify.com/artist/6KpCMFryGEIKzYGat9xJFR',
    instagramHandle: '@stephenmarley',
    collaboration: 'Brother to Rohan. Executive producer on multiple Marley family projects and Tuff Gong recordings.',
  },
  {
    slug: 'julian-marley',
    name: 'Julian Marley',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'Grammy-winning roots reggae artist whose album As I Am earned international acclaim. A keeper of the acoustic Marley tradition.',
    spotifyUrl: 'https://open.spotify.com/artist/0BKnRap3KWoYPjsQsarDby',
    instagramHandle: '@julianmarley',
    collaboration: 'Brother to Rohan. Collaborates across Marley family tours and Lion Order cultural events.',
  },
  {
    slug: 'skip-marley',
    name: 'Skip Marley',
    genre: 'reggae-fusion',
    country: 'Jamaica',
    bio: 'Grandson of Bob Marley who broke through with "Slow Down" featuring H.E.R., reaching number one on the Billboard reggae chart.',
    spotifyUrl: 'https://open.spotify.com/artist/4iOLqSEYMPkNTMxLOosoap',
    instagramHandle: '@skipmarley',
    collaboration: 'Nephew to Rohan. Carries the Marley sound into mainstream pop and R&B crossover territory.',
  },
  {
    slug: 'ziggy-marley',
    name: 'Ziggy Marley',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'Eight-time Grammy winner and eldest son of Bob Marley. His solo career and Melody Makers catalogue define modern roots reggae.',
    spotifyUrl: 'https://open.spotify.com/artist/4dVDRjkFHYKejsfJjByDAX',
    instagramHandle: '@ziggymarley',
    collaboration: 'Brother to Rohan. Shared stewardship of the Bob Marley legacy, Tuff Gong, and family brand governance.',
  },
  {
    slug: 'davido',
    name: 'Davido',
    genre: 'afrobeats',
    country: 'Nigeria',
    bio: 'Global Afrobeats icon and hitmaker behind "Fall," "If," and "Unavailable." One of the most streamed African artists in history.',
    spotifyUrl: 'https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh',
    instagramHandle: '@davido',
    collaboration: 'Collaborated with YG Marley, bridging the Marley reggae lineage with West African Afrobeats on a global stage.',
  },
  {
    slug: 'burna-boy',
    name: 'Burna Boy',
    genre: 'afrobeats',
    country: 'Nigeria',
    bio: 'Grammy-winning Afro-fusion pioneer whose album African Giant established reggae-dancehall as a pillar of modern Afrobeats.',
    spotifyUrl: 'https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa',
    instagramHandle: '@burnaboygram',
    collaboration: 'Deep reggae-dancehall influence traced to Bob Marley. Performed alongside Damian Marley and cites the Marley legacy as foundational.',
  },
  {
    slug: 'chronixx',
    name: 'Chronixx',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'Leading voice of the Jamaican reggae revival. His album Chronology earned a Grammy nomination and critical global acclaim.',
    spotifyUrl: 'https://open.spotify.com/artist/7aYwjEmp2yJvYAhYOLlHi0',
    instagramHandle: '@chraborealchronixx',
    collaboration: 'Part of the modern Jamaican roots movement championed by the Marley family. Performed at Marley-affiliated festivals and events.',
  },
  {
    slug: 'protoje',
    name: 'Protoje',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'Grammy-nominated reggae artist and founder of In.Digg.Nation collective. His album In Search of Lost Time is a modern reggae landmark.',
    spotifyUrl: 'https://open.spotify.com/artist/5BUMH0FfauTWERPWgdBPa2',
    instagramHandle: '@protlojemusic',
    collaboration: 'Signed to In.Digg.Nation, closely aligned with the Marley-era reggae revival. Toured with Stephen and Damian Marley.',
  },
  {
    slug: 'koffee',
    name: 'Koffee',
    genre: 'reggae',
    country: 'Jamaica',
    bio: 'Youngest ever Grammy winner for Best Reggae Album with Rapture. Her sound merges roots reggae with dancehall and pop sensibilities.',
    spotifyUrl: 'https://open.spotify.com/artist/4ZUNH3kgbpLDqFfFLjCi2j',
    instagramHandle: '@originalkoffee',
    collaboration: 'Mentored within the Jamaican music ecosystem the Marley family helped build. Carries forward the positive-message tradition Bob Marley defined.',
  },
  {
    slug: 'shenseea',
    name: 'Shenseea',
    genre: 'dancehall',
    country: 'Jamaica',
    bio: 'Dancehall and pop crossover artist whose debut album Alpha featured collaborations with Kanye West, Megan Thee Stallion, and 21 Savage.',
    spotifyUrl: 'https://open.spotify.com/artist/7Eve4MznVasNlhN3kWWpfD',
    instagramHandle: '@shaboreshenseea',
    collaboration: 'Part of the new Jamaican wave connected to Tuff Gong\'s cultural orbit. Represents the dancehall-pop evolution the Marley name helped globalize.',
  },
  {
    slug: 'sean-paul',
    name: 'Sean Paul',
    genre: 'dancehall',
    country: 'Jamaica',
    bio: 'Grammy-winning dancehall ambassador who brought Jamaican music to mainstream pop with "Get Busy," "Temperature," and dozens of global hits.',
    spotifyUrl: 'https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9',
    instagramHandle: '@dutaboreduttypaul',
    collaboration: 'Long-standing figure in the Jamaican music ecosystem alongside the Marley family. Shared stages and industry infrastructure for decades.',
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getAllArtistSlugs(): { artist: string }[] {
  return artists.map((a) => ({ artist: a.slug }));
}

export function getArtistsByGenre(genre: Artist['genre']): Artist[] {
  return artists.filter((a) => a.genre === genre);
}
