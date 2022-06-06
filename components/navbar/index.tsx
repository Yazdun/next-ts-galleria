/*-------------------------------------------------------------------
|  React FC Navbar
|
|  Purpose:  PROJECT'S NAVIGATION BAR
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { project_logo } from '@/assets/shared'
import Image from 'next/image'
import React from 'react'
import { useWindowSize } from '@/hooks/index'
import {
  PROJECT_LOGO_MOBILE_SIZES,
  PROJECT_LOGO_DESKTOP_SIZES,
} from '@/constants/index'
import css from './styles.module.css'
import Link from 'next/link'
import { data } from '@/data/index'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { framer_variants } from './framer'

export const Navbar: React.FC = () => {
  const { isTouch } = useWindowSize()
  const router = useRouter()
  const isHome = router?.pathname === '/'

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Image
            src={project_logo}
            alt="galleria"
            width={
              isTouch
                ? PROJECT_LOGO_MOBILE_SIZES.width
                : PROJECT_LOGO_DESKTOP_SIZES.width
            }
            height={
              isTouch
                ? PROJECT_LOGO_MOBILE_SIZES.height
                : PROJECT_LOGO_DESKTOP_SIZES.height
            }
          />
        </li>
        <li>
          <Link href={isHome ? data[0].slug : '/'}>
            <a className={css.link}>
              <AnimatePresence exitBeforeEnter>
                {isHome ? (
                  <motion.span {...framer_variants} key="stop">
                    start
                  </motion.span>
                ) : (
                  <motion.span {...framer_variants} key="start">
                    stop
                  </motion.span>
                )}
              </AnimatePresence>{' '}
              slideshow
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
