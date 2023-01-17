import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [color,setColor]=useState("redColor")
  const [value,setValue]=useState(false)
  const handleClick=()=>{
    value==false ? setColor("blueColor") : setColor("redColor")
    value==false ? setValue(true) : setValue(false)
  }
  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
