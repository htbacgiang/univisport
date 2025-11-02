import { useState, useMemo } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout2 from "../../components/layout/DefaultLayout2";
import { formatPosts, readPostsFromDb } from "../../lib/utils";
import { PostDetail } from "../../utils/types";

type MetaData = {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    type: string;
    image: string;
    imageWidth: string;
    imageHeight: string;
    url: string;
    siteName: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
};

type Props = {
  posts: PostDetail[];
  meta: MetaData;
};

const Blogs: NextPage<Props> = ({ posts, meta }) => {
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  }, [currentPage, posts]);

  const formatDate = (date: string): string =>
    new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    const pageNumbers: (number | string)[] = [];

    pageNumbers.push(1);

    if (totalPages <= maxPagesToShow + 1) {
      for (let i = 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);

      if (currentPage <= 3) {
        startPage = 2;
        endPage = maxPagesToShow;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - maxPagesToShow;
        endPage = totalPages - 1;
      }

      if (startPage > 2) {
        pageNumbers.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      if (totalPages > 1) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <DefaultLayout2>
      <div className="relative h-[40vh] w-full">
        <Image
          src="/images/banner-univi.png"
          alt="Tin tức - Đồng phục Univi"
          layout="fill"
          objectFit="cover"
          className="opacity-70 brightness-75"
        />
        <div className="absolute inset-0 bg-black/80 bg-opacity-80 flex items-end">
          <div className="p-6 md:p-10">
            <nav aria-label="Breadcrumb">
              <p className="text-sm uppercase text-gray-400">
                <Link href="/">
                  <span className="hover:text-[#105d97] cursor-pointer">
                    Trang chủ
                  </span>
                </Link>{" "}
                / Tin tức
              </p>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Bài viết - Đồng phục Univi
            </h1>
            <p className="text-lg md:text-xl text-white mt-2">
              Khám phá các bài viết về đồng phục, xu hướng thiết kế và kinh
              nghiệm chọn đồng phục chất lượng.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {posts.length > 0 ? (
            <div className="max-w-7xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Bài viết mới nhất</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Khám phá các bài viết về đồng phục, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng
                </p>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post, index) => (
                  <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    {post.thumbnail && (
                      <div className="relative overflow-hidden">
                        <Link href={`/bai-viet/${post.slug}`}>
                          <div className="relative h-48 w-full">
                            <Image
                              src={post.thumbnail}
                              fill
                              priority={index < 3}
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              alt={post.title}
                            />
                          </div>
                        </Link>
                     
                      </div>
                    )}
                    <div className="py-3 px-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500">
                          {formatDate(post.createdAt)}
                        </span>
                      </div>
                      <Link
                        href={`/bai-viet/${post.slug}`}
                        className="block group-hover:text-[#105d97] transition-colors duration-200"
                        aria-label={post.title}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#105d97] transition-colors duration-200">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.meta}                     
                       </p>
                      <Link
                        href={`/bai-viet/${post.slug}`}
                        className="inline-flex items-center text-[#105d97] font-semibold text-sm hover:text-[#0e4a7a] transition-colors duration-200"
                      >
                        Đọc thêm
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center">
                  <nav className="flex items-center gap-2" aria-label="Pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-2 py-2 rounded-full text-sm font-medium text-gray-500 bg-white border border-gray-200 hover:bg-[#105d97] hover:text-white hover:border-[#105d97] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Go to previous page"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {getPageNumbers().map((page, index) => (
                      <div key={`${page}-${index}`}>
                        {page === "..." ? (
                          <span className="px-4 py-2 text-sm font-medium text-gray-500">
                            ...
                          </span>
                        ) : (
                          <button
                            onClick={() => handlePageChange(page as number)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                              currentPage === page
                                ? "bg-[#105d97] text-white shadow-lg"
                                : "text-gray-700 bg-white border border-gray-200 hover:bg-[#105d97] hover:text-white hover:border-[#105d97]"
                            }`}
                            aria-label={`Go to page ${page}`}
                          >
                            {page}
                          </button>
                        )}
                      </div>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-2 py-2 rounded-full text-sm font-medium text-gray-500 bg-white border border-gray-200 hover:bg-[#105d97] hover:text-white hover:border-[#105d97] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Go to next page"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-xl shadow-lg p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chưa có bài viết nào</h3>
                <p className="text-gray-600">Chúng tôi đang chuẩn bị nội dung hấp dẫn cho bạn. Hãy quay lại sau nhé!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout2>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: PostDetail[];
  meta: MetaData;
}> = async () => {
  try {
    const posts = await readPostsFromDb(10000, 0);
    const formattedPosts = formatPosts(posts);
    const meta: MetaData = {
      title: "Bài viết - Đồng phục Univi",
      description:"Cập nhật các bài viết mới nhất về đồng phục thể thao, đồng phục doanh nghiệp, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng từ Đồng phục Univi",
      keywords:
        "đồng phục, thiết kế đồng phục, đồng phục công ty,đồng phục thể thao, đồng phục doanh nghiệp đồng phục học sinh, Univi",
      author: "Đồng phục Univi",
      robots: "index, follow",
      canonical: "https://dongphucunivi.com/bai-viet",
      og: {
        title: "Bài viết - Đồng phục Univi",
        description:
          "Cập nhật các bài viết mới nhất về đồng phục thể thao, đồng phục doanh nghiệp, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng từ Đồng phục Univi",
        type: "website",
        image: "https://dongphucunivi.com/images/banner-1.webp",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://dongphucunivi.com/bai-viet",
        siteName: "Đồng phục Univi",
      },
      twitter: {
        card: "summary_large_image",
        title: "Bài viết - Đồng phục Univi",
        description:
          "Cập nhật các bài viết mới nhất về đồng phục thể thao, đồng phục doanh nghiệp, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng từ Đồng phục Univi",
        image: "https://dongphucunivi.com/images/banner-1.webp",

      },
    };

    return {
      props: {
        posts: formattedPosts,
        meta,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
        meta: {
          title: "Bài viết - Đồng phục Univi",
          description: "Cập nhật các bài viết mới nhất về đồng phục thể thao, đồng phục doanh nghiệp, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng từ Đồng phục Univi",
          keywords: "đồng phục, Univi",
          author: "Đồng phục Univi",
          robots: "noindex",
          canonical: "https://dongphucunivi.com/bai-viet",
          og: {
            title: "Bài viết - Đồng phục Univi",
            description: "Cập nhật các bài viết mới nhất về đồng phục thể thao, đồng phục doanh nghiệp, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng từ Đồng phục Univi",
            type: "website",
            image: "https://dongphucunivi.com/images/banner-1.webp",

            imageWidth: "1200",
            imageHeight: "630",
            url: "https://dongphucunivi.com/bai-viet",
            siteName: "Đồng phục Univi",
          },
          twitter: {
            card: "summary_large_image",
            title: "Bài viết - Đồng phục Univi",
            description: "Cập nhật các bài viết mới nhất về đồng phục thể thao, đồng phục doanh nghiệp, xu hướng thiết kế và kinh nghiệm chọn đồng phục chất lượng từ Đồng phục Univi",
            image: "https://dongphucunivi.com/images/banner-1.webp",

          },
        },
      },
    };
  }
};

export default Blogs;