import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Emily"
  const newname = name.toUpperCase()

  function sum(a, b){
      return a + b 
  }

  const url = 'https://img.freepik.com/vetores-premium/ilustracao-de-rosto-feliz-kawaii-de-pequenas-flores-fofas_405506-116.jpg'

  return (
    <>
      <div className='App'>
          <h2>Olá, {newname}</h2>
          <p> Alterando JSX</p>
          <p>soma: {sum(2, 2)}</p>
          <img src={url}   alt="imagem" />
      </div>
    </>
  )
}

export default App
