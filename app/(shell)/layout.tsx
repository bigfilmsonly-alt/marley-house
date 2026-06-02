import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';

import ExitIntent from '@/components/ExitIntent';
import SlideInCTA from '@/components/SlideInCTA';
import StickyHeaderCTA from '@/components/StickyHeaderCTA';
import FloatingContact from '@/components/FloatingContact';
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
          {/* Rasta stripe */}
          <div className="shrink-0">
            <div className="rasta-stripe" />
          </div>
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
          <MiniPlayer />
          <TabBar />
        </div>
        <Threshold />
        <StickyHeaderCTA />
        <ExitIntent />
        <SlideInCTA />
        <FloatingContact />
      </DeviceFrame>
      </InAppBrowserProvider>
    </PlayerProvider>
  );
}
