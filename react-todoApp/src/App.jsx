import React, { useState } from 'react'
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    let newTodos = todos.filter((elm) => {
      if(elm !== todos[index]) return elm;
    })
    setTodos([...newTodos]);
  }

  return (
    <div className='app flex flex-col justify-center items-center w-full h-screen bg-slate-800'>
      <h1 className='font-bold text-3xl mb-6 text-slate-200'>Todo List</h1>
      <div>
      <AddToDo addToDo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default App