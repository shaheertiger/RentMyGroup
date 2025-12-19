
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'none';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  // Use 52px min-height for mobile-first accessibility (AAA standards)
  const baseStyle = "px-8 py-4 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] md:active:scale-95 select-none text-center whitespace-nowrap touch-manipulation min-h-[52px]";
  
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 active:shadow-inner",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm active:bg-slate-100",
    outline: "border-2 border-white/30 text-white hover:bg-white/10 active:bg-white/20",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 active:bg-slate-200",
    none: "" 
  };

  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
