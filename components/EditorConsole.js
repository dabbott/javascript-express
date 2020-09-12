import React, { Component } from 'react'

import { WebPlayer } from 'react-guidebook'
import { colors } from '../styles/theme'

function countPlaygroundWidgets(code) {
  return (code.match(/console\.log/g) || []).length
}

function codeHeight(code) {
  const headerHeight = 40
  const footerHeight = 40
  const lineHeight = 20
  const padding = 4
  const visualSpacer = 20 // To make things look nicer
  const widgetHeight = 30
  const widgetsHeight = countPlaygroundWidgets(code) * widgetHeight
  const codeHeight = code.split('\n').length * lineHeight

  return (
    headerHeight +
    padding +
    codeHeight +
    widgetsHeight +
    visualSpacer +
    padding +
    footerHeight
  )
}

export default class EditorConsole extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    let {
      variant,
      panes = ['editor', 'player'],
      height,
      title,
      showTitle,
      ...rest
    } = this.props

    const style = {
      ...(variant === 'slides'
        ? { flex: '1' }
        : {
            height: height
              ? typeof height === 'number'
                ? `${height}px`
                : height
              : rest.code
                ? codeHeight(rest.code)
                : 400,
          }),
      flex: '1 1 0%',
      minWidth: '0',
      minHeight: '0',
    }

    if (rest.workspaces && rest.workspaces.length > 0) {
      panes = ['workspaces', ...panes]
    }

    const baseStyles = {
      workspacesButtonWrapper: {
        backgroundColor: colors.primary,
      },
      workspacesRowActive: {
        backgroundColor: colors.primary,
        borderLeftColor: colors.primary,
      },
      workspacesRowTitle: {
        color: '#333',
      },
      workspacesRowTitleActive: {
        color: '#333',
        fontWeight: '500',
      },
      workspacesDescription: {
        backgroundColor: colors.primary,
      },
      workspacesDescriptionText: {
        color: '#333',
      },
      workspacesPane: {
        width: '25%',
      },
      tabText: {
        color: '#BBB',
        borderBottomColor: colors.primary,
      },
      tabTextActive: {
        color: '#333',
        borderBottomColor: colors.primary,
      },
      playerPane: {
        display: 'none',
      },
    }

    return (
      <WebPlayer
        fullscreen={true}
        style={style}
        styles={baseStyles}
        width={0}
        playground={{ enabled: true }}
        typescript={{ enabled: true }}
        workspaceCSS={variant === 'slides' ? slidesCSS : workspaceCSS}
        panes={panes}
        {...rest}
        title={showTitle ? title : undefined}
      />
    )
  }
}

const workspaceCSS = `
.cm-s-react {
  color: #333;
}

.cm-s-react span.cm-keyword {
  color: rgb(59, 108, 212);
}

.cm-s-react span.cm-string, .cm-s-react span.cm-string-2, .cm-s-react span.cm-tag {
  color: #2e9f74;
}

.cm-s-react span.cm-bracket {
  color: #555;
}
`

const slidesCSS = `
.CodeMirror {
  background-color: rgb(250,250,250);
}

.CodeMirror-lines {
  padding-top: 20px;
  padding-bottom: 20px;
}

.cm-s-react {
  font-size: 18px;
  line-height: 26px;
}

.cm-s-react .CodeMirror-linenumber {
  display: none;
}

.cm-s-react .CodeMirror-gutters {
  background: rgb(250,250,250);
  padding-left: 12px;
  padding-right: 0px;
  border-left: 0px;
  border-right: 0px;
}
`
