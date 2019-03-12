import React from 'react';
import { useReducer } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

let cachedTodos;

if (window.localStorage.storageTestTodos) {
  cachedTodos = JSON.parse(window.localStorage.getItem('storageTestTodos'));
} else {
  cachedTodos = [];
}

const App = ({ props }) => {

  const [todos, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: action.title,
            title: action.title,
            content: action.content
          }
        ];
      case 'delete':
        return state.filter(todo => {
          return todo.id !== action.id;
        })
      default:
        return state;
    }
  }, cachedTodos);

  window.localStorage.setItem('storageTestTodos', JSON.stringify(todos.slice()));

  return (
    <div className="container">
      <h1>Browser Storage Test</h1>
      <AddTodo dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
