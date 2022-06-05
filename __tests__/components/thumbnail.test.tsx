import { render, screen } from '@testing-library/react'
import { Thumbnail } from '@/components/index'
import { data } from '@/data/index'

describe("Thumbnail's info", () => {
  // disables console warnings
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  data.map(art => {
    return it(`should render ${art.name}'s info correctly`, () => {
      render(<Thumbnail art={art} />)
      const info = screen.getByTestId('thumbnail_info')
      const artist = screen.getByTestId('thumbnail_artist')
      expect(info).toHaveTextContent(art.name)
      expect(artist).toHaveTextContent(art.artist.name)
    })
  })
})
