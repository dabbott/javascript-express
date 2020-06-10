import { MDXProvider } from '@mdx-js/react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'
import {
  getNextSection,
  getPreviousSection,
  getSection,
} from '../utils/Sections'
import HamburgerButton from './HamburgerButton'
import HideAt from './HideAt'
import PageComponents from './PageComponents'
import NavigatorButton from './NavigationFooter'
import Page from './Page'
import ShowAt from './ShowAt'
import Sidebar from './Sidebar'
import colors from '../styles/colors'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: '0',
  minHeight: '0',
})

const Inner = styled.div({
  flex: '1 1 auto',
  flexDirection: 'row',
  alignItems: 'stretch',
  display: 'flex',
  minWidth: '0',
  minHeight: '0',
})

const Content = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  position: 'relative',
  minWidth: '0',
  minHeight: '0',
  overflowY: 'auto',
  // overflowY: 'scroll',
})

const SidebarContainer = styled.div({
  flex: '0 0 280px',
  borderRight: `1px solid ${colors.divider}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  minWidth: '0',
  minHeight: '0',
  outline: 'none',

  [mediaQuery.small]: {
    display: 'none',
  },
})

const MobileOnly = styled.div({
  display: 'none',
  [mediaQuery.small]: {
    display: 'flex',
  },
})

const DesktopOnly = styled.div({
  display: 'flex',
  [mediaQuery.small]: {
    display: 'none',
  },
})

const MenuContainer = styled.div({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  zIndex: '10000',
  backgroundColor: 'white',
  overflowY: 'auto',
})

const MenuButtonContainer = styled.div({
  position: 'absolute',
  top: '10px',
  left: '10px',
  zIndex: 12000,
})

const Footer = styled.div({
  display: 'flex',
  flex: '0 0 auto',
})

const GithubRibbon = ({ title }) => (
  <a
    className="github-fork-ribbon"
    href="https://github.com/dabbott/javascript-express"
    data-ribbon={title}
    title={title}
  >
    {title}
  </a>
)

const ChapterPage = ({ router, children }) => {
  const [showSidebar, setShowSidebar] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(
    () => {
      setShowMenu(false)
    },
    [router.pathname]
  )

  const slug = router.pathname.slice(1)

  const isIntroduction = slug === ''
  const section = getSection(slug)

  if (!section) return `Could not find page: ${slug}`

  const title = section.fullTitle || section.title
  const nextSection = getNextSection(slug)
  const previousSection = getPreviousSection(slug)

  const footer = (
    <Footer>
      <NavigatorButton
        nextSection={nextSection}
        previousSection={previousSection}
      />
    </Footer>
  )

  const contents = (
    <MDXProvider components={PageComponents}>{children}</MDXProvider>
  )

  return (
    <>
      <Helmet title={title}>
        <html lang="en" />
      </Helmet>
      <Container>
        <Inner>
          {showSidebar && (
            <SidebarContainer>
              <Sidebar currentSection={section} />
            </SidebarContainer>
          )}
          <Content key={slug}>
            <MenuButtonContainer>
              <DesktopOnly>
                <HamburgerButton
                  onPress={() => void setShowSidebar(!showSidebar)}
                />
              </DesktopOnly>
              <MobileOnly>
                <HamburgerButton onPress={() => void setShowMenu(!showMenu)} />
              </MobileOnly>
            </MenuButtonContainer>
            {isIntroduction ? (
              <Page title={'JavaScript Express'} footer={footer} showLogo>
                <GithubRibbon title={'View on GitHub'} />
                {contents}
              </Page>
            ) : (
              <Page title={title} footer={footer}>
                {contents}
              </Page>
            )}
          </Content>
        </Inner>
        {showMenu && (
          <MobileOnly>
            <MenuContainer tabIndex="-1">
              <Sidebar currentSection={section} centered />
            </MenuContainer>
          </MobileOnly>
        )}
      </Container>
    </>
  )
}

ChapterPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRouter(ChapterPage)
