'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { tabGlows } from '@/lib/theme';

function getGlowColor(pathname: string): string {
  const match = Object.entries(tabGlows).find(([path]) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)
  );
  return match?.[1] ?? '#d8b15a';
}

export default function DeviceFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const glow = getGlowColor(pathname);

  return (
    <div className="device-wrapper film-grain">
      <div
        className="device-ambient"
        style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)` }}
      />

      <div className="device-shell">
        <div className="device-notch" />
        <div className="device-btn device-btn--silent" />
        <div className="device-btn device-btn--vol-up" />
        <div className="device-btn device-btn--vol-down" />
        <div className="device-btn device-btn--power" />

        <div className="device-viewport">
          {children}
        </div>
      </div>
    </div>
  );
}
