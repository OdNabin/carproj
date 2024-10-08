import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
          <Route path="/" element={<Home />} />
     
      </Routes>
    </BrowserRouter>
  )
}

export default App
