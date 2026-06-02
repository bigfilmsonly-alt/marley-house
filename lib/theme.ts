export const colors = {
  bg: '#0A0A0A',
  bg2: '#161616',
  cream: '#FAFAFA',
  dim: '#A1A1AA',
  gold: '#FED100',
  goldDeep: '#D4A800',
  ember: '#E2622F',
  green: '#009B3A',
  blue: '#1B8ED4',
  jaGreen: '#009B3A',
  jaGold: '#FED100',
} as const;

export const roomAccents: Record<string, string> = {
  coffee: '#D4A040',
  fire: '#E2622F',
  wisdom: '#FED100',
  music: '#22C55E',
  legacy: '#D4A040',
  family: '#FED100',
  future: '#38BDF8',
};

export const tabGlows: Record<string, string> = {
  '/': '#E2622F',
  '/coffee': '#D4A040',
  '/watch': '#E2622F',
  '/vault': '#FED100',
  '/ask': '#009B3A',
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
