# Language-Based URL Routing Implementation

This document explains the implementation of language synchronization using URL paths in the edunest.co React application.

## Overview

The application now supports language switching through URL paths in the format:
- `/es/` - Spanish (default)
- `/en/` - English
- `/es/personajes3d` - Spanish version of the 3D Characters page
- `/en/personajes3d` - English version of the 3D Characters page

## Implementation Details

### 1. App.js Changes

The main routing structure has been updated to use a `:lang` parameter:

```jsx
<Routes>
  <Route path=":lang/*" element={<LanguageRouter />} />
  <Route path="/" element={<Navigate to="/es/" replace />} />
</Routes>
```

### 2. LanguageRouter Component

A new component (`src/components/LanguageRouter.js`) handles:
- Language parameter validation
- Automatic language switching based on URL
- Route management for all pages within a language context

### 3. Enhanced LanguageContext

The LanguageContext has been enhanced with:

#### New Methods:
- `getLocalizedPath(path, lang)` - Returns a localized path with language prefix
- `switchLanguageWithPath(newLanguage)` - Switches language while maintaining current path

#### URL-Based Language Detection:
- Extracts language from URL on initial load
- Falls back to localStorage, then browser language, then Spanish default

### 4. Component Updates

All navigation components have been updated to use localized paths:

#### Menu.jsx
```jsx
const { getLocalizedPath } = useLanguage();

<Link to={getLocalizedPath('/')} />
<Link to={getLocalizedPath('/personajes3d')} />
```

#### LanguageSelector.jsx
```jsx
const { switchLanguageWithPath } = useLanguage();

const handleLanguageChange = (newLanguage) => {
  switchLanguageWithPath(newLanguage);
};
```

## Usage Examples

### For Internal Links
```jsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { getLocalizedPath } = useLanguage();
  
  return (
    <Link to={getLocalizedPath('/personajes3d')}>
      3D Characters
    </Link>
  );
};
```

### For Language Switching
```jsx
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { switchLanguageWithPath, language } = useLanguage();
  
  return (
    <button onClick={() => switchLanguageWithPath('en')}>
      Switch to English
    </button>
  );
};
```

### For Programmatic Navigation
```jsx
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const navigate = useNavigate();
  const { getLocalizedPath } = useLanguage();
  
  const handleNavigation = () => {
    navigate(getLocalizedPath('/courses'));
  };
};
```

## URL Structure

| URL Pattern | Description |
|-------------|-------------|
| `/` | Redirects to `/es/` |
| `/es/` | Spanish homepage |
| `/en/` | English homepage |
| `/es/personajes3d` | Spanish 3D Characters page |
| `/en/personajes3d` | English 3D Characters page |
| `/es/portfolio/:slug` | Spanish portfolio detail page |
| `/en/portfolio/:slug` | English portfolio detail page |

## Benefits

1. **SEO Friendly**: Each language has distinct URLs for better search engine indexing
2. **Shareable Links**: Users can share language-specific URLs
3. **Browser History**: Language switching maintains proper browser history
4. **Bookmarkable**: Users can bookmark pages in their preferred language
5. **Automatic Language Detection**: Still supports geo-IP and browser language detection

## Migration Notes

- All existing routes now require a language prefix
- Old URLs without language prefix redirect to Spanish (`/es/`)
- The language switching now updates the URL automatically
- All internal navigation components have been updated to use localized paths

## Testing

To test the implementation:

1. Visit `/` - should redirect to `/es/`
2. Visit `/es/personajes3d` - should load Spanish 3D Characters page
3. Switch language - URL should update to `/en/personajes3d`
4. Navigate through site - all URLs should maintain language prefix
5. Share URL - recipient should see the same language version

