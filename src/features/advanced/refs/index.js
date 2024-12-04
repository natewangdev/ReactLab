export const metadata = {
  id: 'refs',
  name: 'Refs & DOM',
  description: 'DOM操作和引用示例',
}

export const code = `
function TextInputWithFocusButton() {
  const inputRef = React.useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>聚焦输入框</button>
    </div>
  );
}

function StopWatch() {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h3>秒表</h3>
      <p>时间: {time} 秒</p>
      {!isRunning ? (
        <button onClick={startTimer}>开始</button>
      ) : (
        <button onClick={stopTimer}>停止</button>
      )}
      <button onClick={resetTimer}>重置</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Refs示例</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>DOM Refs</h3>
        <TextInputWithFocusButton />
      </div>

      <div>
        <StopWatch />
      </div>
    </div>
  );
}

root.render(<App />);
`
