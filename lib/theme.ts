export const colors = {
  bg: '#f7f3ea',
  bg2: '#FFFFFF',
  ivory: '#f7f3ea',
  bone: '#efe8d8',
  ink: '#14110c',
  cream: '#14110c',
  dim: '#6B6358',
  // Lion Order Brand Colors
  royaltyYellow: '#F4C71F',
  antiqueGold1: '#B98524',
  antiqueGold2: '#825B0D',
  gold: '#F4C71F',
  goldDeep: '#B98524',
  goldHi: '#F4C71F',
  ember: '#F4C71F',
  green: '#825B0D',
  blue: '#14110c',
} as const;

export const roomAccents: Record<string, string> = {
  coffee: '#B98524',
  fire: '#B98524',
  wisdom: '#B98524',
  music: '#B98524',
  legacy: '#825B0D',
  family: '#B98524',
  future: '#B98524',
};

export const tabGlows: Record<string, string> = {
  '/': '#F4C71F',
  '/coffee': '#F4C71F',
  '/watch': '#F4C71F',
  '/vault': '#B98524',
  '/merch': '#F4C71F',
  '/ask': '#B98524',
  '/lion-order': '#F4C71F',
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
