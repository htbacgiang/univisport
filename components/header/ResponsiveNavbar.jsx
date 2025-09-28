import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../../public/logo-univi.webp";
// Icon container with fixed size to unify icon appearance
const IconWrapper = ({ children }) => (
  <span className="w-5 h-5 flex items-center justify-center text-lg">
    {children}
  </span>
);

const menuItems = [
  { name: "Trang chủ", link: "/" },
  {
    name: "Về Đồng phục Univi",
    dropdown: [
      { name: "Giới thiệu", link: "/gioi-thieu" },
      { name: "Hồ sơ năng lực", link: "/ho-so-nang-luc" },
    ],
  },
  {
    name: "Sản phẩm",
    link: "/san-pham",
    dropdown: [
      {
        name: "Đồng phục thể thao",
        subDropdown: [
          { name: " GYM", link: "/san-pham/dong-phuc-gym" },
          { name: "MMA", link: "/san-pham/dong-phuc-mma" },
          { name: "Lễ tân", link: "/san-pham/dong-phuc-le-tan" },
          { name: "Chạy bộ", link: "/san-pham/dong-phuc-chay-bo" },
          { name: "Pickleball", link: "/san-pham/dong-phuc-pickleball" },
          { name: "YOGA - Pilates", link: "/san-pham/dong-phuc-yoga-pilates" },

        ],
      },
      {
        name: "Đồng phục doanh nghiệp",
        subDropdown: [
          { name: "Áo Polo", link: "/san-pham/dong-phuc-ao-polo" },
          { name: "Áo thun", link: "/san-pham/dong-phuc-ao-thun" },
          { name: "Công sở", link: "/san-pham/dong-phuc-cong-so" },
          { name: "Sự kiện", link: "/san-pham/dong-phuc-su-kien" },
          { name: "Team building", link: "/san-pham/dong-phuc-team-building" },

        ],
      },
    ],
  },
  { name: "Bài viết", link: "/bai-viet" },
  { name: "Liên hệ", link: "/lien-he" },
];

const ResponsiveMenu = ({ isOpen, toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = (idx) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (subIdx) => {
    setActiveSubDropdown(activeSubDropdown === subIdx ? null : subIdx);
  };

  const toggleContactPopup = () => setContactPopupOpen(!contactPopupOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        if (contactPopupOpen) setContactPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [contactPopupOpen]);

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      />

      {/* sidebar */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-80 h-full bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* header */}
        <div className="relative bg-gray-800 p-6 opacity-100">
          <button
            onClick={toggleMenu}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
          >
            <X size={20} className="text-white" />
          </button>
          <div className="flex justify-center">
            <Image src={logo} alt="Logo Univi" width={100} height={50} className="brightness-0 invert" />
          </div>
        </div>

        {/* menu list */}
        <div className="flex-1 overflow-y-auto">
          <ul className="px-6 py-4 space-y-2">
            {menuItems.map((item, idx) => (
              <li key={idx} className="border-b border-gray-100 last:border-b-0">
                {item.dropdown ? (
                  <div
                    onClick={() => toggleDropdown(idx)}
                    className="flex justify-between items-center py-4 cursor-pointer group transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-800 group-hover:text-[#105d97] transition-colors duration-200">
                      {item.name}
                    </span>
                    <div className="p-1 rounded-full group-hover:bg-[#105d97]/10 transition-colors duration-200">
                      {activeDropdown === idx ? (
                        <ChevronUp size={16} className="text-[#105d97]" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-500 group-hover:text-[#105d97] transition-colors duration-200" />
                      )}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.link} 
                    onClick={toggleMenu} 
                    className="block py-4 font-semibold text-gray-800 hover:text-[#105d97] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* dropdown content */}
                {activeDropdown === idx && (
                  <div className="bg-gray-50 border-l-4 border-[#105d97] ml-4 mb-4">
                    <ul className="py-2">
                      {item.name === "Về Đồng phục Univi"
                        ? item.dropdown.map((sub, i) => (
                            <li key={i}>
                              <Link
                                href={sub.link}
                                onClick={toggleMenu}
                                className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-[#105d97] hover:bg-white transition-colors duration-200"
                              >
                                <ChevronRight size={14} className="mr-2 text-gray-400" />
                                <span>{sub.name}</span>
                              </Link>
                            </li>
                          ))
                        : item.dropdown.map((grp, gIdx) => (
                            <li key={gIdx}>
                              <div
                                onClick={() => toggleSubDropdown(gIdx)}
                                className="flex justify-between items-center py-3 px-4 text-sm cursor-pointer font-medium text-gray-700 hover:text-[#105d97] hover:bg-white transition-colors duration-200"
                              >
                                <span>{grp.name}</span>
                                <div className="p-1 rounded-full hover:bg-[#105d97]/10 transition-colors duration-200">
                                  {activeSubDropdown === gIdx ? (
                                    <ChevronUp size={14} className="text-[#105d97]" />
                                  ) : (
                                    <ChevronDown size={14} className="text-gray-500" />
                                  )}
                                </div>
                              </div>
                              {activeSubDropdown === gIdx && grp.subDropdown && (
                                <ul className="bg-white border-t border-gray-200">
                                  {grp.subDropdown.map((n, nIdx) => (
                                    <li key={nIdx}>
                                      <Link 
                                        href={n.link} 
                                        onClick={toggleMenu} 
                                        className="block py-2 px-8 text-sm text-gray-600 hover:text-[#105d97] hover:bg-gray-50 transition-colors duration-200"
                                      >
                                        {n.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                    </ul>
                  </div>
                )}
            </li>
          ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="text-center">
            <p className="text-base text-gray-500 mb-2 uppercase  ">Đồng phục Univi</p>
            <p className="text-sm text-gray-400">Chất lượng - Uy tín - Chuyên nghiệp</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
