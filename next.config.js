const webpack = require('webpack')
const withImages = require('next-images')

const LANGUAGE_TYPESCRIPT = process.env.LANGUAGE_TYPESCRIPT
const IS_TYPESCRIPT = !!LANGUAGE_TYPESCRIPT
const IS_JAVASCRIPT = !LANGUAGE_TYPESCRIPT

console.log(
  `Building for language: ${LANGUAGE_TYPESCRIPT ? 'TypeScript' : 'JavaScript'}`
)

const withGuidebook = require('generate-guidebook/next')({
  guidebookDirectory: './pages',
  guidebookModulePath: './guidebook.js',
  variables: { IS_TYPESCRIPT, IS_JAVASCRIPT },
})

const withMDX = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
})

const rawFileRE = /examples(\/|\\)files(\/|\\).*$/

const withRawExampleLoader = nextConfig => ({
  ...nextConfig,
  webpack(config, options) {
    // Choose whether to load ts or js example first
    if (LANGUAGE_TYPESCRIPT) {
      config.resolve.extensions.unshift('.ts')
    } else {
      config.resolve.extensions.push('.ts')
    }

    if (LANGUAGE_TYPESCRIPT) {
      config.module.rules.push({
        test: rawFileRE,
        use: 'raw-loader',
      })
    } else {
      // If the language is set to js, strip out ts types
      config.module.rules.push({
        test: file => rawFileRE.test(file) && file.endsWith('.ts'),
        use: [
          'raw-loader',
          {
            loader: '@sucrase/webpack-loader',
            options: {
              transforms: ['typescript'],
            },
          },
        ],
      })

      config.module.rules.push({
        test: file => rawFileRE.test(file) && file.endsWith('.js'),
        use: ['raw-loader'],
      })
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        IS_TYPESCRIPT: JSON.stringify(IS_TYPESCRIPT),
        IS_JAVASCRIPT: JSON.stringify(IS_JAVASCRIPT),
      })
    )

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = withRawExampleLoader(
  withGuidebook(
    withImages(
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      })
    )
  )
)
