import React from 'react';
import { Search, MessageSquare, CreditCard } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Select Groups",
      desc: "Filter 500+ vetted communities by city and niche.",
      icon: <Search className="text-indigo-600" size={24} />
    },
    {
      num: "02",
      title: "Send Creative",
      desc: "Upload your banner or chat message. We handle approvals.",
      icon: <MessageSquare className="text-indigo-600" size={24} />
    },
    {
      num: "03",
      title: "Get Leads",
      desc: "Your ad goes live. Watch traffic flow to your site instantly.",
      icon: <CreditCard className="text-indigo-600" size={24} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs bg-indigo-50 px-3 py-1 rounded-full">The Process</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-4">3 Steps to Revenue</h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center bg-white p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-indigo-50 shadow-lg shadow-indigo-100/50 flex items-center justify-center mb-6 relative z-10 group">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};