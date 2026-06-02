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
          <SplashReturn />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-[var(--gold)] focus:text-[var(--bg)] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm">
            Skip to content
          </a>
          <ScrollRestoreMain>
            {children}
          </ScrollRestoreMain>
          <MiniPlayer />
          <TabBar />
        </div>
        <Threshold />
      </DeviceFrame>
      </InAppBrowserProvider>
    </PlayerProvider>
  );
}
