export const metadata = {
  id: 'useEffect',
  name: 'useEffect Hook',
  description: '副作用处理和生命周期示例',
}

export const code = `
function Timer() {
  const [count, setCount] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
    
    // 清理函数
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useEffect 计时器示例</h2>
      <p>计时: {count} 秒</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '暂停' : '开始'}
      </button>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  );
}

root.render(<Timer />);
`
