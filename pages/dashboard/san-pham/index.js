import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import AdminLayout from '../../../components/layout/AdminLayout';
import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Edit, Trash2, Plus } from 'lucide-react';
import styles from '../../../styles/dashboard-products.module.css';

export default function ProductsListPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const tableContainerRef = useRef(null);

  // Hàm chuyển đổi đường dẫn tương đối thành URL Cloudinary
  const toCloudinaryUrl = (relativePath) => {
    if (!relativePath) {
      return '/images/placeholder.jpg';
    }
    // Handle full Cloudinary URLs (e.g., /image/upload/v1746031101/tantruonggiang/akg3fkt1yudbobzwmej5.png)
    if (relativePath.includes('/image/upload/')) {
      const parts = relativePath.split('/');
      const versionIndex = parts.findIndex((part) => part.startsWith('v') && !isNaN(part.slice(1)));
      if (versionIndex !== -1) {
        const cleanPath = parts.slice(versionIndex + 1).join('/');
        return `https://res.cloudinary.com/dcgtt1jza/image/upload/v1/${cleanPath}`;
      }
    }
    // Handle relative paths (e.g., /tantruonggiang/akg3fkt1yudbobzwmej5.png or /akg3fkt1yudbobzwmej5.png)
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return `https://res.cloudinary.com/dcgtt1jza/image/upload/v1/${cleanPath}`;
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/products');
      const products = response.data.products || [];
      console.log('Products from API:', products);
      setAllProducts(products);
      setTotalPages(Math.ceil(products.length / limit));
      setDisplayedProducts(products.slice(0, limit));
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Không thể tải danh sách sản phẩm', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    setDisplayedProducts(allProducts.slice(startIndex, endIndex));

    if (tableContainerRef.current) {
      tableContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page, allProducts, limit]);

  const handleDelete = async () => {
    if (!productToDelete) return;

    setLoading(true);
    try {
      await axios.delete(`/api/products?id=${productToDelete}`);
      toast.success('Sản phẩm đã được xóa thành công', {
        position: 'top-right',
        autoClose: 3000,
      });
      const updatedProducts = allProducts.filter((product) => product._id !== productToDelete);
      setAllProducts(updatedProducts);
      setTotalPages(Math.ceil(updatedProducts.length / limit));
      if (updatedProducts.length > 0 && displayedProducts.length === 1 && page > 1) {
        setPage(page - 1);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Không thể xóa sản phẩm', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
      setIsModalOpen(false);
      setProductToDelete(null);
    }
  };

  const confirmDelete = (id) => {
    setProductToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const ellipsis = "...";

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, page - 2);
      let endPage = Math.min(totalPages, page + 2);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push(ellipsis);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push(ellipsis);
        pageNumbers.push(totalPages);
      }
    }

    return (
      <div className={styles.pagination}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={styles.paginationButton}
        >
          Trước
        </button>
        {pageNumbers.map((num, index) => (
          <button
            key={index}
            onClick={() => typeof num === 'number' && setPage(num)}
            disabled={num === ellipsis}
            className={`${styles.pageNumber} ${
              num === page
                ? styles.active
                : num === ellipsis
                ? styles.ellipsis
                : ''
            }`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={styles.paginationButton}
        >
          Sau
        </button>
      </div>
    );
  };

  return (
    <AdminLayout title="Danh sách sản phẩm">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Danh sách sản phẩm</h2>
          <Link href="/dashboard/them-san-pham">
            <button className={styles.addButton}>
              <Plus size={20} />
              Thêm sản phẩm
            </button>
          </Link>
        </div>

        {loading && allProducts.length === 0 ? (
          <div className={styles.loading}>Đang tải...</div>
        ) : (
          <div className={styles.mainContent}>
            <div ref={tableContainerRef} className={styles.tableContainer}>
              <table
                className={styles.table}
                role="grid"
                aria-label="Danh sách sản phẩm"
              >
                <thead className={styles.tableHead}>
                  <tr>
                    <th className={styles.tableHeader} scope="col">
                      STT
                    </th>
                    <th className={styles.tableHeader} scope="col">
                      Tên sản phẩm
                    </th>
                    <th className={styles.tableHeader} scope="col">
                      Ảnh đại diện
                    </th>
                    <th className={styles.tableHeader} scope="col">
                      Mã sản phẩm
                    </th>
                    <th className={styles.tableHeader} scope="col">
                      Danh mục
                    </th>
                    <th className={styles.tableHeader} scope="col">
                      Giá
                    </th>
                    <th className={styles.tableHeader} scope="col">
                      Hành động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayedProducts.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className={styles.emptyState}
                      >
                        Không có sản phẩm nào
                      </td>
                    </tr>
                  ) : (
                    displayedProducts.map((product, index) => (
                      <tr
                        key={product._id}
                        className={styles.tableRow}
                        role="row"
                      >
                        <td className={styles.tableCell}>{(page - 1) * limit + index + 1}</td>
                        <td className={styles.tableCell}>
                          <span className={styles.productName}>{product.name || 'N/A'}</span>
                        </td>
                        <td className={styles.tableCell}>
                          <Image
                            src={toCloudinaryUrl(product.image)}
                            alt={product.name || 'Sản phẩm'}
                            width={40}
                            height={40}
                            className={styles.productImage}
                          />
                        </td>
                        <td className={styles.tableCell}>
                          <span className={styles.productCode}>{product.maSanPham || 'N/A'}</span>
                        </td>
                        <td className={styles.tableCell}>
                          <span className={styles.category}>
                            {product.categoryNameVN || product.category || 'Không xác định'}
                          </span>
                        </td>
                        <td className={styles.tableCell}>
                          <span className={styles.price}>
                            {(typeof product.price === 'number' ? product.price : 0).toLocaleString('vi-VN')} - 
                            {(typeof product.originalPrice === 'number' ? product.originalPrice : 0).toLocaleString('vi-VN')}
                          </span>
                        </td>
                        <td className={styles.tableCell}>
                          <div className={styles.actionButtons}>
                            <Link href={`/dashboard/them-san-pham/?id=${product._id}`}>
                              <button
                                className={`${styles.actionButton} ${styles.editButton}`}
                                aria-label={`Sửa sản phẩm ${product.name || 'Sản phẩm'}`}
                              >
                                <Edit size={16} />
                              </button>
                            </Link>
                            <button
                              onClick={() => confirmDelete(product._id)}
                              className={`${styles.actionButton} ${styles.deleteButton}`}
                              aria-label={`Xóa sản phẩm ${product.name || 'Sản phẩm'}`}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {totalPages > 1 && renderPagination()}

        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3 className={styles.modalTitle}>
                Xác nhận xóa
              </h3>
              <p className={styles.modalText}>
                Bạn có chắc muốn xóa sản phẩm này?
              </p>
              <div className={styles.modalActions}>
                <button
                  onClick={closeModal}
                  className={`${styles.modalButton} ${styles.cancel}`}
                >
                  Hủy
                </button>
                <button
                  onClick={handleDelete}
                  className={`${styles.modalButton} ${styles.delete}`}
                  disabled={loading}
                >
                  {loading ? 'Đang xóa...' : 'Xóa'}
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </AdminLayout>
  );
}