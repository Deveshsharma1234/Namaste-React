import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const header = [];
 
  for (let index = 1; index <10; index++) {
    console.log(index,header)
   header.push( <Header/>)
    
  }
  return (
    <>
    
   {header}
    </>

  )
}

export default App
