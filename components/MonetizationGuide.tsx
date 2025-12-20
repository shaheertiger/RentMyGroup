import React, { useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  ShieldCheck, 
  Trophy,
  Users,
  Image as ImageIcon,
  MessageSquare,
  Zap,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

interface GuideSectionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const GuideSection: React.FC<GuideSectionProps> = ({ title, children, icon }) => (
  <div className="space-y-6 animate-slide-up">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 shrink-0">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 tracking-tight leading-tight">{title}</h3>
    </div>
    <div className="pl-0 md:pl-16 text-slate-600 text-lg leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export const MonetizationGuide: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  useEffect(() => {
    // Dynamic SEO Management
    const originalTitle = document.title;
    const originalMeta = document.querySelector('meta[name="description"]')?.getAttribute('content');
    
    document.title = "The 2024 Monetization Blueprint | RentMyGroup";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn the exact strategies used by top Facebook and WhatsApp group admins to earn passive income while keeping member trust high.');
    
    return () => {
      document.title = originalTitle;
      if (originalMeta) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', originalMeta);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Standalone Page Hero */}
      <section className="bg-slate-950 text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <nav className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest mb-8 justify-center md:justify-start">
              <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="hover:text-white transition-colors">Home</a>
              <ChevronRight size={14} />
              <span className="text-indigo-400">Guide</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles size={12} /> The 2024 Blueprint
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.95] mb-8">
              The Admin's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Blueprint.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
              Stop moderating for free. Learn how to transform your local community into a sustainable business without losing member trust.
            </p>
          </div>
        </div>
      </section>

      {/* Main Guide Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-24">
            <GuideSection title="01. Build a 'High-Trust' Environment" icon={<Users size={24} />}>
              <p>
                The value of your group isn't just the member count—it's the <strong>Trust Quotient</strong>. Brands don't pay for eyes; they pay for influence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Vet New Members:</strong> Use entry questions to filter bots and low-quality accounts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                  <span><strong>Active Moderation:</strong> A clean, useful feed makes your premium ad slots significantly more valuable to high-end brands.</span>
                </li>
              </ul>
            </GuideSection>

            <GuideSection title="02. Skip the 'Spammy' Methods" icon={<Zap size={24} />}>
              <p>
                Most admins fail because they try to sell generic affiliate products. This burns your audience and kills engagement.
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 mt-6">
                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2 text-xl">
                  <ShieldCheck size={20} className="text-indigo-600" /> Why Direct Sponsorships Win:
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase text-red-400 tracking-widest">The Problem</div>
                    <p className="text-sm font-medium leading-relaxed">Algorithm-based ads are irrelevant and pay you $0.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase text-green-500 tracking-widest">The RMG Solution</div>
                    <p className="text-sm font-medium leading-relaxed">Direct sponsors pay for high-visibility real estate you already own.</p>
                  </div>
                </div>
              </div>
            </GuideSection>

            <GuideSection title="03. Use RentMyGroup for Passive Income" icon={<DollarSign size={24} />}>
              <p>
                The most efficient way to earn is through <strong>Passive Leasing</strong>. Rent your cover photos or pinned messages for 30 days at a time.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group/card">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                    <ImageIcon size={28} />
                  </div>
                  <h5 className="font-black text-slate-900 text-xl mb-3">Cover Photo Leasing</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Rent out your group header. It's the first thing every member sees.</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group/card">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                    <MessageSquare size={28} />
                  </div>
                  <h5 className="font-black text-slate-900 text-xl mb-3">Pinned Message Slot</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Place a helpful local offer at the top. 100% reach guaranteed.</p>
                </div>
              </div>

              <div className="mt-12 p-10 rounded-[3rem] bg-indigo-600 text-white relative overflow-hidden group/cta">
                <div className="relative z-10">
                  <h4 className="text-3xl font-display font-black mb-6 leading-tight">Let us do the heavy lifting.</h4>
                  <p className="text-indigo-100 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                    We find the brands, handle the Stripe payments, and manage creative approvals so you can focus on your community.
                  </p>
                  <Button 
                    onClick={() => onOpenModal('admin')} 
                    variant="secondary" 
                    className="w-full sm:w-auto px-10 h-16 text-lg"
                  >
                    Start Monetizing Now <ArrowRight size={20} />
                  </Button>
                </div>
                <div className="absolute -right-20 -bottom-20 opacity-10 group-hover/cta:rotate-12 transition-transform duration-700">
                  <Trophy size={400} />
                </div>
              </div>
            </GuideSection>
          </div>
        </div>
      </section>
    </div>
  );
};