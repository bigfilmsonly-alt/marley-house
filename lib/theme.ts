export const colors = {
  bg: '#F7F4ED',
  bg2: '#FFFFFF',
  cream: '#1A1610',
  dim: '#6B6358',
  gold: '#D4A800',
  goldDeep: '#B8920A',
  ember: '#e2622f',
  green: '#009B3A',
  blue: '#1B8ED4',
  jaGreen: '#009B3A',
  jaGold: '#FED100',
  jaBlack: '#1A1610',
} as const;

export const roomAccents: Record<string, string> = {
  coffee: '#A06830',
  fire: '#e2622f',
  wisdom: '#D4A800',
  music: '#009B3A',
  legacy: '#8B6E4E',
  family: '#D4A800',
  future: '#1B8ED4',
};

export const tabGlows: Record<string, string> = {
  '/': '#FED100',
  '/coffee': '#A06830',
  '/watch': '#e2622f',
  '/vault': '#8B6E4E',
  '/ask': '#D4A800',
};

// WMO weather codes → condition + suggested coffee
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
