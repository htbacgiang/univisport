import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ContactForm from '../header/ContactForm'; // Adjust path as needed

// URL mẫu cho hình ảnh (thay bằng tệp cục bộ hoặc URL của bạn)
const fabrics = [
  {
    bgImage: '../images/uni-quickdry.webp',
    title: 'UNIVI QUICK DRY',
    description:
      'Thành phần chính là sợi Polyester cao cấp PET (82-100%), co giãn đa chiều, nhẹ, nhanh khô, chống tia UV,... Thích hợp cho các bộ môn Gym, Fitnnes, MMA, Running, Pickleball, Tennis,...',
  },
  {
    bgImage: '../images/uni-supper-cool.webp',
    title: 'UNIVI SUPER COOL',
    description:
      'Thành phần chính là sợi Polyamide (76-90%), dòng vải thể thao cao cấp nhất trên thị trường. Với đặc tính mềm, mát, mịn, co giãn tốt, chống nhăn, bền form,... Thích hợp cho các bộ môn Yoga, Pilates, Dance, Aerobic,...',
  },
  {
    bgImage: '../images/uni-blended.webp',
    title: 'UNIVI BLENDED',
    description:
      'Là sự kết hợp của Polyester và Cotton. Nhanh khô, mềm mịn, mát, nhẹ, chống tia UV cao hơn, chống nhăn nhàu và rất bền màu. Ứng dụng cho các bộ môn Pickleball, Running, Cycling,...',
  },
];

// URL mẫu cho nền section
const sectionBg = '../images/banner-4.webp';

const FabricCardComponent = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const handleFreeDesign = () => {
    console.log('Free design clicked');
  };

  const handleGetQuote = () => {
    setContactPopupOpen(!contactPopupOpen);
  };

  // Handle click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setContactPopupOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      {/* Lớp phủ mờ cho toàn bộ section */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Gradient trên */}
      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #FFFFFF, rgba(255, 255, 255, 0.5), transparent)',
        }}
      />

      {/* Gradient dưới */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          backgroundImage:
            'linear-gradient(to top, #FFFFFF, rgba(255, 255, 255, 0.5), transparent)',
        }}
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl opacity-90">
        {fabrics.map((fabric, index) => (
          <div
            key={index}
            role="region"
            aria-labelledby={`fabric-title-${index}`}
            className="
              relative 
              text-white 
              rounded-lg 
              shadow-lg 
              flex 
              flex-col 
              justify-center 
              items-center 
              bg-cover 
              bg-center 
              aspect-video      /* mặc định mobile: 16:9 */
              md:aspect-[9/16]  /* từ md trở lên: 9:16 */
            "
            style={{ backgroundImage: `url(${fabric.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
              <h2
                id={`fabric-title-${index}`}
                className="text-xl font-bold mb-2 text-center"
              >
                {fabric.title}
              </h2>
              <div className="w-12 h-1 bg-white mx-auto mb-4" />
              <p className="text-base text-center">{fabric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-8 flex space-x-4">
        <button
          onClick={handleFreeDesign}
          className="bg-[#105d97] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
          aria-label="Request free design"
        >
          Miễn phí thiết kế
        </button>
        <button
          onClick={handleGetQuote}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          aria-label="Get a quote"
        >
          Nhận báo giá
        </button>
      </div>

      {/* Contact Form Popup */}
      {contactPopupOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={handleGetQuote} // Close when clicking outside
        >
          <div
            ref={popupRef}
            className="bg-white rounded-2xl shadow-lg max-w-5xl w-full mx-4 animate-slide-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="flex justify-end items-center p-4 border-b">
              <AiOutlineClose
                className="cursor-pointer"
                size={25}
                onClick={handleGetQuote}
              />
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(FabricCardComponent);