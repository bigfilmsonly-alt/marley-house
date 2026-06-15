import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';
import ScrollRestoreMain from '@/components/ScrollRestoreMain';
import FooterLogos from '@/components/FooterLogos';
import { PlayerProvider } from '@/components/PlayerContext';
import { InAppBrowserProvider, BrowserPanel } from '@/components/InAppBrowser';

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

          {/* Content area — browser overlay renders on top of this */}
          <div className="flex-1 relative overflow-hidden">
            <ScrollRestoreMain>
              {children}
            </ScrollRestoreMain>
            <BrowserPanel />
          </div>

          <MiniPlayer />

          {/* Brand logos — homepage only */}
          <FooterLogos />

          {/* Tab bar — ALWAYS visible, even when browser is open */}
          <TabBar />
        </div>
        <Threshold />
      </DeviceFrame>
      </InAppBrowserProvider>
    </PlayerProvider>
  );
}
