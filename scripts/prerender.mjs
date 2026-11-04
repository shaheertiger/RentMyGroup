// Post-build step: writes static HTML for every pSEO + blog route, a markdown
// twin for each (dualmark.dev convention), sitemap.xml, sitemap.md, llms.txt,
// and robots.txt into dist/.
//
// Runs after `vite build` (client) and `vite build --ssr entry-server.tsx`.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const SSR_DIR = join(ROOT, 'dist-ssr');
const ORIGIN = 'https://rentmygroup.com';
const TODAY = new Date().toISOString().slice(0, 10);

const { render, listRoutes } = await import(pathToFileURL(join(SSR_DIR, 'entry-server.js')).href);
const template = readFileSync(join(DIST, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const write = (rel, content) => {
  const file = join(DIST, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

function toHtml(page) {
  const url = `${ORIGIN}${page.path}`;
  const t = esc(page.title);
  const d = esc(page.description);
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<link rel="canonical" id="canonical-link" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" id="og-title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" id="og-desc" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:title" id="twitter-title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" id="twitter-desc" content=")[^"]*(")/, `$1${d}$2`)
    .replace('<div id="root"></div>', `<div id="root">${page.html}</div>`);
  const extraHead = [
    `<link rel="alternate" type="text/markdown" href="${page.path}.md" />`,
    page.jsonLd
      ? `<script type="application/ld+json" id="pseo-jsonld">${JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')}</script>`
      : '',
  ].join('\n    ');
  return html.replace('</head>', `    ${extraHead}\n  </head>`);
}

// ─── Render every route ──────────────────────────────────────────────────────
const pages = [];
for (const path of listRoutes()) {
  const page = render(path);
  if (!page) throw new Error(`No page rendered for ${path}`);
  if (!template.includes('<div id="root"></div>')) throw new Error('index.html root marker not found');
  write(`${path}.html`, toHtml(page));
  write(`${path}.md`, page.markdown.endsWith('\n') ? page.markdown : `${page.markdown}\n`);
  pages.push(page);
}

// ─── Hand-written pages that are still client-rendered ──────────────────────
const STATIC_PAGES = [
  { path: '/', title: 'Rent My Group: Rent Ad Space in Facebook & WhatsApp Groups', desc: 'Marketplace connecting advertisers with Facebook, WhatsApp, Telegram, and online group owners.' },
  { path: '/how-to-make-money-from-facebook-groups-2026', title: 'How to Make Money From Facebook Groups in 2026', desc: 'Six methods to monetize a Facebook group without losing member trust.' },
  { path: '/facebook-group-advertising', title: 'Facebook Group Advertising', desc: 'Advertise inside active Facebook groups through admin-approved promotions.' },
  { path: '/whatsapp-group-advertising', title: 'WhatsApp Group Advertising', desc: 'Place approved promotions inside relevant WhatsApp groups.' },
  { path: '/monetize-facebook-group', title: 'Monetize Your Facebook Group', desc: 'Earn from sponsored posts in your Facebook group. Free to list.' },
  { path: '/monetize-whatsapp-group', title: 'Monetize Your WhatsApp Group', desc: 'Earn from approved sponsored messages in your WhatsApp group.' },
  { path: '/group-advertising-marketplace', title: 'Group Advertising Marketplace', desc: 'Buy and sell ad space in niche online communities.' },
  { path: '/advertise-in-online-communities', title: 'Advertise in Online Communities', desc: 'Why community advertising beats algorithm-driven ads.' },
];

write('index.md', [
  '# Rent My Group',
  '',
  '> Rent My Group is a marketplace where advertisers pay Facebook, WhatsApp, and Telegram group owners to share approved, relevant sponsored posts with their communities. Group owners list for free, set their own rates, and approve every post.',
  '',
  '## Pages',
  '',
  ...STATIC_PAGES.slice(1).map((p) => `- [${p.title}](${ORIGIN}${p.path}): ${p.desc}`),
  '',
  '## Resources',
  '',
  `- [Free group templates](${ORIGIN}/templates): descriptions, rules, and welcome messages for Facebook and WhatsApp groups`,
  `- [Guides](${ORIGIN}/guides): promoting, monetizing, and advertising in groups`,
  `- [Blog](${ORIGIN}/blog)`,
  '',
].join('\n'));

// ─── sitemap.xml ─────────────────────────────────────────────────────────────
const urls = [
  ...STATIC_PAGES.map((p) => ({ loc: `${ORIGIN}${p.path === '/' ? '/' : p.path}`, lastmod: TODAY })),
  ...pages.map((p) => ({ loc: `${ORIGIN}${p.path}`, lastmod: p.lastmod ?? TODAY })),
];
write('sitemap.xml', [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`),
  '</urlset>',
  '',
].join('\n'));

// ─── llms.txt + sitemap.md (dualmark / llmstxt.org) ──────────────────────────
const bySection = new Map();
for (const p of pages) {
  if (!bySection.has(p.section)) bySection.set(p.section, []);
  bySection.get(p.section).push(p);
}
const SECTION_ORDER = ['Guides', 'Templates', 'Blog', 'Niche templates'];

write('llms.txt', [
  '# Rent My Group',
  '',
  '> Marketplace connecting advertisers with Facebook, WhatsApp, and Telegram group owners. Group owners earn from approved sponsored posts; advertisers reach niche, engaged communities. Every page below has a markdown version at the same URL with a .md suffix.',
  '',
  '## Product',
  '',
  ...STATIC_PAGES.map((p) => `- [${p.title}](${ORIGIN}${p.path === '/' ? '/index.md' : p.path}): ${p.desc}`),
  '',
  ...SECTION_ORDER.filter((s) => s !== 'Niche templates').flatMap((s) => [
    `## ${s}`,
    '',
    ...(bySection.get(s) ?? []).map((p) => `- [${p.title}](${ORIGIN}${p.path}.md): ${p.description}`),
    '',
  ]),
  '## Optional',
  '',
  `- [All ${(bySection.get('Niche templates') ?? []).length} niche templates](${ORIGIN}/sitemap.md): one page per niche, platform, and template type`,
  '',
].join('\n'));

write('sitemap.md', [
  '# Sitemap',
  '',
  ...SECTION_ORDER.flatMap((s) => [
    `## ${s}`,
    ...(bySection.get(s) ?? []).map((p) => `- [${p.title}](${p.path}.md)`),
    '',
  ]),
  '## Pages',
  '- [Home](/index.md)',
  '',
].join('\n'));

// ─── robots.txt ──────────────────────────────────────────────────────────────
write('robots.txt', [
  'User-agent: *',
  'Allow: /',
  '',
  ...['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended'].flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
  `Sitemap: ${ORIGIN}/sitemap.xml`,
  '',
].join('\n'));

rmSync(SSR_DIR, { recursive: true, force: true });
console.log(`prerender: ${pages.length} pages (+ .md twins), sitemap.xml (${urls.length} urls), llms.txt, sitemap.md, robots.txt`);
