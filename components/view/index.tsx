import { IArt } from '@/interfaces/index'
import Image from 'next/image'
import { useWindowSize } from '@/hooks/index'
import css from './styles.module.css'

interface IProps {
  art: IArt
}

export const View: React.FC<IProps> = ({ art }) => {
  const { isTouch } = useWindowSize()

  return (
    <div className={css.view}>
      <Image
        src={art.images.hero.large}
        alt="hello"
        layout="responsive"
        placeholder="blur"
        objectFit="cover"
        height={800}
      />
    </div>
  )
}
