import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, dispatch }) => {

  const todoList = todos.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    )
  })

  return (
    <div className="todoContainer">
      {todoList}
    </div>
  );
}

export default TodoList;