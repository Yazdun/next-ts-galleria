import { SEO, Layout } from '@/components/index'
import type { NextPage } from 'next'
import { data } from '@/data/index'

const Slug: NextPage = () => {
  return (
    <>
      <SEO title="slug" />
      <Layout>
        <h1>slug</h1>
      </Layout>
    </>
  )
}

export default Slug
