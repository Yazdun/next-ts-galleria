import { SEO, Layout } from '@/components/index'
import type { NextPage } from 'next'
import { data } from '@/data/index'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { IArt } from '@/interfaces/index'
import css from './styles.module.css'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map(art => {
    return {
      params: { slug: art.slug || '' },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as IParams
  const art = data.find(art => art.slug === slug)

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { art: art },
  }
}

interface IProps {
  art: IArt
}

const Slug: NextPage<IProps> = props => {
  const { art } = props

  return (
    <>
      <SEO title="slug" />
      <Layout art={art}>
        <div className={css.container}>
          <h1>{art.name}</h1>
        </div>
      </Layout>
    </>
  )
}

export default Slug
