// Cannabis jurisdiction config — recreational-legal US states + blocked countries
// Source: NCSL.org + state cannabis control boards, updated 2025-Q4

export type JurisdictionStatus = 'recreational' | 'medical-only' | 'illegal';

export interface USJurisdiction {
  state: string;
  abbr: string;
  status: JurisdictionStatus;
  minAge: number;
}

/** All 24 recreational-legal US states + DC as of 2025 */
export const US_JURISDICTIONS: USJurisdiction[] = [
  { state: 'Alaska',         abbr: 'AK', status: 'recreational', minAge: 21 },
  { state: 'Arizona',        abbr: 'AZ', status: 'recreational', minAge: 21 },
  { state: 'California',     abbr: 'CA', status: 'recreational', minAge: 21 },
  { state: 'Colorado',       abbr: 'CO', status: 'recreational', minAge: 21 },
  { state: 'Connecticut',    abbr: 'CT', status: 'recreational', minAge: 21 },
  { state: 'Delaware',       abbr: 'DE', status: 'recreational', minAge: 21 },
  { state: 'Illinois',       abbr: 'IL', status: 'recreational', minAge: 21 },
  { state: 'Maine',          abbr: 'ME', status: 'recreational', minAge: 21 },
  { state: 'Maryland',       abbr: 'MD', status: 'recreational', minAge: 21 },
  { state: 'Massachusetts',  abbr: 'MA', status: 'recreational', minAge: 21 },
  { state: 'Michigan',       abbr: 'MI', status: 'recreational', minAge: 21 },
  { state: 'Minnesota',      abbr: 'MN', status: 'recreational', minAge: 21 },
  { state: 'Missouri',       abbr: 'MO', status: 'recreational', minAge: 21 },
  { state: 'Montana',        abbr: 'MT', status: 'recreational', minAge: 21 },
  { state: 'Nevada',         abbr: 'NV', status: 'recreational', minAge: 21 },
  { state: 'New Jersey',     abbr: 'NJ', status: 'recreational', minAge: 21 },
  { state: 'New Mexico',     abbr: 'NM', status: 'recreational', minAge: 21 },
  { state: 'New York',       abbr: 'NY', status: 'recreational', minAge: 21 },
  { state: 'Ohio',           abbr: 'OH', status: 'recreational', minAge: 21 },
  { state: 'Oregon',         abbr: 'OR', status: 'recreational', minAge: 21 },
  { state: 'Rhode Island',   abbr: 'RI', status: 'recreational', minAge: 21 },
  { state: 'Vermont',        abbr: 'VT', status: 'recreational', minAge: 21 },
  { state: 'Virginia',       abbr: 'VA', status: 'recreational', minAge: 21 },
  { state: 'Washington',     abbr: 'WA', status: 'recreational', minAge: 21 },
  { state: 'Washington DC',  abbr: 'DC', status: 'recreational', minAge: 21 },
];

const recreationalSet = new Set(
  US_JURISDICTIONS.filter((j) => j.status === 'recreational').map((j) => j.abbr)
);

/** Check if a US state abbreviation allows recreational cannabis */
export function isRecreationalState(abbr: string): boolean {
  return recreationalSet.has(abbr.toUpperCase());
}

/** Countries where cannabis content is strictly illegal — block or gate */
export const BLOCKED_COUNTRIES = [
  'ID', // Indonesia
  'SG', // Singapore
  'MY', // Malaysia
  'JP', // Japan
  'KR', // South Korea
  'CN', // China
  'AE', // UAE
  'SA', // Saudi Arabia
  'TH', // Thailand
  'PH', // Philippines
] as const;

export type BlockedCountryCode = (typeof BLOCKED_COUNTRIES)[number];
