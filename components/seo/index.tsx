import React from 'react'
import { NextSeo } from 'next-seo'

interface IProps {
  title?: string
  desc?: string
}

export const SEO: React.FC<IProps> = ({
  title = 'Homepage',
  desc = 'Galleria slideshow site',
}) => {
  return (
    <NextSeo
      title={`Galleria | ${title}`}
      description={desc}
      additionalLinkTags={[{ rel: 'icon', href: '/favicon.png' }]}
      twitter={{
        handle: '@Yazdun',
        site: '@Yazdun',
        cardType: 'summary_large_image',
      }}
    />
  )
}
