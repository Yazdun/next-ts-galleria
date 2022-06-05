import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/index'

describe('Navbar', () => {
  it('should renders a link to slideshows', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', {
      name: /start slideshow/i,
    })
    expect(link).toBeInTheDocument()
  })

  it('should renders a logo', () => {
    render(<Navbar />)
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
  })
})
