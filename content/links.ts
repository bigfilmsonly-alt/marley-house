import type { BrandLink } from '@/lib/types';

export const brandLinks: BrandLink[] = [
  // Coffee
  { id: 'mc-site', name: 'Marley Coffee', category: 'coffee', url: 'https://marleycoffee.com/', status: 'active' },
  { id: 'mc-ig', name: 'Marley Coffee IG', category: 'coffee', url: 'https://www.instagram.com/marleycoffee/', handle: '@marleycoffee', status: 'active' },
  { id: 'mc-fb', name: 'Marley Coffee FB', category: 'coffee', url: 'https://www.facebook.com/MarleyCoffee/', status: 'active' },
  { id: 'mc-x', name: 'Marley Coffee X', category: 'coffee', url: 'https://x.com/MarleyCoffee', handle: '@MarleyCoffee', metric: '54K followers', status: 'dormant' },
  { id: 'mc-latam-yt', name: 'Marley Coffee Latam YT', category: 'coffee', url: 'https://www.youtube.com/@MarleyCoffeeLatam', status: 'active' },
  { id: 'mc-latam-site', name: 'Marley Coffee Chile', category: 'coffee', url: 'https://www.marleycoffee.cl/', status: 'verify' },

  // Rohan Marley
  { id: 'rm-ig', name: 'Rohan Marley IG', category: 'rohan', url: 'https://www.instagram.com/romarley/', handle: '@romarley', metric: '663K followers', status: 'active' },
  { id: 'rm-li', name: 'Rohan Marley LinkedIn', category: 'rohan', url: 'https://www.linkedin.com/in/rohanmarley', status: 'active' },
  { id: 'rm-site', name: 'Rohan Marley', category: 'rohan', url: 'https://rohanmarley.com/', status: 'verify' },

  // Ventures
  { id: 'lo-site', name: 'Lion Order', category: 'ventures', url: 'https://lionorder.com/', status: 'active' },
  { id: 'lo-ig', name: 'Lion Order IG', category: 'ventures', url: 'https://www.instagram.com/lionorder/', handle: '@lionorder', status: 'verify' },
  { id: 'rb-site', name: 'RoMarley Beach House', category: 'ventures', url: 'https://www.romarleybeachhouse.com/', status: 'active' },
  { id: 'rb-ig', name: 'RoMarley Beach House IG', category: 'ventures', url: 'https://www.instagram.com/romarleybeachhouse/', status: 'active' },
  { id: 'hom-site', name: 'House of Marley', category: 'ventures', url: 'https://thehouseofmarley.com/', status: 'licensed' },
  { id: 'hom-ig', name: 'House of Marley IG', category: 'ventures', url: 'https://www.instagram.com/houseofmarley/', handle: '@houseofmarley', status: 'licensed' },
  { id: 'hom-yt', name: 'House of Marley YT', category: 'ventures', url: 'https://www.youtube.com/user/TheHouseofMarley', status: 'licensed' },

  // Music Legacy
  { id: 'bm-site', name: 'Bob Marley Official', category: 'music', url: 'https://www.bobmarley.com/', status: 'licensed' },
  { id: 'bm-shop', name: 'Bob Marley Shop', category: 'music', url: 'https://shop.bobmarley.com/', status: 'licensed' },
  { id: 'tg-site', name: 'Tuff Gong', category: 'music', url: 'https://www.tuffgong.com/', status: 'licensed' },
  { id: 'tg-x', name: 'Tuff Gong X', category: 'music', url: 'https://x.com/tuffgongintl', handle: '@tuffgongintl', status: 'licensed' },
  { id: 'tg-music', name: 'Tuff Gong Music', category: 'music', url: 'https://tuffgongmusic.com/', status: 'licensed' },
  { id: 'tg-radio-ig', name: 'Tuff Gong Radio IG', category: 'music', url: 'https://www.instagram.com/tuffgongradio/', handle: '@tuffgongradio', status: 'licensed' },
  { id: 'tg-tv', name: 'Tuff Gong Television', category: 'music', url: 'https://www.youtube.com/user/TuffGongTelevision', status: 'licensed' },
  { id: 'tg-ww', name: 'Tuff Gong Worldwide', category: 'music', url: 'http://www.tuffgongworldwide.com/', status: 'licensed' },
];
