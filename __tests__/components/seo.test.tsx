import { render } from '@testing-library/react'
import { SEO } from '@/components/index'
import { RENDER_TITLE_META_TAG, DEFAULT_DESC_META_TAG } from '@/constants/index'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

const getMetaDescription = () => {
  var metas = document.getElementsByTagName('meta')
  for (var i in metas) {
    if (
      typeof metas[i].name != 'undefined' &&
      metas[i].name.toLowerCase() == 'description'
    ) {
      return encodeURIComponent(metas[i].content)
    }
  }
  return ''
}

const props = {
  title: 'seo title',
  desc: 'meta description',
}

describe('meta tags prop are provided', () => {
  it('should render the title meta tag', () => {
    render(<SEO {...props} />, { container: document.head })
    expect(document.title).toBe(RENDER_TITLE_META_TAG(props.title))
  })

  it('should render the description meta tag', () => {
    render(<SEO {...props} />, { container: document.head })
    expect(getMetaDescription()).toBe(props.desc.replaceAll(' ', '%20'))
  })
})

describe('meta tags prop are not provided', () => {
  it('should render the default title meta tag', () => {
    render(<SEO />, { container: document.head })
    expect(document.title).toBe(RENDER_TITLE_META_TAG())
  })

  it('should render the default title meta tag', () => {
    render(<SEO />, { container: document.head })
    expect(getMetaDescription()).toBe(
      DEFAULT_DESC_META_TAG.replaceAll(' ', '%20'),
    )
  })
})
