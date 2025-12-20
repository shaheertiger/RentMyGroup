import React, { useState, useMemo, useEffect } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, DollarSign, ShieldCheck, Zap } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, icon }) => {
  return (
    <div className={`border-b border-slate-100 last:border-0 transition-all duration-300 ${isOpen ? 'bg-slate-50/50' : 'bg-transparent'}`}>
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 px-4 md:px-6 flex items-start gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <div className={`mt-1 p-2 rounded-xl transition-colors ${isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className={`text-lg md:text-xl font-display font-black tracking-tight transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900'}`}>
              {question}
            </h3>
            <ChevronDown 
              size={20} 
              className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} 
            />
          </div>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium pb-2">
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: <DollarSign size={20} />,
      question: "How can I monetize my Facebook group or WhatsApp community?",
      answer: "RentMyGroup connects community leaders with local businesses. You can monetize by renting out your Facebook cover photo or pinning sponsored messages in your WhatsApp group. Our platform handles all the logistics, creative approvals, and automated payouts via Stripe, so you can focus on managing your community."
    },
    {
      icon: <Zap size={20} />,
      question: "How much do local group ads and sponsorships cost?",
      answer: "Pricing is transparent and determined by the Group Admin based on member count, engagement rates, and niche. Typically, sponsorship rates range from $100 to $1,500 per month. We provide admins with fair-market pricing data to ensure businesses get high ROI while admins get paid fairly for their influence."
    },
    {
      icon: <MessageCircle size={20} />,
      question: "Is advertising in WhatsApp groups effective for small businesses?",
      answer: "Absolutely. Unlike traditional social media ads that users scroll past, a pinned message in a WhatsApp group triggers a notification and stays at the top of the conversation. Our advertisers report 5x higher engagement rates compared to Facebook feed ads because the recommendation comes from a trusted local environment."
    },
    {
      icon: <ShieldCheck size={20} />,
      question: "Is this ad network compliant with Facebook and WhatsApp terms?",
      answer: "Yes. Community leaders have full control over their groups. Renting cover photos or pinning relevant local messages is a form of direct sponsorship, similar to influencer marketing. RentMyGroup acts as the secure marketplace to facilitate these direct brand-to-admin relationships."
    },
    {
      icon: <HelpCircle size={20} />,
      question: "Do I need professional design skills to start advertising?",
      answer: "Not at all. For Facebook cover ads, we provide proven high-conversion templates. For WhatsApp and Telegram, we offer copywriting assistance to ensure your message fits the community's tone. We also have an optional 'Full-Service Creative' add-on if you want our team to build your banners for you."
    },
    {
      icon: <Zap size={20} />,
      question: "How long does it take for my ad to go live?",
      answer: "Most ads go live within 24-48 hours. Once you select your target groups and upload your creative, the admin reviews the content to ensure it's a good fit for their neighbors. Once approved, the placement is scheduled automatically."
    }
  ];

  // SEO: Structured Data for Rich Results
  const jsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [jsonLd]);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-black uppercase tracking-widest mb-6">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Everything you need <br className="hidden md:block" /> to <span className="text-indigo-600">know.</span>
          </h2>
        </div>
        
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              icon={faq.icon}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium mb-4">Still have questions about monetizing or advertising?</p>
          <a 
            href="mailto:support@rentmygroup.com" 
            className="text-indigo-600 font-black hover:text-indigo-700 underline underline-offset-4"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};