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
import { framer_modal_card, framer_modal_container } from './framer'
import { useOnClickOutside } from 'usehooks-ts'
import { useRef } from 'react'

interface IProps {
  fn(): void
  images: IPictures
}

export const Modal: React.FC<IProps> = ({ fn, images }) => {
  const ref = useRef(null)

  useOnClickOutside(ref, fn)
  return (
    <motion.div
      className={css.wrapper}
      {...framer_modal_container}
      data-testid="modal"
    >
      <motion.div className={css.card} {...framer_modal_card} ref={ref}>
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
