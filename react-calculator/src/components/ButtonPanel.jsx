import React from 'react'

const ButtonPanel = ({onClick}) => {
const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    'C', '0', '=', '/'
];

  return (

    <div className='flex flex-wrap w-1/4 h-3/5 bg-slate-800'>
        {buttons.map((button, index) => (
             <button className='p-1 w-1/4 text-2xl border rounded' key={index} onClick={() => onClick(button)}>
             {button}
         </button>
        ))}
    </div>
  )
}

export default ButtonPanel