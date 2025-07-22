# Language Routing Test Checklist

## ✅ Manual Testing Instructions

To verify that the ES/EN buttons are working correctly with the `:lang` URL structure:

### 1. Initial Load Test
1. Open browser and go to `http://localhost:3000/`
2. **Expected**: URL should automatically redirect to `http://localhost:3000/es/`
3. **Expected**: Page should load in Spanish

### 2. Language Switching Test

#### From Root Spanish Page (`/es/`):
1. Click on "eng" button in language selector
2. **Expected**: URL should change to `http://localhost:3000/en/`
3. **Expected**: Page content should switch to English
4. Click on "esp" button
5. **Expected**: URL should change back to `http://localhost:3000/es/`
6. **Expected**: Page content should switch back to Spanish

#### From Subpages:
1. Navigate to 3D Characters page: `http://localhost:3000/es/personajes3d`
2. Click on "eng" button
3. **Expected**: URL should change to `http://localhost:3000/en/personajes3d`
4. **Expected**: Page content should switch to English
5. Click on "esp" button
6. **Expected**: URL should change back to `http://localhost:3000/es/personajes3d`

### 3. Direct URL Access Test
1. Navigate directly to `http://localhost:3000/en/`
2. **Expected**: Page should load in English
3. **Expected**: Language selector should show "eng" as active (bold/highlighted)
4. Navigate directly to `http://localhost:3000/es/personajes3d`
5. **Expected**: Page should load 3D Characters page in Spanish

### 4. Navigation Consistency Test
1. Set language to English (`/en/`)
2. Click on navigation menu items (Home, Avatars 3D, etc.)
3. **Expected**: All navigation should maintain `/en/` prefix
4. Switch to Spanish and repeat
5. **Expected**: All navigation should maintain `/es/` prefix

### 5. Browser History Test
1. Start at `/es/`
2. Switch to English (should be at `/en/`)
3. Navigate to 3D Characters (should be at `/en/personajes3d`)
4. Click browser back button
5. **Expected**: Should go back to `/en/`
6. Click browser back button again
7. **Expected**: Should go back to `/es/`

### 6. Sharing/Bookmarking Test
1. Navigate to `/en/personajes3d`
2. Copy URL and open in new tab/window
3. **Expected**: Page should load in English version of 3D Characters
4. Repeat with `/es/personajes3d`
5. **Expected**: Page should load in Spanish version

## 🔧 Implementation Verification

### Current URL Structure:
- ✅ `/` → redirects to `/es/`
- ✅ `/es/` → Spanish homepage
- ✅ `/en/` → English homepage
- ✅ `/es/personajes3d` → Spanish 3D Characters
- ✅ `/en/personajes3d` → English 3D Characters
- ✅ `/es/portfolio/:slug` → Spanish portfolio details
- ✅ `/en/portfolio/:slug` → English portfolio details

### Component Updates:
- ✅ LanguageSelector uses React Router navigation
- ✅ Menu component uses localized paths
- ✅ All internal links maintain language prefix
- ✅ Language switching preserves current page path

## 🚀 Testing Results

**Date**: [Fill in when tested]
**Tester**: [Fill in when tested]

| Test Case | Status | Notes |
|-----------|--------|---------|
| Initial Load Redirect | ⏳ | |
| ES/EN Button Switching | ⏳ | |
| Subpage Language Switching | ⏳ | |
| Direct URL Access | ⏳ | |
| Navigation Consistency | ⏳ | |
| Browser History | ⏳ | |
| URL Sharing | ⏳ | |

**Legend**: ✅ Pass | ❌ Fail | ⏳ Not tested

## 🐛 Troubleshooting

If the ES/EN buttons are not working:

1. **Check Console Errors**: Open browser DevTools and look for JavaScript errors
2. **Verify React Router Version**: Ensure you're using React Router v6+ with the new API
3. **Check Network Tab**: Verify that clicking buttons triggers navigation
4. **Test URL Manually**: Try typing `/es/` and `/en/` directly in address bar

## 📝 Notes

- Language switching now uses React Router's `useNavigate()` hook instead of manual history manipulation
- LanguageSelector component has been updated to use accessible button elements
- All navigation maintains language context automatically
- URLs are fully shareable and bookmarkable with language information preserved

