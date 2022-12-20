import React from 'react'

import './sobre.css'
import img2 from '../../img/img2.png'


const Sobre = () => {
  return (
    <main id='sobre'>
      <div className='conteudo'>
        <div>
          
            <h1> Olá, eu sou</h1>
            <h1 className='color-name typing'>Wagner Guedes :)</h1>
            <p>Desenvolvedor Front-end</p>
          
          
          <div className='buttons'>
            <a href='https://drive.google.com/file/d/1sfkOlV-wDZmSu3Ok8o-pgKRpRl7YOFwg/view?usp=sharing' target='_blank'>
              <button className='cv'>Download CV</button>
            </a>
            
            <button className='contato'>Entrar em contato</button>
          </div>
          
        </div> 

        <div>
            <img className='eu-img' src={img2}/>
        </div>

      </div>
      
      <div className='sobre-mim title'>
        <h1>Sobre mim</h1>
        <p>Sou desenvolvedor front-end com experiência em React.js, JavaScript e consumo de APIs. Meu primeiro contato com a programação foi em 2020, quando conclui a matéria Programação de Computadores I na Universidade Federal de Ouro Preto. Fiquei extremamente fascinado pelo universo da tecnologia e decidi estudar linguagens voltadas para o desenvolvimento front-end.</p>
      </div>
    </main>
  )
}

export default Sobre