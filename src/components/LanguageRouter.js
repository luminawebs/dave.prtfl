import React, { useEffect, lazy } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const Personajes3DPage = lazy(() => import('../pages/Personajes3DPage'));
const LMSPricing = lazy(() => import('../pages/LMSPricing'));
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogPostPage = lazy(() => import('../pages/BlogPostPage'));
const PortfolioDetails = lazy(() => import('../components/PortfolioDetails'));
const ResourcesPage = lazy(() => import('../pages/ResourcesPage'));
const CoursesPage = lazy(() => import('../pages/CoursesPage'));
const ExperiencePage = lazy(() => import('../pages/ExperiencePage'));
const ComingSoonPage = lazy(() => import('../pages/ComingSoonPage'));
const XRAIProficiencyChallenge = lazy(() => import('../components/G-01-AIProficiency'));

const LanguageRouter = () => {
  const { lang } = useParams();
  const { switchLanguage } = useLanguage();

  // Validate language parameter
  const isValidLanguage = ['es', 'en', 'de'].includes(lang);

  useEffect(() => {
    if (isValidLanguage) {
      switchLanguage(lang);
    }
  }, [lang, switchLanguage, isValidLanguage]);

  // Redirect to default language if invalid
  if (!isValidLanguage) {
    return <Navigate to="/es/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personajes3d" element={<Personajes3DPage />} />
      <Route path="/lmspricing" element={<LMSPricing />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/portfolio/:slug" element={<PortfolioDetails />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="/ai-proficiency-challenge" element={<XRAIProficiencyChallenge />} />
    </Routes>
  );
};

export default LanguageRouter;

