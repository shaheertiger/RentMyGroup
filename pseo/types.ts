// Shared types for programmatic SEO (pSEO) pages.
// Every pSEO page is a plain data object rendered by components/pseo/PseoPage.tsx,
// both in the browser and at build time (scripts/prerender.mjs).

export type PseoBlock =
  | { type: 'h2'; content: string; id?: string }
  | { type: 'h3'; content: string }
  | { type: 'p'; content: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; content: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'copy'; label: string; text: string; note?: string }
  | { type: 'links'; heading?: string; links: PseoLink[] }
  | { type: 'cta'; role: 'admin' | 'advertiser'; headline: string; body: string; buttonText: string };

export interface PseoLink {
  label: string;
  path: string;
  desc?: string;
}

export interface PseoFaq {
  q: string;
  a: string;
}

export interface PseoPageData {
  path: string;
  family: 'templates' | 'guides';
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  breadcrumbs: PseoLink[];
  blocks: PseoBlock[];
  faq: PseoFaq[];
  related: PseoLink[];
  updated: string; // ISO date
}

export const SITE_ORIGIN = 'https://rentmygroup.com';
export const PSEO_UPDATED = '2026-11-04';
