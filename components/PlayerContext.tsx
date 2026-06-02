'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface PlayerState {
  videoId?: string;
  playlistId?: string;
  title: string;
}

interface PlayerContextType {
  current: PlayerState | null;
  play: (state: PlayerState) => void;
  stop: () => void;
}

const PlayerContext = createContext<PlayerContextType>({
  current: null,
  play: () => {},
  stop: () => {},
});

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<PlayerState | null>(null);

  const play = useCallback((state: PlayerState) => setCurrent(state), []);
  const stop = useCallback(() => setCurrent(null), []);

  return (
    <PlayerContext.Provider value={{ current, play, stop }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
