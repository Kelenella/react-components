import React from 'react';
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className={s.todoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{text}</p>
        <button
          type="button"
          className={s.deleteButton}
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default TodoList;
