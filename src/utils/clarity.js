// Microsoft Clarity tracking utilities
import clarity from '@microsoft/clarity';

// Clarity project ID - Replace with your actual Clarity project ID
const CLARITY_PROJECT_ID = process.env.REACT_APP_CLARITY_PROJECT_ID || 'YOUR_CLARITY_PROJECT_ID';

// Initialize Clarity
export const initializeClarity = () => {
  if (typeof window !== 'undefined' && CLARITY_PROJECT_ID !== 'YOUR_CLARITY_PROJECT_ID') {
    try {
      clarity.init(CLARITY_PROJECT_ID);
      console.log('Microsoft Clarity initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Microsoft Clarity:', error);
    }
  } else {
    console.warn('Clarity project ID not configured. Please set REACT_APP_CLARITY_PROJECT_ID environment variable.');
  }
};

// Track custom events in Clarity
export const trackClarityEvent = (eventName) => {
  if (typeof window !== 'undefined' && window.clarity) {
    try {
      clarity.event(eventName);
      console.log(`Clarity: Custom event tracked - ${eventName}`);
    } catch (error) {
      console.error('Failed to track Clarity event:', error);
    }
  }
};

// Set user session information
export const setClarityUserSession = (userId, sessionData = {}) => {
  if (typeof window !== 'undefined' && window.clarity) {
    try {
      clarity.identify(userId, sessionData);
      console.log(`Clarity: User session set - ${userId}`, sessionData);
    } catch (error) {
      console.error('Failed to set Clarity user session:', error);
    }
  }
};

// Track page views in Clarity
export const trackClarityPageView = (pagePath, pageTitle) => {
  trackClarityEvent(`page_view_${pagePath.replace(/\//g, '_')}`);
};

// Track menu interactions
export const trackClarityMenuClick = (menuItem, section = 'main_navigation') => {
  trackClarityEvent(`menu_${menuItem.replace(/\s+/g, '_').toLowerCase()}`);
};

// Track button clicks
export const trackClarityButtonClick = (buttonName, category = 'Engagement') => {
  trackClarityEvent(`button_${buttonName.replace(/\s+/g, '_').toLowerCase()}`);
};

// Track form submissions
export const trackClarityFormSubmission = (formName, method = 'contact') => {
  trackClarityEvent(`form_${formName.replace(/\s+/g, '_').toLowerCase()}`);
};

// Track scroll events
export const trackClarityScroll = (percentage) => {
  trackClarityEvent(`scroll_${percentage}`);
};

// Track contact interactions
export const trackClarityContactClick = (contactType, contactValue) => {
  trackClarityEvent(`contact_${contactType.toLowerCase()}`);
};

// Track service inquiries
export const trackClarityServiceInquiry = (serviceName, serviceCategory = 'Digital Education') => {
  trackClarityEvent(`service_${serviceName.replace(/\s+/g, '_').toLowerCase()}`);
};

// Track language changes
export const trackClarityLanguageChange = (fromLang, toLang) => {
  trackClarityEvent(`language_${fromLang}_to_${toLang}`);
};

// Track errors
export const trackClarityError = (errorType, errorMessage, errorStack = null) => {
  trackClarityEvent(`error_${errorType.replace(/\s+/g, '_').toLowerCase()}`);
};

// Track performance metrics
export const trackClarityPerformance = (metricName, value, unit = 'ms') => {
  trackClarityEvent(`performance_${metricName.replace(/\s+/g, '_').toLowerCase()}`);
};

export default {
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
};
