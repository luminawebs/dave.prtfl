# Analytics Implementation Guide

This guide explains how Microsoft Clarity has been integrated into your React project alongside Google Analytics.

## Overview

Your project now has a unified analytics system that tracks user behavior across both Google Analytics and Microsoft Clarity platforms. This provides:

- **Google Analytics**: Quantitative data, conversion tracking, traffic sources
- **Microsoft Clarity**: Qualitative data, session recordings, heatmaps, user behavior insights

## Setup Instructions

### 1. Get Your Microsoft Clarity Project ID

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Sign in with your Microsoft account
3. Create a new project or select an existing one
4. Copy your Project ID from the dashboard

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env` if you haven't already:
   ```bash
   cp .env.example .env
   ```

2. Add your Clarity Project ID to the `.env` file:
   ```env
   REACT_APP_CLARITY_PROJECT_ID=your_actual_project_id_here
   ```

### 3. Build and Deploy

```bash
npm run build
```

The analytics will automatically initialize when your application starts.

## What's Been Implemented

### Automatic Tracking

The system automatically tracks:

- **Page Views**: Every route change
- **Scroll Depth**: 25%, 50%, 75%, 100% milestones
- **Button Clicks**: All button interactions
- **Link Clicks**: External links, social media, downloads
- **Contact Interactions**: Email and phone link clicks
- **Form Submissions**: All form completions
- **Menu Navigation**: All menu item clicks
- **Service Inquiries**: Service-related interactions

### Available Tracking Functions

You can manually track events using these functions from `src/utils/unifiedAnalytics.js`:

```javascript
import { 
  trackButtonClick,
  trackFormSubmission,
  trackServiceInquiry,
  trackLanguageChange,
  trackError,
  trackCustomEvent
} from '../utils/unifiedAnalytics';

// Example usage:
trackButtonClick('Download PDF', 'Lead Generation');
trackFormSubmission('Contact Form', 'email');
trackServiceInquiry('LMS Development', 'Digital Education');
trackLanguageChange('es', 'en');
```

### Custom Event Tracking

For custom events that aren't automatically tracked:

```javascript
import { trackCustomEvent } from '../utils/unifiedAnalytics';

trackCustomEvent('video_play', {
  video_title: 'Introduction Video',
  video_duration: 120,
  event_category: 'Engagement'
});
```

### E-commerce Tracking

For tracking purchases or service bookings:

```javascript
import { trackPurchase } from '../utils/unifiedAnalytics';

trackPurchase('order_123', 299.99, 'USD', [
  {
    item_id: 'course_001',
    item_name: 'Advanced React Course',
    category: 'Education',
    quantity: 1,
    price: 299.99
  }
]);
```

## File Structure

```
src/
├── utils/
│   ├── analytics.js          # Google Analytics functions
│   ├── clarity.js            # Microsoft Clarity functions
│   ├── unifiedAnalytics.js   # Combined analytics (USE THIS)
│   └── autoTracking.js       # Automatic event tracking
├── components/
│   └── PageTracker.jsx       # Page view tracking component
└── hooks/
    └── useScrollTracking.js  # Scroll depth tracking hook
```

## Key Features

### 1. Unified Interface
- Single import for all analytics functions
- Automatically sends data to both GA and Clarity
- Consistent API across both platforms

### 2. Automatic Initialization
- Analytics initialize when the app starts
- No manual setup required in components
- Error handling for missing configuration

### 3. Performance Optimized
- Throttled scroll tracking
- Debounced mutation observers
- Non-blocking initialization

### 4. Privacy Compliant
- Respects user consent (you may want to add consent management)
- No PII tracked automatically
- Console logging for debugging (can be disabled in production)

## Best Practices

### 1. Event Naming
Use consistent naming conventions:
- Use snake_case for event names
- Include category and action: `button_click`, `form_submit`
- Be descriptive but concise

### 2. Custom Properties
Include relevant context:
```javascript
trackCustomEvent('course_complete', {
  course_name: 'React Fundamentals',
  completion_time: 3600, // seconds
  user_type: 'premium'
});
```

### 3. Error Tracking
Track meaningful errors:
```javascript
import { trackError } from '../utils/unifiedAnalytics';

try {
  // Some operation
} catch (error) {
  trackError('form_submission_error', error.message, error.stack);
}
```

## Viewing Your Data

### Microsoft Clarity
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Select your project
3. View session recordings, heatmaps, and insights

### Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property (G-079MYKHJVK)
3. View real-time data, events, and conversions

## Troubleshooting

### Clarity Not Loading
- Check that `REACT_APP_CLARITY_PROJECT_ID` is set correctly
- Verify the project ID in your Clarity dashboard
- Check browser console for initialization errors

### Events Not Tracking
- Open browser developer tools
- Check console for tracking confirmations
- Verify network requests to both platforms

### Performance Issues
- Tracking is optimized but can be further customized
- Consider reducing scroll tracking frequency if needed
- Monitor bundle size impact

## Advanced Configuration

### Conditional Tracking
```javascript
// Only track in production
if (process.env.NODE_ENV === 'production') {
  trackCustomEvent('feature_used', { feature: 'advanced_search' });
}
```

### User Identification
```javascript
import { setUserSession } from '../utils/unifiedAnalytics';

// When user logs in
setUserSession('user_123', {
  user_type: 'premium',
  subscription_plan: 'pro'
});
```

### Content Security Policy
If you use CSP, you may need to allow:
- `https://*.clarity.ms` for Clarity
- `https://*.google-analytics.com` for GA

## Next Steps

1. Configure your Clarity Project ID
2. Test the implementation in development
3. Deploy to production
4. Monitor both platforms for data collection
5. Consider adding consent management for GDPR compliance

## Support

If you need help with implementation:
- Check the browser console for error messages
- Verify environment variables are set correctly
- Test individual tracking functions manually
- Review the Microsoft Clarity and Google Analytics documentation
