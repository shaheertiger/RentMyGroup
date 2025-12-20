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

  // SEO management for non-guide pages
  useEffect(() => {
    if (currentPath === '/') {
      document.title = "RentMyGroup | #1 Marketplace to Monetize & Advertise in Local Groups";
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'The first marketplace to rent cover photos and pin messages in local communities. Monetize your Facebook and WhatsApp groups safely in 2026.');
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://rentmygroup.com/');
    }
  }, [currentPath]);

  // Ensure we always start at top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPath]);

  const navigate = (path: string) => {
    const cleanPath = path === '/' ? '/' : (path.startsWith('/') ? path : `/${path}`);
    if (window.location.pathname !== cleanPath) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(normalizePath(cleanPath));
      window.dispatchEvent(new Event('app-navigate'));
    }
  };

  const openModal = (role: Role) => {
    setModal({ isOpen: true, role });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  const isGuidePage = currentPath === '/guide';

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