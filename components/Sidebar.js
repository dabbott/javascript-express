import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SidebarTitle = styled.div(({ theme, centered }) => ({
  textAlign: centered ? 'center' : 'left',
  margin: '0',
  borderBottom: `1px solid ${theme.colors.divider}`,
}))

const SidebarTitleText = styled.a(({ centered }) => ({
  paddingLeft: centered ? '0' : '35px',
  flex: '0 0 auto',
  fontSize: '18px',
  fontWeight: '300',
  lineHeight: '60px',
  color: '#263053',
  cursor: 'pointer',
  userSelect: 'none',
}))

const SidebarRowsContainer = styled.div(({ centered }) => ({
  overflowY: 'auto',
  paddingTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: centered ? 'center' : 'stretch',
  outline: 'none',
}))

const SidebarRowItem = styled.div(({ small, centered }) => ({
  flex: '0 0 40px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: centered ? '0' : '35px',
  fontSize: small ? '13px' : '16px',
  fontWeight: '300',
  margin: '0',
}))

const Numeral = styled.span(({ theme, centered }) => ({
  color: theme.colors.text,
  flex: '0 0 50px',
  display: centered ? 'none' : 'initial',
}))

const DotContainer = styled.div({
  flex: '0 0 60px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
})

const Dot = styled.div(({ theme }) => ({
  flex: '0 0 auto',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: theme.colors.neutralBackground,
}))

const SidebarLinkText = styled.a(({ theme, isActive }) => ({
  color: theme.colors.text,
  cursor: 'pointer',
  userSelect: 'none',
  ...(isActive && {
    textDecoration: 'underline',
    fontWeight: '500',
  }),
}))

const ExpandButton = styled.div(({ theme, active }) => ({
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'rgba(38,48,83,0.35)',
  padding: '1px 4px',
  backgroundColor: theme.colors.neutralBackground,
  textDecoration: 'none',
  borderRadius: '10px',
  alignSelf: 'center',
  lineHeight: '0px',
  height: '10px',
  marginLeft: '10px',
  cursor: 'pointer',
  opacity: active ? '0.5' : '1',
  userSelect: 'none',
}))

/**
 * @param {guidebook.TreeNode} nodes
 * @param {number[]} indexPath
 */
const createRows = (node, indexPath) => {
  return [
    { ...node, indexPath },
    ...node.children.flatMap((child, index) =>
      createRows(child, [...indexPath, index + 1])
    ),
  ]
}

const SidebarRow = ({
  centered,
  title,
  linkPath,
  hasChildren,
  indexPath,
  isActive,
  isExpanded,
  isParentExpanded,
  onToggleSection,
}) => {
  // Hide if collapsed parent
  if (indexPath.length > 2 && !isParentExpanded) {
    return null
  }

  let numeral = indexPath.join('.')

  return (
    <SidebarRowItem small={indexPath.length > 2} centered={centered}>
      <Numeral centered={centered}>
        {indexPath.length <= 2 ? numeral : ''}
      </Numeral>

      <Link href={linkPath}>
        <SidebarLinkText isActive={isActive}>{title}</SidebarLinkText>
      </Link>

      {indexPath.length > 1 &&
        hasChildren && (
          <ExpandButton active={isExpanded} onClick={onToggleSection}>
            ...
          </ExpandButton>
        )}
    </SidebarRowItem>
  )
}

const Sidebar = ({ rootSection, currentSection, centered }) => {
  const { slug: currentSlug, parent: currentParent } = currentSection

  const { title, children } = rootSection

  const router = useRouter()

  const [expandedState, setExpandedState] = useState({
    [currentSlug]: true,
    [currentParent]: true,
  })

  // Reset expanded state when the route changes
  useEffect(
    () => {
      setExpandedState({
        [currentSlug]: true,
        [currentParent]: true,
      })
    },
    [currentSlug, currentParent]
  )

  return (
    <>
      <SidebarTitle centered={centered}>
        <Link href={'/'}>
          <SidebarTitleText centered={centered}>{title}</SidebarTitleText>
        </Link>
      </SidebarTitle>
      <SidebarRowsContainer centered={centered} tabIndex="-1">
        {children.map((node, index) => (
          <React.Fragment key={index.toString()}>
            {createRows(node, [index + 1]).map(
              ({ title, slug, parent, children, indexPath }) => (
                <SidebarRow
                  key={slug}
                  centered={centered}
                  title={title}
                  indexPath={indexPath}
                  hasChildren={children.length > 0}
                  linkPath={`/${slug}`}
                  isActive={`/${slug}` === router.asPath}
                  isExpanded={expandedState[slug]}
                  isParentExpanded={expandedState[parent]}
                  onToggleSection={() =>
                    setExpandedState({
                      ...expandedState,
                      [slug]: !expandedState[slug],
                    })
                  }
                />
              )
            )}
            <DotContainer key={`dot`}>
              <Dot />
            </DotContainer>
          </React.Fragment>
        ))}
      </SidebarRowsContainer>
    </>
  )
}

export default Sidebar
