import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//     <h1>Custom App</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   children:'click me to visit google'
// }
const kat = React.createElement('a', {href:'https://www.linkedin.com/in/mukeshchaurasiya1/?originalSubdomain=in',
  target:'_blank' },'bhalu')
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<MyApp />
    //ReactElement
    kat
  //</React.StrictMode>,
)
