export const colors = {
  bg: '#0B0805',
  panel: '#120d07',
  ink: '#231B10',
  cream: '#F6F1E6',
  dim: '#946312',
  gold: '#F6C800',
  goldDeep: '#946312',
  goldSoft: '#B5851E',
  bright: '#F6C800',
  royal: '#F6C800',
  green: '#1E5A38',
  tan: '#ECE3D0',
} as const;

export const roomAccents: Record<string, string> = {
  legacy: '#B5851E',
  fire: '#F6C800',
  healing: '#946312',
  music: '#B5851E',
  movement: '#F6C800',
  story: '#946312',
  future: '#F6F1E6',
  coffee: '#946312',
  wisdom: '#B5851E',
  family: '#946312',
};

export const tabGlows: Record<string, string> = {
  '/': '#B5851E',
  '/story': '#F6C800',
  '/brand': '#B5851E',
  '/identity': '#946312',
  '/book': '#946312',
  '/connect': '#F6C800',
  '/watch': '#B5851E',
  '/lion-order': '#F6C800',
  '/coffee': '#946312',
  '/merch': '#B5851E',
  '/ask': '#946312',
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
