"use client";
import { useState, useEffect, useRef } from "react";
import { FaUser, FaPhone, FaEnvelope, FaComment, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email không hợp lệ";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập yêu cầu tư vấn";
    
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
    
    if (leftSection) observer.observe(leftSection);
    if (rightSection) observer.observe(rightSection);

    return () => {
      if (leftSection) observer.unobserve(leftSection);
      if (rightSection) observer.unobserve(rightSection);
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

    setIsSubmitting(true);
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
        setStatus("Đăng ký tư vấn thành công!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setStatus(`Lỗi: ${error.message || "Đã xảy ra lỗi khi gửi form"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Section - Information */}
            <div ref={leftSectionRef} className="opacity-0 bg-gradient-to-br from-[#105d97] to-[#084a7a] p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                  <FaPaperPlane className="mr-2" />
                  Đăng ký tư vấn miễn phí
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Thiết kế đồng phục đẳng cấp cùng 
                  <span className="text-yellow-300"> UNIVI</span>
                </h2>
                
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  UNIVI mang đến giải pháp đồng phục chuyên nghiệp, hiện đại và phù hợp với mọi lĩnh vực kinh doanh.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Tư vấn thiết kế miễn phí</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Chất lượng cao, giá cả hợp lý</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                    <span>Giao hàng nhanh chóng</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div ref={rightSectionRef} className="opacity-0 p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Liên hệ với chúng tôi</h3>
                  <p className="text-gray-600">Điền thông tin để được tư vấn miễn phí</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Họ và tên"
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#105d97] focus:border-transparent transition-all duration-200 ${
                          errors.name ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center">
                        <span className="mr-1">⚠</span>{errors.name}
                      </p>}
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Số điện thoại"
                        className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#105d97] focus:border-transparent transition-all duration-200 ${
                          errors.phone ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1 flex items-center">
                        <span className="mr-1">⚠</span>{errors.phone}
                      </p>}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email của bạn"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#105d97] focus:border-transparent transition-all duration-200 ${
                        errors.email ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center">
                      <span className="mr-1">⚠</span>{errors.email}
                    </p>}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-4 left-4">
                      <FaComment className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Yêu cầu tư vấn của bạn (ví dụ: đồng phục công ty, đồng phục gym...)"
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#105d97] focus:border-transparent transition-all duration-200 h-32 resize-none ${
                        errors.message ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1 flex items-center">
                      <span className="mr-1">⚠</span>{errors.message}
                    </p>}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#105d97] to-[#084a7a] text-white font-semibold py-4 px-6 rounded-xl hover:from-[#084a7a] hover:to-[#105d97] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Đăng ký tư vấn
                      </>
                    )}
                  </button>
                </form>
                
                {status && (
                  <div className={`mt-6 p-4 rounded-xl text-center ${
                    status.includes("thành công") 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    <div className="flex items-center justify-center gap-2">
                      {status.includes("thành công") ? (
                        <FaCheckCircle className="text-green-600" />
                      ) : (
                        <span className="text-red-600">⚠</span>
                      )}
                      <span className="font-medium">{status}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .opacity-0 {
          opacity: 0;
        }
        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}