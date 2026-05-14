import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Role, ModalState } from './types.ts';
import { getBlogPost } from './blog/posts.ts';

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
const FacebookGroupAdvertising = lazy(() => import('./components/FacebookGroupAdvertising.tsx').then(m => ({ default: m.FacebookGroupAdvertising })));
const WhatsAppGroupAdvertising = lazy(() => import('./components/WhatsAppGroupAdvertising.tsx').then(m => ({ default: m.WhatsAppGroupAdvertising })));
const MonetizeFacebookGroup = lazy(() => import('./components/MonetizeFacebookGroup.tsx').then(m => ({ default: m.MonetizeFacebookGroup })));
const MonetizeWhatsAppGroup = lazy(() => import('./components/MonetizeWhatsAppGroup.tsx').then(m => ({ default: m.MonetizeWhatsAppGroup })));
const GroupAdvertisingMarketplace = lazy(() => import('./components/GroupAdvertisingMarketplace.tsx').then(m => ({ default: m.GroupAdvertisingMarketplace })));
const AdvertiseInOnlineCommunities = lazy(() => import('./components/AdvertiseInOnlineCommunities.tsx').then(m => ({ default: m.AdvertiseInOnlineCommunities })));
const BlogIndex = lazy(() => import('./components/BlogIndex.tsx').then(m => ({ default: m.BlogIndex })));
const BlogPost = lazy(() => import('./components/BlogPost.tsx').then(m => ({ default: m.BlogPost })));

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
  const FB_ADS_PATH = '/facebook-group-advertising';
  const WA_ADS_PATH = '/whatsapp-group-advertising';
  const MONETIZE_FB_PATH = '/monetize-facebook-group';
  const MONETIZE_WA_PATH = '/monetize-whatsapp-group';
  const MARKETPLACE_PATH = '/group-advertising-marketplace';
  const COMMUNITIES_PATH = '/advertise-in-online-communities';

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
    // New curated professional scene representing high-scale community growth
    const defaultImage = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&h=630&q=80";

    if (currentPath === GUIDE_PATH) {
      const title = "How to Make Money From Facebook Groups in 2026 (Without Killing Trust)";
      const desc = "Discover the ultimate blueprint for monetizing Facebook groups in 2026. Learn 6 proven methods to earn passive income while maintaining community trust.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${GUIDE_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (currentPath === FB_ADS_PATH) {
      const title = "Facebook Group Advertising: Reach Niche Audiences | Rent My Group";
      const desc = "Advertise inside active Facebook groups through admin-approved promotions. Rent My Group connects businesses with niche group owners for community ad placements that beat the algorithm.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${FB_ADS_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (currentPath === WA_ADS_PATH) {
      const title = "WhatsApp Group Advertising: Place Approved Promotions | Rent My Group";
      const desc = "Rent My Group helps advertisers place approved promotions inside relevant WhatsApp groups through group owners and admins. Reach niche, high-engagement WhatsApp communities.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${WA_ADS_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (currentPath === MONETIZE_FB_PATH) {
      const title = "Monetize Your Facebook Group: Earn From Sponsorships | Rent My Group";
      const desc = "Make money from your Facebook group by listing it on Rent My Group. Accept sponsored posts from relevant advertisers, set your own rates, and get paid within 7 days. Free to list.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${MONETIZE_FB_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (currentPath === MONETIZE_WA_PATH) {
      const title = "Monetize Your WhatsApp Group: Earn From Sponsorships | Rent My Group";
      const desc = "Make money from your WhatsApp group by approving sponsored promotions from relevant advertisers. List for free on Rent My Group and earn passive income from your community.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${MONETIZE_WA_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (currentPath === MARKETPLACE_PATH) {
      const title = "Group Advertising Marketplace: Buy & Sell Group Ad Space | Rent My Group";
      const desc = "Rent My Group is the group advertising marketplace where advertisers buy niche community ad space and group owners sell sponsored posts. Facebook, WhatsApp, Telegram, and online groups.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${MARKETPLACE_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (currentPath === COMMUNITIES_PATH) {
      const title = "Advertise in Online Communities: Niche Community Advertising | Rent My Group";
      const desc = "Reach people inside communities they already trust. Community advertising outperforms Facebook Ads, Google Ads, and influencer marketing with higher trust, guaranteed reach, and no algorithm dependency.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}${COMMUNITIES_PATH}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (isBlogIndex) {
      const title = "Blog: Group Monetization & Community Advertising | Rent My Group";
      const desc = "Strategies, pricing guides, and tools for Facebook and WhatsApp group owners. Learn how to earn from sponsorships and reach niche audiences through community advertising.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}/blog`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else if (isBlogPost && blogSlug) {
      const post = getBlogPost(blogSlug);
      const title = post?.metaTitle ?? "Blog | Rent My Group";
      const desc = post?.metaDescription ?? "Read the latest guides and strategies for group owners and advertisers on Rent My Group.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}/blog/${blogSlug}`);

      ogTitle?.setAttribute('content', title);
      ogDesc?.setAttribute('content', desc);
      twitterTitle?.setAttribute('content', title);
      twitterDesc?.setAttribute('content', desc);
      ogImage?.setAttribute('content', defaultImage);
      ogImageSecure?.setAttribute('content', defaultImage);
      twitterImage?.setAttribute('content', defaultImage);
    } else {
      const title = "Rent Ad Space in Facebook & WhatsApp Groups | Rent My Group";
      const desc = "Rent My Group connects advertisers with Facebook, WhatsApp, Telegram, and online group owners. Buy or sell ad space in niche communities and reach active audiences.";

      document.title = title;
      metaDesc?.setAttribute('content', desc);
      canonicalLink?.setAttribute('href', `${origin}/`);

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
  const isFbAdsPage = currentPath === FB_ADS_PATH;
  const isWaAdsPage = currentPath === WA_ADS_PATH;
  const isMonetizeFbPage = currentPath === MONETIZE_FB_PATH;
  const isMonetizeWaPage = currentPath === MONETIZE_WA_PATH;
  const isMarketplacePage = currentPath === MARKETPLACE_PATH;
  const isCommunitiesPage = currentPath === COMMUNITIES_PATH;
  const isBlogIndex = currentPath === '/blog';
  const isBlogPost = currentPath.startsWith('/blog/') && currentPath.length > 6;
  const blogSlug = isBlogPost ? currentPath.replace('/blog/', '') : '';

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-500 selection:text-white relative">
      <Navbar onOpenModal={openModal} onNavigate={navigate} currentPath={currentPath} />
      
      <main className="transition-opacity duration-300 relative z-0">
        {isFbAdsPage ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <FacebookGroupAdvertising onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : isWaAdsPage ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <WhatsAppGroupAdvertising onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : isMonetizeFbPage ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <MonetizeFacebookGroup onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : isMonetizeWaPage ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <MonetizeWhatsAppGroup onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : isMarketplacePage ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <GroupAdvertisingMarketplace onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : isCommunitiesPage ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <AdvertiseInOnlineCommunities onOpenModal={openModal} />
            </Suspense>
          </div>
        ) : isBlogIndex ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <BlogIndex onOpenModal={openModal} onNavigate={navigate} />
            </Suspense>
          </div>
        ) : isBlogPost ? (
          <div className="animate-fade-in">
            <Suspense fallback={<SectionLoader />}>
              <BlogPost slug={blogSlug} onOpenModal={openModal} onNavigate={navigate} />
            </Suspense>
          </div>
        ) : !isGuidePage ? (
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
      <Analytics />
    </div>
  );
};

export default App;