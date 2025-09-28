import axios from "axios";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useState } from "react";
import Editor, { FinalPost } from "../../../../components/editor";
import AdminLayout from "../../../../components/layout/AdminLayout";
import db from "../../../../utils/db";
import Post from "../../../../models/Post";
import { generateFormData } from "../../../../utils/helper";

interface PostResponse extends FinalPost {
  id: string;
  isDraft?: boolean;
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Update: NextPage<Props> = ({ post }) => {
  const [updating, setUpdating] = useState(false);
  const handleSubmit = async (post: FinalPost) => {
    setUpdating(true);
    try {
      // we have to generate FormData
      const formData = generateFormData(post);

      // submit our post
      const { data } = await axios.patch("/api/posts/" + post.id, formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response.data);
    }
    setUpdating(false);
  };

  return (
    <AdminLayout title="Cập nhật bài viết">
      <div className="max-w[10/12] mx-auto">
        <Editor
          initialValue={post}
          onSubmit={handleSubmit}
          busy={updating}
          btnTitle="Cập nhật"
        />
      </div>
    </AdminLayout>
  );
};

interface ServerSideResponse {
  post: PostResponse;
}
export const getServerSideProps: GetServerSideProps<
  ServerSideResponse
> = async (context) => {
  try {
    const slug = context.query.slug as string;

        await db.connectDb();
    
    const post = await Post.findOne({ slug });
    if (!post) return { notFound: true };

    const { _id, meta, title, content, thumbnail, tags, category, isDraft, focusKeyword } = post;

    return {
      props: {
        post: {
          id: _id.toString(),
          title,
          content,
          tags: tags.join(", "),
          thumbnail: thumbnail?.url || "",
          slug,
          category,
          meta,
          isDraft: isDraft || false,
          focusKeyword: focusKeyword || "",
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Update;
