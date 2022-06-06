/*-------------------------------------------------------------------
|  React FC Art
|
|  Purpose:  THIS IS THE MAIN COMPONENT FOR `[SLUG]` PAGE WHICH SHOWS
|            THE CURRENT SLIDESHOW TO THE USER 
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IArt } from '@/interfaces/index'
import React from 'react'
import { Hero, Desc, Title } from '@/components/index'
import { motion } from 'framer-motion'
import css from './styles.module.css'
import { framer_header } from './framer'

interface IProps {
  art: IArt
}

export const Art: React.FC<IProps> = ({ art }) => {
  return (
    <div className={css.container}>
      <motion.div {...framer_header} className={css.header}>
        <Hero images={art.images} key={art.name} />
        <Title art={art} />
      </motion.div>
      <Desc desc={art.description} year={art.year} />
    </div>
  )
}
