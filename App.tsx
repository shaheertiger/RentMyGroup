import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Role, ModalState } from './types';

// Lazy loading below-the-fold sections to optimize mobile LCP and TTI
const SocialProof = lazy(() => import('./components/SocialProof').then(m => ({ default: m.SocialProof })));
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const Comparison = lazy(() => import('./components/Comparison').then(m => ({ default: m.Comparison })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));
const IncomeCalculator = lazy(() => import('./components/IncomeCalculator').then(m => ({ default: m.IncomeCalculator })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WaitlistModal = lazy(() => import('./components/WaitlistModal').then(m => ({ default: m.WaitlistModal })));
const FOMOToast = lazy(() => import('./components/FOMOToast').then(m => ({ default: m.FOMOToast })));
const StickyCTA = lazy(() => import('./components/StickyCTA').then(m => ({ default: m.StickyCTA })));

const SectionLoader = () => <div className="h-24 md:h-48 w-full animate-pulse bg-slate-50/50" />;

const App: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, role: 'advertiser' });

  const openModal = (role: Role) => {
    setModal({ isOpen: true, role });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenModal={openModal} />
      
      <main>
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
      </main>

      <Suspense fallback={null}>
        <Footer onOpenModal={openModal} />
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