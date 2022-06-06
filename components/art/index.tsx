import { IArt } from '@/interfaces/index'
import React from 'react'
import { Hero, Desc } from '@/components/index'

interface IProps {
  art: IArt
}

export const Art: React.FC<IProps> = ({ art }) => {
  return (
    <div>
      <Hero images={art.images} key={art.name} />
      <Desc desc={art.description} year={art.year} />
    </div>
  )
}
