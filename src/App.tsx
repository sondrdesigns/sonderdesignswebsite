import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}