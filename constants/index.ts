export const DEFAULT_TITLE_META_TAG = 'Homepage'
export const DEFAULT_DESC_META_TAG = 'Galleria slideshow site'
export const RENDER_TITLE_META_TAG = (title?: string) =>
  `Galleria | ${title ? title : DEFAULT_TITLE_META_TAG}`
