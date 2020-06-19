import styled from 'styled-components'
import EditorConsole from './EditorConsole'

export const Paragraph = styled.p(({ theme }) => ({
  ...theme.textStyles.body,
  marginBottom: '15px',
}))

export const Blockquote = styled.blockquote(({ theme }) => ({
  ...theme.textStyles.body,
  borderLeft: `4px solid ${theme.colors.neutralBackground}`,
  padding: '5px 5px 5px 10px',
  marginBottom: '15px',

  [`${Paragraph} + &`]: {
    marginTop: '15px',
  },

  [`& > ${Paragraph}`]: {
    marginBottom: '0px',
  },
}))

export const Header = styled.h1(({ theme }) => ({
  ...theme.textStyles.header,

  [`& + ${Paragraph}`]: {
    marginTop: '20px',
  },
}))

export const Subheader = styled.h2(({ theme }) => ({
  ...theme.textStyles.subheader,

  [`& + ${Paragraph}`]: {
    marginTop: '15px',
  },

  marginTop: '35px',
}))

export const Image = styled.img({
  maxWidth: '100%',
})

export const Pre = styled.pre(({ theme }) => ({
  fontFamily: theme.textStyles.fonts.monospace,
  marginBottom: '15px',
  padding: '2px 4px',
  color: '#555',
  backgroundColor: '#f3f3f3',
  borderRadius: '4px',
}))

export const Code = styled.code(({ theme }) => ({
  fontFamily: theme.textStyles.fonts.monospace,
  padding: '2px 4px',
  color: '#555',
  backgroundColor: '#f3f3f3',
  borderRadius: '4px',
  fontSize: '90%',
}))

export const InlineCode = Code

export const Strong = styled.strong({
  fontWeight: 'bold',
})

export const Emote = styled.em({
  fontStyle: 'italic',
})

export const List = styled.li({
  display: 'list-item',
})

const listBase = {
  marginTop: '0',
  marginBottom: '10px',
  display: 'block',
  paddingLeft: '40px',
  paddingTop: '5px',
  paddingBottom: '5px',

  ['& ol, & ul']: {
    marginBottom: '0',
  },
}

export const OrderedList = styled.ol(({ theme }) => ({
  ...listBase,
  ...theme.textStyles.body,
  listStyleType: 'decimal',
}))

export const UnorderedList = styled.ul(({ theme }) => ({
  ...listBase,
  ...theme.textStyles.body,
  listStyleType: 'disc',
}))

export const Anchor = styled.a(({ theme }) => ({
  ...theme.textStyles.body,
  backgroundColor: 'transparent',
  color: '#337ab7',
  textDecoration: 'none',

  '&:focus, &hover': { color: '#23527c', textDecoration: 'underline' },

  '&:active, &hover': {
    outline: '0',
  },

  'a:focus': {
    outline: '5px auto -webkit-focus-ring-color',
    outlineOffset: '-2px',
  },
}))

export const Table = styled.table({
  width: '100%',
  maxWidth: '100%',
  marginBottom: '20px',
  display: 'table',
  backgroundColor: 'transparent',
  borderCollapse: 'collapse',
  borderSpacing: '0',
})

export const TableHeader = styled.thead({
  display: 'table-header-group',
  verticalAlign: 'middle',
  borderColor: 'inherit',
  borderBottom: '2px solid #ddd',
  borderTop: '1px solid #ddd',
})

export const TableBody = styled.tbody({
  display: 'table-row-group',
  verticalAlign: 'middle',
  borderColor: 'inherit',
  borderBottom: '2px solid #ddd',
})

export const TableRow = styled.tr({
  display: 'table-row',
  verticalAlign: 'inherit',
  borderColor: 'inherit',
})

const tableCellBase = {
  display: 'table-cell',
  padding: '8px',
  lineHeight: '1.42857',
}

export const TableBodyCell = styled.td(({ theme }) => ({
  ...tableCellBase,
  ...theme.textStyles.body,
  borderTop: '1px solid #ddd',
}))

export const TableHeaderCell = styled.th(({ theme }) => ({
  ...tableCellBase,
  ...theme.textStyles.body,
  fontWeight: 'bold',
  textAlign: 'left',
}))

export default {
  a: Anchor,
  blockquote: Blockquote,
  code: Code,
  em: Emote,
  Example: EditorConsole,
  h1: Header,
  h2: Subheader,
  hr: props => null,
  img: Image,
  inlineCode: InlineCode,
  li: List,
  ol: OrderedList,
  p: Paragraph,
  pre: Pre,
  strong: Strong,
  table: Table,
  tbody: TableBody,
  td: TableBodyCell,
  th: TableHeaderCell,
  thead: TableHeader,
  tr: TableRow,
  ul: UnorderedList,
}

if (module.hot) {
  module.hot.decline()
}
