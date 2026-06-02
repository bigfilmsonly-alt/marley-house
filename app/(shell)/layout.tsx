import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';
import AmbientSound from '@/components/AmbientSound';
import ExitIntent from '@/components/ExitIntent';
import SlideInCTA from '@/components/SlideInCTA';
import StickyHeaderCTA from '@/components/StickyHeaderCTA';
import FloatingContact from '@/components/FloatingContact';
import { PlayerProvider } from '@/components/PlayerContext';

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlayerProvider>
      <DeviceFrame>
        <div className="flex flex-col h-full">
          {/* Rasta stripe + top bar */}
          <div className="shrink-0">
            <div className="rasta-stripe" />
            <div className="flex items-center justify-between px-4 pt-2 pb-1 bg-black/50 backdrop-blur-sm">
              <span className="font-display text-sm font-semibold tracking-tight">
                <span className="text-[var(--ember)]">MARLEY</span>
                <span className="text-[var(--ja-gold)] ml-1">HOUSE</span>
              </span>
              <AmbientSound />
            </div>
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
    </PlayerProvider>
  );
}
