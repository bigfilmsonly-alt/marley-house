export interface City {
  slug: string;
  name: string;
  region: string;
  description: string;
  hasDispensaries: boolean;
  hasCoffee: boolean;
  hasStay: boolean;
  lat: number;
  lng: number;
}

export const cities: City[] = [
  {
    slug: 'miami',
    name: 'Miami',
    region: 'FL',
    description:
      'The Marley Group\'s cultural gateway to Latin America and the Caribbean, where coffee, cannabis, and hospitality converge in the Magic City.',
    hasDispensaries: true,
    hasCoffee: true,
    hasStay: false,
    lat: 25.7617,
    lng: -80.1918,
  },
  {
    slug: 'kingston',
    name: 'Kingston',
    region: 'Jamaica',
    description:
      'The spiritual home of the Marley family. Kingston is where Marley Coffee is sourced, RoMarley Beach House welcomes guests, and every venture draws its roots.',
    hasDispensaries: false,
    hasCoffee: true,
    hasStay: true,
    lat: 18.0179,
    lng: -76.8099,
  },
  {
    slug: 'new-york',
    name: 'New York',
    region: 'NY',
    description:
      'From Harlem to Brooklyn, The Marley Group connects with New York\'s tastemakers through specialty coffee, pop-up events, and cultural programming.',
    hasDispensaries: true,
    hasCoffee: true,
    hasStay: false,
    lat: 40.7128,
    lng: -74.006,
  },
  {
    slug: 'los-angeles',
    name: 'Los Angeles',
    region: 'CA',
    description:
      'The Marley Group\'s West Coast hub. Los Angeles is home to Lion Order dispensary partnerships, Marley Coffee retail, and entertainment collaborations.',
    hasDispensaries: true,
    hasCoffee: true,
    hasStay: false,
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    slug: 'london',
    name: 'London',
    region: 'UK',
    description:
      'The Marley Group\'s European anchor. London hosts Marley Coffee stockists, cultural events, and a growing community rooted in the Caribbean diaspora.',
    hasDispensaries: false,
    hasCoffee: true,
    hasStay: false,
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    slug: 'toronto',
    name: 'Toronto',
    region: 'Canada',
    description:
      'Canada\'s multicultural capital and a key market for Marley Coffee and Lion Order. Toronto bridges North American reach with Caribbean culture.',
    hasDispensaries: false,
    hasCoffee: true,
    hasStay: false,
    lat: 43.6532,
    lng: -79.3832,
  },
  {
    slug: 'puerto-morelos',
    name: 'Puerto Morelos',
    region: 'Mexico',
    description:
      'A serene Riviera Maya hideaway where The Marley Group explores boutique hospitality and retreat experiences rooted in nature and mindfulness.',
    hasDispensaries: false,
    hasCoffee: true,
    hasStay: true,
    lat: 20.8431,
    lng: -86.8746,
  },
  {
    slug: 'atlanta',
    name: 'Atlanta',
    region: 'GA',
    description:
      'The cultural capital of the American South. Atlanta connects The Marley Group to hip-hop, entrepreneurship, and a rapidly growing coffee and cannabis market.',
    hasDispensaries: false,
    hasCoffee: true,
    hasStay: false,
    lat: 33.749,
    lng: -84.388,
  },
  {
    slug: 'sidama',
    name: 'Sidama',
    region: 'Ethiopia',
    description:
      'The birthplace of coffee itself. Sidama is where Marley Coffee sources single-origin Ethiopian beans, honoring the oldest coffee tradition on Earth.',
    hasDispensaries: false,
    hasCoffee: true,
    hasStay: false,
    lat: 6.7138,
    lng: 38.3729,
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): { city: string }[] {
  return cities.map((c) => ({ city: c.slug }));
}
