export const metadata = {
  id: 'useState',
  name: 'useState Hook',
  description: '状态管理基础示例',
}

export const code = `
function Counter() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>useState 示例</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>计数器</h3>
        <p>当前计数: {count}</p>
        <button onClick={() => setCount(count + 1)}>增加</button>
        <button onClick={() => setCount(count - 1)}>减少</button>
      </div>

      <div>
        <h3>输入框</h3>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="请输入内容"
        />
        <p>输入的内容: {text}</p>
      </div>
    </div>
  );
}

root.render(<Counter />);
`
