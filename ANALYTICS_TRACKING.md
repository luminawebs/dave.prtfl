# Google Analytics Tracking Implementation

This document describes the comprehensive Google Analytics tracking implementation for the edunest.co website.

## Overview

The website now includes extensive Google Analytics 4 (GA4) tracking for:
- Menu navigation clicks
- Button interactions
- Form submissions
- Contact information clicks
- Scroll depth tracking
- Page view tracking
- Slider interactions
- External link clicks
- Download tracking
- Social media clicks

## Tracking ID

The website uses GA4 tracking ID: `G-079MYKHJVK`

## Implementation Files

### Core Analytics Files

1. **`/src/utils/analytics.js`** - Main analytics functions
   - `trackMenuClick()` - Menu navigation tracking
   - `trackButtonClick()` - Button interaction tracking
   - `trackFormSubmission()` - Form submission tracking
   - `trackContactClick()` - Contact info clicks
   - `trackScroll()` - Scroll depth tracking
   - `trackPageView()` - Page view tracking
   - `trackSliderInteraction()` - Slider navigation
   - `trackLinkClick()` - External link tracking
   - `trackServiceInquiry()` - Service inquiry tracking

2. **`/src/utils/autoTracking.js`** - Automatic tracking for elements without React handlers
   - External links
   - Email/phone links
   - Download links
   - Social media links
   - Service cards

3. **`/src/hooks/useScrollTracking.js`** - Scroll behavior tracking
   - Tracks scroll depth at 25%, 50%, 75%, 100%
   - Tracks when contact section becomes visible

4. **`/src/components/PageTracker.jsx`** - Single Page Application (SPA) page view tracking

### Component Integration

- **Menu.jsx** - Menu navigation clicks
- **App.js** - Header buttons, contact form, slider controls
- **HomePage.jsx** - Hero CTAs, service buttons, call-to-action buttons

## Event Categories

The tracking uses the following event categories:

- **Navigation** - Menu clicks, header buttons, scroll-to-top
- **Hero** - Hero section buttons and CTAs
- **About** - About section interactions
- **Services** - Service card clicks and inquiries
- **Call to Action** - CTA section buttons
- **Contact** - Contact form and contact info clicks
- **Engagement** - Scroll tracking, slider interactions
- **Lead Generation** - Form submissions, service inquiries
- **External Link** - External website links
- **Social Media** - Social platform links
- **Download** - File downloads

## How to Monitor Analytics

### Real-time Monitoring

1. Go to Google Analytics 4 dashboard
2. Navigate to **Reports > Real-time**
3. Test website interactions to see events in real-time

### Event Reports

1. Navigate to **Reports > Events**
2. View all tracked events and their parameters
3. Common events to monitor:
   - `menu_click`
   - `button_click` 
   - `form_submit`
   - `contact_click`
   - `scroll`
   - `link_click`
   - `slider_interaction`

### Custom Reports

Create custom reports to track:
- Menu navigation patterns
- Button click conversion rates
- Form submission rates
- Contact engagement
- Content engagement (scroll depth)

## Testing the Implementation

### Browser Console Testing

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Navigate the website and look for console messages like:
   ```
   Analytics: Menu click tracked - Home
   Analytics: Button click tracked - Hero CTA - Ver Servicios
   Analytics: Form submission tracked - Contact Form
   ```

### GA4 Real-time Testing

1. Open GA4 in another tab
2. Navigate to Real-time reports
3. Interact with website elements
4. Verify events appear in real-time dashboard

## Event Parameters

Each tracked event includes relevant parameters:

- **event_category**: High-level categorization
- **event_label**: Specific element identification
- **page_location**: Current page URL
- **transport_type**: 'beacon' for reliable tracking
- Custom parameters based on event type

## Troubleshooting

### Events Not Appearing

1. Check browser console for errors
2. Verify GA4 tracking code is loaded
3. Ensure `gtag` function is available
4. Check for ad blockers interfering with tracking

### Console Debugging

The implementation includes console.log statements for debugging:
- Enable them by checking browser console
- Each tracked event logs a confirmation message

## Performance Considerations

- Events use `transport_type: 'beacon'` for reliability
- Scroll tracking is throttled to prevent performance issues
- Auto-tracking has debounced setup to handle dynamic content

## Privacy Compliance

- No personal information is tracked in custom events
- All tracking respects user privacy settings
- Consider implementing cookie consent if required by regulations

## Future Enhancements

Possible additions:
- Enhanced ecommerce tracking for service inquiries
- User journey mapping
- A/B testing integration
- Custom conversion goals
- Advanced audience segmentation

---

**Last Updated**: June 2025
**GA4 Property ID**: G-079MYKHJVK

