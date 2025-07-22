const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Post-build image optimization and replacement system
class PostBuildOptimizer {
  constructor() {
    this.buildDir = 'build';
    this.staticMediaDir = path.join(this.buildDir, 'static', 'media');
    this.buildAssetsDir = path.join(this.buildDir, 'static', 'media');
    this.publicAssetsDir = path.join(this.buildDir, 'assets');
    this.optimizedSourceDir = 'public/assets/img/optimized';
    this.originalSourceDir = 'public/assets/img';
    this.replacements = [];
    this.stats = {
      totalFiles: 0,
      optimizedFiles: 0,
      sizeSaved: 0,
      errors: 0
    };
  }

  // Main function to optimize build images
  async optimizeBuildImages() {
    console.log('🚀 Starting post-build image optimization...');
    
    if (!fs.existsSync(this.buildDir)) {
      console.error('❌ Build directory not found. Run "npm run build" first.');
      return false;
    }

    // Step 1: Replace images in static/media (bundled by React)
    await this.replaceStaticMediaImages();
    
    // Step 2: Replace images in assets folder (public assets)
    await this.replacePublicAssets();
    
    // Step 3: Clean up build directory
    console.log('\n🧽 Cleaning build directory...');
    const BuildCleaner = require('./clean-build.js');
    const cleaner = new BuildCleaner();
    cleaner.cleanBuild();
    
    // Step 4: Generate report
    this.generateOptimizationReport();
    
    return true;
  }

  // Replace images in build/static/media (React bundled images)
  async replaceStaticMediaImages() {
    console.log('\n🔄 Optimizing React bundled images...');
    
    if (!fs.existsSync(this.staticMediaDir)) {
      console.log('   No static/media directory found, skipping...');
      return;
    }

    const mediaFiles = fs.readdirSync(this.staticMediaDir);
    const imageFiles = mediaFiles.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    console.log(`   Found ${imageFiles.length} image files in static/media`);
    this.stats.totalFiles += imageFiles.length;

    for (const imageFile of imageFiles) {
      const filePath = path.join(this.staticMediaDir, imageFile);
      
      try {
        // Find the best optimized version for this image
        const optimizedVersion = await this.findOptimizedVersion(imageFile);
        
        if (optimizedVersion) {
          const originalSize = fs.statSync(filePath).size;
          
          // Replace with optimized version
          fs.copyFileSync(optimizedVersion.path, filePath);
          
          const newSize = fs.statSync(filePath).size;
          const sizeSaved = originalSize - newSize;
          
          this.stats.optimizedFiles++;
          this.stats.sizeSaved += sizeSaved;
          
          console.log(`   ✅ ${imageFile} -> ${optimizedVersion.type} (saved ${(sizeSaved/1024).toFixed(1)}KB)`);
        } else {
          // No optimized version found, optimize on-the-fly
          const sizeSaved = await this.optimizeImageInPlace(filePath);
          
          if (sizeSaved > 0) {
            this.stats.optimizedFiles++;
            this.stats.sizeSaved += sizeSaved;
            console.log(`   ✅ ${imageFile} -> on-the-fly optimization (saved ${(sizeSaved/1024).toFixed(1)}KB)`);
          }
        }
      } catch (error) {
        console.warn(`   ⚠️ Could not optimize ${imageFile}:`, error.message);
        this.stats.errors++;
      }
    }
  }

  // Replace images in build/assets (public folder images)
  async replacePublicAssets() {
    console.log('\n🔄 Optimizing public assets...');
    
    const assetsImgDir = path.join(this.publicAssetsDir, 'img');
    
    if (!fs.existsSync(assetsImgDir)) {
      console.log('   No assets/img directory found, skipping...');
      return;
    }

    await this.replaceImagesInDirectory(assetsImgDir);
  }

  // Recursively replace images in a directory
  async replaceImagesInDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory() && file.name !== 'optimized') {
        await this.replaceImagesInDirectory(fullPath);
      } else if (file.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
        try {
          this.stats.totalFiles++;
          
          // Find corresponding optimized version
          const relativePath = path.relative(path.join(this.buildDir, 'assets', 'img'), fullPath);
          const optimizedPath = this.findOptimizedAssetPath(relativePath);
          
          if (optimizedPath && fs.existsSync(optimizedPath)) {
            const originalSize = fs.statSync(fullPath).size;
            
            // Replace with optimized version
            fs.copyFileSync(optimizedPath, fullPath);
            
            const newSize = fs.statSync(fullPath).size;
            const sizeSaved = originalSize - newSize;
            
            this.stats.optimizedFiles++;
            this.stats.sizeSaved += sizeSaved;
            
            console.log(`   ✅ ${relativePath} (saved ${(sizeSaved/1024).toFixed(1)}KB)`);
          } else {
            // Optimize in place if no pre-optimized version exists
            const sizeSaved = await this.optimizeImageInPlace(fullPath);
            
            if (sizeSaved > 0) {
              this.stats.optimizedFiles++;
              this.stats.sizeSaved += sizeSaved;
              console.log(`   ✅ ${relativePath} -> optimized in-place (saved ${(sizeSaved/1024).toFixed(1)}KB)`);
            }
          }
        } catch (error) {
          console.warn(`   ⚠️ Could not optimize ${file.name}:`, error.message);
          this.stats.errors++;
        }
      }
    }
  }

  // Find the best optimized version for a React bundled image
  async findOptimizedVersion(hashedImageFile) {
    if (!fs.existsSync(this.optimizedSourceDir)) {
      return null;
    }

    // Extract base name from hashed filename (React adds hashes like "image.abc123.png")
    const cleanName = this.extractOriginalImageName(hashedImageFile);
    
    if (!cleanName) return null;

    // Search for optimized versions
    const optimizedVersions = this.findOptimizedFiles(cleanName);
    
    // Prefer WebP, then JPEG, then optimized PNG
    for (const type of ['webp', 'jpg', 'jpeg']) {
      const version = optimizedVersions.find(v => v.type === type);
      if (version) return version;
    }
    
    return null;
  }

  // Extract original image name from React's hashed filename
  extractOriginalImageName(hashedFile) {
    // React creates files like: "original-name.abc123.png" or "original-name.abc123def456.png"
    // We need to extract "original-name.png"
    
    const match = hashedFile.match(/^(.+?)\.[a-f0-9]{8,}\.(\w+)$/i);
    if (match) {
      return `${match[1]}.${match[2]}`;
    }
    
    // If no hash pattern found, return as-is
    return hashedFile;
  }

  // Find all optimized versions of an image
  findOptimizedFiles(originalName) {
    const versions = [];
    const baseName = path.parse(originalName).name;
    
    // Search recursively in optimized directory
    const searchDir = (dir, relativePath = '') => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        const currentRelativePath = path.join(relativePath, file.name);
        
        if (file.isDirectory()) {
          searchDir(fullPath, currentRelativePath);
        } else if (file.isFile()) {
          const fileName = path.parse(file.name).name;
          const fileExt = path.parse(file.name).ext.toLowerCase();
          
          if (fileName === baseName && ['.webp', '.jpg', '.jpeg'].includes(fileExt)) {
            versions.push({
              path: fullPath,
              type: fileExt.substring(1), // Remove the dot
              size: fs.statSync(fullPath).size
            });
          }
        }
      }
    };
    
    searchDir(this.optimizedSourceDir);
    return versions;
  }

  // Find optimized asset path for public assets
  findOptimizedAssetPath(relativePath) {
    const optimizedPath = path.join(this.optimizedSourceDir, relativePath);
    
    // Try WebP first, then JPEG
    const webpPath = optimizedPath.replace(/\.[^.]+$/, '.webp');
    const jpegPath = optimizedPath.replace(/\.[^.]+$/, '.jpg');
    
    if (fs.existsSync(webpPath)) return webpPath;
    if (fs.existsSync(jpegPath)) return jpegPath;
    
    return null;
  }

  // Optimize image in place using Sharp
  async optimizeImageInPlace(imagePath) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      const tempPath = imagePath + '.tmp';
      
      const image = sharp(imagePath);
      const metadata = await image.metadata();
      
      // Apply optimization based on file type
      let optimized;
      const ext = path.extname(imagePath).toLowerCase();
      
      if (ext === '.png') {
        // Convert PNG to high-quality JPEG for better compression
        optimized = image.jpeg({ quality: 85, progressive: true });
      } else if (['.jpg', '.jpeg'].includes(ext)) {
        // Optimize JPEG
        optimized = image.jpeg({ quality: 85, progressive: true });
      } else {
        // For other formats, apply general optimization
        optimized = image.jpeg({ quality: 85 });
      }
      
      // Resize if too large
      if (metadata.width > 1920 || metadata.height > 1080) {
        optimized = optimized.resize(1920, 1080, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }
      
      await optimized.toFile(tempPath);
      
      const newSize = fs.statSync(tempPath).size;
      
      // Only replace if we achieved compression
      if (newSize < originalSize) {
        fs.renameSync(tempPath, imagePath);
        return originalSize - newSize;
      } else {
        fs.unlinkSync(tempPath);
        return 0;
      }
    } catch (error) {
      console.warn(`Could not optimize ${imagePath}:`, error.message);
      return 0;
    }
  }

  // Generate optimization report
  generateOptimizationReport() {
    console.log('\n📊 Post-Build Optimization Report');
    console.log('='.repeat(45));
    console.log(`📁 Total images processed: ${this.stats.totalFiles}`);
    console.log(`✅ Images optimized: ${this.stats.optimizedFiles}`);
    console.log(`💾 Total size saved: ${(this.stats.sizeSaved / 1024 / 1024).toFixed(2)} MB`);
    
    if (this.stats.errors > 0) {
      console.log(`⚠️ Errors encountered: ${this.stats.errors}`);
    }
    
    const optimizationRate = this.stats.totalFiles > 0 ? 
      ((this.stats.optimizedFiles / this.stats.totalFiles) * 100).toFixed(1) : 0;
    console.log(`📈 Optimization rate: ${optimizationRate}%`);
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      buildOptimization: {
        totalFiles: this.stats.totalFiles,
        optimizedFiles: this.stats.optimizedFiles,
        sizeSavedBytes: this.stats.sizeSaved,
        sizeSavedMB: (this.stats.sizeSaved / 1024 / 1024).toFixed(2),
        optimizationRate: optimizationRate,
        errors: this.stats.errors
      },
      recommendations: []
    };
    
    if (this.stats.optimizedFiles < this.stats.totalFiles) {
      report.recommendations.push('Some images could not be optimized - consider pre-generating optimized versions');
    }
    
    if (this.stats.sizeSaved > 5 * 1024 * 1024) { // 5MB+
      report.recommendations.push('Excellent optimization achieved! Users will experience significantly faster loading.');
    }
    
    fs.writeFileSync('build-optimization-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to: build-optimization-report.json');
    
    if (this.stats.optimizedFiles > 0) {
      console.log('\n🎉 Build optimization complete! Your images are now optimized for production.');
    }
  }
}

// CLI interface
if (require.main === module) {
  const optimizer = new PostBuildOptimizer();
  optimizer.optimizeBuildImages().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = PostBuildOptimizer;

