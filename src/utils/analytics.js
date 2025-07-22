// Google Analytics tracking utilities

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Main gtag function
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track menu clicks
export const trackMenuClick = (menuItem, section = 'main_navigation') => {
  gtag('event', 'menu_click', {
    event_category: 'Navigation',
    event_label: menuItem,
    menu_section: section,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Menu click tracked - ${menuItem}`);
};

// Track button clicks
export const trackButtonClick = (buttonName, category = 'Engagement') => {
  gtag('event', 'button_click', {
    event_category: category,
    event_label: buttonName,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Button click tracked - ${buttonName}`);
};

// Track form submissions
export const trackFormSubmission = (formName, method = 'contact') => {
  gtag('event', 'form_submit', {
    event_category: 'Lead Generation',
    event_label: formName,
    form_method: method,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Form submission tracked - ${formName}`);
};

// Track scroll events
export const trackScroll = (percentage) => {
  gtag('event', 'scroll', {
    event_category: 'Engagement',
    event_label: `${percentage}%`,
    scroll_depth: percentage,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
};

// Track page views for SPA
export const trackPageView = (pagePath, pageTitle) => {
  gtag('config', 'G-079MYKHJVK', {
    page_path: pagePath,
    page_title: pageTitle,
  });
  
  console.log(`Analytics: Page view tracked - ${pageTitle} (${pagePath})`);
};

// Track link clicks (external links, downloads, etc.)
export const trackLinkClick = (linkUrl, linkText, category = 'External Link') => {
  gtag('event', 'link_click', {
    event_category: category,
    event_label: linkText,
    link_url: linkUrl,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Link click tracked - ${linkText} (${linkUrl})`);
};

// Track contact info clicks
export const trackContactClick = (contactType, contactValue) => {
  gtag('event', 'contact_click', {
    event_category: 'Contact',
    event_label: contactType,
    contact_method: contactType,
    contact_value: contactValue,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Contact click tracked - ${contactType}: ${contactValue}`);
};

// Track slider interactions
export const trackSliderInteraction = (action, slideIndex = null) => {
  gtag('event', 'slider_interaction', {
    event_category: 'Engagement',
    event_label: action,
    slider_action: action,
    slide_index: slideIndex,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Slider interaction tracked - ${action}`);
};

// Track scroll to contact section
export const trackContactSectionView = () => {
  gtag('event', 'contact_section_view', {
    event_category: 'Engagement',
    event_label: 'Contact Section Viewed',
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log('Analytics: Contact section view tracked');
};

// Enhanced ecommerce tracking for service inquiries
export const trackServiceInquiry = (serviceName, serviceCategory = 'Digital Education') => {
  gtag('event', 'service_inquiry', {
    event_category: 'Lead Generation',
    event_label: serviceName,
    service_name: serviceName,
    service_category: serviceCategory,
    page_location: window.location.href,
    transport_type: 'beacon'
  });
  
  console.log(`Analytics: Service inquiry tracked - ${serviceName}`);
};

