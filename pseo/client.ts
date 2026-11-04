// Tiny module (kept out of the pSEO chunk) so the main bundle can recognise
// pSEO routes and, on a direct visit, load the page chunk before first render.
// That avoids replacing the prerendered HTML with a loading spinner.
import type { ComponentType } from 'react';

export const isPseoPath = (p: string) =>
  p === '/templates' || p.startsWith('/templates/') || p === '/guides' || p.startsWith('/guides/') ||
  p === '/how-to' || p.startsWith('/how-to/');

export const loadPseoPage = () => import('../components/pseo/PseoPage.tsx');

let preloaded: ComponentType<any> | null = null;
export const setPreloadedPseoPage = (c: ComponentType<any>) => { preloaded = c; };
export const getPreloadedPseoPage = () => preloaded;
