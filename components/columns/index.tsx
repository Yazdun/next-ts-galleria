/*-------------------------------------------------------------------
|  React FC Columns
|
|  Purpose:  GALLERY THUMBNAILS COLUMNS
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import { IArt } from '@/interfaces/index'

interface IProps {
  data: IArt[]
}

export const Columns: React.FC<IProps> = ({ data }) => {
  return <div>columns</div>
}
