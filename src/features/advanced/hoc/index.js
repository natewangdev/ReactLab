export const metadata = {
  id: 'hoc',
  name: '高阶组件',
  description: 'HOC使用示例',
}

export const code = `
// 高阶组件：添加加载状态
function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>加载中...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// 原始组件
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// 使用高阶组件包装
const UserListWithLoading = withLoading(UserList);

// 使用示例
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      setUsers([
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' }
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>高阶组件示例</h2>
      <button onClick={() => setIsLoading(!isLoading)}>
        切换加载状态
      </button>
      <UserListWithLoading 
        isLoading={isLoading}
        users={users}
      />
    </div>
  );
}

root.render(<App />);
`
