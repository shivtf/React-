// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  //const [count, setCount] = useState(0)
  // let someObj = {
  //   username:"shivam",
  //   age:"24"
  // }
  // let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        TailWind Test
      </h1>
      {/* <div className="flex flex-col rounded-xl  p-4 "
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="../public/wallpaperflare.com_wallpaper (1).jpg"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Straw Hats</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#1</p>
            <p>$10000</p>
          </div>
        </div>
      </div> */}
        <Card username="Shivam" btnText="click"/> 
        {/* someOjb={newArr} */}
        <Card username="Akshat " btnText="click"/>
      
    </>
  )
}

export default App
