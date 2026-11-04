# pSEO: how it works

Source plan: `rentmygroup-pseo-plan.xlsx` (Semrush US, 2026-11-04, 609 planned rows).
`keyword-map.csv` assigns every planned row a status: `built`, `existing`, `deferred-wave2`, `deferred-wave3`, `deferred` or `dropped`, with a reason.

## What is built (wave 1)

| Family | Pages | Where |
|---|---|---|
| Templates index | 1 | `/templates` |
| Template hubs (platform × type) | 6 | `/templates/{facebook,whatsapp}-group-{description,rules,welcome-message}` |
| Niche template pages | 300 | `…/{hub}/{niche}`, 50 niches in `pseo/niches.ts` |
| Ideas pages | 2 | `/templates/facebook-group-post-ideas`, `/templates/whatsapp-group-ideas` |
| Guides (owner/advertiser cluster) | 6 | `/guides`, `/guides/*` |

The plan listed 449 template rows and 39 owner-advertiser rows as separate URLs. Most were near-duplicate phrasings ("welcome to facebook group", "welcome post facebook group", …) or off-intent (group DP/icon images, "can groups see my profile"). Following the plan's own notes, they are clustered into the pages above instead of one thin page per keyword. Monetization keywords map to the existing blog post instead of creating a 4th competing page.

## Code

- `pseo/*.ts`: page data (niches, template generators, ideas, guides, route registry, JSON-LD, markdown).
- `components/pseo/PseoPage.tsx`: renderer used in the browser and at build time.
- `entry-server.tsx` + `scripts/prerender.mjs`: at build time, writes static HTML for every pSEO and blog route, plus `sitemap.xml`, `robots.txt`, `llms.txt` and `sitemap.md`.
- Add a niche: append to `pseo/niches.ts`. It gets 6 pages automatically.

## Dualmark (markdown twins for AI search, https://dualmark.dev)

- Every prerendered page also gets `<path>.md`, the home page gets `/index.md`, and `/llms.txt` indexes them.
- `middleware.ts` (Vercel Routing Middleware): `Accept: text/markdown` on a page URL returns the twin with `X-Markdown-Tokens`, `X-Robots-Tag: noindex`, `Vary: Accept`. HTML responses get `Link: <…md>; rel="alternate"; type="text/markdown"` and `Vary: Accept`.
- `vercel.json` sets the headers on direct `.md` requests. Missing `.md` files return 404 instead of the SPA shell.
- Check after deploy: `npx @dualmark/cli verify https://rentmygroup.com/templates`

## Next waves

- **Wave 2, admin how-to** (`/how-to/{platform}/{task}`, 515k volume): the biggest prize. It needs accurate step-by-step instructions per platform, so write it with care. Add it as a new family in `pseo/routes.ts`.
- **Wave 2, directory** (`/groups/...`): blocked until the marketplace has real group listings. Empty listing pages would be thin content.
- **Wave 3, group names**: low product fit.
