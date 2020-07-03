import React, { useMemo } from 'react'
import { findNode } from 'react-guidebook'
import Slideshow from './Slideshow'
import guidebook from '../guidebook'
import requireSlide from '../utils/requireSlide'

export default ({ sectionName }) => {
  const slides = useMemo(
    () => {
      const root = findNode(guidebook, sectionName)

      return [
        requireSlide(root, root, true),
        ...root.children.map(child => requireSlide(root, child, false)),
      ].flat()
    },
    [sectionName]
  )

  return <Slideshow slides={slides} />
}
