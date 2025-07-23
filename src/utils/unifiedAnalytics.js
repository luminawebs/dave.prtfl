// Unified Analytics Service - Combines Google Analytics and Microsoft Clarity
import { 
  gtag, 
  trackMenuClick as gaTrackMenuClick,
  trackButtonClick as gaTrackButtonClick,
  trackFormSubmission as gaTrackFormSubmission,
  trackScroll as gaTrackScroll,
  trackPageView as gaTrackPageView,
  trackLinkClick as gaTrackLinkClick,
  trackContactClick as gaTrackContactClick,
  trackSliderInteraction as gaTrackSliderInteraction,
  trackContactSectionView as gaTrackContactSectionView,
  trackServiceInquiry as gaTrackServiceInquiry
} from './analytics';

import {
  initializeClarity,
  trackClarityEvent,
  setClarityUserSession,
  trackClarityPageView,
  trackClarityMenuClick,
  trackClarityButtonClick,
  trackClarityFormSubmission,
  trackClarityScroll,
  trackClarityContactClick,
  trackClarityServiceInquiry,
  trackClarityLanguageChange,
  trackClarityError,
  trackClarityPerformance
} from './clarity';

// Initialize both analytics services
export const initializeAnalytics = () => {
  // Initialize Clarity
  initializeClarity();
  
  console.log('Unified Analytics initialized');
};

// Unified tracking functions that send to both GA and Clarity
export const trackMenuClick = (menuItem, section = 'main_navigation') => {
  gaTrackMenuClick(menuItem, section);
  trackClarityMenuClick(menuItem, section);
};

export const trackButtonClick = (buttonName, category = 'Engagement') => {
  gaTrackButtonClick(buttonName, category);
  trackClarityButtonClick(buttonName, category);
};

export const trackFormSubmission = (formName, method = 'contact') => {
  gaTrackFormSubmission(formName, method);
  trackClarityFormSubmission(formName, method);
};

export const trackScroll = (percentage) => {
  gaTrackScroll(percentage);
  trackClarityScroll(percentage);
};

export const trackPageView = (pagePath, pageTitle) => {
  gaTrackPageView(pagePath, pageTitle);
  trackClarityPageView(pagePath, pageTitle);
};

export const trackLinkClick = (linkUrl, linkText, category = 'External Link') => {
  gaTrackLinkClick(linkUrl, linkText, category);
  trackClarityEvent(`link_${category.replace(/\s+/g, '_').toLowerCase()}`);
};

export const trackContactClick = (contactType, contactValue) => {
  gaTrackContactClick(contactType, contactValue);
  trackClarityContactClick(contactType, contactValue);
};

export const trackSliderInteraction = (action, slideIndex = null) => {
  gaTrackSliderInteraction(action, slideIndex);
  trackClarityEvent(`slider_${action.replace(/\s+/g, '_').toLowerCase()}`);
};

export const trackContactSectionView = () => {
  gaTrackContactSectionView();
  trackClarityEvent('contact_section_view');
};

export const trackServiceInquiry = (serviceName, serviceCategory = 'Digital Education') => {
  gaTrackServiceInquiry(serviceName, serviceCategory);
  trackClarityServiceInquiry(serviceName, serviceCategory);
};

// Clarity-specific functions
export const trackLanguageChange = (fromLang, toLang) => {
  trackClarityLanguageChange(fromLang, toLang);
  // Also track in GA as a custom event
  gtag('event', 'language_change', {
    event_category: 'User Preference',
    event_label: `${fromLang} to ${toLang}`,
    from_language: fromLang,
    to_language: toLang
  });
};

export const trackError = (errorType, errorMessage, errorStack = null) => {
  trackClarityError(errorType, errorMessage, errorStack);
  // Also track in GA
  gtag('event', 'exception', {
    description: `${errorType}: ${errorMessage}`,
    fatal: false
  });
};

export const trackPerformance = (metricName, value, unit = 'ms') => {
  trackClarityPerformance(metricName, value, unit);
  // Also track in GA as a timing event
  gtag('event', 'timing_complete', {
    name: metricName,
    value: value,
    event_category: 'Performance'
  });
};

export const setUserSession = (userId, sessionData = {}) => {
  setClarityUserSession(userId, sessionData);
  // Set user ID in GA as well
  gtag('config', 'G-079MYKHJVK', {
    user_id: userId
  });
};

// Custom event tracking for both platforms
export const trackCustomEvent = (eventName, eventData = {}) => {
  // Track in Clarity (simplified event name)
  trackClarityEvent(eventName.replace(/\s+/g, '_').toLowerCase());
  
  // Track in GA
  const { event_category = 'Custom', event_label = eventName, ...customParams } = eventData;
  gtag('event', eventName, {
    event_category,
    event_label,
    ...customParams
  });
};

// E-commerce tracking (useful for course purchases, service bookings)
export const trackPurchase = (transactionId, value, currency = 'USD', items = []) => {
  // GA4 Enhanced Ecommerce
  gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency,
    items: items
  });
  
  // Clarity custom event
  trackClarityEvent('purchase');
};

// Track video interactions
export const trackVideoInteraction = (videoTitle, action, progress = null) => {
  const eventData = {
    video_title: videoTitle,
    video_action: action,
    video_progress: progress,
    page_location: window.location.href
  };
  
  gtag('event', 'video_' + action, {
    event_category: 'Video',
    event_label: videoTitle,
    video_current_time: progress
  });
  
  trackClarityEvent(`video_${action.replace(/\s+/g, '_').toLowerCase()}`);
};

// Track search actions
export const trackSearch = (searchTerm, searchResults = null) => {
  gtag('event', 'search', {
    search_term: searchTerm,
    event_category: 'Search'
  });
  
  trackClarityEvent('search');
};

// Track file downloads
export const trackDownload = (fileName, fileType, fileUrl) => {
  gtag('event', 'file_download', {
    event_category: 'Download',
    event_label: fileName,
    file_extension: fileType
  });
  
  trackClarityEvent(`download_${fileType.toLowerCase()}`);
};

export default {
  initializeAnalytics,
  trackMenuClick,
  trackButtonClick,
  trackFormSubmission,
  trackScroll,
  trackPageView,
  trackLinkClick,
  trackContactClick,
  trackSliderInteraction,
  trackContactSectionView,
  trackServiceInquiry,
  trackLanguageChange,
  trackError,
  trackPerformance,
  setUserSession,
  trackCustomEvent,
  trackPurchase,
  trackVideoInteraction,
  trackSearch,
  trackDownload
};
