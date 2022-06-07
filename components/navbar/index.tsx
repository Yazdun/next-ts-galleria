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
import css from './styles.module.css'
import Link from 'next/link'
import { data } from '@/data/index'
import { useRouter } from 'next/router'

export const Navbar: React.FC = () => {
  const router = useRouter()
  const isHome = router?.pathname === '/'

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.image}>
          <Image src={project_logo} alt="galleria" />
        </li>
        <li>
          <Link href={isHome ? data[0].slug : '/'}>
            <a className={css.link}>
              {isHome ? (
                <span key="stop">start</span>
              ) : (
                <span key="start">stop</span>
              )}{' '}
              slideshow
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
