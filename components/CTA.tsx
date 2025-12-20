
import React from 'react';
import { Button } from './Button.tsx';
import { Role } from '../types.ts';

interface CTAProps {
  onOpenModal: (role: Role) => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 md:py-24 bg-white px-4 md:px-6">
       <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-24 text-center text-white relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to own the neighbourhood?</h2>
             <p className="text-indigo-100 text-base md:text-lg mb-10 max-w-2xl mx-auto">Join thousands of smart businesses and admins who are capitalizing on the most undervalued asset in social media.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={() => onOpenModal('advertiser')} 
                  variant="secondary" 
                  className="h-16 px-10 text-lg"
                >
                  Find Your Audience
                </Button>
                <Button 
                  onClick={() => onOpenModal('admin')} 
                  variant="outline" 
                  className="h-16 px-10 text-lg"
                >
                  I'm a Group Admin
                </Button>
             </div>
          </div>
       </div>
    </section>
  );
};
