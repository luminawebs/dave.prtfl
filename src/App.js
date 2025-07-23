// import logo from './logo.svg';
import './App.css';
import { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ConditionalLayout from './components/ConditionalLayout';
import PageTracker from './components/PageTracker';
import ErrorBoundary from './components/ErrorBoundary';
import useScrollTracking from './hooks/useScrollTracking';

import { initializeAutoTracking } from './utils/autoTracking';
import { initializeAnalytics } from './utils/unifiedAnalytics';
import LanguageRouter from './components/LanguageRouter';

// Loading component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// import ScrollComponent from "./components/ScrollComponent";

function App() {
// Initialize analytics
  useEffect(() => {
    initializeAnalytics();

    const preloader = document.getElementById('preloader');
    if (preloader) {
      // Add a small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }

    // Initialize automatic tracking for elements without React handlers
    initializeAutoTracking();
  }, []);

  // Initialize scroll tracking
  useScrollTracking();


  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <div className="App">
            <PageTracker />
            <ConditionalLayout>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path=":lang/*" element={<LanguageRouter />} />
                  <Route path="/" element={<Navigate to="/es/" replace />} />
                </Routes>
              </Suspense>
            </ConditionalLayout>

            {/* <!-- Preloader --> */}
            <div id="preloader"></div>

          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
