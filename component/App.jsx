// controlled components
// aap jabhi kuchh likhe useState ke through data real time par update kar denge
// jaise hi kuchh typeho set state kardo nay value ke barabar.


import React, { useState } from 'react'

const App = () => {

  const [val, setVal] = useState({name: "", email: ""});
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setVal({...val, name: event.target.value})}/>
        <input type="text" onChange={(event) => setVal({...val, email: event.target.value})}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App