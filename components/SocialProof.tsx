import React from 'react';
import { Building2, Home, Wrench, Utensils, CalendarDays, ShoppingBag } from 'lucide-react';

export const SocialProof: React.FC = () => {
  // Using icons + text to look more like real logos
  const brands = [
    { name: "ReMax Realty", icon: <Home size={20} /> },
    { name: "Downtown Dental", icon: <Building2 size={20} /> },
    { name: "ProHVAC Solutions", icon: <Wrench size={20} /> },
    { name: "Bistro 42", icon: <Utensils size={20} /> },
    { name: "City Events Co.", icon: <CalendarDays size={20} /> },
    { name: "Lakeshore Retail", icon: <ShoppingBag size={20} /> },
    // Duplicate for variety in the loop
    { name: "Century21", icon: <Home size={20} /> },
    { name: "Smile Clinic", icon: <Building2 size={20} /> },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-400 mb-10">
          Powering local connections for fast-growing brands
        </p>
        
        {/* Marquee Container with Gradient Masks */}
        <div className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          
          {/* Logo Set 1 */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none animate-infinite-scroll">
            {brands.map((brand, i) => (
              <li key={`set1-${i}`} className="flex items-center gap-2.5 text-slate-400 font-display font-bold text-lg grayscale hover:grayscale-0 hover:text-indigo-600 transition-all duration-300 cursor-default">
                {brand.icon}
                <span>{brand.name}</span>
              </li>
            ))}
          </ul>

          {/* Logo Set 2 (Duplicate for seamless loop) */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {brands.map((brand, i) => (
              <li key={`set2-${i}`} className="flex items-center gap-2.5 text-slate-400 font-display font-bold text-lg grayscale hover:grayscale-0 hover:text-indigo-600 transition-all duration-300 cursor-default">
                {brand.icon}
                <span>{brand.name}</span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </section>
  );
};