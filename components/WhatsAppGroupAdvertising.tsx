import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
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
  Lock,
  Bell,
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

// ─── Shared atoms ─────────────────────────────────────────────────────────────

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-[10px] font-black uppercase tracking-[0.2em]">
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
    <span className="text-2xl md:text-3xl font-display font-black text-green-600">{value}</span>
    <span className="text-xs font-bold text-slate-500 mt-1 text-center">{label}</span>
  </div>
);

// ─── WhatsApp message mockup ──────────────────────────────────────────────────

const WhatsAppMockup: React.FC = () => (
  <div className="w-full max-w-sm mx-auto bg-[#0b141a] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
    {/* Header */}
    <div className="bg-[#1f2c33] px-4 py-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-sm shrink-0">
        NG
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-bold truncate">NYC Neighbours Hub</div>
        <div className="text-[#8696a0] text-xs">4,812 members</div>
      </div>
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
    </div>

    {/* Chat area */}
    <div className="p-4 space-y-3 bg-[#0b141a] min-h-[260px]">
      {/* Regular message */}
      <div className="max-w-[80%] bg-[#1f2c33] rounded-2xl rounded-tl-sm px-4 py-2.5">
        <div className="text-[11px] font-black text-green-400 mb-1">Admin · Marcus</div>
        <div className="text-[13px] text-white leading-snug">Hey everyone! Quick reminder about the community picnic on Saturday. See you there 🎉</div>
        <div className="text-[10px] text-[#8696a0] mt-1 text-right">10:24 AM</div>
      </div>

      {/* Pinned / sponsored message */}
      <div className="max-w-[80%] ml-auto bg-[#005c4b] rounded-2xl rounded-tr-sm px-4 py-3 border border-green-700/40 shadow-lg">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
          <span className="text-[10px] font-black text-green-300 uppercase tracking-widest">Pinned · Admin-Approved</span>
        </div>
        <div className="text-[13px] text-white font-semibold leading-snug mb-1">
          🏡 Local mortgage rates just dropped. Free rate check for NYC residents →
        </div>
        <div className="text-[11px] text-green-200/70">Sponsored by HomeFirst Lending</div>
        <div className="text-[10px] text-[#8696a0] mt-1 text-right">10:25 AM</div>
      </div>

      {/* Engagement */}
      <div className="flex items-center gap-2 ml-2">
        <div className="text-[11px] text-[#8696a0]">👍 94  ❤️ 31  🔗 47 clicks</div>
      </div>
    </div>
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

// ─── Main page ────────────────────────────────────────────────────────────────

export const WhatsAppGroupAdvertising: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      icon: <MessageCircle size={18} />,
      question: "What is WhatsApp group advertising?",
      answer: "WhatsApp group advertising through Rent My Group means placing an approved promotion inside a relevant WhatsApp group through the group owner or admin. The admin posts your message on your behalf as a pinned announcement or community update — making it feel native to the group rather than an intrusive ad.",
    },
    {
      icon: <ShieldCheck size={18} />,
      question: "Is this compliant with WhatsApp's terms of service?",
      answer: "Yes. Group admins have the authority to post any content they choose in their own groups, including sponsored announcements from brand partners. Rent My Group facilitates these direct brand-to-admin relationships. We never send unsolicited messages — every promotion is invited and admin-approved before it goes live.",
    },
    {
      icon: <Bell size={18} />,
      question: "Why is WhatsApp group promotion so effective?",
      answer: "WhatsApp messages trigger a push notification and land directly in an active group conversation — there's no news feed algorithm filtering your reach. Members have already opted into the group, so they are self-selected around the niche your offer targets. Our advertisers consistently see 5–10× higher click rates than equivalent Facebook feed ads.",
    },
    {
      icon: <Target size={18} />,
      question: "How do I find the right WhatsApp groups for my business?",
      answer: "Use our marketplace to filter groups by niche category, country, city, member count, and verified engagement rate. Every listing shows transparent group metrics — active member count, average weekly messages, and admin response time — so you can make an informed decision before purchasing a placement.",
    },
    {
      icon: <Lock size={18} />,
      question: "What does an admin-approved WhatsApp promotion look like?",
      answer: "The admin posts a short message on your behalf — typically a 2–3 sentence announcement with a link. It may be pinned to the top of the group for your campaign duration. The tone mirrors how the admin normally communicates, keeping it conversational and trusted rather than ad-like.",
    },
    {
      icon: <BarChart3 size={18} />,
      question: "How do I measure results from a WhatsApp community promotion?",
      answer: "You provide a trackable link (UTM or short link) in your creative. We report click-through data, admin confirmation screenshots, and reach estimates based on active member count. For pinned promotions, we also track message reactions and saves during the campaign window.",
    },
  ];

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  }), []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'wa-group-faq-ld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.getElementById('wa-group-faq-ld')?.remove(); };
  }, [jsonLd]);

  // ── Ad formats ──────────────────────────────────────────────────────────────
  const formats = [
    {
      icon: <Bell size={28} />,
      title: "Pinned Group Announcement",
      desc: "Your approved promotion stays pinned at the top of the group conversation. Every new message in the group pushes members to scroll up and see it — constant, passive visibility.",
      tag: "Highest Visibility",
      tagColor: "bg-green-50 text-green-700 border-green-100",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Admin-Posted Community Update",
      desc: "The group owner posts your message as a community update in their own voice. Because it comes from a trusted admin, it reads as a genuine recommendation — not an ad.",
      tag: "Highest Trust",
      tagColor: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Weekly Sponsor Slot",
      desc: "Secure a recurring mention in the admin's weekly group summary or digest post. Ideal for ongoing brand presence across a niche community over multiple weeks.",
      tag: "Long-Term Reach",
      tagColor: "bg-purple-50 text-purple-700 border-purple-100",
    },
  ];

  // ── Business types ───────────────────────────────────────────────────────────
  const useCases = [
    { icon: <Home size={20} />, label: "Real Estate & Rentals", desc: "Reach prospective buyers and renters in local neighbourhood and city WhatsApp groups." },
    { icon: <ShoppingBag size={20} />, label: "E-Commerce & DTC", desc: "Place product promotions in niche buyer groups — fitness, beauty, tech, and more." },
    { icon: <Megaphone size={20} />, label: "Event Promoters", desc: "Fill venues and virtual events by promoting inside groups where your audience already hangs out." },
    { icon: <Briefcase size={20} />, label: "Recruiters & Job Boards", desc: "Reach skilled professionals in trade, tech, and industry-specific WhatsApp communities." },
    { icon: <BookOpen size={20} />, label: "Courses & Coaching", desc: "Promote programmes directly to interest-based groups whose members are actively looking to upskill." },
    { icon: <Globe size={20} />, label: "Affiliate & Digital Offers", desc: "Drive conversions in tightly focused groups where members are already invested in the niche." },
    { icon: <MapPin size={20} />, label: "Local Businesses & SMBs", desc: "Target your immediate area — restaurant deals, service offers, and local events inside your city's groups." },
    { icon: <Users size={20} />, label: "Agencies & Media Buyers", desc: "Scale client campaigns across hundreds of vetted WhatsApp groups via a single managed dashboard." },
  ];

  // ── Steps ────────────────────────────────────────────────────────────────────
  const steps = [
    {
      num: "01",
      title: "Browse Verified Groups",
      desc: "Filter WhatsApp groups by niche, location, member count, and weekly activity. Transparent group metrics let you compare groups before you commit.",
      accent: "bg-green-50 text-green-700",
    },
    {
      num: "02",
      title: "Submit Your Promotion",
      desc: "Write your approved promotion text and drop in your tracking link. Our team reviews the copy for tone and community fit, then routes it to the admin.",
      accent: "bg-blue-50 text-blue-700",
    },
    {
      num: "03",
      title: "Go Live & Measure",
      desc: "The admin posts your message. You receive a confirmation screenshot, a click report, and engagement data within 24 hours of the placement going live.",
      accent: "bg-purple-50 text-purple-700",
    },
  ];

  // ── Comparison ───────────────────────────────────────────────────────────────
  const compare = [
    { feature: "Push notification delivery", rmg: true, traditional: false },
    { feature: "Algorithm-free reach", rmg: true, traditional: false },
    { feature: "Self-selected niche audience", rmg: true, traditional: "partial" },
    { feature: "Admin-endorsed placement", rmg: true, traditional: false },
    { feature: "Transparent group metrics", rmg: true, traditional: false },
    { feature: "No minimum ad spend", rmg: true, traditional: false },
    { feature: "Conversational, non-intrusive format", rmg: true, traditional: false },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden mesh-bg">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div className="animate-slide-up space-y-8">
              <Badge>
                <MessageCircle size={12} /> WhatsApp Group Advertising
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.08]">
                Place Approved Promotions Inside Active{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  WhatsApp Groups
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                Rent My Group helps advertisers place approved promotions inside relevant WhatsApp groups through group owners and admins. Reach self-selected, high-intent audiences — delivered with full community trust.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button
                  onClick={() => onOpenModal('advertiser')}
                  variant="primary"
                  className="w-full sm:w-auto px-10 h-14 text-base"
                >
                  <span className="flex items-center gap-2">Find WhatsApp Groups <ArrowRight size={18} /></span>
                </Button>
                <Button
                  onClick={() => onOpenModal('admin')}
                  variant="secondary"
                  className="w-full sm:w-auto px-10 h-14 text-base bg-white border-slate-200"
                >
                  List My Group
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500">
                {['Admin-Approved Only', 'No Spam, Ever', 'Niche Audience Targeting', 'Transparent Group Metrics'].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                    <CheckCircle2 size={12} className="text-green-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="animate-float">
                <WhatsAppMockup />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatPill value="3,000+" label="Vetted WhatsApp Groups" />
            <StatPill value="98%" label="Open Rate on Pinned Posts" />
            <StatPill value="5–10×" label="Higher CTR vs. Social Feed Ads" />
            <StatPill value="24h" label="Average Time to Go Live" />
          </div>
        </div>
      </section>

      {/* ── WHY WHATSAPP ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <SectionLabel><Zap size={12} /> Why WhatsApp Works</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
                Your message delivered,<br /> not buried
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                WhatsApp group messages trigger a push notification every time. There is no algorithm deciding whether members see your promotion — every active member in the group receives it directly on their phone.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Bell size={18} className="text-green-600" />, title: "Push notification delivery", desc: "Members are notified the moment the admin posts your approved promotion." },
                  { icon: <Lock size={18} className="text-green-600" />, title: "High-trust, closed-group environment", desc: "WhatsApp groups are private communities. Messages come from known admins, not anonymous advertisers." },
                  { icon: <Target size={18} className="text-green-600" />, title: "Self-selected niche audience", desc: "Members joined the group around a shared interest — your promotion is already relevant before they read a word." },
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-sm mb-1">{point.title}</div>
                      <div className="text-slate-500 text-sm font-medium leading-relaxed">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="space-y-5">
              <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-600/10 rounded-full -translate-y-10 translate-x-10 blur-2xl" aria-hidden="true"></div>
                <div className="relative z-10 space-y-6">
                  <div className="text-5xl font-display font-black text-green-500/20 leading-none select-none">"</div>
                  <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                    WhatsApp community advertising works because the trust already exists. The admin has spent months or years building a relationship with group members. When they post your offer, it carries their endorsement.
                  </p>
                  <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 font-black text-sm shrink-0">
                      RMG
                    </div>
                    <div>
                      <div className="text-sm font-black text-white">Rent My Group</div>
                      <div className="text-xs font-medium text-slate-400">Community Advertising Marketplace</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-green-50 border border-green-100 rounded-[2rem] p-6 text-center">
                  <div className="text-4xl font-display font-black text-green-700 mb-1">98%</div>
                  <div className="text-xs font-bold text-green-600">Messages opened within 5 min</div>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded-[2rem] p-6 text-center">
                  <div className="text-4xl font-display font-black text-indigo-700 mb-1">12×</div>
                  <div className="text-xs font-bold text-indigo-600">More replies than email newsletters</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── AD FORMATS ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Sparkles size={12} /> Promotion Formats</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Three ways to promote<br className="hidden md:block" /> inside WhatsApp groups
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Every format is delivered by the group admin — so your promotion carries genuine community authority, not the feel of an ad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <article
                key={i}
                className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center text-green-700 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors duration-300">
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
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Target size={12} /> Who Advertises Here</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Any business that needs<br className="hidden md:block" /> direct-access reach
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, i) => (
              <article key={i} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-7 flex flex-col gap-4 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors duration-300">
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
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel><Zap size={12} /> Simple Process</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              From brief to live in<br className="hidden md:block" /> <span className="text-green-600">three steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-14 left-[18%] right-[18%] h-px bg-slate-200" aria-hidden="true"></div>

            {steps.map((step, i) => (
              <div key={i} className="relative group flex flex-col items-center text-center">
                <div className={`relative w-28 h-28 rounded-[2rem] ${step.accent} flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-5xl font-display font-black opacity-20">{step.num}</span>
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
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden="true"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-green-300 text-[10px] font-black uppercase tracking-[0.2em]">
              <BarChart3 size={12} /> Why Community Ads Win
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.05]">
              WhatsApp group promotion vs.<br /> traditional digital advertising
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
            <div className="grid grid-cols-3 px-8 py-5 border-b border-white/10 text-[10px] font-black uppercase tracking-widest">
              <div className="text-slate-400 col-span-1">Feature</div>
              <div className="text-center text-green-400">Rent My Group</div>
              <div className="text-center text-slate-500">Traditional Ads</div>
            </div>

            {compare.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 px-8 py-5 items-center ${i < compare.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors`}>
                <span className="text-sm font-semibold text-slate-300">{row.feature}</span>
                <div className="flex justify-center">
                  <CheckCircle2 size={20} className="text-green-400" />
                </div>
                <div className="flex justify-center">
                  {row.traditional === 'partial' ? (
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
              Businesses that chose<br /> WhatsApp community advertising
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "We promoted a flash sale through a local mums WhatsApp group. 212 link clicks in 6 hours — more than our entire Instagram story campaign. The community trust is unmatched.",
                name: "Leila S.",
                role: "DTC Baby Products Brand",
                metric: "212 clicks in 6 hours",
              },
              {
                quote: "Running a hiring campaign in tech WhatsApp groups gave us qualified applicants we'd never reach on LinkedIn. These are passive candidates who are active and engaged daily.",
                name: "Dimitri A.",
                role: "Tech Recruiter, London",
                metric: "3× qualified applicants",
              },
              {
                quote: "I admin three WhatsApp groups with 15,000 combined members. Rent My Group lets me approve only the sponsors I trust and earn recurring income without ever touching my community's vibe.",
                name: "Aisha B.",
                role: "Community Admin, Lagos",
                metric: "$2,400/mo in sponsorships",
              },
            ].map((t, i) => (
              <article key={i} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 hover:shadow-lg hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300">
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
                  <span className="text-xs font-black text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">{t.metric}</span>
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
              WhatsApp group promotion,{' '}
              <span className="text-green-600">explained</span>
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
            <p className="text-slate-500 font-medium mb-3">More questions about paid WhatsApp group promotion?</p>
            <a href="mailto:support@rentmygroup.com" className="text-indigo-600 font-black hover:text-indigo-700 underline underline-offset-4">
              Talk to our advertising team
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-green-600 to-emerald-700 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" aria-hidden="true"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-green-100">
              <MessageCircle size={12} /> WhatsApp Community Advertising
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.1]">
              Ready to reach your<br /> WhatsApp audience?
            </h2>
            <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Browse 3,000+ vetted WhatsApp groups filtered by niche, location, and engagement rate. Place your first admin-approved promotion today — no minimum budget, no algorithm to fight.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('advertiser')} variant="secondary" className="h-14 px-10 text-base">
                Browse WhatsApp Groups
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
