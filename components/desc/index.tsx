/*-------------------------------------------------------------------
|  React FC Desc
|
|  Purpose:  RENDERS THE ART'S DESCRIPTION IN THE `ART` FC
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { framer_text, framer_year } from './framer'
import { motion } from 'framer-motion'
import css from './styles.module.css'

interface IProps {
  desc: string
  year: number
  source: string
}

export const Desc: React.FC<IProps> = ({ desc, year, source }) => {
  return (
    <div {...framer_year} className={css.container}>
      <motion.span {...framer_year} className={css.year}>
        {year}
      </motion.span>
      <div className={css.desc}>
        <motion.p {...framer_text}>{desc}</motion.p>
        <motion.a
          {...framer_text}
          className={css.link}
          href={source}
          target="_blank"
        >
          go to source
        </motion.a>
      </div>
    </div>
  )
}
