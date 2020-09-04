import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="icon" type="image/png" href="/static/favicon.png" />
          <meta
            name="description"
            content="Learn JavaScript through interactive examples."
          />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://www.javascript.express/" />
          <meta property="og:site_name" content="JavaScript Express" />
          <meta property="og:title" content="JavaScript Express" />
          <meta
            property="og:description"
            content="Learn JavaScript through interactive examples."
          />
          <meta
            property="og:image"
            content="http://www.javascript.express/static/logo@2x.png"
          />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:card" content="summary" />
          <meta property="og:site" content="@dvnabbott" />
          <meta property="og:creator" content="@dvnabbott" />
          <meta property="fb:app_id" content="907755649360812" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
