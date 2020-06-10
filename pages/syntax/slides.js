import React from 'react'

import Slideshow from '../../components/Slideshow'

export default () => (
  <Slideshow
    sources={[
      require('!!babel-loader!spectacle-mdx-loader!../syntax.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./equality.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./logical_operators.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./variables.mdx'),
      require('!!babel-loader!spectacle-mdx-loader!./iteration.mdx'),
    ]}
  />
)
