import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  ShieldCheck, 
  Trophy,
  Users,
  Image as ImageIcon,
  Zap,
  ChevronRight,
  Sparkles,
  Lock,
  AlertTriangle,
  Heart,
  MousePointer2,
  TrendingUp,
  Landmark,
  X
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

interface MethodCardProps {
  title: string;
  description: string;
  whyItWorks: string;
  bestPractice: string;
  icon: React.ReactNode;
  color: string;
}

const MethodCard: React.FC<MethodCardProps> = ({ title, description, whyItWorks, bestPractice, icon, color }) => (
  <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-indigo-500/10 transition-all duration-500 group">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
      {icon}
    </div>
    <h3 className="text-2xl font-display font-black text-slate-900 mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed font-medium">{description}</p>
    
    <div className="space-y-4 pt-6 border-t border-slate-50">
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Why it works</span>
        <p className="text-sm text-slate-500 font-bold">{whyItWorks}</p>
      </div>
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Best Practice</span>
        <p className="text-sm text-slate-500 italic">"{bestPractice}"</p>
      </div>
    </div>
  </div>
);

export const MonetizationGuide: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  useEffect(() => {
    document.title = "How to Make Money From Facebook Groups in 2026 (Without Killing Trust)";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <nav className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-12" aria-label="Breadcrumb">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={12} className="text-white/20" />
            <span className="text-indigo-400 uppercase tracking-widest font-black">Admin Blueprint</span>
          </nav>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] mb-12 max-w-5xl mx-auto">
            How to Make Money From Facebook Groups in 2026 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300 italic">(Without Killing Trust)</span>
          </h1>
          
          <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-16">
            Algorithms change, reach fluctuates, and ads get ignored. But members trust their group admins more than any platform.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
              <ShieldCheck className="text-indigo-400" size={20} />
              <span className="text-sm font-bold">100% Policy Compliant</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
              <Sparkles className="text-yellow-400" size={20} />
              <span className="text-sm font-bold">Safe for All Groups</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Manifesto */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="prose prose-slate lg:prose-xl max-w-none">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-100"></div>
            <Heart size={24} className="text-red-500 fill-red-500/10" />
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          <p className="text-3xl md:text-4xl font-display font-black text-slate-900 text-center mb-12 leading-tight">
            Facebook Groups don’t make money. <br />
            <span className="text-indigo-600 underline underline-offset-8 decoration-indigo-100">Group admins do.</span>
          </p>

          <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              In 2026, the most profitable Facebook groups aren’t the biggest — they’re the most trusted. 
              This guide explains how Facebook group admins actually make money in 2026, what still works, what no longer does, and how to monetize without annoying members or risking your group.
            </p>
            <blockquote className="border-l-4 border-indigo-600 pl-8 py-4 bg-indigo-50/50 rounded-r-3xl text-slate-900 font-bold italic">
              "Members trust their group admins more than any ad platform."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Traits Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black text-slate-900 mb-8 tracking-tight">Can You Really Make Money?</h2>
              <p className="text-lg text-slate-600 mb-10 font-medium">
                Yes — but not the way most people try. Facebook does not pay group admins directly. Monetization happens when admins responsibly rent or leverage attention inside the group.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Active, real members (not bots)", icon: <Users size={20} /> },
                  { label: "Clear moderation and rules", icon: <Lock size={20} /> },
                  { label: "High trust in the admin team", icon: <ShieldCheck size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="text-indigo-600">{item.icon}</div>
                    <span className="font-bold text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 p-10 md:p-14 rounded-[3rem] border border-red-100">
              <div className="flex items-center gap-3 mb-8 text-red-600">
                <AlertTriangle size={32} />
                <h3 className="text-2xl font-black font-display tracking-tight">Why Most Monetization Fails</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Allowing unlimited self-promotion",
                  "Posting affiliate links randomly",
                  "Accepting irrelevant sponsors",
                  "Monetizing too often"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                    <span className="text-red-900 font-bold">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-red-600/70 font-bold italic text-sm">
                In 2026, scarcity and relevance outperform volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Methods Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Proven Methods</span>
            <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight">The 6 Ways to Earn in 2026</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MethodCard 
              title="Pinned Post Sponsorships"
              description="A pinned post is the most valuable placement. Seen by nearly 100% of members regardless of feed updates."
              whyItWorks="Highest ROI, bypasses algorithms, feels like an endorsement."
              bestPractice="One sponsor at a time with fixed monthly pricing."
              icon={<TrendingUp size={28} />}
              color="bg-indigo-600"
            />
            <MethodCard 
              title="Cover Photo Rentals"
              description="Your group’s cover photo is prime real estate. Rent this monthly to featured local businesses."
              whyItWorks="Non-intrusive, constant visibility, high premium value."
              bestPractice="Feature only one local brand (Realtors, Gyms, Dentists) per month."
              icon={<ImageIcon size={28} />}
              color="bg-blue-600"
            />
            <MethodCard 
              title="Local Business Partnerships"
              description="Local businesses outperform national brands because trust transfers naturally from you to them."
              whyItWorks="Shared geography increases member trust and relevance."
              bestPractice="Define 'Official neighborhood partners' to increase prestige."
              icon={<Landmark size={28} />}
              color="bg-slate-900"
            />
            <MethodCard 
              title="Exclusive Deals & Giveaways"
              description="This is monetization disguised as value. Partner with brands to offer member-only discounts."
              whyItWorks="Members feel rewarded, engagement spikes, brands get leads."
              bestPractice="The business pays for exposure; members get the win."
              icon={<Sparkles size={28} />}
              color="bg-purple-600"
            />
            <MethodCard 
              title="Paid Memberships"
              description="Works only for niche expertise, professional, or education-based groups. Neighborhood groups should stick to sponsorships."
              whyItWorks="Predictable recurring revenue for high-value content."
              bestPractice="Charge for access to professional training or networking."
              icon={<Zap size={28} />}
              color="bg-amber-500"
            />
            <MethodCard 
              title="Lead Referrals"
              description="Directly referral leads to businesses. Manual and less scalable but highly personal."
              whyItWorks="Direct ROI for the business, highly personal."
              bestPractice="Tag sponsors in relevant comment threads (e.g. plumbing requests)."
              icon={<MousePointer2 size={28} />}
              color="bg-emerald-600"
            />
          </div>
        </div>
      </section>

      {/* Income Table */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] md:rounded-[5rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 p-20 opacity-10 pointer-events-none">
          <DollarSign size={300} />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">Typical Monthly Earnings</h2>
            <p className="text-slate-400 font-medium text-lg">Based on one pinned sponsor and one cover placement with local relevance.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/5">
              <div className="p-8 font-black text-xs uppercase tracking-[0.2em] text-indigo-400">Group Size</div>
              <div className="p-8 font-black text-xs uppercase tracking-[0.2em] text-indigo-400">Monthly Income Est.</div>
            </div>
            {[
              { size: "5,000 members", income: "$200 – $500" },
              { size: "25,000 members", income: "$1,500 – $3,000" },
              { size: "50,000+ members", income: "$4,000+" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <div className="p-8 font-bold text-xl">{row.size}</div>
                <div className="p-8 font-black text-2xl text-indigo-300">{row.income}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-slate-500 text-sm font-bold uppercase tracking-widest italic">
            More sponsors ≠ more money. Better placement does.
          </div>
        </div>
      </section>

      {/* Platform Pitch */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">The Problem With Monetizing Manually</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Most admins quit monetizing because finding sponsors takes time, chasing payments is exhausting, and approving creatives is stressful.
            </p>
            <div className="space-y-4">
              {[
                "Finding the right local brands",
                "Administrative overhead and contracts",
                "Stripe integration and tax forms",
                "Reporting ROI to advertisers"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-500 font-bold">
                  <X className="text-red-400" size={18} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-indigo-600 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-600/30">
            <h3 className="text-3xl font-display font-black mb-8">RentMyGroup handles it for you.</h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-indigo-200" />
                <span className="font-bold">Match brands to your group niche</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-indigo-200" />
                <span className="font-bold">Automated secure payouts</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-indigo-200" />
                <span className="font-bold">Full admin control over content</span>
              </div>
            </div>
            <Button 
              onClick={() => onOpenModal('admin')}
              className="w-full h-18 text-lg bg-white text-indigo-600 shadow-xl"
            >
              Secure Your Group Spot <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final Advice Section */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
        <Trophy size={48} className="text-yellow-400 mx-auto mb-10" />
        <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8 tracking-tight">Final Advice for Admins</h2>
        <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] space-y-6 text-left">
          {[
            "Monetize less, not more",
            "Choose relevance over money",
            "Protect member trust at all costs",
            "Think in monthly rent, not one-off posts"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black text-xs shrink-0">
                {i+1}
              </div>
              <p className="text-slate-800 font-bold text-lg">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-slate-500 font-medium text-xl italic leading-relaxed">
          "A Facebook group is not an ad feed. It’s a relationship asset. Treat it that way — and it will pay you for years."
        </p>
      </section>
    </div>
  );
};
