import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import colors from '../styles/colors'
import textStyles from '../styles/textStyles'
import mediaQuery from '../utils/mediaQuery'

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

export default class Page extends Component {
  render() {
    const { children, footer, title, subtitle, showLogo } = this.props

    return (
      <Container tabIndex={'-1'}>
        <Banner variant={showLogo ? 'large' : 'small'}>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {showLogo && <Logo src={logo} />}
        </Banner>
        <ContentContainer>{children}</ContentContainer>
        {footer}
      </Container>
    )
  }
}
