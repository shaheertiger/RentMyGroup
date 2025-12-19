
import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Loved by Locals</h2>
             <p className="text-slate-600">See what admins and businesses are saying about RentMyGroup.</p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex gap-1 text-orange-400 mb-4">
               {'★★★★★'}
             </div>
             <p className="text-slate-700 mb-6 leading-relaxed">"I run a group for moms in Mississauga. I used to reject spam posts all day. Now businesses pay me to be pinned at the top through RentMyGroup. It pays for my car lease!"</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full bg-cover" style={{backgroundImage: 'url(https://i.pravatar.cc/150?u=1)'}}></div>
               <div>
                 <div className="font-bold text-slate-900 text-sm">Sarah Jenkins</div>
                 <div className="text-slate-500 text-xs">Admin, Mississauga Moms</div>
               </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex gap-1 text-orange-400 mb-4">
               {'★★★★★'}
             </div>
             <p className="text-slate-700 mb-6 leading-relaxed">"We are a local HVAC company. The leads we get from RentMyGroup placements are way warmer than Google Ads. They know us because they see us every day."</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full bg-cover" style={{backgroundImage: 'url(https://i.pravatar.cc/150?u=2)'}}></div>
               <div>
                 <div className="font-bold text-slate-900 text-sm">Mike Ross</div>
                 <div className="text-slate-500 text-xs">Owner, Ross Heating</div>
               </div>
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hidden lg:block">
             <div className="flex gap-1 text-orange-400 mb-4">
               {'★★★★★'}
             </div>
             <p className="text-slate-700 mb-6 leading-relaxed">"RentMyGroup made it so easy to coordinate. I don't have to chase payments or design banners myself. It just works."</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-slate-200 rounded-full bg-cover" style={{backgroundImage: 'url(https://i.pravatar.cc/150?u=3)'}}></div>
               <div>
                 <div className="font-bold text-slate-900 text-sm">Emily Chen</div>
                 <div className="text-slate-500 text-xs">Admin, Toronto Foodies</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
