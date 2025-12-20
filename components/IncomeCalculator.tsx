import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Sparkles, Trophy, CheckCircle2, Clock } from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

export const IncomeCalculator: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [members, setMembers] = useState(25000);
  const [timeFrame, setTimeFrame] = useState<'weekly' | 'monthly' | 'yearly'>('monthly');
  
  const earnings = useMemo(() => {
    const rate = 0.08; // Base rate per member per month
    const monthly = Math.floor(members * rate);
    
    if (timeFrame === 'weekly') return Math.floor(monthly / 4);
    if (timeFrame === 'yearly') return monthly * 12;
    return monthly;
  }, [members, timeFrame]);

  return (
    <section id="calculator" className="py-20 md:py-32 bg-[#020617] text-white relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           {/* Left Content Column */}
           <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-black uppercase tracking-widest mx-auto lg:mx-0">
                <Sparkles size={12} aria-hidden="true" /> High-Intent Audience Arbitrage
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.05] tracking-tight">
                Turn Group <br />
                Moderation Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300">Sustainable Revenue.</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Community management is a full-time job. You built the trust, now secure your fair share. Join 5,000+ top-tier admins earning passive monthly revenue.
              </p>
              
              <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 text-slate-300 font-bold bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <CheckCircle2 size={20} className="text-green-400 shrink-0" aria-hidden="true" />
                  <span>Automated Payouts via Stripe Connect</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 font-bold bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <CheckCircle2 size={20} className="text-green-400 shrink-0" aria-hidden="true" />
                  <span>Complete Advertiser Vetting System</span>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => onOpenModal('admin')} 
                  variant="none" 
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 px-10 h-16 md:h-20 text-lg md:text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all font-black rounded-2xl flex items-center justify-center gap-3 group"
                  title="Claim your group and start earning"
                >
                   Claim My Group <ArrowRight size={22} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                </Button>
              </div>
           </div>

           {/* Right Calculator Card */}
           <div className="rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 border border-white/10 relative shadow-[0_30px_100px_rgba(0,0,0,0.5)] bg-slate-900/40 backdrop-blur-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30 group-hover:rotate-6 transition-transform duration-500">
                    <Calculator size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black font-display text-white">Profit Forecaster</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">v2.1 Revenue Logic</p>
                  </div>
                </div>

                <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/10 self-start sm:self-center" role="tablist">
                   {(['weekly', 'monthly', 'yearly'] as const).map((t) => (
                     <button
                       key={t}
                       role="tab"
                       aria-selected={timeFrame === t}
                       onClick={() => setTimeFrame(t)}
                       className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${timeFrame === t ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                     >
                       {t}
                     </button>
                   ))}
                </div>
              </div>

              <div className="space-y-12 relative z-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label htmlFor="member-slider" className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Active Members</label>
                    <span className="text-3xl md:text-4xl font-display font-black text-white bg-white/5 px-4 py-1 rounded-xl border border-white/10 shadow-inner" aria-live="polite">
                      {members.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="px-2">
                    <input 
                      id="member-slider"
                      type="range" 
                      min="1000" 
                      max="100000" 
                      step="500" 
                      value={members}
                      onChange={(e) => setMembers(parseInt(e.target.value))}
                      className="custom-range w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                      aria-label="Adjust member count"
                    />
                  </div>
                  
                  <div className="flex justify-between text-[10px] text-slate-600 font-black uppercase tracking-widest px-1">
                    <span>1K Members</span>
                    <span>100K+ Members</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 rounded-[2rem] p-8 md:p-10 text-center border border-white/5 relative overflow-hidden group/result">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-50" aria-hidden="true"></div>
                    <div className="relative z-10">
                      <Trophy className="mx-auto mb-4 text-indigo-400/60 group-hover/result:scale-125 group-hover/result:text-indigo-400 transition-all duration-500" size={32} aria-hidden="true" />
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Estimated {timeFrame} Revenue</p>
                      <div className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter drop-shadow-2xl flex items-center justify-center gap-2" aria-live="polite">
                          <span className="text-indigo-400 text-3xl md:text-4xl self-start mt-2">$</span>
                          {earnings.toLocaleString()}
                      </div>
                      <p className="text-indigo-400/80 text-[10px] font-bold mt-4 px-4 py-2 bg-indigo-400/5 rounded-full inline-flex items-center gap-2 border border-indigo-400/10">
                        <Clock size={12} /> Live Rate: 3 Verified Monthly Sponsors
                      </p>
                    </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
