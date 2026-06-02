import DeviceFrame from '@/components/DeviceFrame';
import TabBar from '@/components/TabBar';
import MiniPlayer from '@/components/MiniPlayer';
import Threshold from '@/components/Threshold';
import AmbientSound from '@/components/AmbientSound';
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
          {/* Top bar with ambient sound toggle */}
          <div className="flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-1 shrink-0">
            <span className="font-display text-sm text-[var(--gold)] italic">MH</span>
            <AmbientSound />
          </div>
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
          <MiniPlayer />
          <TabBar />
        </div>
        <Threshold />
      </DeviceFrame>
    </PlayerProvider>
  );
}
