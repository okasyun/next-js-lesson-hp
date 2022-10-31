import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/post";

// Object Destrusting（分割代入）
// わざわざpropsと書く必要がない
// propsはオブジェクトになっている
const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  // apiで取得したデータを代入
  const posts = await getAllPostsData();
  // propsとして返す
  return { props: { posts } };
}
