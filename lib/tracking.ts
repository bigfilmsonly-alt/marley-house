// Unified tracking: GA4 (dataLayer) + Meta Pixel (fbq)
// All events fire to both when available

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  // GA4 via dataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: name, ...params });
  }
  // Meta Pixel custom event
  fbq('trackCustom', name, params);
}

// ── Lion Order / R-M Events ──

export function enterApp() {
  trackEvent('enter');
}

export function tabView(tab: string) {
  trackEvent('tabView', { tab });
}

export function roomOpen(room: string) {
  trackEvent('roomOpen', { room });
}

export function dropRead(dropNumber: number, tag: string) {
  trackEvent('dropRead', { dropNumber, tag });
}

export function joinHouse(source: string) {
  trackEvent('joinHouse', { source });
}

export function linkOut(name: string, url: string) {
  trackEvent('linkOut', { name, url });
}

export function watchVideo(videoId: string, title: string) {
  trackEvent('watch', { videoId, title });
}

export function blendQuizComplete(blend: string) {
  trackEvent('blendQuizComplete', { blend });
}

export function addToBag(productId: string) {
  trackEvent('addToBag', { productId });
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
export { fbq };
