/*-------------------------------------------------------------------
|  React FC Modal
|
|  Purpose:  USED FOR DISPLAYING HERO'S IMAGE IN A FULL SCREEN MODAL
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IPictures } from '@/interfaces/index'
import Image from 'next/image'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_modal_card } from './framer'

interface IProps {
  fn(): void
  images: IPictures
}

export const Modal: React.FC<IProps> = ({ fn, images }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={css.wrapper}
    >
      <motion.div className={css.card} {...framer_modal_card}>
        <button onClick={fn} className={css.cta}>
          close
        </button>

        <Image
          src={images.gallery}
          alt="hero"
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
        />
      </motion.div>
    </motion.div>
  )
}
