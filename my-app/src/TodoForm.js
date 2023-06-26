

import React, { useState } from 'react';


const TodoForm = ({ addTodo }) => {

  const [text, setText] = useState('');


  const handleSubmit = (e) => {

    e.preventDefault();

    if (text.trim() === '') {

      return;

    }

    addTodo(text);

    setText('');

  };


  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        value={text}

        onChange={(e) => setText(e.target.value)}

        placeholder="Enter a task"

        className="todo-input"

      />

      <button type="submit" className="add-button">

        Add

      </button>

    </form>

  );

};


export default TodoForm;