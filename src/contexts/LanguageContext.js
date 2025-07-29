import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Extract language from URL if available
    const path = window.location.pathname;
    const urlLang = path.split('/')[1];
    if (['es', 'en'].includes(urlLang)) {
      return urlLang;
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('edunest-language');
    if (savedLanguage) {
      return savedLanguage;
    }

    // Check browser language
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.startsWith('es')) {
      return 'es';
    }

    // Default to Spanish
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('edunest-language', language);
    document.documentElement.lang = language;
  }, [language]);

  // GeoIP-based language detection (only on first visit)
  useEffect(() => {
    const savedLanguage = localStorage.getItem('edunest-language');
    if (savedLanguage) return; // user already has preference

    // Fetch geolocation info from free ipapi.co (1k req/day free)
    fetch('https://ipapi.co/json/')
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (!data) return;
        const country = data.country_code;
        // Simple mapping: common English-speaking countries → 'en', rest → 'es'
        const englishCountries = [
          // Native English-speaking countries
          'US', // United States
          'GB', // United Kingdom
          'CA', // Canada
          'AU', // Australia
          'NZ', // New Zealand
          'IE', // Ireland

          // Official or co-official English-speaking countries (but not native majority)
          'IN', // India
          'PK', // Pakistan
          'NG', // Nigeria
          'PH', // Philippines
          'SG', // Singapore
          'ZA', // South Africa
          'KE', // Kenya
          'UG', // Uganda
          'GH', // Ghana
          'TZ', // Tanzania
          'ZM', // Zambia
          'ZW', // Zimbabwe
          'MY', // Malaysia
          'BW', // Botswana
          'NA', // Namibia
          'CM', // Cameroon
          'SL', // Sierra Leone
          'LR', // Liberia

          // Strong English education/usage or expat presence
          'FR', // France
          'DE', // Germany
          'NL', // Netherlands
          'SE', // Sweden
          'NO', // Norway
          'DK', // Denmark
          'FI', // Finland
          'CH', // Switzerland
          'BE', // Belgium
          'AT', // Austria
          'PL', // Poland
          'HU', // Hungary
          'CZ', // Czech Republic
          'SK', // Slovakia
          'RO', // Romania
          'BG', // Bulgaria

          // Asia-Pacific with strong English influence
          'HK', // Hong Kong
          'CN', // China
          'JP', // Japan
          'KR', // South Korea
          'TH', // Thailand
          'VN', // Vietnam
          'ID', // Indonesia
          'BD', // Bangladesh
          'LK', // Sri Lanka

          // Middle East & Gulf countries with widespread English use
          'AE', // United Arab Emirates
          'SA', // Saudi Arabia
          'QA', // Qatar
          'KW', // Kuwait
          'BH', // Bahrain
          'OM', // Oman
          'JO', // Jordan
          'IL', // Israel

          // Other regions
          'RU', // Russia (English stronger than Spanish)
          'UA', // Ukraine
          'TR', // Turkey
          'EG', // Egypt
          'MA', // Morocco
          'TN', // Tunisia
          'KZ', // Kazakhstan

          // Caribbean countries (many are English-speaking)
          'JM', // Jamaica
          'TT', // Trinidad and Tobago
          'BB', // Barbados
          'BS', // Bahamas
          'BZ', // Belize
          'AG', // Antigua and Barbuda
          'GD', // Grenada
          'LC', // Saint Lucia
          'VC', // Saint Vincent and the Grenadines
          'KN', // Saint Kitts and Nevis

          // Pacific nations with English use
          'FJ', // Fiji
          'PG', // Papua New Guinea
          'WS', // Samoa
          'TO', // Tonga
          'SB', // Solomon Islands
          'VU'  // Vanuatu
        ];

        const detectedLang = englishCountries.includes(country) ? 'en' : 'es';
        setLanguage(detectedLang);
      })
      .catch(() => {
        /* silent fail – keep current language */
      });
  }, []);

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Helper to get localized path
  const getLocalizedPath = (path, lang = language) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Return path with language prefix
    return `/${lang}${cleanPath ? `/${cleanPath}` : ''}`;
  };


  const value = {
    language,
    switchLanguage,
    getLocalizedPath,
    isSpanish: language === 'es',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

