import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Sparkles, Trophy } from 'lucide-react';
import { Button } from './Button';
import { Role } from '../types';

export const IncomeCalculator: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [members, setMembers] = useState(25000);
  
  const earnings = useMemo(() => {
    const rate = 0.08; // Higher premium estimation
    return Math.floor(members * rate);
  }, [members]);

  return (
    <section className="py-24 md:py-32 bg-[#020617] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] -mr-96 -mt-96"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-black uppercase tracking-widest">
                <Sparkles size={12} /> Earn While You Sleep
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight">
                Turn Your Group Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Cash Machine.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
                Moderating is hard work. You built the audience, now let them support you. Join 5,000+ admins earning passive monthly revenue.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-300 font-bold">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">✓</div>
                  Automated payouts via Stripe
                </li>
                <li className="flex items-center gap-4 text-slate-300 font-bold">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">✓</div>
                  Choose only brands you trust
                </li>
              </ul>

              <Button 
                onClick={() => onOpenModal('admin')} 
                variant="primary" 
                className="bg-white text-slate-900 hover:bg-slate-100 px-10 h-16 md:h-20 text-lg md:text-xl shadow-2xl w-full sm:w-auto"
              >
                 Join the Waitlist <ArrowRight size={20} />
              </Button>
           </div>

           <div className="glass-panel rounded-[3rem] p-10 md:p-14 border border-white/10 relative shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/40">
                  <Calculator size={28} />
                </div>
                <h3 className="text-2xl font-black font-display">Earnings Estimator</h3>
              </div>

              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-500 text-xs font-black uppercase tracking-widest">Active Members</span>
                    <span className="text-3xl font-display font-black text-white">{members.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="100000" 
                    step="500" 
                    value={members}
                    onChange={(e) => setMembers(parseInt(e.target.value))}
                    className="custom-range w-full"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-black uppercase">
                    <span>1K</span>
                    <span>100K</span>
                  </div>
                </div>

                <div className="bg-slate-950 rounded-[2.5rem] p-10 text-center border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors"></div>
                    <Trophy className="mx-auto mb-4 text-indigo-400/40" size={32} />
                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-4">Estimated Yearly Revenue</p>
                    <div className="text-6xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter">
                        ${(earnings * 12).toLocaleString()}
                    </div>
                    <p className="text-indigo-400 text-sm font-bold">*Calculated based on 3 active monthly sponsors</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};