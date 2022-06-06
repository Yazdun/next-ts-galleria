/*-------------------------------------------------------------------
|  React FC Preview
|
|  Purpose:  SHOW SMALL ART'S PREVIEW ON `PROGRESSION` FC
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { IArt } from '@/interfaces/index'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_preview } from './framer'

interface IProps {
  art: IArt
}

export const Preview: React.FC<IProps> = ({ art }) => {
  const { name, artist } = art
  return (
    <motion.p {...framer_preview} className={css.artist}>
      <div className={css.linear}></div>
      {name}
      <span data-testid="preview-artist">{artist.name}</span>
    </motion.p>
  )
}
