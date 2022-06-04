import React from 'react'
import { IArt } from '@/interfaces/index'
import Image from 'next/image'

interface IProps {
  art: IArt
}

export const Thumbnail: React.FC<IProps> = ({ art }) => {
  return (
    <div>
      <Image
        src={art.images.thumbnail}
        alt="hello"
        placeholder="blur"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  )
}
