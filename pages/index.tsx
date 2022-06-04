import { SEO, Layout } from '@/components/index'
import type { NextPage } from 'next'
import { data } from '@/data/index'
import { Columns } from '@/components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <h1 style={{ opacity: 0 }}>hello</h1>
        <Columns data={data} />
      </Layout>
    </>
  )
}

export default Home
