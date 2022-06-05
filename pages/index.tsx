import { SEO, Layout } from '@/components/index'
import type { NextPage } from 'next'
import { data } from '@/data/index'
import { Showcase } from '@/components/index'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <h1 className="sr-only">frontend mentor's galleria</h1>
      <Layout>
        <h1 style={{ opacity: 0 }}>hello</h1>
        <Showcase data={data} />
      </Layout>
    </>
  )
}

export default Home
