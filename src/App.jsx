import React, { useState } from 'react';
import './App.css'
import './index.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh',textAlign:'center'}}>
      <h1>Change Background Color</h1>
     
        <button style={{backgroundColor:'red',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('red')}>Red</button>
        <button style={{backgroundColor:'green',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('green')}>Green</button>
        <button style={{backgroundColor:'blue',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('blue')}>Blue</button>
        <button style={{backgroundColor:'yellow',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button style={{backgroundColor:'pink',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('pink')}>Pink</button>
        <button style={{backgroundColor:'purple',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('purple')}>Purple</button>
        <button style={{backgroundColor:'gray',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('gray')}>Gray</button>
        <button style={{backgroundColor:'orange',borderRadius:'5px',boxShadow:'5px 3px 2px',margin:'10px'}} onClick={() => handleColorChange('orange')}>Orange</button>
     

    </div>
  );
}

export default App;
