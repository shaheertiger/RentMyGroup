
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Users, ArrowRight, ChevronRight, Briefcase, HelpCircle, BookOpen } from 'lucide-react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

interface NavbarProps {
  onOpenModal: (role: Role) => void;
  onNavigate: (path: string) => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onNavigate, currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/');
    setMobileMenuOpen(false);
  };

  const handleGuideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/guide');
    setMobileMenuOpen(false);
  };

  const handleNavToSection = (id: string) => {
    const isHome = currentPath === '/' || currentPath === '' || currentPath.includes('index.html');
    
    if (!isHome) {
      onNavigate('/');
      // Wait for route change to finish rendering home components
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const isGuideActive = currentPath.includes('/guide');

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>
        <div className="mx-auto max-w-5xl px-4">
          <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200/50' : 'bg-transparent border border-transparent'}`}>
            
            <div className="flex items-center gap-2 cursor-pointer group" onClick={handleLogoClick}>
              <div className="bg-indigo-600 rounded-lg p-1.5 shadow-indigo-500/20 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Users size={20} className="text-white" />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                RentMy<span className="text-indigo-600">Group</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => handleNavToSection('how-it-works')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all cursor-pointer">How it Works</button>
              <button 
                onClick={handleGuideClick} 
                className={`text-sm font-bold transition-all relative cursor-pointer ${isGuideActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Guide
                {isGuideActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"></span>}
              </button>
              <button onClick={() => onOpenModal('admin')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all cursor-pointer">Group Admins</button>
              <button onClick={() => onOpenModal('advertiser')} className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-all text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full cursor-pointer">Businesses</button>
            </div>

            <button 
              className="md:hidden text-slate-900 p-3 -mr-2 active:bg-slate-100 rounded-full transition-colors flex items-center justify-center cursor-pointer" 
              onClick={() => setMobileMenuOpen(true)} 
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm animate-fade-in md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] z-[120] bg-white shadow-2xl animate-slide-in-left md:hidden flex flex-col h-full border-r border-slate-100 overscroll-behavior-contain">
          <div className="p-6 flex items-center justify-between bg-slate-50/50 border-b border-slate-100">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleLogoClick}>
              <div className="bg-indigo-600 rounded-xl p-2 shadow-lg shadow-indigo-600/20">
                <Users size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                RentMy<span className="text-indigo-600">Group</span>
              </span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-3 -mr-2 text-slate-400 hover:text-slate-600 active:bg-slate-100 rounded-full cursor-pointer">
              <X size={26} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-5 space-y-6 no-scrollbar">
            <section className="space-y-3">
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 mb-1">Solutions</div>
              
              <button 
                onClick={() => handleNavToSection('how-it-works')} 
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:bg-slate-50 transition-all flex items-start gap-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0">
                   <HelpCircle size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900 text-[15px]">How it Works</span>
                    <ChevronRight size={14} className="text-slate-300" />
                  </div>
                  <p className="text-[12px] text-slate-500">Learn about our process.</p>
                </div>
              </button>

              <button 
                onClick={handleGuideClick} 
                className={`w-full text-left p-4 rounded-2xl border shadow-sm transition-all flex items-start gap-4 cursor-pointer ${isGuideActive ? 'bg-indigo-50 border-indigo-600 shadow-indigo-100' : 'bg-white border-slate-100'}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isGuideActive ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                   <BookOpen size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`font-bold text-[15px] ${isGuideActive ? 'text-indigo-600' : 'text-slate-900'}`}>Monetization Guide</span>
                    <ChevronRight size={14} className={isGuideActive ? 'text-indigo-400' : 'text-slate-300'} />
                  </div>
                  <p className="text-[12px] text-slate-500">The 2024 Blueprint.</p>
                </div>
              </button>

              <button 
                onClick={() => { onOpenModal('admin'); setMobileMenuOpen(false); }} 
                className="w-full text-left p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:bg-slate-50 transition-all flex items-start gap-4 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0">
                   <Users size={20} />
                </div>
                <div className="flex-1">
                  <span className="font-bold text-slate-900 text-[15px]">For Admins</span>
                  <p className="text-[12px] text-slate-500">Monetize your groups.</p>
                </div>
              </button>
            </section>
          </div>

          <div className="p-6 border-t border-slate-100 bg-white">
             <Button onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} className="w-full h-14 text-base shadow-xl shadow-indigo-600/20 rounded-2xl justify-between px-7 cursor-pointer">
                Find Groups
                <ArrowRight size={20} />
             </Button>
          </div>
        </div>
      )}
    </>
  );
};
