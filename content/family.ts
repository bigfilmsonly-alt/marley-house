export interface FamilyMember {
  slug: string;
  name: string;
  relation: string;
  born: string;
  genre: string;
  bio: string;
  spotifyUrl: string;
  instagramHandle: string;
  officialUrl: string;
  isFactualOnly: boolean;
}

export const familyMembers: FamilyMember[] = [
  {
    slug: 'bob-marley',
    name: 'Bob Marley',
    relation: 'Patriarch. Father of Rohan Marley. Grandfather of YG Marley.',
    born: '1945-02-06',
    genre: 'Reggae, Ska, Rocksteady',
    bio: 'Robert Nesta Marley OM (1945–1981) was a Jamaican singer-songwriter and musician. Considered one of the pioneers of reggae, his music incorporated elements of ska, rocksteady, and reggae. He is the father of Rohan Marley and grandfather of YG Marley.',
    spotifyUrl: 'https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD',
    instagramHandle: '',
    officialUrl: 'https://www.bobmarley.com',
    isFactualOnly: true,
  },
  {
    slug: 'lauryn-hill',
    name: 'Lauryn Hill',
    relation: 'Mother of YG Marley. Shares children with Rohan Marley.',
    born: '1975-05-26',
    genre: 'Hip-Hop, R&B, Neo-Soul, Reggae',
    bio: 'Lauryn Noelle Hill is an American singer, rapper, and songwriter. A founding member of the Fugees, she is known for The Miseducation of Lauryn Hill. She is the mother of YG Marley and shares children with Rohan Marley.',
    spotifyUrl: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ',
    instagramHandle: 'maborsha',
    officialUrl: 'https://mslaurynhill.com',
    isFactualOnly: true,
  },
  {
    slug: 'rohan-marley',
    name: 'Rohan Marley',
    relation: 'Son of Bob Marley and Janet Hunt. Father of YG Marley.',
    born: '1972-05-19',
    genre: 'Entrepreneur',
    bio: 'Rohan Marley is a Jamaican-American entrepreneur and the son of Bob Marley. He is the founder of Marley Coffee and leads The Marley Group, spanning coffee, cannabis, hospitality, and media.',
    spotifyUrl: '',
    instagramHandle: 'roaborohan',
    officialUrl: 'https://marley-house.vercel.app',
    isFactualOnly: false,
  },
  {
    slug: 'yg-marley',
    name: 'YG Marley',
    relation: 'Son of Rohan Marley and Lauryn Hill. Grandson of Bob Marley.',
    born: '1999-02-12',
    genre: 'Reggae, Soul, Contemporary',
    bio: 'YG Marley is a Jamaican-American singer-songwriter, son of Rohan Marley and Lauryn Hill. He rose to global fame with "Praise Jah in the Moonlight" and carries the Marley musical legacy into the next generation.',
    spotifyUrl: 'https://open.spotify.com/search/yg%20marley',
    instagramHandle: 'ygmarley',
    officialUrl: '',
    isFactualOnly: false,
  },
  {
    slug: 'ziggy-marley',
    name: 'Ziggy Marley',
    relation: 'Eldest son of Bob Marley and Rita Marley.',
    born: '1968-10-17',
    genre: 'Reggae, World Music',
    bio: 'David Nesta "Ziggy" Marley is a Jamaican musician, singer, songwriter, and philanthropist. The eldest son of Bob Marley and Rita Marley, he has won eight Grammy Awards across a career spanning more than four decades.',
    spotifyUrl: 'https://open.spotify.com/artist/4VnomLtKTm7Ahe6VBkGsC0',
    instagramHandle: 'ziggymarley',
    officialUrl: 'https://www.ziggymarley.com',
    isFactualOnly: false,
  },
  {
    slug: 'stephen-marley',
    name: 'Stephen Marley',
    relation: 'Son of Bob Marley and Rita Marley.',
    born: '1972-04-20',
    genre: 'Reggae, Hip-Hop, R&B',
    bio: 'Stephen Robert Nesta Marley is a Jamaican-American musician, singer, songwriter, and producer. He has won eight Grammy Awards both as a solo artist and as a producer for his siblings.',
    spotifyUrl: 'https://open.spotify.com/artist/4GRszIrMbP4UbJoYSRIbot',
    instagramHandle: 'stephenmarley',
    officialUrl: 'https://www.stephenmarley.com',
    isFactualOnly: false,
  },
  {
    slug: 'julian-marley',
    name: 'Julian Marley',
    relation: 'Son of Bob Marley and Lucy Pounder.',
    born: '1975-06-04',
    genre: 'Reggae, Roots Reggae',
    bio: 'Julian Ricardo Marley is a Jamaican-British reggae musician, singer, songwriter, and producer. He won the Grammy Award for Best Reggae Album with "As I Am" (2022).',
    spotifyUrl: 'https://open.spotify.com/artist/3sNVsGU96cFHiUbOeTMgbE',
    instagramHandle: 'julianrmarley',
    officialUrl: 'https://www.julianmarley.com',
    isFactualOnly: false,
  },
  {
    slug: 'ky-mani-marley',
    name: 'Ky-Mani Marley',
    relation: 'Son of Bob Marley and Anita Belnavis.',
    born: '1976-02-26',
    genre: 'Reggae, Hip-Hop, Dancehall',
    bio: 'Ky-Mani Marley is a Jamaican musician, rapper, singer, and actor. The son of Bob Marley and Anita Belnavis, he is known for his Grammy-nominated music and his starring role in the film Shottas (2002).',
    spotifyUrl: 'https://open.spotify.com/artist/6fOMl44jA6Bo1pvfRtMzdT',
    instagramHandle: 'kaboroots',
    officialUrl: '',
    isFactualOnly: false,
  },
  {
    slug: 'skip-marley',
    name: 'Skip Marley',
    relation: 'Grandson of Bob Marley. Son of Cedella Marley.',
    born: '1996-06-04',
    genre: 'Reggae, R&B, Pop',
    bio: 'Skip Marley is a Jamaican singer-songwriter and the grandson of Bob Marley through his mother Cedella Marley. Signed to Island Records, he is known for "Slow Down" with H.E.R. and "Lions."',
    spotifyUrl: 'https://open.spotify.com/artist/0Lhtz2KBPZ3cFGbBKbacPn',
    instagramHandle: 'skipmarley',
    officialUrl: '',
    isFactualOnly: false,
  },
];

export function getFamilyMember(slug: string): FamilyMember | undefined {
  return familyMembers.find((m) => m.slug === slug);
}

export function getArtistMembers(): FamilyMember[] {
  return familyMembers.filter((m) => m.genre !== 'Entrepreneur');
}
