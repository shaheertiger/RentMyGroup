
import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-display font-black text-slate-900 text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
        
        <div className="space-y-4 md:space-y-6">
          <div className="bg-slate-50/50 p-7 md:p-10 rounded-3xl border border-slate-100 group hover:border-indigo-100 transition-colors">
             <h3 className="font-black text-slate-900 mb-4 text-lg md:text-xl tracking-tight">How much does it cost?</h3>
             <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">Prices are set by the Group Admins based on their member count and engagement. It typically ranges from $100/mo to $1000/mo for premium groups. We provide fair pricing guidance to all partners.</p>
          </div>
          <div className="bg-slate-50/50 p-7 md:p-10 rounded-3xl border border-slate-100 group hover:border-indigo-100 transition-colors">
             <h3 className="font-black text-slate-900 mb-4 text-lg md:text-xl tracking-tight">How do WhatsApp placements work?</h3>
             <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">The admin "Pins" your sponsored message to the top of the group chat. This means it is the first thing users see when they open the group, and it stays persistent for the rental period (usually 24h or 1 week).</p>
          </div>
          <div className="bg-slate-50/50 p-7 md:p-10 rounded-3xl border border-slate-100 group hover:border-indigo-100 transition-colors">
             <h3 className="font-black text-slate-900 mb-4 text-lg md:text-xl tracking-tight">Is this allowed by platforms?</h3>
             <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">Yes. Admins own their communities. Renting cover photos (FB) or pinning messages (WhatsApp) are standard sponsorship practices, similar to an influencer doing a brand deal with their specific audience.</p>
          </div>
          <div className="bg-slate-50/50 p-7 md:p-10 rounded-3xl border border-slate-100 group hover:border-indigo-100 transition-colors">
             <h3 className="font-black text-slate-900 mb-4 text-lg md:text-xl tracking-tight">Do I need to design the ad?</h3>
             <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">For Facebook Covers, we provide high-converting templates. For WhatsApp, we help you write the perfect short copy. We also offer a full creative service for a small fee if you need bespoke graphics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
