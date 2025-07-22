import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';
import { trackButtonClick } from '../utils/analytics';

const ConditionalLayout = ({ children }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Routes that should use minimalist layout (no regular header/footer)
  const minimalistRoutes = [
    '/ai-proficiency-challenge',
    '/coming-soon'
  ];
  
  // Check if current route should use minimalist layout
  const isMinimalistRoute = minimalistRoutes.some(route => 
    location.pathname.startsWith(route)
  );
  
  return (
    <>
      {/* Only render regular header for non-minimalist routes */}
      {!isMinimalistRoute && (
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
              <h1 className="sitename">David Castañeda
                {/* <img 
                  src="assets/img/edunest-dark.svg" 
                  alt="" 
                  style={{ 
                    marginTop: "4px",
                    width: windowWidth <= 1200 ? "120px" : "180px",
                    transition: "width 0.3s ease"
                  }} 
                /> */}
              </h1>
            </a>
            
            <Menu />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <LanguageSelector />
              
              <a
                className="btn-getstarted"
                href="#contact"
                onClick={() => trackButtonClick('Header Contact Button', 'Navigation')}
              >
                {t('header.contact')}
              </a>
            </div>
          </div>
        </header>
      )}
      
      {children}
      
      {/* Only render regular footer and scroll-to-top for non-minimalist routes */}
      {!isMinimalistRoute && (
        <>
          <Footer />
          {/* Scroll Top */}
          <a
            href="#header"
            id="scroll-top"
            className="scroll-top d-flex align-items-center justify-content-center"
            onClick={() => trackButtonClick('Scroll to Top', 'Navigation')}
          >
            <i className="bi bi-arrow-up-short"></i>
          </a>
        </>
      )}
    </>
  );
};

export default ConditionalLayout;

