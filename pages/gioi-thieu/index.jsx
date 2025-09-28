import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle, Users } from "lucide-react";
import DefaultLayout2 from "../../components/layout/DefaultLayout2";
import AboutNavigation from "../../components/univisport/AboutNavigation";
import AboutUniviPage from "../../components/univisport/AboutUniviPage";
import CategoryGrid from "../../components/univisport/CategoryGrid";
import PartnersSection from "../../components/univisport/PartnersSection";

export default function AboutUs({ meta }) {
  return (
    <DefaultLayout2>
      {/* Hero Section - Modern & Elegant */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner-univi.png"
            alt={`Đồng phục Gym Đồng phục Univi - Bộ sưu tập thể thao chất lượng cao`}
            fill
            className="object-cover scale-105 transition-transform duration-700 hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/30" />
          <div className="absolute inset-0" style={{background: `linear-gradient(135deg, rgba(16, 93, 151, 0.7) 0%, rgba(16, 93, 151, 0.3) 50%, transparent 100%)`}} />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-pulse hidden md:block" />
        <div className="absolute bottom-32 right-32 w-16 h-16 border border-white/30 rounded-full animate-bounce hidden md:block" />
        
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Introduction Section - Creative & Professional */}
      <section className="py-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{background: `radial-gradient(circle, #105d97 0%, transparent 70%)`}} />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{background: `radial-gradient(circle, #105d97 0%, transparent 70%)`}} />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border-2" style={{color: '#105d97', borderColor: '#105d97'}}>
                Câu chuyện của chúng tôi
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase">
              I. Hành trình <span style={{color: '#105d97'}}>8 năm</span> phát triển
            </h2>
          </div>
          
          {/* Content Grid */}
          <div className="space-y-8">
            {/* Text and Image Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <span className="font-bold" style={{color: '#105d97'}}>Đồng Phục Univi</span> là đơn vị xưởng may chuyên cung cấp đồng phục thể thao, đồng phục công ty, đồng phục công sở, áo polo, áo sơ mi văn phòng cao cấp.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Với hơn <span className="font-semibold" style={{color: '#105d97'}}>8 năm kinh nghiệm</span> trong lĩnh vực thiết kế đồng phục, chúng tôi đã trở thành một cái tên quen thuộc trong ngành thời trang đồng phục.
                  </p>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(16, 93, 151, 0.1)'}}>
                        <CheckCircle className="w-6 h-6" style={{color: '#105d97'}} />
                      </div>
                      <div className="text-2xl font-bold" style={{color: '#105d97'}}>8+</div>
                      <div className="text-sm text-gray-600 font-medium">Năm kinh nghiệm</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(16, 93, 151, 0.1)'}}>
                        <Users className="w-6 h-6" style={{color: '#105d97'}} />
                      </div>
                      <div className="text-2xl font-bold" style={{color: '#105d97'}}>500+</div>
                      <div className="text-sm text-gray-600 font-medium">Khách hàng tin tưởng</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <Image
                    src="/images/gioi-thieu/gioi-thieu-univi.jpg"
                    alt="Phân xưởng sản xuất của Đồng Phục Univi"
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-sm font-medium text-gray-900">Phân xưởng sản xuất số 03</p>
                      <p className="text-xs text-gray-600">Tại Hải Dương</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full" style={{backgroundColor: 'rgba(16, 93, 151, 0.1)'}} />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full" style={{backgroundColor: 'rgba(255, 193, 7, 0.1)'}} />
              </div>
            </div>

            {/* Partners Section - Full Width Row */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 ">
              <PartnersSection />
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Elegant Timeline */}
      <section className="py-8" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 ">
              Lịch sử <span style={{color: '#105d97'}}>hình thành</span> và phát triển
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#105d97'}} />
          </div>
          
          {/* About Univi Content Grid */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Left Content - Text */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{color: '#105d97'}}>
                      VỀ UNIVI
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Univi tự tin là thương hiệu dẫn đầu trong lĩnh vực thiết kế và cung cấp Đồng Phục Thể Thao cho các doanh nghiệp, phòng tập và đội nhóm tập thể thao.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Chúng tôi không chỉ tạo ra những sản phẩm chất lượng, tối ưu hiệu suất tập luyện, an toàn với sức khỏe người tập mà còn giúp các đơn vị truyền tải câu chuyện thương hiệu một cách sống động nhất.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Image Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Row - Store and Team */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <Image
                        src="/images/gioi-thieu/showroom-univi.jpg"
                        alt="Showroom Univi Sport với các sản phẩm đồng phục thể thao"
                        width={400}
                        height={300}
                        className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-900">Showroom Univi Sport</p>
                          <p className="text-xs text-gray-600">Yoga • Gym • Running • Golf</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <Image
                        src="/images/gioi-thieu/team-univi.jpg"
                        alt="Đội ngũ Univi chuyên nghiệp"
                        width={400}
                        height={300}
                        className="object-cover w-full h-48 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-900">Đội ngũ chuyên nghiệp</p>
                          <p className="text-xs text-gray-600">Tận tâm • Sáng tạo • Chất lượng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Row - Sports Categories */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <Image
                        src="/images/gioi-thieu/tennis-golf.jpg"
                        alt="Đồng phục Tennis và Golf"
                        width={200}
                        height={200}
                        className="object-cover w-full h-32 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <p className="text-xs font-semibold text-gray-900">Tennis & Golf</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <Image
                        src="/images/gioi-thieu/yoga-pilates.jpg"
                        alt="Đồng phục Yoga và Pilates"
                        width={200}
                        height={200}
                        className="object-cover w-full h-32 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <p className="text-xs font-semibold text-gray-900">Yoga & Pilates</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <Image
                        src="/images/gioi-thieu/gym-fitness.jpg"
                        alt="Đồng phục Gym và Fitness"
                        width={200}
                        height={200}
                        className="object-cover w-full h-32 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <p className="text-xs font-semibold text-gray-900">Gym & Fitness</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                      <Image
                        src="/images/gioi-thieu/running-sport.jpg"
                        alt="Đồng phục Running và thể thao"
                        width={200}
                        height={200}
                        className="object-cover w-full h-32 transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <p className="text-xs font-semibold text-gray-900">Running & Sport</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Categories - Using CategoryGrid Component */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dòng sản phẩm <span style={{color: '#105d97'}}>chủ lực</span>
              </h3>
              <p className="text-base text-gray-600 max-w-4xl mx-auto">
                Ngay từ những bước đầu, các dòng sản phẩm của Univi đã được đón nhận vượt kỳ vọng từ khách hàng trên toàn quốc.
              </p>
              <div className="w-24 h-1 mx-auto mt-3 rounded-full" style={{backgroundColor: '#105d97'}} />
            </div>
            <CategoryGrid />
          </div>
          <AboutNavigation />
        </div>
      </section>
      <AboutUniviPage />

    </DefaultLayout2>
  );
}

export async function getServerSideProps() {
  const meta = {
    title: "Giới Thiệu Đồng Phục Univi - Chuyên May Đồng Phục Cao Cấp",
    description: "Đồng Phục Univi – Chuyên cung cấp đồng phục thể thao, công ty, công sở, áo polo, áo sơ mi cao cấp với hơn 8 năm kinh nghiệm.",
    keywords:
      "đồng phục, đồng phục thể thao, đồng phục công ty, áo polo, Đồng phục Univi",
    robots: "index, follow",
    author: "Đồng Phục Univi",
    canonical: "https://dongphucunivi.com/gioi-thieu",
    og: {
    title: "Giới Thiệu Đồng Phục Univi - Chuyên May Đồng Phục Cao Cấp",
    description: "Đồng Phục Univi – Chuyên cung cấp đồng phục thể thao, công ty, công sở, áo polo, áo sơ mi cao cấp với hơn 8 năm kinh nghiệm.",

      type: "website",
      image: "https://dongphucunivi.com/images/banner-univi.webp",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://dongphucunivi.com/gioi-thieu",
    },
    twitter: {
      card: "summary_large_image",
      title: "Giới Thiệu Đồng Phục Univi",
    description: "Đồng Phục Univi – Chuyên cung cấp đồng phục thể thao, công ty, công sở, áo polo, áo sơ mi cao cấp với hơn 8 năm kinh nghiệm.",

      image: "https://dongphucunivi.com/images/banner-univi.webp",
    },
  };

  return {
    props: {
      meta,
    },
  };
}