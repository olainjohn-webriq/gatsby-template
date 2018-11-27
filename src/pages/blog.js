import React from 'react'
import Layout from '../layouts'
import BlogList from '../components/post'

const BlogPage = () => (
  <Layout head={{ title: 'Blog' }}>
    <BlogList />
  </Layout>
)

export default BlogPage
