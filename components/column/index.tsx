import { IArt } from '@/interfaces/index'
import React from 'react'
import { Thumbnail } from '../thumbnail'
import css from './styles.module.css'

interface IProps {
  data: IArt[]
  column: number
}

export const Column: React.FC<IProps> = ({ data, column = 1 }) => {
  return (
    <div className={css.column}>
      {data
        .filter(item => item.grid_column === column)
        .map(art => {
          return <Thumbnail key={art.name} art={art} />
        })}
    </div>
  )
}
