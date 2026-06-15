// Consent management — cookie-based preference storage
// Complies with GDPR/CCPA: necessary always on, others opt-in

const COOKIE_NAME = 'consent_prefs';
const MAX_AGE_DAYS = 365;

export interface ConsentCategories {
  necessary: true; // always granted, cannot be toggled
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const DEFAULT_CONSENT: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

/** Read consent preferences from cookie. Returns defaults if unset. */
export function getConsent(): ConsentCategories {
  if (typeof document === 'undefined') return DEFAULT_CONSENT;

  const raw = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));

  if (!raw) return DEFAULT_CONSENT;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw.split('=')[1]));
    return { ...DEFAULT_CONSENT, ...parsed, necessary: true };
  } catch {
    return DEFAULT_CONSENT;
  }
}

/** Persist consent preferences to cookie. Necessary is always forced true. */
export function setConsent(categories: Partial<ConsentCategories>): void {
  if (typeof document === 'undefined') return;

  const prefs: ConsentCategories = {
    ...DEFAULT_CONSENT,
    ...categories,
    necessary: true,
  };

  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
  const value = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

/** Check whether a specific consent category is granted */
export function hasConsent(category: keyof ConsentCategories): boolean {
  if (category === 'necessary') return true;
  return getConsent()[category] === true;
}

/** Check if the user has made any consent choice yet */
export function hasConsentBeenSet(): boolean {
  if (typeof document === 'undefined') return false;
  return document.cookie.includes(`${COOKIE_NAME}=`);
}
