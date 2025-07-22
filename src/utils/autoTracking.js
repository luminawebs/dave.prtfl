// Automatic click tracking utility for elements without React handlers
import { trackButtonClick, trackLinkClick, trackContactClick } from './analytics';

export const initializeAutoTracking = () => {
  // Wait for DOM to be fully loaded
  const setupTracking = () => {
    // Track all external links
    document.querySelectorAll('a[href^="http"], a[href^="https"]').forEach(link => {
      if (!link.dataset.tracked) {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          const text = link.textContent.trim() || link.getAttribute('title') || 'External Link';
          trackLinkClick(href, text, 'External Link');
        });
        link.dataset.tracked = 'true';
      }
    });

    // Track mailto links
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      if (!link.dataset.tracked) {
        link.addEventListener('click', (e) => {
          const email = link.getAttribute('href').replace('mailto:', '');
          trackContactClick('Email', email);
        });
        link.dataset.tracked = 'true';
      }
    });

    // Track tel links
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      if (!link.dataset.tracked) {
        link.addEventListener('click', (e) => {
          const phone = link.getAttribute('href').replace('tel:', '');
          trackContactClick('Phone', phone);
        });
        link.dataset.tracked = 'true';
      }
    });

    // Track buttons that don't have React handlers
    document.querySelectorAll('button, input[type="button"], input[type="submit"]').forEach(button => {
      if (!button.dataset.tracked && !button.onclick) {
        button.addEventListener('click', (e) => {
          const text = button.textContent.trim() || 
                      button.getAttribute('value') || 
                      button.getAttribute('title') || 
                      'Button Click';
          trackButtonClick(text, 'Auto-tracked');
        });
        button.dataset.tracked = 'true';
      }
    });

    // Track clicks on service cards that don't have explicit tracking
    document.querySelectorAll('.service-card a, .card-action').forEach(link => {
      if (!link.dataset.tracked) {
        link.addEventListener('click', (e) => {
          const card = link.closest('.service-card');
          const serviceTitle = card ? card.querySelector('h3')?.textContent.trim() : 'Service Card';
          trackButtonClick(`Service Card - ${serviceTitle}`, 'Services');
        });
        link.dataset.tracked = 'true';
      }
    });

    // Track social media links
    document.querySelectorAll('a[href*="facebook"], a[href*="twitter"], a[href*="linkedin"], a[href*="instagram"], a[href*="youtube"]').forEach(link => {
      if (!link.dataset.tracked) {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          let platform = 'Social Media';
          
          if (href.includes('facebook')) platform = 'Facebook';
          else if (href.includes('twitter')) platform = 'Twitter';
          else if (href.includes('linkedin')) platform = 'LinkedIn';
          else if (href.includes('instagram')) platform = 'Instagram';
          else if (href.includes('youtube')) platform = 'YouTube';
          
          trackLinkClick(href, platform, 'Social Media');
        });
        link.dataset.tracked = 'true';
      }
    });

    // Track download links
    document.querySelectorAll('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".zip"], a[href*="download"]').forEach(link => {
      if (!link.dataset.tracked) {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          const fileName = href.split('/').pop() || 'Download';
          trackLinkClick(href, fileName, 'Download');
        });
        link.dataset.tracked = 'true';
      }
    });
  };

  // Run immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTracking);
  } else {
    setupTracking();
  }

  // Also run when new content is added (for dynamic content)
  const observer = new MutationObserver((mutations) => {
    let shouldSetupTracking = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            shouldSetupTracking = true;
          }
        });
      }
    });
    
    if (shouldSetupTracking) {
      // Debounce the setup to avoid too many calls
      clearTimeout(window.autoTrackingTimeout);
      window.autoTrackingTimeout = setTimeout(setupTracking, 500);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

