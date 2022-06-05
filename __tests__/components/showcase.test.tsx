import { render, screen } from '@testing-library/react'
import { Showcase } from '@/components/index'
import { data } from '@/data/index'

describe('Showcase', () => {
  // disables console warnings
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  data.map(art => {
    it(`should render ${art.name}'s thumbnail`, () => {
      render(<Showcase data={data} />)
      const thumbnail = screen.getByTestId(art.name)
      expect(thumbnail).toBeInTheDocument()
    })
  })
})
