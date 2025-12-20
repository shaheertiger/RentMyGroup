import React, { memo } from 'react';
import { 
  Search, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Users, 
  Plus, 
  Mic, 
  Camera, 
  CheckCheck, 
  Sticker,
  Video,
  Phone,
  Globe,
  Bell,
  ChevronLeft
} from 'lucide-react';

const PhoneFrame = ({ children, time = "9:41" }: { children?: React.ReactNode, time?: string }) => (
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[350px] h-[580px] xs:h-[650px] md:h-[700px] bg-[#0A0A0A] rounded-[48px] xs:rounded-[56px] p-[8px] xs:p-[10px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),0_15px_40px_-15px_rgba(0,0,0,0.3)] ring-1 ring-white/10 select-none overflow-hidden transition-all duration-700 border border-white/5 box-content will-change-transform">
    <div className="relative h-full w-full bg-white rounded-[40px] xs:rounded-[46px] overflow-hidden flex flex-col font-sans isolate shadow-inner">
      {/* Top Bar / Status */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-12 z-[60] flex items-center justify-between px-8 pointer-events-none text-black">
        <span className="text-[12px] xs:text-[13px] md:text-[14px] font-bold tracking-tight">{time}</span>
        <div className="flex gap-1.5 items-center">
             <div className="flex gap-0.5 items-end h-2.5 xs:h-3">
                <div className="w-[1.5px] h-[30%] bg-current rounded-full"></div>
                <div className="w-[1.5px] h-[50%] bg-current rounded-full"></div>
                <div className="w-[1.5px] h-[70%] bg-current rounded-full"></div>
                <div className="w-[1.5px] h-full bg-current rounded-full"></div>
             </div>
             <div className="h-2.5 xs:h-3 w-4 xs:w-5 border border-current/30 rounded-[3px] relative flex items-center p-[1px]">
                <div className="bg-current rounded-[0.5px] h-full w-[80%]"></div>
             </div>
        </div>
      </div>
      
      {/* Dynamic Island / Notch */}
      <div className="absolute top-[8px] md:top-[12px] left-1/2 -translate-x-1/2 w-[70px] xs:w-[85px] md:w-[100px] h-[22px] xs:h-[26px] md:h-[30px] bg-black rounded-full z-[80] pointer-events-none shadow-lg ring-1 ring-white/5"></div>
      
      {/* Main Content Area - Strictly Clipped */}
      <div className="flex-1 flex flex-col overflow-hidden rounded-[40px] xs:rounded-[46px] bg-white">
        {children}
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 xs:w-28 h-1 bg-black/10 rounded-full z-50 pointer-events-none"></div>
    </div>
  </div>
);

export const MockupFacebookGroup = memo(() => (
  <PhoneFrame>
    <div className="h-[75px] xs:h-[85px] bg-white z-40 sticky top-0 flex items-end pb-3 px-4 shadow-sm border-b border-slate-100">
      <div className="flex items-center justify-between w-full pt-6 xs:pt-0">
        <div className="flex items-center gap-2 xs:gap-3">
          <ChevronLeft size={20} className="text-slate-900" />
          <span className="font-bold text-[15px] xs:text-[17px] text-slate-900">Group</span>
        </div>
        <div className="flex gap-3 xs:gap-4 text-slate-600">
           <Search size={20} />
           <Share2 size={20} />
        </div>
      </div>
    </div>
    <div className="flex-1 overflow-y-auto pb-12 bg-[#F0F2F5] no-scrollbar">
      <div className="bg-white">
        <div className="relative w-full aspect-[2/1] overflow-hidden bg-slate-200">
             <img 
               src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
               alt="Group Header"
               loading="lazy"
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
             <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-xl text-[9px] xs:text-[10px] font-black px-2.5 py-1.5 rounded-full text-white tracking-widest uppercase border border-white/20 shadow-xl">
                Header Ad
             </div>
        </div>
        <div className="px-4 py-4 xs:py-5">
            <h1 className="text-[19px] xs:text-[22px] font-extrabold text-slate-900 tracking-tight leading-tight mb-1.5 xs:mb-2">Liberty Village Community</h1>
            <div className="flex items-center gap-2 mb-4">
               <div className="flex items-center gap-1.5 text-[12px] xs:text-[13px] text-slate-500 font-medium">
                  <Globe size={12} className="opacity-60" /> Public Group • 18.5K members
               </div>
            </div>
            <div className="flex gap-2 xs:gap-3">
                <button className="bg-[#1B74E4] text-white flex-1 py-2 xs:py-2.5 rounded-lg text-[13px] xs:text-[14px] font-bold flex items-center justify-center gap-2">
                   <Users size={14} fill="white" /> Joined
                </button>
                <button className="bg-[#E4E6EB] text-slate-900 flex-1 py-2 xs:py-2.5 rounded-lg text-[13px] xs:text-[14px] font-bold">
                   Invite
                </button>
            </div>
        </div>
      </div>
      <div className="mt-2 bg-white p-4 shadow-sm border-t border-slate-100">
           <div className="flex items-center justify-between mb-3 xs:mb-4">
              <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80" 
                    alt="Sarah" 
                    className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-slate-200 border border-slate-100 object-cover" 
                  />
                  <div>
                      <span className="text-[13px] xs:text-[14px] font-bold text-slate-900">Sarah Jenkins</span>
                      <div className="flex items-center gap-1 text-[11px] xs:text-[12px] text-slate-500">
                         <span className="font-bold text-[#1B74E4]">Admin</span> • 2h • <Globe size={10} />
                      </div>
                  </div>
              </div>
              <MoreHorizontal size={18} className="text-slate-400" />
          </div>
          <p className="text-[14px] xs:text-[15px] text-slate-800 leading-relaxed mb-3 xs:mb-4">
              Huge welcome to our neighborhood's newest local sponsor! Supporting local businesses keeps our community strong. 🏘️
          </p>
          <div className="flex pt-1 text-slate-600 font-bold text-[12px] xs:text-[13px]">
              <div className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg"><ThumbsUp size={16} /> Like</div>
              <div className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-slate-50 rounded-lg"><MessageCircle size={16} /> Comment</div>
          </div>
      </div>
    </div>
  </PhoneFrame>
));

export const MockupWhatsappGroup = memo(() => (
  <PhoneFrame>
      <div className="h-[85px] xs:h-[95px] bg-white/95 backdrop-blur-xl z-40 sticky top-0 border-b border-black/5 flex flex-col justify-end pb-3 px-3">
           <div className="flex items-center justify-between w-full pt-4 xs:pt-0">
               <div className="flex items-center text-[#007AFF] gap-0 -ml-1">
                  <ChevronLeft size={28} />
                  <span className="text-[16px] xs:text-[17px] -ml-1 font-medium">Chats</span>
               </div>
               <div className="flex flex-col items-center flex-1 pr-3">
                   <span className="text-[14px] xs:text-[16px] font-bold text-black tracking-tight truncate w-24 xs:w-32 text-center">Liberty Residents</span>
                   <span className="text-[10px] xs:text-[11px] text-slate-400 font-medium tracking-tight">group info</span>
               </div>
               <div className="flex items-center gap-4 xs:gap-5 text-[#007AFF]">
                  <Video size={20} strokeWidth={1.5} />
                  <Phone size={18} strokeWidth={1.5} />
               </div>
           </div>
      </div>
      <div className="sticky top-0 z-30 px-3 py-2 xs:py-2.5">
          <div className="flex items-center gap-3 xs:gap-4 bg-white/95 backdrop-blur-2xl p-2.5 xs:p-3 rounded-xl xs:rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-200/50">
              <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-lg xs:rounded-xl bg-[#E7FFDB] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                  <Bell size={16} className="text-[#075E54]" fill="currentColor" />
              </div>
              <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                     <span className="text-[8px] xs:text-[10px] font-black text-[#075E54] uppercase tracking-widest bg-[#E7FFDB] px-1 xs:px-1.5 py-0.5 rounded-md">Ad Placement</span>
                     <span className="text-[9px] xs:text-[10px] font-bold text-slate-300 italic tracking-tight">Sponsor</span>
                  </div>
                  <p className="text-[12px] xs:text-[14px] font-bold text-slate-800 truncate leading-none pt-0.5">Exclusive: 50% Off Resident Gym Memberships!</p>
              </div>
          </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-[#E5DDD5] relative px-3 xs:px-4 pt-4 xs:pt-5 pb-24 no-scrollbar">
           <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
                style={{
                    backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
                    backgroundSize: "320px"
                }}>
           </div>
           <div className="space-y-3 xs:space-y-4 relative z-10">
                <div className="flex flex-col items-start max-w-[88%]">
                    <div className="bg-white rounded-xl xs:rounded-2xl rounded-tl-sm py-2 px-3 xs:px-3.5 shadow-md border border-black/5">
                        <span className="text-[11px] xs:text-[12px] font-bold text-[#E542A3] block mb-0.5 tracking-tight">Admin</span>
                        <p className="text-[14px] xs:text-[15px] text-slate-900 leading-[1.35]">Hey everyone! Just pinned a new local discount for our residents at the top. Check it out!</p>
                        <div className="flex justify-end mt-1">
                           <span className="text-[9px] xs:text-[10px] text-slate-400 font-medium">9:41 AM</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end self-end max-w-[88%] ml-auto">
                    <div className="bg-[#DCF8C6] rounded-xl xs:rounded-2xl rounded-tr-sm py-2 px-3 xs:px-3.5 shadow-md border border-black/5">
                        <p className="text-[14px] xs:text-[15px] text-slate-900 leading-[1.35]">Perfect! I was literally just looking for a new gym. 🙌</p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                           <span className="text-[9px] xs:text-[10px] text-slate-500 font-medium">9:42 AM</span>
                           <CheckCheck size={12} className="text-[#34B7F1]"/>
                        </div>
                    </div>
                </div>
           </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6]/95 backdrop-blur-2xl px-3 xs:px-4 pt-2.5 pb-8 border-t border-slate-200 flex items-center gap-2.5 xs:gap-3.5 z-50">
          <Plus size={24} className="text-[#007AFF]" />
          <div className="flex-1 bg-white rounded-full border border-slate-200 px-4 xs:px-5 py-1.5 xs:py-2 flex items-center justify-between shadow-sm">
              <span className="text-slate-300 text-[14px] xs:text-[16px]">Message</span>
              <Sticker size={18} className="text-slate-400" />
          </div>
          <Camera size={22} className="text-[#007AFF]" />
          <Mic size={22} className="text-[#007AFF]" />
      </div>
  </PhoneFrame>
));