/*-------------------------------------------------------------------
|  React FC Thumbnail
|
|  Purpose:  ART'S MINIMALIST THUMBNAIL
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { IArt } from '@/interfaces/index'
import Image from 'next/image'
import Link from 'next/link'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const Thumbnail: React.FC<IProps> = ({ art }) => {
  return (
    <Link href="/slideshow">
      <a className={css.thumbnail}>
        <Image
          src={art.images.thumbnail}
          alt="hello"
          layout="responsive"
          placeholder="blur"
          objectFit="contain"
        />
        <p className={css.info}>
          {art.name}
          <span>{art.artist.name}</span>
        </p>
      </a>
    </Link>
  )
}
