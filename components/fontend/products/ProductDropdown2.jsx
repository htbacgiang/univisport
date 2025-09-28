import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/images/menu-banner-1.jpg";
import img2 from "../../../public/images/menu-banner-2.jpg";
const ProductDropdown = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative group">
      {/* Trigger Button */}
      <Link
        href="/san-pham"
        className={`cursor-pointer uppercase ${isScrolled ? "text-[#105d97]" : "text-[#105d97]"
          } hover:text-blue-300 font-heading font-semibold transition-colors duration-200`}
      >
        Sản phẩm
      </Link>

      {/* Dropdown Content */}
      <div className="absolute left-1/2 top-full transform -translate-x-1/2 border-t-4 border-[#105d97] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-50 w-[1000px]">
        <div className="grid grid-cols-4 gap-6 p-6">
          {/* Column 1 */}
          <div className="">
            <div className="font-bold mb-4 text-[#105d97] bg-gray-100 border-b border-[#105d97] border-dotted  ">
              <p>
                <h3 className="p-2 cursor-pointer">Đồng phục thể thao</h3>
              </p>
            </div>
            <ul className="space-y-3 pl-2">
              <li>
                <Link href="/san-pham/dong-phuc-gym" className="hover:text-[#105d97] py-2">
                  Đồng phục Gym
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-pickleball" className="hover:text-[#105d97]  py-2">
                  Đồng phục Pickleball
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-yoga-pilates" className="hover:text-[#105d97] py-2">
                  Đồng phục Yoga - Pilates
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-chay-bo" className="hover:text-[#105d97]  py-2">
                  Đồng phục Chạy bộ
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-le-tan" className="hover:text-[#105d97]  py-2">
                  Đồng phục Lễ tân
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-mma" className="hover:text-[#105d97]  py-2">
                  Đồng phục MMA
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <div className="font-bold mb-4 text-[#105d97] bg-gray-100 border-b border-[#105d97] border-dotted ">
              <p>
                <h3 className="p-2 cursor-pointer">Đồng phục doanh nghiệp</h3>
              </p>
            </div>
            <ul className="space-y-3 pl-2">
              <li>
                <Link href="/san-pham/dong-phuc-ao-polo" className="hover:text-[#105d97]">
                  Đồng phục áo Polo
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-ao-thun" className="hover:text-[#105d97]">
                  Đồng phục áo thun
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-cong-so" className="hover:text-[#105d97]">
                  Đồng phục công sở
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-team-building" className="hover:text-[#105d97]">
                  Đồng phục Team building
                </Link>
              </li>
              <li>
                <Link href="/san-pham/dong-phuc-su-kien" className="hover:text-[#105d97]">
                  Đồng phục Sự kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Image */}
          <div className="flex items-center justify-center">
            <Image
              src={img} // Đường dẫn tới hình ảnh của bạn
              alt="Sản phẩm nổi bật"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
          {/* Column 4: Image */}
          <div className="flex items-center justify-center">
            <Image
              src={img2} // Đường dẫn tới hình ảnh của bạn
              alt="Sản phẩm nổi bật"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;