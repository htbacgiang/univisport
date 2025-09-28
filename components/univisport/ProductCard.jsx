import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ id, name, description, price, originalPrice, discount, isNew, isFeatured, colors = [], image, slug, layout }) => {
  const [selectedColorImage, setSelectedColorImage] = useState(image);
  const [isHovered, setIsHovered] = useState(false);

  const handleColorChange = (img) => {
    setSelectedColorImage(img);
  };

  return (
    <div 
      className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${layout === 'list' ? 'flex' : 'block'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {layout === 'list' ? (
        <>
          {/* Image */}
          <div className="relative md:w-1/6 w-2/4 aspect-[3/4] overflow-hidden">
            <Image 
              src={selectedColorImage} 
              alt={name} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 left-3 flex flex-col space-y-2">
              {isNew && (
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                  Mới
                </span>
              )}
              {discount > 0 && (
                <span className="bg-gradient-to-r from-[#105d97] to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  -{discount}% OFF
                </span>
              )}
              {isFeatured && (
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  Nổi Bật
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="w-2/3 p-6 flex flex-col justify-between">
            <div>
              <Link href={`/san-pham/${slug}`} legacyBehavior>
                <a className="group/link">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-1 mb-3 group-hover/link:text-[#105d97] transition-colors duration-300">
                    {name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                    {description || 'Không có mô tả sản phẩm.'}
                  </p>
                </a>
              </Link>

            </div>

            {/* Colors */}
            <div className="flex justify-start space-x-2 py-3">
              {Array.isArray(colors) && colors.length > 0 ? (
                colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorChange(color.image);
                    }}
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-300 hover:scale-110 ${selectedColorImage === color.image ? 'border-gray-800 scale-110 shadow-lg' : 'border-gray-400 shadow-sm'}`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Chọn màu ${color.name}`}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-sm">Không có màu sắc</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href={`/san-pham/${slug}`} legacyBehavior>
            <a className="block">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image 
                  src={selectedColorImage} 
                  alt={name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {isNew && (
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                      Mới
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="bg-gradient-to-r from-[#105d97] to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      -{discount}% OFF
                    </span>
                  )}
                  {isFeatured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      Nổi Bật
                    </span>
                  )}
                </div>
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    Xem chi tiết
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mb-2 group-hover:text-[#105d97] transition-colors duration-300">
                  {name}
                </h3>
              </div>
            </a>
          </Link>


          {/* Colors */}
          <div className="flex justify-center space-x-2 py-3 px-4">
            {Array.isArray(colors) && colors.length > 0 ? (
              colors.map((color) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault();
                    handleColorChange(color.image);
                  }}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 hover:scale-110 ${selectedColorImage === color.image ? 'border-gray-800 scale-110 shadow-lg' : 'border-gray-400 shadow-sm'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Chọn màu ${color.name}`}
                />
              ))
            ) : (
              <p className="text-gray-500 text-sm">Không có màu sắc</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;