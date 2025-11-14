import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ id, name, description, price, maxPrice, discount, isNew, isFeatured, colors = [], image, slug, layout = 'grid' }) => {
  // State for handling image errors
  const [imageError, setImageError] = useState(false);
  const [selectedColorImage, setSelectedColorImage] = useState(
    colors.length > 0 ? (colors[0]?.image || image) : image
  );

  // Sử dụng ảnh đầu tiên trong colors làm ảnh chính
  const mainImage = colors.length > 0 ? (colors[0]?.image || image) : image;
  const [isHovered, setIsHovered] = useState(false);

  // Tất cả ảnh từ colors array
  const allImages = colors;

  // Convert to proper image URL - giống như trang san-pham/[slug]
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '/images/placeholder.jpg';
    
    // If already a full URL (http/https), return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    // If path already starts with /, return as is (it's already a local path)
    if (imagePath.startsWith('/')) {
      return imagePath;
    }
    
    // Otherwise prepend / for local paths
    return `/${imagePath}`;
  };

  const handleColorChange = (img) => {
    setSelectedColorImage(img);
    setImageError(false); // Reset error when changing color
  };

  // Format price to Vietnamese currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="group relative bg-gray-50 rounded-xl overflow-hidden transition-all duration-300  border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
        <Image 
          src={imageError ? '/images/placeholder.jpg' : getImageUrl(selectedColorImage || mainImage)} 
          alt={name} 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-500" 
          sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
          onError={handleImageError}
          unoptimized={getImageUrl(selectedColorImage || mainImage).startsWith('http://') || getImageUrl(selectedColorImage || mainImage).startsWith('https://')}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-3 md:p-4 bg-white">
        {/* Color Options */}
        <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-3">
          {allImages.length > 0 && allImages.slice(0, 5).map((color, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                handleColorChange(color.image);
              }}
              className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-all duration-300 hover:scale-110 ${selectedColorImage === color.image ? 'border-gray-800 scale-110 shadow-md' : 'border-gray-300'}`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`Chọn màu ${color.name}`}
            />
          ))}
        </div>
          
        {/* Product Name */}
        <Link href={`/san-pham/${slug}`} legacyBehavior>
          <a>
            <h3 className="text-xs md:text-sm lg:text-base font-bold text-gray-900  line-clamp-2 mb-1 hover:text-[#105d97] transition-colors cursor-pointer">
              {name}
            </h3>
          </a>
        </Link>

        {/* Price */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-base md:text-lg font-bold text-[#105d97]">
            {formatPrice(price)}
          </span>
          {maxPrice && maxPrice > price && (
            <span className="text-xs md:text-sm text-gray-400 line-through">
              {formatPrice(maxPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
