import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.id}>
      <p className="m-4">
        {"ID :"}
        {post.id}
      </p>
      <p className="mb-8 text-al font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      {/*  */}
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span>Bak to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  // 全てのidをオブジェクトとして代入
  const paths = await getAllPostIds();

  return {
    paths,
    // fallback:範囲外のidにアクセスした場合の挙動の実施するかどうか
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // 各idのデータを取得
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
