import React from 'react'
import Layout from '../components/Layout'
import { getAllPostData } from '../lib/posts'

const Blog = () => {
  return (
    <div>
      <Layout title='Blog'>blog page</Layout>
    </div>
  )
}
export default Blog

// ビルド時に１回だけサーバーサイドでレンダリングされる
export async function getStaticProps () {
  const posts = await getAllPostData()
  return {
    props: { posts }
  }
}
