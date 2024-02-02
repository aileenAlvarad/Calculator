import React from 'react'; 
import '../stylesheet/clearButton.css'

const ButtonClear = (props) => (
 <div className='clear-button' 
 onClick={props.handleClick}>
  {props.children}
 </div>
); 

export default ButtonClear; 