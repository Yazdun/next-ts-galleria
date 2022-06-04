import { project_logo } from '@/assets/shared'
import Image from 'next/image'
import React from 'react'
import { useWindowSize } from '@/hooks/index'
import {
  PROJECT_LOGO_MOBILE_SIZES,
  PROJECT_LOGO_DESKTOP_SIZES,
} from '@/constants/index'
import css from './styles.module.css'

export const Navbar: React.FC = () => {
  const { isTouch } = useWindowSize()

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
        <li>start slideshow</li>
      </ul>
    </nav>
  )
}
