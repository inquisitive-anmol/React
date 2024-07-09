import React, { useState } from 'react'

const Card = ({id, user, handleRemove}) => {

  return (
<div className='w-48 bg-sky-400 rounded-md p-2 flex flex-col items-center'>
  <div className='w-full h-2/3 flex items-center justify-center py-1'>
    <img className='w-14 h-14 rounded-full' src={user.image} />
  </div>
  <h2 className='text-xl font-semibold text-center'>{user.name}</h2>
  <h4 className='text-xs opacity-60 text-center'>{user.email}</h4>
  <h5 className='px-2 text-sm text-center mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, non? </h5>
  <button onClick={() => handleRemove(id)} className='bg-red-600 rounded-full px-2 py-1 mt-2 text-white text-sm'>Remove!</button>
</div>
  )
}

export default Card