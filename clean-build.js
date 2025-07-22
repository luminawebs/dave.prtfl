const fs = require('fs');
const path = require('path');

// Clean build directory of development artifacts
class BuildCleaner {
  constructor() {
    this.buildDir = 'build';
    this.assetsDir = path.join(this.buildDir, 'assets');
    this.imgDir = path.join(this.assetsDir, 'img');
    this.optimizedDir = path.join(this.imgDir, 'optimized');
  }

  // Clean unnecessary files from build
  cleanBuild() {
    console.log('🧽 Cleaning build directory...');
    
    if (!fs.existsSync(this.buildDir)) {
      console.log('⚠️ Build directory not found, nothing to clean.');
      return;
    }

    let cleaned = 0;

    // Remove optimized folder from build (it shouldn't be there in production)
    if (fs.existsSync(this.optimizedDir)) {
      console.log('   Removing optimized folder from build...');
      this.removeDirectory(this.optimizedDir);
      cleaned++;
    }

    // Remove any .tmp files
    this.removeTempFiles(this.buildDir);
    cleaned += this.tempFilesRemoved;

    // Remove source maps in production (optional)
    if (process.env.NODE_ENV === 'production') {
      this.removeSourceMaps();
      cleaned += this.sourceMapsRemoved;
    }

    console.log(`✅ Build cleanup complete! Removed ${cleaned} items.`);
  }

  // Recursively remove directory
  removeDirectory(dir) {
    if (fs.existsSync(dir)) {
      fs.readdirSync(dir).forEach((file) => {
        const curPath = path.join(dir, file);
        if (fs.lstatSync(curPath).isDirectory()) {
          this.removeDirectory(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(dir);
      console.log(`   ❌ Removed: ${path.relative(this.buildDir, dir)}`);
    }
  }

  // Remove temporary files
  removeTempFiles(dir) {
    this.tempFilesRemoved = 0;
    this.removeTempFilesRecursive(dir);
  }

  removeTempFilesRecursive(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.removeTempFilesRecursive(fullPath);
      } else if (file.name.endsWith('.tmp') || file.name.startsWith('.DS_Store')) {
        fs.unlinkSync(fullPath);
        console.log(`   ❌ Removed temp file: ${path.relative(this.buildDir, fullPath)}`);
        this.tempFilesRemoved++;
      }
    }
  }

  // Remove source maps (optional for production)
  removeSourceMaps() {
    this.sourceMapsRemoved = 0;
    const staticDir = path.join(this.buildDir, 'static');
    
    if (fs.existsSync(staticDir)) {
      this.removeSourceMapsRecursive(staticDir);
    }
  }

  removeSourceMapsRecursive(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        this.removeSourceMapsRecursive(fullPath);
      } else if (file.name.endsWith('.map')) {
        fs.unlinkSync(fullPath);
        console.log(`   ❌ Removed source map: ${file.name}`);
        this.sourceMapsRemoved++;
      }
    }
  }

  // Get build size information
  getBuildStats() {
    if (!fs.existsSync(this.buildDir)) {
      return null;
    }

    const stats = this.getDirectorySize(this.buildDir);
    
    console.log('\n📊 Build Statistics:');
    console.log(`   Total size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Total files: ${stats.files}`);
    
    // Get image stats if assets exist
    if (fs.existsSync(this.imgDir)) {
      const imgStats = this.getDirectorySize(this.imgDir);
      console.log(`   Images size: ${(imgStats.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Image files: ${imgStats.files}`);
    }

    return stats;
  }

  getDirectorySize(dir) {
    let size = 0;
    let files = 0;

    const calculateSize = (directory) => {
      if (!fs.existsSync(directory)) return;
      
      const items = fs.readdirSync(directory, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(directory, item.name);
        
        if (item.isDirectory()) {
          calculateSize(fullPath);
        } else {
          const stats = fs.statSync(fullPath);
          size += stats.size;
          files++;
        }
      }
    };

    calculateSize(dir);
    return { size, files };
  }
}

// CLI interface
if (require.main === module) {
  const cleaner = new BuildCleaner();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'clean':
      cleaner.cleanBuild();
      break;
    case 'stats':
      cleaner.getBuildStats();
      break;
    default:
      cleaner.cleanBuild();
      cleaner.getBuildStats();
  }
}

module.exports = BuildCleaner;

