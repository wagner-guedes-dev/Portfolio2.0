import Header from './components/Header'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contatos from './components/Contatos'

import { useState } from 'react'

import './App.css'



function App() {
  
  const [scrol, setScrol] = useState(false)

  if(scrol){
    document.documentElement.style.overflow = 'hidden';
  }else{
    document.documentElement.style.overflow = 'auto';
  }


  const [menuDisable , setMenuDisable] = useState(true)
  
  return (
    <div className='App'>
      <Header setScrol={setScrol} menuDisable={menuDisable}/>
      <Sobre/>
      <Habilidades/>
      <Projetos scrol={scrol} setScrol={setScrol} setMenuDisable={setMenuDisable}/>
      <Contatos/>
    </div>
  )
}

export default App
