import React from 'react';
import { useRef } from 'react';

const AddTodo = ({ dispatch }) => {

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: 'add',
      id: inputRef.current.value,
      title: inputRef.current.value,
      content: ''
    });

    inputRef.current.value = ''
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input className="addTodo" type="text" placeholder="Add Todo" ref={inputRef} />
      <button className="addBtn" type="submit">ADD</button>
    </form>
  );
}

export default AddTodo;