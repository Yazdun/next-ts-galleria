/*-------------------------------------------------------------------
|  React FC Showcase
|
|  Purpose:  MASONRY GRID FOR ART'S SHOWCASE ON THE HOMEPAGE, THIS FC
|            IS MEANT TO BE USED WITH `COLUMN` FC IN ORDER TO RENDER
|            THE MASONARY GRID CORRECTLY. 
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IArt } from '@/interfaces/index'
import css from './styles.module.css'
import { Column } from '../column'

interface IProps {
  data: IArt[]
}

export const Showcase: React.FC<IProps> = ({ data }) => {
  return (
    <div className={css.grid}>
      <Column data={data} column={1} />
      <Column data={data} column={2} />
      <Column data={data} column={3} />
      <Column data={data} column={4} />
    </div>
  )
}
