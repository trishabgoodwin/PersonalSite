import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
