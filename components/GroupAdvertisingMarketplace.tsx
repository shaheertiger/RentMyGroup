import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  Star,
  DollarSign,
  Search,
  MessageCircle,
  BadgeCheck,
  Banknote,
  Globe,
  Facebook,
  ShoppingBag,
  Home,
  TrendingUp,
  Filter,
  MapPin,
  LayoutGrid,
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

// ─── Shared atoms ─────────────────────────────────────────────────────────────

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em]">
    {children}
  </div>
);

// ─── Marketplace browser mockup ───────────────────────────────────────────────

const MarketplaceMockup: React.FC = () => {
  const groups = [
    { name: 'NYC Food & Dining', platform: 'FB', members: '28K', niche: 'Food', price: '$280/mo', badge: 'Top Rated' },
    { name: 'London Mums Hub', platform: 'WA', members: '9.1K', niche: 'Parenting', price: '$190/mo', badge: 'Hot' },
    { name: 'Crypto Traders ZA', platform: 'TG', members: '15K', niche: 'Finance', price: '$420/mo', badge: 'Premium' },
    { name: 'LA Real Estate', platform: 'FB', members: '41K', niche: 'Property', price: '$550/mo', badge: 'Verified' },
  ];

  const platformColors: Record<string, string> = {
    FB: 'bg-blue-600',
    WA: 'bg-green-600',
    TG: 'bg-sky-500',
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2">
          <Search size={14} className="text-slate-400" />
          <span className="text-xs font-semibold text-slate-400">Search groups by niche, location…</span>
        </div>
        <div className="w-9 h-9 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center">
          <Filter size={14} className="text-indigo-600" />
        </div>
      </div>

      {/* Filters */}
      <div className="px-5 py-3 border-b border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
        {['All Platforms', 'Facebook', 'WhatsApp', 'Telegram'].map((f, i) => (
          <span key={f} className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>{f}</span>
        ))}
      </div>

      {/* Group listings */}
      <div className="divide-y divide-slate-50">
        {groups.map((g, i) => (
          <div key={i} className="px-5 py-4 flex items-center gap-3 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className={`w-10 h-10 ${platformColors[g.platform]} rounded-xl flex items-center justify-center text-white text-[11px] font-black shrink-0`}>
              {g.platform}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-black text-slate-900 truncate">{g.name}</span>
                <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-full shrink-0">{g.badge}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-semibold">
                <Users size={10} /> {g.members}
                <span className="w-px h-3 bg-slate-200"></span>
                <span>{g.niche}</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-sm font-black text-slate-900">{g.price}</div>
              <div className="text-[10px] font-bold text-green-600 flex items-center gap-0.5 justify-end">
                <CheckCircle2 size={9} /> Available
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 bg-indigo-600 flex items-center justify-between">
        <span className="text-white text-xs font-bold">8,000+ groups listed</span>
        <button className="flex items-center gap-1.5 text-white text-xs font-black">
          Browse All <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};

// ─── Flow step ────────────────────────────────────────────────────────────────

const FlowStep: React.FC<{
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  role: 'owner' | 'advertiser' | 'both';
  last?: boolean;
}> = ({ num, icon, title, desc, role, last }) => {
  const roleColors = {
    owner: 'bg-green-50 border-green-100 text-green-700',
    advertiser: 'bg-blue-50 border-blue-100 text-blue-700',
    both: 'bg-indigo-50 border-indigo-100 text-indigo-700',
  };
  const roleLabels = { owner: 'Group Owner', advertiser: 'Advertiser', both: 'Both' };

  return (
    <div className="relative flex gap-6">
      {/* Connector */}
      {!last && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-slate-200 to-transparent" aria-hidden="true"></div>
      )}

      {/* Number badge */}
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-display font-black shadow-xl shrink-0 mt-1">
        {num}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="flex flex-wrap items-start gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
              {icon}
            </div>
            <h3 className="text-xl font-display font-black text-slate-900 tracking-tight">{title}</h3>
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${roleColors[role]}`}>
            {roleLabels[role]}
          </span>
        </div>
        <p className="text-slate-500 font-medium leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  );
};

// ─── Platform pill ────────────────────────────────────────────────────────────

const PlatformPill: React.FC<{ name: string; color: string; count: string; icon: React.ReactNode }> = ({ name, color, count, icon }) => (
  <div className={`${color} rounded-[2rem] p-6 flex flex-col gap-3`}>
    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
      {icon}
    </div>
    <div>
      <div className="text-white font-display font-black text-lg">{name}</div>
      <div className="text-white/70 text-xs font-bold">{count} groups listed</div>
    </div>
  </div>
);

// ─── Main page ────────────────────────────────────────────────────────────────

export const GroupAdvertisingMarketplace: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'advertisers' | 'owners'>('advertisers');

  const advertiserBenefits = [
    { icon: <Search size={18} />, title: "Browse by category, size & location", desc: "Filter 8,000+ listed groups by niche, platform, country, city, and member count to find exactly the audience your offer needs." },
    { icon: <Filter size={18} />, title: "Transparent group metrics", desc: "Every listing shows verified member count, weekly activity rate, and engagement data. No inflated vanity numbers." },
    { icon: <Zap size={18} />, title: "Book in minutes", desc: "Submit your campaign brief and creative. The group owner reviews and approves — most go live within 24–48 hours." },
    { icon: <TrendingUp size={18} />, title: "Track real results", desc: "Monitor click-through data, reach confirmation, and engagement reports through your live campaign dashboard." },
  ];

  const ownerBenefits = [
    { icon: <LayoutGrid size={18} />, title: "List any group, any platform", desc: "List Facebook, WhatsApp, Telegram, or any online community. Listing is free and takes under five minutes." },
    { icon: <BadgeCheck size={18} />, title: "Full approval rights", desc: "Every sponsorship request requires your explicit approval before anything is posted. Decline for any reason, any time." },
    { icon: <DollarSign size={18} />, title: "Set your own rates", desc: "You control your pricing. We provide market benchmarks so you always price competitively for your niche and size." },
    { icon: <Banknote size={18} />, title: "Get paid within 7 days", desc: "Automatic payout via Stripe or PayPal within 7 days of each completed campaign. No minimums, no chasing invoices." },
  ];

  const categories = [
    { icon: <Home size={18} />, label: "Real Estate", count: "380+" },
    { icon: <Users size={18} />, label: "Parenting & Family", count: "490+" },
    { icon: <TrendingUp size={18} />, label: "Finance & Crypto", count: "620+" },
    { icon: <ShoppingBag size={18} />, label: "E-Commerce & Retail", count: "540+" },
    { icon: <MessageCircle size={18} />, label: "Health & Fitness", count: "710+" },
    { icon: <MapPin size={18} />, label: "Local & Neighbourhood", count: "1,200+" },
    { icon: <Globe size={18} />, label: "Tech & SaaS", count: "430+" },
    { icon: <Star size={18} />, label: "Lifestyle & Hobbies", count: "890+" },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-32 overflow-hidden mesh-bg">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/30 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="animate-slide-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em]">
                <LayoutGrid size={12} /> Community Advertising Marketplace
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.08]">
                Group Advertising Marketplace for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Advertisers and Group Owners
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                Rent My Group is the world's first verified marketplace to buy and sell ad space inside Facebook, WhatsApp, Telegram, and online communities. Advertisers reach niche audiences. Group owners earn passive income. Everyone wins.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <Button onClick={() => onOpenModal('advertiser')} variant="primary" className="w-full sm:w-auto px-8 h-14 text-base">
                  <span className="flex items-center gap-2">Browse Groups <ArrowRight size={18} /></span>
                </Button>
                <Button onClick={() => onOpenModal('admin')} variant="secondary" className="w-full sm:w-auto px-8 h-14 text-base bg-white border-slate-200">
                  List My Group
                </Button>
              </div>

              <div className="flex flex-wrap gap-5 pt-2">
                {[
                  { value: '8,000+', label: 'Groups Listed' },
                  { value: '500+', label: 'Active Advertisers' },
                  { value: '$2.4M+', label: 'Paid to Admins' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-display font-black text-indigo-600">{s.value}</span>
                    <span className="text-xs font-bold text-slate-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="animate-float">
                <MarketplaceMockup />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW THE MARKETPLACE WORKS ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Zap size={12} /> How It Works</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Five steps from listing<br className="hidden md:block" /> to payout
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              The Rent My Group marketplace connects group owners and advertisers through a structured, trust-first process that protects both sides of every deal.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <FlowStep
              num="1"
              icon={<LayoutGrid size={18} />}
              title="Group owners list their community"
              desc="Facebook, WhatsApp, Telegram, or any online group. Owners set their pricing, define approved content categories, and publish their listing — free, in under five minutes."
              role="owner"
            />
            <FlowStep
              num="2"
              icon={<Search size={18} />}
              title="Advertisers browse and filter"
              desc="Advertisers search the marketplace by platform, niche category, location, member count, and engagement rate. Every listing shows transparent, verified metrics — no surprises."
              role="advertiser"
            />
            <FlowStep
              num="3"
              icon={<ShoppingBag size={18} />}
              title="Advertiser books a sponsored post"
              desc="The advertiser selects their preferred placement — pinned announcement, sponsored post, or cover photo slot — and submits their creative brief and tracking link."
              role="advertiser"
            />
            <FlowStep
              num="4"
              icon={<BadgeCheck size={18} />}
              title="Group owner reviews and approves"
              desc="The group owner reviews the advertiser's brief, creative, and offer. They can accept, request changes, or decline. Nothing goes live without explicit admin approval."
              role="owner"
            />
            <FlowStep
              num="5"
              icon={<Banknote size={18} />}
              title="Post goes live. Owner gets paid."
              desc="The admin posts the approved promotion in their own voice. The campaign runs for the agreed period. The group owner receives their payout automatically within 7 days of completion."
              role="owner"
              last
            />
          </div>
        </div>
      </section>

      {/* ── PLATFORM COVERAGE ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Globe size={12} /> Platform Coverage</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Every major community platform,<br className="hidden md:block" /> in one marketplace
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-medium max-w-2xl mx-auto">
              Whether your audience lives on Facebook, WhatsApp, Telegram, or a niche online community, Rent My Group has verified groups ready for your campaign.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            <PlatformPill name="Facebook Groups" color="bg-blue-600" count="3,200+" icon={<Facebook size={22} />} />
            <PlatformPill name="WhatsApp Groups" color="bg-green-600" count="3,000+" icon={<MessageCircle size={22} />} />
            <PlatformPill name="Telegram Channels" color="bg-sky-500" count="1,400+" icon={<Zap size={22} />} />
            <PlatformPill name="Online Communities" color="bg-purple-600" count="400+" icon={<Globe size={22} />} />
          </div>

          {/* Category grid */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-display font-black text-slate-900">Browse by Category</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-5 flex items-center gap-3 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200 cursor-pointer group">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors duration-200">
                  {cat.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-black text-slate-900 truncate">{cat.label}</div>
                  <div className="text-[11px] font-bold text-slate-400">{cat.count} groups</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL AUDIENCE SECTION ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel><Users size={12} /> Two Sides, One Marketplace</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Built for advertisers<br className="hidden md:block" /> and group owners
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="flex justify-center mb-12">
            <div className="flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm" role="tablist">
              <button
                role="tab"
                aria-selected={activeTab === 'advertisers'}
                onClick={() => setActiveTab('advertisers')}
                className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${activeTab === 'advertisers' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                For Advertisers
              </button>
              <button
                role="tab"
                aria-selected={activeTab === 'owners'}
                onClick={() => setActiveTab('owners')}
                className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${activeTab === 'owners' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
              >
                For Group Owners
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {(activeTab === 'advertisers' ? advertiserBenefits : ownerBenefits).map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-[2rem] p-7 flex gap-4 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-black text-slate-900 text-base mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            {activeTab === 'advertisers' ? (
              <Button onClick={() => onOpenModal('advertiser')} variant="primary" className="px-10 h-14 text-base">
                <span className="flex items-center gap-2">Browse the Marketplace <ArrowRight size={18} /></span>
              </Button>
            ) : (
              <Button onClick={() => onOpenModal('admin')} variant="primary" className="px-10 h-14 text-base">
                <span className="flex items-center gap-2">List My Group Free <ArrowRight size={18} /></span>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel><Star size={12} /> Marketplace Results</SectionLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
              What the marketplace<br /> delivers for both sides
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I tried Facebook Ads, Google Ads, and influencer deals. Nothing came close to the cost-per-click I get from niche group ads. The audience is already invested — conversion is a fraction of the work.",
                name: "Daniel R.",
                role: "Advertiser, E-Commerce Brand",
                metric: "4.8× lower CPC",
              },
              {
                quote: "The marketplace did everything I was doing manually in spreadsheets — tracking requests, invoicing, chasing payments. Now I just approve posts and get paid. That's the whole job.",
                name: "Amara J.",
                role: "Group Owner, Health & Wellness",
                metric: "$1,600/month earned",
              },
              {
                quote: "We placed a single sponsored post in three aligned Facebook groups for our product launch. All three groups had qualified buyers, not just scrollers. We sold out in 72 hours.",
                name: "Sophie W.",
                role: "Advertiser, DTC Skincare Brand",
                metric: "Sold out in 72 hours",
              },
            ].map((t, i) => (
              <article key={i} className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-between gap-8 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300">
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

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 0)', backgroundSize: '36px 36px' }} aria-hidden="true"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]" aria-hidden="true"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full translate-x-1/3 translate-y-1/3 blur-[80px]" aria-hidden="true"></div>

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
              <LayoutGrid size={12} /> Group Advertising Marketplace
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-[1.1]">
              The marketplace is open.<br /> Your side is waiting.
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you want to reach niche audiences or earn from the community you've built — Rent My Group connects both sides of the deal in one transparent, trusted marketplace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button onClick={() => onOpenModal('advertiser')} variant="secondary" className="h-14 px-10 text-base">
                Browse Groups as Advertiser
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
