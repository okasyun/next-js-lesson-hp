import Link from "next/link";

// 何で波括弧を使う？
// Object Destructing（分割代入）
// const post = props.postと同じ
const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {":"}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
