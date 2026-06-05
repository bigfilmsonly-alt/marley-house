'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { X, ExternalLink, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFocusTrap } from '@/lib/useFocusTrap';

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
  const trapRef = useFocusTrap(!!state);

  return (
    <AnimatePresence>
      {state && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-black/80 z-[75] backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            ref={trapRef}
            role="dialog"
            aria-modal="true"
            aria-label={state.title || 'External link'}
            initial={{ y: '100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => { if (info.offset.y > 120) onClose(); }}
            transition={{ duration: 0.7, ease: [0.16, 0.6, 0.3, 1] }}
            className="fixed inset-0 z-[76] bg-[var(--bg)] flex flex-col overflow-hidden md:left-1/2 md:-translate-x-1/2 md:max-w-[390px]"
          >
            {/* Browser chrome */}
            <div className="shrink-0 flex items-center gap-2 px-3 py-2.5 border-b border-[var(--line)] bg-[var(--panel)]">
              <button onClick={onClose} aria-label="Close browser" className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
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
