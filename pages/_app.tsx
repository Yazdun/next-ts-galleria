import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import 'styles/global.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} canonical={router.route} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
