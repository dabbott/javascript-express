import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import App from 'next/app'
import Router from 'next/router'
import Page from '../components/Page'
import { pageView } from '../utils/Analytics'
import colors from '../styles/colors'
import textStyles from '../styles/textStyles'

const theme = {
  colors: colors,
  textStyles: textStyles,
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <ThemeProvider theme={theme}>
        {router.pathname.endsWith('slides') ? (
          <Component {...pageProps} />
        ) : (
          <Page>
            <Component {...pageProps} />
          </Page>
        )}
      </ThemeProvider>
    )
  }
}

if (typeof document !== 'undefined') {
  document.onload = pageView
  Router.onRouteChangeComplete = pageView
}
