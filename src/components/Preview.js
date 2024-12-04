/* global Babel */
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import styled from 'styled-components'

const PreviewContainer = styled.div`
  padding: 20px;
  height: 100%;
  background: #ffffff;
  overflow: auto;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
`

const ErrorMessage = styled.div`
  color: #ff0000;
  padding: 10px;
  background: #ffebee;
  border-radius: 4px;
  margin: 10px 0;
`

const Preview = ({ code }) => {
  const [error, setError] = React.useState(null)
  const containerRef = React.useRef(null)
  const rootRef = React.useRef(null)

  const executeCode = React.useCallback(() => {
    if (!containerRef.current) return

    try {
      const transformedCode = Babel.transform(code, {
        presets: ['react'],
      }).code

      if (!rootRef.current) {
        rootRef.current = ReactDOMClient.createRoot(containerRef.current)
      }

      // Wrap the code execution in requestAnimationFrame
      requestAnimationFrame(() => {
        const scope = {
          React,
          root: rootRef.current,
        }

        const scopeKeys = Object.keys(scope).join(', ')
        const scopeValues = Object.values(scope)

        // eslint-disable-next-line
        const execute = new Function(scopeKeys, transformedCode)
        execute.apply(null, scopeValues)
      })

      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }, [code])

  React.useEffect(() => {
    executeCode()
  }, [executeCode])

  return (
    <PreviewContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div ref={containerRef} />
    </PreviewContainer>
  )
}

export default Preview
