const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build-time image optimization and replacement system
class BuildImageOptimizer {
  constructor() {
    this.optimizedDir = 'public/assets/img/optimized';
    this.originalDir = 'public/assets/img';
    this.buildDir = 'build';
    this.srcDir = 'src';
    this.publicDir = 'public';
    this.replacements = [];
    this.usageReport = {
      totalImages: 0,
      usedImages: 0,
      unusedImages: 0,
      replacedImages: 0,
      sizeSaved: 0
    };
  }

  // Analyze which images are actually used in the codebase
  analyzeImageUsage() {
    console.log('🔍 Analyzing image usage in codebase...');
    
    const imageReferences = new Set();
    const unusedOptimizedImages = [];
    
    // Find all image references in source files
    this.findImageReferences(this.srcDir, imageReferences);
    this.findImageReferences(this.publicDir, imageReferences, ['index.html', 'manifest.json']);
    
    console.log(`📄 Found ${imageReferences.size} unique image references in code`);
    
    // Check which optimized images correspond to used images
    const optimizedImages = this.getOptimizedImages();
    
    optimizedImages.forEach(optimizedImg => {
      const originalPath = this.getOriginalPath(optimizedImg.path);
      const isUsed = this.isImageUsed(originalPath, imageReferences);
      
      if (isUsed) {
        this.replacements.push({
          original: originalPath,
          optimized: optimizedImg,
          used: true
        });
      } else {
        unusedOptimizedImages.push(optimizedImg);
      }
    });
    
    this.usageReport.totalImages = optimizedImages.length;
    this.usageReport.usedImages = this.replacements.length;
    this.usageReport.unusedImages = unusedOptimizedImages.length;
    
    console.log(`✅ ${this.usageReport.usedImages} optimized images will be used`);
    console.log(`⚠️ ${this.usageReport.unusedImages} optimized images are not referenced in code`);
    
    if (unusedOptimizedImages.length > 0) {
      console.log('\n🗑️ Unused optimized images:');
      unusedOptimizedImages.forEach(img => {
        console.log(`   - ${img.relativePath}`);
      });
    }
    
    return this.replacements;
  }

  // Find all image references in source files
  findImageReferences(dir, references, specificFiles = null) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory() && !file.name.includes('node_modules') && !file.name.includes('.git')) {
        this.findImageReferences(fullPath, references, specificFiles);
      } else if (file.isFile()) {
        // Skip if we only want specific files and this isn't one of them
        if (specificFiles && !specificFiles.includes(file.name)) {
          continue;
        }
        
        // Check relevant file types
        if (/\.(js|jsx|ts|tsx|html|json|css|scss)$/i.test(file.name)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Find image references using various patterns
            const patterns = [
              /["']([^"']*\/img\/[^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi,
              /src=["']([^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi,
              /assets\/img\/[^\s"',)]+\.(jpg|jpeg|png|gif|webp|svg)/gi,
              /\/assets\/img\/[^\s"',)]+\.(jpg|jpeg|png|gif|webp|svg)/gi
            ];
            
            patterns.forEach(pattern => {
              let match;
              while ((match = pattern.exec(content)) !== null) {
                let imagePath = match[1] || match[0];
                
                // Normalize path
                imagePath = imagePath.replace(/^\/+/, '').replace(/^assets\//, 'assets/');
                if (!imagePath.startsWith('assets/')) {
                  imagePath = 'assets/' + imagePath.replace(/^img\//, 'img/');
                }
                
                references.add(imagePath);
              }
            });
          } catch (error) {
            console.warn(`Warning: Could not read ${fullPath}:`, error.message);
          }
        }
      }
    }
  }

  // Get all optimized images
  getOptimizedImages() {
    const optimizedImages = [];
    
    if (!fs.existsSync(this.optimizedDir)) {
      return optimizedImages;
    }
    
    this.findOptimizedImagesRecursive(this.optimizedDir, '', optimizedImages);
    return optimizedImages;
  }

  findOptimizedImagesRecursive(dir, relativePath, optimizedImages) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      const currentRelativePath = path.join(relativePath, file.name);
      
      if (file.isDirectory()) {
        this.findOptimizedImagesRecursive(fullPath, currentRelativePath, optimizedImages);
      } else if (/\.(webp|jpg|jpeg)$/i.test(file.name)) {
        const stats = fs.statSync(fullPath);
        optimizedImages.push({
          path: fullPath,
          relativePath: currentRelativePath.replace(/\\/g, '/'),
          name: file.name,
          size: stats.size,
          isWebP: file.name.endsWith('.webp')
        });
      }
    }
  }

  // Convert optimized path back to original path
  getOriginalPath(optimizedPath) {
    const relativePath = path.relative(this.optimizedDir, optimizedPath);
    return 'assets/img/' + relativePath.replace(/\\/g, '/').replace(/\.(webp|jpg)$/, '.png');
  }

  // Check if an image is used in the codebase
  isImageUsed(imagePath, references) {
    // Check direct match
    if (references.has(imagePath)) return true;
    
    // Check variations
    const variations = [
      imagePath,
      '/' + imagePath,
      imagePath.replace('.png', '.jpg'),
      imagePath.replace('.png', '.jpeg'),
      imagePath.replace('.png', '.webp')
    ];
    
    return variations.some(variation => references.has(variation));
  }

  // Run the build process with optimizations
  async optimizeBuild() {
    console.log('🚀 Starting optimized build process...');
    
    try {
      // Step 1: Analyze current usage
      this.analyzeImageUsage();
      
      // Step 2: Run normal React build
      console.log('\n📺 Building React app...');
      execSync('npm run build', { stdio: 'inherit' });
      
      // Step 3: Replace images in build directory
      console.log('\n🔄 Replacing images with optimized versions...');
      await this.replaceImagesInBuild();
      
      // Step 4: Generate report
      this.generateBuildReport();
      
      console.log('\n✅ Optimized build complete!');
      
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  }

  // Replace images in the build directory
  async replaceImagesInBuild() {
    if (!fs.existsSync(this.buildDir)) {
      console.error('❌ Build directory not found. Run npm run build first.');
      return;
    }
    
    let replacedCount = 0;
    let totalSizeSaved = 0;
    
    for (const replacement of this.replacements) {
      try {
        const buildImagePath = path.join(this.buildDir, 'static/media');
        const originalFileName = path.basename(replacement.original);
        
        // Find the actual built file (React adds hashes to filenames)
        const builtFiles = this.findBuiltImageFiles(buildImagePath, originalFileName);
        
        if (builtFiles.length > 0) {
          for (const builtFile of builtFiles) {
            // Use WebP version if available, otherwise JPEG
            const webpVersion = replacement.optimized.find(opt => opt.isWebP);
            const jpegVersion = replacement.optimized.find(opt => !opt.isWebP);
            const optimizedFile = webpVersion || jpegVersion;
            
            if (optimizedFile) {
              const originalSize = fs.statSync(builtFile).size;
              
              // Copy optimized image over the built image
              fs.copyFileSync(optimizedFile.path, builtFile);
              
              const newSize = fs.statSync(builtFile).size;
              const sizeSaved = originalSize - newSize;
              totalSizeSaved += sizeSaved;
              replacedCount++;
              
              console.log(`   ✅ Replaced ${path.basename(builtFile)} (saved ${(sizeSaved/1024).toFixed(1)}KB)`);
            }
          }
        }
      } catch (error) {
        console.warn(`   ⚠️ Could not replace ${replacement.original}:`, error.message);
      }
    }
    
    this.usageReport.replacedImages = replacedCount;
    this.usageReport.sizeSaved = totalSizeSaved;
  }

  // Find built image files (with hashes)
  findBuiltImageFiles(buildDir, originalFileName) {
    const files = [];
    
    if (!fs.existsSync(buildDir)) {
      return files;
    }
    
    const buildFiles = fs.readdirSync(buildDir);
    const baseName = path.parse(originalFileName).name;
    
    for (const file of buildFiles) {
      // Match files that start with the base name (before hash)
      if (file.includes(baseName) && /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        files.push(path.join(buildDir, file));
      }
    }
    
    return files;
  }

  // Generate build report
  generateBuildReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildOptimization: this.usageReport,
      recommendations: []
    };
    
    console.log('\n📊 Build Optimization Report');
    console.log('='.repeat(40));
    console.log(`📄 Total optimized images available: ${this.usageReport.totalImages}`);
    console.log(`✅ Images used in code: ${this.usageReport.usedImages}`);
    console.log(`❌ Images replaced in build: ${this.usageReport.replacedImages}`);
    console.log(`💾 Total size saved: ${(this.usageReport.sizeSaved/1024/1024).toFixed(2)} MB`);
    
    if (this.usageReport.unusedImages > 0) {
      report.recommendations.push(`Consider removing ${this.usageReport.unusedImages} unused optimized images`);
      console.log(`⚠️  Unused optimized images: ${this.usageReport.unusedImages}`);
    }
    
    if (this.usageReport.replacedImages < this.usageReport.usedImages) {
      const missed = this.usageReport.usedImages - this.usageReport.replacedImages;
      report.recommendations.push(`${missed} images could not be replaced in build`);
      console.log(`⚠️  Images not replaced: ${missed}`);
    }
    
    // Save report
    fs.writeFileSync('build-optimization-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Report saved to: build-optimization-report.json');
  }

  // Create optimized images if they don't exist
  async ensureOptimizedImages() {
    if (!fs.existsSync(this.optimizedDir)) {
      console.log('📷 Optimized images not found. Creating them now...');
      const { optimizeImages } = require('./optimize-images.js');
      await optimizeImages();
    }
  }
}

// CLI interface
if (require.main === module) {
  const optimizer = new BuildImageOptimizer();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'analyze':
      optimizer.analyzeImageUsage();
      break;
    case 'build':
      optimizer.optimizeBuild();
      break;
    case 'ensure':
      optimizer.ensureOptimizedImages();
      break;
    default:
      console.log('Usage:');
      console.log('  node build-image-optimizer.js analyze  - Analyze image usage');
      console.log('  node build-image-optimizer.js build    - Run optimized build');
      console.log('  node build-image-optimizer.js ensure   - Ensure optimized images exist');
  }
}

module.exports = BuildImageOptimizer;

