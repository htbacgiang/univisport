import Head from "next/head";
import DefaultLayout from "../../components/layout/DefaultLayout";
import ContactPage from "../../components/univi/ContactPage";

export default function LienHe({ meta }) {
  // JSON-LD Schema.org cho trang liên hệ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Liên hệ Đồng phục Univi",
    "description": "Liên hệ với Đồng phục Univi để được tư vấn may đồng phục chất lượng cao. Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Đồng phục Univi",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nhà D4, Ng. 180 Đ. Thanh Bình",
        "addressLocality": "Hà Đông",
        "addressRegion": "Hà Nội",
        "addressCountry": "VN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+84-834-204-999",
          "contactType": "customer service",
          "availableLanguage": ["Vietnamese", "English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "ContactPoint",
          "email": "Yenlb.univi@gmail.com",
          "contactType": "customer service"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/Dongphucunivi",
        "https://www.instagram.com/dongphucunivi"
      ]
    }
  };

  return (
    <DefaultLayout 
      title={meta?.title}
      desc={meta?.description}
      thumbnail={meta?.og?.image}
      meta={meta}
    >
      <Head>
        {/* JSON-LD Schema.org cho trang Liên hệ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <h1 className="hidden">
        Liên hệ Đồng phục Univi - Tư vấn may đồng phục chất lượng cao
            </h1>
      
      <ContactPage />
      </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const meta = {
    title: "Liên hệ Đồng phục Univi - Tư vấn may đồng phục chất lượng cao miễn phí",
    description:
      "Liên hệ ngay với Đồng phục Univi để được tư vấn may đồng phục chất lượng cao miễn phí. Hotline: 0834.204.999. Email: Yenlb.univi@gmail.com. Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7.",
    keywords:
      "liên hệ Đồng phục Univi, tư vấn may đồng phục, hotline Đồng phục Univi, địa chỉ Đồng phục Univi, email Đồng phục Univi, tư vấn miễn phí, may đồng phục, đồng phục học sinh, đồng phục công sở",
    robots: "index, follow",
    author: "Đồng phục Univi",
    canonical: "https://dongphucunivi.com/lien-he",
    og: {
      title: "Liên hệ Đồng phục Univi - Tư vấn may đồng phục chất lượng cao miễn phí",
      description:
        "Liên hệ ngay với Đồng phục Univi để được tư vấn may đồng phục chất lượng cao miễn phí. Hotline: 0834.204.999. Email: Yenlb.univi@gmail.com. Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7.",
      type: "website",
      image: "https://dongphucunivi.com/images/banner-univi.webp",
      imageWidth: "1200",
      imageHeight: "630",
      url: "https://dongphucunivi.com/lien-he",
      siteName: "Đồng phục Univi",
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: "Liên hệ Đồng phục Univi - Tư vấn may đồng phục chất lượng cao miễn phí",
      description:
        "Liên hệ ngay với Đồng phục Univi để được tư vấn may đồng phục chất lượng cao miễn phí. Hotline: 0834.204.999. Email: Yenlb.univi@gmail.com. Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7.",
      image: "https://dongphucunivi.com/images/banner-univi.webp",
      site: "@DongphucUnivi",
    },
  };

  return {
    props: {
      meta,
    },
  };
}