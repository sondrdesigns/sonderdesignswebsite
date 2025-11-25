import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Lazy load route components for code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(module => ({ default: module.PortfolioPage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(module => ({ default: module.TeamPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-foreground/40">Loading...</div>
  </div>
);

// Component to load analytics after page is interactive
function DeferredAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Wait for page to be interactive before loading analytics
    const loadAnalytics = () => {
      if (document.readyState === 'complete') {
        // Use requestIdleCallback if available, else setTimeout
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
        } else {
          setTimeout(() => setShouldLoad(true), 2000);
        }
      } else {
        window.addEventListener('load', () => {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
          } else {
            setTimeout(() => setShouldLoad(true), 2000);
          }
        });
      }
    };

    loadAnalytics();
  }, []);

  if (!shouldLoad) return null;

  // Dynamically import analytics components
  const Analytics = lazy(() => import('@vercel/analytics/react').then(m => ({ default: m.Analytics })));
  const SpeedInsights = lazy(() => import('@vercel/speed-insights/react').then(m => ({ default: m.SpeedInsights })));

  return (
    <Suspense fallback={null}>
      <Analytics />
      <SpeedInsights />
    </Suspense>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<PortfolioPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
      <DeferredAnalytics />
    </Router>
  );
}