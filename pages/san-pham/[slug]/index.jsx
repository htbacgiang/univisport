import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import DefaultLayout from '../../../components/layout/DefaultLayout';
import { PencilRuler, Shirt, Factory, Truck } from 'lucide-react';
import debounce from 'lodash/debounce';
import parse from 'html-react-parser';
import ContactForm from '../../../components/header/ContactForm';
import axios from 'axios';

// Breadcrumb Component
function Breadcrumb({ product }) {
  const category = product?.category || 'Đồng phục';
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  const productName = product?.name || 'Sản phẩm';
  const categoryNameVN = product?.categoryNameVN || 'Đồng phục';

  return (
    <nav aria-label="Breadcrumb" className="mb-3 mt-[60px] md:mt-[80px]">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/san-pham" className="hover:text-[#105d97] transition-colors" aria-label="Sản phẩm">
            Sản phẩm
          </Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <Link href={`/san-pham/${categorySlug}`} className="hover:text-[#105d97] transition-colors" aria-current={category ? 'page' : undefined}>
            {categoryNameVN}
          </Link>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li className="text-gray-700 font-medium" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  );
}

// StarRating Component
function StarRating({ rating, uniqueId }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex" aria-label={`Được đánh giá ${rating} trên 5 sao`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" role="img" aria-label="Sao đầy">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" role="img" aria-label="Nửa sao">
          <defs>
            <linearGradient id={`${uniqueId}-halfStar`}>
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={`url(#${uniqueId}-halfStar)`}
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24" role="img" aria-label="Sao trống">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

// Main Component
export default function ProductDetailPage({ product }) {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  const modalRef = useRef(null);

  // Define hooks unconditionally
  const updateSwipers = useCallback((index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideToLoop(index);
    }
    if (thumbsSwiperRef.current) {
      thumbsSwiperRef.current.slideTo(index);
    }
  }, [activeIndex]);

  // Remove debounce if not strictly needed, or handle dependencies explicitly
  const handleThumbnailClick = useCallback((index) => {
    updateSwipers(index);
  }, [updateSwipers]);

  const handleMainSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    updateSwipers(newIndex);
  };

  const handleThumbnailNavigation = (direction) => {
    let newIndex = activeIndex;
    if (direction === 'next') {
      newIndex = (activeIndex + 1) % (product?.colors?.length || 1);
    } else if (direction === 'prev') {
      newIndex = (activeIndex - 1 + (product?.colors?.length || 1)) % (product?.colors?.length || 1);
    }
    updateSwipers(newIndex);
  };

  const toggleForm = useCallback(() => {
    setIsFormOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isFormOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") toggleForm();
    };

    const modal = modalRef.current;
    const elems = modal?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = elems?.[0];
    const last = elems?.[elems.length - 1];

    const trapTab = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    first?.focus();
    modal?.addEventListener("keydown", trapTab);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      modal?.removeEventListener("keydown", trapTab);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFormOpen, toggleForm]);

  // Early return after hooks
  if (!router.isReady || !product) {
    return (
      <DefaultLayout>
        <div className="container mx-auto py-8 text-center text-gray-600">
          Đang tải...
        </div>
      </DefaultLayout>
    );
  }

  // Tất cả ảnh từ colors array
  const images = product.colors && product.colors.length > 0
    ? product.colors.map((color) => color.image)
    : ['/images/placeholder.jpg'];

  // Convert to local image path
  const toLocalImageUrl = (imagePath) => {
    if (!imagePath) return '/images/placeholder.jpg';
    // If path already starts with /, return as is (it's already a local path)
    if (imagePath.startsWith('/')) return imagePath;
    // Otherwise prepend /
    return `/${imagePath}`;
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen ">
        <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8">
          <Breadcrumb product={product} />
          <div className="bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 p-2 lg:p-8 ">
                <Swiper
                  modules={[Navigation, Thumbs]}
                  navigation={false}
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={images.length > 1}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  onSlideChange={handleMainSlideChange}
                  onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                  className="w-full aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-200"
                  role="region"
                  aria-label="Product image carousel"
                  id="main-swiper"
                >
                  {images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full aspect-square bg-white">
                        <Image
                          src={toLocalImageUrl(src)}
                          alt={`${product.name} image ${index + 1}`}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-xl transition-all duration-300 hover:scale-[1.02]"
                          priority={index === 0}
                          onError={() => '/images/placeholder.jpg'}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Thumbnail Section */}
                {images.length > 1 && (
                  <div className="relative mt-4">
                    <Swiper
                      modules={[Navigation, Thumbs]}
                      spaceBetween={8}
                      slidesPerView={4}
                      loop={images.length > 1}
                      watchSlidesProgress
                      onSwiper={(swiper) => {
                        setThumbsSwiper(swiper);
                        thumbsSwiperRef.current = swiper;
                      }}
                      className="w-full"
                      role="tablist"
                      id="thumb-swiper"
                    >
                      {images.map((src, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="relative w-full aspect-square cursor-pointer group"
                            onClick={() => handleThumbnailClick(index)}
                            role="tab"
                            aria-selected={activeIndex === index}
                            aria-label={`Select image ${index + 1}`}
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleThumbnailClick(index)}
                          >
                            <Image
                              src={toLocalImageUrl(src)}
                              alt={`${product.name} Thumbnail ${index + 1}`}
                              layout="fill"
                              objectFit="contain"
                              className={`rounded-lg border transition-all duration-200 ${
                                activeIndex === index 
                                  ? 'border-[#105d97] border-2 shadow-md ring-1 ring-[#105d97]/20' 
                                  : 'border-gray-200 hover:border-[#105d97]/50 group-hover:shadow-sm'
                              }`}
                              loading="lazy"
                              onError={() => '/images/placeholder.jpg'}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <button
                      className="thumb-swiper-button-prev absolute top-1/2 left-[-8px] transform -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-[#105d97] hover:text-white hover:border-[#105d97] transition-all duration-200"
                      onClick={() => handleThumbnailNavigation('prev')}
                      aria-label="Hình ảnh trước"
                      aria-controls="thumb-swiper"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      className="thumb-swiper-button-next absolute top-1/2 right-[-8px] transform -translate-y-1/2 z-10 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-[#105d97] hover:text-white hover:border-[#105d97] transition-all duration-200"
                      onClick={() => handleThumbnailNavigation('next')}
                      aria-label="Hình ảnh tiếp theo"
                      aria-controls="thumb-swiper"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info Section */}
              <div className="w-full lg:w-1/2 p-2 mt-2 md:p-6 lg:p-8">
                <div className="mb-5">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">{product.name}</h1>
                  <div className="flex items-center gap-3 mb-3">
                    <StarRating rating={product.rating || 0} uniqueId={`star-${product.id}`} />
                    <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {product.reviewCount || 0} đánh giá
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200/60 mb-5">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
                      <span className="text-sm text-gray-600">Mã sản phẩm</span>
                      <span className="text-sm font-semibold text-gray-900">{product.maSanPham || `TCT${product.id}-${product.category.toUpperCase()}`}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
                      <span className="text-sm text-gray-600">Giá sản phẩm</span>
                      <div className="text-right">
                        <span className="text-xl md:text-2xl font-bold text-[#105d97]">{product.price.toLocaleString('vi-VN')}đ</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200/60">
                      <span className="text-sm text-gray-600">Chất liệu</span>
                      <span className="text-sm font-semibold text-gray-900">{product.material || 'Không xác định'}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Danh mục</span>
                      <span className="text-sm font-semibold text-gray-900">{product.categoryNameVN}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <button
                    className="flex-1 text-center bg-[#105d97] text-white py-3 px-5 rounded-xl hover:bg-[#0e4a7a] transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    onClick={toggleForm}
                    aria-label="Liên hệ nhận báo giá"
                  >
                    Liên hệ nhận báo giá
                  </button>
                  <a
                    href="tel:0834204999"
                    className="flex-1 text-center bg-gradient-to-r from-red-500 to-red-600 text-black py-3 px-5 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    aria-label="Gọi hotline 0834.204.999"
                  >
                   Hotline: 0834.204.999
                  </a>
                </div>

                <div className="bg-gradient-to-br hidden md:block from-blue-50 to-blue-100/50 rounded-xl p-5 border border-blue-200/60">
                  <h3 className="text-base font-bold text-[#105d97] mb-4 text-center">Ưu điểm nổi bật</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 p-2.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                      <span className="flex-none w-8 h-8 flex items-center justify-center bg-[#105d97]/10 rounded-lg">
                        <PencilRuler className="w-4 h-4 text-[#105d97]" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">Miễn phí thiết kế</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                      <span className="flex-none w-8 h-8 flex items-center justify-center bg-[#105d97]/10 rounded-lg">
                        <Shirt className="w-4 h-4 text-[#105d97]" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">Chất vải cao cấp</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                      <span className="flex-none w-8 h-8 flex items-center justify-center bg-[#105d97]/10 rounded-lg">
                        <Factory className="w-4 h-4 text-[#105d97]" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">Xưởng sản xuất khép kín</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                      <span className="flex-none w-8 h-8 flex items-center justify-center bg-[#105d97]/10 rounded-lg">
                        <Truck className="w-4 h-4 text-[#105d97]" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">Giao hàng nhanh 3 ngày</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="mt-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1 h-6 bg-[#105d97] rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-[#105d97]">Chi tiết sản phẩm</h3>
              </div>
              <div className="prose prose-base md:prose-lg max-w-none text-gray-700">
                {parse(product.content || '<p class="text-gray-600">Không có thông tin chi tiết sản phẩm.</p>')}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {isFormOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && toggleForm()}
          >
            <div
              ref={modalRef}
              className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-4"
              role="dialog"
              aria-labelledby="contact-form-title"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-[#105d97] to-[#0e4a7a] text-white px-5 py-3.5 flex justify-between items-center">
                  <h2 id="contact-form-title" className="text-lg font-bold">Liên hệ nhận báo giá</h2>
                  <button
                    onClick={toggleForm}
                    aria-label="Close"
                    className="text-white/90 hover:text-white hover:bg-white/10 rounded-lg p-1.5 focus:outline-none transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="bg-white">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}

// Server-side props - Fetch from API
export async function getServerSideProps({ params }) {
  try {
    // Fetch products data from API
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get(`${baseUrl}/api/products`);
    const productsData = response.data.products || [];
    
    // Find product by slug
    const product = productsData.find(p => p.slug === params.slug);

    if (!product) {
      return { notFound: true };
    }
    const defaultImage = '/images/banner-1.webp';
    const productName = product?.name || 'Đồng phục Univi';
    const productDescription = product?.description ||
      'Khám phá bộ sưu tập đồng phục thể thao Univi chất lượng cao, thiết kế hiện đại, phù hợp cho nhiều nhu cầu.';
    const productImage = product?.colors?.[0]?.image || product?.image || defaultImage;
    const productCategory = product?.category || 'Đồng phục';
    const categorySlug = productCategory.toLowerCase().replace(/\s+/g, '-');

    const meta = {
      title: `${productName} – Đồng phục Univi`,
      description: `${productDescription} Khám phá bộ sưu tập đồng phục thể thao Univi chất lượng cao, thiết kế hiện đại, phù hợp cho nhiều nhu cầu.`,
      keywords: `${productName}, đồng phục Univi, ${productCategory}, đồng phục chất lượng, thiết kế đồng phục, Univi, thời trang đồng phục`,
      author: 'Univi',
      robots: 'index, follow',
      canonical: `https://dongphucunivi.com/san-pham/${params.slug}`,
      og: {
        title: `${productName} – Đồng phục Univi`,
        description: productDescription,
        type: 'product',
        image: productImage,
        imageWidth: '1200',
        imageHeight: '630',
        url: `https://dongphucunivi.com/san-pham/${params.slug}`,
        siteName: 'Đồng phục Univi',
        locale: 'vi_VN',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${productName} – Đồng phục Univi`,
        description: productDescription,
        image: productImage,
        site: '@UniviOfficial',
      },
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://dongphucunivi.com' },
            { '@type': 'ListItem', position: 2, name: productCategory, item: `https://dongphucunivi.com/danh-muc/${categorySlug}` },
            { '@type': 'ListItem', position: 3, name: productName, item: `https://dongphucunivi.com/danh-muc/${params.slug}` },
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: productName,
          image: productImage,
          description: productDescription,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            ...(product.price && { priceCurrency: 'VND', price: product.price }),
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating || 0,
            reviewCount: product.reviewCount || 0,
          },
        },
      ],
    };

    return {
      props: {
        meta,
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      props: {
        product: null,
        meta: {
          title: 'Lỗi – Đồng phục Univi',
          description: 'Đã xảy ra lỗi khi tải sản phẩm. Vui lòng thử lại sau.',
        },
      },
    };
  }
}