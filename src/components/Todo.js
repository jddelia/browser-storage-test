import React from 'react';

const Todo = ({ todo, dispatch }) => {

  function handleClick() {
    console.log(todo.id);
    
    dispatch({
      type: 'delete',
      id: todo.id
    });
  }

  return (
    <div className="todo">
      <span className="todoTitle">{todo.title}</span>
      <span className="deleteBtn" onClick={handleClick}>X</span>
    </div>
  );
}

export default Todo;