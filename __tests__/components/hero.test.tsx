import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from '@/components/index'
import { data } from '@/data/index'

describe('Hero', () => {
  it('should render a cta button to view image', () => {
    render(<Hero images={data[0].images} />)
    const cta = screen.getByTestId('hero_cta')
    expect(cta).toBeInTheDocument()
  })
})
