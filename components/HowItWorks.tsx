
import React from 'react';
import { Search, ImagePlus, ArrowRight, Sparkles, MapPin, MousePointer2, BarChart3, CheckCircle2 } from 'lucide-react';

const UsersIcon = ({ size, className = "" }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StepIllustration = ({ step }: { step: number }) => {
  if (step === 1) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Step 1: Discover - Local Map Scene */}
        <div className="absolute inset-0 bg-blue-100/50 rounded-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
        <div className="relative w-[85%] h-[85%] bg-white rounded-2xl shadow-xl border border-blue-50 overflow-hidden p-3 flex flex-col gap-2 transition-transform duration-500 group-hover:scale-105">
           <div className="flex items-center gap-2 border-b border-slate-50 pb-2">
             <div className="w-24 h-4 bg-slate-100 rounded-full flex items-center px-2">
               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
             </div>
             <Search size={10} className="text-slate-300 ml-auto" />
           </div>
           <div className="flex-1 grid grid-cols-2 gap-2 relative">
             <div className="bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
                <MapPin size={24} className="text-blue-500 animate-bounce" />
             </div>
             <div className="flex flex-col gap-1.5 pt-1">
                <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                <div className="w-[80%] h-2 bg-slate-100 rounded-full"></div>
                <div className="w-[40%] h-2 bg-slate-100 rounded-full"></div>
             </div>
             <div className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white scale-75">
                <UsersIcon size={20} />
             </div>
           </div>
        </div>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Step 2: Design - Ad Canvas Scene */}
        <div className="absolute inset-0 bg-purple-100/50 rounded-3xl rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
        <div className="relative w-[85%] h-[85%] bg-slate-900 rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-105">
           <div className="h-24 bg-gradient-to-br from-purple-500 to-indigo-600 relative p-3">
              <div className="w-full h-full rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center">
                 <ImagePlus size={20} className="text-white/60" />
              </div>
           </div>
           <div className="p-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10"></div>
                 <div className="w-16 h-2 bg-slate-800 rounded-full"></div>
              </div>
              <div className="w-full h-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center px-2 gap-2">
                 <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                 <div className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Pinned Sponsor</div>
              </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/4 translate-y-2">
              <MousePointer2 size={32} className="text-white drop-shadow-lg fill-indigo-600 animate-pulse" />
           </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Step 3: Scale - Analytics Scene */}
      <div className="absolute inset-0 bg-green-100/50 rounded-3xl -rotate-2 transition-transform group-hover:rotate-0 duration-500"></div>
      <div className="relative w-[85%] h-[85%] bg-white rounded-2xl shadow-xl border border-green-50 overflow-hidden p-4 flex flex-col gap-4 transition-transform duration-500 group-hover:scale-105">
         <div className="flex items-center justify-between">
            <BarChart3 size={16} className="text-green-600" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">+124%</span>
         </div>
         <div className="flex-1 flex items-end gap-1.5 h-full">
            {[30, 50, 40, 70, 60, 90, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-green-500/10 rounded-t-sm relative group/bar">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-sm transition-all duration-700 delay-150" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
         </div>
         <div className="flex items-center justify-center gap-2 py-2 bg-green-50 rounded-xl border border-green-100">
            <CheckCircle2 size={12} className="text-green-600" />
            <span className="text-[9px] font-bold text-green-700">Conversion Goal Met</span>
         </div>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discover Local Groups",
      desc: "Search our verified network of 5,000+ communities. Filter by zip code, interest, and engagement metrics.",
      bg: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      num: "02",
      title: "Design Your Campaign",
      desc: "Upload your Facebook cover photo or draft your WhatsApp pinned message. Our experts help you optimize for ROI.",
      bg: "bg-purple-50",
      accent: "text-purple-600"
    },
    {
      num: "03",
      title: "Scale Your Growth",
      desc: "Your ad goes live instantly. Track clicks, member reactions, and conversion data through our real-time dashboard.",
      bg: "bg-green-50",
      accent: "text-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-slate-100 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} /> Simple 3-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
            How to <span className="text-indigo-600">Lease Attention.</span>
          </h2>
          <p className="mt-8 text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Traditional ads are ignored. Group sponsorships are embraced. <br className="hidden md:block" /> Here is how we make it happen in 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 relative">
          {/* Decorative Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-indigo-200 to-transparent animate-shimmer"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col items-center text-center">
                
                {/* Illustrative Container */}
                <div className="relative mb-12 w-56 h-56 flex items-center justify-center">
                   <StepIllustration step={idx + 1} />
                  
                  {/* Floating Number Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-black shadow-xl shadow-slate-900/20 transform rotate-12 transition-transform group-hover:rotate-0 z-20">
                    {step.num}
                  </div>
                </div>

                <div className="space-y-4 max-w-[280px]">
                  <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {idx < 2 && (
                  <div className="md:hidden mt-12 text-slate-200">
                    <ArrowRight size={32} className="rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Social Proof */}
        <div className="mt-28 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
           <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-3 bg-slate-50 border border-slate-100 rounded-[2rem] shadow-sm">
             <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=v2user${i+20}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" alt="user" />
                ))}
             </div>
             <p className="text-sm font-bold text-slate-600 px-4">
               Join <span className="text-indigo-600 font-black">5,200+</span> businesses and community leaders.
             </p>
             <button className="h-10 px-5 bg-white border border-slate-200 rounded-full text-xs font-black text-slate-900 hover:bg-slate-900 hover:text-white transition-all active:scale-95">
                View All Case Studies
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};
