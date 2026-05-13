import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Facebook,
  BarChart3,
  ShieldCheck,
  Target,
  Users,
  Zap,
  MessageCircle,
  Star,
  Sparkles,
  TrendingUp,
  MapPin,
  Briefcase,
  ShoppingBag,
  Home,
  Megaphone,
  BookOpen,
  Globe,
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

// ─── Sub-components ──────────────────────────────────────────────────────────

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
    {children}
  </div>
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
    {children}
  </div>
);

const StatPill: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
    <span className="text-2xl md:text-3xl font-display font-black text-indigo-600">{value}</span>
    <span className="text-xs font-bold text-slate-500 mt-1 text-center">{label}</span>
  </div>
);

// ─── FAQ ─────────────────────────────────────────────────────────────────────

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, icon }) => (
  <div className={`border-b border-slate-100 last:border-0 transition-all duration-300 ${isOpen ? 'bg-slate-50/50' : ''}`}>
    <button
      onClick={onClick}
      className="w-full py-6 px-6 flex items-start gap-4 text-left group"
      aria-expanded={isOpen}
    >
      <div className={`mt-1 p-2 rounded-xl transition-colors shrink-0 ${isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className={`text-base md:text-lg font-display font-black tracking-tight transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900'}`}>
            {question}
          </h3>
          <ChevronDown
            size={18}
            className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}
          />
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
          <p className="text-slate-600 text-base leading-relaxed font-medium pb-2">{answer}</p>
        </div>
      </div>
    </button>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export const FacebookGroupAdvertising: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Inject page-specific FAQ structured data
  const faqs = [
    {
      icon: <Facebook size={18} />,
      question: "What exactly is Facebook group advertising?",
      answer: "Facebook group advertising through Rent My Group means placing a sponsored post or community ad placement inside an active, niche Facebook group — with full approval from the group admin. Unlike boosted posts, these are native to the group feed and treated as admin-endorsed content, which drives far higher trust and engagement."
    },
    {
      icon: <ShieldCheck size={18} />,
      question: "Is advertising in Facebook groups against Facebook's rules?",
      answer: "No. Group admins are allowed to post sponsored content and announcements on behalf of partners. Rent My Group facilitates these direct brand-to-admin relationships. Every placement is admin-approved and disclosed, keeping it fully compliant with Facebook's community guidelines."
    },
    {
      icon: <Target size={18} />,
      question: "How is this different from running Facebook Ads?",
      answer: "Facebook Ads compete in an algorithm-driven auction and land in a generic feed. Community ad placements appear inside niche groups where members have self-selected around a shared interest. The result: higher relevance, no ad-blind scrolling, and zero algorithm dependency — your message reaches every active member."
    },
    {
      icon: <BarChart3 size={18} />,
      question: "What are transparent group metrics?",
      answer: "Before you commit to a placement, you can review the group's verified member count, weekly active posting rate, average post engagement, and niche category. There are no inflated vanity numbers — every metric is audited by our team so you know exactly what reach to expect."
    },
    {
      icon: <Zap size={18} />,
      question: "How quickly does a sponsored group post go live?",
      answer: "Most campaigns are live within 12–48 hours. You submit your creative and targeting criteria, the admin reviews it for community fit, and upon approval the post is published. You receive a live confirmation link and real-time engagement data."
    },
    {
      icon: <MessageCircle size={18} />,
      question: "What types of businesses can advertise in Facebook groups?",
      answer: "Any legitimate business — local services, e-commerce brands, event promoters, affiliate marketers, recruiters, course creators, and SaaS products. The key is matching your offer to the group's niche. Our marketplace makes it easy to filter groups by category, location, and audience size so every placement feels native."
    },
  ];

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  }), []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'fb-group-faq-ld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.getElementById('fb-group-faq-ld')?.remove(); };
  }, [jsonLd]);

  // ── Ad formats ──────────────────────────────────────────────────────────────
  const formats = [
    {
      icon: <MessageCircle size={28} />,
      title: "Sponsored Group Post",
      desc: "A native post published by the admin on your behalf. It appears in the group feed and notifications — treated as an admin recommendation, not an ad.",
      tag: "Highest Trust",
      tagColor: "bg-green-50 text-green-700 border-green-100",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Pinned Announcement",
      desc: "Your message stays pinned at the top of the group for your entire campaign period. Every new visitor sees it first — maximum visibility without daily spend.",
      tag: "Max Visibility",
      tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      icon: <Facebook size={28} />,
      title: "Cover Photo Ad Slot",
      desc: "Your brand or offer displayed in the group's cover photo. Seen by every visitor before they read a single post. Ideal for awareness and local brand recall.",
      tag: "Always-On",
      tagColor: "bg-purple-50 text-purple-700 border-purple-100",
    },
  ];

  // ── Business types ───────────────────────────────────────────────────────────
  const useCases = [
    { icon: <Home size={20} />, label: "Real Estate & Rentals", desc: "Promote listings, open houses, and rental deals to hyperlocal neighbourhood groups." },
    { icon: <ShoppingBag size={20} />, label: "E-Commerce & DTC Brands", desc: "Reach niche buyer communities with product drops, discount codes, and flash sales." },
    { icon: <Megaphone size={20} />, label: "Event Promoters", desc: "Fill seats fast by advertising in groups whose members already love your event type." },
    { icon: <Briefcase size={20} />, label: "Recruiters & Job Boards", desc: "Post opportunities inside professional and industry groups where top talent lives." },
    { icon: <BookOpen size={20} />, label: "Course Creators & Coaches", desc: "Promote programs directly to interest-based communities ready to learn and buy." },
    { icon: <Globe size={20} />, label: "Affiliate Marketers", desc: "Drive traffic and conversions in niche groups aligned to your offer's audience." },
    { icon: <MapPin size={20} />, label: "Local Services & SMBs", desc: "Advertise your restaurant, salon, clinic, or trade business to your immediate area." },
    { icon: <Users size={20} />, label: "Agencies & Media Buyers", desc: "Scale client campaigns across hundreds of vetted groups via a single dashboard." },
  ];

  // ── Steps ────────────────────────────────────────────────────────────────────
  const steps = [
    {
      num: "01",
      title: "Browse Vetted Groups",
      desc: "Filter by niche, location, member count, and engagement rate. Every group displays transparent group metrics so you know exactly what you're buying.",
      accent: "bg-blue-50 text-blue-600",
    },
    {
      num: "02",
      title: "Submit Your Campaign",
      desc: "Upload your creative — a sponsored group post, pinned announcement, or cover photo ad — and set your campaign dates. We guide you on format and tone.",
      accent: "bg-purple-50 text-purple-600",
    },
    {
      num: "03",
      title: "Go Live & Track Results",
      desc: "Admin-approved promotion goes live within 24 hours. Monitor clicks, reach, and engagement via your real-time campaign dashboard.",
      accent: "bg-green-50 text-green-600",
    },
  ];

  // ── Comparison rows ──────────────────────────────────────────────────────────
  const compare = [
    { feature: "Audience reach guarantee", rmg: true, fbads: false },
    { feature: "Algorithm-free delivery", rmg: true, fbads: false },
    { feature: "Niche audience targeting", rmg: true, fbads: "partial" },
    { feature: "Admin-endorsed placement", rmg: true, fbads: false },
    { feature: "Transparent group metrics", rmg: true, fbads: false },
    { feature: "No minimum ad spend", rmg: true, fbads: false },
    { feature: "Community trust signal", rmg: true, fbads: false },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden mesh-bg">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="animate-slide-up space-y-8">
            <Badge>
              <Facebook size={12} /> Facebook Group Advertising
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.08]">
              Advertise Inside Active{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Facebook Groups
              </span>{' '}
              — Admin Approved
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Rent My Group connects businesses with niche Facebook group owners for community ad placements that feel native, not intrusive. No algorithm. No auction. Just direct access to engaged, self-selected audiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                onClick={() => onOpenModal('advertiser')}
                variant="primary"
                className="w-full sm:w-auto px-10 h-14 text-base"
              >
                <span className="flex items-center gap-2">Find Facebook Groups <ArrowRight size={18} /></span>
              </Button>
              <Button
                onClick={() => onOpenModal('admin')}
                variant="secondary"
                className="w-full sm:w-auto px-10 h-14 text-base bg-white border-slate-200"
              >
                List My Group
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4 text-xs font-bold text-slate-500">
              {['Admin-Approved Promotion', 'Niche Audience Targeting', 'Transparent Group Metrics', 'No Minimum Budget'].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                  <CheckCircle2 size={12} className="text-indigo-500" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatPill value="5,000+" label="Verified Facebook Groups" />
            <StatPill value="12 min" label="Avg. Ad Approval Time" />
            <StatPill value="8×" label="Higher Engagement vs. Feed Ads" />
            <StatPill value="100%" label="Organic, Algorithm-Free Reach" />
          </div>
        </div>
      </section>

      {/* ── AD FORMATS ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Sparkles size={12} /> Community Ad Placements</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Three ways to promote in<br className="hidden md:block" /> Facebook groups
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Every format is published by the group admin — so your promotion lands with the full weight of community trust behind it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <article
                key={i}
                className="relative bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <div className="space-y-3">
                  <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${f.tagColor}`}>
                    {f.tag}
                  </span>
                  <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">{f.title}</h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Target size={12} /> Who Advertises Here</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Built for businesses that need<br className="hidden md:block" /> real-audience reach
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Whether you're promoting a local deal, an online offer, a job post, or an event, there's a Facebook group audience ready for your message.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, i) => (
              <article key={i} className="bg-white border border-slate-200 rounded-[2rem] p-7 flex flex-col gap-4 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100/80 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-base font-display font-black text-slate-900 mb-1">{uc.label}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{uc.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel><Zap size={12} /> Simple Process</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              From brief to live in<br className="hidden md:block" /> <span className="text-indigo-600">three steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-14 left-[18%] right-[18%] h-px bg-slate-100" aria-hidden="true"></div>

            {steps.map((step, i) => (
              <div key={i} className="relative group flex flex-col items-center text-center">
                <div className={`relative w-28 h-28 rounded-[2rem] ${step.accent} flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-5xl font-display font-black opacity-30">{step.num}</span>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-black shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {parseInt(step.num)}
                  </div>
                </div>
                <h3 className="text-xl font-display font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-[260px]">{step.desc}</p>
                {i < 2 && <div className="md:hidden mt-10 text-slate-200"><ArrowRight size={28} className="rotate-90" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden="true"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">
              <BarChart3 size={12} /> Why Community Ads Win
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.05]">
              Group advertising vs.<br /> Facebook Ads Manager
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 px-8 py-5 border-b border-white/10 text-[10px] font-black uppercase tracking-widest">
              <div className="text-slate-400 col-span-1">Feature</div>
              <div className="text-center text-indigo-400">Rent My Group</div>
              <div className="text-center text-slate-500">FB Ads Manager</div>
            </div>

            {compare.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 px-8 py-5 items-center ${i < compare.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}>
                <span className="text-sm font-semibold text-slate-300">{row.feature}</span>
                <div className="flex justify-center">
                  <CheckCircle2 size={20} className="text-green-400" />
                </div>
                <div className="flex justify-center">
                  {row.fbads === 'partial' ? (
                    <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">Partial</span>
                  ) : (
                    <span className="w-5 h-0.5 bg-red-500/60 rounded-full block"></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Star size={12} /> Advertiser Results</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Businesses that made the switch
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "We promoted our open house in three local neighbourhood Facebook groups. We had 40 enquiries in 48 hours — more than our entire paid Facebook Ads campaign that month.",
                name: "Sarah T.",
                role: "Real Estate Agent, Toronto",
                metric: "40 enquiries in 48h",
              },
              {
                quote: "Our Shopify store needed hyper-targeted buyers, not random scroll traffic. One sponsored group post in a parenting group tripled our ROAS for that product line.",
                name: "Marcus L.",
                role: "E-Commerce Brand Owner",
                metric: "3× ROAS improvement",
              },
              {
                quote: "I run a Telegram and Facebook study group with 12,000 members. Having pre-vetted, admin-approved sponsors means my community trusts the recommendations — and I earn passive income.",
                name: "Priya R.",
                role: "Community Admin & Educator",
                metric: "$1,800/mo passive income",
              },
            ].map((t, i) => (
              <article key={i} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-base font-medium leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-black text-slate-900">{t.name}</div>
                    <div className="text-xs font-medium text-slate-500">{t.role}</div>
                  </div>
                  <span className="text-xs font-black text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full">{t.metric}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Facebook group advertising,{' '}
              <span className="text-indigo-600">explained</span>
            </h2>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                icon={faq.icon}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium mb-3">Still have questions about paid promotion in Facebook groups?</p>
            <a href="mailto:support@rentmygroup.com" className="text-indigo-600 font-black hover:text-indigo-700 underline underline-offset-4">
              Talk to our advertising team
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" aria-hidden="true"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200">
              <Facebook size={12} /> Facebook Group Advertising
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.1]">
              Ready to reach your<br /> niche Facebook audience?
            </h2>
            <p className="text-indigo-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Browse 5,000+ vetted Facebook groups filtered by niche, location, and member count. Place your first community ad placement today — no minimum budget, no bidding war.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('advertiser')} variant="secondary" className="h-14 px-10 text-base">
                Browse Facebook Groups
              </Button>
              <Button onClick={() => onOpenModal('admin')} variant="outline" className="h-14 px-10 text-base">
                List My Group
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
