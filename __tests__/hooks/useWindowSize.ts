import { act, renderHook } from '@testing-library/react-hooks'
import { useWindowSize } from '@/hooks/useWindowSize'

describe('hook', () => {
  it("should return document width's size correctly", () => {
    const { result } = renderHook(useWindowSize)
    expect(result.current.width).toBe(window.innerWidth)
  })
  it("should return document height's size correctly", () => {
    const { result } = renderHook(useWindowSize)
    expect(result.current.height).toBe(window.innerHeight)
  })
})
