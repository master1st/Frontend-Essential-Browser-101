//fetch https://www.youtube.com/watch?v=d6suykcsNeY
//axios 둘다 사용할 것.
import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
  fetch('http://localhost:4000/api/todo')
  .then((response) => response.json())
  .then((data) => setTodoList(data));
}, []);
  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      {todoList && todoList.map((item) => (
        <div>
      <li>{item.id}</li>
      <li>{item.text}</li>
      <li>{item.done}</li>
      </div>))}
    </div>
  );
}

export default App;
