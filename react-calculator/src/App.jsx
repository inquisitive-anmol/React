import React, { useState } from 'react'
import Display from './components/Display'
import ButtonPanel from './components/ButtonPanel'

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (buttonName) => {
    if(buttonName === "=") {
      try{
        setResult(eval(input).toString());
      } catch(err) {
        setResult('Error');
      }
    } else if (buttonName === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + buttonName);
    }
  };

  return (
    <div className='bg-slate-900 w-full h-screen text-white flex justify-center items-center flex-col'>
      <h1 className='font-bold text-3xl text-white mb-3'>Simple Calculator</h1>
      <Display input={input} result= {result} />
      <ButtonPanel onClick={handleButtonClick} />
    </div>
  )
}

export default App