import React from 'react'
import { motion } from 'framer-motion'
import css from './styles.module.css'

interface IProps {
  current_id: number
}

export const PgBar: React.FC<IProps> = ({ current_id }) => {
  const initial = current_id * 6.666666666666667
  const animate = initial + 6.666666666666667
  return (
    <motion.div
      className={css.pg}
      initial={{ width: `${initial}%` }}
      animate={{ width: `${animate}%` }}
    ></motion.div>
  )
}
