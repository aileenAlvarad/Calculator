import './App.css';
import Button from './components/Button';
import calculatorLogo from './images/calculator-logo.png';

function App() {
  return (
    <div className='App'>
      <div className='calculator-logo-container'>
        <img
          src={calculatorLogo}
          className='calculator-logo'
          alt='calculator logo' />
      </div> 
      <div className='calculator-container'>  
      <div className='row'>
        <Button>1</Button>
        </div> 
      <div className='row'></div>
      <div className='row'></div>
      <div className='row'></div> 
      <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
