import React from 'react'
import path from 'path'

/**
 * @typedef {{ SlideComponent: React.Component, NotesComponent: React.Component, sectionName: string }} Slide
 */

/**
 * @param {import('react-guidebook').TreeNode} root
 * @param {import('react-guidebook').TreeNode} node
 * @returns {Slide[]}
 */
export default function requireSlide(root, node, isRoot) {
  const getNodeName = node => path.basename(node.file, '.mdx')

  const nodeName = (isRoot ? '' : getNodeName(root) + '/') + getNodeName(node)

  const module = require('!!babel-loader!spectacle-mdx-loader!../pages/' +
    nodeName +
    '.mdx')

  const { default: slideComponents, notes: notesComponents } = module

  const slides = []

  for (let i = 0; i < slideComponents.length; i++) {
    slides.push({
      SlideComponent: slideComponents[i],
      NotesComponent: notesComponents[i],
      sectionName: isRoot ? node.title : `${root.title} / ${node.title}`,
    })
  }

  return slides
}
