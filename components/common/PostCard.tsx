import Image from "next/image";
import { FC, useState } from "react";
import { PostDetail as BasePostDetail } from "../../utils/types";
import Link from "next/link";
import { trimText } from "../../utils/helper";

// Mở rộng kiểu dữ liệu PostDetail gốc để thêm các thuộc tính mới
interface ExtendedPostDetail extends BasePostDetail {
  category: string; // Thêm danh mục
  createdAt: string; // Thêm ngày tạo
}

interface Props {
  post: ExtendedPostDetail;
  busy?: boolean;
  controls?: boolean;
  onDeleteClick?(): void;
}

const PostCard: FC<Props> = ({
  controls = false,
  post,
  busy,
  onDeleteClick,
}): JSX.Element => {
  const { title, slug, meta, thumbnail, category, createdAt } = post;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    if (onDeleteClick) {
      onDeleteClick();
    }
    setShowModal(false);
  };

  return (
    <>
      <div className="group gradient-post-card rounded-2xl overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 border">
        {/* Thumbnail Container with Overlay */}
        <div className="relative h-64 w-full overflow-hidden">
          {!thumbnail ? (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm ">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p>Không có hình ảnh</p>
              </div>
            </div>
          ) : (
            <>
              <Image
                src={thumbnail}
                layout="fill"
                alt={title}
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Category Badge */}
        
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col space-y-4">
          {/* Title */}
          <Link href={`/bai-viet/${slug}`} className="group/link">
            <h2 className="text-xl font-bold text-[white] group-hover/link:text-blue-400 transition-colors duration-300 line-clamp-2 leading-tight">
              {title.split(" ").map((word, index) =>
                word.toUpperCase() === "YOUR" ? (
                  <span key={index} className="text-yellow-400 font-extrabold">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>
          </Link>

          {/* Description */}
          <p className="text-slate-200 text-sm leading-relaxed line-clamp-3">
            {trimText(meta, 120)}
          </p>

          {/* Metadata Row */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
            <div className="flex items-center text-slate-400 text-sm">
              <svg
                className="w-4 h-4 mr-2 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="text-slate-400">
                {new Date(createdAt).toLocaleDateString("vi-VN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            
            {/* Read More Arrow */}
            <Link href={`/bai-viet/${slug}`} className="inline-flex items-center text-white hover:text-blue-300 transition-colors duration-300">
              <span className="text-sm font-medium mr-1">Đọc thêm</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          {/* Controls (Edit/Delete) */}
          {controls && (
            <div className="mt-4 flex justify-between gap-3 pt-4 border-t border-slate-700/50">
              <Link
                className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 text-sm font-medium text-center transition-all duration-300 border border-blue-500/30 hover:border-blue-400/50"
                href={`/dashboard/bai-viet/update/${slug}`}
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Sửa
              </Link>
              <button
                disabled={busy}
                onClick={() => setShowModal(true)}
                className="flex-1 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 text-sm font-medium transition-all duration-300 border border-red-500/30 hover:border-red-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Xóa
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700/50 max-w-md w-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white">Xác nhận xóa</h2>
            </div>
            <p className="mb-8 text-slate-300 leading-relaxed">
              Bạn có chắc chắn muốn xóa bài viết <span className="font-semibold text-white">&quot;{title}&quot;</span>? Hành động này không thể hoàn tác.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600/50 hover:border-slate-500/50 font-medium"
              >
                Hủy
              </button>
              <button
                disabled={busy}
                onClick={handleDelete}
                className="flex-1 px-6 py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300 border border-red-500/30 hover:border-red-400/50 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {busy ? "Đang xóa..." : "Xóa bài viết"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
