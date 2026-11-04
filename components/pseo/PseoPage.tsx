import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronRight, Copy } from 'lucide-react';
import { Role } from '../../types.ts';
import { PseoBlock, PseoLink, PseoPageData, SITE_ORIGIN } from '../../pseo/types.ts';
import { getPseoPage, pseoJsonLd } from '../../pseo/routes.ts';

interface Props {
  path: string;
  onOpenModal: (role: Role) => void;
  onNavigate: (path: string) => void;
}

// Real <a href> links so crawlers can follow them; clicks stay in the SPA.
const Link: React.FC<{ to: string; onNavigate: (p: string) => void; className?: string; children: React.ReactNode }> = ({ to, onNavigate, className, children }) => (
  <a
    href={to}
    className={className}
    onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      onNavigate(to);
    }}
  >
    {children}
  </a>
);

const CopyBlock: React.FC<{ label: string; text: string; note?: string }> = ({ label, text, note }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: user can still select the text */
    }
  };
  return (
    <div className="my-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-3 bg-slate-50 border-b border-slate-200">
        <h3 className="text-sm font-black text-slate-900">{label}</h3>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-black text-indigo-600 bg-white border border-indigo-100 rounded-lg px-3 py-1.5 hover:bg-indigo-50 transition-colors"
          aria-label={`Copy template: ${label}`}
        >
          {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
        </button>
      </div>
      <pre className="px-5 py-4 whitespace-pre-wrap break-words font-sans text-[15px] leading-relaxed text-slate-700">{text}</pre>
      {note && <p className="px-5 pb-4 text-xs font-semibold text-slate-500">{note}</p>}
    </div>
  );
};

const LinkGrid: React.FC<{ heading?: string; links: PseoLink[]; onNavigate: (p: string) => void }> = ({ heading, links, onNavigate }) => (
  <div className="my-6">
    {heading && <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">{heading}</h3>}
    <ul className="grid sm:grid-cols-2 gap-3">
      {links.map((l) => (
        <li key={l.path}>
          <Link to={l.path} onNavigate={onNavigate} className="group flex items-start justify-between gap-3 h-full rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-indigo-300 hover:bg-indigo-50/40 transition-colors">
            <span>
              <span className="block text-sm font-bold text-slate-800 group-hover:text-indigo-700">{l.label}</span>
              {l.desc && <span className="block text-xs text-slate-500 mt-1 leading-relaxed">{l.desc}</span>}
            </span>
            <ChevronRight size={16} className="shrink-0 mt-0.5 text-slate-300 group-hover:text-indigo-500" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Block: React.FC<{ block: PseoBlock; onOpenModal: (r: Role) => void; onNavigate: (p: string) => void }> = ({ block: b, onOpenModal, onNavigate }) => {
  switch (b.type) {
    case 'h2': return <h2 id={b.id} className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight mt-12 mb-5 leading-snug scroll-mt-28">{b.content}</h2>;
    case 'h3': return <h3 className="text-xl font-display font-black text-slate-800 tracking-tight mt-8 mb-3">{b.content}</h3>;
    case 'p': return <p className="text-slate-600 text-lg leading-relaxed font-medium mb-5">{b.content}</p>;
    case 'ul':
      return (
        <ul className="mb-6 space-y-3">
          {b.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" aria-hidden="true" />
              <span className="text-slate-600 text-base font-medium leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mb-6 space-y-4">
          {b.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 font-black text-sm flex items-center justify-center shrink-0">{i + 1}</span>
              <span className="text-slate-600 text-base font-medium leading-relaxed pt-1">{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <div className="my-8 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl px-6 py-5">
          <p className="text-indigo-800 font-semibold text-base leading-relaxed">{b.content}</p>
        </div>
      );
    case 'table':
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="bg-slate-900">
                {b.headers.map((h, i) => <th key={i} className="px-5 py-3 text-left text-[11px] font-black text-slate-300 uppercase tracking-widest">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((c, j) => <td key={j} className={`px-5 py-3.5 text-sm font-medium border-t border-slate-100 align-top ${j === 0 ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'copy': return <CopyBlock label={b.label} text={b.text} note={b.note} />;
    case 'links': return <LinkGrid heading={b.heading} links={b.links} onNavigate={onNavigate} />;
    case 'cta':
      return (
        <div className="my-12 bg-indigo-600 rounded-[2rem] p-8 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-display font-black leading-tight mb-3">{b.headline}</h2>
          <p className="text-indigo-100 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">{b.body}</p>
          <button
            type="button"
            onClick={() => onOpenModal(b.role)}
            className="inline-flex items-center gap-2 h-12 px-8 bg-white text-indigo-600 rounded-2xl font-black hover:bg-indigo-50 transition-colors"
          >
            {b.buttonText} <ArrowRight size={18} />
          </button>
        </div>
      );
  }
};

function applyMeta(page: PseoPageData | null, path: string) {
  const set = (sel: string, attr: string, val: string) => document.querySelector(sel)?.setAttribute(attr, val);
  if (!page) {
    document.title = 'Page not found | Rent My Group';
    const robots = document.querySelector('meta[name="robots"]');
    robots?.setAttribute('content', 'noindex');
    return;
  }
  const url = `${SITE_ORIGIN}${path}`;
  document.title = page.metaTitle;
  set('meta[name="description"]', 'content', page.metaDescription);
  set('#canonical-link', 'href', url);
  set('#og-title', 'content', page.metaTitle);
  set('#og-desc', 'content', page.metaDescription);
  set('#twitter-title', 'content', page.metaTitle);
  set('#twitter-desc', 'content', page.metaDescription);
  set('meta[property="og:url"]', 'content', url);
  let ld = document.getElementById('pseo-jsonld');
  if (!ld) {
    ld = document.createElement('script');
    ld.id = 'pseo-jsonld';
    ld.setAttribute('type', 'application/ld+json');
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(pseoJsonLd(page));
}

export const PseoPage: React.FC<Props> = ({ path, onOpenModal, onNavigate }) => {
  const page = getPseoPage(path);

  useEffect(() => {
    applyMeta(page, path);
    return () => {
      document.getElementById('pseo-jsonld')?.remove();
      document.querySelector('meta[name="robots"]')?.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    };
  }, [path]);

  if (!page) {
    return (
      <section className="pt-40 pb-32 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-display font-black text-slate-900 mb-4">Page not found</h1>
        <p className="text-slate-500 mb-8">We couldn't find that page.</p>
        <Link to="/templates" onNavigate={onNavigate} className="text-indigo-600 font-black">Browse group templates →</Link>
      </section>
    );
  }

  return (
    <article className="pt-28 md:pt-36 pb-16">
      <header className="px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-slate-400">
              {page.breadcrumbs.map((b, i) => (
                <li key={b.path} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
                  {i === page.breadcrumbs.length - 1
                    ? <span className="text-slate-600" aria-current="page">{b.label}</span>
                    : <Link to={b.path} onNavigate={onNavigate} className="hover:text-indigo-600">{b.label}</Link>}
                </li>
              ))}
            </ol>
          </nav>
          <p className="text-[11px] font-black uppercase tracking-widest text-indigo-500 mb-4">{page.eyebrow}</p>
          <h1 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] mb-6">{page.h1}</h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">{page.intro}</p>
          <p className="mt-4 text-xs font-bold text-slate-400">Updated {new Date(page.updated + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}</p>
        </div>
      </header>

      <div className="px-4 md:px-6 mt-6">
        <div className="max-w-3xl mx-auto">
          {page.blocks.map((b, i) => <Block key={i} block={b} onOpenModal={onOpenModal} onNavigate={onNavigate} />)}

          {page.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight mb-5">Frequently asked questions</h2>
              <div className="space-y-3">
                {page.faq.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-slate-200 bg-white px-5 py-4">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-slate-900">
                      {f.q}
                      <ChevronRight size={18} className="shrink-0 text-slate-400 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-slate-600 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {page.related.length > 0 && <LinkGrid heading="Related" links={page.related} onNavigate={onNavigate} />}
        </div>
      </div>
    </article>
  );
};

export default PseoPage;
