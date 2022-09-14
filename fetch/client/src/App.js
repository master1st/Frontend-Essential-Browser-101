//fetch https://www.youtube.com/watch?v=d6suykcsNeY
//axios 둘다 사용할 것.
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/todo');
    setTodoList(response.data);
    fetch('http://localhost:4000/api/todo').then((response))
  .then((response) => response.json())
  .then((data) => setTodoList(data));
  }
  useEffect(() => {
  fetchData();
}, []);

const onSubmitHandler = (e) => {
  e.preventDefault();
  const text = e.target.text.value;
  const done = e.target.done.checked;
  axios.post({
    url : 'http://localhost:4000/api/todo',
    method : 'post',
    data: {
      text,
      done,
    }
  });
  // fetch('http://localhost:4000/api/todo', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type' : 'application/json',
  //   },
  //   body: JSON.stringify({
  //     text,
  //     done,
  //   }),
  // }).then(() => 
  // fetchData());
};
  return (
    <div className='App'>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox"/>
        <input type="submit" value ="추가" />
      </form>
      <h1>TODO LIST</h1>
      {todoList && todoList.map((item) => (
      <div key={item.id} style={{display: 'flex'}}>
      <li>{item.id}</li> 
      <li>{item.text}</li>
      <li>{item.done}</li>
      </div>))}
    </div>
  );
}

export default App;
