import React from 'react'

const Button = ({value, handleClick}) => {
  return (
   
        <button onClick={() => handleClick(value)} className='p-3 text-slate-200 border border-slate-600 hover:bg-slate-800 rounded w-1/4'>
            {value}
        </button>
   
  )
}

export default Button