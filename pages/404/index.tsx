import { Layout } from '@/components/index'
import css from './styles.module.css'

export default function Custom404() {
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.num}>404</span>
        <h1>Not Found</h1>
      </div>
    </Layout>
  )
}
