'use client';

import { useEffect, useState } from 'react';
import {
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudFog,
  CloudSun,
  Snowflake,
  Loader2,
  MapPin,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { WeatherData, CoffeeRitual } from '@/lib/types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  sun: Sun,
  cloud: Cloud,
  'cloud-rain': CloudRain,
  'cloud-drizzle': CloudDrizzle,
  'cloud-lightning': CloudLightning,
  'cloud-fog': CloudFog,
  'cloud-sun': CloudSun,
  snowflake: Snowflake,
};

export default function WeatherDisplay() {
  const [weather, setWeather] = useState<(WeatherData & { ritual: CoffeeRitual; city: string }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather(lat: number, lon: number) {
      try {
        const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        if (res.ok) {
          const data = await res.json();
          setWeather(data);
        }
      } catch {
        // Silently fail — weather is ambient, not critical
      } finally {
        setLoading(false);
      }
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(25.7617, -80.1918), // Default: Miami
        { timeout: 5000 }
      );
    } else {
      fetchWeather(25.7617, -80.1918);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 size={20} className="text-[var(--dim)] animate-spin" />
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = iconMap[weather.icon] || Sun;
  const tempF = Math.round(weather.temperature * 9 / 5 + 32);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative px-6 pt-14 pb-6"
      >
        {/* Ambient weather glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[100px] opacity-[0.08] pointer-events-none"
          style={{
            background: weather.temperature >= 25
              ? 'radial-gradient(circle, #d8b15a, transparent)'
              : weather.icon.includes('rain') || weather.icon.includes('drizzle')
              ? 'radial-gradient(circle, #86b4cc, transparent)'
              : 'radial-gradient(circle, #bdae97, transparent)',
          }}
        />

        <div className="relative">
          {/* Location */}
          <div className="flex items-center gap-1.5 mb-4">
            <MapPin size={12} className="text-[var(--dim)]" />
            <span className="text-[var(--dim)] text-xs tracking-widest uppercase font-light">
              {weather.city}
            </span>
          </div>

          {/* Temperature + condition */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-6xl font-light text-[var(--cream)] tracking-tight">
                  {tempF}
                </span>
                <span className="text-[var(--dim)] text-lg font-light">°F</span>
              </div>
              <p className="text-[var(--dim)] text-sm font-light mt-1">
                {weather.condition}
              </p>
            </div>
            <WeatherIcon
              size={48}
              className="text-[var(--gold)] opacity-60"
              strokeWidth={1.2}
            />
          </div>

          {/* Coffee ritual suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 pt-5 border-t border-[var(--line)]"
          >
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-1.5 font-medium">
              Today's ritual
            </p>
            <p className="font-display text-lg text-[var(--cream)] font-light italic">
              {weather.ritual.blend}
            </p>
            <p className="text-[var(--dim)] text-xs font-light mt-1">
              {weather.ritual.message}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
