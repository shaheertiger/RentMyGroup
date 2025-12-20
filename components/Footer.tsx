import React from 'react';
import { Users, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MousePointerClick } from 'lucide-react';
import { Role } from '../types';

interface FooterProps {
  onOpenModal?: (role: Role) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 pt-24 pb-32 md:pb-16 border-t border-slate-200 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-indigo-600 rounded-lg p-1.5 shadow-indigo-500/20 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Users size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                RentMy<span className="text-indigo-600">Group</span>
              </span>
            </div>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
              The world's first verified marketplace for community group advertising. We help local businesses reach neighbors through trusted community leaders.
            </p>

            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Join the Waitlist</h4>
              <div className="relative max-w-sm">
                <button 
                  onClick={() => onOpenModal?.('advertiser')}
                  className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-5 text-sm font-bold text-slate-700 flex items-center justify-between hover:border-indigo-500 transition-all shadow-sm group"
                >
                  Get Early Access
                  <ArrowRight size={18} className="text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Join 2,400+ members receiving weekly community growth tips.</p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:ml-auto">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">Explore Platform</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onOpenModal?.('advertiser')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                  <MousePointerClick size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  For Advertisers
                </button>
              </li>
              <li>
                <button onClick={() => onOpenModal?.('admin')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                  <MousePointerClick size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  For Group Admins
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                  <MousePointerClick size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  How it Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calculator')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                  <MousePointerClick size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  Earnings Calculator
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">Support & Docs</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleNav('faq')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
                  Common Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('comparison')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
                  Platform Comparison
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('testimonials')} className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
                  Success Stories
                </button>
              </li>
              <li>
                <a href="mailto:support@rentmygroup.com" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-6">Social</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Facebook size={18} />, label: 'FB' },
                { icon: <Twitter size={18} />, label: 'X' },
                { icon: <Instagram size={18} />, label: 'IG' },
                { icon: <Linkedin size={18} />, label: 'IN' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="flex items-center justify-center p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <span className="text-sm font-bold text-slate-900">
                &copy; {currentYear} RentMyGroup Inc.
              </span>
              <div className="flex gap-6">
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Toronto, Canada</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">|</span>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">Back to Top</button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-[11px] font-bold text-slate-500 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              All Systems Operational
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-100/50 rounded-2xl border border-slate-200/50">
            <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed font-medium">
              <span className="font-black text-slate-500 uppercase mr-2 tracking-widest">Legal Notice:</span>
              RentMyGroup is an independent advertising marketplace. We are not affiliated with, endorsed by, or sponsored by Meta Platforms, Inc., WhatsApp LLC, Telegram FZ-LLC, or any other social media platform. All logos and trademarks are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};