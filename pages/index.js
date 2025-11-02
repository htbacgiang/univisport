import Head from "next/head";
import Link from "next/link";
import DefaultLayout2 from "../components/layout/DefaultLayout2";
import BannerTTG from "../components/tantruonggiang/BannerTTG";
import FAQComponent from "../components/univisport/FAQComponent";
import BlogHero from "../components/profiles/BlogHero";
import FeedbackSection from "../components/profiles/FeedbackSection";
import PostCard from "../components/common/PostCard";
import { readPostsFromDb, formatPosts } from "../lib/utils";
import ProductSlider from "../components/univisport/ProductSlider";
import CategoryGrid from "../components/univisport/CategoryGrid";
import StrengthsSection from "../components/tantruonggiang/StrengthsSection";
import VideoHero from "../components/univisport/VideoHero";
import HeroSection1 from "../components/univisport/HeroSection1";
import CountdownTimer from "../components/univisport/CountdownTimer";
import PartnersSection from "../components/univisport/PartnersSection";
import FabricCardComponent from "../components/univisport/FabricCardComponent";
import axios from "axios";


export default function Home({ posts, sportswearProducts, pickleballProducts, yogaPilatesProducts, meta }) {
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
      <h1 className="visually-hidden">
        Đồng Phục Univi - Đồng Phục Thể Thao, Đồng Phục Yoga, Pilates, Pickleball, Gym Chuyên Nghiệp
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <BannerTTG />
      <CountdownTimer />
    <div className="container mx-auto px-4 mb-4">
    <CategoryGrid />
    </div>
      {/* Sportswear Section */}
      {sportswearProducts.length > 0 && (
        <ProductSlider
          title="Đồng Phục Gym"
          products={sportswearProducts}
          viewAllLink="/san-pham/dong-phuc-gym"
        />
      )}
      {/* Pickleball Section */}
      {pickleballProducts.length > 0 && (
        <ProductSlider
          title="Đồng Phục Pickleball"
          products={pickleballProducts}
          viewAllLink="/san-pham/dong-phuc-pickleball"
        />
      )}
      {/* Yoga - Pilates Section */}
      {yogaPilatesProducts.length > 0 && (
        <ProductSlider
          title="Đồng Phục Yoga - Pilates"
          products={yogaPilatesProducts}
          viewAllLink="/san-pham/dong-phuc-yoga-pilates"
        />
      )}
      <VideoHero />
      <HeroSection1 />
      <FabricCardComponent />
      <StrengthsSection />
      <FeedbackSection />
      <PartnersSection />
      <FAQComponent />
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

    // Fetch sản phẩm từ API
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const productsResponse = await axios.get(`${baseUrl}/api/products`);
    const productsData = productsResponse.data.products || [];

    // Lọc sản phẩm Gym
    const gymProducts = productsData.filter(product => product.category === 'dong-phuc-gym');
    const sportswearProducts = gymProducts.slice(0, 12).map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      maxPrice: product.originalPrice || product.price,
      discount: product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0,
      isNew: product.isNew || false,
      colors: Array.isArray(product.colors)
        ? product.colors.map(color => ({
            name: color.name || 'Màu',
            hex: color.hex || '#000000',
            image: color.image || '',
          }))
        : [],
      image: product.colors && product.colors.length > 0 ? product.colors[0].image : '',
      slug: product.slug || '',
    }));

    // Lọc sản phẩm Pickleball
    const pickleballProductsData = productsData.filter(product => product.category === 'dong-phuc-pickleball');
    const pickleballProducts = pickleballProductsData.slice(0, 12).map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      maxPrice: product.originalPrice || product.price,
      discount: product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0,
      isNew: product.isNew || false,
      colors: Array.isArray(product.colors)
        ? product.colors.map(color => ({
            name: color.name || 'Màu',
            hex: color.hex || '#000000',
            image: color.image || '',
          }))
        : [],
      image: product.colors && product.colors.length > 0 ? product.colors[0].image : '',
      slug: product.slug || '',
    }));

    // Lọc sản phẩm Yoga - Pilates
    const yogaPilatesProductsData = productsData.filter(product => product.category === 'dong-phuc-yoga-pilates');
    const yogaPilatesProducts = yogaPilatesProductsData.slice(0, 12).map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      maxPrice: product.originalPrice || product.price,
      discount: product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0,
      isNew: product.isNew || false,
      colors: Array.isArray(product.colors)
        ? product.colors.map(color => ({
            name: color.name || 'Màu',
            hex: color.hex || '#000000',
            image: color.image || '',
          }))
        : [],
      image: product.colors && product.colors.length > 0 ? product.colors[0].image : '',
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
        yogaPilatesProducts,
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
        yogaPilatesProducts: [],
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