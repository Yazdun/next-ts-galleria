// meta tags
export const DEFAULT_TITLE_META_TAG = 'Homepage'
export const DEFAULT_DESC_META_TAG = 'Galleria slideshow site'
export const RENDER_TITLE_META_TAG = (title?: string) =>
  `Galleria | ${title ? title : DEFAULT_TITLE_META_TAG}`

// project logo sizes
export const PROJECT_LOGO_DESKTOP_SIZES = {
  width: 169.56,
  height: 48,
}
export const PROJECT_LOGO_MOBILE_SIZES = {
  width: 113.04,
  height: 32,
}
