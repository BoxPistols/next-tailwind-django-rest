import fetch from 'node-fetch' // フェッチの設定
const apiUrl = 'https://jsonplaceholder.typicode.com/posts' // 定数でエンドポイントを設定

export async function getAllPostData () {
    // エンドポイントからデータを取得するのを待つ
  const res = await fetch(new URL(apiUrl))
    // 結果を格納する
  const posts = await res.json()
  console.log(posts[0])
  return posts
}
