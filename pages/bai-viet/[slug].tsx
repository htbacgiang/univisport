import {
  GetServerSideProps,
  NextPage,
} from "next";
import parse from "html-react-parser";
import DefaultLayout from "../../components/layout/DefaultLayout";
import db from "../../utils/db";
import Post from "../../models/Post";
import Share from "../../components/common/Share";
import Link from "next/link";
import Image from "next/image";
import { trimText } from "../../utils/helper";

type PostData = {
  id: string;
  title: string;
  content: string;
  meta: string;
  tags: string[];
  slug: string;
  thumbnail: string;
  createdAt: string;
  category: string;
  recentPosts: {
    id: string;
    title: string;
    slug: string;
    category: string;
    thumbnail?: string;
  }[];
};

type MetaData = {
  title: string;
  description: string;
  author: string;
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
  post: PostData;
  meta: MetaData;
};

const host = "https://dongphucunivi.com/bai-viet";

export const APP_NAME = "Đồng phục Univi";
const SinglePost: NextPage<Props> = ({ post }) => {
  const { title, content, meta, slug, thumbnail, category, createdAt, recentPosts } = post;

  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <div className="h-[80px]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white  p-4 md:p-8">
                {/* Breadcrumb */}
                <div className="flex font-bold gap-2 text-base text-gray-600">
                  <Link href="/bai-viet" className="hover:text-blue-800 whitespace-nowrap">
                    Bài viết
                  </Link>
                  <span>›</span>
                  <span className="flex font-bold gap-2 text-base text-gray-600">
                    {trimText(title, 35)}
                  </span>
                </div>

                {/* Article Header */}
                <div className="mb-4">
                  <h1 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">
                    {title}
                  </h1>

                  <div className="flex items-center justify-between">
                    <Share url={`${host}/${slug}`} />
                  </div>
                </div>

                {/* Article Content */}
                <div className="blog prose prose-lg dark:prose-invert max-w-2xl md:max-w-4xl lg:max-w-5xl [&_img]:mx-auto">
                <style jsx>{`
                  .blog img {
                    display: block;
                    margin: 1.5em auto;
                  }
                  .blog figure {
                    margin: 1.5em 0;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  }
                  .blog figure img {
                    display: block;
                    margin: 0 auto;
                  }
                  .blog figcaption {
                    margin-top: 0.5em;
                    font-size: 0.875em;
                    color: #6b7280;
                    font-style: italic;
                    text-align: center;
                    width: 100%;
                    max-width: 100%;
                  }
                  .dark .blog figcaption {
                    color: #9ca3af;
                  }
                `}</style>
                {parse(content)}
              </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 w-full">
              <div className="bg-white rounded-lg shadow-sm p-3">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Bài viết liên quan
                </h3>
                <div className="space-y-4">
                  {recentPosts.slice(0, 4).map((p) => (
                    <Link key={p.slug} href={`/bai-viet/${p.slug}`} className="block group">
                      <div className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        {p.thumbnail && (
                          <Image
                            src={p.thumbnail}
                            alt={p.title}
                            width={80}
                            height={40}
                            className="w-15 h-15 object-cover rounded"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-[#105d97] font-medium uppercase">
                            {p.category}
                          </span>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#105d97] transition-colors line-clamp-2 mt-1">
                            {p.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SinglePost;

export const getServerSideProps: GetServerSideProps<
  { post: PostData; meta: MetaData },
  { slug: string }
> = async ({ params }) => {
  try {
    await db.connectDb();

    const post = await Post.findOne({ slug: params?.slug });
    if (!post) {
      console.log(`Post not found for slug: ${params?.slug}`);
      return { notFound: true };
    }

    const posts = await Post.find({
      _id: { $ne: post._id },
    })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("slug title thumbnail category");

    const recentPosts = posts.map((p) => ({
      id: p._id.toString(),
      title: p.title,
      slug: p.slug,
      category: p.category || "Không xác định",
      thumbnail: p.thumbnail?.url,
    }));

    const { _id, title, content, meta, slug, tags, thumbnail, category, createdAt } = post;

    const metaData: MetaData = {
      title,
      description: meta,
      author: "Đồng phục Univi",
      canonical: `https://dongphucunivi.com/bai-viet/${slug}`,
      og: {
        title,
        description: meta,
        type: "website",
        image: thumbnail?.url || "https://dongphucunivi.com/images/banner-univi.webp",
        imageWidth: "1200",
        imageHeight: "630",
        url: `https://dongphucunivi.com/bai-viet/${slug}`,
        siteName: "Đồng phục Univi",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: meta,
        image: thumbnail?.url || "https://dongphucunivi.com/images/banner-univi.webp",
      },
    };

    const postData: PostData = {
      id: _id.toString(),
      title,
      content,
      meta,
      slug,
      tags,
      category: category ?? "Không xác định",
      thumbnail: thumbnail?.url || "",
      createdAt: createdAt.toString(),
      recentPosts,
    };

    return {
      props: {
        post: postData,
        meta: metaData,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true };
  }
};