import React from 'react'
import css from './styles.module.css'
import { TbPlayerSkipForward, TbPlayerSkipBack } from 'react-icons/tb'
import Link from 'next/link'

export const Progression: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p className={css.artist}>
          Starry Night
          <span>Vincent Van Gogh</span>
        </p>
        <div className={css.actions}>
          <Link href="/">
            <a>
              <TbPlayerSkipBack />
            </a>
          </Link>
          <Link href="/">
            <a>
              <TbPlayerSkipForward />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
