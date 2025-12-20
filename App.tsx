import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Role, ModalState } from './types.ts';

// Lazy loading views
const SocialProof = lazy(() => import('./components/SocialProof.tsx').then(m => ({ default: m.SocialProof })));
const Features = lazy(() => import('./components/Features.tsx').then(m => ({ default: m.Features })));
const Comparison = lazy(() => import('./components/Comparison.tsx').then(m => ({ default: m.Comparison })));
const HowItWorks = lazy(() => import('./components/HowItWorks.tsx').then(m => ({ default: m.HowItWorks })));
const MonetizationGuide = lazy(() => import('./components/MonetizationGuide.tsx').then(m => ({ default: m.MonetizationGuide })));
const IncomeCalculator = lazy(() => import('./components/IncomeCalculator.tsx').then(m => ({ default: m.IncomeCalculator })));
const Testimonials = lazy(() => import('./components/Testimonials.tsx').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ.tsx').then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import('./components/CTA.tsx').then(m => ({ default: m.CTA })));
const Footer = lazy(() => import('./components/Footer.tsx').then(m => ({ default: m.Footer })));
const WaitlistModal = lazy(() => import('./components/WaitlistModal.tsx').then(m => ({ default: m.WaitlistModal })));
const FOMOToast = lazy(() => import('./components/FOMOToast.tsx').then(m => ({ default: m.FOMOToast })));
const StickyCTA = lazy(() => import('./components/StickyCTA.tsx').then(m => ({ default: m.StickyCTA })));

const SectionLoader = () => (
  <div className="min-h-[400px] w-full flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Helper to normalize paths for comparison
const normalizePath = (path: string) => {
  if (!path) return '/';
  let p = path.toLowerCase().split(/[?#]/)[0]; // Remove query strings/hashes
  p = p.replace(/\/index\.html$/, '').replace(/\/+$/, '');
  return p === '' ? '/' : p;
};

const App: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, role: 'advertiser' });
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname));

  const GUIDE_PATH = '/how-to-make-money-from-facebook-groups-2026';

  // Sync state with browser history (back/forward buttons)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('app-navigate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('app-navigate', handleLocationChange);
    };
  }, []);

  // Advanced SEO and Social Preview management for dynamic route changes
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    const canonicalLink = document.getElementById('canonical-link');
    
    // Social Preview Elements
    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-desc');
    const ogImage = document.getElementById('og-image');
    const ogImageSecure = document.getElementById('og-image-secure');
    const twitterTitle = document.getElementById('twitter-title');
    const twitterDesc = document.getElementById('twitter-desc');
    const twitterImage = document.getElementById('twitter-image');

    const origin = window.location.origin;
    const defaultImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=630&q=80";

    if (currentPath === GUIDE_PATH) {
      const title = "How to Make Money From Facebook Groups in 2026 (Without Killing Trust)";
      const desc = "Discover the ultimate blueprint for monetizing Facebook groups in 2026. Learn 6 proven methods to earn passive income while maintaining community trust.";
      
      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${GUIDE_PATH}`);
      
      // Update Social Preview Tags
      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      
      // Ensure we use absolute URLs for images
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else {
      const title = "RentMyGroup | #1 Marketplace to Monetize & Advertise in Local Groups";
      const desc = "RentMyGroup is the first marketplace for community monetization. Rent cover photos, pin messages, and earn passive income from Facebook and WhatsApp groups safely in 2026.";
      
      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}/`);
      
      // Update Social Preview Tags
      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);

      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    }
  }, [currentPath]);

  // Ensure we always start at top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  const navigate = (path: string) => {
    const cleanPath = path || '/';
    const normalized = normalizePath(cleanPath);
    
    window.history.pushState({}, '', normalized);
    setCurrentPath(normalized);
    window.dispatchEvent(new Event('app-navigate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (role: Role) => {
    setModal({ isOpen: true, role });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  const isGuidePage = currentPath === GUIDE_PATH;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-500 selection:text-white relative">
      <Navbar onOpenModal={openModal} onNavigate={navigate} currentPath={currentPath} />
      
      <main className="transition-opacity duration-300 relative z-0">
        {!isGuidePage ? (
          <div className="animate-fade-in">
            <Hero onOpenModal={openModal} />
            <Suspense fallback={<SectionLoader />}>
              <SocialProof />
              <Comparison />
              <Features />
              <HowItWorks />
              <IncomeCalculator onOpenModal={openModal} />
              <Testimonials />
              <FAQ />
              <CTA onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : (
          <div className="animate-fade-in">
            <Suspense fallback={<div className="min-h-screen pt-40 text-center font-display font-black text-slate-400 text-xl">Loading Blueprint...</div>}>
              <MonetizationGuide onOpenModal={openModal} />
            </Suspense>
          </div>
        )}
      </main>

      <Suspense fallback={null}>
        <Footer onOpenModal={openModal} onNavigate={navigate} />
        <WaitlistModal 
          isOpen={modal.isOpen}
          role={modal.role}
          onClose={closeModal}
        />
        <FOMOToast />
        <StickyCTA onOpenModal={openModal} />
      </Suspense>
    </div>
  );
};

export default App;