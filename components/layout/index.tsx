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

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main {...framer_variants}>{children}</motion.main>
    </>
  )
}
