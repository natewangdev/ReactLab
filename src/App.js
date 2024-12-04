import React from 'react'
import styled from 'styled-components'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import Editor from '@monaco-editor/react'
import Sidebar from './components/Sidebar'
import Preview from './components/Preview'
import features from './features'
import RunButton from './components/RunButton'

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  background: #1e1e1e;
`

const MainContent = styled.div`
  flex: 1;
  height: 100vh;
  background: #1e1e1e;
`

const ResizeHandle = styled(PanelResizeHandle)`
  width: 4px;
  background: #444;
  &:hover {
    background: #666;
  }
`

const EditorContainer = styled(Panel)`
  background: #1e1e1e;
`

const PreviewContainer = styled(Panel)`
  background: #ffffff;
`

const EditorWrapper = styled.div`
  position: relative;
  height: 100%;

  .monaco-editor {
    padding-top: 60px; // Make space for the run button
  }
`

// Get the first available feature
const getInitialFeature = () => {
  const firstCategory = Object.values(features)[0]
  const firstFeature = Object.values(firstCategory.items)[0]
  return {
    id: firstFeature.metadata.id,
    code: firstFeature.code,
  }
}

// Add Monaco Editor configuration
const editorOptions = {
  fontSize: 16,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  wordWrap: 'on',
  suggestOnTriggerCharacters: true,
  snippetSuggestions: 'on',
  suggest: {
    showKeywords: true,
    showClasses: true,
    showFunctions: true,
  },
}

// Add type definitions setup
const setupMonaco = monaco => {
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.Latest,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.React,
    reactNamespace: 'React',
    allowJs: true,
    typeRoots: ['node_modules/@types'],
  })

  // Add React types
  fetch('https://unpkg.com/@types/react@latest/index.d.ts').then(response => {
    response.text().then(types => {
      monaco.languages.typescript.javascriptDefaults.addExtraLib(types, 'file:///node_modules/@types/react/index.d.ts')
    })
  })
}

const App = () => {
  const initialFeature = getInitialFeature()
  const [selectedFeature, setSelectedFeature] = React.useState(initialFeature.id)
  const [code, setCode] = React.useState(initialFeature.code)
  const [runningCode, setRunningCode] = React.useState(initialFeature.code)

  const handleFeatureSelect = (featureId, featureCode) => {
    setSelectedFeature(featureId)
    setCode(featureCode)
    setRunningCode(featureCode)
  }

  const handleRunCode = () => {
    setRunningCode(code)
  }

  return (
    <AppContainer>
      <Sidebar onFeatureSelect={handleFeatureSelect} selectedFeature={selectedFeature} />
      <MainContent>
        <PanelGroup direction="horizontal">
          <EditorContainer defaultSize={50}>
            <EditorWrapper>
              <RunButton onClick={handleRunCode} />
              <Editor height="100vh" defaultLanguage="javascript" value={code} onChange={setCode} theme="vs-dark" options={editorOptions} beforeMount={setupMonaco} />
            </EditorWrapper>
          </EditorContainer>
          <ResizeHandle />
          <PreviewContainer defaultSize={50}>
            <Preview code={runningCode} />
          </PreviewContainer>
        </PanelGroup>
      </MainContent>
    </AppContainer>
  )
}

export default App
