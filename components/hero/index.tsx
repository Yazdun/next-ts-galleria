/*-------------------------------------------------------------------
|  React FC Hero
|
|  Purpose:  SHOWING THE HERO IMAGE ON THE `[SLUG]` PAGE
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { SvgExpand } from '@/assets/shared'
import { useWindowSize } from '@/hooks/index'
import { IPictures } from '@/interfaces/index'
import Image from 'next/image'
import React, { useState } from 'react'
import css from './styles.module.css'
import { Modal } from '@/components/index'
import { AnimatePresence } from 'framer-motion'

interface IProps {
  images: IPictures
}

export const Hero: React.FC<IProps> = ({ images }) => {
  const { isTouch } = useWindowSize()
  const { hero } = images
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <>
      <div className={css.image}>
        <Image
          src={hero.large}
          alt="hero"
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          height={isTouch ? 820 : 1200}
        />
        <button className={css.cta} onClick={openModal} data-testid="hero_cta">
          <SvgExpand />
          view image
        </button>
      </div>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <Modal fn={closeModal} images={images} key={images.gallery.src} />
        )}
      </AnimatePresence>
    </>
  )
}
