/*-------------------------------------------------------------------
|  React FC Columns
|
|  Purpose:  THIS COMPONENT IS MEANT TO BE USED WITH `SHOWCASE` FC.
|            `SHOWCASE` MUST RETURN 4 `COLUMNS` IN ORDER TO RENDER
|            HOMEPAGE MASONARY GRID CORRECTLY.
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

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
