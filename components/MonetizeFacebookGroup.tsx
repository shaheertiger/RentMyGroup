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
  Facebook,
  TrendingUp,
  Clock,
  Lock,
  Image,
  MessageSquare,
  BadgeCheck,
  Banknote,
  Filter,
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

// ─── Shared atoms ─────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
    {children}
  </div>
);

// ─── Facebook group mockup ────────────────────────────────────────────────────

const FacebookGroupMockup: React.FC = () => (
  <div className="w-full max-w-sm mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
    {/* Cover photo */}
    <div className="h-28 bg-gradient-to-br from-blue-500 to-indigo-700 relative flex items-end p-4">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
      <div className="relative z-10 bg-white/10 border border-white/30 rounded-xl px-3 py-1.5 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
        <Image size={10} /> Sponsored Cover Slot Active
      </div>
    </div>

    {/* Group info */}
    <div className="px-4 pt-3 pb-4 border-b border-slate-100">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg border-4 border-white shadow-md -mt-8 shrink-0">
          NYC
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <div className="font-black text-slate-900 text-sm leading-tight">NYC Foodies & Restaurants</div>
          <div className="text-[11px] text-slate-500 mt-0.5">28,400 members · Public Group</div>
        </div>
      </div>
    </div>

    {/* Pinned sponsored post */}
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <BadgeCheck size={11} className="text-indigo-500" /> Pinned · Sponsored Post
      </div>
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-3.5 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[10px] font-black shrink-0">A</div>
          <div className="text-[11px] font-black text-indigo-700">Admin · Community Sponsor</div>
        </div>
        <div className="text-xs font-medium text-slate-700 leading-relaxed">
          🍕 Hey foodies! Our sponsor this week is <span className="font-black text-indigo-600">Slice Republic</span> — grab 20% off your first order with code NYC20 →
        </div>
        <div className="flex gap-3 text-[10px] text-slate-400 font-bold pt-1">
          <span>👍 312</span><span>💬 47</span><span>🔗 189 clicks</span>
        </div>
      </div>

      {/* Earnings badge */}
      <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-2xl px-4 py-3">
        <div className="flex items-center gap-2">
          <DollarSign size={14} className="text-green-600" />
          <span className="text-xs font-black text-green-700">This week's payout</span>
        </div>
        <span className="text-lg font-display font-black text-green-700">$320</span>
      </div>
    </div>
  </div>
);

// ─── Earnings calculator ──────────────────────────────────────────────────────

const EarningsEstimator: React.FC = () => {
  const [members, setMembers] = useState(5000);

  const weekly = Math.round((members / 1000) * 18);
  const monthly = weekly * 4;
  const annual = monthly * 12;

  return (
    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-lg space-y-8">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-slate-700 uppercase tracking-widest">Group Size</span>
          <span className="text-lg font-display font-black text-indigo-600">{members.toLocaleString()} members</span>
        </div>
        <input
          type="range"
          min={500}
          max={100000}
          step={500}
          value={members}
          onChange={e => setMembers(Number(e.target.value))}
          className="w-full accent-indigo-600"
          aria-label="Adjust group member count"
        />
        <div className="flex justify-between text-[10px] font-bold text-slate-400">
          <span>500</span><span>100,000+</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Per Week', value: `$${weekly}` },
          { label: 'Per Month', value: `$${monthly.toLocaleString()}` },
          { label: 'Per Year', value: `$${annual.toLocaleString()}` },
        ].map((item, i) => (
          <div key={i} className={`rounded-2xl p-4 text-center ${i === 1 ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30' : 'bg-slate-50 border border-slate-100'}`}>
            <div className={`text-2xl font-display font-black ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
            <div className={`text-[10px] font-bold mt-1 uppercase tracking-widest ${i === 1 ? 'text-indigo-200' : 'text-slate-500'}`}>{item.label}</div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-400 font-medium text-center leading-relaxed">
        Estimates based on verified average earnings across our network. Actual earnings vary by niche, engagement rate, and ad inventory.
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

export const MonetizeFacebookGroup: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      icon: <Users size={18} />,
      question: "What size Facebook group do I need to start earning?",
      answer: "There is no strict minimum, but groups with 1,000 or more engaged members attract the most advertiser interest. Niche groups with highly active members — even at 500 — can command premium rates because advertisers value relevance over raw size. Groups above 10,000 members consistently earn $500–$2,000+ per month.",
    },
    {
      icon: <Filter size={18} />,
      question: "How do I control which ads appear in my group?",
      answer: "You have full approval rights over every sponsored post. When an advertiser books your group, you review their creative and can accept, request changes, or decline before anything goes live. You set your own rules — no categories you dislike, no competitors, no content that doesn't fit your community's tone.",
    },
    {
      icon: <DollarSign size={18} />,
      question: "How much can I earn from Facebook group sponsorship?",
      answer: "Earnings depend on group size, niche, and engagement rate. Typical ranges: 1,000–5,000 members: $50–$300/month; 5,000–20,000 members: $300–$1,000/month; 20,000+ members: $1,000–$5,000+/month. High-value niches like real estate, finance, and health can earn 2–3× the average for their member count.",
    },
    {
      icon: <Banknote size={18} />,
      question: "How and when do I get paid?",
      answer: "Payouts are processed via Stripe directly to your bank account or PayPal. You receive payment within 7 days of each completed campaign. There are no payout minimums — every completed sponsorship triggers a transfer automatically.",
    },
    {
      icon: <ShieldCheck size={18} />,
      question: "Will accepting sponsors damage my group's trust?",
      answer: "Not if done right. Our guidelines ensure sponsored posts are disclosed, relevant, and posted in your own voice. The majority of successful group admins on our platform report zero drop in engagement after adding sponsors — many see increased activity because quality sponsors bring value members appreciate.",
    },
    {
      icon: <Clock size={18} />,
      question: "How long does it take to start earning after I list my group?",
      answer: "Most groups receive their first sponsorship enquiry within 2–4 weeks of listing. High-engagement groups in popular niches are often booked within days. Once your group is verified and listed, you're visible to thousands of advertisers searching for exactly your audience.",
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
    script.id = 'monetize-fb-faq-ld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.getElementById('monetize-fb-faq-ld')?.remove(); };
  }, [jsonLd]);

  // ── Ad slot types ─────────────────────────────────────────────────────────
  const slots = [
    {
      icon: <Image size={26} />,
      title: "Cover Photo Ad Slot",
      desc: "Rent the group's cover image to a single brand partner for a fixed period. Every visitor sees it before reading a single post — premium, always-on placement.",
      earn: "Avg. $150–$800/month",
    },
    {
      icon: <MessageSquare size={26} />,
      title: "Pinned Sponsored Post",
      desc: "An admin-voiced post pinned to the top of the group for the campaign period. Visible to every new session, every new member, and anyone catching up on the feed.",
      earn: "Avg. $100–$500/campaign",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Weekly Announcement Slot",
      desc: "A recurring mention in your weekly group update or digest post. Minimal intrusion, consistent brand presence — popular with advertisers who want sustained visibility.",
      earn: "Avg. $80–$300/week",
    },
  ];

  // ── What works ────────────────────────────────────────────────────────────
  const niches = [
    "Local neighbourhood & city groups",
    "Real estate buyers & sellers",
    "Parenting & family groups",
    "Health, fitness & wellness",
    "Food, dining & restaurants",
    "Crypto, finance & investing",
    "Career, jobs & freelancing",
    "Hobbies, travel & lifestyle",
  ];

  // ── Steps ─────────────────────────────────────────────────────────────────
  const steps = [
    {
      num: "01",
      title: "List Your Group",
      desc: "Create a free admin profile and submit your group details — member count, niche, and engagement stats. Our team verifies your group within 48 hours.",
      accent: "bg-blue-50 text-blue-600",
    },
    {
      num: "02",
      title: "Review Advertiser Requests",
      desc: "Advertisers browse the marketplace and send sponsorship requests to your group. You review every brief, creative, and offer before accepting — full control, always.",
      accent: "bg-purple-50 text-purple-600",
    },
    {
      num: "03",
      title: "Post, Earn, Repeat",
      desc: "Once approved, post the sponsored content in your own voice. Payment is released automatically within 7 days of the campaign completing.",
      accent: "bg-green-50 text-green-700",
    },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden mesh-bg">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div className="animate-slide-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em]">
                <Facebook size={12} /> For Group Admins & Owners
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.08]">
                Make Money From Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Facebook Group
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                If you own or manage an active Facebook group, you can list it on Rent My Group and earn money by accepting sponsored posts from relevant advertisers — on your terms, in your voice, with full approval control.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button
                  onClick={() => onOpenModal('admin')}
                  variant="primary"
                  className="w-full sm:w-auto px-10 h-14 text-base"
                >
                  <span className="flex items-center gap-2">List My Facebook Group <ArrowRight size={18} /></span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-bold text-slate-500">
                {['Free to List', 'Full Ad Approval Control', 'Paid in 7 Days', 'No Exclusivity Required'].map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                    <CheckCircle2 size={12} className="text-indigo-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="animate-float">
                <FacebookGroupMockup />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EARNINGS ESTIMATOR ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionLabel><DollarSign size={12} /> Earnings Calculator</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
                How much can your group earn?
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Drag the slider to see your estimated earnings based on your Facebook group's member count. High-engagement niche groups consistently outperform these estimates.
              </p>
              <div className="space-y-3">
                {[
                  "Earnings are on top of your existing income",
                  "No disruption to normal group activity",
                  "Withdraw anytime — no lock-in contracts",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-indigo-500 shrink-0" />
                    <span className="text-slate-700 font-semibold text-base">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <EarningsEstimator />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionLabel><Zap size={12} /> Simple Process</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              List, approve, earn —<br className="hidden md:block" /> <span className="text-indigo-600">in three steps</span>
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

      {/* ── AD SLOTS ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Sparkles size={12} /> Ways to Earn</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Three ad slots you can<br className="hidden md:block" /> sell in your group
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Each slot keeps you in control. You set the price, approve the advertiser, and decide when the post goes up. Combine slots for maximum monthly income.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {slots.map((s, i) => (
              <article key={i} className="bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col gap-6 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 text-base font-medium leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-green-50 border border-green-100 rounded-2xl w-fit">
                  <DollarSign size={14} className="text-green-600" />
                  <span className="text-xs font-black text-green-700">{s.earn}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT GROUPS WORK ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-8">
              <SectionLabel><BarChart3 size={12} /> Group Eligibility</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
                What type of Facebook groups work best?
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Any niche can monetize — but the groups that earn the most are those where members actively post, comment, and engage around a shared interest or location. Advertisers pay a premium for groups they can't replicate with paid ads.
              </p>

              <div className="space-y-3">
                {[
                  { label: "Active member count", desc: "1,000+ members who post and comment regularly" },
                  { label: "Clear niche or geography", desc: "Defined topic or location advertisers can target" },
                  { label: "Admin-managed quality", desc: "Spam-free, moderated discussions that feel authentic" },
                  { label: "Real engagement rate", desc: "Posts that receive likes, comments, and shares" },
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                    <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-black text-slate-900 text-sm">{req.label}</div>
                      <div className="text-slate-500 text-sm font-medium mt-0.5">{req.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white">
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Top-Earning Group Niches</div>
                <div className="grid grid-cols-2 gap-3">
                  {niches.map((niche, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-2xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                      <span className="text-xs font-semibold text-slate-300 leading-tight">{niche}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-xs font-medium mt-6 leading-relaxed">
                  Don't see your niche? Almost any active group can earn — contact us and we'll let you know what advertisers are actively searching for.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-indigo-50 border border-indigo-100 rounded-[2rem] p-6 text-center">
                  <div className="text-4xl font-display font-black text-indigo-700 mb-1">500+</div>
                  <div className="text-xs font-bold text-indigo-600">Active advertisers searching for groups</div>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-[2rem] p-6 text-center">
                  <div className="text-4xl font-display font-black text-green-700 mb-1">$0</div>
                  <div className="text-xs font-bold text-green-600">Cost to list — free forever</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROTECTION ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden="true"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">
              <Lock size={12} /> Community Protection
            </div>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.05]">
              Your community stays yours.<br /> Always.
            </h2>
            <p className="mt-6 text-slate-400 text-lg font-medium max-w-2xl mx-auto">
              Earning from your group should never come at the cost of the trust you've built. Every feature in Rent My Group is designed to keep admins in control.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Filter size={22} />, title: "Full ad approval", desc: "Accept, reject, or request changes on every sponsorship brief before anything goes live." },
              { icon: <ShieldCheck size={22} />, title: "Vetted advertisers only", desc: "Every advertiser is reviewed before they can place requests. No unknown brands, no scam offers." },
              { icon: <Lock size={22} />, title: "Category block list", desc: "Permanently block entire advertiser categories — competitors, alcohol, gambling, or anything that clashes with your community standards." },
              { icon: <Users size={22} />, title: "Rate your experience", desc: "After each campaign, rate the advertiser. Poorly rated brands are flagged and removed from the platform." },
              { icon: <Clock size={22} />, title: "Frequency limits", desc: "Set how many sponsored posts you're willing to post per week or month — so your feed never feels commercial." },
              { icon: <BadgeCheck size={22} />, title: "Disclosure built-in", desc: "Our templates include correct sponsor disclosure language to keep your group compliant and member trust intact." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-7 flex flex-col gap-4 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-indigo-600/20 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400">
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

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Star size={12} /> Admin Stories</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Group owners already earning
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I've run my neighbourhood Facebook group for four years. Adding one sponsored post per week earns me $900/month with zero impact on how the community feels. My members actually thank me for the relevant local deals.",
                name: "Jamie K.",
                role: "Admin, Toronto Locals (34,000 members)",
                metric: "$900/month",
              },
              {
                quote: "My fitness group has 8,200 members. I only accept health and wellness sponsors — my members appreciate the filter. I've turned down 40% of requests to keep quality high, and earnings are still $600/month.",
                name: "Elena V.",
                role: "Admin, Women Who Lift (8,200 members)",
                metric: "$600/month",
              },
              {
                quote: "I own three Facebook groups across different cities. Rent My Group lets me manage all sponsorships from one dashboard. My total monthly income from Facebook group sponsorship now covers my full rent.",
                name: "Omar F.",
                role: "Multi-group Admin (67,000 combined members)",
                metric: "Covers full rent",
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
              Facebook group monetization,{' '}
              <span className="text-indigo-600">answered</span>
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
            <p className="text-slate-500 font-medium mb-3">Have more questions about earning from your Facebook group?</p>
            <a href="mailto:support@rentmygroup.com" className="text-indigo-600 font-black hover:text-indigo-700 underline underline-offset-4">
              Talk to our admin support team
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-100">
              <Facebook size={12} /> Monetize Your Facebook Group
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.1]">
              Your group is already an asset.<br /> Start earning from it.
            </h2>
            <p className="text-indigo-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Listing is free and takes under five minutes. Join thousands of Facebook group admins earning passive income through Rent My Group — without ever compromising their community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('admin')} variant="secondary" className="h-14 px-10 text-base">
                List My Facebook Group
              </Button>
              <Button onClick={() => onOpenModal('advertiser')} variant="outline" className="h-14 px-10 text-base">
                I'm an Advertiser
              </Button>
            </div>
            <p className="text-indigo-200 text-xs font-bold">Free to list · No exclusivity · Full approval control</p>
          </div>
        </div>
      </section>

    </div>
  );
};
