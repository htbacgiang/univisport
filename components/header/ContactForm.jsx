"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^\d{10,11}$/.test(formData.phone))
      newErrors.phone = "Số điện thoại phải có 10-11 chữ số";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    // Animation removed to ensure full opacity
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
        setStatus("Đăng ký tư vấn thành công!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        throw new Error(result.message || "Không thể gửi yêu cầu");
      }
    } catch (error) {
      setStatus("Lỗi: Vui lòng thử lại hoặc liên hệ qua hotline.");
    }
  };

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-[99999]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section - Information */}
            <div ref={leftSectionRef} className="p-8 md:p-12 text-white relative overflow-hidden bg-blue-600" style={{backgroundColor: '#105d97', opacity: 1}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Đăng ký tư vấn
              </h2>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Nâng tầm phong cách với <span className="text-yellow-300">Đồng phục Univi</span>
              </h3>
                
                <p className="text-lg text-blue-100 mb-4 leading-relaxed">
                  Đồng phục Univi mang đến trang phục thể thao chất lượng cao cho gym, yoga, chạy bộ và golf. Với công nghệ UNI DRY thoáng khí và chất liệu an toàn, chúng tôi đảm bảo sự thoải mái và hiệu suất tối ưu.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-green-400 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">Tư vấn miễn phí 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-400 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">Thiết kế theo yêu cầu</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-400 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">Chất lượng cao, giá cạnh tranh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div ref={rightSectionRef} className="p-8 md:p-12">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Liên hệ ngay</h4>
                <p className="text-gray-600">Điền thông tin để nhận tư vấn miễn phí từ chuyên gia</p>
              </div>
              
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                role="form"
                aria-label="Form đăng ký tư vấn đồng phục Univi"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <svg className="w-4 h-4 inline mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Họ và tên
                    </label>
                    <div className="relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                        placeholder="Nhập họ và tên"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all duration-300 ${
                          errors.name 
                            ? "border-red-400 focus:border-red-500" 
                            : "border-gray-200 group-hover:border-gray-300"
                        }`}
                        style={{
                          ...(formData.name && !errors.name && { borderColor: '#105d97' }),
                          ...(!formData.name && document.activeElement === document.getElementById('name') && { borderColor: '#105d97' })
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#105d97'}
                        onBlur={(e) => !formData.name && (e.target.style.borderColor = '')}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {formData.name && (
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <svg className="w-4 h-4 inline mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Số điện thoại
                    </label>
                    <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all duration-300 ${
                          errors.phone 
                            ? "border-red-400 focus:border-red-500" 
                            : "border-gray-200 group-hover:border-gray-300"
                        }`}
                        style={{
                          ...(formData.phone && !errors.phone && { borderColor: '#105d97' })
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#105d97'}
                        onBlur={(e) => !formData.phone && (e.target.style.borderColor = '')}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        {formData.phone && /^\d{10,11}$/.test(formData.phone) && (
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-sm mt-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <svg className="w-4 h-4 inline mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Yêu cầu tư vấn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mô tả yêu cầu của bạn (ví dụ: đồng phục học sinh, đồng phục công ty, số lượng 100 áo...)"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white h-32 resize-none transition-all duration-300 ${
                      errors.message 
                        ? "border-red-400 focus:border-red-500" 
                        : "border-gray-200 group-hover:border-gray-300"
                    }`}
                    style={{
                      ...(formData.message && !errors.message && { borderColor: '#105d97' })
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#105d97'}
                    onBlur={(e) => !formData.message && (e.target.style.borderColor = '')}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-2 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={status === "Đang gửi..."}
                  className="w-full text-white font-bold py-4 px-6 rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: '#105d97',
                    boxShadow: '0 4px 14px 0 rgba(16, 93, 151, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0d4c7a';
                    e.target.style.boxShadow = '0 6px 20px 0 rgba(16, 93, 151, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#105d97';
                    e.target.style.boxShadow = '0 4px 14px 0 rgba(16, 93, 151, 0.3)';
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 4px rgba(16, 93, 151, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 4px 14px 0 rgba(16, 93, 151, 0.3)';
                  }}
                  aria-disabled={status === "Đang gửi..."}
                >
                  {status === "Đang gửi..." ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Đăng ký tư vấn ngay
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
              
              {status && (
                <div className={`mt-6 p-4 rounded-xl border-l-4 ${
                  status.includes("thành công") 
                    ? "bg-blue-50 text-blue-700" 
                    : "bg-red-50 border-red-400 text-red-700"
                }`}
                style={{
                  ...(status.includes("thành công") && { borderLeftColor: '#105d97' })
                }}>
                  <div className="flex items-center">
                    {status.includes("thành công") ? (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" style={{color: '#105d97'}}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    )}
                    <p className="font-medium">{status}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .group:hover .group-hover\:border-gray-300 {
          border-color: #d1d5db;
        }
      `}</style>
    </div>
  );
}