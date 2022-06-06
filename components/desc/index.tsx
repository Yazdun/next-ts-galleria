/*-------------------------------------------------------------------
|  React FC Desc
|
|  Purpose:  RENDERS THE ART'S DESCRIPTION IN THE `ART` FC
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import css from './styles.module.css'

interface IProps {
  desc: string
  year: number
}

export const Desc: React.FC<IProps> = ({ desc, year }) => {
  return (
    <div className={css.container}>
      <span className={css.year}>{year}</span>
      <p className={css.desc}>{desc}</p>
    </div>
  )
}
