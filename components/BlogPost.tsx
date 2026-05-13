import React, { useEffect } from 'react';
import { ArrowRight, Clock, ChevronRight, BookOpen, Tag } from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';
import { getBlogPost, getRelatedPosts, BlogSectionType } from '../blog/posts.ts';

// ─── Section renderer ─────────────────────────────────────────────────────────

const Section: React.FC<{ section: BlogSectionType; onOpenModal: (role: Role) => void; onNavigate: (path: string) => void }> = ({ section, onOpenModal, onNavigate }) => {
  if (section.type === 'h2') {
    return <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight mt-12 mb-5 leading-snug">{section.content}</h2>;
  }
  if (section.type === 'h3') {
    return <h3 className="text-xl font-display font-black text-slate-800 tracking-tight mt-8 mb-4">{section.content}</h3>;
  }
  if (section.type === 'p') {
    return <p className="text-slate-600 text-lg leading-relaxed font-medium mb-5">{section.content}</p>;
  }
  if (section.type === 'ul') {
    return (
      <ul className="mb-6 space-y-3">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-3 shrink-0" />
            <span className="text-slate-600 text-base font-medium leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (section.type === 'ol') {
    return (
      <ol className="mb-6 space-y-4">
        {section.items.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">
              {i + 1}
            </div>
            <span className="text-slate-600 text-base font-medium leading-relaxed pt-1">{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  if (section.type === 'callout') {
    return (
      <div className="my-8 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl px-6 py-5">
        <p className="text-indigo-800 font-semibold text-base leading-relaxed">{section.content}</p>
      </div>
    );
  }
  if (section.type === 'table') {
    return (
      <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-slate-900">
              {section.headers.map((h, i) => (
                <th key={i} className="px-5 py-3 text-left text-[11px] font-black text-slate-300 uppercase tracking-widest">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-5 py-3.5 text-sm font-medium border-t border-slate-100 ${j === 0 ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (section.type === 'cta') {
    return (
      <div className="my-10 bg-indigo-600 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16" aria-hidden="true"></div>
        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-display font-black mb-3">{section.headline}</h3>
          <p className="text-indigo-100 text-base font-medium mb-6 leading-relaxed">{section.body}</p>
          <Button
            onClick={() => {
              onNavigate(section.href);
              onOpenModal(section.role);
            }}
            variant="secondary"
            className="h-12 px-8 text-sm"
          >
            <span className="flex items-center gap-2">{section.buttonText} <ArrowRight size={16} /></span>
          </Button>
        </div>
      </div>
    );
  }
  return null;
};

// ─── Table of contents ────────────────────────────────────────────────────────

const TableOfContents: React.FC<{ sections: BlogSectionType[] }> = ({ sections }) => {
  const headings = sections.filter(s => s.type === 'h2') as { type: 'h2'; content: string }[];
  if (headings.length < 2) return null;

  return (
    <nav className="bg-slate-50 border border-slate-100 rounded-[1.5rem] p-6" aria-label="Table of contents">
      <div className="flex items-center gap-2 text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">
        <BookOpen size={13} /> Contents
      </div>
      <ol className="space-y-2">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#section-${i}`}
              className="flex items-start gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors group"
            >
              <ChevronRight size={14} className="mt-0.5 shrink-0 text-slate-300 group-hover:text-indigo-400 transition-colors" />
              {h.content}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

interface BlogPostProps {
  slug: string;
  onOpenModal: (role: Role) => void;
  onNavigate: (path: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ slug, onOpenModal, onNavigate }) => {
  const post = getBlogPost(slug);
  const related = getRelatedPosts(slug, 3);

  // Inject JSON-LD Article schema
  useEffect(() => {
    if (!post) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `blog-post-ld-${slug}`;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "author": { "@type": "Organization", "name": "Rent My Group" },
      "publisher": { "@type": "Organization", "name": "Rent My Group", "url": "https://rentmygroup.com" },
      "datePublished": post.publishDate,
      "url": `https://rentmygroup.com/blog/${post.slug}`,
    });
    document.head.appendChild(script);
    return () => { document.getElementById(`blog-post-ld-${slug}`)?.remove(); };
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-48 pb-32 text-center">
        <div className="text-6xl font-display font-black text-slate-200 mb-6">404</div>
        <h1 className="text-2xl font-display font-black text-slate-900 mb-4">Post not found</h1>
        <button onClick={() => onNavigate('/blog')} className="text-indigo-600 font-black underline underline-offset-4">Back to Blog</button>
      </div>
    );
  }

  // Track section index for TOC anchors
  let h2Count = -1;

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8" aria-label="Breadcrumb">
            <button onClick={() => onNavigate('/')} className="hover:text-indigo-600 transition-colors">Home</button>
            <ChevronRight size={12} />
            <button onClick={() => onNavigate('/blog')} className="hover:text-indigo-600 transition-colors">Blog</button>
            <ChevronRight size={12} />
            <span className="text-slate-600 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-black text-indigo-600 uppercase tracking-widest">
              <Tag size={10} /> {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="text-xs font-bold text-slate-400">{post.publishDate}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── ARTICLE ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Body */}
            <article className="min-w-0">
              {post.sections.map((section, i) => {
                let anchorId: string | undefined;
                if (section.type === 'h2') {
                  h2Count++;
                  anchorId = `section-${h2Count}`;
                }
                return (
                  <div key={i} id={anchorId}>
                    <Section section={section} onOpenModal={onOpenModal} onNavigate={onNavigate} />
                  </div>
                );
              })}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-6 sticky top-28">
              <TableOfContents sections={post.sections} />

              <div className="bg-indigo-600 rounded-[1.5rem] p-7 text-white">
                <div className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-3">Ready to Start?</div>
                <h3 className="text-lg font-display font-black mb-3 leading-snug">List your group and start earning</h3>
                <p className="text-indigo-100 text-sm font-medium mb-5 leading-relaxed">Free to list. You approve every sponsorship. Paid within 7 days.</p>
                <button
                  onClick={() => onOpenModal('admin')}
                  className="w-full h-11 bg-white text-indigo-600 rounded-xl text-sm font-black flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors active:scale-95"
                >
                  List My Group <ArrowRight size={15} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ─────────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-10">More for Group Owners</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <article
                  key={p.slug}
                  onClick={() => onNavigate(`/blog/${p.slug}`)}
                  className="bg-white border border-slate-200 rounded-[2rem] p-7 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                      <Tag size={10} /> {p.category}
                    </div>
                    <h3 className="text-base font-display font-black text-slate-900 leading-snug">{p.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">{p.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                      <Clock size={11} /> {p.readTime}
                    </span>
                    <span className="text-xs font-black text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
          <div className="relative z-10 space-y-5">
            <h2 className="text-2xl md:text-4xl font-display font-black leading-[1.1]">
              Your group is already an asset.<br /> Start earning from it.
            </h2>
            <p className="text-indigo-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              List your Facebook, WhatsApp, or online group on Rent My Group. Advertisers come to you. You approve every post. Payment within 7 days.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('admin')} variant="secondary" className="h-13 px-10 text-base">
                List My Group Free
              </Button>
              <Button onClick={() => onOpenModal('advertiser')} variant="outline" className="h-13 px-10 text-base">
                I Want to Advertise
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
