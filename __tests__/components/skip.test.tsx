import { render, screen } from '@testing-library/react'
import { Skip } from '@/components/index'
import { TbPlayerSkipForward } from 'react-icons/tb'

describe('Skip Button', () => {
  it('should render correct href', () => {
    render(
      <Skip href="/test" icon={<TbPlayerSkipForward />} aria_label="test" />,
    )
    const link = screen.getByTestId('skip')
    expect(link).toHaveAttribute('href', '/test')
  })

  it('should render correct aria label', () => {
    render(
      <Skip href="/test" icon={<TbPlayerSkipForward />} aria_label="test" />,
    )
    const link = screen.getByTestId('skip')
    expect(link).toHaveAttribute('aria-label', 'test')
  })
})
