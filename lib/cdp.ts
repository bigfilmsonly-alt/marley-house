// CDP (Customer Data Platform) — server-side event tracking
// Companion to lib/tracking.ts (client-side GA4 + Meta Pixel)
//
// Future integration: write events to Supabase `events` table for
// unified analytics, cohort analysis, and LTV attribution.
// Schema: id, user_id, event, properties, timestamp, source
// When ready, replace console.log with supabase.from('events').insert()

export interface CDPEvent {
  event: string;
  properties?: Record<string, string | number | boolean>;
  userId?: string;
  anonymousId?: string;
  timestamp?: string; // ISO 8601
  source?: 'web' | 'api' | 'webhook';
}

/** All known event names — mirrors lib/tracking.ts exports */
export type CDPEventName =
  | 'enter'
  | 'tabView'
  | 'roomOpen'
  | 'dropRead'
  | 'joinHouse'
  | 'linkOut'
  | 'watch'
  | 'blendQuizComplete'
  | 'addToBag'
  | 'askSubmit'
  | 'bookInquiry'
  | 'buttonClick'
  | 'shop_coffee'
  | 'explore_lionorder'
  | 'book_stay'
  | 'join_inner_circle';

/**
 * Log a server-side event. Currently writes to console; will be wired
 * to Supabase events table once the schema migration is applied.
 */
export function trackServerEvent(event: CDPEvent): void {
  const payload = {
    ...event,
    timestamp: event.timestamp ?? new Date().toISOString(),
    source: event.source ?? 'api',
  };

  // Structured log for Vercel log drain / observability tools
  console.log(
    JSON.stringify({ _cdp: true, ...payload })
  );
}

/**
 * Convenience: track with just a name and optional properties.
 * Mirrors the client-side trackEvent(name, params) signature.
 */
export function trackServer(
  name: CDPEventName,
  properties?: Record<string, string | number | boolean>,
  userId?: string
): void {
  trackServerEvent({ event: name, properties, userId });
}
