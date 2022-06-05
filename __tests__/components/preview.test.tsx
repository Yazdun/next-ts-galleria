import { render, screen } from '@testing-library/react'
import { Preview } from '@/components/index'
import { data } from '@/data/index'

describe('Preview', () => {
  it('should renders correct info', () => {
    render(<Preview art={data[0]} />)
    const info = screen.getByTestId('preview-artist')
    expect(info).toHaveTextContent(data[0].artist.name)
  })
})
