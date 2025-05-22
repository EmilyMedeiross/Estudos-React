import { useState } from 'react'
import './App.css'
import HelloWord from './components/HelloWord'
import Props from './components/Props'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {

  const nome = "João"

  return (
    <>
      <Frase/>
      <Frase/>
      <HelloWord/>
      <Props nome="Emily" />
      <Props nome="Júlia" />
      <Props nome={nome} />
      <Pessoa nome="Talia" idade="25" profissao="Psicologa" foto ="https://i.pinimg.com/736x/53/24/0a/53240aa40c965a8c4f00103af0e9a63b.jpg" />
      
    </>
  )
}

export default App
