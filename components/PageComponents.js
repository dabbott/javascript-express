import React from 'react'
import styled from 'styled-components'
import textStyles from '../styles/textStyles'
import EditorConsole from './EditorConsole'

export const Paragraph = styled.p({
  ...textStyles.body,
  marginBottom: '15px',
})

export const Blockquote = styled.blockquote({
  ...textStyles.body,
  borderLeft: '4px solid #DEDFE8',
  padding: '5px 5px 5px 10px',
  marginBottom: '15px',

  [`${Paragraph} + &`]: {
    marginTop: '15px',
  },

  [`& > ${Paragraph}`]: {
    marginBottom: '0px',
  },
})

export const Header = styled.h1({
  ...textStyles.header,

  [`& + ${Paragraph}`]: {
    marginTop: '20px',
  },
})

export const Subheader = styled.h2({
  ...textStyles.subheader,

  [`& + ${Paragraph}`]: {
    marginTop: '15px',
  },

  marginTop: '35px',
})

export const Image = styled.img({
  maxWidth: '100%',
})

export const Pre = styled.pre({
  marginBottom: '15px',
})

export const Strong = styled.strong({
  fontWeight: 'bold',
})

export const Emote = styled.em({
  fontStyle: 'italic',
})

export default {
  Example: EditorConsole,
  p: Paragraph,
  h1: Header,
  h2: Subheader,
  strong: Strong,
  em: Emote,
  table: props => <table {...props} className={'table'} />,
  img: Image,
  pre: Pre,
  blockquote: Blockquote,
  hr: props => null,
}
