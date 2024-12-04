export const metadata = {
  id: 'components',
  name: '组件定义',
  description: '组件创建和使用示例',
}

export const code = `
// 函数组件
function Welcome({ name }) {
  return <h3>你好, {name}</h3>;
}

// 类组件
class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>计数: {this.state.count}</p>
        <button onClick={this.increment}>增加</button>
      </div>
    );
  }
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React组件示例</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>函数组件</h3>
        <Welcome name="访客" />
      </div>

      <div>
        <h3>类组件</h3>
        <Counter />
      </div>
    </div>
  );
}

root.render(<App />);
`
