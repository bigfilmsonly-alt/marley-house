import { NextRequest, NextResponse } from 'next/server';
import { weatherConditions, getCoffeeForWeather } from '@/lib/theme';

export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get('lat') ?? '25.7617';
  const lon = req.nextUrl.searchParams.get('lon') ?? '-80.1918';

  try {
    // Open-Meteo: free, no API key needed
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto`;
    const res = await fetch(url, { next: { revalidate: 600 } }); // cache 10 min
    const data = await res.json();

    const current = data.current;
    const code = current.weather_code as number;
    const temp = current.temperature_2m as number;
    const info = weatherConditions[code] ?? { condition: 'Clear', icon: 'sun' };
    const ritual = getCoffeeForWeather(temp, code);

    // Reverse geocode for city name
    let city = 'Miami';
    try {
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`,
        { headers: { 'User-Agent': 'MarleyHouse/1.0' }, next: { revalidate: 3600 } }
      );
      const geoData = await geoRes.json();
      city =
        geoData.address?.city ??
        geoData.address?.town ??
        geoData.address?.village ??
        geoData.address?.county ??
        'Miami';
    } catch {
      // fallback to Miami
    }

    return NextResponse.json({
      temperature: temp,
      weatherCode: code,
      windSpeed: current.wind_speed_10m,
      humidity: current.relative_humidity_2m,
      condition: info.condition,
      icon: info.icon,
      ritual,
      city,
    });
  } catch {
    return NextResponse.json(
      { error: 'Weather unavailable' },
      { status: 502 }
    );
  }
}
