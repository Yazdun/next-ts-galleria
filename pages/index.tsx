import { SEO, Layout } from '@/components/index'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>{/* <h1>Art Galleria</h1> */}</Layout>
    </>
  )
}

export default Home
