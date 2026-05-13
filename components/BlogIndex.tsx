import React, { useState } from 'react';
import { ArrowRight, Clock, Tag, BookOpen } from 'lucide-react';
import { Role } from '../types.ts';
import { blogPosts } from '../blog/posts.ts';

interface BlogIndexProps {
  onOpenModal: (role: Role) => void;
  onNavigate: (path: string) => void;
}

const CATEGORIES = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

export const BlogIndex: React.FC<BlogIndexProps> = ({ onOpenModal, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[11px] font-black text-indigo-500 uppercase tracking-widest mb-5">
            <BookOpen size={13} /> Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05] max-w-3xl">
            Resources for Group Owners and Advertisers
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
            Strategies, pricing guides, and tools to help you monetize your community or reach niche audiences through group advertising.
          </p>
        </div>
      </section>

      {/* ── FILTER CHIPS ──────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-100 bg-white sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── POSTS ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Featured post */}
          {featured && (
            <article
              onClick={() => onNavigate(`/blog/${featured.slug}`)}
              className="group cursor-pointer grid md:grid-cols-2 gap-8 md:gap-12 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                      <Tag size={10} /> {featured.category}
                    </span>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest bg-white border border-slate-100 rounded-full px-3 py-1.5">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.readTime}</span>
                    <span>{featured.publishDate}</span>
                  </div>
                  <span className="text-sm font-black text-indigo-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>

              <div className="bg-indigo-600 rounded-[2rem] p-8 flex items-center justify-center min-h-[200px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
                <div className="relative z-10 text-center text-white space-y-3">
                  <div className="text-5xl font-display font-black opacity-20">01</div>
                  <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest">{featured.category}</p>
                  <p className="text-white font-black text-lg leading-snug max-w-[200px] mx-auto">{featured.title}</p>
                </div>
              </div>
            </article>
          )}

          {/* Post grid */}
          {rest.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  onClick={() => onNavigate(`/blog/${post.slug}`)}
                  className="group cursor-pointer bg-white border border-slate-200 rounded-[2rem] p-7 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                      <Tag size={10} /> {post.category}
                    </div>
                    <h2 className="text-base font-display font-black text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <span className="text-xs font-black text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-bold">No posts in this category yet.</div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
          <div className="relative z-10 space-y-5">
            <h2 className="text-2xl md:text-4xl font-display font-black leading-[1.1]">
              Ready to earn from your group?
            </h2>
            <p className="text-indigo-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              List your Facebook or WhatsApp group on Rent My Group. Advertisers come to you. You approve every post. Payment within 7 days.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenModal('admin')}
                className="h-13 px-10 text-base bg-white text-indigo-600 rounded-2xl font-black hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                List My Group Free <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onOpenModal('advertiser')}
                className="h-13 px-10 text-base bg-transparent text-white border-2 border-white/30 rounded-2xl font-black hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                I Want to Advertise
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
