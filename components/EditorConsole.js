import React, { Component } from 'react'

import WebPlayer from './WebPlayer'

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
    const { variant, ...rest } = this.props

    return (
      <WebPlayer
        fullscreen={true}
        flex={variant === 'slides' ? '1' : undefined}
        height={rest.code ? codeHeight(this.props.code) : 400}
        playground={{ enabled: true }}
        width={0}
        typescript={{ enabled: true }}
        workspaceCSS={variant === 'slides' ? slidesCSS : undefined}
        {...rest}
        title={undefined}
      />
    )
  }
}

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
