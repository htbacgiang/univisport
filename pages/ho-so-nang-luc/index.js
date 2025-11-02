import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from '../../styles/Profile.module.css';
import DefaultLayout from '../../components/layout/DefaultLayout';

// Configure the pdf.js worker with a more compatible version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Profile({ meta }) {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [useFallback, setUseFallback] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDownloadOnly, setShowDownloadOnly] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setError(null);
    setUseFallback(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('Failed to load PDF with react-pdf:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    setUseFallback(true);
  };

  const handleIframeError = () => {
    setShowDownloadOnly(true);
    setError('Không thể hiển thị PDF trực tiếp. Vui lòng tải về để xem.');
  };

  useEffect(() => {
    setIsClient(true);
    
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
      
      // On mobile, use Google Docs viewer as primary fallback
      if (isMobileDevice) {
        setUseFallback(true);
      }
    };
    
    checkMobile();
    
    // Listen for resize events
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DefaultLayout >
      <div className={styles.container} >
        <div className="mt-[60px] sm:mt-[91px]">

        </div>
        <main className={styles.main}>
          <div className={styles.pdfContainer}>
            {error && <p className={styles.error}>{error}</p>}
            {!useFallback ? (
              <Document
                file="/ho-so-nang-luc.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
              >
                {numPages &&
                  Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      className={styles.pdfPage}
                      scale={isMobile ? 0.8 : 1.0}
                      width={isClient ? (isMobile ? window.innerWidth - 20 : Math.min(window.innerWidth, 800)) : 800}
                    />
                  ))}
              </Document>
            ) : (
              <div className={styles.fallbackContainer}>
                {showDownloadOnly ? (
                  // Show download-only view when all viewers fail
                  <div className={styles.downloadOnlyContainer}>
                    <div className={styles.downloadIcon}>📄</div>
                    <h3 className={styles.downloadTitle}>Hồ sơ năng lực Đồng phục Univi</h3>
                    <p className={styles.downloadDescription}>
                      Để xem hồ sơ năng lực, vui lòng tải file PDF về thiết bị của bạn.
                    </p>
                    <a 
                      href="/ho-so-nang-luc.pdf" 
                      download 
                      className={styles.downloadButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📥 Tải hồ sơ năng lực (PDF)
                    </a>
                  </div>
                ) : (
                  <>
                    {isMobile ? (
                      // Use Google Docs Viewer for mobile - better compatibility
                      <iframe
                        src={`https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + '/ho-so-nang-luc.pdf')}&embedded=true`}
                        width="100%"
                        height="100%"
                        title="Hồ sơ năng lực Đồng phục Univi"
                        className={styles.pdfIframe}
                        style={{ border: 'none' }}
                        onError={handleIframeError}
                      />
                    ) : (
                      // Use direct PDF for desktop
                      <iframe
                        src="/ho-so-nang-luc.pdf#toolbar=0&view=FitH"
                        width="100%"
                        height="100%"
                        title="Hồ sơ năng lực Đồng phục Univi"
                        className={styles.pdfIframe}
                        style={{ border: 'none' }}
                        onError={handleIframeError}
                      />
                    )}
                    
                    {/* Show download link as fallback */}
                    <div className={styles.downloadSection}>
                      <p className={styles.downloadText}>
                        Nếu không thể xem trực tiếp, bạn có thể tải về để xem:
                      </p>
                      <a 
                        href="/ho-so-nang-luc.pdf" 
                        download 
                        className={styles.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📄 Tải hồ sơ năng lực (PDF)
                      </a>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const meta = {
    title: "Hồ sơ năng lực Đồng phục Univi - Quần áo thể thao chất lượng cao",
    content:
      "Đồng phục Univi – Thương hiệu quần áo thể thao với công nghệ Uni Dry, chất liệu vải chuyên dụng cho gym, yoga, chạy bộ và golf. An toàn cho da, thoải mái khi vận động.",
    keywords:
      "hồ sơ năng lực Đồng phục Univi, quần áo thể thao, công nghệ Uni Dry, vải thể thao, trang phục gym, quần áo yoga, chạy bộ, vải an toàn cho da",
    robots: "index, follow",
    author: "Đồng phục Univi",
    canonical: "https://dongphucunivi.com/ho-so-nang-luc",

    og: {
      title: "Đồng phục Univi – Quần áo thể thao chuyên dụng",
      description:
        "Khám phá hồ sơ năng lực Đồng phục Univi: quần áo thể thao với công nghệ Uni Dry, chất liệu cao cấp, an toàn cho da, phù hợp cho gym, yoga, chạy bộ.",
      type: "website",
      image: "https://dongphucunivi.com/images/banner-1.webp",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://dongphucunivi.com/ho-so-nang-luc",
    },
    twitter: {
      card: "summary_large_image",
      title: "Hồ sơ năng lực Đồng phục Univi - Quần áo thể thao chất lượng cao",
      description:
        "Đồng phục Univi – Thương hiệu quần áo thể thao với công nghệ Uni Dry, chất liệu vải chuyên dụng cho gym, yoga, chạy bộ và golf.",
      image: "https://dongphucunivi.com/images/banner-1.webp",
    },
  };

  return {
    props: {
      meta,
    },
  };
}