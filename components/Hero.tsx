import React, { useState, useEffect, memo } from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import { Button } from './Button.tsx';
import { MockupFacebookGroup, MockupWhatsappGroup } from './ProfileMockup.tsx';
import { Role } from '../types.ts';

const TypewriterText = memo(({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 inline-block min-w-[200px] py-2">
      {words[index].substring(0, subIndex)}<span className="text-indigo-600 animate-pulse" aria-hidden="true">|</span>
    </span>
  );
});

export const Hero: React.FC<{ onOpenModal: (role: Role) => void }> = ({ onOpenModal }) => {
  const [platform, setPlatform] = useState<'whatsapp' | 'facebook'>('whatsapp');

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 mesh-bg overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] -z-10 animate-float" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px] -z-10 animate-float" style={{animationDelay: '-3s'}} aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="animate-slide-up space-y-6">
                {/* #1 Rated Tagline Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl shadow-indigo-500/10 border border-slate-100 backdrop-blur-sm group">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white shadow-sm">
                    <Sparkles size={12} fill="currentColor" />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <span className="text-indigo-600 font-black">#1 Rated</span> Private Community Ad Network
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
                  Rent Ad Space in Facebook, WhatsApp, and Online Communities
                </h1>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
              The first verified marketplace to rent cover photos and pin messages in community groups. Reach 100% of neighbors without the algorithmic penalty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Button 
                  onClick={() => onOpenModal('advertiser')} 
                  variant="primary"
                  className="w-full sm:w-auto px-10 h-16 text-lg relative group overflow-hidden"
                  title="Advertise your business in local groups"
                >
                   <span className="relative z-10 flex items-center gap-2">Grow My Brand <ArrowRight size={20} aria-hidden="true" /></span>
                   <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 animate-shimmer" aria-hidden="true"></div>
                </Button>
                <Button 
                  onClick={() => onOpenModal('admin')} 
                  variant="secondary"
                  className="w-full sm:w-auto px-10 h-16 text-lg bg-white border-slate-200"
                  title="Monetize your existing community"
                >
                   Monetize My Group
                </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 opacity-60">
              <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck size={18} aria-hidden="true" className="text-indigo-600" /> Vetted Admins</div>
              <div className="flex items-center gap-2 text-sm font-bold"><Zap size={18} aria-hidden="true" className="text-yellow-600" /> Instant Placement</div>
              <div className="flex items-center gap-2 text-sm font-bold"><Globe size={18} aria-hidden="true" className="text-blue-600" /> 100% Privacy-Safe</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex p-1.5 bg-slate-100 rounded-2xl mb-8 w-fit mx-auto shadow-inner border border-slate-200" role="tablist">
                <button 
                  role="tab"
                  aria-selected={platform === 'whatsapp'}
                  onClick={() => setPlatform('whatsapp')} 
                  className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${platform === 'whatsapp' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
                >WhatsApp</button>
                <button 
                  role="tab"
                  aria-selected={platform === 'facebook'}
                  onClick={() => setPlatform('facebook')} 
                  className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${platform === 'facebook' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}
                >Facebook</button>
              </div>

              <div className="transform scale-[0.85] sm:scale-100 transition-all duration-700" aria-label="Community Group Display Mockup">
                 {platform === 'whatsapp' ? <MockupWhatsappGroup /> : <MockupFacebookGroup />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};