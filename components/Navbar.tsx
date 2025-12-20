import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Users, ArrowRight, ChevronRight, Briefcase, HelpCircle } from 'lucide-react';
import { Button } from './Button';
import { Role } from '../types';

interface NavbarProps {
  onOpenModal: (role: Role) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeout: number | null = null;
    const handleScroll = () => {
      if (timeout) return;
      
      timeout = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        timeout = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) window.cancelAnimationFrame(timeout);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLinkClick = useCallback((role: Role) => {
    onOpenModal(role);
    setMobileMenuOpen(false);
  }, [onOpenModal]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>
        <div className="mx-auto max-w-5xl px-4 pointer-events-auto">
          <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200/50' : 'bg-transparent border border-transparent'}`}>
            
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-indigo-600 rounded-lg p-1.5 shadow-indigo-500/20 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Users size={20} className="text-white" />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                RentMy<span className="text-indigo-600">Group</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all">How it Works</button>
              <button onClick={() => onOpenModal('admin')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all">Group Admins</button>
              <button onClick={() => onOpenModal('advertiser')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all">Businesses</button>
            </div>

            <button 
              className="md:hidden text-slate-900 p-3 -mr-2 active:bg-slate-100 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]" 
              onClick={() => setMobileMenuOpen(true)} 
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[65] bg-slate-900/40 backdrop-blur-sm animate-fade-in md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] z-[70] bg-white shadow-2xl animate-slide-in-left md:hidden flex flex-col h-full border-r border-slate-100 will-change-transform overscroll-behavior-contain">
          <div className="p-6 flex items-center justify-between bg-slate-50/50 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="bg-indigo-600 rounded-xl p-2 shadow-lg shadow-indigo-600/20">
                <Users size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                RentMy<span className="text-indigo-600">Group</span>
              </span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 -mr-2 text-slate-400 hover:text-slate-600 active:bg-slate-100 rounded-full flex items-center justify-center min-w-[48px] min-h-[48px]"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-5 space-y-6 no-scrollbar">
            <section className="space-y-3">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 mb-1">Solutions</div>
              
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:scale-[0.98] active:bg-slate-50 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0">
                   <HelpCircle size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 text-[15px]">How it Works</span>
                    <ChevronRight size={14} className="text-slate-300" />
                  </div>
                  <p className="text-[12px] text-slate-500 leading-tight">Learn about our 3-step process.</p>
                </div>
              </button>

              <button 
                onClick={() => handleLinkClick('admin')} 
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:scale-[0.98] active:bg-slate-50 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0">
                   <Users size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 text-[15px]">Group Admins</span>
                    <ChevronRight size={14} className="text-slate-300" />
                  </div>
                  <p className="text-[12px] text-slate-500 leading-tight">Monetize with curated sponsors.</p>
                </div>
              </button>

              <button 
                onClick={() => handleLinkClick('advertiser')} 
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:scale-[0.98] active:bg-slate-50 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0">
                   <Briefcase size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 text-[15px]">Businesses</span>
                    <ChevronRight size={14} className="text-slate-300" />
                  </div>
                  <p className="text-[12px] text-slate-500 leading-tight">Reach 500k+ local members.</p>
                </div>
              </button>
            </section>
          </div>

          <div className="p-6 border-t border-slate-100 bg-white space-y-5">
             <Button onClick={() => handleLinkClick('advertiser')} className="w-full h-14 text-base shadow-xl shadow-indigo-600/20 rounded-2xl justify-between px-7 active:scale-[0.97]">
                Find Local Groups
                <ArrowRight size={20} />
             </Button>
             <p className="text-center text-[10px] text-slate-400 font-medium tracking-tight">
               © {new Date().getFullYear()} RentMyGroup Inc.
             </p>
          </div>
        </div>
      )}
    </>
  );
};