export const metadata = {
  id: 'useContext',
  name: 'useContext Hook',
  description: '跨组件状态共享示例',
}

export const code = `
// 创建主题Context
const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = React.useContext(ThemeContext);
  
  const themeStyles = {
    light: {
      background: '#fff',
      color: '#000',
      border: '1px solid #000',
      padding: '8px 16px',
    },
    dark: {
      background: '#000',
      color: '#fff',
      border: '1px solid #fff',
      padding: '8px 16px',
    }
  };
  
  return (
    <button style={themeStyles[theme]}>
      当前主题: {theme}
    </button>
  );
}

function App() {
  const [theme, setTheme] = React.useState('light');
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>useContext 主题切换示例</h2>
      <ThemeContext.Provider value={theme}>
        <div style={{ marginBottom: '20px' }}>
          <ThemeButton />
        </div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          切换主题
        </button>
      </ThemeContext.Provider>
    </div>
  );
}

root.render(<App />);
`
