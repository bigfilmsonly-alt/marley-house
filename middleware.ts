import { NextRequest, NextResponse } from 'next/server';

// Cannabis-legal US states (recreational) — update as laws change
const CANNABIS_LEGAL_STATES = new Set([
  'AK', 'AZ', 'CA', 'CO', 'CT', 'DE', 'IL', 'ME', 'MD', 'MA',
  'MI', 'MN', 'MO', 'MT', 'NV', 'NJ', 'NM', 'NY', 'OH', 'OR',
  'RI', 'VT', 'VA', 'WA',
]);

// Routes that require 21+ age verification
const AGE_GATED_PATHS = ['/lion-order', '/dispensary-near-me'];

// Routes that require authentication
const AUTH_REQUIRED_PATHS = ['/account', '/dashboard', '/membership'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow crawlers through age-gated content for SEO
  const ua = request.headers.get('user-agent') || '';
  const isCrawler = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora|pinterest|slackbot|redditbot|applebot|whatsapp|claudebot|perplexitybot/i.test(ua);

  // Age-gated routes: let crawlers through, humans get client-side gate
  if (!isCrawler && AGE_GATED_PATHS.some((p) => pathname.startsWith(p))) {
    // Client-side AgeGate component handles the actual gate
    // Middleware just adds a header for the component to check
    const response = NextResponse.next();
    response.headers.set('x-age-gate', 'required');
    return response;
  }

  // Auth-required routes: check for Supabase session cookie
  if (AUTH_REQUIRED_PATHS.some((p) => pathname.startsWith(p))) {
    const supabaseAuth = request.cookies.get('sb-access-token')?.value;
    if (!supabaseAuth) {
      const loginUrl = new URL('/', request.url);
      loginUrl.searchParams.set('auth', 'required');
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|brand/|products/|lion-order/|merch/|brandbook/|press/|api/).*)',
  ],
};
