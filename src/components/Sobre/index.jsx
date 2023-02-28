import React, { useEffect } from 'react'

import AOS from 'aos'

import 'aos/dist/aos.css'
import './sobre.css'
import arrow from '../../img/arrow-rigth.png'


const Sobre = () => {

  useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])

  return (
    <main id='sobre'>
      <div className='conteudo'>
        <div className='titles-sobre'>
          
            <h1> Olá, eu sou</h1>
            <h1 className='color-name'>Wagner Guedes</h1>
            <p>Desenvolvedor Front-end</p>
          
          
          <div className='buttons'>
            <a href='https://drive.google.com/file/d/1sfkOlV-wDZmSu3Ok8o-pgKRpRl7YOFwg/view?usp=sharing' target='_blank'>
              <button className='cv'>Download CV</button>
            </a>
            <a href='#contatos'>
              <button className='contato'>Entrar em contato</button>
            </a>
          </div>
          
        </div> 


      </div>
      
      <div className='sobre-mim title'>
        <h1 data-aos='fade-up'> <img src={arrow} className='arrow'/>Sobre mim</h1>
        <p data-aos='fade-up'>
          Meu nome é Wagner Willian Guedes sou um profissional em busca de uma oportunidade no mercado de desenvolvimento front-end. Com 21 anos de idade, optei por uma pausa na universidade federal para dedicar-me aos estudos e aprimoramentos das minhas habilidades no desenvolvimento web, onde adquiri conhecimento em HTML, CSS, JavaScript, SASS, ReactJS e React Native.
          Desenvolvi diversos projetos pessoais e realizei alguns freeLancers, todos eles disponíveis em meu perfil do GitHub. Estou comprometido a aprender novas tecnologias e adquirir experiência em novos desafios. Sou apaixonado por tecnologia e acredito que o desenvolvimento front-end seja a área onde posso contribuir de forma significativa.
          Procuro uma oportunidade para iniciar minha carreira profissional, disposto a colaborar em projetos inovadores e a trabalhar em equipe. Meu objetivo é crescer na área de desenvolvimento front-end e contribuir para o sucesso da empresa que me contratar.</p>
      </div>
    </main>
  )
}

export default Sobre