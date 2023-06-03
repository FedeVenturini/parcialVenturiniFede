import { useState } from 'react'
import './App.css'
import React from 'react'
import Card from './components/card/Card'
import Formulario from './components/formulario/Formulario'

function App() {
  const [usuario, setUsuario] = useState({});

  const guardarUsuario = (nombre, juego) => {
    setUsuario({ nombre, juego });
  };

  //El object keys lo utilizo para ver si persona tiene algun dato setado por la funcion guardarPersona
  // Obviamente x2, brindado por chatGpt
  return (
    <>
      <Formulario guardarUsuario= {guardarUsuario}/>

      {Object.keys(usuario).length === 0 ? undefined : (
        <Card nombre={usuario.nombre} juego={usuario.juego} />
      )}
    </>
  )
}

export default App
