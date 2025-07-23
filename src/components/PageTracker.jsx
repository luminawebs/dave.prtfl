import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/unifiedAnalytics';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    const pagePath = location.pathname;
    const pageTitle = document.title;
    
    // Add a small delay to ensure the page title is updated
    setTimeout(() => {
      trackPageView(pagePath, pageTitle);
    }, 100);
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTracker;

