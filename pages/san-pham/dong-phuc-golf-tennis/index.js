import ProductCard from '../../../components/univisport/ProductCard';
import DefaultLayout2 from '../../../components/layout/DefaultLayout2';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import BannerCarousel from '../../../components/univisport/BannerCarousel';
import GolfTennisUniviPage from '../../../components/univisport/bai-viet/GolfTennisUniviPage';
import { getProductsByCategory } from '../../../lib/getProductsByCategory';

// Hàm bỏ dấu tiếng Việt và chuẩn hóa slug
const removeDiacritics = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const categories = [
  'Đồng phục Gym', 'Đồng phục Yoga - Pilates', 'Đồng phục Pickleball',
  'Đồng phục Chạy bộ', 'Đồng phục MMA', 'Đồng phục Golf - Tennis',
  'Đồng phục áo Polo', 'Đồng phục công sở', 'Đồng phục Team building', 'Đồng phục Áo gió'
];

const DongPhucGolfTennis = ({ initialProducts }) => {
  const categorySlug = 'dong-phuc-golf-tennis';
  const displayCategory = categories.find(category =>
    removeDiacritics(category).toLowerCase().replace(/\s+/g, '-') === categorySlug
  ) || categorySlug.replace(/-/g, ' ').toUpperCase();

  const [products, setProducts] = useState(Array.isArray(initialProducts) ? initialProducts : []);
  const [sortOption, setSortOption] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const searchRef = useRef(null);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) setSearchQuery('');
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredProducts = (Array.isArray(initialProducts) ? initialProducts : []).filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setProducts(filteredProducts);
    setCurrentPage(1);
  };

  const handleSort = (e) => {
    const option = e.target.value;
    setSortOption(option);
    let sortedProducts = [...(Array.isArray(initialProducts) ? initialProducts : [])];
    if (option === 'price-asc') {
      sortedProducts.sort((a, b) => (a.maxPrice || a.price) - (b.maxPrice || b.price));
    } else if (option === 'price-desc') {
      sortedProducts.sort((a, b) => (b.maxPrice || b.price) - (a.maxPrice || a.price));
    }
    const filteredProducts = sortedProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
    setCurrentPage(1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Number of visible page links
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className="w-10 h-10 flex items-center justify-center text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-[#105d97] hover:text-white hover:border-[#105d97] transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span key="start-ellipsis" className="flex items-center justify-center w-10 h-10 text-gray-400 font-medium">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
            currentPage === i 
              ? 'bg-[#105d97] text-white border-[#105d97] shadow-lg' 
              : 'text-gray-600 bg-white border border-gray-300 hover:bg-[#105d97] hover:text-white hover:border-[#105d97]'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="end-ellipsis" className="flex items-center justify-center w-10 h-10 text-gray-400 font-medium">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className="w-10 h-10 flex items-center justify-center text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-[#105d97] hover:text-white hover:border-[#105d97] transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center mt-8 mb-6 relative z-10">
        <nav className="flex items-center space-x-1 p-2 relative z-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-[#105d97] hover:text-white hover:border-[#105d97] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:transform-none"
            aria-label="Trang trước"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-1 px-2">
            {pageNumbers}
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-[#105d97] hover:text-white hover:border-[#105d97] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:transform-none"
            aria-label="Trang tiếp theo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </div>
    );
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Đồng phục Golf & Tennis - Đồng phục Univi`,
    "description": `Khám phá bộ sưu tập đồng phục Golf & Tennis chất lượng cao từ Đồng phục Univi, thiết kế thanh lịch, thoải mái và chuyên nghiệp.`,
    "url": "https://dongphucunivi.com/san-pham/dong-phuc-golf-tennis",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": "https://dongphucunivi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sản phẩm",
          "item": "https://dongphucunivi.com/san-pham"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Đồng phục Golf & Tennis",
          "item": "https://dongphucunivi.com/san-pham/dong-phuc-golf-tennis"
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "url": `https://dongphucunivi.com/san-pham/${product.slug}`,
        "image": product.image,
        "description": product.description,
        "offers": {
          "@type": "Offer",
          "price": product.maxPrice || product.price,
          "priceCurrency": "VND",
          "availability": "https://schema.org/InStock"
        }
      }))
    }
  };

  return (
    <DefaultLayout2>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* Compact Banner Header */}
      <div className="relative w-full min-h-[300px] overflow-hidden">
        <Image
          src="/images/banner-univi.png"
          alt={`Đồng phục Golf & Tennis Đồng phục Univi - Bộ sưu tập thể thao chất lượng cao`}
          fill
          className="object-cover"
          priority
        />
        
        {/* Simple Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="px-6 md:px-10 lg:px-16 pb-8">
            
            {/* Breadcrumb */}
            <nav className="mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
                <span>/</span>
                <Link href="/san-pham" className="hover:text-white transition-colors">Sản phẩm</Link>
                <span>/</span>
                <span className="text-white font-medium">{displayCategory}</span>
              </div>
            </nav>

            {/* Title */}
            <div className="space-y-3">
              <p className="text-2xl md:text-4xl font-bold text-white">
                {displayCategory}
              </p>
              <p className="text-lg text-gray-200 max-w-4xl">
                Khám phá bộ sưu tập {displayCategory.toLowerCase()} mới nhất từ Đồng phục Univi, 
                thiết kế hiện đại và thoải mái.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-1/5 bg-gradient-to-br from-white to-gray-50 shadow-xl p-0 md:p-6 rounded-2xl h-fit border border-gray-100 backdrop-blur-sm">
            {/* Header Section */}
            <div className="relative mb-0 md:mb-6">
              <div 
                className="absolute -inset-1 rounded-lg blur opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #105d97 0%, #2563eb 100%)'
                }}
              ></div>
              <div className="relative bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p
                  className="text-lg font-bold flex items-center justify-between w-full cursor-pointer lg:cursor-default text-gray-800 uppercase tracking-wide"
                  onClick={toggleCategory}
                  aria-label="Mở hoặc đóng danh sách danh mục sản phẩm"
                >
                  <span className="flex items-center gap-2">
                    <div 
                      className="w-1 h-6 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #105d97 0%, #2563eb 100%)'
                      }}
                    ></div>
                    TẤT CẢ DANH MỤC
                  </span>
                  <span className="lg:hidden transition-transform duration-300 ease-in-out">
                    {isCategoryOpen ? 
                      <ChevronUp className="w-5 h-5 text-brand transform rotate-0" /> : 
                      <ChevronDown className="w-5 h-5 text-brand transform rotate-0" />
                    }
                  </span>
                </p>
              </div>
            </div>

            {/* Categories List */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isCategoryOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                } lg:max-h-full lg:opacity-100`}
            >
              <ul className="space-y-2 mb-6">
                {categories.map((category, index) => {
                  const categorySlugFromCategory = removeDiacritics(category).toLowerCase().replace(/\s+/g, '-');
                  const isActive = categorySlugFromCategory === categorySlug;
                  return (
                    <li key={index} className="group">
                      <Link 
                        href={`/san-pham/${categorySlugFromCategory}`} 
                        aria-current={isActive ? 'page' : undefined}
                        className="block"
                      >
                        <div
                          className={`relative overflow-hidden rounded-xl p-4 cursor-pointer transition-all duration-300 ease-in-out group-hover:transform group-hover:translate-x-2 group-hover:-translate-y-1 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 ${
                            isActive 
                              ? 'text-white shadow-lg transform scale-105' 
                              : 'text-gray-700 hover:text-brand bg-white hover:bg-gray-50'
                          }`}
                          style={{
                            background: isActive 
                              ? 'linear-gradient(135deg, #105d97 0%, #2563eb 100%)' 
                              : 'white'
                          }}
                        >
                          {/* Background Pattern - Only for non-active items */}
                          {!isActive && (
                            <div className="absolute inset-0 opacity-10 bg-brand">
                              <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-current opacity-20"></div>
                              <div className="absolute -left-2 -bottom-2 w-8 h-8 rounded-full bg-current opacity-30"></div>
                            </div>
                          )}
                          
                          {/* Content */}
                          <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                isActive 
                                  ? 'bg-white shadow-lg' 
                                  : 'bg-brand group-hover:bg-blue-500 group-hover:scale-125'
                              }`}></div>
                              <span className="font-semibold text-sm uppercase tracking-wide leading-tight">
                                {category}
                              </span>
                            </div>
                            <div className={`transition-all duration-300 transform ${
                              isActive 
                                ? 'text-white opacity-100 scale-100' 
                                : 'text-brand opacity-0 group-hover:opacity-100 group-hover:scale-100 translate-x-2 group-hover:translate-x-0'
                            }`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          
                          {/* Active Indicator */}
                          {isActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-lg"></div>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Divider */}
            <div className="relative mb-6 hidden md:block">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-gradient-to-r from-gray-50 to-white px-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-brand rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Carousel with Enhanced Styling */}
            <div className="relative hidden md:block">
              <div 
                className="absolute -inset-1 rounded-xl blur opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #105d97 0%, #2563eb 100%)'
                }}
              ></div>
              <div className="relative">
                <BannerCarousel />
              </div>
            </div>
          </aside>

          <main className="w-full lg:w-4/5">
            {/* Enhanced Controls Bar - Desktop Rich, Mobile Compact */}
            <div className="relative mb-8">
              {/* Background Gradient - Desktop Only */}
              <div 
                className="absolute -inset-1 rounded-2xl blur opacity-20 hidden lg:block"
                style={{
                  background: 'linear-gradient(135deg, #105d97 0%, #2563eb 50%, #7c3aed 100%)'
                }}
              ></div>
              
              {/* Mobile Compact Background */}
              <div 
                className="absolute -inset-0.5 rounded-xl blur opacity-10 lg:hidden"
                style={{
                  background: 'linear-gradient(135deg, #105d97 0%, #2563eb 100%)'
                }}
              ></div>
              
              {/* Main Controls Container */}
              <div className="relative bg-gradient-to-r from-white via-gray-50 to-white md:py-2 md:px-6 p-2 lg:rounded-2xl rounded-xl lg:shadow-xl shadow-md border border-gray-100 lg:backdrop-blur-sm">
                
                {/* Mobile Compact Layout - Enhanced */}
                <div className="lg:hidden">
                  {/* Top Controls Row */}
                  <div className="flex items-center justify-between gap-3 mb-0 md:mb-4 ">
                    {/* Left - Sort & Layout */}
                    <div className="flex items-center gap-3">
                      {/* Enhanced Sort Dropdown */}
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#105d97] to-blue-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
                        <div className="relative">
                          <select
                            value={sortOption}
                            onChange={handleSort}
                            className="appearance-none bg-white px-3 py-2.5 pr-8 border border-gray-200 rounded-lg focus:outline-none focus:border-[#105d97] focus:ring-2 focus:ring-blue-100 text-gray-700 text-sm font-medium cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
                            aria-label="Sắp xếp sản phẩm"
                          >
                            <option value="default">Sắp xếp</option>
                            <option value="price-asc">Giá: Thấp → Cao</option>
                            <option value="price-desc">Giá: Cao → Thấp</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#105d97] pointer-events-none transition-transform duration-200 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>

                    {/* Right - Enhanced Search Toggle */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#105d97] to-blue-500 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
                      <button
                        onClick={toggleSearch}
                        className={`relative p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          isSearchOpen 
                            ? 'bg-gradient-to-r from-[#105d97] to-blue-600 text-white shadow-lg' 
                            : 'bg-white text-gray-600 hover:text-[#105d97] border border-gray-200 hover:border-[#105d97] shadow-sm hover:shadow-md'
                        }`}
                        aria-label="Mở thanh tìm kiếm"
                      >
                        <Search className="w-5 h-5" />
                        {isSearchOpen && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl blur opacity-30 -z-10"></div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Mobile Search Input */}
                  <div
                    ref={searchRef}
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isSearchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#105d97] to-blue-500 rounded-xl blur opacity-20"></div>
                      <div className="relative bg-white rounded-xl p-1 shadow-lg border border-gray-100">
                        <input
                          type="text"
                          placeholder="Tìm kiếm đồng phục golf & tennis..."
                          value={searchQuery}
                          onChange={handleSearch}
                          className="w-full pl-10 pr-10 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white text-gray-700 placeholder-gray-500 transition-all duration-300"
                          aria-label="Tìm kiếm sản phẩm"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#105d97]" />
                        {searchQuery && (
                          <button
                            onClick={() => {
                              setSearchQuery('');
                              setProducts(Array.isArray(initialProducts) ? initialProducts : []);
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Mobile Results Counter */}
                  {searchQuery && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#105d97] rounded-full animate-pulse"></div>
                          <span className="text-sm text-[#105d97] font-medium">
                            Tìm thấy {products.length} sản phẩm
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Decorative Elements */}
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-indigo-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Desktop Rich Layout */}
                <div className="hidden lg:block">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                    
                    {/* Left Side - Sort and Layout Controls */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {/* Sort Dropdown */}
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#105d97] to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                        <div className="relative">
                          <select
                            value={sortOption}
                            onChange={handleSort}
                            className="appearance-none bg-white px-4 py-4 pr-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#105d97] focus:ring-4 focus:ring-blue-100 text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-300 min-w-[160px] cursor-pointer"
                            aria-label="Sắp xếp sản phẩm"
                          >
                            <option value="default">🔄 Sắp xếp</option>
                            <option value="price-asc">Giá: Thấp → Cao</option>
                            <option value="price-desc">Giá: Cao → Thấp</option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-5 h-5 text-[#105d97] transition-transform duration-200 group-hover:scale-110" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Search Controls */}
                    <div className="flex items-center gap-3 w-full lg:w-auto">
                      {/* Desktop Search Input */}
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#105d97] to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 group-focus-within:opacity-50 transition duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-1 shadow-lg border border-gray-200 group-focus-within:border-[#105d97] transition-all duration-300">
                          <input
                            type="text"
                            placeholder="Tìm kiếm đồng phục golf & tennis..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-64 px-4 py-3 pl-12 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white text-gray-700 placeholder-gray-500 transition-all duration-300"
                            aria-label="Tìm kiếm sản phẩm"
                          />
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <Search className="w-5 h-5 text-[#105d97] group-focus-within:scale-110 transition-transform duration-200" />
                          </div>
                          {searchQuery && (
                            <button
                              onClick={() => {
                                setSearchQuery('');
                                setProducts(Array.isArray(initialProducts) ? initialProducts : []);
                              }}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Results Counter */}
                      {searchQuery && (
                        <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                          <span className="text-sm text-[#105d97] font-medium">
                            {products.length} kết quả
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements - Desktop Only */}
                <div className="hidden lg:block">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>

            {currentProducts.length > 0 ? (
              <section className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4" aria-label="Danh sách sản phẩm đồng phục golf & tennis">
                {currentProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      maxPrice={product.maxPrice}
                      discount={product.discount}
                      isNew={product.isNew}
                      isFeatured={product.isFeatured}
                      colors={product.colors}
                      image={product.image}
                      slug={product.slug}
                    />
                  </div>
                ))}
              </section>
            ) : (
              <p className="text-center text-gray-500">Không tìm thấy sản phẩm nào trong danh mục {displayCategory}.</p>
            )}
            {renderPagination()}
            <GolfTennisUniviPage />
          </main>
        </div>
      </div>
    </DefaultLayout2>
  );
};

export default DongPhucGolfTennis;

export async function getServerSideProps() {
  try {
    // Get products from API
    const initialProducts = await getProductsByCategory('dong-phuc-golf-tennis');

    const meta = {
      title: "Đồng phục Golf và Tennis - Đồng phục Univi",
      description: "Tự tin thể hiện trên sân Golf và Tennis với đồng phục cao cấp từ Đồng Phục Univi. Chúng tôi sử dụng chất liệu vải thể thao chuyên biệt, siêu nhẹ, có khả năng thấm hút mồ hôi vượt trội, khô nhanh và co giãn 4 chiều, giúp bạn thoải mái trong từng cú đánh. ",
      keywords: "đồng phục golf, đồng phục tennis, Đồng phục Univi, quần áo thể thao, đồng phục thể thao, thiết kế golf tennis, thể thao chất lượng",
      author: "Đồng phục Univi",
      robots: "index, follow",
      canonical: "https://dongphucunivi.com/san-pham/dong-phuc-golf-tennis",
      og: {
        title: "Đồng phục Golf và Tennis - Đồng phục Univi",
        description: "Tự tin thể hiện trên sân Golf và Tennis với đồng phục cao cấp từ Đồng Phục Univi. Chúng tôi sử dụng chất liệu vải thể thao chuyên biệt, siêu nhẹ, có khả năng thấm hút mồ hôi vượt trội, khô nhanh và co giãn 4 chiều, giúp bạn thoải mái trong từng cú đánh. ",
        type: "website",
        image: "https://dongphucunivi.com/images/banner-univi.webp",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://dongphucunivi.com/san-pham/dong-phuc-golf-tennis",
        siteName: "Đồng phục Univi",
        locale: "vi_VN",
      },
      twitter: {
        card: "summary_large_image",
        title: "Đồng phục Golf và Tennis - Đồng phục Univi",
        description: "Tự tin thể hiện trên sân Golf và Tennis với đồng phục cao cấp từ Đồng Phục Univi. Chúng tôi sử dụng chất liệu vải thể thao chuyên biệt, siêu nhẹ, có khả năng thấm hút mồ hôi vượt trội, khô nhanh và co giãn 4 chiều, giúp bạn thoải mái trong từng cú đánh. ",
        image: "https://dongphucunivi.com/images/banner-univi.webp",
        site: "@UniviSport",
      },
    };

    return {
      props: {
        initialProducts,
        meta,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return {
      props: {
        initialProducts: [],
        meta: {
          title: "Đồng phục Golf và Tennis - Đồng phục Univi",
          description: "Tự tin thể hiện trên sân Golf và Tennis với đồng phục cao cấp từ Đồng Phục Univi.",
          keywords: "đồng phục golf, đồng phục tennis, Đồng phục Univi",
          author: "Đồng phục Univi",
          robots: "noindex, nofollow",
          canonical: "https://dongphucunivi.com/san-pham/dong-phuc-golf-tennis",
          og: {
            title: "Đồng phục Golf và Tennis - Đồng phục Univi",
            description: "Tự tin thể hiện trên sân Golf và Tennis với đồng phục cao cấp từ Đồng Phục Univi.",
            type: "website",
            image: "https://dongphucunivi.com/images/banner-univi.webp",
            imageWidth: "1200",
            imageHeight: "630",
            url: "https://dongphucunivi.com/san-pham/dong-phuc-golf-tennis",
            siteName: "Đồng phục Univi",
            locale: "vi_VN"
          },
          twitter: {
            card: "summary_large_image",
            title: "Đồng phục Golf và Tennis - Đồng phục Univi",
            description: "Tự tin thể hiện trên sân Golf và Tennis với đồng phục cao cấp từ Đồng Phục Univi.",
            image: "https://dongphucunivi.com/images/banner-univi.webp",
            site: "@UniviSport"
          }
        }
      }
    };
  }
}