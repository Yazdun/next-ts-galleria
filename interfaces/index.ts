import { StaticImageData } from 'next/image'

export interface IArtist {
  image: StaticImageData
  name: string
}

export interface IPictures {
  thumbnail: StaticImageData
  hero: IHeroes
  gallery: StaticImageData
}

export interface IHeroes {
  small: StaticImageData
  large: StaticImageData
}

export interface IArt {
  id: number
  name: string
  year: number
  artist: IArtist
  slug: string
  grid_column: number
  description: string
  source: string
  images: IPictures
}
