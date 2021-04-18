const LANGUAGE_TYPESCRIPT = process.env.LANGUAGE_TYPESCRIPT
const IS_TYPESCRIPT = !!LANGUAGE_TYPESCRIPT
const IS_JAVASCRIPT = !LANGUAGE_TYPESCRIPT
const LANGUAGE = LANGUAGE_TYPESCRIPT ? 'TypeScript' : 'JavaScript'

const webpack = require('webpack')

// Common

const withImages = require('next-images')
const slug = require('rehype-slug')
const generateGuidebook = require('generate-guidebook/next')
const pkg = LANGUAGE_TYPESCRIPT
  ? require('./config/typescript-express.json')
  : require('./config/javascript-express.json')

const { locales, defaultLocale } = pkg.i18n

console.log(`Building for language: ${LANGUAGE}`)

const withGuidebooks = nextConfig =>
  locales.reduce(
    (nextConfig, locale) =>
      generateGuidebook({
        guidebookDirectory:
          locale === defaultLocale ? './pages' : `./pages/${locale}`,
        guidebookModulePath: `./guidebook-${locale}.js`,
        variables: { IS_TYPESCRIPT, IS_JAVASCRIPT, LANGUAGE },
      })(nextConfig),
    nextConfig
  )

const withMDX = require('next-mdx-frontmatter')({
  extension: /\.mdx?$/,
  MDXOptions: {
    rehypePlugins: [slug],
  },
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
        LANGUAGE: JSON.stringify(LANGUAGE),
        FILE_EXTENSION: JSON.stringify(IS_TYPESCRIPT ? '.ts' : '.js'),
      })
    )

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = withRawExampleLoader(
  withGuidebooks(
    withImages(
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
      })
    )
  )
)
