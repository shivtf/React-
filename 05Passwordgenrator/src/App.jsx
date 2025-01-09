import { useState, useCallback, useEffect, useRef  } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState(false)

  //ref hook give you the reference of the element and manipulate the reference
  const passwordRef = useRef(null)
// useCallBack use to memorize the function and for optimization
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdejghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%&*+-/*|[]{}()"
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
// useEffect call when page load and rerun if dependencies get change
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-red-800 text-orange-500 '>
     <h1 className='text-black text-center p-4 font-bold  '>
      Password Generator
    </h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3' 
      placeholder='password'
      readOnly
      ref={passwordRef} />
      <button onClick={copyPasswordToClipboard} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:from-green-600 hover:to-blue-600">
        Copy
      </button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'> 
        <input type="range" 
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>
        Length:{length}
        </label>
     </div>
      <div className='flex item-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={numberAllowed}
      id="numberInput"
      onChange={()=>{
        setNumberAllowed((prev)=>!prev);
      }} />
      <label htmlFor="numberInput">
      Numbers
      </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={()=>{
          setCharAllowed((prev)=>!prev);
        }} />
        <label htmlFor='characterInput'>
        Characters
        </label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
