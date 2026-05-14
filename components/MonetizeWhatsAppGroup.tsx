import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  BarChart3,
  ShieldCheck,
  Users,
  Zap,
  Star,
  Sparkles,
  DollarSign,
  MessageCircle,
  TrendingUp,
  Clock,
  Lock,
  BadgeCheck,
  Banknote,
  Filter,
  Bell,
  Globe,
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

// ─── Shared atoms ─────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
    {children}
  </div>
);

// ─── WhatsApp admin mockup ────────────────────────────────────────────────────

const WhatsAppAdminMockup: React.FC = () => (
  <div className="w-full max-w-sm mx-auto bg-[#0b141a] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
    {/* Header */}
    <div className="bg-[#1f2c33] px-4 py-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-sm shrink-0">MG</div>
      <div className="flex-1 min-w-0">
        <div className="text-white text-sm font-bold">Mums of Melbourne 🇦🇺</div>
        <div className="text-[#8696a0] text-xs">9,114 members · You're admin</div>
      </div>
    </div>

    {/* Admin notification */}
    <div className="p-4 space-y-3">
      <div className="bg-[#1f2c33] rounded-2xl p-3.5 space-y-2 border border-white/5">
        <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
          <Bell size={10} /> New sponsorship request
        </div>
        <div className="text-white text-xs font-semibold">BabyGear Co. wants to sponsor a pinned post</div>
        <div className="text-[#8696a0] text-[11px]">Offer: $280 · 7-day pinned · Family products</div>
        <div className="flex gap-2 mt-2">
          <button className="flex-1 h-8 bg-emerald-600 rounded-xl text-white text-[11px] font-black">Accept</button>
          <button className="flex-1 h-8 bg-white/10 rounded-xl text-white text-[11px] font-black">Review</button>
        </div>
      </div>

      {/* Earnings summary */}
      <div className="bg-[#005c4b] rounded-2xl p-4 border border-green-700/30">
        <div className="text-[10px] font-black text-green-300 uppercase tracking-widest mb-3">This Month's Earnings</div>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-3xl font-display font-black text-white">$740</span>
          <span className="text-green-300 text-sm font-bold">+24%</span>
        </div>
        <div className="space-y-1.5">
          {[
            { label: 'Pinned post × 2', value: '$420' },
            { label: 'Weekly mention × 4', value: '$320' },
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-[11px] font-semibold">
              <span className="text-green-200/70">{row.label}</span>
              <span className="text-green-300">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ─── Earnings estimator ───────────────────────────────────────────────────────

const EarningsEstimator: React.FC = () => {
  const [members, setMembers] = useState(3000);

  const weekly = Math.round((members / 1000) * 22);
  const monthly = weekly * 4;
  const annual = monthly * 12;

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-lg space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-slate-700 uppercase tracking-widest">Group Size</span>
          <span className="text-lg font-display font-black text-green-600">{members.toLocaleString()} members</span>
        </div>
        <input
          type="range"
          min={200}
          max={50000}
          step={200}
          value={members}
          onChange={e => setMembers(Number(e.target.value))}
          className="w-full accent-green-600"
          aria-label="Adjust WhatsApp group member count"
        />
        <div className="flex justify-between text-[10px] font-bold text-slate-400">
          <span>200</span><span>50,000+</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Per Week', value: `$${weekly}` },
          { label: 'Per Month', value: `$${monthly.toLocaleString()}` },
          { label: 'Per Year', value: `$${annual.toLocaleString()}` },
        ].map((item, i) => (
          <div key={i} className={`rounded-2xl p-4 text-center ${i === 1 ? 'bg-green-600 text-white shadow-xl shadow-green-600/30' : 'bg-slate-50 border border-slate-100'}`}>
            <div className={`text-2xl font-display font-black ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
            <div className={`text-[10px] font-bold mt-1 uppercase tracking-widest ${i === 1 ? 'text-green-100' : 'text-slate-500'}`}>{item.label}</div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-400 font-medium text-center leading-relaxed">
        WhatsApp groups typically earn 20–30% more per member than Facebook groups due to higher engagement rates and push notification delivery. Estimates vary by niche and activity.
      </p>
    </div>
  );
};

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
          <ChevronDown size={18} className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
          <p className="text-slate-600 text-base leading-relaxed font-medium pb-2">{answer}</p>
        </div>
      </div>
    </button>
  </div>
);

// ─── Main page ────────────────────────────────────────────────────────────────

export const MonetizeWhatsAppGroup: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      icon: <Users size={18} />,
      question: "Who can list a WhatsApp group on Rent My Group?",
      answer: "Any WhatsApp group owner or admin can list. You need to be the group admin with posting rights, and your group should have at least 200 active members. We accept groups from any country and any niche. The key requirement is that you run a genuine, engaged community — not a dormant or artificially-inflated list.",
    },
    {
      icon: <MessageCircle size={18} />,
      question: "What type of WhatsApp groups work best?",
      answer: "Groups built around a clear niche, location, or shared interest attract the most advertisers and command the highest rates. Top performers include: local neighbourhood and city groups, parenting and family communities, professional and industry networks, health and wellness communities, and interest-based groups (food, crypto, fitness, travel). The more specific your group's identity, the more valuable it is to niche advertisers.",
    },
    {
      icon: <BadgeCheck size={18} />,
      question: "How are sponsored promotions approved in WhatsApp groups?",
      answer: "Every sponsorship request comes to you first. You receive the advertiser's brief, proposed message copy, and offer amount. You can accept as-is, request copy changes, or decline entirely. Nothing is posted without your explicit approval. You can also set rules in advance — approved categories, blocked topics, maximum weekly posts — so only matching requests even reach you.",
    },
    {
      icon: <Lock size={18} />,
      question: "How do I protect my group's quality while earning?",
      answer: "Your approval rights are absolute — you can reject any request for any reason. We also let you set a maximum number of sponsored posts per week, block entire advertiser categories, and rate advertisers after each campaign. Poor-rated advertisers are removed from the platform. The goal is for your members to experience sponsored posts as useful community updates, not disruptive ads.",
    },
    {
      icon: <DollarSign size={18} />,
      question: "How does WhatsApp group sponsorship pricing work?",
      answer: "You set your own rates. When you list your group, you enter your pricing for each placement type — pinned announcement, admin-posted update, or weekly mention slot. Advertisers see these rates when browsing the marketplace and either accept or send a custom offer. We provide market rate benchmarks based on your group size and niche so you always price competitively.",
    },
    {
      icon: <Banknote size={18} />,
      question: "When and how do I receive payment?",
      answer: "Payouts are processed via Stripe to your bank account or PayPal within 7 days of each completed campaign. Funds are held in escrow from the moment an advertiser books, so you're guaranteed payment even if they cancel after you've posted. There are no payout minimums — every completed sponsorship triggers a transfer.",
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
    script.id = 'monetize-wa-faq-ld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.getElementById('monetize-wa-faq-ld')?.remove(); };
  }, [jsonLd]);

  // ── Earning formats ──────────────────────────────────────────────────────
  const formats = [
    {
      icon: <Bell size={26} />,
      title: "Pinned Announcement Slot",
      desc: "Your sponsored partner's message stays pinned at the top of the group. Every active member sees it — and new members see it first. Consistent, passive visibility throughout the campaign.",
      earn: "Avg. $120–$600/campaign",
    },
    {
      icon: <MessageCircle size={26} />,
      title: "Admin Community Update",
      desc: "You post a short, conversational sponsor message in your own voice as a regular group update. Because it comes from you, members treat it as a trusted recommendation — far higher engagement than a labelled ad.",
      earn: "Avg. $80–$400/post",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Weekly Mention Slot",
      desc: "A recurring sponsor mention in your weekly summary or community digest. Ideal for brands that want sustained presence across multiple weeks at a predictable, recurring rate.",
      earn: "Avg. $60–$250/week",
    },
  ];

  // ── Group eligibility criteria ───────────────────────────────────────────
  const criteria = [
    { icon: <Users size={18} />, title: "Active member base", desc: "200+ members who regularly read and respond to group messages." },
    { icon: <MessageCircle size={18} />, title: "Clear group identity", desc: "A defined niche, topic, or geographic focus that advertisers can target." },
    { icon: <ShieldCheck size={18} />, title: "Admin-moderated quality", desc: "A group you actively manage — removing spam, approving members, setting tone." },
    { icon: <Bell size={18} />, title: "Real engagement", desc: "Members who react, reply, and click — not a dormant or broadcast-only group." },
  ];

  // ── Protection features ──────────────────────────────────────────────────
  const protections = [
    { icon: <Filter size={20} />, title: "Full approval rights", desc: "Every request requires your explicit approval before anything is posted." },
    { icon: <Lock size={20} />, title: "Category blocking", desc: "Permanently block advertiser categories that don't fit your community standards." },
    { icon: <Clock size={20} />, title: "Frequency controls", desc: "Cap how many sponsored posts appear per week — your feed stays authentic." },
    { icon: <BadgeCheck size={20} />, title: "Vetted advertisers", desc: "Every advertiser on the platform is reviewed before they can reach group admins." },
    { icon: <Star size={20} />, title: "Two-way ratings", desc: "Rate advertisers after each campaign. Poor performers are removed from the marketplace." },
    { icon: <Globe size={20} />, title: "Disclosure templates", desc: "Built-in disclosure language keeps every post transparent and trust-preserving for your members." },
  ];

  // ── Steps ────────────────────────────────────────────────────────────────
  const steps = [
    {
      num: "01",
      title: "List Your Group",
      desc: "Create a free admin profile in under five minutes. Add your group's member count, niche, and engagement data. Our team verifies and activates your listing within 48 hours.",
      accent: "bg-green-50 text-green-700",
    },
    {
      num: "02",
      title: "Review & Approve Requests",
      desc: "Advertisers discover your group and send sponsorship requests with their brief and offer. You review every single one — accept, decline, or negotiate before anything is confirmed.",
      accent: "bg-blue-50 text-blue-700",
    },
    {
      num: "03",
      title: "Post & Get Paid",
      desc: "Post the approved message as a normal group update. Your payout is released automatically within 7 days of the campaign completing — straight to your bank or PayPal.",
      accent: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden mesh-bg">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div className="animate-slide-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-800 text-[10px] font-black uppercase tracking-[0.2em]">
                <MessageCircle size={12} /> For WhatsApp Group Admins
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.08]">
                Make Money From Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  WhatsApp Group
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                If you manage an active WhatsApp group, you can list it on Rent My Group and earn money by approving sponsored promotions from relevant advertisers — in your own voice, on your schedule, with complete control over who you work with.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button
                  onClick={() => onOpenModal('admin')}
                  variant="primary"
                  className="w-full sm:w-auto px-10 h-14 text-base"
                >
                  <span className="flex items-center gap-2">List My WhatsApp Group <ArrowRight size={18} /></span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500">
                {['Free to List', 'You Approve Every Post', 'Paid Within 7 Days', 'No Spam, Ever'].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                    <CheckCircle2 size={12} className="text-green-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="animate-float">
                <WhatsAppAdminMockup />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHO CAN LIST ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <SectionLabel><Users size={12} /> Group Eligibility</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
                Who can list a<br /> WhatsApp group?
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                If you're a group admin with an active, engaged community around any topic, location, or interest — you're eligible to list. We're not looking for the biggest groups; we're looking for the most trusted ones.
              </p>

              <div className="space-y-4">
                {criteria.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-sm">{c.title}</div>
                      <div className="text-slate-500 text-sm font-medium mt-0.5">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Niche examples */}
            <div className="space-y-6">
              <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white">
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Best-Performing WhatsApp Group Niches</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Local neighbourhood groups",
                    "Parents & family communities",
                    "Health & wellness groups",
                    "Crypto & investing hubs",
                    "Food & dining communities",
                    "Career & professional networks",
                    "Sports & fitness groups",
                    "Study & education groups",
                  ].map((niche, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></div>
                      <span className="text-xs font-semibold text-slate-300 leading-tight">{niche}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-green-50 border border-green-100 rounded-[2rem] p-6 text-center">
                  <div className="text-4xl font-display font-black text-green-700 mb-1">$0</div>
                  <div className="text-xs font-bold text-green-600">Cost to list your group</div>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded-[2rem] p-6 text-center">
                  <div className="text-4xl font-display font-black text-indigo-700 mb-1">48h</div>
                  <div className="text-xs font-bold text-indigo-600">Average time to first listing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EARNINGS ESTIMATOR ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionLabel><DollarSign size={12} /> Earnings Potential</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
                How much can your WhatsApp group earn?
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                WhatsApp groups typically earn more per member than other platforms because of higher engagement rates and push notification delivery. Drag the slider to see your estimate.
              </p>
              <div className="space-y-3">
                {[
                  "Earn on top of your existing income — no disruption",
                  "Set your own rates based on market benchmarks",
                  "Withdraw any time — no contracts or lock-ins",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    <span className="text-slate-700 font-semibold text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <EarningsEstimator />
          </div>
        </div>
      </section>

      {/* ── HOW ADMINS EARN ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Sparkles size={12} /> Earning Formats</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Three ways to earn from<br className="hidden md:block" /> your WhatsApp group
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Mix and match formats to maximise monthly income while keeping your group frequency at a level your members are comfortable with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <article key={i} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-xl hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center text-green-700 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors duration-300">
                  {f.icon}
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">{f.title}</h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">{f.desc}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-green-50 border border-green-100 rounded-2xl w-fit">
                  <DollarSign size={14} className="text-green-600" />
                  <span className="text-xs font-black text-green-700">{f.earn}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW APPROVAL WORKS ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel><Zap size={12} /> The Process</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              List, approve, earn —<br className="hidden md:block" /> <span className="text-green-600">in three steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-14 left-[18%] right-[18%] h-px bg-slate-100" aria-hidden="true"></div>
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

      {/* ── PROTECTION ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden="true"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-green-300 text-[10px] font-black uppercase tracking-[0.2em]">
              <Lock size={12} /> Community Protection
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.05]">
              Your group. Your standards.<br /> Your rules.
            </h2>
            <p className="mt-6 text-slate-400 text-lg font-medium max-w-2xl mx-auto">
              Every tool in Rent My Group is built to protect the community you've spent months or years building. Earning income should never compromise the trust you've earned from your members.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {protections.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-7 flex flex-col gap-4 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400">
                  {item.icon}
                </div>
                <div>
                  <div className="font-black text-white text-base mb-1">{item.title}</div>
                  <div className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CONTEXT ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><BarChart3 size={12} /> How Pricing Works</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              You set your price.<br /> We provide the data.
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              There's no algorithm or auction deciding what your group is worth. You set your own rates for each placement type, and advertisers either accept or negotiate directly with you.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                range: "$50–$300",
                per: "per campaign",
                size: "200–2,000 members",
                note: "Micro-communities with high engagement in specific niches",
              },
              {
                range: "$300–$1,200",
                per: "per campaign",
                size: "2,000–10,000 members",
                note: "Mid-size groups with strong niche identity and active daily chat",
                highlight: true,
              },
              {
                range: "$1,000+",
                per: "per campaign",
                size: "10,000+ members",
                note: "Large, established communities with documented engagement rates",
              },
            ].map((tier, i) => (
              <div key={i} className={`rounded-[2.5rem] p-8 border text-center flex flex-col gap-4 ${tier.highlight ? 'bg-green-600 border-green-500 shadow-2xl shadow-green-600/30' : 'bg-slate-50 border-slate-100'}`}>
                <div className={`text-4xl font-display font-black ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.range}</div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${tier.highlight ? 'text-green-200' : 'text-slate-500'}`}>{tier.per}</div>
                <div className={`text-sm font-black ${tier.highlight ? 'text-green-100' : 'text-slate-700'}`}>{tier.size}</div>
                <div className={`text-xs font-medium leading-relaxed ${tier.highlight ? 'text-green-200' : 'text-slate-500'}`}>{tier.note}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm font-medium mt-8">
            High-value niches (finance, real estate, health) typically earn 2–3× the average for their member count.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Star size={12} /> Admin Stories</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              WhatsApp group admins<br /> already earning
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I run a 6,000-member mums group in Johannesburg. I was sceptical about sponsored posts, but I only approved baby and family brands I'd personally use. My members actually DM me asking where to buy the products. That's how relevant the sponsors are.",
                name: "Zanele M.",
                role: "Admin, JHB Mums & Babies (6,000 members)",
                metric: "$580/month",
              },
              {
                quote: "My crypto trading group has 4,800 members. I earn from one pinned sponsor post per week — always crypto-relevant, always vetted. It's become a significant side income and I've never had a single complaint from my community.",
                name: "Rafael T.",
                role: "Admin, Crypto Traders ZA (4,800 members)",
                metric: "$1,100/month",
              },
              {
                quote: "I manage 5 WhatsApp groups across different industries. Rent My Group lets me handle all the admin in one place — requests, approvals, invoices. The income across all groups totals about $2,400 monthly.",
                name: "Priya N.",
                role: "Multi-group Admin, UK & India",
                metric: "$2,400/month",
              },
            ].map((t, i) => (
              <article key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 hover:shadow-lg hover:shadow-green-500/5 hover:-translate-y-1 transition-all duration-300">
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
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              WhatsApp group monetization,{' '}
              <span className="text-green-600">answered</span>
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
            <p className="text-slate-500 font-medium mb-3">More questions about earning from your WhatsApp group?</p>
            <a href="mailto:support@rentmygroup.com" className="text-indigo-600 font-black hover:text-indigo-700 underline underline-offset-4">
              Talk to our admin support team
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
              <MessageCircle size={12} /> Monetize Your WhatsApp Group
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.1]">
              Your group is already earning<br /> someone's attention. Get paid for it.
            </h2>
            <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Listing is free and takes under five minutes. Join thousands of WhatsApp group admins earning passive income through Rent My Group — without ever sacrificing the quality of their community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('admin')} variant="secondary" className="h-14 px-10 text-base">
                List My WhatsApp Group
              </Button>
              <Button onClick={() => onOpenModal('advertiser')} variant="outline" className="h-14 px-10 text-base">
                I'm an Advertiser
              </Button>
            </div>
            <p className="text-green-200 text-xs font-bold">Free to list · No exclusivity · You approve every post</p>
          </div>
        </div>
      </section>

    </div>
  );
};
