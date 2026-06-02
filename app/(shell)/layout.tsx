import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';
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
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
          <MiniPlayer />
          <TabBar />
        </div>
        <Threshold />
      </DeviceFrame>
      </InAppBrowserProvider>
    </PlayerProvider>
  );
}
