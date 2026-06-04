import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';
import ScrollRestoreMain from '@/components/ScrollRestoreMain';
import { PlayerProvider } from '@/components/PlayerContext';
import { InAppBrowserProvider } from '@/components/InAppBrowser';
import SplashReturn from '@/components/SplashReturn';

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlayerProvider>
      <InAppBrowserProvider>
      <DeviceFrame>
        <div className="flex flex-col h-full">
          {/* Maison gold rule */}
          <div className="shrink-0">
            <div className="gold-rule" />
          </div>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-[var(--gold)] focus:text-[var(--bg)] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm">
            Skip to content
          </a>
          <ScrollRestoreMain>
            {children}
          </ScrollRestoreMain>
          <MiniPlayer />

          {/* Brand logos — right above tabs */}
          <div className="flex-shrink-0 pt-4 pb-2 bg-black">
            <div className="flex items-center justify-center gap-3 mb-3 px-4">
              <img src="/brand/lion-head-gold.png" alt="Lion Order" width="110" height="110" className="brightness-125" />
              <SplashReturn />
              <img src="/brand/lion-crest-clean.png" alt="Lion Order Crest" width="110" height="110" className="brightness-125" />
            </div>
            <p style={{ color: '#E8C23A', fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 500, marginBottom: '2px' }}>
              Lion Order · Est. 2022
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 500 }}>
              One Love. One House. One Order.
            </p>
          </div>

          <TabBar />
        </div>
        <Threshold />
      </DeviceFrame>
      </InAppBrowserProvider>
    </PlayerProvider>
  );
}
