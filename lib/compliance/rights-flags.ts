// Name & likeness rights tracking — IP clearance registry
// Legal must review any 'pending-review' or 'needs-license' entries before launch

export type ClearanceStatus =
  | 'cleared'
  | 'pending-review'
  | 'needs-license'
  | 'factual-fair-use';

export interface RightsFlag {
  entity: string;
  pages: string[];           // pathnames where entity is referenced
  clearance: ClearanceStatus;
  notes: string;
}

/** All third-party name/likeness references across the site */
export const RIGHTS_FLAGS: RightsFlag[] = [
  {
    entity: 'Bob Marley',
    pages: ['/', '/legacy', '/about', '/king-clem'],
    clearance: 'cleared',
    notes: 'Licensed via Marley family estate. Rohan is direct heir — personal references cleared.',
  },
  {
    entity: 'Tuff Gong',
    pages: ['/', '/music', '/legacy'],
    clearance: 'cleared',
    notes: 'Marley family-owned label. Usage pre-approved for Rohan Marley properties.',
  },
  {
    entity: 'House of Marley',
    pages: ['/legacy', '/about'],
    clearance: 'pending-review',
    notes: 'Separate licensee (Fabriq). Verify co-branding terms before featuring products.',
  },
  {
    entity: 'Lauryn Hill',
    pages: ['/legacy', '/about'],
    clearance: 'factual-fair-use',
    notes: 'Biographical references only. No music, likeness, or endorsement implied.',
  },
];

/**
 * Return any uncleared rights flags for a given pathname.
 * Use in build checks or admin dashboards to surface compliance gaps.
 */
export function getUnclearedRights(pathname: string): RightsFlag[] {
  return RIGHTS_FLAGS.filter(
    (flag) =>
      flag.clearance !== 'cleared' &&
      flag.pages.some((p) => pathname === p || pathname.startsWith(p + '/'))
  );
}

/** Quick check: does this page have any rights issues to resolve? */
export function pageHasRightsIssues(pathname: string): boolean {
  return getUnclearedRights(pathname).length > 0;
}
