import React from 'react'

const Display = ({input, handleChange, display}) => {
  return (
    <div className='w-full h-1/4 bg-sky-400'>
        <input value={!display ? "" : display ? display : input} onChange={handleChange} type="text" className='w-full h-full bg-slate-700 hover:bg-slate-800 text-slate-200 outline-none' />
    </div>
  )
}

export default Display