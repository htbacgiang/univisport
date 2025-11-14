"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "dong-phuc-univi", // Default service for Đồng phục Univi
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^(0|\+84)[3|5|7|8|9][0-9]{8}$/.test(formData.phone))
      newErrors.phone = "Số điện thoại không hợp lệ (VD: 0987654321)";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập yêu cầu tư vấn";
    else if (formData.message.length > 500)
      newErrors.message = "Tin nhắn không được vượt quá 500 ký tự";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    if (rightSection) observer.observe(rightSection);
    if (leftSection && window.innerWidth >= 768) observer.observe(leftSection);

    return () => {
      if (rightSection) observer.unobserve(rightSection);
      if (leftSection) observer.unobserve(leftSection);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("Đang gửi...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Đăng ký tư vấn thành công! Chúng tôi sẽ liên hệ lại sớm nhất.");
        setFormData({ name: "", phone: "", email: "", message: "", service: "dong-phuc-univi" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        throw new Error(result.message || "Không thể gửi yêu cầu");
      }
    } catch (error) {
      setStatus("Lỗi: Vui lòng thử lại hoặc liên hệ qua hotline.");
    }
  };

  return (
    <div className="relative">
      <div className="max-w-8xl mx-auto">
        <div className="bg-white borde rounded-3xl px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-4 sm:pt-6 md:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            <div ref={leftSectionRef} className="hidden md:block mt-2">
              <h2 className="text-lg font-bold text-[#105d97] uppercase tracking-wide mb-1">
                Đăng ký tư vấn
              </h2>
              <h3 className="text-lg font-bold text-q8-primary-900 mb-3">
                Nâng tầm phong cách với Đồng phục Univi
              </h3>
              <p className="text-base text-q8-primary-700 mb-2">
                Đồng phục Univi mang đến trang phục thể thao chất lượng cao cho gym, yoga, chạy bộ và golf. Với công nghệ UNI DRY thoáng khí và chất liệu an toàn, chúng tôi đảm bảo sự thoải mái và hiệu suất tối ưu.
              </p>
              <p className="text-base">
                Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết cho đơn hàng của bạn!
              </p>
            </div>

            <div ref={rightSectionRef} className="opacity-0">
              <form
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
                role="form"
                aria-label="Form đăng ký tư vấn đồng phục Univi"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Họ và tên"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-q8-primary-600 text-sm sm:text-base ${
                        errors.name ? "border-red-500" : "border-q8-primary-300"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Số điện thoại"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-q8-primary-600 text-sm sm:text-base ${
                        errors.phone ? "border-red-500" : "border-q8-primary-300"
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email của bạn (tùy chọn)"
                                          aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-q8-primary-600 text-sm sm:text-base ${
                        errors.email ? "border-red-500" : "border-q8-primary-300"
                      }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mô tả yêu cầu của bạn (ví dụ: đồng phục học sinh, đồng phục công ty, số lượng 100 áo...)"
                    aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full p-2.5 sm:p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-q8-primary-600 h-28 sm:h-32 resize-none text-sm sm:text-base ${
                        errors.message ? "border-red-500" : "border-q8-primary-300"
                      }`}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-q8-primary-400">
                      {formData.message.length}/500
                    </div>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "Đang gửi..."}
                  className="w-full bg-[#105d97] text-white font-bold py-2.5 sm:py-3 rounded-full hover:bg-[#105d97]/80 transition-colors disabled:bg-q8-primary-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  aria-disabled={status === "Đang gửi..."}
                >
                  {status === "Đang gửi..." ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      Đăng ký tư vấn <span>→</span>
                    </>
                  )}
                </button>
              </form>
              {status && (
                <p
                  className={`mt-2 text-center ${
                    status.includes("thành công") ? "text-q8-primary-600" : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .opacity-0 {
          opacity: 100%;
        }
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 640px) {
          .opacity-0 {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
