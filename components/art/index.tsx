import { IArt } from '@/interfaces/index'
import React from 'react'
import { Title, Info } from '@/components/index'

interface IProps {
  art: IArt
}

export const Art: React.FC<IProps> = ({ art }) => {
  return (
    <div>
      <Title art={art} />
      {/* <Info art={art} /> */}
    </div>
  )
}
