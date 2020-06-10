import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import colors from '../styles/colors'

const Title = styled.div(({ variant }) => ({
  flex: '0 0 auto',
  padding: '10px 15px',
  backgroundColor:
    variant === 'secondary' ? 'rgb(160,160,160)' : colors.primary,
  color: variant === 'secondary' ? 'white' : 'black',
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
