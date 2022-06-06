import { useWindowSize } from '@/hooks/index'
import { IArt } from '@/interfaces/index'
import Image from 'next/image'
import React from 'react'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const Title: React.FC<IProps> = ({ art }) => {
  const { isTouch } = useWindowSize()
  return (
    <div className={css.container}>
      <div className={css.text}>
        <h1 className={css.title}>{art.name}</h1>
        <h2 className={css.artist}>{art.artist.name}</h2>
      </div>
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
