import React from 'react'
import css from './styles.module.css'
import { TbPlayerSkipForward, TbPlayerSkipBack } from 'react-icons/tb'
import Link from 'next/link'
import { IArt } from '@/interfaces/index'
import { Preview } from '@/components/index'

interface IProps {
  art: IArt
}

export const Progression: React.FC<IProps> = ({ art }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Preview art={art} />
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
