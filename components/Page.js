import React, { Component } from 'react'
import styled from 'styled-components'
import ShowAt from './ShowAt'
import HideAt from './HideAt'
import MarkdownProvider from './MarkdownProvider'
import logo from '../images/logo.svg'
import textStyles from '../styles/textStyles'
import colors from '../styles/colors'

const Container = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '0',
  minHeight: '0',
  outline: 'none',
})

const ContentContainer = styled.div({
  borderTop: `1px solid ${colors.divider}`,
  backgroundColor: 'white',
  padding: '0px 60px 40px 60px',
})

const Content = styled.div({
  flex: '1 1 auto',
  minWidth: '0',
  minHeight: '0',
})

const Mobile = styled.div({
  padding: '60px 20px 20px 20px',
  // overflowY: 'scroll',
})

const Logo = styled.img({
  paddingTop: '40px',
  width: '256px',
  height: '296px',
})

const FooterContainer = styled.div({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
})

const Title = styled.span(textStyles.title)

const Subtitle = styled.span(textStyles.subtitle)

const Banner = styled.div(({ height }) => ({
  position: 'relative',
  height: `${height || 200}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: `linear-gradient(to bottom, ${colors.banner.top}, ${
    colors.banner.bottom
  })`,
}))

export default class Page extends Component {
  render() {
    const {
      children,
      footer,
      title,
      subtitle,
      bannerHeight,
      showLogo,
    } = this.props

    return (
      <MarkdownProvider>
        <FooterContainer>
          <ShowAt breakpoint={'small'}>
            <Mobile tabIndex={'-1'}>{children}</Mobile>
          </ShowAt>
          <HideAt breakpoint={'small'}>
            <Container tabIndex={'-1'}>
              <Banner height={bannerHeight}>
                <Title>{title}</Title>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {showLogo && <Logo src={logo} />}
              </Banner>
              <Content>
                <ContentContainer>{children}</ContentContainer>
              </Content>
            </Container>
          </HideAt>
          {footer}
        </FooterContainer>
      </MarkdownProvider>
    )
  }
}
