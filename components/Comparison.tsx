import React from 'react';
import { Check, X, ArrowRight, Trophy, Zap, Shield, Users, Target } from 'lucide-react';

interface ComparisonRowProps {
  label: string;
  rmgValue: string;
  rmgSub: string;
  tradValue: string;
  tradSub: string;
  icon: React.ReactNode;
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ label, rmgValue, rmgSub, tradValue, tradSub, icon }) => (
  <div className="grid grid-cols-[110px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] border-b border-slate-100 last:border-0 group/row hover:bg-slate-50/30 transition-colors">
    <div className="flex flex-col justify-center p-4 md:p-8 bg-white md:bg-transparent border-r border-slate-100">
      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 mb-2 group-hover/row:text-indigo-600 group-hover/row:bg-indigo-50 transition-colors">
        {icon}
      </div>
      <span className="text-[11px] md:text-sm font-black uppercase tracking-widest text-slate-900 leading-tight">
        {label}
      </span>
    </div>
    <div className="p-5 md:p-8 bg-indigo-50/20 border-r border-slate-100 flex flex-col justify-center text-center relative group-hover/row:bg-indigo-50/40 transition-colors">
      <div className="flex items-center justify-center gap-1.5 mb-1 text-indigo-600">
        <Check size={16} strokeWidth={3} />
        <span className="text-sm md:text-xl font-black tracking-tight">{rmgValue}</span>
      </div>
      <span className="text-[10px] md:text-xs font-bold text-indigo-400/80 uppercase tracking-wider">{rmgSub}</span>
    </div>
    <div className="p-5 md:p-8 flex flex-col justify-center text-center opacity-60 grayscale group-hover/row:grayscale-0 group-hover/row:opacity-100 transition-all">
      <div className="flex items-center justify-center gap-1.5 mb-1 text-slate-400">
        <X size={16} strokeWidth={3} />
        <span className="text-sm md:text-xl font-bold tracking-tight text-slate-600">{tradValue}</span>
      </div>
      <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider">{tradSub}</span>
    </div>
  </div>
);

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="comparison">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
             <Target size={12} /> 2026 Benchmarks
           </div>
           <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
             Why Brands are <span className="text-indigo-600">Ditching</span> <br /> Traditional Social Ads.
           </h2>
           <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl">
             We compared a $1,000 spend on Facebook Feed Ads vs. <br className="hidden md:block" /> a $1,000 Pinned Sponsorship on RentMyGroup.
           </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
           {/* Winner Badge */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none md:left-[50%] md:ml-[80px] lg:ml-[120px]">
              <div className="bg-indigo-600 text-white px-6 py-2 rounded-2xl shadow-2xl shadow-indigo-500/40 flex items-center gap-2 border-4 border-white">
                <Trophy size={18} fill="currentColor" />
                <span className="text-sm font-black uppercase tracking-widest italic">Proven Winner</span>
              </div>
           </div>

           <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative isolate">
             
             {/* Gradient Background Decoration */}
             <div className="absolute top-0 left-[20%] w-[33%] h-full bg-indigo-50/20 -z-10 border-x border-slate-100/50"></div>

             <div className="overflow-x-auto no-scrollbar">
               <div className="min-w-[500px] md:min-w-full">
                 
                 {/* Table Header */}
                 <div className="grid grid-cols-[110px_1fr_1fr] md:grid-cols-[200px_1fr_1fr] bg-slate-50/50 border-b border-slate-200">
                    <div className="p-4 md:p-10 font-black text-slate-400 text-[10px] uppercase tracking-[0.3em] flex items-center">
                      Metric
                    </div>
                    <div className="p-6 md:p-10 text-center relative">
                      <div className="text-indigo-600 font-display font-black text-xl md:text-3xl tracking-tighter">RentMyGroup</div>
                      <div className="text-[10px] font-black text-indigo-400 uppercase mt-1 tracking-widest">Community Native</div>
                    </div>
                    <div className="p-6 md:p-10 text-center opacity-40">
                      <div className="text-slate-900 font-display font-black text-xl md:text-3xl tracking-tighter">Standard Ads</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase mt-1 tracking-widest">Algorithmic Feed</div>
                    </div>
                 </div>

                 {/* Rows */}
                 <ComparisonRow 
                   label="Visibility"
                   rmgValue="100%"
                   rmgSub="Guaranteed Placement"
                   tradValue="< 4%"
                   tradSub="Random Feed Scroll"
                   icon={<Zap size={18} />}
                 />
                 <ComparisonRow 
                   label="Trust Source"
                   rmgValue="Local Leader"
                   rmgSub="Personal Endorsement"
                   tradValue="AI Bot"
                   tradSub="Cold Algorithm"
                   icon={<Users size={18} />}
                 />
                 <ComparisonRow 
                   label="Ad Blockers"
                   rmgValue="Immune"
                   rmgSub="Part of Conversation"
                   tradValue="Blocked"
                   tradSub="Filtered by Browsers"
                   icon={<Shield size={18} />}
                 />
                 <ComparisonRow 
                   label="Cost Per lead"
                   rmgValue="$0.92"
                   rmgSub="Fixed Monthly Rent"
                   tradValue="$18.50"
                   tradSub="Bidding Wars"
                   icon={<ArrowRight size={18} />}
                 />
               </div>
             </div>

             {/* Footer Note */}
             <div className="bg-slate-50/80 p-6 text-center border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  *2026 Projections based on 1.2M Community Data Points
                </p>
             </div>
           </div>

           {/* Mobile Swipe Hint */}
           <div className="md:hidden mt-6 text-center flex items-center justify-center gap-2 text-slate-400 text-xs font-bold animate-pulse">
              Swipe to compare full details <ArrowRight size={14} />
           </div>
        </div>
      </div>
    </section>
  );
};
