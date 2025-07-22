import React from 'react';

/**
 * OptimizedImage Component
 * 
 * Automatically serves WebP images with JPEG fallback for better performance.
 * Falls back to original images if optimized versions don't exist.
 * 
 * @param {string} src - Original image path (e.g., "assets/img/courses.png")
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {string} loading - Loading behavior ("lazy" | "eager")
 * @param {object} style - Inline styles
 * @param {function} onClick - Click handler
 * @param {object} ...props - Additional props passed to img element
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy', 
  style = {}, 
  onClick,
  ...props 
}) => {
  // Convert original path to optimized paths
  const getOptimizedPaths = (originalSrc) => {
    if (!originalSrc) return { webp: '', jpeg: '', original: '' };
    
    // Handle both relative and absolute paths
    let cleanSrc = originalSrc.replace(/^\/+/, '');
    
    // Check if it's already an optimized path
    if (cleanSrc.includes('/optimized/')) {
      return {
        webp: cleanSrc.endsWith('.webp') ? cleanSrc : cleanSrc.replace(/\.[^.]+$/, '.webp'),
        jpeg: cleanSrc.endsWith('.jpg') ? cleanSrc : cleanSrc.replace(/\.[^.]+$/, '.jpg'),
        original: cleanSrc
      };
    }
    
    // Generate optimized paths
    const optimizedBase = cleanSrc.replace('assets/img/', 'assets/img/optimized/');
    
    return {
      webp: optimizedBase.replace(/\.(png|jpg|jpeg)$/i, '.webp'),
      jpeg: optimizedBase.replace(/\.(png|jpg|jpeg)$/i, '.jpg'),
      original: cleanSrc
    };
  };
  
  const paths = getOptimizedPaths(src);
  
  // For development, you might want to use original images
  // Remove this condition in production to always use optimized images
  const useOptimized = process.env.NODE_ENV === 'production' || process.env.REACT_APP_USE_OPTIMIZED_IMAGES === 'true';
  
  if (!useOptimized) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading={loading}
        style={style}
        onClick={onClick}
        {...props}
      />
    );
  }
  
  return (
    <picture className={className} style={style} onClick={onClick}>
      {/* WebP source for modern browsers */}
      <source srcSet={paths.webp} type="image/webp" />
      
      {/* JPEG fallback for compatibility */}
      <source srcSet={paths.jpeg} type="image/jpeg" />
      
      {/* Final fallback to original image */}
      <img 
        src={paths.original} 
        alt={alt}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;

