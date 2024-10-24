import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Approach from './Pages/Dev_Approach'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Approach/>
   </div>
  )
}

export default App
