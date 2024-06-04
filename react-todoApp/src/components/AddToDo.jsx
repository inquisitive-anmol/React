import React, { useState } from 'react'

const AddToDo = ({ addToDo }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim) {
            addToDo(input);
            setInput('');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
<input className='p-2 rounded' type='text'
value={input}
onChange={handleChange}
placeholder='Add a new to-do'></input>

<button className='ml-6 bg-slate-700 hover:bg-slate-600 font-bold rounded-md p-2 text-slate-200' type='submit'>Add</button>
    </form>
  )
}

export default AddToDo