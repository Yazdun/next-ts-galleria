/*-------------------------------------------------------------------
|  React FC Progression
|
|  Purpose:  SHOW PROGRESSION STATUS BASED ON NAVIGATED PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'
import { TbPlayerSkipForward, TbPlayerSkipBack } from 'react-icons/tb'
import { IArt } from '@/interfaces/index'
import { PgBar, Preview } from '@/components/index'
import { Skip } from '../skip'
import { data } from '@/data/index'
import { AnimatePresence } from 'framer-motion'

interface IProps {
  art: IArt
}

export const Progression: React.FC<IProps> = ({ art }) => {
  const prev = data[art.id - 1] ? data[art.id - 1] : data[14]
  const next = data[art.id + 1] ? data[art.id + 1] : data[0]

  const next_disabled = next.id === 0
  const prev_disabled = prev.id === data.length - 1

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <PgBar current_id={art.id} />
        <AnimatePresence exitBeforeEnter>
          <Preview art={art} key={art.name} />
        </AnimatePresence>

        <div className={css.actions}>
          <Skip
            icon={<TbPlayerSkipBack />}
            aria_label="previous"
            href={prev.slug}
            disabled={prev_disabled}
          />
          <Skip
            icon={<TbPlayerSkipForward />}
            aria_label="next"
            href={next.slug}
            disabled={next_disabled}
          />
        </div>
      </div>
    </div>
  )
}
