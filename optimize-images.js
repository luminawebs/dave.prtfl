const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const INPUT_DIR = 'public/assets/img';
const OUTPUT_DIR = 'public/assets/img/optimized';
const LARGE_FILE_THRESHOLD = 1; // 1MB

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / (1024 * 1024);
}

// Function to optimize image with Sharp
async function optimizeImage(inputPath, outputPath) {
  try {
    console.log(`Optimizing: ${inputPath}`);
    
    // Get metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, ${getFileSizeMB(inputPath).toFixed(2)} MB`);
    
    // Create output directory
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Determine optimal dimensions
    let targetWidth = metadata.width;
    let targetHeight = metadata.height;
    
    // Resize if too large
    if (metadata.width > 1920 || metadata.height > 1080) {
      console.log('Resizing to reasonable dimensions...');
      targetWidth = Math.min(1920, metadata.width);
      targetHeight = Math.min(1080, metadata.height);
    }
    
    // Create WebP version (best compression)
    const webpPath = outputPath.replace(/\.[^.]+$/, '.webp');
    await sharp(inputPath)
      .resize(targetWidth, targetHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality: 85 })
      .toFile(webpPath);
    
    // Create JPEG fallback
    const jpegPath = outputPath.replace(/\.[^.]+$/, '.jpg');
    await sharp(inputPath)
      .resize(targetWidth, targetHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ quality: 85 })
      .toFile(jpegPath);
    
    console.log(`✅ Created optimized versions:`);
    console.log(`   WebP: ${getFileSizeMB(webpPath).toFixed(2)} MB`);
    console.log(`   JPEG: ${getFileSizeMB(jpegPath).toFixed(2)} MB`);
    
    return { webpPath, jpegPath };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    throw error;
  }
}

// Function to find all image files
function findImages(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && item !== 'optimized') {
      files.push(...findImages(fullPath));
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main optimization function
async function optimizeImages() {
  try {
    console.log('🚀 Starting image optimization...');
    
    if (!fs.existsSync(INPUT_DIR)) {
      console.error(`❌ Input directory doesn't exist: ${INPUT_DIR}`);
      return;
    }
    
    const imageFiles = findImages(INPUT_DIR);
    console.log(`📁 Found ${imageFiles.length} image files`);
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    // Process each image
    for (const imagePath of imageFiles) {
      const fileSize = getFileSizeMB(imagePath);
      totalOriginalSize += fileSize;
      
      const relativePath = path.relative(INPUT_DIR, imagePath);
      const outputPath = path.join(OUTPUT_DIR, relativePath);
      
      console.log(`\n📷 Processing: ${relativePath} (${fileSize.toFixed(2)} MB)`);
      
      try {
        const result = await optimizeImage(imagePath, outputPath);
        
        // Calculate optimized size (using WebP as primary)
        const optimizedSize = getFileSizeMB(result.webpPath);
        totalOptimizedSize += optimizedSize;
        
      } catch (error) {
        console.error(`❌ Failed to optimize ${imagePath}:`, error.message);
        continue;
      }
    }
    
    console.log('\n🎉 Image optimization complete!');
    console.log(`📊 Total original size: ${totalOriginalSize.toFixed(2)} MB`);
    console.log(`📊 Total optimized size: ${totalOptimizedSize.toFixed(2)} MB`);
    console.log(`💾 Size reduction: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
    console.log(`📁 Optimized images are in: ${OUTPUT_DIR}`);
    
  } catch (error) {
    console.error('❌ Error during image optimization:', error);
    process.exit(1);
  }
}

// Run optimization
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages, optimizeImage };

