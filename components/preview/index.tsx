import React from 'react'
import { IArt } from '@/interfaces/index'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const Preview: React.FC<IProps> = ({ art }) => {
  const { name, artist } = art
  return (
    <p className={css.artist}>
      {name}
      <span>{artist.name}</span>
    </p>
  )
}
