import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Tiêu đề và mô tả */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Dịch Vụ Chuyên Nghiệp
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            DỊCH VỤ TẠI 
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"> GREENLAHOME</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            GREENLAHOME chuyên thiết kế, thi công nội thất theo phong cách hiện đại dành cho căn hộ, nhà phố và biệt thự. Ngoài đội ngũ trẻ và năng động, chúng tôi còn ứng dụng công nghệ AI trong thiết kế nhằm tối ưu theo nhu cầu và gu thẩm mỹ riêng của từng khách hàng.
          </p>
        </div>

        {/* Grid 3 cột */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Cột 1: Thiết Kế Nội Thất Chung Cư */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20">
            <div className="relative w-full h-56 md:h-64 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/images/thiet-ke-noi-that-chung-cu.png"
                alt="Thiết Kế Nội Thất Chung Cư"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link href="/thiet-ke-noi-that-chung-cu">
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm md:text-base py-3 px-6 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">
              Thiết Kế Nội Thất Chung Cư
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center leading-relaxed">
              GREENLAHOME mang đến giải pháp thiết kế nội thất hiện đại, bền vững, ứng dụng công nghệ AI tiên tiến. Chúng tôi tạo nên không gian sống đậm chất cá nhân, đáp ứng nhanh chóng và phù hợp với từng khách hàng.
            </p>
          </div>

          {/* Cột 2: Thiết Kế Nội Thất Nhà Phố */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20">
            <div className="relative w-full h-56 md:h-64 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/images/thi-cong-noi-that-nha-pho.png"
                alt="Thiết Kế Nội Thất Nhà Phố"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link href="/thiet-ke-noi-that-nha-pho">
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm md:text-base py-3 px-6 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">
              Thiết Kế Nội Thất Nhà Phố
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center leading-relaxed">
              GREENLAHOME cam kết mang đến sản phẩm tinh tế, bền vững với độ bền cao. Sử dụng hệ thống máy móc hiện đại và công nghệ tiên tiến, cùng đội ngũ thi công lành nghề và giám sát chuyên môn cao, tận tâm với từng dự án.
            </p>
          </div>

          {/* Cột 3: Thi Công Nội Thất Trọn Gói */}
          <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20">
            <div className="relative w-full h-56 md:h-64 mb-6 overflow-hidden rounded-xl">
              <Image
                src="/images/thi-cong-noi-that.png"
                alt="Thi Công Nội Thất Trọn Gói"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link href="/thi-cong-noi-that-tron-goi">
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-sm md:text-base py-3 px-6 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center group-hover:text-yellow-400 transition-colors duration-300">
              Thi Công Nội Thất Trọn Gói
            </h3>
            <p className="text-gray-300 text-sm md:text-base text-center leading-relaxed">
              GREENLAHOME hợp tác với các thương hiệu ván hàng đầu như An Cường, Minh Long và Vanachai (Thái Lan). Sử dụng ván gỗ MDF đạt chuẩn E0, E1, E2, đảm bảo thân thiện với môi trường và an toàn tuyệt đối cho người sử dụng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}