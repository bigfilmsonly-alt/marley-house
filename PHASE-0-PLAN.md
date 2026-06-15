# PHASE 0 — Foundation
# THE MARLEY GROUP Platform Build
# Big Films Only Team · June 2026

## Status: IN PROGRESS

---

## DECISION BLOCKERS (need user input before full migration)

### 1. Gold Color: #EEC11E vs #F6C800
- Current build uses #EEC11E everywhere (18 files, 40+ instances)
- Master prompt specifies #F6C800
- These are meaningfully different golds
- **Action needed:** Confirm which is the canonical brand gold

### 2. Hub Domain
- Options: themarleygroup.com, rohanmarley.com, or keep marley-house.vercel.app
- Affects: canonical URLs, entity graph @ids, email from-address, OG images
- **Action needed:** Confirm domain before entity graph build

---

## PHASE 0 DELIVERABLES

### 0A. QA Fixes (no blockers)
- [ ] Add `<h1>` to homepage hero section
- [ ] Rename selassie.jpg → rastafari-principles.jpg (+ update code ref)
- [ ] Fix footer IG link: instagram.com/romarley → instagram.com/romarley/ (trailing slash)
- [ ] Alt text audit pass on all images
- [ ] Heading hierarchy audit (h1 > h2 > h3)

### 0B. Brand Token System (blocked by gold decision)
- [ ] New CSS custom properties in globals.css
- [ ] Update lib/theme.ts with new token names
- [ ] Add Inter font to lib/fonts.ts
- [ ] Replace all hardcoded #EEC11E instances with CSS var
- [ ] Update email template colors in api/lead/route.ts

### 0C. Entity Graph + SEO (blocked by domain decision)
- [ ] Canonical @ids for Organization, Person (Rohan), Person (YG)
- [ ] Update StructuredData.tsx with proper @id references
- [ ] Add SubOrganization nodes (Marley Coffee, Lion Order, Beach House)
- [ ] Enhanced sitemap.xml with all new routes
- [ ] robots.txt update (crawler-friendly age gate)

### 0D. Infrastructure Wiring (no blockers)
- [ ] Install new packages: stripe, next-intl, @anthropic-ai/sdk
- [ ] Update .env.example with new vars
- [ ] Supabase CDP schema (Phase 0 tables only)
- [ ] Stripe product/price setup
- [ ] middleware.ts scaffold (auth, age gate, i18n)
- [ ] Server-side tagging setup

### 0E. Route Architecture Scaffold
- [ ] Create route group structure: (public), (auth), (admin)
- [ ] Layout boundaries for each brand pillar
- [ ] Dynamic route templates: [city], [question], [topic]
- [ ] i18n locale prefix scaffold

---

## ENV VARS NEEDED (.env.local)

```
# Existing
ANTHROPIC_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_CALENDLY_URL=
NEXT_PUBLIC_SITE_URL=

# New — Phase 0
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
SUPABASE_SERVICE_ROLE_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

---

## FILES TO CREATE (Phase 0)

```
middleware.ts                          # Auth + age gate + i18n
lib/stripe.ts                         # Stripe client
lib/cdp.ts                            # CDP event tracking
lib/auth.ts                           # Supabase auth helpers
app/api/stripe/checkout/route.ts      # Create checkout session
app/api/stripe/webhook/route.ts       # Handle Stripe events
app/api/stripe/portal/route.ts        # Customer portal
app/api/membership/status/route.ts    # Check tier
supabase/migrations/002_cdp.sql       # CDP tables
supabase/migrations/003_membership.sql # Membership tables
```

## ACCEPTANCE CRITERIA
- [ ] All QA fixes deployed
- [ ] Brand tokens standardized (pending decision)
- [ ] Entity graph validates in Rich Results Test
- [ ] Stripe test mode functional
- [ ] CDP schema deployed to Supabase
- [ ] Lighthouse mobile 90+
- [ ] Analytics events firing (GA4 + Meta)
- [ ] CHANGELOG updated
- [ ] Lighthouse before/after captured
