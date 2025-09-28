import Head from "next/head";
import Link from "next/link";
import DefaultLayout2 from "../components/layout/DefaultLayout2";
import BannerTTG from "../components/tantruonggiang/BannerTTG";
import FAQSection from "../components/tantruonggiang/FAQSection";
import BlogHero from "../components/profiles/BlogHero";
import FeedbackSection from "../components/profiles/FeedbackSection";
import PostCard from "../components/common/PostCard";
import { readPostsFromDb, formatPosts } from "../lib/utils";
import ProductCard from "../components/univisport/ProductCard";
import CategoryGrid from "../components/univisport/CategoryGrid";
import StrengthsSection from "../components/tantruonggiang/StrengthsSection";
import VideoHero from "../components/univisport/VideoHero";
import BannerSportswear from "../components/univisport/BannerSportswear";
import BannerPickerball from "../components/univisport/BannerPickerball";
import HeroSection from "../components/univisport/HeroSectionProduct";
import HeroSectionPickleball from "../components/univisport/HeroSectionPickleball";
import HeroSection1 from "../components/univisport/HeroSection1";
import CountdownTimer from "../components/univisport/CountdownTimer";
import PartnersSection from "../components/univisport/PartnersSection";
import CategoryShop from "../components/univisport/CategoryShop";
import FabricCardComponent from "../components/univisport/FabricCardComponent";

// Hàm chuyển đổi đường dẫn tương đối thành URL Cloudinary
const toCloudinaryUrl = (relativePath) => {
  if (!relativePath || typeof relativePath !== 'string') {
    console.warn('Invalid relativePath provided to toCloudinaryUrl:', relativePath);
    return '/images/placeholder.jpg';
  }

  try {
    if (relativePath.includes('/image/upload/')) {
      const parts = relativePath.split('/');
      const versionIndex = parts.findIndex((part) => part.startsWith('v') && !isNaN(part.slice(1)));
      if (versionIndex !== -1) {
        const cleanPath = parts.slice(versionIndex + 1).join('/');
        return `https://res.cloudinary.com/dcgtt1jza/image/upload/v1/${cleanPath}`;
      }
    }
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return `https://res.cloudinary.com/dcgtt1jza/image/upload/v1/${cleanPath}`;
  } catch (error) {
    console.error('Error transforming Cloudinary URL:', error.message, relativePath);
    return '/images/placeholder.jpg';
  }
};

export default function Home({ posts, sportswearProducts, pickleballProducts, meta }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Đồng Phục Univi",
    "url": "https://dongphucunivi.com",
    "logo": "https://dongphucunivi.com/logo-univi.png",
    "sameAs": ["https://www.facebook.com/dongphucunivi"],
    "description":
      "Đồng Phục Univi chuyên may đồng phục thể thao, đồng phục huấn luyện viên cá nhân (PT), đồng phục phòng tập Gym chất lượng cao, thiết kế năng động, tối ưu hiệu suất và thẩm mỹ.",
  };

  return (
    <DefaultLayout2>
      <h1 className="hidden">
        Đồng Phục Univi - May Đồng Phục Thể Thao, Đồng Phục PT, Gym Chuyên Nghiệp
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <BannerTTG />
      <CountdownTimer />
      <CategoryGrid />
      <CategoryShop />
      <HeroSection1 />
      <FabricCardComponent />
      {/* Sportswear Section */}
      <section className="container mx-auto px-4 py-8 md:py-12" aria-labelledby="sportswear-heading">
        <div className="mb-8">
          <HeroSection />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden md:block">
            <div className="sticky top-4">
              <BannerSportswear />
            </div>
          </div>
          <div className="lg:col-span-3">
            {sportswearProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {sportswearProducts.map((product) => (
                    <div key={product.id} className="transform transition-all duration-300 hover:scale-105 ">
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        maxPrice={product.maxPrice}
                        discount={product.discount}
                        isNew={product.isNew}
                        colors={product.colors}
                        image={product.image}
                        slug={product.slug}
                        layout="grid"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link
                    href="/san-pham/dong-phuc-gym"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white btn-gradient-blue rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                    aria-label="Xem tất cả sản phẩm đồng phục Gym"
                  >
                    <span>Xem tất cả sản phẩm</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-lg text-gray-500 font-medium">
                  Không có sản phẩm trong danh mục Đồng Phục Gym
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Vui lòng quay lại sau để xem các sản phẩm mới
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Pickleball Section */}
      <section className="container mx-auto px-4 py-8 md:py-12" aria-labelledby="pickleball-heading">
        <div className="mb-8">
          <HeroSectionPickleball />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          <div className="lg:col-span-1 hidden md:block">
            <div className="sticky top-4">
              <BannerPickerball />
            </div>
          </div>
          <div className="lg:col-span-3">
            {pickleballProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {pickleballProducts.map((product) => (
                    <div key={product.id} className="transform transition-all duration-300 hover:scale-105 ">
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        maxPrice={product.maxPrice}
                        discount={product.discount}
                        isNew={product.isNew}
                        colors={product.colors}
                        image={product.image}
                        slug={product.slug}
                        layout="grid"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link
                    href="/san-pham/dong-phuc-pickleball"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white btn-gradient-blue rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105"
                    aria-label="Xem tất cả sản phẩm đồng phục pickleball"
                  >
                    <span>Xem tất cả sản phẩm</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-lg text-gray-500 font-medium">
                  Không có sản phẩm trong danh mục Đồng phục Pickleball
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Vui lòng quay lại sau để xem các sản phẩm mới
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <VideoHero />
      <StrengthsSection />
      <FeedbackSection />
      <PartnersSection />
      <FAQSection />
      <BlogHero />
      <div className="container mx-auto px-2 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.slug} className="transform transition-all duration-300 hover:scale-105 ">
              <PostCard post={post} />
            </div>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="flex justify-center mt-6">
          <Link 
            href="/bai-viet"
            className="group inline-flex items-center px-8 py-4 bg-[#105d97] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-[#0d4a7a]"
          >
            <span className="mr-3">Xem tất cả bài viết</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </DefaultLayout2>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await readPostsFromDb(3, 0);
    const formattedPosts = formatPosts(posts);

    const sportswearResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=dong-phuc-gym`);
    if (!sportswearResponse.ok) {
      throw new Error(`Sportswear API request failed with status ${sportswearResponse.status}`);
    }
    const sportswearData = await sportswearResponse.json();
    if (sportswearData.status !== 'success' || !Array.isArray(sportswearData.products)) {
      throw new Error('Invalid sportswear API response format');
    }

    const sportswearProducts = sportswearData.products.slice(0, 6).map(product => ({
      id: product._id || product.id,
      name: product.name || 'Untitled Product',
      price: product.price || 0,
      maxPrice: product.maxPrice || product.price || 0,
      discount: product.discount || 0,
      isNew: product.isNew || false,
      colors: Array.isArray(product.colors)
        ? product.colors.map(color => ({
            hex: color.hex || '#000000',
            image: toCloudinaryUrl(color.image || product.image),
          }))
        : [],
      image: toCloudinaryUrl(product.image),
      slug: product.slug || '',
    }));

    const pickleballResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=dong-phuc-pickleball`);
    if (!pickleballResponse.ok) {
      throw new Error(`Pickleball API request failed with status ${pickleballResponse.status}`);
    }
    const pickleballData = await pickleballResponse.json();
    if (pickleballData.status !== 'success' || !Array.isArray(pickleballData.products)) {
      throw new Error('Invalid pickleball API response format');
    }

    const pickleballProducts = pickleballData.products.slice(0, 6).map(product => ({
      id: product._id || product.id,
      name: product.name || 'Untitled Product',
      price: product.price || 0,
      maxPrice: product.maxPrice || product.price || 0,
      discount: product.discount || 0,
      isNew: product.isNew || false,
      colors: Array.isArray(product.colors)
        ? product.colors.map(color => ({
            hex: color.hex || '#000000',
            image: toCloudinaryUrl(color.image || product.image),
          }))
        : [],
      image: toCloudinaryUrl(product.image),
      slug: product.slug || '',
    }));

    const meta = {
      title: "Đồng Phục Univi: May Đồng Phục Thể Thao, Đồng Phục Doanh Nghiệp",
      description: "Đồng Phục Univi chuyên may đồng phục thể thao & doanh nghiệp với thiết kế đẳng cấp. Chất liệu cao cấp, form chuẩn, tôn vinh thương hiệu. Liên hệ ngay: 083 420 4999.",
      keywords: "đồng phục thể thao, đồng phục PT, đồng phục Gym, may đồng phục thể thao, đồng phục phòng tập Gym, đồng phục huấn luyện viên cá nhân, Đồng Phục Univi",
      robots: "index, follow",
      author: "Đồng Phục Univi",
      canonical: "https://dongphucunivi.com",
      og: {
        title: "Đồng Phục Univi: May Đồng Phục Thể Thao, Đồng Phục Doanh Nghiệp",
        description: "Đồng Phục Univi chuyên may đồng phục thể thao & doanh nghiệp với thiết kế đẳng cấp. Chất liệu cao cấp, form chuẩn, tôn vinh thương hiệu. Liên hệ ngay: 083 420 4999.",
        type: "website",
        image: "https://dongphucunivi.com/images/banner-univi.webp",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://dongphucunivi.com",
      },
      twitter: {
        card: "summary_large_image",
        title: "Đồng Phục Univi: May Đồng Phục Thể Thao, Đồng Phục Doanh Nghiệp",
        description: "Đồng Phục Univi chuyên may đồng phục thể thao & doanh nghiệp với thiết kế đẳng cấp. Chất liệu cao cấp, form chuẩn, tôn vinh thương hiệu. Liên hệ ngay: 083 420 4999.",
        image: "https://dongphucunivi.com/images/banner-univi.webp",
      },
    };

    return {
      props: {
        posts: formattedPosts,
        sportswearProducts,
        pickleballProducts,
        meta,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message, error.stack);
    return {
      props: {
        posts: [],
        sportswearProducts: [],
        pickleballProducts: [],
        meta: {
          title: "Đồng Phục Univi: May Đồng Phục Thể Thao, Đồng Phục Doanh Nghiệp",
          description: "Đồng Phục Univi chuyên may đồng phục thể thao & doanh nghiệp với thiết kế đẳng cấp. Chất liệu cao cấp, form chuẩn, tôn vinh thương hiệu. Liên hệ ngay: 083 420 4999.",
          keywords: "đồng phục thể thao, đồng phục PT, đồng phục Gym, may đồng phục thể thao, đồng phục phòng tập Gym, đồng phục huấn luyện viên cá nhân, Đồng Phục Univi",
          robots: "index, follow",
          author: "Đồng Phục Univi",
          canonical: "https://dongphucunivi.com",
          og: {
            title: "Đồng Phục Univi: May Đồng Phục Thể Thao, Đồng Phục Doanh Nghiệp",
            description: "Đồng Phục Univi chuyên may đồng phục thể thao & doanh nghiệp với thiết kế đẳng cấp. Chất liệu cao cấp, form chuẩn, tôn vinh thương hiệu. Liên hệ ngay: 083 420 4999.",
            type: "website",
            image: "https://dongphucunivi.com/images/banner-univi.webp",
            imageWidth: "1200",
            imageHeight: "630",
            url: "https://dongphucunivi.com",
          },
          twitter: {
            card: "summary_large_image",
            title: "Đồng Phục Univi: May Đồng Phục Thể Thao, Đồng Phục Doanh Nghiệp",
            description: "Đồng Phục Univi chuyên may đồng phục thể thao & doanh nghiệp với thiết kế đẳng cấp. Chất liệu cao cấp, form chuẩn, tôn vinh thương hiệu. Liên hệ ngay: 083 420 4999.",
            image: "https://dongphucunivi.com/images/banner-univi.webp",
          },
        },
      },
    };
  }
}