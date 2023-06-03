import { useState } from 'react'
import './App.css'
import React from 'react'
import Card from './components/card/Card'
import Formulario from './components/formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario />
    </>
  )
}

export default App
