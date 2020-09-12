import React from 'react'
import EditorConsole from '../components/EditorConsole'

export default function Playground() {
  return (
    <EditorConsole
      height={'100vh'}
      code={`console.log('Hello, playgrounds!')`}
    />
  )
}
