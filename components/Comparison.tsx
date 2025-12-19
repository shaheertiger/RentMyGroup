
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 overflow-hidden" id="comparison">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
           <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 tracking-tight">Why Local Businesses Switch</h2>
           <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">See how RentMyGroup stacks up against traditional ads in terms of trust and visibility.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-200 relative group overflow-hidden">
           
           {/* Mobile Gradient Scroll Cue - Visual Fix for "Cutoff" feel */}
           <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/40 to-transparent pointer-events-none md:hidden z-30"></div>
           
           {/* Swipe Hint Overlay - pointer-events-none is critical for interaction */}
           <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none md:hidden animate-fade-out" style={{animationDelay: '2.5s', animationDuration: '0.5s', animationFillMode: 'forwards'}}>
              <div className="bg-slate-900/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold shadow-2xl">
                 Swipe to Compare <ArrowRight size={14} className="animate-bounce-right" />
              </div>
           </div>

           <div className="overflow-x-auto relative z-10 no-scrollbar">
             {/* 
                Performance Note: Using a fixed minimum width ensures layout stability 
                while horizontal scrolling is performed on low-end mobile devices.
             */}
             <div className="min-w-[580px] md:min-w-full">
               
               {/* Header Row */}
               <div className="grid grid-cols-[105px_1fr_1fr] md:grid-cols-3 bg-slate-50/80 border-b border-slate-200">
                  <div className="sticky left-0 z-20 bg-slate-50 p-4 md:p-8 font-black text-slate-400 text-[9px] md:text-sm uppercase tracking-widest flex items-center border-r border-slate-200/50 shadow-[2px_0_10px_rgba(0,0,0,0.03)]">
                    Feature
                  </div>
                  <div className="p-5 md:p-8 font-black text-indigo-600 text-base md:text-xl bg-indigo-50/50 text-center border-r border-indigo-100 relative">
                    RentMyGroup
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
                  </div>
                  <div className="p-5 md:p-8 font-black text-slate-500 text-base md:text-xl text-center flex items-center justify-center">
                    Facebook Ads
                  </div>
               </div>

               {/* Viewability Row */}
               <div className="grid grid-cols-[105px_1fr_1fr] md:grid-cols-3 border-b border-slate-100 hover:bg-slate-50/50 transition-colors group/row">
                  <div className="sticky left-0 z-10 bg-white group-hover/row:bg-slate-50/50 p-4 md:p-8 font-bold text-slate-700 text-[13px] md:text-lg flex items-center border-r border-slate-100 shadow-[2px_0_10px_rgba(0,0,0,0.03)]">
                    Viewability
                  </div>
                  <div className="p-5 md:p-8 text-center border-r border-slate-100 bg-indigo-50/10 font-black text-slate-900 text-sm md:text-lg">
                    100% (Pinned)
                  </div>
                  <div className="p-5 md:p-8 text-center text-slate-500 text-sm md:text-lg font-medium flex items-center justify-center">
                    ~10% (Scroll)
                  </div>
               </div>

               {/* Ad Blockers Row */}
               <div className="grid grid-cols-[105px_1fr_1fr] md:grid-cols-3 border-b border-slate-100 hover:bg-slate-50/50 transition-colors group/row">
                  <div className="sticky left-0 z-10 bg-white group-hover/row:bg-slate-50/50 p-4 md:p-8 font-bold text-slate-700 text-[13px] md:text-lg flex items-center border-r border-slate-100 shadow-[2px_0_10px_rgba(0,0,0,0.03)]">
                    Ad Blockers
                  </div>
                  <div className="p-5 md:p-8 text-center border-r border-slate-100 bg-indigo-50/10 text-green-600 flex justify-center items-center gap-1.5 font-black text-sm md:text-lg">
                     <Check size={16} strokeWidth={3} className="shrink-0" /> Immune
                  </div>
                  <div className="p-5 md:p-8 text-center text-red-500 flex justify-center items-center gap-1.5 text-sm md:text-lg font-medium">
                     <X size={16} strokeWidth={3} className="shrink-0" /> Blocked
                  </div>
               </div>

               {/* Trust Factor Row */}
               <div className="grid grid-cols-[105px_1fr_1fr] md:grid-cols-3 border-b border-slate-100 hover:bg-slate-50/50 transition-colors group/row">
                  <div className="sticky left-0 z-10 bg-white group-hover/row:bg-slate-50/50 p-4 md:p-8 font-bold text-slate-700 text-[13px] md:text-lg flex items-center border-r border-slate-100 shadow-[2px_0_10px_rgba(0,0,0,0.03)]">
                    Trust Factor
                  </div>
                  <div className="p-5 md:p-8 text-center border-r border-slate-100 bg-indigo-50/10 font-black text-slate-900 text-sm md:text-lg">
                    High (Admin)
                  </div>
                  <div className="p-5 md:p-8 text-center text-slate-500 text-sm md:text-lg font-medium flex items-center justify-center">
                    Low (Algo)
                  </div>
               </div>

               {/* Precision Row */}
               <div className="grid grid-cols-[105px_1fr_1fr] md:grid-cols-3 hover:bg-slate-50/50 transition-colors group/row">
                  <div className="sticky left-0 z-10 bg-white group-hover/row:bg-slate-50/50 p-4 md:p-8 font-bold text-slate-700 text-[13px] md:text-lg flex items-center border-r border-slate-100 shadow-[2px_0_10px_rgba(0,0,0,0.03)]">
                    Precision
                  </div>
                  <div className="p-5 md:p-8 text-center border-r border-slate-100 bg-indigo-50/10 font-black text-slate-900 text-sm md:text-lg">
                    Verified
                  </div>
                  <div className="p-5 md:p-8 text-center text-slate-500 text-sm md:text-lg font-medium flex items-center justify-center">
                    Vague
                  </div>
               </div>
             </div>
           </div>
           
           <div className="md:hidden text-center text-[10px] text-slate-400 py-3 bg-slate-50/30 font-black uppercase tracking-[0.2em] border-t border-slate-100 rounded-b-[2rem]">
             Scroll right to see full comparison →
           </div>
        </div>
      </div>
    </section>
  );
};
