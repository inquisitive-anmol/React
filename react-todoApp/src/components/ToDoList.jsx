import React from 'react'

const ToDoList = ({ todos, deleteTodo }) => {

  const handleDelete = (index) => {
    deleteTodo(index);
  };

  return (
    <>
      <div className='mt-4'>
        <ul>
          {todos.map((todo, index) => (
            <li className='text-white text-lg mt-2' key={index}>{index + 1}. {todo}
              <button className='ml-4 bg-slate-700 rounded p-2 text-slate-200 font-bold text-sm hover:bg-slate-600' onClick={() => handleDelete(index)}>Delete</button></li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default ToDoList