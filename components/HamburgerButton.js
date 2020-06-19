import React from 'react'
import styled from 'styled-components'

const Container = styled.div({
  padding: '15px 12px', // Enlarge tap target
  width: '40px',
  height: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  cursor: 'pointer',
  opacity: '0.8',
  transition: 'opacity 0.1s',

  ['&:active']: {
    opacity: '0.3',
  },
})

const Bar = styled.div(({ theme }) => ({
  height: '2px',
  borderRadius: '1px',
  backgroundColor: theme.colors.text,
}))

export default function HamburgerButton({ barCount, onPress }) {
  return (
    <Container onClick={onPress}>
      {[...Array(barCount)].map((_, index) => (
        <Bar key={index} />
      ))}
    </Container>
  )
}

HamburgerButton.defaultProps = {
  barCount: 3,
  onPress: () => {},
}
