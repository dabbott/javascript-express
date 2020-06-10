const withImages = require('next-images')

const withMDX = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
})

const withRawExampleLoader = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /examples(\/|\\)files(\/|\\).*$/,
        use: 'raw-loader',
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}

module.exports = withRawExampleLoader(
  withImages(
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    })
  )
)
