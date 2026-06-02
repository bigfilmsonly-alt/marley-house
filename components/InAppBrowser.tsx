'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { X, ExternalLink, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BrowserState {
  url: string;
  title?: string;
}

interface InAppBrowserContextValue {
  openLink: (url: string, title?: string) => void;
}

const InAppBrowserContext = createContext<InAppBrowserContextValue>({
  openLink: () => {},
});

export function useInAppBrowser() {
  return useContext(InAppBrowserContext);
}

/** Wraps an <a> tag — opens in the in-app browser instead of navigating away */
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
    <button
      onClick={() => openLink(href, title)}
      className={className}
    >
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
            className="fixed inset-0 bg-black/70 z-[80] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-0 top-8 z-[81] bg-[var(--bg)] rounded-t-2xl flex flex-col overflow-hidden md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
          >
            {/* Browser chrome */}
            <div className="shrink-0 flex items-center gap-2 px-3 py-2.5 border-b border-[var(--line)] bg-[var(--bg2)]">
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                <X size={16} className="text-[var(--dim)]" />
              </button>
              <div className="flex-1 flex items-center gap-1.5 rounded-lg bg-[var(--bg)] border border-[var(--line)] px-3 py-1.5 min-w-0">
                <Globe size={11} className="text-[var(--dim)] shrink-0" />
                <span className="text-[11px] text-[var(--dim)] truncate">
                  {extractDomain(state.url)}
                </span>
              </div>
              <a
                href={state.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink size={14} className="text-[var(--dim)]" />
              </a>
            </div>

            {/* Title bar */}
            {state.title && (
              <div className="shrink-0 px-4 py-2 border-b border-[var(--line)]">
                <p className="text-xs text-[var(--cream)] font-medium truncate">{state.title}</p>
              </div>
            )}

            {/* iframe */}
            <div className="flex-1 relative bg-white">
              <iframe
                src={state.url}
                title={state.title || extractDomain(state.url)}
                className="absolute inset-0 w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
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
    <InAppBrowserContext.Provider value={{ openLink }}>
      {children}
      <BrowserOverlay state={state} onClose={close} />
    </InAppBrowserContext.Provider>
  );
}
