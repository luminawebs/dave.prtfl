// Language Detection Test Utility
// This script helps validate the automatic language detection based on user location

console.log('🌍 Language Detection Test Utility');
console.log('=====================================');

// Test the geolocation API
async function testGeolocationAPI() {
  console.log('\n1. Testing Geolocation API (ipapi.co)...');

  try {
    const response = await fetch('https://ipapi.co/json/');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Geolocation API Response:', {
      country: data.country_name,
      country_code: data.country_code,
      city: data.city,
      ip: data.ip
    });

    // Test language mapping logic
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

    const detectedLang = englishCountries.includes(data.country_code) ? 'en' : 'es';

    console.log('🎯 Language Detection Result:');
    console.log(`   Country: ${data.country_name} (${data.country_code})`);
    console.log(`   Detected Language: ${detectedLang}`);
    console.log(`   Is English Country: ${englishCountries.includes(data.country_code)}`);

    return { success: true, data, detectedLang };

  } catch (error) {
    console.error('❌ Geolocation API Error:', error.message);
    return { success: false, error: error.message };
  }
}

// Test browser language detection
function testBrowserLanguage() {
  console.log('\n2. Testing Browser Language Detection...');

  const browserLanguage = navigator.language || navigator.userLanguage;
  const isSpanish = browserLanguage.startsWith('es');

  console.log('🌐 Browser Language Info:');
  console.log(`   navigator.language: ${navigator.language}`);
  console.log(`   navigator.userLanguage: ${navigator.userLanguage}`);
  console.log(`   Detected as Spanish: ${isSpanish}`);
  console.log(`   Fallback Language: ${isSpanish ? 'es' : 'en'}`);

  return {
    browserLanguage,
    isSpanish,
    detectedLang: isSpanish ? 'es' : 'en'
  };
}

// Test localStorage simulation
function testLocalStorage() {
  console.log('\n3. Testing LocalStorage Language Preference...');

  const savedLanguage = localStorage.getItem('edunest-language');
  console.log(`💾 Saved Language: ${savedLanguage || 'None'}`);

  if (savedLanguage) {
    console.log('   ℹ️  User has existing preference - geolocation will be skipped');
  } else {
    console.log('   ℹ️  No saved preference - geolocation detection will run');
  }

  return savedLanguage;
}

// Test URL language extraction
function testURLLanguage() {
  console.log('\n4. Testing URL Language Extraction...');

  const path = window.location.pathname;
  const urlLang = path.split('/')[1];
  const isValidLang = ['es', 'en'].includes(urlLang);

  console.log('🔗 URL Language Info:');
  console.log(`   Current URL: ${window.location.href}`);
  console.log(`   Pathname: ${path}`);
  console.log(`   Extracted Language: ${urlLang || 'None'}`);
  console.log(`   Is Valid Language: ${isValidLang}`);

  return isValidLang ? urlLang : null;
}

// Main test function
async function runLanguageDetectionTest() {
  console.log('🚀 Starting Language Detection Test...');

  // Test in the same order as the actual implementation
  const urlLang = testURLLanguage();
  const savedLang = testLocalStorage();
  const browserLang = testBrowserLanguage();
  const geoResult = await testGeolocationAPI();

  console.log('\n🎯 FINAL LANGUAGE DETECTION SIMULATION:');
  console.log('=====================================');

  let finalLanguage;
  let reason;

  if (urlLang) {
    finalLanguage = urlLang;
    reason = 'URL-based detection';
  } else if (savedLang) {
    finalLanguage = savedLang;
    reason = 'Saved user preference';
  } else if (geoResult.success) {
    finalLanguage = geoResult.detectedLang;
    reason = `Geolocation-based (${geoResult.data.country_code})`;
  } else {
    finalLanguage = browserLang.detectedLang;
    reason = 'Browser language fallback';
  }

  console.log(`🌟 Final Language: ${finalLanguage}`);
  console.log(`📋 Reason: ${reason}`);

  // Test recommendations
  console.log('\n💡 RECOMMENDATIONS:');
  console.log('===================');

  if (!geoResult.success) {
    console.log('⚠️  Geolocation API failed - users will fall back to browser language');
    console.log('   Consider adding error handling or alternative detection methods');
  }

  if (savedLang) {
    console.log('ℹ️  User has saved preference - to test geolocation:');
    console.log('   Run: localStorage.removeItem("edunest-language"); then reload');
  }

  console.log('✅ Test completed successfully!');

  return {
    urlLang,
    savedLang,
    browserLang: browserLang.detectedLang,
    geoLang: geoResult.success ? geoResult.detectedLang : null,
    finalLanguage,
    reason
  };
}

// Export for use in browser console
window.testLanguageDetection = runLanguageDetectionTest;

// Auto-run if script is executed directly
if (typeof window !== 'undefined') {
  console.log('💡 TIP: Run testLanguageDetection() in the browser console to test language detection');
  console.log('💡 TIP: To simulate first visit, run: localStorage.removeItem("edunest-language")');
}

export default runLanguageDetectionTest;
