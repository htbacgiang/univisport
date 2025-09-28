import Link from "next/link";
import Image from "next/image";

const BannerPickerball = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-md h-[800px] min-h-[700px] overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/dong-phuc-pickeball.jpg"
          alt="Đồng Phục Thể Thao Univi"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Centered Text and Button Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
        <h3 className="text-2xl font-bold text-white text-center">
          Bộ Sưu Tập Đồng Phục Pickleball 
        </h3>

        {/* Enhanced Animated Shop Now Button */}
        <Link
          href="/san-pham/dong-phuc-pickleball"
          className="mt-4 px-6 py-2 btn-gradient-blue text-white font-semibold rounded-md shadow-lg transition-all animate-blink-zoom"
        >
          Xem Ngay
        </Link>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-blink-zoom {
          animation: blink 2.5s ease-in-out infinite, zoom 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BannerPickerball;