import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';
import ScrollRestoreMain from '@/components/ScrollRestoreMain';
import { PlayerProvider } from '@/components/PlayerContext';
import { InAppBrowserProvider } from '@/components/InAppBrowser';

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
          <div className="flex-shrink-0 bg-[var(--bg)] pt-3 pb-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img src="/brand/marley-enterprise.png" alt="Marley Enterprise" width="90" height="90" className="brightness-125" />
              <img src="/brand/lion-order-crest.png" alt="Lion Order" width="90" height="90" className="brightness-110" />
              <img src="/brand/lion-crest-clean.png" alt="Lion Order Crest" width="90" height="90" className="brightness-125" />
            </div>
            <p style={{ color: '#b8a87f', fontSize: '7px', letterSpacing: '0.3em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 500 }}>
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
