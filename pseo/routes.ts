import { PseoPageData, PseoBlock, SITE_ORIGIN } from './types.ts';
import { getTemplatePage, templatePaths } from './templates.ts';
import { ideasPages } from './ideas.ts';
import { guidePages } from './guides.ts';
import { getHowToPage, howToPaths } from './howto.ts';

const staticPages = new Map<string, PseoPageData>([...ideasPages, ...guidePages].map((p) => [p.path, p]));

/** Path prefixes owned by the pSEO system (used by App.tsx without loading this module). */
export const PSEO_PREFIXES = ['/templates', '/guides', '/how-to'];

export function getPseoPage(path: string): PseoPageData | null {
  return staticPages.get(path) ?? getTemplatePage(path) ?? getHowToPage(path);
}

export function allPseoPaths(): string[] {
  return [...templatePaths(), ...staticPages.keys(), ...howToPaths()];
}

// ─── Structured data ─────────────────────────────────────────────────────────

export function pseoJsonLd(page: PseoPageData): object {
  const url = `${SITE_ORIGIN}${page.path}`;
  const graph: object[] = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumbs.map((b, i) => ({
        '@type': 'ListItem', position: i + 1, name: b.label, item: `${SITE_ORIGIN}${b.path === '/' ? '/' : b.path}`,
      })),
    },
    {
      '@type': page.family === 'templates' ? 'WebPage' : 'Article',
      '@id': `${url}#page`,
      url,
      headline: page.h1,
      name: page.metaTitle,
      description: page.metaDescription,
      dateModified: page.updated,
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
    },
  ];
  if (page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ─── Markdown twin (dualmark.dev convention) ─────────────────────────────────

const abs = (path: string) => `${SITE_ORIGIN}${path}`;
const cell = (s: string) => s.replace(/\|/g, '\\|').replace(/\n/g, ' ');

function blockToMarkdown(b: PseoBlock): string {
  switch (b.type) {
    case 'h2': return `## ${b.content}`;
    case 'h3': return `### ${b.content}`;
    case 'p': return b.content;
    case 'ul': return b.items.map((i) => `- ${i}`).join('\n');
    case 'ol': return b.items.map((i, n) => `${n + 1}. ${i}`).join('\n');
    case 'callout': return `> ${b.content}`;
    case 'table':
      return [
        `| ${b.headers.map(cell).join(' | ')} |`,
        `| ${b.headers.map(() => '---').join(' | ')} |`,
        ...b.rows.map((r) => `| ${r.map(cell).join(' | ')} |`),
      ].join('\n');
    case 'copy':
      return [`### ${b.label}`, '', '```text', b.text, '```', ...(b.note ? ['', `*${b.note}*`] : [])].join('\n');
    case 'links':
      return [
        ...(b.heading ? [`### ${b.heading}`, ''] : []),
        ...b.links.map((l) => `- [${l.label}](${abs(l.path)})${l.desc ? `: ${l.desc}` : ''}`),
      ].join('\n');
    case 'cta':
      return `**${b.headline}** ${b.body} [${b.buttonText}](${abs(b.role === 'admin' ? '/monetize-facebook-group' : '/group-advertising-marketplace')})`;
  }
}

export function pseoToMarkdown(page: PseoPageData): string {
  const parts = [
    '---',
    `title: ${JSON.stringify(page.metaTitle)}`,
    `description: ${JSON.stringify(page.metaDescription)}`,
    `url: ${abs(page.path)}`,
    `updated: ${page.updated}`,
    '---',
    '',
    `# ${page.h1}`,
    '',
    page.intro,
    '',
    ...page.blocks.flatMap((b) => [blockToMarkdown(b), '']),
  ];
  if (page.faq.length) {
    parts.push('## Frequently asked questions', '');
    for (const f of page.faq) parts.push(`### ${f.q}`, '', f.a, '');
  }
  if (page.related.length) {
    parts.push('## Related', '', ...page.related.map((l) => `- [${l.label}](${abs(l.path)})`), '');
  }
  return parts.join('\n');
}
