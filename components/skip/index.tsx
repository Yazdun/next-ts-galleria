import { ReactNode } from 'react'
import css from './styles.module.css'
import Link from 'next/link'

interface IProps {
  icon: ReactNode
  aria_label: string
  href: string
}

export const Skip: React.FC<IProps> = ({ icon, aria_label, href }) => {
  return (
    <Link href={href}>
      <a aria-label={aria_label}>{icon}</a>
    </Link>
  )
}
