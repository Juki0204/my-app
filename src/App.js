import { useState, useRef } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const todoTtlRef = useRef();
  const todoDescRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const ttl = todoTtlRef.current.value;
    const desc = todoDescRef.current.value;
    console.log(ttl);
    console.log(desc);
    if(ttl === "" || desc === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), title: ttl, description: desc, completed: false }];
    });
    todoTtlRef.current.value = null;
    todoDescRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <h1>ToDoリスト</h1>
      <div className="form_outer">
        <div className="flex">
          <p className="form_ttl">作業タイトル</p>
          <input type="text" ref={todoTtlRef} />
        </div>
        <div className="flex">
          <p className="form_description">作業内容</p>
          <input type="text" ref={todoDescRef} />
        </div>
        <div className="flex">
          <button className="button" onClick={handleAddTodo}>タスクを追加</button>
          <button className="button" onClick={handleClear}>完了したタスクの削除</button>
        </div>
        <div className="align-right">残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
      </div>
      <ToDoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
