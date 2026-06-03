'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Coffee, Play, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { tabView } from '@/lib/tracking';
import { useInAppBrowser } from '@/components/InAppBrowser';

interface Tab {
  href: string;
  icon: LucideIcon;
  label: string;
  embed?: { url: string; title: string };
  splash?: boolean;
}

const tabs: Tab[] = [
  { href: '/', icon: Home, label: 'Home', splash: true },
  { href: '/coffee', icon: Coffee, label: 'Coffee', embed: { url: 'https://marleycoffee.com', title: 'Marley Coffee' }, splash: true },
  { href: '/watch', icon: Play, label: 'Watch', splash: true },
  { href: '/lion-order', icon: Crown, label: 'Lion Order', embed: { url: 'https://lionorder.com', title: 'Lion Order' }, splash: true },
];

export default function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { openLink } = useInAppBrowser();
  const [splashTab, setSplashTab] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [coffeeSlide, setCoffeeSlide] = useState(0);

  const splashImages: Record<string, { src: string; alt: string }> = {
    'Lion Order': { src: '/brand/lion-order-wordmark-gold.jpg', alt: 'Lion Order' },
    'Coffee': { src: '/brand/marley-coffee-lion-gold.png', alt: 'Marley Coffee' },
    'Home': { src: '/brand/rhr-monogram-transparent.png', alt: 'R-M' },
    'Watch': { src: '/brand/lion-crest-clean.png', alt: 'Lion Order' },
  };

  const coffeeSlides = [
    { src: '/brand/marley-coffee-lion-gold.png', alt: 'Marley Coffee' },
    { src: '/brand/coffee-slide-1.jpg', alt: 'Marley Coffee Collection' },
    { src: '/brand/coffee-slide-2.webp', alt: 'One Love Blend' },
    { src: '/brand/coffee-slide-3.webp', alt: 'Lively Up Blend' },
    { src: '/brand/coffee-slide-4.webp', alt: 'Get Up Stand Up Blend' },
    { src: '/brand/coffee-slide-5.webp', alt: 'Buffalo Soldier Blend' },
  ];

  function handleSplashTab(tab: Tab) {
    setSplashTab(tab.label);
    setIsFading(false);
    setCoffeeSlide(0);
    tabView(tab.label);

    if (tab.label === 'Coffee') {
      // Coffee slideshow: cycle through 6 slides (2s each = 12s), then navigate
      let slide = 0;
      const interval = setInterval(() => {
        slide++;
        if (slide < 6) {
          setCoffeeSlide(slide);
        } else {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(() => {
            setSplashTab(null);
            setIsFading(false);
            if (tab.embed) openLink(tab.embed.url, tab.embed.title);
          }, 1200);
        }
      }, 2000);
    } else {
      // Standard splash: hold 3s, fade, navigate
      setTimeout(() => setIsFading(true), 3000);
      setTimeout(() => {
        setSplashTab(null);
        setIsFading(false);
        if (tab.embed) {
          openLink(tab.embed.url, tab.embed.title);
        } else {
          router.push(tab.href);
        }
      }, 4200);
    }
  }

  return (
    <>
      {/* Brand splash overlay — buttery smooth */}
      <AnimatePresence>
        {splashTab && splashImages[splashTab] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={isFading
              ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
              : { duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-[#0b0805]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isFading
                ? { opacity: 0, scale: 1.04 }
                : { opacity: 1, scale: 1 }}
              transition={isFading
                ? { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
                : { delay: 0.4, duration: 2.5, ease: [0.22, 0.68, 0.36, 1.0] }}
            >
              <Image
                src={splashTab === 'Coffee' ? coffeeSlides[coffeeSlide].src : splashImages[splashTab].src}
                alt={splashTab === 'Coffee' ? coffeeSlides[coffeeSlide].alt : splashImages[splashTab].alt}
                width={500}
                height={500}
                className={`brightness-125 h-auto ${splashTab === 'Home' ? 'w-[70vw] max-w-[280px]' : 'w-[85vw] max-w-[500px]'}`}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex items-center justify-around border-t border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-xl">
        <div className="flex items-center justify-around w-full px-1 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {tabs.map((tab) => {
            const active =
              tab.href === '/' ? pathname === '/' : pathname.startsWith(tab.href);

            const inner = (
              <>
                <motion.div
                  whileTap={{ scale: 0.82 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  className="relative"
                >
                  {active && (
                    <motion.div
                      layoutId="tab-glow"
                      className="absolute -inset-2 rounded-full bg-[var(--gold)]/10 blur-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <tab.icon
                    size={20}
                    className={
                      active
                        ? 'text-[var(--gold)] relative z-10'
                        : 'text-[var(--dim)] relative z-10'
                    }
                    strokeWidth={active ? 2 : 1.4}
                  />
                </motion.div>
                <span
                  className={`font-display text-[9px] tracking-[0.12em] uppercase ${
                    active
                      ? 'text-[var(--gold)] font-medium'
                      : 'text-[var(--dim)] font-light'
                  }`}
                >
                  {tab.label}
                </span>
              </>
            );

            if (tab.splash) {
              return (
                <button
                  key={tab.href}
                  onClick={() => handleSplashTab(tab)}
                  className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
                >
                  {inner}
                </button>
              );
            }

            if (tab.embed) {
              return (
                <button
                  key={tab.href}
                  onClick={() => {
                    openLink(tab.embed!.url, tab.embed!.title);
                    tabView(tab.label);
                  }}
                  className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
                >
                  {inner}
                </button>
              );
            }

            return (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => tabView(tab.label)}
                className="flex flex-col items-center gap-0.5 px-2 py-1 relative"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
