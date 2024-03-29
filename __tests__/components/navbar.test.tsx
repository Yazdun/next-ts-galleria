import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/index'

describe('Navbar', () => {
  it('should render a link related to slideshows', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', {
      name: /slideshow/i,
    })
    expect(link).toBeInTheDocument()
  })

  it('should render a logo', () => {
    render(<Navbar />)
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
})
