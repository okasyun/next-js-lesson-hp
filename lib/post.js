import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  // URLコンストラクター：パラメーターによって定義されたURLを表す
  // 与えられたURLが有効なURLでない場合tTypeErrorが出力される
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  //   console.log(`resは${typeof res}`);
  //   awaitをつけないとmapでエラー→apiを叩くまでに時間がかかるからデータが代入する前に次の処理が実行されてしまう
  // awaitで次の実行を待つ
  const posts = await res.json();

  //   console.log(`postsは${typeof posts}`);
  //   console.log(posts);

  return posts.map((post) => {
    return {
      // String 文字列に変換
      //   paramsを必ず付ける必要がある
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}`));
  const post = await res.json();

  //   各idのデータを返す
  return {
    post,
  };
}
