import React, { useEffect, useMemo } from 'react';
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
  BarChart3,
  Search
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  step: string;
}

const GuideSection: React.FC<GuideSectionProps> = ({ title, children, icon, step }) => (
  <article className="space-y-8 animate-slide-up group">
    <div className="flex items-center gap-6">
      <div className="relative shrink-0">
        <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-indigo-200 transition-transform group-hover:scale-110 duration-500">
          {icon}
        </div>
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
          {step}
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight leading-none">{title}</h2>
    </div>
    <div className="pl-0 md:pl-20 text-slate-600 text-lg md:text-xl leading-relaxed space-y-6">
      {children}
    </div>
  </article>
);

export const MonetizationGuide: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const breadcrumbJsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rentmygroup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Monetization Guide 2026",
        "item": "https://rentmygroup.com/guide"
      }
    ]
  }), []);

  useEffect(() => {
    const originalTitle = document.title;
    const originalDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    
    document.title = "How to Monetize Facebook Groups 2026: The Ultimate Guide | RentMyGroup";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Unlock sustainable passive income from your Facebook and WhatsApp groups. Our 2026 guide covers cover photo rentals, pinned messages, and community sponsorship strategies.');
    
    // Add canonical link for the guide
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://rentmygroup.com/guide');
    }

    // Add Breadcrumb JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbJsonLd);
    document.head.appendChild(script);

    return () => { 
      document.title = originalTitle;
      if (originalDesc) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', originalDesc);
      }
      if (canonical) {
        canonical.setAttribute('href', 'https://rentmygroup.com/');
      }
      document.head.removeChild(script);
    };
  }, [breadcrumbJsonLd]);

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Page Hero */}
      <section className="bg-slate-950 text-white pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-12 animate-fade-in" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={12} className="text-white/20" />
              <span className="text-indigo-400">2026 Strategy Guide</span>
            </nav>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tight leading-[0.9] mb-12 animate-slide-up">
              Monetize Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300">Facebook Group.</span>
            </h1>
            
            <p className="text-slate-400 text-xl md:text-3xl font-medium leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              The 2026 Blueprint for Admins: Turn community trust into sustainable passive income with verified sponsorship strategies.
            </p>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
                <ShieldCheck className="text-indigo-400" size={20} aria-hidden="true" />
                <span className="text-sm font-bold tracking-tight">Verified Strategies</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
                <Zap className="text-yellow-400" size={20} aria-hidden="true" />
                <span className="text-sm font-bold tracking-tight">2026 Algorithm-Proof</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Content */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-32">
            
            <GuideSection step="01" title="The Future of Community Monetization" icon={<Lock size={28} />}>
              <p>
                In 2026, user attention is the scarcest resource. Traditional Facebook Feed ads are now ignored by 92% of users. The only real estate left with 100% engagement is the <strong>Gated Community.</strong> This is why learning <strong>how to monetize Facebook groups</strong> is the most valuable skill for community leaders today.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
                   <BarChart3 className="text-slate-200 absolute -bottom-4 -right-4" size={120} aria-hidden="true" />
                   <h3 className="font-black text-slate-900 text-xl mb-4">Engagement Decay</h3>
                   <p className="text-sm text-slate-500 font-medium">Standard posts only reach 2-5% of your members naturally. The algorithm penalizes external links and business promotion.</p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 relative overflow-hidden">
                   <Sparkles className="text-indigo-200 absolute -bottom-4 -right-4" size={120} aria-hidden="true" />
                   <h3 className="font-black text-indigo-900 text-xl mb-4">The Pinned Premium</h3>
                   <p className="text-sm text-indigo-600/70 font-medium">Pinned announcements and cover photos are "Native UI"—they are viewed every time a user visits your group to post or comment.</p>
                </div>
              </div>
            </GuideSection>

            <GuideSection step="02" title="Monetize Facebook Groups Without Spam" icon={<Users size={28} />}>
              <p>
                Your members joined for value, not to be sold to. The 2026 strategy for <strong>earning money from Facebook groups</strong> is <strong>Curated Sponsorships</strong>. Treat your group like a premium magazine, not a flea market.
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start gap-5">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="block font-black text-slate-900 mb-1">Fixed-Rent Cover Photo Ads</h3>
                    <p className="text-base text-slate-500">Rent your group header to a vetted local brand. It’s passive, non-intrusive, and extremely high-value for real estate or local services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <CheckCircle2 size={18} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="block font-black text-slate-900 mb-1">Weekly Pinned Group Highlights</h3>
                    <p className="text-base text-slate-500">Feature one "Sponsor of the Week" at the top of the feed. This keeps the group clean while providing guaranteed reach to all members.</p>
                  </div>
                </li>
              </ul>
            </GuideSection>

            <GuideSection step="03" title="Automate Passive Income from WhatsApp" icon={<Zap size={28} />}>
              <p>
                Don't spend your time chasing $20 from local businesses. Use a specialized marketplace like <strong>RentMyGroup</strong> to handle the administrative overhead and secure high-paying <strong>WhatsApp group sponsorships</strong>.
              </p>
              
              <div className="mt-12 bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                   <DollarSign size={200} aria-hidden="true" />
                </div>
                <div className="max-w-2xl relative z-10">
                   <h3 className="text-3xl font-display font-black mb-8 leading-tight">The RMG Advantage for Admins:</h3>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4 text-slate-300">
                        <Search className="text-indigo-400" size={24} aria-hidden="true" />
                        <span className="font-bold">We find brands specifically looking for your community niche.</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-300">
                        <ImageIcon className="text-indigo-400" size={24} aria-hidden="true" />
                        <span className="font-bold">We provide high-conversion ad templates for your group.</span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-300">
                        <DollarSign className="text-indigo-400" size={24} aria-hidden="true" />
                        <span className="font-bold">Secure payouts automated via Stripe to your bank account.</span>
                      </div>
                   </div>
                   
                   <div className="pt-12">
                      <Button 
                        onClick={() => onOpenModal('admin')} 
                        className="w-full sm:w-auto h-20 px-12 text-xl bg-indigo-600 shadow-2xl shadow-indigo-500/30"
                      >
                         Secure Your Group Spot <ArrowRight size={24} className="ml-2" aria-hidden="true" />
                      </Button>
                      <p className="mt-6 text-slate-500 text-sm font-bold uppercase tracking-widest text-center sm:text-left">
                        Joining the network is 100% Free for Group Admins
                      </p>
                   </div>
                </div>
              </div>
            </GuideSection>

          </div>
          
          <section className="mt-32 pt-24 border-t border-slate-100 text-center">
             <Trophy size={48} className="mx-auto text-yellow-400 mb-8" aria-hidden="true" />
             <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-6">Start Your Community Legacy.</h2>
             <p className="text-slate-500 text-xl font-medium max-w-xl mx-auto mb-12 leading-relaxed">
                2026 is the year of the Private Community. Don't leave your monetization to chance. Join the network leading the change in <strong>Facebook group marketing.</strong>
             </p>
             <Button onClick={() => onOpenModal('admin')} variant="secondary" className="px-12 h-16 text-lg border-2 border-slate-200">
                Register as a Group Admin
             </Button>
          </section>
        </div>
      </section>
    </div>
  );
};
