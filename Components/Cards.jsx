import React from 'react'
import Card from './Card'

const Cards = ({users, handleRemove}) => {   
  return (
    <div className='w-full max-h-96 overflow-auto py-2 gap-2 flex items-center justify-center flex-wrap'>
        {users.map((user, index) => (
         <Card key={index} id={index} user={user} handleRemove={handleRemove}/>
        ))}
    </div>

  )
}

export default Cards