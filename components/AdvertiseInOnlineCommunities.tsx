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
  Globe,
  Facebook,
  Target,
  X,
  AlertTriangle,
  Megaphone,
  ThumbsUp,
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

// ─── Shared atoms ─────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
    {children}
  </div>
);

// ─── Comparison table data ────────────────────────────────────────────────────

type Rating = 'high' | 'medium' | 'low' | 'yes' | 'no' | 'partial';

interface CompRow {
  feature: string;
  community: Rating;
  fbAds: Rating;
  googleAds: Rating;
  influencer: Rating;
  social: Rating;
}

const RatingCell: React.FC<{ rating: Rating; highlight?: boolean }> = ({ rating, highlight }) => {
  const configs: Record<Rating, { label: string; className: string }> = {
    high: { label: 'High', className: 'text-green-600 bg-green-50 border-green-100' },
    medium: { label: 'Medium', className: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
    low: { label: 'Low', className: 'text-red-500 bg-red-50 border-red-100' },
    yes: { label: '✓', className: 'text-green-600 bg-green-50 border-green-100' },
    no: { label: '✗', className: 'text-red-500 bg-red-50 border-red-100' },
    partial: { label: 'Partial', className: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
  };
  const { label, className } = configs[rating];
  return (
    <div className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full border text-[11px] font-black ${highlight ? 'bg-indigo-600 border-indigo-500 text-white' : className}`}>
      {highlight && rating === 'high' ? '✓ High' : highlight && rating === 'yes' ? '✓ Yes' : label}
    </div>
  );
};

// ─── Vs card ─────────────────────────────────────────────────────────────────

const VsCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  problems: string[];
  community_wins: string[];
}> = ({ title, icon, iconBg, problems, community_wins }) => (
  <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300">
    {/* Header */}
    <div className="px-8 py-6 border-b border-slate-100 flex items-center gap-4">
      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-white`}>{icon}</div>
      <h3 className="text-lg font-display font-black text-slate-900">vs. {title}</h3>
    </div>

    <div className="grid md:grid-cols-2 divide-x divide-slate-100">
      {/* Problems */}
      <div className="p-7 space-y-3">
        <div className="flex items-center gap-2 text-[10px] font-black text-red-500 uppercase tracking-widest mb-4">
          <X size={12} /> The Problem
        </div>
        {problems.map((p, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
            <span className="text-sm font-medium text-slate-600 leading-snug">{p}</span>
          </div>
        ))}
      </div>

      {/* Community wins */}
      <div className="p-7 space-y-3 bg-indigo-50/30">
        <div className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">
          <ThumbsUp size={12} /> Community Advertising Wins
        </div>
        {community_wins.map((w, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <CheckCircle2 size={14} className="text-indigo-500 shrink-0 mt-0.5" />
            <span className="text-sm font-medium text-slate-700 leading-snug">{w}</span>
          </div>
        ))}
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
    <button onClick={onClick} className="w-full py-6 px-6 flex items-start gap-4 text-left group" aria-expanded={isOpen}>
      <div className={`mt-1 p-2 rounded-xl transition-colors shrink-0 ${isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className={`text-base md:text-lg font-display font-black tracking-tight transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900'}`}>{question}</h3>
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

export const AdvertiseInOnlineCommunities: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      icon: <Target size={18} />,
      question: "What is online community advertising?",
      answer: "Online community advertising means placing your brand, offer, or content inside an active group or community where members have self-selected around a shared interest. Unlike algorithm-driven ads that interrupt users who didn't ask for them, community advertising reaches people inside a context they already trust — delivered by an admin or community leader they respect.",
    },
    {
      icon: <TrendingUp size={18} />,
      question: "Why does community advertising outperform Facebook and Google Ads?",
      answer: "Traditional ads compete in a noisy, impersonal auction. Community ads are placed inside conversations people are actively participating in, endorsed by a trusted admin. The relevance is built-in — the audience already self-identifies with the niche. Our advertisers consistently see 5–10× higher click-through rates and significantly lower cost-per-acquisition compared to equivalent paid social campaigns.",
    },
    {
      icon: <Globe size={18} />,
      question: "What platforms can I advertise on through Rent My Group?",
      answer: "You can place approved promotions inside Facebook groups, WhatsApp groups, Telegram channels, and other niche online communities. Each platform has different ad format options — cover photo slots and pinned posts for Facebook, pinned announcements and admin updates for WhatsApp, and channel posts for Telegram.",
    },
    {
      icon: <ShieldCheck size={18} />,
      question: "How is community advertising different from influencer marketing?",
      answer: "Influencer marketing relies on a single person's following, which can be expensive, unverifiable, and audience-age-gated by platform algorithms. Community advertising places your message inside groups of 500 to 500,000 members who have explicitly opted into a shared topic. You can verify the group's engagement before spending a cent, and pricing is transparent rather than negotiated.",
    },
    {
      icon: <DollarSign size={18} />,
      question: "What does it cost to advertise in online communities?",
      answer: "Pricing is set by the group owner and varies by member count, niche, and engagement rate. Typical ranges: micro-communities (200–2,000 members) from $50–$250 per campaign; mid-size groups (2,000–10,000 members) from $200–$800; large communities (10,000+) from $500–$5,000+. High-value niches like finance, real estate, and health command premium rates.",
    },
    {
      icon: <Zap size={18} />,
      question: "How quickly can I launch a niche community advertising campaign?",
      answer: "Most campaigns go live within 24–48 hours. Browse groups, submit your creative brief, and the admin reviews and approves it. There are no lengthy agency briefings, no bidding wars, and no waiting for ad account reviews. Some groups with high advertiser demand may have a short waitlist for premium slots.",
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
    script.id = 'online-communities-faq-ld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { document.getElementById('online-communities-faq-ld')?.remove(); };
  }, [jsonLd]);

  const compRows: CompRow[] = [
    { feature: "Audience trust level",       community: 'high',    fbAds: 'low',    googleAds: 'low',    influencer: 'medium', social: 'low'    },
    { feature: "Reach guarantee",            community: 'high',    fbAds: 'low',    googleAds: 'medium', influencer: 'low',    social: 'low'    },
    { feature: "Niche audience precision",   community: 'high',    fbAds: 'medium', googleAds: 'medium', influencer: 'medium', social: 'low'    },
    { feature: "Algorithm dependency",       community: 'no',      fbAds: 'yes',    googleAds: 'yes',    influencer: 'yes',    social: 'yes'    },
    { feature: "Cost-per-click efficiency",  community: 'high',    fbAds: 'medium', googleAds: 'low',    influencer: 'low',    social: 'medium' },
    { feature: "Transparent metrics",        community: 'yes',     fbAds: 'partial',googleAds: 'partial',influencer: 'no',     social: 'partial'},
    { feature: "No minimum budget",          community: 'yes',     fbAds: 'no',     googleAds: 'no',     influencer: 'no',     social: 'no'     },
    { feature: "Admin-endorsed placement",   community: 'yes',     fbAds: 'no',     googleAds: 'no',     influencer: 'partial',social: 'no'     },
  ];

  const vsCards = [
    {
      title: "Facebook Ads",
      icon: <Facebook size={20} />,
      iconBg: "bg-blue-600",
      problems: [
        "Competing in a bidding auction drives costs up constantly",
        "Algorithm decides who sees your ad — reach is never guaranteed",
        "Ad fatigue: users see the same ads repeatedly and ignore them",
        "iOS privacy changes gutted targeting precision since 2021",
      ],
      community_wins: [
        "Fixed-price placement — you know exactly what you pay",
        "Admin posts reach every active group member directly",
        "No auction, no bidding war, no algorithm filter",
        "Audience is self-selected around your exact niche",
      ],
    },
    {
      title: "Google Ads",
      icon: <Globe size={20} />,
      iconBg: "bg-red-500",
      problems: [
        "Keyword competition means CPCs are sky-high in most niches",
        "Users in search mode are cold — they don't know your brand yet",
        "Display ads have among the lowest engagement rates of any format",
        "Requires constant optimisation and significant budget to scale",
      ],
      community_wins: [
        "Community members already have an interest in your niche topic",
        "Admin endorsement creates instant brand association",
        "Placement cost is predictable — no spiralling CPCs",
        "Low friction to launch — no keyword research required",
      ],
    },
    {
      title: "Influencer Marketing",
      icon: <Megaphone size={20} />,
      iconBg: "bg-pink-500",
      problems: [
        "Hard to verify real audience engagement vs. inflated follower counts",
        "Single-creator risk — one bad post tanks the whole campaign",
        "Platform algorithms limit organic reach even for large accounts",
        "Expensive and slow to negotiate — often 2–4 weeks per deal",
      ],
      community_wins: [
        "Group engagement is verifiable — you see real member counts",
        "Multiple group placements diversify risk across communities",
        "Not subject to feed algorithms — group posts reach members directly",
        "Transparent pricing with no agency commission layer",
      ],
    },
    {
      title: "Traditional Social Media Ads",
      icon: <BarChart3 size={20} />,
      iconBg: "bg-slate-700",
      problems: [
        "Interruption-based format — users are annoyed, not engaged",
        "Creative fatigue sets in quickly — requires constant refresh",
        "Generic targeting means spending budget on irrelevant audiences",
        "High cost for brand awareness with poor conversion tracking",
      ],
      community_wins: [
        "Community advertising is native — it fits the context, not fights it",
        "One placement per group period means no creative fatigue",
        "Niche group targeting means every member is a potential customer",
        "Direct link tracking shows exact conversion contribution",
      ],
    },
  ];

  const platforms = [
    { name: "Facebook Groups", icon: <Facebook size={20} />, color: "bg-blue-600", desc: "Niche groups from 500 to 500,000 members. Cover photo slots, pinned posts, and admin-voiced sponsored posts." },
    { name: "WhatsApp Groups", icon: <MessageCircle size={20} />, color: "bg-green-600", desc: "Push notification delivery to every active member. Pinned announcements and admin community updates." },
    { name: "Telegram Channels", icon: <Zap size={20} />, color: "bg-sky-500", desc: "High-volume niche channels with engaged, tech-savvy audiences. Channel posts and pinned promotions." },
    { name: "Online Communities", icon: <Globe size={20} />, color: "bg-purple-600", desc: "Discord servers, Reddit communities, forums, and membership groups with highly engaged niche audiences." },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden mesh-bg">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/30 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

        <div className="max-w-5xl mx-auto px-6 text-center animate-slide-up space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em]">
            <Globe size={12} /> Community Advertising
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.08]">
            Advertise in Online Communities<br className="hidden md:block" /> Where Your Audience Already{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Trusts
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Instead of paying for cold impressions to strangers, reach people inside the communities they already trust. Rent My Group connects advertisers with niche Facebook, WhatsApp, Telegram, and online communities where every member is a potential customer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button onClick={() => onOpenModal('advertiser')} variant="primary" className="w-full sm:w-auto px-10 h-14 text-base">
              <span className="flex items-center gap-2">Find My Audience <ArrowRight size={18} /></span>
            </Button>
            <Button onClick={() => onOpenModal('admin')} variant="secondary" className="w-full sm:w-auto px-10 h-14 text-base bg-white border-slate-200">
              List My Community
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-500 pt-2">
            {['No Algorithm Dependency', 'Admin-Endorsed Placements', 'Verified Audience Metrics', 'No Minimum Budget'].map(tag => (
              <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                <CheckCircle2 size={12} className="text-indigo-500" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CORE INSIGHT ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden="true"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">
                <Sparkles size={12} /> The Shift in Advertising
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.05]">
                Cold impressions are expensive.<br /> Community trust is priceless.
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                The average user ignores 86% of display ads. Community advertising bypasses banner blindness entirely — because your message arrives inside a space members chose to be part of, posted by someone they already trust.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  { stat: "86%", label: "of digital ads are ignored or blocked" },
                  { stat: "5–10×", label: "higher click-through rates vs. feed ads" },
                  { stat: "3×", label: "lower cost-per-acquisition on average" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <span className="text-3xl font-display font-black text-indigo-400 shrink-0 w-20 text-right">{item.stat}</span>
                    <span className="text-sm font-semibold text-slate-300 leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrast visual */}
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-[2rem] p-7 space-y-3">
                <div className="flex items-center gap-2 text-red-400 text-[11px] font-black uppercase tracking-widest">
                  <AlertTriangle size={12} /> Traditional Advertising
                </div>
                {['Interrupts users who didn't ask for your message', 'Algorithm decides reach — nothing is guaranteed', 'Competes in a noisy, expensive auction', 'Audience has no prior relationship with the content'].map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-red-300/80">
                    <X size={14} className="text-red-500 shrink-0" /> {p}
                  </div>
                ))}
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-[2rem] p-7 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 text-[11px] font-black uppercase tracking-widest">
                  <CheckCircle2 size={12} /> Community Advertising
                </div>
                {['Placed inside groups audiences actively chose to join', 'Admin-endorsed — every member sees it directly', 'Fixed price — no bidding, no auction, no algorithm', 'Audience already interested in your niche'].map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-indigo-300/80">
                    <CheckCircle2 size={14} className="text-indigo-400 shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VS COMPARISONS ────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><BarChart3 size={12} /> Side-by-Side Comparison</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Community advertising vs.<br className="hidden md:block" /> every other channel
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Every major advertising channel has trade-offs. Here's why community advertising delivers what the others promise but rarely deliver.
            </p>
          </div>

          <div className="space-y-6">
            {vsCards.map((card, i) => <VsCard key={i} {...card} />)}
          </div>
        </div>
      </section>

      {/* ── FULL COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Target size={12} /> Full Channel Comparison</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              All five channels, head to head
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-5 text-[11px] font-black text-slate-500 uppercase tracking-widest w-[30%]">Feature</th>
                  <th className="px-4 py-5 text-center">
                    <div className="bg-indigo-600 text-white rounded-2xl px-4 py-2 text-[11px] font-black uppercase tracking-widest inline-block">Community Ads</div>
                  </th>
                  <th className="px-4 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">FB Ads</th>
                  <th className="px-4 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Google Ads</th>
                  <th className="px-4 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Influencer</th>
                  <th className="px-4 py-5 text-center text-[11px] font-black text-slate-400 uppercase tracking-widest">Social Ads</th>
                </tr>
              </thead>
              <tbody>
                {compRows.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === compRows.length - 1 ? 'border-0' : ''}`}>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{row.feature}</td>
                    <td className="px-4 py-4 text-center"><RatingCell rating={row.community} highlight /></td>
                    <td className="px-4 py-4 text-center"><RatingCell rating={row.fbAds} /></td>
                    <td className="px-4 py-4 text-center"><RatingCell rating={row.googleAds} /></td>
                    <td className="px-4 py-4 text-center"><RatingCell rating={row.influencer} /></td>
                    <td className="px-4 py-4 text-center"><RatingCell rating={row.social} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Globe size={12} /> Where You Can Advertise</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Four platforms.<br className="hidden md:block" /> One marketplace.
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Reach your niche audience wherever they spend time online — without managing separate campaigns, agencies, or ad accounts for each platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((p, i) => (
              <article key={i} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className={`${p.color} p-6 flex items-center gap-3`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">{p.icon}</div>
                  <span className="text-white font-black text-base">{p.name}</span>
                </div>
                <div className="p-6">
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Star size={12} /> Advertiser Results</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Advertisers who switched<br /> to community advertising
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "We paused our entire Facebook Ads budget for one month and put it into community advertising. We spent less, converted better, and the CPA dropped by 67%. It hasn't moved back since.",
                name: "Ben A.",
                role: "Performance Marketer, SaaS Brand",
                metric: "67% lower CPA",
              },
              {
                quote: "Community advertising changed how I think about reach. An audience of 8,000 who chose to be in a crypto group is worth more than 80,000 random impressions on a social feed.",
                name: "Christine L.",
                role: "Media Buyer, Digital Agency",
                metric: "8× ROI on spend",
              },
              {
                quote: "We tried influencer deals, Google Display, and Meta retargeting. None of them delivered results like a single pinned post in a 12,000-member parenting Facebook group. The audience was already primed.",
                name: "James T.",
                role: "CMO, Baby Products Brand",
                metric: "$0 ad spend wasted",
              },
            ].map((t, i) => (
              <article key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}</div>
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
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              Online community advertising,{' '}
              <span className="text-indigo-600">explained</span>
            </h2>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            {faqs.map((faq, i) => (
              <FAQItem key={i} icon={faq.icon} question={faq.question} answer={faq.answer} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium mb-3">More questions about niche community advertising?</p>
            <a href="mailto:support@rentmygroup.com" className="text-indigo-600 font-black hover:text-indigo-700 underline underline-offset-4">
              Talk to our advertising team
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3" aria-hidden="true"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-100">
              <Globe size={12} /> Niche Community Advertising
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-[1.1]">
              Stop paying for attention.<br /> Start buying trust.
            </h2>
            <p className="text-indigo-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Browse 8,000+ verified niche communities across Facebook, WhatsApp, Telegram, and online groups. Place your first community ad placement today — no algorithm, no bidding war, no minimum budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('advertiser')} variant="secondary" className="h-14 px-10 text-base">
                Browse Communities
              </Button>
              <Button onClick={() => onOpenModal('admin')} variant="outline" className="h-14 px-10 text-base">
                List My Community
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
