import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  // disables console warnings
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('should renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /frontend mentor's galleria/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('should renders the showcase', () => {
    render(<Home />)
    const showcase = screen.getByTestId('showcase')
    expect(showcase).toBeInTheDocument()
  })
})
