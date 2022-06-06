/*-------------------------------------------------------------------
|  React FC Skip
|
|  Purpose:  IT'S JUST A LINK BUTTON
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { ReactNode } from 'react'
import Link from 'next/link'
import css from './styles.module.css'
import cn from 'classnames'

interface IProps {
  icon: ReactNode
  aria_label: string
  href: string
  disabled?: boolean
}

export const Skip: React.FC<IProps> = ({
  icon,
  aria_label,
  href,
  disabled,
}) => {
  return (
    <Link href={href}>
      <a
        data-testid="skip"
        aria-label={aria_label}
        className={cn(css.skip, disabled && css.disabled)}
      >
        {icon}
      </a>
    </Link>
  )
}
