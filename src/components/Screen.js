import React from 'react'; 
import '../stylesheet/screen.css'

const Screen = ({ input }) => (
   <div className='input'> 
		{input} 
	 </div> 
); 

export default Screen; 

// en el input se reemplaza el estado, es lo que se muestra en la pantalla