const fs = require('fs');
const path = require('path');

// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      imageOptimization: {},
      bundleAnalysis: {},
      recommendations: []
    };
  }

  // Check image optimization results
  checkImageOptimization() {
    console.log('🔍 Checking image optimization...');
    
    const originalDir = 'public/assets/img';
    const optimizedDir = 'public/assets/img/optimized';
    
    if (!fs.existsSync(optimizedDir)) {
      this.results.recommendations.push('❌ Optimized images directory not found. Run image optimization first.');
      return;
    }
    
    // Calculate total sizes
    let originalSize = 0;
    let optimizedSize = 0;
    
    const calculateDirSize = (dir) => {
      let size = 0;
      if (!fs.existsSync(dir)) return size;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
          size += calculateDirSize(fullPath);
        } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)) {
          size += fs.statSync(fullPath).size;
        }
      }
      return size;
    };
    
    originalSize = calculateDirSize(originalDir) - calculateDirSize(optimizedDir);
    optimizedSize = calculateDirSize(optimizedDir);
    
    const savings = originalSize - optimizedSize;
    const savingsPercent = originalSize > 0 ? ((savings / originalSize) * 100) : 0;
    
    this.results.imageOptimization = {
      originalSizeMB: (originalSize / (1024 * 1024)).toFixed(2),
      optimizedSizeMB: (optimizedSize / (1024 * 1024)).toFixed(2),
      savingsMB: (savings / (1024 * 1024)).toFixed(2),
      savingsPercent: savingsPercent.toFixed(1)
    };
    
    console.log(`✅ Image optimization: ${savingsPercent.toFixed(1)}% size reduction`);
    
    if (savingsPercent > 50) {
      this.results.recommendations.push('✅ Excellent image optimization achieved!');
    } else if (savingsPercent > 20) {
      this.results.recommendations.push('✅ Good image optimization, consider further compression.');
    } else {
      this.results.recommendations.push('⚠️ Image optimization could be improved.');
    }
  }
  
  // Check for large files that could impact performance
  checkLargeFiles() {
    console.log('🔍 Checking for large files...');
    
    const checkDirectory = (dir, threshold = 1024 * 1024) => { // 1MB threshold
      const largeFiles = [];
      if (!fs.existsSync(dir)) return largeFiles;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
          largeFiles.push(...checkDirectory(fullPath, threshold));
        } else {
          const size = fs.statSync(fullPath).size;
          if (size > threshold) {
            largeFiles.push({
              path: fullPath,
              sizeMB: (size / (1024 * 1024)).toFixed(2)
            });
          }
        }
      }
      return largeFiles;
    };
    
    const largeFiles = checkDirectory('public/assets');
    
    if (largeFiles.length > 0) {
      console.log('⚠️ Large files found:');
      largeFiles.forEach(file => {
        console.log(`   ${file.path}: ${file.sizeMB} MB`);
        this.results.recommendations.push(`⚠️ Large file: ${file.path} (${file.sizeMB} MB) - consider optimization`);
      });
    } else {
      console.log('✅ No large files found');
      this.results.recommendations.push('✅ All asset files are reasonably sized');
    }
  }
  
  // Check for optimization opportunities
  checkOptimizationOpportunities() {
    console.log('🔍 Checking optimization opportunities...');
    
    // Check if minified versions are being used
    const cssFiles = ['public/assets/vendor/bootstrap/css/bootstrap.css'];
    const jsFiles = ['public/assets/vendor/bootstrap/js/bootstrap.bundle.js'];
    
    cssFiles.forEach(file => {
      if (fs.existsSync(file)) {
        const minFile = file.replace('.css', '.min.css');
        if (fs.existsSync(minFile)) {
          this.results.recommendations.push(`💡 Use minified version: ${minFile} instead of ${file}`);
        }
      }
    });
    
    jsFiles.forEach(file => {
      if (fs.existsSync(file)) {
        const minFile = file.replace('.js', '.min.js');
        if (fs.existsSync(minFile)) {
          this.results.recommendations.push(`💡 Use minified version: ${minFile} instead of ${file}`);
        }
      }
    });
    
    // Check for WebP usage
    const optimizedDir = 'public/assets/img/optimized';
    if (fs.existsSync(optimizedDir)) {
      const webpFiles = this.countFilesByExtension(optimizedDir, '.webp');
      const totalImages = this.countFilesByExtension('public/assets/img', '.jpg', '.jpeg', '.png');
      
      if (webpFiles < totalImages) {
        this.results.recommendations.push(`💡 ${totalImages - webpFiles} images could be converted to WebP format`);
      } else {
        this.results.recommendations.push('✅ All images have WebP versions available');
      }
    }
  }
  
  countFilesByExtension(dir, ...extensions) {
    let count = 0;
    if (!fs.existsSync(dir)) return count;
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        count += this.countFilesByExtension(fullPath, ...extensions);
      } else {
        const ext = path.extname(file.name).toLowerCase();
        if (extensions.includes(ext)) {
          count++;
        }
      }
    }
    return count;
  }
  
  // Generate performance report
  generateReport() {
    console.log('\n📊 Performance Analysis Report');
    console.log('='.repeat(50));
    
    this.checkImageOptimization();
    this.checkLargeFiles();
    this.checkOptimizationOpportunities();
    
    console.log('\n📈 Results Summary:');
    if (this.results.imageOptimization.savingsPercent) {
      console.log(`   Image optimization: ${this.results.imageOptimization.savingsPercent}% reduction`);
      console.log(`   Space saved: ${this.results.imageOptimization.savingsMB} MB`);
    }
    
    console.log('\n💡 Recommendations:');
    this.results.recommendations.forEach(rec => console.log(`   ${rec}`));
    
    // Save results to file
    fs.writeFileSync('performance-report.json', JSON.stringify(this.results, null, 2));
    console.log('\n💾 Report saved to: performance-report.json');
    
    // Performance score calculation
    let score = 100;
    const largeFileCount = this.results.recommendations.filter(r => r.includes('Large file')).length;
    const optimizationCount = this.results.recommendations.filter(r => r.includes('💡')).length;
    
    score -= (largeFileCount * 10); // -10 points per large file
    score -= (optimizationCount * 5); // -5 points per optimization opportunity
    
    if (this.results.imageOptimization.savingsPercent) {
      const savings = parseFloat(this.results.imageOptimization.savingsPercent);
      if (savings > 70) score += 10; // Bonus for excellent optimization
    }
    
    score = Math.max(0, Math.min(100, score)); // Clamp between 0-100
    
    console.log(`\n🏆 Performance Score: ${score}/100`);
    if (score >= 90) console.log('   Excellent performance! 🎉');
    else if (score >= 70) console.log('   Good performance! 👍');
    else if (score >= 50) console.log('   Fair performance, room for improvement 📈');
    else console.log('   Performance needs attention ⚠️');
    
    return this.results;
  }
}

// Run performance monitoring
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.generateReport();
}

module.exports = PerformanceMonitor;

