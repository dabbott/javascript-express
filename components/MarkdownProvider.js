import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import textStyles from '../styles/textStyles'
import EditorConsole from './EditorConsole'
import SectionHeader from './SectionHeader'

export default function MarkdownProvider({ children }) {
  return (
    <MDXProvider
      components={{
        Example: EditorConsole,
        p: props => <p {...props} style={textStyles.body} />,
        h1: SectionHeader,
        h2: props => <div {...props} style={styles.h2} />,
        strong: props => <strong {...props} style={styles.strong} />,
        em: props => <em {...props} style={styles.em} />,
        table: props => <table {...props} className={'table'} />,
        img: props => <img alt="" style={styles.img} {...props} />,
        pre: props => <pre {...props} style={styles.pre} />,
        blockquote: props => (
          <blockquote {...props} style={styles.blockquote} />
        ),
        hr: props => null,
      }}
    >
      {children}
    </MDXProvider>
  )
}

const styles = {
  h2: {
    fontSize: '14px',
    fontWeight: '500',
    marginTop: '35px',
    marginBottom: '15px',
  },
  strong: {
    fontWeight: 'bold',
  },
  em: {
    fontStyle: 'italic',
  },
  blockquote: {
    borderLeft: '4px solid #DEDFE8',
    paddingLeft: '10px',
  },
  img: {
    maxWidth: '100%',
  },
  pre: {
    marginBottom: '15px',
  },
}
