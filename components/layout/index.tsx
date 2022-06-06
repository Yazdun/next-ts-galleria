/*-------------------------------------------------------------------
|  React FC Layout
|
|  Purpose:  PROJECT'S MAIN LAYOUT WHICH IS USED INSIDE PAGES FOLDER
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Navbar } from '../navbar'
import { motion } from 'framer-motion'
import { framer_variants } from './framer'

interface IProps {
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </>
  )
}
