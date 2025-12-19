
import React, { useState, useEffect } from 'react';
import { User, X } from 'lucide-react';

const MESSAGES = [
  { name: "Sarah M.", text: "rented a Mom Group in Toronto", time: "2m ago" },
  { name: "Mike R.", text: "pinned a message in HVAC Pros", time: "5m ago" },
  { name: "Lakeshore Realty", text: "booked 3 WhatsApp groups", time: "Just now" },
  { name: "David K.", text: "earned $450 from his group", time: "1m ago" },
  { name: "Jenny L.", text: "joined the waitlist", time: "12s ago" },
];

export const FOMOToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial delay for first toast
    const initialTimer = setTimeout(() => setVisible(true), 3000);

    // Loop
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 500);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const msg = MESSAGES[messageIndex];

  return (
    <div 
      className={`fixed ${isStickyVisible ? 'bottom-24 xs:bottom-32' : 'bottom-4 xs:bottom-8'} left-4 xs:left-8 z-40 bg-white rounded-2xl shadow-2xl shadow-indigo-500/10 border border-slate-100 p-3.5 xs:p-4 pr-10 flex items-center gap-3 max-w-[280px] xs:max-w-[300px] animate-slide-up transition-all duration-500 transform md:hover:scale-105 cursor-pointer`}
      onClick={() => setVisible(false)}
    >
       <button onClick={(e) => { e.stopPropagation(); setVisible(false); }} className="absolute top-2.5 right-2.5 text-slate-300 hover:text-slate-500 p-1">
         <X size={14} />
       </button>
       
       <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
         <User size={18} />
       </div>
       
       <div className="min-w-0">
         <p className="text-xs xs:text-sm font-bold text-slate-900 truncate">{msg.name}</p>
         <p className="text-[11px] xs:text-xs text-slate-500 leading-tight">
           {msg.text} <span className="text-slate-300 whitespace-nowrap">• {msg.time}</span>
         </p>
       </div>
    </div>
  );
};
