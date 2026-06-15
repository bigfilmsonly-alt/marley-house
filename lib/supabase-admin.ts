// Supabase admin client — uses service role key for elevated access
// For webhook handlers, cron jobs, and admin-only operations
// NEVER import this on the client side — server-only

import { createClient, SupabaseClient } from '@supabase/supabase-js';

let adminClient: SupabaseClient | null = null;

/**
 * Returns a Supabase client with service-role privileges.
 * Returns null if SUPABASE_SERVICE_ROLE_KEY is not set,
 * allowing graceful fallback in dev/preview environments.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (adminClient) return adminClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    console.warn(
      '[supabase-admin] Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL — admin client unavailable'
    );
    return null;
  }

  adminClient = createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return adminClient;
}

/**
 * Require the admin client — throws if env vars are missing.
 * Use in webhook/cron handlers where the client is mandatory.
 */
export function requireSupabaseAdmin(): SupabaseClient {
  const client = getSupabaseAdmin();
  if (!client) {
    throw new Error(
      'Supabase admin client required but SUPABASE_SERVICE_ROLE_KEY is not set'
    );
  }
  return client;
}
