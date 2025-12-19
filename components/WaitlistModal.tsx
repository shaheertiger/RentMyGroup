
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, ArrowLeft, Loader2, TrendingUp, Sparkles, Mail, Shield } from 'lucide-react';
import { ModalState } from '../types';
import { Button } from './Button';

interface WaitlistModalProps extends ModalState {
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, role, onClose }) => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    platform: 'WhatsApp', 
    members: '1,000 - 5,000', 
    niche: '', 
    budget: '$100+'
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setStatus('idle');
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { 
      setStep(2); 
      return; 
    }
    
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/shaheertiger1@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Form Name": "RentMyGroup Waitlist",
          "User Role": role,
          "Name": formData.name,
          "Email": formData.email,
          "Platform": formData.platform,
          "Group Size": formData.members,
          "Niche": formData.niche,
          "Budget": formData.budget,
          "_subject": `New ${role === 'admin' ? 'Admin' : 'Advertiser'} Lead: ${formData.name}`,
          "_captcha": "false" 
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-fade-in" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-slide-up border border-slate-100 flex flex-col max-h-[95vh] xs:max-h-[90vh]">
        
        {/* Progress Bar */}
        {status !== 'success' && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
            <div 
              className="h-full bg-indigo-600 transition-all duration-500 ease-out" 
              style={{ width: `${(step / 2) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Header */}
        <div className="p-6 xs:p-8 pb-4 shrink-0">
          <div className="flex justify-between items-center mb-1">
             <h3 className="text-xl xs:text-2xl font-display font-extrabold text-slate-900 pr-4">
                {role === 'admin' ? 'Monetize Influence' : 'Unlock Traffic'}
             </h3>
             <button onClick={onClose} className="p-3 -mr-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors flex items-center justify-center min-w-[48px] min-h-[48px]">
                <X size={24} />
             </button>
          </div>
          <p className="text-slate-500 font-medium text-xs xs:text-sm">
            {status === 'success' ? 'Welcome to the network' : `Step ${step} of 2`}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 xs:px-8 pb-8 overflow-y-auto no-scrollbar">
          {status === 'success' ? (
             <div className="text-center py-6 animate-fade-in">
                <div className="w-20 h-20 xs:w-24 xs:h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100">
                   <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="text-2xl xs:text-3xl font-display font-black mb-3 text-slate-900 tracking-tight">You're in, {formData.name.split(' ')[0]}!</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm xs:text-base">
                  We've received your application. Our team will review your {role === 'admin' ? 'group' : 'business niche'} and reach out to <strong>{formData.email}</strong> shortly.
                </p>
                
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 xs:p-6 text-left mb-8 relative">
                  <div className="flex items-start gap-4">
                    <Sparkles size={20} className="text-indigo-600 shrink-0 mt-1" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">Priority Onboarding</p>
                      <p className="text-indigo-900 font-medium leading-relaxed text-xs xs:text-sm">
                        {role === 'admin' 
                          ? `We've flagged your ${formData.platform} group for immediate review by our brand partners.` 
                          : `Verified ${formData.niche} placements are in high demand.`}
                      </p>
                    </div>
                  </div>
                </div>

                <Button onClick={onClose} className="w-full h-14 xs:h-16 rounded-2xl text-base xs:text-lg font-bold">Close Window</Button>
             </div>
          ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <div className="space-y-6 animate-fade-in">
                    {role === 'admin' ? (
                       <div className="space-y-6">
                          <div>
                             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Primary Platform</label>
                             <div className="grid grid-cols-2 gap-3">
                                {['WhatsApp', 'Facebook'].map(p => (
                                   <button 
                                     key={p} 
                                     type="button" 
                                     onClick={() => setFormData({...formData, platform: p})} 
                                     className={`py-4 xs:py-5 rounded-2xl border-2 font-bold transition-all text-[14px] xs:text-[15px] touch-manipulation active:scale-[0.98] ${formData.platform === p ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                                   >
                                      {p}
                                   </button>
                                ))}
                             </div>
                          </div>
                          <div>
                             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Community Size</label>
                             <select 
                               name="members"
                               value={formData.members}
                               onChange={handleInputChange}
                               className="w-full h-14 xs:h-16 bg-slate-50 border border-slate-100 rounded-2xl px-5 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer appearance-none shadow-sm text-[16px]"
                             >
                                <option>100 - 1,000 members</option>
                                <option>1,000 - 5,000 members</option>
                                <option>5,000 - 25,000 members</option>
                                <option>25,000+ members</option>
                             </select>
                          </div>
                       </div>
                    ) : (
                       <div className="space-y-6">
                          <div>
                             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Target Industry / Niche</label>
                             <input 
                               type="text" 
                               name="niche"
                               value={formData.niche}
                               onChange={handleInputChange}
                               placeholder="e.g. Real Estate, SaaS" 
                               className="w-full h-14 xs:h-16 bg-slate-50 border border-slate-100 rounded-2xl px-5 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-300 shadow-sm text-[16px]" 
                               required 
                             />
                          </div>
                          <div>
                             <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Target Monthly Budget</label>
                             <div className="grid grid-cols-3 gap-2">
                                {['$100+', '$500+', '$2k+'].map(b => (
                                   <button 
                                     key={b} 
                                     type="button" 
                                     onClick={() => setFormData({...formData, budget: b})} 
                                     className={`py-4 rounded-2xl border-2 text-[13px] xs:text-[15px] font-bold transition-all touch-manipulation active:scale-[0.98] ${formData.budget === b ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                                   >
                                      {b}
                                   </button>
                                ))}
                             </div>
                          </div>
                       </div>
                    )}
                    <Button type="submit" className="w-full h-14 xs:h-16 rounded-2xl text-base xs:text-lg font-bold shadow-xl shadow-indigo-600/20">
                       Continue <ArrowRight size={20} />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6 animate-fade-in">
                     <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex gap-3 text-green-800 font-bold text-xs xs:text-sm shadow-sm items-center">
                        <TrendingUp size={18} className="shrink-0 text-green-600" />
                        Live Demand: {role === 'admin' ? '24 Campaigns' : '150+ Vetted Groups'}
                     </div>
                     <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Your Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe" 
                          className="w-full h-14 xs:h-16 bg-slate-50 border border-slate-100 rounded-2xl px-5 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm text-[16px]" 
                          required 
                        />
                     </div>
                     <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="jane@company.com" 
                            className="w-full h-14 xs:h-16 bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-5 font-bold text-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm text-[16px]" 
                            required 
                          />
                        </div>
                     </div>

                     {status === 'error' && (
                       <div className="bg-red-50 border border-red-100 p-4 rounded-2xl text-red-600 text-xs font-bold flex gap-2 items-center">
                         <Shield size={16} /> Something went wrong. Try again?
                       </div>
                     )}

                     <div className="flex gap-3 pt-4">
                        <button type="button" onClick={() => setStep(1)} className="w-14 xs:w-16 h-14 xs:h-16 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all border border-slate-100 touch-manipulation active:scale-[0.98]">
                           <ArrowLeft size={22} />
                        </button>
                        <Button type="submit" className="flex-1 h-14 xs:h-16 rounded-2xl text-base xs:text-lg font-bold shadow-2xl shadow-indigo-600/30" disabled={status === 'loading'}>
                           {status === 'loading' ? (
                             <div className="flex items-center gap-2">
                               <Loader2 className="animate-spin" size={18} />
                               <span>Secure My Spot</span>
                             </div>
                           ) : 'Secure My Spot'}
                        </Button>
                     </div>
                  </div>
                )}
             </form>
          )}
        </div>
      </div>
    </div>
  );
};
