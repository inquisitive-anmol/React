import React from 'react'

const Display = ({input, result}) => {
  return (
    <div className='w-1/4 h-36 bg-red-900'>
        <div className="input bg-slate-600 border w-full h-1/2">{input}</div>
        <div className="result bg-slate-600 border w-full h-1/2">{result}</div>
    </div>
  )
}

export default Display