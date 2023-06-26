

import React, { useState } from 'react';

import './App.css';

import TodoForm from './TodoForm';

import TodoList from './TodoList';


const App = () => {

  const [todos, setTodos] = useState([]);


  const addTodo = (text) => {

    const newTodo = {

      id: Math.random().toString(),

      text: text,

      completed: false,

    };

    setTodos([...todos, newTodo]);

  };


  const deleteTodo = (id) => {

    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);

  };


  const toggleComplete = (id) => {

    const updatedTodos = todos.map((todo) => {

      if (todo.id === id) {

        return { ...todo, completed: !todo.completed };

      }

      return todo;

    });

    setTodos(updatedTodos);

  };


  return (

    <div className="app-container">

      <h1>To-Do List</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />

    </div>

  );

};


export default App;