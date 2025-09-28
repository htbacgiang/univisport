// pages/404.js
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Custom404() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner-1.webp" // Đổi tên hình nền nếu cần
          alt="404 Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold mb-4">404</h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Oops! Trang Không Tìm Thấy.
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-6">
          Rất tiếc, trang bạn đang tìm kiếm không tồn tại. Vui lòng kiểm tra lại
          URL hoặc quay về trang chủ để tiếp tục khám phá đồng phục Univi.
        </p>

        {/* Back to Home Button */}
        <Link href="/">
          <button
            className="flex items-center bg-blue-500 uppercase font-bold text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Quay về trang chủ"
          >
            Quay Về Trang Chủ
            <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}