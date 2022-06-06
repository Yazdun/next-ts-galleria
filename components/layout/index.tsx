/*-------------------------------------------------------------------
|  React FC Layout
|
|  Purpose:  PROJECT'S MAIN LAYOUT WHICH IS USED INSIDE PAGES FOLDER
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Navbar } from '../navbar'

interface IProps {
  children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
