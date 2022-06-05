import React from 'react'
import { Navbar } from '../navbar'
import { Progression } from '@/components/index'
import cn from 'classnames'
import css from './styles.module.css'

interface IProps {
  children: React.ReactNode
  slug?: boolean
}

export const Layout: React.FC<IProps> = ({ children, slug = false }) => {
  return (
    <div className={cn(slug && css.slug)}>
      <Navbar />
      <main>{children}</main>
      {slug && <Progression />}
    </div>
  )
}
