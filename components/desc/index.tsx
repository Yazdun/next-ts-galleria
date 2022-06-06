/*-------------------------------------------------------------------
|  React FC Desc
|
|  Purpose:  RENDERS THE ART'S DESCRIPTION IN THE `ART` FC
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { framer_desc, framer_year } from './framer'
import { motion } from 'framer-motion'
import css from './styles.module.css'

interface IProps {
  desc: string
  year: number
}

export const Desc: React.FC<IProps> = ({ desc, year }) => {
  return (
    <div {...framer_year} className={css.container}>
      <motion.span {...framer_year} className={css.year}>
        {year}
      </motion.span>
      <motion.p {...framer_desc} className={css.desc}>
        {desc}
      </motion.p>
    </div>
  )
}
