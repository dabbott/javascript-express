import React from 'react'

import Slideshow from '../../components/Slideshow'

export default () => (
  <Slideshow
    sources={[
      require('!!babel-loader!spectacle-mdx-loader!./index.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./primitive_types.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./object_types.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./library_types.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./nullability.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./checking_types.mdx'),
    ]}
  />
)
