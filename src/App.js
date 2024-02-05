import './App.css';
import Button from './components/Button';
import calculatorLogo from './images/calculator-logo.png';
import Screen from './components/Screen'; 
import ButtonClear from './components/ButtonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() { 

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }; 

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Enter values ​​to perform the calculations, please.")
    }
  
  };

  return (
    <div className='App'>
      <div className='calculator-logo-container'>
        <img
          src={calculatorLogo}
          className='calculator-logo'
          alt='calculator logo' />
      </div>
      <div className='calculator-container'> 
      <Screen input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'> 
        <ButtonClear handleClick= {() => setInput('')}>
          Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
