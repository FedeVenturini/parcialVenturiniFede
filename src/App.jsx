import { useState } from 'react'
import './App.css'
import React from 'react'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
