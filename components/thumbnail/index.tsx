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
    <Link href={art.slug}>
      <a className={css.thumbnail} data-testid={art.name}>
        <Image
          src={art.images.thumbnail}
          alt="hello"
          layout="responsive"
          placeholder="blur"
          objectFit="contain"
        />
        <p className={css.info}>
          <span data-testid="thumbnail_info">{art.name}</span>
          <span data-testid="thumbnail_artist" className={css.artist}>
            {art.artist.name}
          </span>
        </p>
      </a>
    </Link>
  )
}
