// Vercel Routing Middleware implementing the dualmark.dev convention
// (https://dualmark.dev/docs/spec/overview): every prerendered page has a
// markdown twin at `<path>.md`. Clients that ask for `Accept: text/markdown`
// get the twin at the same URL; HTML responses advertise it with a Link header.
// The .md files themselves are static and get their headers from vercel.json.
import { next } from '@vercel/functions';

export const config = {
  // Skip static assets and any path with a file extension (.md, .xml, .txt, .js…).
  matcher: ['/((?!assets/|.*\\.).*)'],
};

// Kept inline (not imported from pseo/client.ts) so the middleware bundle
// does not pull in the React page chunk.
const hasTwin = (p: string) =>
  p === '/' || p === '/blog' || p.startsWith('/blog/') ||
  p === '/templates' || p.startsWith('/templates/') ||
  p === '/guides' || p.startsWith('/guides/') ||
  p === '/how-to' || p.startsWith('/how-to/');

/** q-value of the best match for `type` in an Accept header (0 if not acceptable). */
function quality(accept: string, type: string): number {
  const [major] = type.split('/');
  let best = -1;
  let bestSpecificity = -1;
  for (const part of accept.split(',')) {
    const [range, ...params] = part.trim().toLowerCase().split(';').map((s) => s.trim());
    const specificity = range === type ? 2 : range === `${major}/*` ? 1 : range === '*/*' ? 0 : -1;
    if (specificity < 0 || specificity < bestSpecificity) continue;
    const qParam = params.find((x) => x.startsWith('q='));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (specificity > bestSpecificity || q > best) {
      best = Number.isFinite(q) ? q : 0;
      bestSpecificity = specificity;
    }
  }
  return Math.max(best, 0);
}

/** Markdown only when explicitly requested and strictly preferred over HTML (ties go to HTML). */
const prefersMarkdown = (accept: string | null) =>
  !!accept && accept.toLowerCase().includes('text/markdown') && quality(accept, 'text/markdown') > quality(accept, 'text/html');

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (!hasTwin(path)) return next();

  const twin = path === '/' ? '/index.md' : `${path}.md`;

  if (prefersMarkdown(request.headers.get('accept'))) {
    const res = await fetch(new URL(twin, url.origin));
    if (res.ok) {
      const body = await res.text();
      return new Response(body, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'X-Markdown-Tokens': String(Math.ceil(body.length / 4)),
          'X-Robots-Tag': 'noindex',
          'X-AEO-Version': '1.0',
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
          Vary: 'Accept',
        },
      });
    }
  }

  return next({
    headers: {
      Link: `<${twin}>; rel="alternate"; type="text/markdown"`,
      Vary: 'Accept',
    },
  });
}
