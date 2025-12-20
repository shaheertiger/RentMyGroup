import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { Role } from '../types';

export const IncomeCalculator: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [members, setMembers] = useState(25000);
  
  const earnings = useMemo(() => {
    const rate = 0.08; // Higher premium estimation
    return Math.floor(members * rate);
  }, [members]);

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
                <Sparkles size={12} /> Passive Income for Admins
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.05] tracking-tight">
                Turn Your Group <br />
                Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300">Cash Machine.</span>
              </h2>
              
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                Moderating is hard work. You built the audience, now let them support you. Join 5,000+ admins earning passive monthly revenue.
              </p>
              
              <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 text-slate-300 font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                  <CheckCircle2 size={20} className="text-green-400 shrink-0" />
                  <span>Automated payouts via Stripe</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                  <CheckCircle2 size={20} className="text-green-400 shrink-0" />
                  <span>Choose only brands you trust</span>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => onOpenModal('admin')} 
                  variant="none" 
                  className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 px-10 h-16 md:h-20 text-lg md:text-xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] transition-all font-black rounded-2xl flex items-center justify-center gap-3"
                >
                   Join the Waitlist <ArrowRight size={22} strokeWidth={3} />
                </Button>
              </div>
           </div>

           {/* Right Calculator Card */}
           <div className="glass-panel rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 border border-white/10 relative shadow-[0_30px_100px_rgba(0,0,0,0.5)] bg-slate-900/40 backdrop-blur-2xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30">
                  <Calculator size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black font-display text-white">Earnings Estimator</h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Revenue Calculator</p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Active Members</span>
                    <span className="text-3xl md:text-4xl font-display font-black text-white bg-white/5 px-4 py-1 rounded-xl border border-white/10">{members.toLocaleString()}</span>
                  </div>
                  
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="1000" 
                      max="100000" 
                      step="500" 
                      value={members}
                      onChange={(e) => setMembers(parseInt(e.target.value))}
                      className="custom-range w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>
                  
                  <div className="flex justify-between text-[10px] text-slate-600 font-black uppercase tracking-widest px-1">
                    <span>1,000</span>
                    <span>50,000</span>
                    <span>100,000</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 rounded-[2rem] p-8 md:p-10 text-center border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-50"></div>
                    <Trophy className="mx-auto mb-4 text-indigo-400/60" size={32} />
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Estimated Yearly Revenue</p>
                    <div className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter drop-shadow-2xl">
                        ${(earnings * 12).toLocaleString()}
                    </div>
                    <p className="text-indigo-400/80 text-xs font-bold mt-4 px-4 py-2 bg-indigo-400/5 rounded-full inline-block border border-indigo-400/10">
                      *Based on 3 active monthly sponsors
                    </p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};