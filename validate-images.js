const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Image validation script
class ImageValidator {
  constructor() {
    this.srcDir = 'src';
    this.publicDir = 'public';
    this.assetsDir = 'public/assets/img';
    this.optimizedDir = 'public/assets/img/optimized';
    this.missingImages = [];
    this.validImages = [];
  }

  // Find all image references in the codebase
  findImageReferences() {
    const references = new Set();
    this.scanDirectory(this.srcDir, references);
    this.scanDirectory(this.publicDir, references, ['index.html']);
    return Array.from(references);
  }

  // Scan directory for image references
  scanDirectory(dir, references, specificFiles = null) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory() && !file.name.includes('node_modules') && !file.name.includes('.git')) {
        this.scanDirectory(fullPath, references, specificFiles);
      } else if (file.isFile()) {
        if (specificFiles && !specificFiles.includes(file.name)) {
          continue;
        }
        
        if (/\.(js|jsx|ts|tsx|html|json|css|scss)$/i.test(file.name)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            this.extractImageReferences(content, references);
          } catch (error) {
            console.warn(`Warning: Could not read ${fullPath}:`, error.message);
          }
        }
      }
    }
  }

  // Extract image references from content
  extractImageReferences(content, references) {
    const patterns = [
      /["']([^"']*\/assets\/img\/[^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi,
      /["']([^"']*assets\/img\/[^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi,
      /src=["']([^"']*assets\/img\/[^"']*\.(jpg|jpeg|png|gif|webp|svg))["']/gi,
      /assets\/img\/[^\s"',)]+\.(jpg|jpeg|png|gif|webp|svg)/gi
    ];
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        let imagePath = match[1] || match[0];
        
        // Skip if it's a full URL (contains http/https)
        if (imagePath.includes('http://') || imagePath.includes('https://')) {
          continue;
        }
        
        // Skip if it's just a file extension without a proper path
        if (imagePath.match(/^assets\/(svg|png|webp|jpg|jpeg|gif)$/i)) {
          continue;
        }
        
        // Normalize path
        imagePath = imagePath.replace(/^\/+/, '');
        if (!imagePath.startsWith('assets/')) {
          imagePath = imagePath.replace(/^img\//, 'assets/img/');
        }
        if (!imagePath.startsWith('assets/')) {
          imagePath = 'assets/' + imagePath;
        }
        
        // Only add if it's a valid path with filename
        if (imagePath.includes('/') && imagePath.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
          references.add(imagePath);
        }
      }
    });
  }

  // Check if image exists in filesystem
  imageExists(imagePath) {
    // Remove 'assets/' prefix and check in public/assets/
    const publicPath = path.join('public', imagePath);
    return fs.existsSync(publicPath);
  }

  // Get optimized version info
  getOptimizedVersions(imagePath) {
    const optimizedPath = imagePath.replace('assets/img/', 'assets/img/optimized/');
    const basePath = optimizedPath.replace(/\.[^.]+$/, '');
    
    const webpPath = basePath + '.webp';
    const jpegPath = basePath + '.jpg';
    
    return {
      webp: fs.existsSync(path.join('public', webpPath)),
      jpeg: fs.existsSync(path.join('public', jpegPath)),
      webpPath,
      jpegPath
    };
  }

  // Main validation function
  validateImages() {
    console.log('🔍 Validating image references...');
    
    const references = this.findImageReferences();
    console.log(`📄 Found ${references.length} image references`);
    
    for (const imagePath of references) {
      const exists = this.imageExists(imagePath);
      const optimized = this.getOptimizedVersions(imagePath);
      
      if (exists) {
        this.validImages.push({
          path: imagePath,
          exists: true,
          optimized: optimized.webp || optimized.jpeg,
          versions: optimized
        });
        console.log(`✅ ${imagePath} - ${optimized.webp || optimized.jpeg ? 'Optimized' : 'Original only'}`);
      } else {
        this.missingImages.push({
          path: imagePath,
          exists: false,
          optimized: optimized.webp || optimized.jpeg,
          versions: optimized
        });
        console.log(`❌ ${imagePath} - MISSING`);
      }
    }
    
    this.generateReport();
  }

  // Generate validation report
  generateReport() {
    console.log('\n📊 Image Validation Report');
    console.log('='.repeat(50));
    console.log(`✅ Valid images: ${this.validImages.length}`);
    console.log(`❌ Missing images: ${this.missingImages.length}`);
    
    if (this.missingImages.length > 0) {
      console.log('\n🚨 Missing Images:');
      this.missingImages.forEach(img => {
        console.log(`   - ${img.path}`);
      });
      
      console.log('\n💡 Suggestions:');
      console.log('1. Check if the image files exist in the correct location');
      console.log('2. Verify the image paths in your code are correct');
      console.log('3. Run "npm run optimize-images" to create optimized versions');
    }
    
    // Count optimized images
    const optimizedCount = this.validImages.filter(img => img.optimized).length;
    console.log(`\n📈 Optimized images: ${optimizedCount}/${this.validImages.length}`);
    
    if (optimizedCount < this.validImages.length) {
      console.log('\n💡 To optimize remaining images, run: npm run optimize-images');
    }
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalReferences: this.validImages.length + this.missingImages.length,
        validImages: this.validImages.length,
        missingImages: this.missingImages.length,
        optimizedImages: optimizedCount
      },
      validImages: this.validImages,
      missingImages: this.missingImages
    };
    
    fs.writeFileSync('image-validation-report.json', JSON.stringify(report, null, 2));
    console.log('\n💾 Detailed report saved to: image-validation-report.json');
  }
}

// CLI interface
if (require.main === module) {
  const validator = new ImageValidator();
  validator.validateImages();
}

module.exports = ImageValidator;

