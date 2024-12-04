export const metadata = {
  id: 'props',
  name: 'Props传递',
  description: '组件属性传递示例',
}

export const code = `
function UserCard({ name, age, hobby, children }) {
  return (
    <div style={{ 
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px',
      borderRadius: '4px'
    }}>
      <h3>{name}</h3>
      <p>年龄: {age}</p>
      <p>爱好: {hobby}</p>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Props传递示例</h2>
      
      <UserCard 
        name="张三"
        age={25}
        hobby="读书"
      >
        <button>联系我</button>
      </UserCard>

      <UserCard 
        name="李四"
        age={30}
        hobby="运动"
      >
        <p>这是一段描述文字</p>
      </UserCard>
    </div>
  );
}

root.render(<App />);
`
