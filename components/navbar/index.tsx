import { project_logo } from '@/assets/shared'
import Image from 'next/image'
import React from 'react'
import { useWindowSize } from '@/hooks/index'

export const Navbar: React.FC = () => {
  const { isTouch } = useWindowSize()

  return (
    <div>
      <Image
        src={project_logo}
        alt="galleria"
        width={isTouch ? 113.04 : 169.56}
        height={isTouch ? 32 : 48}
      />
    </div>
  )
}
