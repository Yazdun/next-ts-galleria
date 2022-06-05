import React from 'react'
import css from './styles.module.css'
import { TbPlayerSkipForward, TbPlayerSkipBack } from 'react-icons/tb'
import { IArt } from '@/interfaces/index'
import { PgBar, Preview } from '@/components/index'
import { Skip } from '../skip'
import { data } from '@/data/index'

interface IProps {
  art: IArt
}

export const Progression: React.FC<IProps> = ({ art }) => {
  const prev = data[art.id - 1] ? data[art.id - 1] : data[14]
  const next = data[art.id + 1] ? data[art.id + 1] : data[0]

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <PgBar current_id={art.id} />
        <Preview art={art} />
        <div className={css.actions}>
          <Skip
            icon={<TbPlayerSkipBack />}
            aria_label="previous"
            href={prev.slug}
          />
          <Skip
            icon={<TbPlayerSkipForward />}
            aria_label="next"
            href={next.slug}
          />
        </div>
      </div>
    </div>
  )
}
