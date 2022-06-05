/*-------------------------------------------------------------------
|  React FC Skip
|
|  Purpose:  IT'S JUST A LINK BUTTON
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { ReactNode } from 'react'
import Link from 'next/link'

interface IProps {
  icon: ReactNode
  aria_label: string
  href: string
}

export const Skip: React.FC<IProps> = ({ icon, aria_label, href }) => {
  return (
    <Link href={href}>
      <a data-testid="skip" aria-label={aria_label}>
        {icon}
      </a>
    </Link>
  )
}
