export interface IArtist {
  image: object
  name: string
}

export interface IPictures {
  thumbnail: object
  hero: IHeroes
  gallery: object
}

export interface IHeroes {
  small: object
  large: object
}

export interface IArt {
  name: string
  year: number
  description: string
  source: string
  artist: IArtist
  images: IPictures
}
