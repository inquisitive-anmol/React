import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
    const [input, setInput] = useState('');
    const [display, setDisplay] = useState('');

const handleChange = (e) => {
    console.log("ye e hai:", e);
    console.log("e.target.value: ", e.target.value);
    setInput(e.target.value);
};


const handleClick = (value) => {
    console.log("working!", value);
    console.log("this: ", input+value)
    if(value === "="){
        let result = eval(input).toString();
        setInput(result);
        setDisplay(result);
    } else if(value === "C" || value === "CE") {
        let newInput = '';
        setInput(newInput);
        setDisplay(newInput);
    } else if(value == "Del") {
        let newInput = input.slice(0, input.length-1);
        setInput(newInput);
        setDisplay(newInput);
    } else {
        let nowInput = input + value;
        setInput(nowInput);
        setDisplay(nowInput);
    }
    console.log("input: ", input);
};

  return (
    <div className="w-1/4 h-3/4 bg-slate-700 flex justify-center items-center flex-col rounded-lg">
      <h1 className="w-full h-1/6 text-center text-slate-300">Simple Calculator</h1>
      <Display value={input} handleChange={handleChange} display={display} />
      <div className="btns w-full">
        <div className="row_1">
          <Button value="%" handleClick={handleClick}/>
          <Button value="CE" handleClick={handleClick}/>
          <Button value="C" handleClick={handleClick}/>
          <Button value = "Del" handleClick={handleClick}/>
        </div>
        <div className="row_2">
          <Button value="7" handleClick={handleClick}/>
          <Button value="8" handleClick={handleClick}/>
          <Button value="9" handleClick={handleClick}/>
          <Button value="/" handleClick={handleClick}/>
        </div>
        <div className="row_3">
          <Button value="4" handleClick={handleClick}/>
          <Button value="5" handleClick={handleClick}/>
          <Button value="6" handleClick={handleClick}/>
          <Button value="*" handleClick={handleClick}/>
        </div>
        <div className="row_4">
          <Button value="1" handleClick={handleClick}/>
          <Button value="2" handleClick={handleClick}/>
          <Button value="3" handleClick={handleClick}/>
          <Button value="-" handleClick={handleClick}/>
        </div>
        <div className="row_5">
          <Button value="=" handleClick={handleClick}/>
          <Button value="0" handleClick={handleClick}/>
          <Button value="." handleClick={handleClick}/>
          <Button value="+" handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
