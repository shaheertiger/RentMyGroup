// Build-time renderer used by scripts/prerender.mjs (built with `vite build --ssr`).
// Renders crawlable static HTML for pSEO pages and blog pages, and exposes the
// data needed for sitemap.xml, llms.txt, and markdown twins.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { PseoPage } from './components/pseo/PseoPage.tsx';
import { BlogPost } from './components/BlogPost.tsx';
import { BlogIndex } from './components/BlogIndex.tsx';
import { getPseoPage, allPseoPaths, pseoJsonLd, pseoToMarkdown } from './pseo/routes.ts';
import { blogPosts, BlogPostData, BlogSectionType } from './blog/posts.ts';
import { SITE_ORIGIN } from './pseo/types.ts';

export interface RenderedPage {
  path: string;
  html: string;
  title: string;
  description: string;
  jsonLd?: object;
  markdown: string;
  lastmod?: string;
  section: string; // grouping for llms.txt / sitemap.md
}

const noop = () => {};

const shell = (path: string, body: React.ReactNode) =>
  renderToString(
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-500 selection:text-white relative">
      <Navbar onOpenModal={noop} onNavigate={noop} currentPath={path} />
      <main className="transition-opacity duration-300 relative z-0">{body}</main>
      <Footer onOpenModal={noop} onNavigate={noop} />
    </div>,
  );

// ─── Blog markdown twins ─────────────────────────────────────────────────────
const blogSectionMd = (s: BlogSectionType): string => {
  switch (s.type) {
    case 'h2': return `## ${s.content}`;
    case 'h3': return `### ${s.content}`;
    case 'p': return s.content;
    case 'ul': return s.items.map((i) => `- ${i}`).join('\n');
    case 'ol': return s.items.map((i, n) => `${n + 1}. ${i}`).join('\n');
    case 'callout': return `> ${s.content}`;
    case 'table': return [`| ${s.headers.join(' | ')} |`, `| ${s.headers.map(() => '---').join(' | ')} |`, ...s.rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');
    case 'cta': return `**${s.headline}** ${s.body} [${s.buttonText}](${SITE_ORIGIN}${s.href.startsWith('/') ? s.href : '/'})`;
  }
};

const blogPostMd = (p: BlogPostData) => [
  '---',
  `title: ${JSON.stringify(p.metaTitle)}`,
  `description: ${JSON.stringify(p.metaDescription)}`,
  `url: ${SITE_ORIGIN}/blog/${p.slug}`,
  '---',
  '',
  `# ${p.title}`,
  '',
  ...p.sections.flatMap((s) => [blogSectionMd(s), '']),
].join('\n');

// ─── Public API ──────────────────────────────────────────────────────────────
export function listRoutes(): string[] {
  return ['/blog', ...blogPosts.map((p) => `/blog/${p.slug}`), ...allPseoPaths()];
}

export function render(path: string): RenderedPage | null {
  if (path === '/blog') {
    const title = 'Blog: Group Monetization & Community Advertising | Rent My Group';
    const description = 'Strategies, pricing guides, and tools for Facebook and WhatsApp group owners. Learn how to earn from sponsorships and reach niche audiences through community advertising.';
    return {
      path, title, description, section: 'Blog',
      html: shell(path, <BlogIndex onOpenModal={noop} onNavigate={noop} />),
      markdown: [`# Rent My Group Blog`, '', description, '', ...blogPosts.map((p) => `- [${p.title}](${SITE_ORIGIN}/blog/${p.slug}): ${p.excerpt}`), ''].join('\n'),
    };
  }
  if (path.startsWith('/blog/')) {
    const post = blogPosts.find((p) => `/blog/${p.slug}` === path);
    if (!post) return null;
    return {
      path, title: post.metaTitle, description: post.metaDescription, section: 'Blog',
      html: shell(path, <BlogPost slug={post.slug} onOpenModal={noop} onNavigate={noop} />),
      markdown: blogPostMd(post),
    };
  }
  const page = getPseoPage(path);
  if (!page) return null;
  return {
    path,
    title: page.metaTitle,
    description: page.metaDescription,
    jsonLd: pseoJsonLd(page),
    lastmod: page.updated,
    section: page.family === 'guides' ? 'Guides' : page.family === 'how-to' ? 'How-to' : path.split('/').length > 3 ? 'Niche templates' : 'Templates',
    html: shell(path, <PseoPage path={path} onOpenModal={noop} onNavigate={noop} />),
    markdown: pseoToMarkdown(page),
  };
}
