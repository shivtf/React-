import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter, ChaiCounter] = useState(15)

  // let counter = 15 
   const addValue = ()=>{
    // counter = counter + 1
    ChaiCounter(counter + 1)// or you can give value of counter in ()
    }
  const removeValue = ()=>{
    if(addValue === 20){
    console.log("Stop");
    } else if(removeValue === 0){
      console.log();
      
    }
    counter = counter - 1
    ChaiCounter(counter)
  }
  return (
    <>
    <h1> Shivam Bhandari || Chai Or Code</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Increase Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
