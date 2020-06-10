import 'reset-css'
import 'github-fork-ribbon-css/gh-fork-ribbon.css'
import '../styles/main.css'

import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import Page from '../components/Page'
import { pageView } from '../utils/Analytics'

import sitemap from '../sitemap'

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.endsWith('slides')) {
      return <Component {...pageProps} />
    } else {
      return (
        <Page>
          <Component {...pageProps} />
        </Page>
      )
    }
  }
}

if (typeof document !== 'undefined') {
  document.onload = pageView
  Router.onRouteChangeComplete = pageView
}
