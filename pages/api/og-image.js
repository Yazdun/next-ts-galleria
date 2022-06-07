import { withOGImage } from 'next-api-og-image'

export default withOGImage({
  template: {
    react: ({ name }) => <div>🔥 {name}</div>,
  },
})
