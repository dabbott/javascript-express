import React from 'react'
import { findNode } from 'react-guidebook'
import guidebook from '../guidebook'
import requireSlide from '../utils/requireSlide'
import Slideshow from './Slideshow'

export default ({ sectionName }) => {
  const root = findNode(guidebook, sectionName)

  const slides = [
    requireSlide(root, root, true),
    ...root.children.map(child => requireSlide(root, child, false)),
  ].flat()

  return <Slideshow slides={slides} />
}
