import React, { useEffect, useMemo, useState } from 'react'
import EditorConsole from '../components/EditorConsole'

const targetOrigin =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : IS_TYPESCRIPT
      ? 'https://typescript.express'
      : 'https://javascript.express'

const getCodeParameter = () => {
  const params = window.location.search.slice(1).split('&')

  for (let param of params) {
    const [key, value] = param.split('=')

    if (key === 'code') {
      return decodeURIComponent(value)
    }
  }

  return ''
}

export default function Playground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)

    window.onmessage = e => {
      const data = JSON.parse(e.data)
      history.replaceState({}, '', `?code=${encodeURIComponent(data.code)}`)
    }
  }, [])

  const code = useMemo(() => (ready ? getCodeParameter() : ''), [ready])

  if (!ready) return null

  return (
    <EditorConsole
      targetOrigin={targetOrigin}
      height={'100vh'}
      code={code || `console.log('Hello, playgrounds!')`}
      sharedEnvironment={true}
      playground={{
        enabled: true,
        inspector: 'node',
        renderReactElements: true,
        debounceDuration: 200,
        instrumentExpressionStatements: true,
      }}
    />
  )
}
