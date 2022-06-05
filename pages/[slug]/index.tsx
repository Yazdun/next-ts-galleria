import { SEO, Layout, Art } from '@/components/index'
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
      <SEO title={art.name} desc={art.description} />
      <Layout art={art}>
        <div className={css.container}>
          <Art art={art} />
        </div>
      </Layout>
    </>
  )
}

export default Slug
