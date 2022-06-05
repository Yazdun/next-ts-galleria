import React from 'react'
import { IArt } from '@/interfaces/index'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const Info: React.FC<IProps> = ({ art }) => {
  return <div>{art.description}</div>
}
