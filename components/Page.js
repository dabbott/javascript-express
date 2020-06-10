import { MDXProvider } from '@mdx-js/react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import colors from '../styles/colors'
import textStyles from '../styles/textStyles'
import mediaQuery from '../utils/mediaQuery'
import {
  getNextSection,
  getPreviousSection,
  getSection,
} from '../utils/Sections'
import HamburgerButton from './HamburgerButton'
import NavigationFooter from './NavigationFooter'
import PageComponents from './PageComponents'
import Sidebar from './Sidebar'

const Container = styled.div({
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

const PageContainer = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '0',
  minHeight: '0',
  outline: 'none',
})

const PageContentContainer = styled.div({
  borderTop: `1px solid ${colors.divider}`,
  backgroundColor: 'white',
  padding: '60px 60px',
  [mediaQuery.small]: {
    padding: '20px 20px',
  },
})

const Logo = styled.img({
  paddingTop: '40px',
  width: '256px',
  height: '296px',
  [mediaQuery.small]: {
    paddingTop: '20px',
    width: `${Math.floor(256 / 1.2)}px`,
    height: `${Math.floor(296 / 1.2)}px`,
  },
})

const Title = styled.span(textStyles.title)

const Subtitle = styled.span(textStyles.subtitle)

const Banner = styled.div(({ variant }) => ({
  flex: '0 0 auto',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: `linear-gradient(to bottom, ${colors.banner.top}, ${
    colors.banner.bottom
  })`,

  height: `${variant === 'large' ? 560 : 200}px`,
  [mediaQuery.small]: {
    height: `${variant === 'large' ? 420 : 200}px`,
  },
}))

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

const Page = ({ router, children }) => {
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

  const title = section.title
  const nextSection = getNextSection(slug)
  const previousSection = getPreviousSection(slug)

  return (
    <MDXProvider components={PageComponents}>
      <Helmet title={title}>
        <html lang="en" />
      </Helmet>
      <Container>
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
          <PageContainer tabIndex={'-1'}>
            {isIntroduction ? (
              <Banner variant={'large'}>
                <Title>{'JavaScript Express'}</Title>
                <Subtitle>
                  {'Learn JavaScript through interactive examples'}
                </Subtitle>
                <Logo src={logo} />
              </Banner>
            ) : (
              <Banner variant={'small'}>
                <Title>{title}</Title>
              </Banner>
            )}
            <PageContentContainer>
              {isIntroduction && <GithubRibbon title={'View on GitHub'} />}
              {children}
            </PageContentContainer>
            <NavigationFooter
              nextSection={nextSection}
              previousSection={previousSection}
            />
          </PageContainer>
        </Content>
      </Container>
      {showMenu && (
        <MobileOnly>
          <MenuContainer tabIndex="-1">
            <Sidebar currentSection={section} centered />
          </MenuContainer>
        </MobileOnly>
      )}
    </MDXProvider>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRouter(Page)
