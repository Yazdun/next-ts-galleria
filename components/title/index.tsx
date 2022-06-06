/*-------------------------------------------------------------------
|  React FC Desc
|
|  Purpose:  RENDERS THE ART'S TITLE IN THE `ART` FC
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { useWindowSize } from '@/hooks/index'
import { IArt } from '@/interfaces/index'
import Image from 'next/image'
import React from 'react'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_title } from './framer'

interface IProps {
  art: IArt
}

export const Title: React.FC<IProps> = ({ art }) => {
  const { isTouch } = useWindowSize()
  return (
    <div className={css.container}>
      <motion.div {...framer_title} className={css.text}>
        <h1 className={css.title}>{art.name}</h1>
        <h2 className={css.artist}>{art.artist.name}</h2>
      </motion.div>
      <div className={css.image}>
        <Image
          src={art.artist.image}
          alt={art.artist.name}
          placeholder="blur"
          objectFit="cover"
          width={isTouch ? 64 : 128}
          height={isTouch ? 64 : 128}
        />
      </div>
    </div>
  )
}
