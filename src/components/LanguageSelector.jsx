import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { trackButtonClick } from '../utils/analytics';

const LanguageSelector = ({ className = '', style = {} }) => {
  const { language, switchLanguage, getLocalizedPath } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLanguage) => {
    // Get current path without language prefix
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/';
    
    // Navigate to new language path
    const newPath = getLocalizedPath(pathWithoutLang, newLanguage);
    navigate(newPath);
    
    // Update language state
    switchLanguage(newLanguage);
    
    // Track the language switch
    trackButtonClick(`Language Switch - ${newLanguage}`, 'Language Selector');
  };

  return (
    <div className={`language-selector ${className}`} style={style}>
      <button 
        onClick={() => handleLanguageChange('es')}
        style={{
          background: 'none',
          border: 'none',
          textDecoration: 'none',
          color: language === 'es' ? '#e3a127' : '#6c757d',
          fontWeight: language === 'es' ? 'bold' : 'normal',
          fontSize: '14px',
          marginRight: '8px',
          cursor: 'pointer',
          padding: 0
        }}
        aria-label="Switch to Spanish"
      >
        esp
      </button>
      <span style={{ color: '#6c757d', fontSize: '14px' }}>|</span>
      <button 
        onClick={() => handleLanguageChange('en')}
        style={{
          background: 'none',
          border: 'none',
          textDecoration: 'none',
          color: language === 'en' ? '#e3a127' : '#6c757d',
          fontWeight: language === 'en' ? 'bold' : 'normal',
          fontSize: '14px',
          marginLeft: '8px',
          cursor: 'pointer',
          padding: 0
        }}
        aria-label="Switch to English"
      >
        eng
      </button>
    </div>
  );
};

export default LanguageSelector;

