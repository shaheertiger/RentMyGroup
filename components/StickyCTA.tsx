
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Role } from '../types';

interface StickyCTAProps {
  onOpenModal: (role: Role) => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onOpenModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Threshold of 600 ensures it doesn't appear on the very first screen
          setVisible(window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 xs:pb-8 md:pb-4 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-[100] md:hidden animate-slide-up will-change-transform">
       <div className="flex gap-3 max-w-sm mx-auto">
          <Button onClick={() => onOpenModal('admin')} variant="secondary" className="flex-1 text-[13px] xs:text-sm h-12 xs:h-14 bg-slate-50 border-slate-200 font-bold">
            I'm an Admin
          </Button>
          <Button onClick={() => onOpenModal('advertiser')} className="flex-1 text-[13px] xs:text-sm h-12 xs:h-14 bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 font-bold">
            Get Leads
          </Button>
       </div>
    </div>
  );
};
