"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react"; // Thêm NextAuth để xử lý đăng xuất

import {
  LayoutGrid,
  Notebook,
  Settings,
  Users2,
  LogOut,
  ShoppingCart,
  FolderPlus,
  SquarePen,

} from "lucide-react";

import { useRouter } from "next/router";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const router = useRouter();
  const pathname = router.pathname;
  const { data: session, status } = useSession(); // Lấy trạng thái phiên từ NextAuth

  const sildebarLinks = [
    {
      title: "Bài viết",
      icon: Notebook,
      href: "/dashboard/bai-viet",
    },
    {
      title: "Thêm bài viết",
      icon: SquarePen,
      href: "/dashboard/them-bai-viet",
    },
    {
      title: "Khách hàng",
      icon: Users2,
      href: "/dashboard/khach-hang",
    },
    {
      title: "Sản phẩm",
      icon: ShoppingCart,
      href: "/dashboard/san-pham",
    },
    {
      title: "Thêm sản phẩm",
      icon: FolderPlus,
      href: "/dashboard/them-san-pham",
    },
    {
      title: "Cài đặt",
      icon: Settings,
      href: "/cai-dat",
    },
  ];

  const catalogueLinks = [

  

  ];
  const [openMenu, setOpenMenu] = useState(false);

  // Hàm xử lý đăng xuất
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" }); // Chuyển hướng về trang chủ sau khi đăng xuất
  };

  // Nếu đang tải trạng thái phiên, hiển thị loading
  if (status === "loading") {
    return <div>Đang tải...</div>;
  }

  return (
    <div
      className={
        showSidebar
          ? "hidden sm:block mt-16 sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out border-r border-slate-200 dark:border-slate-700"
          : "mt-16 hidden sm:mt-0 sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen dark:text-slate-50 text-slate-800 fixed left-0 top-0 shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out border-r border-slate-200 dark:border-slate-700"
      }
    >
      {/* Logo Section */}
      <div className="relative">
        <Link 
          onClick={() => setShowSidebar(false)} 
          className="mb-6 justify-center mx-auto flex mt-4 hover:scale-105 transition-transform duration-200" 
          href="/"
        >
          <div className="relative">
            <Image 
              height={80} 
              width={120} 
              alt="avatar" 
              src="/logo-univi.webp" 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0  rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="space-y-2 flex flex-col mt-8 px-3">
        {/* Dashboard Link */}
        <Link
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "group flex items-center space-x-3 py-3 px-4 rounded-xl bg-[#105d97] text-white shadow-lg transform scale-105 transition-all duration-200"
              : "group flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-[#105d97]/10 hover:text-[#105d97] dark:hover:from-slate-700 dark:hover:to-slate-600 hover:shadow-md hover:scale-105 transition-all duration-200"
          }
        >
          <LayoutGrid className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* Menu Items */}
        {sildebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              href={item.href}
              key={i}
              className={
                item.href === pathname
                  ? "group flex items-center space-x-3 py-3 px-4 rounded-xl bg-[#105d97] text-white shadow-lg transform scale-105 transition-all duration-200"
                  : "group flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-[#105d97]/10 hover:text-[#105d97] dark:hover:from-slate-700 dark:hover:to-slate-600 hover:shadow-md hover:scale-105 transition-all duration-200"
              }
            >
              <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}

        {/* Logout Button */}
        {session && (
          <div className="px-3 py-4 mt-8">
            <button
              onClick={handleSignOut}
              className="w-full group bg-[#105d97] hover:bg-[#0e4d7a] rounded-xl text-white flex items-center justify-center space-x-3 px-4 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-medium">Đăng xuất</span>
            </button>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#105d97]"></div>
    </div>
  );
}