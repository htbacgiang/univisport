import ProjectCard from "../../components/tantruonggiang/ProjectCard";
import { projects } from "../../components/tantruonggiang/data/projects";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout2 from "../../components/layout/DefaultLayout2";
import styles from "./Feedback.module.css";

export default function DuAn({ meta = {} }) {

  const defaultMeta = {
    title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
    description:
      "Xem đánh giá từ khách hàng về đồng phục Univi: chất lượng cao, thiết kế miễn phí, giao hàng toàn quốc. Gửi phản hồi của bạn ngay!",
    keywords:
      "phản hồi đồng phục Univi, đánh giá khách hàng, đồng phục chất lượng, đồng phục công ty, thiết kế đồng phục",
    author: "Đồng Phục Univi",
    robots: "index, follow",
    canonical: "https://dongphucunivi.com/feedback",
    og: {
      title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
      description:
      "Xem đánh giá từ khách hàng về đồng phục Univi: chất lượng cao, thiết kế miễn phí, giao hàng toàn quốc. Gửi phản hồi của bạn ngay!",
      type: "website",
      image: "https://dongphucunivi.com/images/banner-univi.webp",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://dongphucunivi.com/feedback",
      siteName: "Đồng Phục Univi",
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
      description:
        "Khám phá phản hồi từ khách hàng về đồng phục Univi. Thiết kế miễn phí, giao hàng toàn quốc.",
      image: "",
      site: "@DongPhucUnivi",
    },
  };

  const safeMeta = {
    ...defaultMeta,
    ...meta,
    og: { ...defaultMeta.og, ...meta.og },
    twitter: { ...defaultMeta.twitter, ...meta.twitter },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: safeMeta.title,
    description: safeMeta.description,
    url: safeMeta.canonical,
    image: safeMeta.og.image,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: "https://dongphucunivi.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Phản hồi",
          item: safeMeta.canonical,
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: (projects || []).map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        description: project.content,
        image: project.image,
      })),
    },
    publisher: {
      "@type": "Organization",
      name: "Đồng Phục Univi",
      logo: {
        "@type": "ImageObject",
        url: "/baner-univi.webp",
      },
    },
  };

  return (
    <DefaultLayout2>
      <div className={styles.feedbackPage}>
        <div className={styles.heroBanner}>
          <Image
            src={"/images/feedback.jpg"}
            alt="Dự Án Đồng Phục - Đồng Phục Univi"
            fill={true}
            style={{ objectFit: "cover" }}
            className={styles.heroImage}
            priority={true}
          />
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <nav aria-label="Breadcrumb">
                <p className={styles.breadcrumb}>
                  <Link href="/">
                    <span className={styles.breadcrumbLink}>
                      Trang chủ
                    </span>
                  </Link>
                  <span className={styles.breadcrumbSeparator}>/</span>
                  Feedback
                </p>
              </nav>
              <h1 className={styles.heroTitle}>
                Các dự án may đồng phục chuyên nghiệp Univi
              </h1>
              <p className={styles.heroDescription}>
                Khám phá các dự án đồng phục thể thao, đồng phục doanh nghiệp từ
                Univi. Thiết kế miễn phí, may đo tận nơi, giao hàng toàn quốc.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.projectGrid}>
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))
            ) : (
              <p role="alert" className={styles.emptyState}>
                Không có dự án nào.
              </p>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout2>
  );
}

export async function getServerSideProps() {
  try {
    const meta = {
      title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
      description:
        "Xem đánh giá từ khách hàng về đồng phục Univi: chất lượng cao, thiết kế miễn phí, giao hàng toàn quốc. Gửi phản hồi của bạn ngay!",
      keywords:
        "phản hồi đồng phục Univi, đánh giá khách hàng, đồng phục chất lượng, đồng phục công ty, thiết kế đồng phục",
      author: "Đồng Phục Univi",
      robots: "index, follow",
      canonical: "https://dongphucunivi.com/feedback",
      og: {
        title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
        description:
          "Đọc đánh giá từ khách hàng về đồng phục Univi. Chất lượng cao, thiết kế miễn phí, giao hàng toàn quốc.",
        type: "website",
        image: "/baner-univi.webp",
        imageWidth: "1200",
        imageHeight: "630",
        url: "https://dongphucunivi.com/feedback",
        siteName: "Đồng Phục Univi",
        locale: "vi_VN",
      },
      twitter: {
        card: "summary_large_image",
        title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
        description:
          "Khám phá phản hồi từ khách hàng về đồng phục Univi. Thiết kế miễn phí, giao hàng toàn quốc.",
        image: "/baner-univi.webp",
        site: "@DongPhucUnivi",
      },
    };

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      image: meta.og.image,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: "https://dongphucunivi.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Phản hồi",
            item: meta.canonical,
          },
        ],
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: (projects || []).map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.content || "",
          image: project.image || "",
        })),
      },
      publisher: {
        "@type": "Organization",
        name: "Đồng Phục Univi",
        logo: {
          "@type": "ImageObject",
          url: "/baner-univi.webp",
        },
      },
    };

    return {
      props: {
        meta,
        structuredData: JSON.stringify(structuredData),
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      props: {
        meta: {
          title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
          description:
            "Xem đánh giá từ khách hàng về đồng phục Univi. Chất lượng cao, thiết kế miễn phí, giao hàng toàn quốc.",
          keywords:
            "phản hồi đồng phục Univi, đánh giá khách hàng, đồng phục chất lượng",
          canonical: "https://dongphucunivi.com/feedback",
          og: {
            title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
            description:
              "Đọc đánh giá từ khách hàng về đồng phục Univi.",
            image: "/images/feedback-univi.jpg",
          },
          twitter: {
            card: "summary_large_image",
            title: "Phản Hồi Khách Hàng – Đồng Phục Univi",
            image: "/images/feedback-univi.jpg",
          },
        },
      },
    };
  }
}