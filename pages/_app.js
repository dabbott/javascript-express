import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import ChapterPage from '../components/Page'
import { pageView } from '../utils/Analytics'

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.endsWith('slides')) {
      return <Component {...pageProps} />
    } else {
      return (
        <ChapterPage>
          <Component {...pageProps} />
        </ChapterPage>
      )
    }
  }
}

if (typeof document !== 'undefined') {
  document.onload = pageView
  Router.onRouteChangeComplete = pageView
}
