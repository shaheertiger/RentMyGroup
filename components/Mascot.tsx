import React from 'react';

interface MascotProps {
  className?: string;
  pose?: 'neutral' | 'pointing' | 'holding-sign';
  size?: number;
}

export const LandlordFox: React.FC<MascotProps> = ({ className = '', pose = 'neutral', size = 200 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`} 
      style={{ width: size, height: size }}
      role="img"
      aria-label="RentMyGroup Mascot: Landlord Fox"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl animate-float"
        aria-hidden="true"
      >
        {/* Tail */}
        <path
          d="M160 140C180 120 190 90 180 70C170 50 140 60 130 80C120 100 130 130 160 140Z"
          fill="#F97316"
        />

        {/* Body / Suit */}
        <rect x="60" y="100" width="80" height="70" rx="20" fill="#1e1b4b" />
        <path d="M80 100L100 130L120 100" stroke="white" strokeWidth="4" strokeLinecap="round" />
        
        {/* Arms */}
        {pose === 'pointing' ? (
          <>
            <path d="M140 120C160 110 170 110 180 110" stroke="#F97316" strokeWidth="12" strokeLinecap="round" />
            <path d="M60 120C40 130 40 150 50 160" stroke="#F97316" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M140 120C155 130 155 150 145 160" stroke="#F97316" strokeWidth="12" strokeLinecap="round" />
            <path d="M60 120C45 130 45 150 55 160" stroke="#F97316" strokeWidth="12" strokeLinecap="round" />
          </>
        )}

        {/* Head */}
        <path d="M60 60L100 30L140 60L100 100L60 60Z" fill="#F97316" />
        
        {/* Snout */}
        <path d="M85 85L100 100L115 85" fill="white" />
        
        {/* Ears */}
        <path d="M65 45L55 20L80 40" fill="#F97316" />
        <path d="M135 45L145 20L120 40" fill="#F97316" />

        {/* Details */}
        <circle cx="100" cy="95" r="4" fill="#0F172A" />
        <circle cx="85" cy="65" r="3" fill="#0F172A" />
        <circle cx="115" cy="65" r="3" fill="#0F172A" />
        
        {/* Glasses */}
        <circle cx="85" cy="65" r="10" stroke="#0F172A" strokeWidth="2" opacity="0.3" />
        <circle cx="115" cy="65" r="10" stroke="#0F172A" strokeWidth="2" opacity="0.3" />
        <path d="M95 65H105" stroke="#0F172A" strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
};
