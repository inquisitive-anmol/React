import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-4 py-3 bg-slate-800 flex items-center justify-between text-white text-xl'>
<div className='text-red-400'>Friends Book!</div>
<div className='text-sm bg-red-500 px-3 py-1 rounded-md'>Friends <span>{data.filter((item, idx) => item.friends).length}</span></div>
    </div>
  )
}

export default Navbar