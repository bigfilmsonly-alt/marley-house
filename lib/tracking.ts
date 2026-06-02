// Unified tracking: GA4 (dataLayer) + Meta Pixel (fbq)
// All events fire to both when available

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(Object.fromEntries(args.map((a, i) => [i === 0 ? 'event' : `param_${i}`, a])));
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
}

function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  // GA4 via dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: name, ...params });
  }
  // Meta Pixel custom event
  fbq('trackCustom', name, params);
}

// ── Marley House Events ──

export function joinHouse(source: string) {
  trackEvent('joinHouse', { source });
}

export function blendQuizComplete(blend: string) {
  trackEvent('blendQuizComplete', { blend });
}

export function addToBag(productId: string) {
  trackEvent('addToBag', { productId });
}

export function watchVideo(videoId: string, title: string) {
  trackEvent('watchVideo', { videoId, title });
}

export function askSubmit() {
  trackEvent('askSubmit');
}

export function bookInquiry(type: string) {
  trackEvent('bookInquiry', { type });
}

export function buttonClick(name: string, location: string) {
  trackEvent('buttonClick', { name, location });
}

// Re-export for direct use
export { trackEvent, gtag };
