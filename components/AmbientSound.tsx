'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Volume2, VolumeX } from 'lucide-react';

const ROOM_CHORDS: Record<string, string[]> = {
  '/':       ['C3', 'G3', 'C4', 'E4'],
  '/coffee': ['A2', 'E3', 'A3', 'C#4'],
  '/watch':  ['E2', 'B2', 'E3', 'G3'],
  '/vault':  ['G2', 'D3', 'G3', 'B3'],
  '/ask':    ['D3', 'A3', 'D4', 'F#4'],
};

export default function AmbientSound() {
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const synthRef = useRef<unknown>(null);
  const toneRef = useRef<typeof import('tone') | null>(null);
  const pathname = usePathname();

  const playChord = useCallback((path: string) => {
    const synth = synthRef.current as { releaseAll: () => void; triggerAttack: (notes: string[]) => void } | null;
    if (!synth) return;
    const chord = ROOM_CHORDS[path] ?? ROOM_CHORDS['/'];
    synth.releaseAll();
    synth.triggerAttack(chord);
  }, []);

  const toggle = useCallback(async () => {
    if (!on) {
      try {
        if (!toneRef.current) {
          toneRef.current = await import('tone');
        }
        const Tone = toneRef.current;
        await Tone.start();

        if (!synthRef.current) {
          const reverb = new Tone.Reverb({ decay: 9, wet: 0.55 }).toDestination();
          const filter = new Tone.Filter(620, 'lowpass').connect(reverb);
          const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'sine' },
            envelope: { attack: 5, decay: 1, sustain: 0.9, release: 7 },
          }).connect(filter);
          synth.volume.value = -22;
          synthRef.current = synth;
        }
        setReady(true);
        playChord(pathname);
        setOn(true);
      } catch {
        // Audio context failed — ignore gracefully
      }
    } else {
      const synth = synthRef.current as { releaseAll: () => void } | null;
      synth?.releaseAll();
      setOn(false);
    }
  }, [on, pathname, playChord]);

  // Change chord when navigating
  useEffect(() => {
    if (on && ready) playChord(pathname);
  }, [pathname, on, ready, playChord]);

  return (
    <button
      onClick={toggle}
      className="p-1.5 rounded-lg transition-colors"
      style={{
        background: on ? 'rgba(216,177,90,0.1)' : 'transparent',
        color: on ? 'var(--gold)' : 'var(--dim)',
      }}
      title={on ? 'Ambience on' : 'Ambience off'}
    >
      {on ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  );
}
