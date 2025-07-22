/**
 * IP Detection and Internal Traffic Tracking for Google Analytics
 * Detects internal IP and applies appropriate traffic type parameters
 */

(function() {
  'use strict';
  
  // Your internal IP address
  const INTERNAL_IP = '181.59.2.97';
  
  // IP detection services (using multiple for redundancy)
  const IP_SERVICES = [
    'https://api.ipify.org?format=json',
    'https://ipapi.co/json/',
    'https://jsonip.com',
    'https://api.myip.com'
  ];
  
  /**
   * Detect user's public IP address
   * @returns {Promise<string>} User's IP address
   */
  async function detectUserIP() {
    for (const service of IP_SERVICES) {
      try {
        const response = await fetch(service, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
          timeout: 5000
        });
        
        if (!response.ok) continue;
        
        const data = await response.json();
        
        // Different services return IP in different formats
        let ip = data.ip || data.query || data.IPv4 || data.ip_addr;
        
        if (ip && typeof ip === 'string' && isValidIP(ip)) {
          console.log(`IP detected via ${service}: ${ip}`);
          return ip.trim();
        }
      } catch (error) {
        console.warn(`Failed to get IP from ${service}:`, error.message);
        continue;
      }
    }
    
    throw new Error('Unable to detect IP from any service');
  }
  
  /**
   * Validate IP address format
   * @param {string} ip - IP address to validate
   * @returns {boolean} True if valid IPv4 address
   */
  function isValidIP(ip) {
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  }
  
  /**
   * Configure Google Analytics with traffic type
   * @param {boolean} isInternal - Whether the traffic is internal
   */
  function configureGoogleAnalytics(isInternal) {
    if (typeof gtag === 'undefined') {
      console.warn('Google Analytics (gtag) not loaded yet. Retrying...');
      setTimeout(() => configureGoogleAnalytics(isInternal), 1000);
      return;
    }
    
    const trafficType = isInternal ? 'internal' : 'external';
    
    try {
      // Set custom dimension for traffic type
      gtag('config', 'G-079MYKHJVK', {
        'custom_map': {
          'custom_dimension_1': 'traffic_type'
        }
      });
      
      // Send custom event with traffic type
      gtag('event', 'traffic_classification', {
        'custom_dimension_1': trafficType,
        'traffic_type': trafficType,
        'user_ip_type': isInternal ? 'internal' : 'external'
      });
      
      // Set user property
      gtag('set', {
        'traffic_type': trafficType,
        'user_category': isInternal ? 'internal_user' : 'external_user'
      });
      
      console.log(`✅ Google Analytics configured for ${trafficType} traffic`);
      
      // Store in sessionStorage for debugging
      sessionStorage.setItem('ga_traffic_type', trafficType);
      sessionStorage.setItem('ga_is_internal', isInternal.toString());
      
    } catch (error) {
      console.error('Error configuring Google Analytics:', error);
    }
  }
  
  /**
   * Main function to detect IP and configure GA
   */
  async function initializeIPTracking() {
    try {
      console.log('🔍 Detecting user IP...');
      
      const userIP = await detectUserIP();
      const isInternal = userIP === INTERNAL_IP;
      
      console.log(`🌐 User IP: ${userIP}`);
      console.log(`🏠 Internal IP (${INTERNAL_IP}): ${isInternal ? 'YES' : 'NO'}`);
      
      // Configure Google Analytics
      configureGoogleAnalytics(isInternal);
      
      // Add debug info to page (only in development)
      if (window.location.hostname === 'localhost' || window.location.hostname.includes('dev')) {
        addDebugInfo(userIP, isInternal);
      }
      
    } catch (error) {
      console.warn('IP detection failed:', error.message);
      console.log('🔄 Defaulting to external traffic type');
      
      // Default to external traffic if IP detection fails
      configureGoogleAnalytics(false);
    }
  }
  
  /**
   * Add debug information to the page (development only)
   * @param {string} userIP - Detected user IP
   * @param {boolean} isInternal - Whether traffic is internal
   */
  function addDebugInfo(userIP, isInternal) {
    const debugDiv = document.createElement('div');
    debugDiv.id = 'ip-debug-info';
    debugDiv.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
      font-size: 12px;
      z-index: 9999;
      max-width: 300px;
      display: none;
    `;
    
    debugDiv.innerHTML = `
      <strong>🔍 IP Debug Info</strong><br>
      <strong>IP:</strong> ${userIP}<br>
      <strong>Internal:</strong> ${isInternal ? '✅ YES' : '❌ NO'}<br>
      <strong>Traffic Type:</strong> ${isInternal ? 'internal' : 'external'}<br>
      <button onclick="this.parentElement.remove()" style="margin-top: 5px; padding: 2px 5px;">Close</button>
    `;
    
    document.body.appendChild(debugDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (document.getElementById('ip-debug-info')) {
        debugDiv.remove();
      }
    }, 10000);
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeIPTracking);
  } else {
    // DOM already loaded
    initializeIPTracking();
  }
  
  // Also expose globally for manual testing
  window.IPTracker = {
    detectUserIP,
    initializeIPTracking,
    configureGoogleAnalytics,
    INTERNAL_IP
  };
  
})();

