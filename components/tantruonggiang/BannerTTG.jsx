import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ContactForm from "../header/ContactForm";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const modalRef = useRef(null);

  const slides = [
    {
      image: "/images/dong-phuc-huan-luyen-vien.webp",
      smallHeading: "ĐỒNG PHỤC HUẤN LUYỆN VIÊN",
      heading: "Chuyên nghiệp & Phong cách",
      description:
        "Không chỉ tối đa hiệu suất tập luyện mà còn là biểu tượng của một hệ thống chuyên nghiệp",
      align: "center",
      animation: "slideFromBottom",
      collectionLink: "/san-pham",
    },
    {
      image: "/images/dong-phuc-the-taho.webp",
      smallHeading: "ĐỒNG PHỤC THỂ THAO",
      heading: "Năng Động & Sáng Tạo",
      description:
        "Bộ sưu tập đồng phục thể thao Univi đa dạng bộ môn, thiết kế theo ý tưởng riêng của các đội nhóm",
      align: "center",
      animation: "slideFromBottom",
      collectionLink: "/san-pham",
    },
    {
      image: "/images/giai-phap-2s.webp",
      smallHeading: "GIẢI PHÁP SMART SPORT UNIFORM",
      heading: "Cho Các Phòng Tập",
      description:
        "Được đánh giá cao nhờ tính ứng dụng vượt trội, tối ưu hiệu suất tập luyện. BST 2S Uniform không chỉ tạo sự đồng bộ thương hiệu mà còn mang đến diện mạo trẻ trung, khoắn cho đội ngũ nhân sự.",
      align: "center",
      animation: "slideFromBottom",
      collectionLink: "/san-pham",
    },
  ];

  // Preload tất cả ảnh để tránh mờ khi chuyển slide
  useEffect(() => {
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => resolve(src);
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      try {
        await Promise.all(slides.map(slide => preloadImage(slide.image)));
        setPreloadedImages(new Set(slides.map(slide => slide.image)));
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    preloadAllImages();
  }, [slides]);

  useEffect(() => {
    if (isPaused || isFormOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isPaused, isFormOpen]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const toggleForm = useCallback(() => {
    setIsFormOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isFormOpen) return;
      if (e.key === "ArrowLeft") goToPreviousSlide();
      if (e.key === "ArrowRight") goToNextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPreviousSlide, goToNextSlide, isFormOpen]);

  useEffect(() => {
    if (!isFormOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") toggleForm();
    };

    const modal = modalRef.current;
    const elems = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = elems[0];
    const last = elems[elems.length - 1];

    const trapTab = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    first?.focus();
    modal.addEventListener("keydown", trapTab);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      modal.removeEventListener("keydown", trapTab);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFormOpen, toggleForm]);

  return (
    <>
      <Head>
        {/* Preload tất cả ảnh banner để tránh mờ khi chuyển slide */}
        {slides.map((slide, index) => (
          <link
            key={`preload-banner-${index}`}
            rel="preload"
            as="image"
            href={slide.image}
            imageSizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        ))}
      </Head>
      <section
        className="relative h-screen overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      <style jsx>{`
        /* ============ ANIMATIONS - DYNAMIC & ENERGETIC ============ */
        @keyframes slideFromLeft {
          from { 
            transform: translateX(-100%) scale(0.95); 
            opacity: 0; 
            filter: blur(4px);
          }
          to { 
            transform: translateX(0) scale(1); 
            opacity: 1; 
            filter: blur(0);
          }
        }
        
        @keyframes slideFromBottom {
          from { 
            transform: translateY(100%) scale(0.95); 
            opacity: 0; 
            filter: blur(4px);
          }
          to { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
            filter: blur(0);
          }
        }
        
        @keyframes slideFromRight {
          from { 
            transform: translateX(100%) scale(0.95); 
            opacity: 0; 
            filter: blur(4px);
          }
          to { 
            transform: translateX(0) scale(1); 
            opacity: 1; 
            filter: blur(0);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(16, 93, 151, 0.4),
                        0 0 40px rgba(16, 93, 151, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(16, 93, 151, 0.6),
                        0 0 60px rgba(16, 93, 151, 0.3);
          }
        }
        
        .animate-slideFromLeft   { animation: slideFromLeft 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slideFromBottom { animation: slideFromBottom 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slideFromRight  { animation: slideFromRight 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        
        /* ============ IMAGE OPTIMIZATION & TRANSITIONS ============ */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .banner-image {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          animation: fadeInScale 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @media (max-width: 768px) {
          .banner-image {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            will-change: transform;
            -webkit-filter: contrast(1.08) brightness(1.02);
            filter: contrast(1.08) brightness(1.02);
          }
        }
        
        
        /* ============ TYPOGRAPHY - ELEGANT & BOLD ============ */
        .small-heading {
          font-weight: 800;
          letter-spacing: 0.15em;
          text-shadow: 
            0 2px 10px rgba(14, 165, 233, 0.5),
            0 0 20px rgba(14, 165, 233, 0.3),
            2px 2px 4px rgba(0, 0, 0, 0.8);
          position: relative;
          padding-bottom: 12px;
        }
        
        .small-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #0ea5e9, #105d97, transparent);
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.8);
        }
        
        
        .main-heading {
          font-weight: 800;
          text-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.9),
            0 2px 10px rgba(0, 0, 0, 0.8),
            2px 2px 4px rgba(0, 0, 0, 0.9);
          line-height: 1.2;
          letter-spacing: 0.02em;
        }
        
        .description-text {
          text-shadow: 
            0 2px 12px rgba(0, 0, 0, 0.9),
            0 1px 4px rgba(0, 0, 0, 0.8);
          line-height: 1.6;
          font-weight: 400;
          max-width: 900px;
        }
        
        /* ============ BUTTONS - PREMIUM & SPORTY ============ */
        .btn-primary {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: linear-gradient(135deg, #105d97 0%, #0ea5e9 100%) !important;
          color: white !important;
          font-weight: 700 !important;
          border-radius: 8px !important;
          border: 2px solid transparent !important;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          position: relative !important;
          overflow: hidden !important;
          box-shadow: 
            0 4px 15px rgba(16, 93, 151, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          background: linear-gradient(135deg, #0ea5e9 0%, #105d97 100%) !important;
          transform: translateY(-2px) !important;
          box-shadow: 
            0 8px 25px rgba(16, 93, 151, 0.6),
            0 0 40px rgba(14, 165, 233, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(14, 165, 233, 0.5) !important;
        }
        
        .btn-primary:active {
          transform: translateY(0) !important;
        }
        
        .btn-secondary {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(255, 255, 255, 0.95) !important;
          color: #105d97 !important;
          font-weight: 700 !important;
          border-radius: 8px !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          text-decoration: none !important;
          position: relative !important;
          overflow: hidden !important;
          box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
        }
        
        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(14, 165, 233, 0.15),
            transparent
          );
          transition: left 0.5s;
        }
        
        .btn-secondary:hover::before {
          left: 100%;
        }
        
        .btn-secondary:hover {
          background: white !important;
          color: #0ea5e9 !important;
          transform: translateY(-2px) !important;
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.25),
            0 0 40px rgba(255, 255, 255, 0.5),
            inset 0 0 0 2px rgba(14, 165, 233, 0.5) !important;
          border-color: rgba(14, 165, 233, 0.5) !important;
        }
        
        .btn-secondary:active {
          transform: translateY(0) !important;
        }
        
        /* ============ NAVIGATION ARROWS - SLEEK DESIGN ============ */
        .nav-arrow {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
        }
        
        .nav-arrow:hover {
          background: rgba(16, 93, 151, 0.9);
          border-color: rgba(14, 165, 233, 0.6);
          transform: scale(1.1);
          box-shadow: 
            0 0 30px rgba(14, 165, 233, 0.5),
            0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .nav-arrow:active {
          transform: scale(0.95);
        }
        
        /* ============ DOTS NAVIGATION - MODERN STYLE ============ */
        .dot-nav {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          border: 2px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }
        
        .dot-nav:hover {
          background: rgba(255, 255, 255, 0.6);
          border-color: rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }
        
        .dot-nav.active {
          background: linear-gradient(135deg, #0ea5e9, #105d97);
          border-color: #0ea5e9;
          width: 36px;
          border-radius: 6px;
          box-shadow: 
            0 0 20px rgba(14, 165, 233, 0.6),
            0 4px 10px rgba(0, 0, 0, 0.3);
        }
        
        /* ============ MODAL - ELEGANT APPEARANCE ============ */
        .modal-backdrop {
          backdrop-filter: blur(8px);
          background: rgba(0, 0, 0, 0.7);
        }
        
        .modal-content {
          animation: modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 100px rgba(16, 93, 151, 0.3);
        }
        
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* ============ RESPONSIVE REFINEMENTS ============ */
        @media (max-width: 768px) {
          .btn-primary, .btn-secondary {
            padding: 12px 24px;
          }
          
          .nav-arrow {
            width: 44px;
            height: 44px;
          }
          
          .small-heading {
            letter-spacing: 0.1em;
          }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          key={currentSlide}
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}: ${slides[currentSlide].smallHeading}`}
          fill
          className="banner-image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          quality={100}
          priority={true}
          unoptimized={typeof window !== 'undefined' && window.innerWidth <= 768}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Overlay để giảm độ sáng ảnh nền, làm text nổi bật */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div
          key={`content-${currentSlide}`}
          className={`
            flex flex-col w-full px-6 md:px-20 lg:px-24 max-w-screen-2xl box-border
            items-center text-center md:mx-auto
            animate-${slides[currentSlide].animation}
          `}
        >
          <p className="text-blue-300 text-base md:text-3xl small-heading">
            {slides[currentSlide].smallHeading}
          </p>
          <h2 className="text-2xl md:text-6xl text-white main-heading mb-4">
            {slides[currentSlide].heading}
          </h2>
          <p className="text-gray-100 text-base md:text-xl mb-8 description-text">
            {slides[currentSlide].description}
          </p>
          <div className="flex md:flex-row gap-4 text-sm md:text-base">
            <button
              className="btn-primary px-10 py-2 md:px-6 md:py-2"
              onClick={toggleForm}
              aria-label="Liên hệ ngay để được tư vấn"
            >
              Liên Hệ Ngay
            </button>
            <a
              href={slides[currentSlide].collectionLink}
              className="btn-secondary text-sm md:text-base py-2 md:px-6 md:py-2"
              aria-label="Xem bộ sưu tập sản phẩm"
            >
              Bộ Sưu Tập
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute hidden md:flex inset-y-0 left-4 md:left-8  items-center z-10">
        <button
          onClick={goToPreviousSlide}
          aria-label="Slide trước"
          className="nav-arrow focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:ring-offset-2"
        >
          <FaArrowLeft className="text-white text-xl" />
        </button>
      </div>
      <div className="absolute hidden md:flex inset-y-0 right-4 md:right-8 items-center z-10">
        <button
          onClick={goToNextSlide}
          aria-label="Slide tiếp theo"
          className="nav-arrow focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:ring-offset-2"
        >
          <FaArrowRight className="text-white text-xl" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot-nav ${currentSlide === idx ? "active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Chuyển đến slide ${idx + 1}`}
            aria-current={currentSlide === idx ? "true" : "false"}
          />
        ))}
      </div>

      {isFormOpen && (
        <div
          className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={(e) => e.target === e.currentTarget && toggleForm()}
        >
          <div
            ref={modalRef}
            className="modal-content w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl rounded-lg overflow-hidden"
          >
            {/* Header: chỉ chứa nút Close */}
            <div className="bg-gradient-to-r from-[#105d97] to-[#0ea5e9] px-6 py-4 flex justify-end items-center">
              <button
                onClick={toggleForm}
                aria-label="Đóng form liên hệ"
                className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#105d97] rounded-full p-1 transition-all hover:rotate-90 duration-300"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body: form */}
            <div className="bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
      </section>
    </>
  );
}