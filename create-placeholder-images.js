/**
 * Script tạo file placeholder cho ảnh sản phẩm
 * Chạy: node create-placeholder-images.js
 * 
 * Script này sẽ tạo các file placeholder text để website không bị lỗi
 * Sau đó bạn có thể thay thế bằng ảnh thật
 */

const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'public', 'images', 'products');

// Danh sách ảnh cần tạo (từ products.json mới)
const imageFiles = [
  // Đồng phục Gym
  'dpgym-001-black.jpg',
  'dpgym-001-gray.jpg',
  'dpgym-001-blue.jpg',
  
  // Đồng phục Yoga - Pilates
  'dpyoga-002-purple.jpg',
  'dpyoga-002-pink.jpg',
  'dpyoga-002-green.jpg',
  
  // Đồng phục Pickleball
  'dppb-003-red.jpg',
  'dppb-003-blue.jpg',
  'dppb-003-yellow.jpg',
  'dppb-003-green.jpg',
  
  // Đồng phục Chạy bộ
  'dprun-004-orange.jpg',
  'dprun-004-navy.jpg',
  'dprun-004-blackred.jpg',
  
  // Đồng phục MMA
  'dpmma-005-black.jpg',
  'dpmma-005-redblack.jpg',
  'dpmma-005-blueblack.jpg',
  
  // Đồng phục áo Polo
  'dppolo-006-white.jpg',
  'dppolo-006-blue.jpg',
  'dppolo-006-crimson.jpg',
  'dppolo-006-gray.jpg',
  'dppolo-006-black.jpg',
  
  // Đồng phục công sở
  'dpcs-007-white.jpg',
  'dpcs-007-navy.jpg',
  'dpcs-007-black.jpg',
  'dpcs-007-lightgray.jpg',
  
  // Đồng phục Team building
  'dptb-008-red.jpg',
  'dptb-008-blue.jpg',
  'dptb-008-yellow.jpg',
  'dptb-008-orange.jpg',
  'dptb-008-green.jpg',
];

// Đảm bảo thư mục tồn tại
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
  console.log('✅ Đã tạo thư mục:', productsDir);
}

// Tạo file placeholder
let createdCount = 0;
let skippedCount = 0;

imageFiles.forEach(filename => {
  const filepath = path.join(productsDir, filename);
  
  // Chỉ tạo nếu file chưa tồn tại
  if (!fs.existsSync(filepath)) {
    // Tạo file placeholder text (sẽ không hiển thị được nhưng tránh lỗi 404)
    const placeholderContent = `PLACEHOLDER IMAGE: ${filename}

Đây là file placeholder. 
Vui lòng thay thế bằng ảnh thật với tên: ${filename}

Kích thước khuyến nghị: 1000x1000px
Format: JPG hoặc PNG
`;
    
    fs.writeFileSync(filepath, placeholderContent, 'utf8');
    console.log(`📝 Đã tạo placeholder: ${filename}`);
    createdCount++;
  } else {
    console.log(`⏭️  Bỏ qua (đã tồn tại): ${filename}`);
    skippedCount++;
  }
});

console.log('\n' + '='.repeat(50));
console.log(`✅ Hoàn thành!`);
console.log(`   - Đã tạo: ${createdCount} file`);
console.log(`   - Đã bỏ qua: ${skippedCount} file`);
console.log(`   - Tổng: ${imageFiles.length} file`);
console.log('='.repeat(50));
console.log('\n⚠️  LƯU Ý:');
console.log('   Các file placeholder này CHỈ để tránh lỗi 404.');
console.log('   Bạn cần thay thế bằng ảnh JPG/PNG thật.');
console.log('\n📁 Thư mục ảnh:', productsDir);
console.log('\n📖 Xem hướng dẫn chi tiết tại:');
console.log('   - QUICK_START_LOCAL_PRODUCTS.md');
console.log('   - HUONG_DAN_SAN_PHAM_LOCAL.md');
console.log('');
