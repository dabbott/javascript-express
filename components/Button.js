import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.div(({ theme, variant }) => ({
  flex: '0 0 auto',
  padding: '10px 15px',
  backgroundColor:
    variant === 'secondary'
      ? theme.colors.button.secondaryBackground
      : theme.colors.button.primaryBackground,
  color:
    variant === 'secondary'
      ? theme.colors.button.secondaryText
      : theme.colors.button.primaryText,
  borderRadius: '3px',
  textAlign: 'center',
  border: '1px solid rgba(0,0,0,0.05)',
  cursor: 'pointer',
}))

export default ({ href, title, variant }) => (
  <Link href={href}>
    <Title variant={variant}>{title}</Title>
  </Link>
)
