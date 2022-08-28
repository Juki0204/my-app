import React from 'react'
import './ToDo.css';

const ToDo = ({ todo, toggleTodo }) => {

    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };

  return (
    <div className="todo_outer">
        <p className="todo_ttl">{todo.title}</p>
        <p className="todo_description">{todo.description}</p>
        <textarea className="annotation" placeholder="補足・備考欄"></textarea>
        <div className="complete_btn_outer">
          <input className="complete_btn" id={`complete_btn-${todo.id}`} type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} />
          <label className="complete_btn_label" htmlFor={`complete_btn-${todo.id}`}>completed!</label>
        </div>
    </div>
  )
}

export default ToDo