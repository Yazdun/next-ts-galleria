import React from 'react'
import { Navbar } from '../navbar'
import { Progression } from '@/components/index'
import cn from 'classnames'
import css from './styles.module.css'
import { IArt } from '@/interfaces/index'

interface IProps {
  children: React.ReactNode
  art?: IArt
}

export const Layout: React.FC<IProps> = ({ children, art }) => {
  return (
    <div className={cn(art && css.art)}>
      <Navbar />
      <main>{children}</main>
      {art && <Progression art={art} />}
    </div>
  )
}
