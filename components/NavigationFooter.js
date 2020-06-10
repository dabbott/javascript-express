import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../utils/mediaQuery'
import Button from './Button'

const Container = styled.div({
  flex: '0 0 auto',
  display: 'flex',
  flexDirection: 'row',

  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '40px 60px',

  [mediaQuery.small]: {
    flexDirection: 'column-reverse',
    alignItems: 'stretch',
    padding: '20px 20px',
  },
})

const Spacer = styled.div({
  flex: '1 1 auto',
  [mediaQuery.small]: {
    flex: '0 0 10px',
  },
})

export default ({ nextSection, previousSection }) => (
  <Container>
    {previousSection && (
      <Button
        variant={'secondary'}
        href={`/${previousSection.slug}`}
        title={`Previous - ${previousSection.title}`}
      />
    )}
    {previousSection && <Spacer />}
    {nextSection && (
      <Button
        variant={'primary'}
        href={`/${nextSection.slug}`}
        title={`Next - ${nextSection.title}`}
      />
    )}
  </Container>
)
