export interface IArtist {
  image: string
  name: string
}

export interface IPictures {
  thumbnail: string
  hero: IHeroes
  gallery: string
}

export interface IHeroes {
  small: string
  large: string
}

export interface IArt {
  name: string
  year: number
  description: string
  source: string
  artist: IArtist
  images: IPictures
}
