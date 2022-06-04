/*-------------------------------------------------------------------
|  React FC Columns
|
|  Purpose:  GALLERY THUMBNAILS COLUMNS
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IArt } from '@/interfaces/index'
import { Thumbnail } from '@/components/index'
import css from './styles.module.css'

interface IProps {
  data: IArt[]
}

export const Columns: React.FC<IProps> = ({ data }) => {
  return (
    <div className={css.columns}>
      {data.map(art => {
        return <Thumbnail key={art.name} art={art} />
      })}
    </div>
  )
}
