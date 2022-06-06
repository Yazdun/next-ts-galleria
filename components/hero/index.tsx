import { SvgExpand } from '@/assets/shared'
import { useWindowSize } from '@/hooks/index'
import { IPictures } from '@/interfaces/index'
import Image from 'next/image'
import React from 'react'
import css from './styles.module.css'

interface IProps {
  images: IPictures
}

export const Hero: React.FC<IProps> = ({ images }) => {
  const { isTouch } = useWindowSize()
  const { hero } = images
  return (
    <div className={css.image}>
      <Image
        src={hero.large}
        alt="hero"
        layout="responsive"
        placeholder="blur"
        objectFit="cover"
        height={isTouch ? 820 : 1200}
      />
      <button className={css.cta}>
        <SvgExpand />
        view image
      </button>
    </div>
  )
}
