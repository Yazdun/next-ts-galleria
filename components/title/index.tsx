import { IArt } from '@/interfaces/index'
import React from 'react'
import { View } from '@/components/index'
import Image from 'next/image'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const Title: React.FC<IProps> = ({ art }) => {
  return (
    <div className={css.title}>
      <View art={art} />
      <div className={css.art}>
        <p className={css.name}>{art.name}</p>
        <span className={css.artist}>{art.artist.name}</span>
        <div className={css.profile}>
          <Image
            src={art.artist.image}
            alt={art.artist.name}
            placeholder="blur"
            objectFit="cover"
            height={64}
            width={64}
          />
        </div>
      </div>
    </div>
  )
}
