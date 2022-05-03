import React from 'react'
import Layout from '../components/Layout'
import Post from '../components/Post'
import { getAllPostData } from '../lib/posts'

const Blog = ({ posts }) => {

  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {/* postsが存在する場合のみ処理を実行 */}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}
export default Blog

// ビルド時に１回だけサーバーサイドでレンダリングされる
export async function getStaticProps() {
  const posts = await getAllPostData()
  return {
    props: { posts }
  }
}
