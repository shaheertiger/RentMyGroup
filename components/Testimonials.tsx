import React from 'react';
import { Star, CheckCircle, Quote, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  platform: 'facebook' | 'whatsapp' | 'general';
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, image, content, platform, rating, className = '' }) => {
  return (
    <div className={`group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 ${className}`}>
      <div className="absolute top-6 right-8 text-slate-100 group-hover:text-indigo-50 transition-colors">
        <Quote size={48} strokeWidth={3} />
      </div>
      
      <div className="relative z-10">
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "fill-orange-400 text-orange-400" : "text-slate-200"} 
            />
          ))}
        </div>

        <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
          "{content}"
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={image} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <CheckCircle size={14} className="text-indigo-600 fill-white" />
              </div>
            </div>
            <div>
              <div className="font-display font-black text-slate-900 text-[15px] flex items-center gap-1.5">
                {name}
              </div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{role}</div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            {platform === 'facebook' && (
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Facebook size={18} fill="currentColor" />
              </div>
            )}
            {platform === 'whatsapp' && (
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <MessageCircle size={18} fill="currentColor" />
              </div>
            )}
            <span className="text-[10px] font-black text-slate-300 uppercase mt-1 tracking-tighter">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const reviews: TestimonialCardProps[] = [
    {
      name: "Marcus Thorne",
      role: "Owner, Thorne Real Estate",
      image: "https://i.pravatar.cc/150?u=marcus",
      content: "We've tried Facebook Ads and Google, but nothing converts like a pinned message in the local 'Neighbors' group. RentMyGroup made it effortless to scale to 12 different zip codes.",
      platform: 'facebook',
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Admin, Silicon Valley Moms",
      image: "https://i.pravatar.cc/150?u=elena",
      content: "I manage a community of 45k parents. RentMyGroup helps me monetize without annoying my members. The sponsored content is always relevant and high-quality.",
      platform: 'whatsapp',
      rating: 5,
      className: "lg:translate-y-12"
    },
    {
      name: "David Chen",
      role: "Founder, City Eats",
      image: "https://i.pravatar.cc/150?u=david",
      content: "The ROI is incredible. We saw a 400% increase in weekend bookings just by sponsoring three local WhatsApp groups during our soft launch.",
      platform: 'whatsapp',
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Admin, Toronto Foodies",
      image: "https://i.pravatar.cc/150?u=sarahj",
      content: "I used to chase local businesses for payments manually. RentMyGroup handles all the Stripe payouts automatically. It's transformed my hobby into a business.",
      platform: 'facebook',
      rating: 5,
      className: "lg:translate-y-12"
    },
    {
      name: "Mike Ross",
      role: "Owner, Ross Plumbing",
      image: "https://i.pravatar.cc/150?u=mike",
      content: "People trust their group admins. When our ad is pinned at the top, it feels like a personal recommendation. Our phone doesn't stop ringing.",
      platform: 'general',
      rating: 5,
    },
    {
      name: "Chloe Vane",
      role: "Marketing Dir, Zen Yoga",
      image: "https://i.pravatar.cc/150?u=chloe",
      content: "The hyper-local targeting is exactly what we needed. We can focus all our budget on groups within 2 miles of our studio. Zero wasted spend.",
      platform: 'facebook',
      rating: 5,
      className: "lg:translate-y-12"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-[100px] -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Community Voices
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-[1.1]">
              Trusted by <span className="text-indigo-600">Locals</span> <br className="hidden md:block" /> Everywhere.
            </h2>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-2">
            <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
              ))}
            </div>
            <p className="text-sm font-bold text-slate-400">Join 12,000+ active users</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-12 lg:pb-24">
          {reviews.map((review, idx) => (
            <TestimonialCard key={idx} {...review} />
          ))}
        </div>

        <div className="mt-12 md:mt-20 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
              <ArrowUpRight size={120} />
           </div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-display font-black mb-4 tracking-tight">Ready to see your business here?</h3>
                <p className="text-slate-400 font-medium">Start reaching your neighbors today with high-trust local group advertising.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-center">
                    <div className="text-2xl font-black text-white">96%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Retention Rate</div>
                 </div>
                 <div className="bg-indigo-600 px-6 py-4 rounded-2xl shadow-lg shadow-indigo-600/20 text-center">
                    <div className="text-2xl font-black text-white">4.9/5</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-100">User Rating</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};