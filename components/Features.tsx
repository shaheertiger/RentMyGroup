import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  MapPin, 
  MessageCircle, 
  BarChart3, 
  Fingerprint, 
  Eye, 
  MousePointer2, 
  ArrowRight,
  Layers,
  Search,
  Target,
  Sparkles,
  TrendingUp,
  LineChart,
  ShieldAlert
} from 'lucide-react';

export const Features: React.FC = () => {
  const [viewMode, setViewMode] = useState<'chaos' | 'control'>('control');

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=80"
  ];

  return (
    <section id="features" className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
           <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <BarChart3 size={12} /> Beat the System
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
                Stop Fighting the <br />
                <span className={`${viewMode === 'control' ? 'text-indigo-600' : 'text-red-500'} transition-colors duration-500 relative inline-block py-1`}>
                  Algorithm.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9C118.5 3 239.5 3 355 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
                Social feeds are a slot machine. Renting community attention is a business strategy. We put your brand in the <strong>Primary Slot</strong> of local hubs.
              </p>
           </div>
           
           {/* Mode Switcher */}
           <div className="flex flex-col gap-4 p-2 bg-slate-900 rounded-[2.5rem] border border-slate-800 w-fit shrink-0 shadow-2xl relative overflow-hidden">
              <div className="flex p-1 bg-white/5 rounded-2xl relative z-10">
                <button 
                  onClick={() => setViewMode('chaos')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'chaos' ? 'bg-red-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <ShieldAlert size={14} /> The Chaos
                </button>
                <button 
                  onClick={() => setViewMode('control')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'control' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <Target size={14} /> The Control
                </button>
              </div>
              <div className="px-6 py-4 border-t border-white/5">
                 <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-500">Reach Reliability</span>
                    <span className={viewMode === 'control' ? 'text-green-400' : 'text-red-400'}>
                       {viewMode === 'control' ? 'Guaranteed 100%' : 'Random < 5%'}
                    </span>
                 </div>
              </div>
           </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
           
           {/* Card 1: Main Visualization */}
           <div className={`md:col-span-12 lg:col-span-8 bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white group relative overflow-hidden border border-white/5 flex flex-col justify-between transition-all duration-700 min-h-[500px] ${viewMode === 'chaos' ? 'ring-2 ring-red-500/20' : 'ring-2 ring-indigo-500/20'}`}>
              <div className="relative z-20 max-w-lg">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-10 shadow-2xl transition-colors duration-500 ${viewMode === 'control' ? 'bg-indigo-600' : 'bg-red-500'}`}>
                  {viewMode === 'control' ? <MessageCircle size={28} /> : <ShieldAlert size={28} />}
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 font-display tracking-tight leading-none">
                  {viewMode === 'control' ? 'Unblockable Native Reach' : 'Algorithmic Obscurity'}
                </h3>
                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                  {viewMode === 'control' 
                    ? "Pinned messages aren't 'ads'—they're part of the group's architecture. They aren't scrolled past; they're referenced daily by thousands of active neighbors." 
                    : "Your posts compete with thousands of others. Most neighbors only see your content if they happen to be online at the exact moment the algorithm likes you."}
                </p>
              </div>

              {/* Interactive Visualization Background */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {viewMode === 'control' ? (
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full p-8 hidden md:flex items-center justify-center translate-x-12 opacity-60">
                     <div className="w-full aspect-square bg-indigo-500/10 rounded-full blur-[100px] animate-pulse"></div>
                  </div>
                ) : (
                  <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-20">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="bg-red-500/20 aspect-square animate-pulse" style={{ animationDelay: `${Math.random() * 2}s` }}></div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-12 relative z-20">
                 <button className="flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
                    Learn about Fixed-Rent Attention <ArrowRight size={18} />
                 </button>
              </div>
           </div>

           {/* Card 2: Activation Time (Matching User Screenshot) */}
           <div className="md:col-span-12 lg:col-span-4 bg-indigo-600 rounded-[3rem] p-1 border border-white/10 shadow-2xl shadow-indigo-600/20 flex flex-col justify-center items-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700"></div>
              
              {/* The "Screenshot" Card */}
              <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/20 shadow-2xl relative z-10 w-[85%] flex flex-col items-center">
                 <div className="text-center w-full">
                    <div className="text-[11px] font-black text-white/60 uppercase tracking-[0.3em] mb-8">Activation Time</div>
                    <div className="flex items-baseline justify-center gap-1 mb-8">
                       <span className="text-7xl md:text-8xl font-display font-black text-white tracking-tighter">12</span>
                       <span className="text-3xl md:text-4xl font-display font-black text-white leading-none">min</span>
                    </div>
                    {/* Progress Bar from Screenshot */}
                    <div className="w-full h-1.5 bg-white/20 rounded-full relative overflow-hidden">
                       <div className="absolute top-0 left-0 h-full bg-white w-[78%] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                    </div>
                 </div>
              </div>

              {/* Background Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-[100px]"></div>
           </div>

           {/* Card 3: Hyper-Local */}
           <div className="md:col-span-6 lg:col-span-5 bg-slate-50 rounded-[3rem] p-10 border border-slate-200 group flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-10 -right-10 opacity-[0.05] group-hover:rotate-12 transition-transform duration-700">
                <MapPin size={200} />
              </div>
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-8 border border-slate-200 shadow-sm">
                   <Target size={28} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 font-display tracking-tight leading-none">Neighborhood Sniper</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Target exactly where your customers live. No wasted spend on users 20 miles away.
                </p>
              </div>
              <div className="mt-8 flex gap-2">
                 {['90210', '10001', 'M4M'].map(zip => (
                   <span key={zip} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-400">{zip}</span>
                 ))}
              </div>
           </div>

           {/* Card 4: Trust Protocol */}
           <div className="md:col-span-6 lg:col-span-7 bg-white rounded-[3rem] p-10 border border-slate-200 group flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                 <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 border border-green-100">
                    <ShieldCheck size={28} />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 mb-4 font-display tracking-tight leading-none">Verified Humans</h3>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed">
                   We vet every group for bot activity. Your ads are seen by real neighbors, not fake accounts.
                 </p>
              </div>
              <div className="shrink-0 flex -space-x-4">
                 {avatars.map((url, i) => (
                   <img key={i} src={url} className="w-14 h-14 rounded-full border-4 border-white shadow-xl object-cover" alt="avatar" />
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};