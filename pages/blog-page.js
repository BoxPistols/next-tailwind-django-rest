import React from 'react'
import Layout from '../components/Layout'
import { getAllPostData } from '../lib/posts'

const Blog = () => {
    return (
        <div>
            <Layout title="Blog">blog page</Layout>
        </div>
    )
}

// ビルド時に１回だけサーバーサイドでレンダリングされる
export async function getAllPostData() {
    const posts = await getAllPostData()
}

export default Blog
