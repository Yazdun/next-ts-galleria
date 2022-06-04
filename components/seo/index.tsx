/*-------------------------------------------------------------------
|  React FC SEO
|
|  Purpose:  REUSABLE SEO COMPONENT FOR USING IN PROJECT'S PAGES
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { NextSeo } from 'next-seo'
import { DEFAULT_DESC_META_TAG, RENDER_TITLE_META_TAG } from '@/constants/index'

interface IProps {
  title?: string
  desc?: string
}

export const SEO: React.FC<IProps> = ({ title = '', desc = '' }) => {
  return (
    <NextSeo
      title={RENDER_TITLE_META_TAG(title)}
      description={desc ? desc : DEFAULT_DESC_META_TAG}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
      twitter={{
        handle: '@Yazdun',
        site: '@Yazdun',
        cardType: 'summary_large_image',
      }}
    />
  )
}
