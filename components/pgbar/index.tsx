/*-------------------------------------------------------------------
|  React FC Progress Bar
|
|  Purpose:  SHOW PROGRESS STATUS ON BASED ON GIVEN PROPS
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { motion } from 'framer-motion'
import css from './styles.module.css'
import { framer_pgbar } from './framer'

interface IProps {
  current_id: number
}

export const PgBar: React.FC<IProps> = ({ current_id }) => {
  return (
    <motion.div className={css.pg} {...framer_pgbar(current_id)}></motion.div>
  )
}
