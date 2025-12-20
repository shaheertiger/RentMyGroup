import React from 'react';
import { Search, ImagePlus, Target, ArrowRight, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discover Local Groups",
      desc: "Search our verified network of 5,000+ communities. Filter by zip code, interest, and engagement metrics.",
      icon: <Search className="text-indigo-600" size={32} />,
      bg: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      num: "02",
      title: "Design Your Campaign",
      desc: "Upload your Facebook cover photo or draft your WhatsApp pinned message. Our experts help you optimize for ROI.",
      icon: <ImagePlus className="text-indigo-600" size={32} />,
      bg: "bg-purple-50",
      accent: "text-purple-600"
    },
    {
      num: "03",
      title: "Scale Your Growth",
      desc: "Your ad goes live instantly. Track clicks, member reactions, and conversion data through our real-time dashboard.",
      icon: <Target className="text-indigo-600" size={32} />,
      bg: "bg-green-50",
      accent: "text-green-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-slate-100 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} /> Simple 3-Step Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
            How to <span className="text-indigo-600">Lease Attention.</span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Traditional ads are ignored. Group sponsorships are embraced. <br className="hidden md:block" /> Here is how we make it happen in 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Decorative Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-indigo-200 to-transparent animate-shimmer"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col items-center text-center">
                
                {/* Illustrative Icon Container */}
                <div className="relative mb-10">
                  <div className={`w-40 h-40 rounded-[2.5rem] ${step.bg} border-2 border-white shadow-xl shadow-slate-200/50 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2`}>
                    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-indigo-500/10 text-indigo-600 transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Floating Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-black shadow-xl shadow-slate-900/20 transform rotate-12 transition-transform group-hover:rotate-0">
                    {step.num}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-indigo-200/40 blur-xl group-hover:scale-150 transition-transform"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-[280px]">
                    {step.desc}
                  </p>
                </div>
                
                {idx < 2 && (
                  <div className="md:hidden mt-8 text-slate-200">
                    <ArrowRight size={32} className="rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-6 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/50">
             <div className="flex -space-x-2 px-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=user${i+10}`} className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                ))}
             </div>
             <p className="text-sm font-bold text-slate-600 pr-6">
               Join <span className="text-indigo-600">500+</span> businesses launching today
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};