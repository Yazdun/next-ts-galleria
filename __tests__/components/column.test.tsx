import { render, screen } from '@testing-library/react'
import { Column } from '@/components/index'
import { data } from '@/data/index'

const generate_column = (column: number) =>
  data.filter(art => art.grid_column === column)

const grid_columns = [
  {
    col: 1,
    title: 'first',
  },
  {
    col: 2,
    title: 'second',
  },
  {
    col: 3,
    title: 'third',
  },
  {
    col: 4,
    title: 'fourth',
  },
]

describe('Column', () => {
  // disables console warnings
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  grid_columns.map(item => {
    const { col, title } = item
    return generate_column(col).map(art => {
      return it(`should render the ${title} column correctly`, () => {
        render(<Column column={col} data={data} />)
        const thumbnail = screen.getByTestId(art.name)
        expect(thumbnail).toBeInTheDocument()
      })
    })
  })
})
