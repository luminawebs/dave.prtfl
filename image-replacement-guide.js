const fs = require('fs');
const path = require('path');

// Guide for implementing optimized images
class ImageReplacementGuide {
  constructor() {
    this.optimizedDir = 'public/assets/img/optimized';
    this.originalDir = 'public/assets/img';
    this.replacements = [];
  }

  // Find all optimized images and suggest replacements
  generateReplacementGuide() {
    console.log('🖼️  Image Replacement Guide');
    console.log('='.repeat(50));
    
    if (!fs.existsSync(this.optimizedDir)) {
      console.error('❌ Optimized images directory not found. Run image optimization first.');
      return;
    }

    this.findOptimizedImages(this.optimizedDir);
    this.generateHTMLSnippets();
    this.generateSummary();
  }

  findOptimizedImages(dir, relativePath = '') {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      const currentRelativePath = path.join(relativePath, file.name);
      
      if (file.isDirectory()) {
        this.findOptimizedImages(fullPath, currentRelativePath);
      } else if (file.name.endsWith('.webp')) {
        const baseName = path.basename(file.name, '.webp');
        const jpegEquivalent = path.join(dir, baseName + '.jpg');
        
        if (fs.existsSync(jpegEquivalent)) {
          const webpSize = (fs.statSync(fullPath).size / 1024).toFixed(1);
          const jpegSize = (fs.statSync(jpegEquivalent).size / 1024).toFixed(1);
          
          this.replacements.push({
            originalPath: currentRelativePath.replace('.webp', '.png').replace(/optimized[\\\//]/, ''),
            webpPath: '/assets/img/optimized/' + currentRelativePath.replace(/\\/g, '/'),
            jpegPath: '/assets/img/optimized/' + currentRelativePath.replace('.webp', '.jpg').replace(/\\/g, '/'),
            webpSize,
            jpegSize,
            directory: relativePath
          });
        }
      }
    }
  }

  generateHTMLSnippets() {
    console.log('\n📝 HTML Implementation Snippets:');
    console.log('-'.repeat(40));
    
    this.replacements.forEach((replacement, index) => {
      console.log(`\n${index + 1}. ${replacement.originalPath}`);
      console.log(`   WebP: ${replacement.webpSize}KB | JPEG: ${replacement.jpegSize}KB`);
      console.log('   Replace with:');
      console.log('   ```html');
      console.log(`   <picture>`);
      console.log(`     <source srcset="${replacement.webpPath}" type="image/webp">`);
      console.log(`     <img src="${replacement.jpegPath}" alt="Description here" loading="lazy">`);
      console.log(`   </picture>`);
      console.log('   ```');
    });
  }

  generateSummary() {
    console.log('\n📊 Optimization Summary:');
    console.log('-'.repeat(30));
    
    const totalWebPSize = this.replacements.reduce((sum, r) => sum + parseFloat(r.webpSize), 0);
    const totalJPEGSize = this.replacements.reduce((sum, r) => sum + parseFloat(r.jpegSize), 0);
    
    console.log(`✅ ${this.replacements.length} images optimized`);
    console.log(`💾 Total WebP size: ${totalWebPSize.toFixed(1)}KB`);
    console.log(`💾 Total JPEG fallback size: ${totalJPEGSize.toFixed(1)}KB`);
    
    // Priority recommendations
    console.log('\n🎯 Priority Actions:');
    
    // Find the largest savings
    const largestSavings = this.replacements
      .map(r => ({ ...r, savings: parseFloat(r.jpegSize) - parseFloat(r.webpSize) }))
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 5);
    
    largestSavings.forEach((item, index) => {
      console.log(`${index + 1}. ${item.originalPath} - Save ${item.savings.toFixed(1)}KB`);
    });

    console.log('\n📋 Next Steps:');
    console.log('1. Replace <img> tags with <picture> elements as shown above');
    console.log('2. Add loading="lazy" to images below the fold');
    console.log('3. Update src paths to use optimized versions');
    console.log('4. Test WebP support in your target browsers');
    console.log('5. Consider implementing a lazy loading library for better UX');

    // Generate a quick replacement script
    this.generateReplacementScript();
  }

  generateReplacementScript() {
    console.log('\n🔧 Quick Implementation Tips:');
    console.log('-'.repeat(35));
    
    console.log('\nFor React components, use this pattern:');
    console.log('```jsx');
    console.log('const OptimizedImage = ({ src, alt, className, loading = "lazy" }) => {');
    console.log('  const webpSrc = src.replace(/\\.(jpg|jpeg|png)$/i, ".webp");');
    console.log('  const jpegSrc = src.replace(/\\.(png)$/i, ".jpg");');
    console.log('  ');
    console.log('  return (');
    console.log('    <picture className={className}>');
    console.log('      <source srcSet={webpSrc} type="image/webp" />');
    console.log('      <img src={jpegSrc} alt={alt} loading={loading} />');
    console.log('    </picture>');
    console.log('  );');
    console.log('};');
    console.log('```');

    console.log('\nFor the largest file (end-img.png):');
    const endImg = this.replacements.find(r => r.originalPath.includes('end-img'));
    if (endImg) {
      console.log('🚨 CRITICAL: Replace this immediately for maximum impact!');
      console.log(`   Original: ~13.8MB → Optimized: ${endImg.webpSize}KB (99.8% reduction!)`);
      console.log(`   Use: ${endImg.webpPath}`);
    }
  }
}

// Run the guide
if (require.main === module) {
  const guide = new ImageReplacementGuide();
  guide.generateReplacementGuide();
}

module.exports = ImageReplacementGuide;

