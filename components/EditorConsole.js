import React, { Component } from 'react'

import { WebPlayer, Playgrounds } from 'react-guidebook'
import { colors } from '../styles/theme'

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
                ? Playgrounds.measureCodeHeight(rest.code)
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
        flex: '0 0 30%',
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
        style={style}
        preset="javascript"
        fullscreen={true}
        styles={baseStyles}
        typescript={{ enabled: IS_TYPESCRIPT }}
        css={variant === 'slides' ? Playgrounds.slidesCSS : undefined}
        panes={panes}
        {...rest}
        title={showTitle ? title : undefined}
      />
    )
  }
}
