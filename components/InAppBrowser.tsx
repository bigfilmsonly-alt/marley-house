'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { X, ExternalLink, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrowserState {
  url: string;
  title?: string;
}

interface InAppBrowserContextValue {
  openLink: (url: string, title?: string) => void;
  close: () => void;
  isOpen: boolean;
}

const InAppBrowserContext = createContext<InAppBrowserContextValue>({
  openLink: () => {},
  close: () => {},
  isOpen: false,
});

export function useInAppBrowser() {
  return useContext(InAppBrowserContext);
}

export function AppLink({
  href,
  title,
  children,
  className,
}: {
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openLink } = useInAppBrowser();
  return (
    <button onClick={() => openLink(href, title)} className={className}>
      {children}
    </button>
  );
}

function extractDomain(url: string) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
}

function BrowserOverlay({ state, onClose }: { state: BrowserState | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {state && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[75]"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={state.title || 'External site'}
            initial={{ y: '100%', scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: '100%', scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 left-0 right-0 bottom-[calc(env(safe-area-inset-bottom,0px)+3.5rem)] z-[76] bg-white flex flex-col overflow-hidden md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
            <div className="shrink-0 flex items-center gap-2 px-2 py-1.5 bg-[var(--bg)] border-b border-[var(--line)]">
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
              >
                <ChevronDown size={14} className="text-white/70" />
                <span className="text-[10px] text-white/50 tracking-wider uppercase">Close</span>
              </button>
              <div className="flex-1 flex items-center justify-center min-w-0">
                <span className="text-[11px] text-[var(--gold)] font-semibold truncate brightness-110">
                  {state.title || extractDomain(state.url)}
                </span>
              </div>
              <a
                href={state.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                title="Open in browser"
              >
                <ExternalLink size={12} className="text-white/70" />
              </a>
            </div>
            <div className="flex-1 relative bg-white">
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg)]">
                <div className="w-8 h-8 border-2 border-[var(--gold)]/30 border-t-[var(--gold)] rounded-full animate-spin" />
              </div>
              <iframe
                src={state.url}
                title={state.title || extractDomain(state.url)}
                className="absolute inset-0 w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function InAppBrowserProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BrowserState | null>(null);

  const openLink = useCallback((url: string, title?: string) => {
    setState({ url, title });
  }, []);

  const close = useCallback(() => setState(null), []);

  return (
    <InAppBrowserContext.Provider value={{ openLink, close, isOpen: !!state }}>
      {children}
      <BrowserOverlay state={state} onClose={close} />
    </InAppBrowserContext.Provider>
  );
}
