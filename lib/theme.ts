export const colors = {
  bg: '#0b0805',
  panel: '#120d07',
  ink: '#1c1810',
  cream: '#F3E9D8',
  dim: '#b8a87f',
  gold: '#B98524',
  goldDeep: '#825B0D',
  bright: '#E8C23A',
  royal: '#EFC11F',
} as const;

export const roomAccents: Record<string, string> = {
  legacy: '#B98524',
  fire: '#E8C23A',
  healing: '#825B0D',
  music: '#B98524',
  movement: '#E8C23A',
  story: '#b8a87f',
  future: '#F3E9D8',
  coffee: '#825B0D',
  wisdom: '#B98524',
  family: '#b8a87f',
};

export const tabGlows: Record<string, string> = {
  '/': '#B98524',
  '/story': '#E8C23A',
  '/brand': '#B98524',
  '/identity': '#825B0D',
  '/book': '#b8a87f',
  '/connect': '#E8C23A',
  '/watch': '#B98524',
  '/lion-order': '#E8C23A',
  '/coffee': '#825B0D',
  '/merch': '#B98524',
  '/ask': '#825B0D',
};

export const weatherConditions: Record<number, { condition: string; icon: string }> = {
  0: { condition: 'Clear sky', icon: 'sun' },
  1: { condition: 'Mainly clear', icon: 'sun' },
  2: { condition: 'Partly cloudy', icon: 'cloud-sun' },
  3: { condition: 'Overcast', icon: 'cloud' },
  45: { condition: 'Foggy', icon: 'cloud-fog' },
  48: { condition: 'Rime fog', icon: 'cloud-fog' },
  51: { condition: 'Light drizzle', icon: 'cloud-drizzle' },
  53: { condition: 'Drizzle', icon: 'cloud-drizzle' },
  55: { condition: 'Dense drizzle', icon: 'cloud-drizzle' },
  61: { condition: 'Light rain', icon: 'cloud-rain' },
  63: { condition: 'Rain', icon: 'cloud-rain' },
  65: { condition: 'Heavy rain', icon: 'cloud-rain' },
  71: { condition: 'Light snow', icon: 'snowflake' },
  73: { condition: 'Snow', icon: 'snowflake' },
  75: { condition: 'Heavy snow', icon: 'snowflake' },
  80: { condition: 'Rain showers', icon: 'cloud-rain' },
  81: { condition: 'Moderate showers', icon: 'cloud-rain' },
  82: { condition: 'Violent showers', icon: 'cloud-rain' },
  95: { condition: 'Thunderstorm', icon: 'cloud-lightning' },
  96: { condition: 'Thunderstorm with hail', icon: 'cloud-lightning' },
  99: { condition: 'Thunderstorm with heavy hail', icon: 'cloud-lightning' },
};

export function getCoffeeForWeather(temp: number, code: number): { blend: string; message: string } {
  if (temp >= 30) return { blend: 'Simmer Down', message: 'Cool down with a smooth decaf over ice' };
  if (temp >= 25) return { blend: 'One Love', message: 'Balanced and smooth for a warm day' };
  if (code >= 61 && code <= 82) return { blend: 'Buffalo Soldier', message: 'Rich and bold to weather the storm' };
  if (code >= 45 && code <= 48) return { blend: 'Mystic Morning', message: 'A mystical blend for a misty day' };
  if (temp >= 18) return { blend: 'Get Up, Stand Up', message: 'Bright and nutty to start your day right' };
  if (temp >= 10) return { blend: 'Lively Up', message: 'Bold warmth for a cool morning' };
  return { blend: 'Jamaican Blue Mountain', message: 'Premium warmth for a cold day' };
}
