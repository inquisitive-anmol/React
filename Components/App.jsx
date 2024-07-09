import React, { useState } from 'react'
import Cards from './Components/Cards'
import From from './Components/From'

const App = () => {
const [users, setUsers] = useState([]);

const handleFormSubmit = (data) => {
  setUsers([...users, data]);
  console.log(data);
  console.log(users);
}

const handleRemove = (id) => {
  setUsers(users.filter((user, index) => id !== index))
}
  return (
    <div className='w-full h-screen p-4 flex justify-center flex-col items-center gap-5'>
      <Cards users={users} handleRemove={handleRemove}/>
      <From handleFormSubmit={handleFormSubmit}  />
    </div>
  )
}

export default App