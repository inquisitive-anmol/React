import React, { useRef } from 'react'

const App = () => {

const name = useRef(null);
const age = useRef(null);

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(name.current.value, age.current.value);
}
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='name' ref={name} />
      <input type="text" placeholder='age' ref={age} />
      <input type="submit" />
    </form>
  )
}

export default App


// this is the first way of form handling in react.
