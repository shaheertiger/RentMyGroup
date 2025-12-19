import React from 'react';
import { ShieldCheck, Zap, MapPin, MessageCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Stop Fighting the <span className="text-indigo-600">Algorithm.</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                RentMyGroup bypasses the scroll. We put your business in the one place neighbors can't ignore: the conversation.
              </p>
           </div>
           <div className="flex gap-4">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl text-center">
                <div className="text-3xl font-black text-indigo-600 mb-1">98%</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">View Rate</div>
              </div>
              <div className="bg-indigo-600 p-6 rounded-3xl text-center text-white">
                <div className="text-3xl font-black mb-1">5X</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-indigo-100">Better ROI</div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {/* Bento 1: High Visibility */}
           <div className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 group relative overflow-hidden transition-all hover:bg-slate-100/80">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 font-display">Unblockable Visibility</h3>
                <p className="text-slate-600 text-lg max-w-md font-medium">Pinned messages and group headers are immune to ad-blockers and feed algorithms. If they're in the group, they see your brand.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -mr-32 -mb-32"></div>
           </div>

           {/* Bento 2: Fast Setup */}
           <div className="bg-indigo-600 rounded-[2.5rem] p-10 text-white group relative overflow-hidden">
              <Zap size={40} className="mb-8 text-indigo-200 group-hover:rotate-12 transition-transform" />
              <h3 className="text-2xl font-black mb-3 font-display">Go Live in <br /> Minutes</h3>
              <p className="text-indigo-100/80 font-medium">Upload creative, choose your group, and go live. No complex ad accounts needed.</p>
           </div>

           {/* Bento 3: Trust */}
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white group relative overflow-hidden">
              <ShieldCheck size={40} className="mb-8 text-green-400" />
              <h3 className="text-2xl font-black mb-3 font-display">Vetted Admins</h3>
              <p className="text-slate-400 font-medium">Every community in our network is manually verified for engagement and authenticity.</p>
           </div>

           {/* Bento 4: Hyper-Local */}
           <div className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-white rounded-[2.5rem] p-10 border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-12 group">
              <div className="flex-1">
                <MapPin size={40} className="mb-8 text-indigo-600" />
                <h3 className="text-3xl font-black text-slate-900 mb-4 font-display">Hyper-Local Targeting</h3>
                <p className="text-slate-600 text-lg font-medium">Reach neighborhoods by zip code, city, or interest. From "Vancouver Real Estate" to "Toronto Mommas."</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 w-full md:w-auto rotate-2 group-hover:rotate-0 transition-transform">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-700">Active: Liberty Village</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-700">Ads Live: 14 Campaigns</span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};