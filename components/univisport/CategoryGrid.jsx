import React from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Đồng phục Gym",
    slug: "/san-pham/dong-phuc-gym", // Slug tùy chỉnh
    image: "/product/dong-phuc-gym.webp",
    width: 300,
    height: 300,
    rowSpan: 1,
    colSpan: 1,
  },
  {
    name: "Yoga - Pilates",
    slug: "/san-pham/dong-phuc-yoga-pilates", // Slug tùy chỉnh
    image: "/product/dong-phuc-yoga.webp",
    width: 300,
    height: 600,
    rowSpan: 1,
    colSpan: 1,
  },
  {
    name: "Chạy bộ",
    slug: "/san-pham/dong-phuc-chay-bo", // Slug tùy chỉnh
    image: "/product/dong-phuc-chay-bo.webp",
    width: 300,
    height: 300,
    rowSpan: 1,
    colSpan: 1,
  },

  {
    name: "Pickleball",
    slug: "/san-pham/dong-phuc-pickleball", // Slug tùy chỉnh
    image: "/product/dong-phuc-pickaball.webp",
    width: 300,
    height: 300,
    rowSpan: 1,
    colSpan: 1,
  },
  {
    name: "MMA Đồng phục",
    slug: "/san-pham/dong-phuc-mma", // Slug tùy chỉnh
    image: "/product/mma-dong-phuc.webp",
    width: 600,
    height: 300,
    rowSpan: 1,
    colSpan: 1,
  },
  {
    name: "Golf - Tennis",
    slug: "/san-pham/dong-phuc-golf-tennis", // Slug tùy chỉnh
    image: "/product/dong-phuc-golf.webp",
    width: 600,
    height: 300,
    rowSpan: 1,
    colSpan: 1,
  },
];

export default function CategoryGrid() {
  return (
    <section className="container mx-auto  ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {categories.map((c, i) => (
          <Link
            key={i}
            href={`/${c.slug || c.name.toLowerCase().replace(/\s+/g, "-")}`}
            aria-label={`View ${c.name} products`}
            className="group relative overflow-hidden rounded-2xl aspect-square transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src={c.image}
                alt={c.name}
                fill
                quality={100}
                style={{ objectFit: "cover" }}
                className="rounded-2xl brightness-90 group-hover:brightness-100 transition-all duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                priority={i < 3}
                placeholder="blur"
                blurDataURL="/product/dong-phuc-gym/placeholder.jpg"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Category name */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300">
              <h3 className="absolute bottom-4 left-4 bg-[#105d97] text-white px-4 py-2 rounded">
                
                {c.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}