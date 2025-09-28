import React, { useEffect, useState, useMemo, useRef } from "react";
import { FaShoppingCart, FaEye, FaRegHeart, FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill, BsChevronDown } from "react-icons/bs";
import {
  FiMinus,
  FiPlus,
  FiSearch,
  FiGrid,
  FiList,
  FiFilter,
} from "react-icons/fi";

import ProductCard from "./ProductCard.jsx";
import debounce from "lodash/debounce";

export default function Product3() {
  const [isListView, setIsListView] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState(""); // Mặc định
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Tìm kiếm theo tên sản phẩm
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const itemsPerPage = 3; // Số sản phẩm mỗi trang

  // Fetch sản phẩm từ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        const data = await res.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Gợi ý và tìm kiếm
  const handleSearch = useMemo(
    () =>
      debounce((query) => {
        setSearchQuery(query);

        if (!query) {
          setFilteredProducts(products); // Hiển thị tất cả sản phẩm nếu không có từ khóa
          return;
        }

        const lowerQuery = query.toLowerCase();
        const result = products.filter((product) =>
          product.title?.toLowerCase().includes(lowerQuery)
        );
        setFilteredProducts(result);
      }, 300),
    [products]
  );

  useEffect(() => {
    return () => handleSearch.cancel(); // Hủy debounce khi component bị unmount
  }, [handleSearch]);

  const handlePriceFilter = (range) => setPriceRange(range);
  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false); // Đóng dropdown
  };
  const handlePageChange = (page) => setCurrentPage(page);

  // Lọc và sắp xếp sản phẩm
  const filteredAndSortedProducts = [...products]
    .filter((product) => {
      const isInCategory =
        selectedCategory === "Tất cả" || product.category === selectedCategory;
      const isInPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return isInCategory && isInPriceRange;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "bestselling":
          return b.sold - a.sold;
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0; // Mặc định
      }
    });

  // Kết hợp tìm kiếm, lọc và sắp xếp
  const combinedFilteredProducts = useMemo(() => {
    return [...filteredProducts]
      .filter((product) => {
        const isInCategory =
          selectedCategory === "Tất cả" ||
          product.category === selectedCategory;
        const isInPriceRange =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        return isInCategory && isInPriceRange;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "bestselling":
            return b.sold - a.sold;
          case "newest":
            return new Date(b.createdAt) - new Date(a.createdAt);
          default:
            return 0; // Mặc định
        }
      });
  }, [filteredProducts, selectedCategory, priceRange, sortOption]);

  // Phân trang
  const totalPages = Math.ceil(combinedFilteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    return combinedFilteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [combinedFilteredProducts, currentPage, itemsPerPage]);

  const handleIconClick = () => {
    setIsExpanded(true); // Mở rộng thanh tìm kiếm
    inputRef.current?.focus(); // Đưa focus vào input
  };

  const handleBlur = () => {
    setIsExpanded(false); // Thu gọn khi mất focus
  };
  // Lắng nghe sự kiện click bên ngoài dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);
  return (
    <div className="min-h-screen bg-gray-100 md:p-5 p-0">
      <div className="container mx-auto py-6 px-1 md:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-12 md:gap-6 gap-2 mb-6">
          <aside className="col-span-3 bg-white p-4 rounded shadow hidden md:block">
            <div>
              <h2 className="font-semibold mb-2">Danh mục</h2>
              <ul className="space-y-2">
                <li>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "Tất cả"}
                    onChange={() => handleCategoryChange("Tất cả")}
                  />{" "}
                  Tất cả
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "rau-huu-co"}
                    onChange={() => handleCategoryChange("rau-huu-co")}
                  />{" "}
                  Rau hữu cơ
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "cu-qua"}
                    onChange={() => handleCategoryChange("cu-qua")}
                  />{" "}
                  Củ - quả - hạt
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "thuc-pham-kho"}
                    onChange={() => handleCategoryChange("Thực phẩm khô")}
                  />{" "}
                  Thực phẩm khô
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "tra"}
                    onChange={() => handleCategoryChange("Trà")}
                  />{" "}
                  Trà
                </li>
                <li>
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === "trai-cay"}
                    onChange={() => handleCategoryChange("Trái cây")}
                  />{" "}
                  Trái cây
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Mức giá</h2>
              <ul className="space-y-2">
                <li>
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === 0 && priceRange[1] === Infinity}
                    onChange={() => handlePriceFilter([0, Infinity])}
                  />{" "}
                  Tất cả mức giá
                </li>
                <li>
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === 0 && priceRange[1] === 30000}
                    onChange={() => handlePriceFilter([0, 30000])}
                  />{" "}
                  10,000₫ - 30,000₫
                </li>
                <li>
                  <input
                    type="radio"
                    name="price"
                    checked={priceRange[0] === 30001 && priceRange[1] === 50000}
                    onChange={() => handlePriceFilter([30001, 50000])}
                  />{" "}
                  30,000₫ - 50,000₫
                </li>
                <li>
                  <input
                    type="radio"
                    name="price"
                    checked={
                      priceRange[0] === 50001 && priceRange[1] === 100000
                    }
                    onChange={() => handlePriceFilter([50001, 100000])}
                  />{" "}
                  50,000₫ - 100,000₫
                </li>
                <li>
                  <input
                    type="radio"
                    name="price"
                    checked={
                      priceRange[0] === 100001 && priceRange[1] === Infinity
                    }
                    onChange={() => handlePriceFilter([100001, Infinity])}
                  />{" "}
                  Trên 100,000₫
                </li>
              </ul>
            </div>
            {/* Quảng cáo */}
            <div className="mt-6 bg-white p-4 rounded shadow flex flex-col items-center text-center">
              <img
                src="https://orgado.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflash-banner-01.7f962f08.jpg&w=640&q=75" // Thay URL này bằng đường dẫn đến ảnh quảng cáo thực tế
                alt="Advertisement"
                className="w-full rounded mb-4"
              />
              <h3 className="text-lg font-semibold">Freshly Maitta Potato</h3>
              <p className="text-sm text-gray-500">From $9.00</p>
              <div className="mt-2">
                <span className="text-white bg-orange-500 py-1 px-3 rounded-full text-xs">
                  Hot Item
                </span>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9">
            <header className="bg-white shadow mb-4 p-4 rounded flex justify-between items-center">
              <div className="flex items-center w-full">
                <div className="flex items-center justify-between w-full ">
                  <div className="flex items-center space-x-2">
                    <div className="relative dropdown-container ml-0">
                      <button
                        className="bg-white border md:px-5 px-2 py-1 rounded flex items-center justify-center space-x-2 whitespace-nowrap"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>
                          {sortOption === "price-asc"
                            ? "Giá: Thấp - Cao"
                            : sortOption === "price-desc"
                            ? "Giá: Cao - Thấp"
                            : sortOption === "bestselling"
                            ? "Bán chạy nhất"
                            : sortOption === "newest"
                            ? "Mới nhất"
                            : "Sắp xếp"}
                        </span>
                        <BsChevronDown />
                      </button>
                      {isDropdownOpen && (
                        <ul
                          className="absolute left-0 bg-white border rounded shadow-md mt-2 w-48 z-10 whitespace-nowrap"
                          style={{ minWidth: "12rem" }} // Kích thước cố định
                        >
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSortChange("")}
                          >
                            Mặc định
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSortChange("price-asc")}
                          >
                            Giá: Thấp - Cao
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSortChange("price-desc")}
                          >
                            Giá: Cao - Thấp
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSortChange("bestselling")}
                          >
                            Bán chạy nhất
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSortChange("newest")}
                          >
                            Mới nhất
                          </li>
                        </ul>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Mobile: Hiển thị icon tương ứng với chế độ hiện tại */}
                      {isListView ? (
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center md:hidden"
                          onClick={() => setIsListView(false)} // Chuyển về Grid View
                        >
                          <FiGrid />
                        </button>
                      ) : (
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center md:hidden"
                          onClick={() => setIsListView(true)} // Chuyển về List View
                        >
                          <FiList />
                        </button>
                      )}
                      {/* Icon Filter */}
                      <button className="bg-orange-500 text-white px-4 py-2 rounded flex items-center justify-center md:hidden">
                        <FiFilter />
                      </button>
                      {/* Desktop: Hiển thị cả hai icon */}
                      <button
                        className={`${
                          !isListView ? "bg-green-500 text-white" : "border"
                        } px-4 py-2 rounded  items-center justify-center hidden md:inline-flex`}
                        onClick={() => setIsListView(false)} // Chuyển về Grid View
                      >
                        <FiGrid />
                      </button>
                      <button
                        className={`${
                          isListView ? "bg-green-500 text-white" : "border"
                        } px-4 py-2 rounded items-center justify-center hidden md:inline-flex`}
                        onClick={() => setIsListView(true)} // Chuyển về List View
                      >
                        <FiList />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`md:relative bg-white right-3 absolute  flex items-center justify-center border border-gray-300 rounded-full transition-all duration-300 ${
                    isExpanded ? "w-8/12 z-50 overflow-hidden" : "w-10"
                  } h-10 sm:w-full sm:h-12 focus-within:border-green-500 overflow-hidden`}
                  onBlur={handleBlur}
                >
                  {/* Icon search */}
                  <FiSearch
                    className="absolute left-3 text-gray-500 cursor-pointer sm:left-4"
                    onClick={handleIconClick}
                  />

                  {/* Input */}
                  <input
                    ref={inputRef}
                    type="text"
                    className={` outline-none border-none w-full pl-10 text-sm text-gray-700 sm:pl-14 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    } sm:opacity-100`}
                    placeholder="Tìm kiếm sản phẩm"
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={handleIconClick}
                  />
                </div>
              </div>
            </header>

            {/* Product Section */}
            {loading ? (
              <p className="text-center">Đang tải...</p>
            ) : combinedFilteredProducts.length > 0 ? (
              <div
                className={`grid ${
                  isListView ? "grid-cols-1" : "grid-cols-2 md:grid-cols-5"
                } gap-2`}
              >
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    view={isListView ? "list" : "grid"}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center">Không tìm thấy sản phẩm nào.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
