import React, { useEffect, useState } from 'react'

import AOS from 'aos'

import 'aos/dist/aos.css'
import './sobre.css'
import arrow from '../../img/arrow-rigth.png'
import computer from '../../img/computer.png'

import { Icon } from '@iconify/react';

const Sobre = () => {

  const [email, setEmail] = useState('wagnerguedes123@hotmail.com');
  const [msnCopyEmail, setMsnCopyEmail] = useState('Copiar E-mail')

  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])


  function handleClick() {
    const element = document.getElementById('sobre');
    const offset = 200;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  function copiarTexto() {
    const elemento = document.createElement('textarea');
    elemento.value = email;
    document.body.appendChild(elemento);
    elemento.select();
    document.execCommand('copy');
    document.body.removeChild(elemento);

    setMsnCopyEmail('E-mail copiado!');
    setTimeout(() => {
      setMsnCopyEmail('Copiar E-mail');
    }, 3000);
  }

  return (
    <main>
      <div className='conteudo' >
        <div className='titles-sobre'>
          
            <h1 data-aos='fade-up'> Olá, eu sou</h1>
            <h1 data-aos='fade-up' className='color-name'>Wagner Guedes</h1>
            <p data-aos='fade-up' style={{fontWeight: '700', fontSize: '1.5em'}}>Desenvolvedor Front-end.</p>
            <p data-aos='fade-up' style={{marginTop: '15px', width: '80%', textAlign: 'center'}}>Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.</p>
          
          <div className='buttons' >
            <a>
              <button onClick={()=> handleClick()} data-aos='fade-up' className='cm'>Conhecer mais</button>
            </a>
          </div>
          
        </div>
      </div>
      
      <div id='sobre' data-aos='fade-up' className='sobre-mim title'>
        <h1> <img src={arrow} className='arrow'/>Desenvolvedor Front-End</h1>

        <div  className='sobre-divisor'>
          <div>
            <h3>Desenvolvedor Front-end com experiências em React, React-native, e  VanillaJS.</h3>
            <p style={{marginTop: '10px'}}>
            Meu nome é Wagner, tenho 21 anos e atuo na área de desenvolvimento há mais de 1 ano. Possuo experiência como freelancer, mas estou buscando uma primeira oportunidade no mercado como desenvolvedor Jr.<br/>
            Logo abaixo tem o meu currículo com informçôes mais detalhadas sobre mim. Se preferir, podemos marcar uma call atráves do meu e-mail que está disponibilizado.</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <button className='cv'>Baixar CV  <Icon icon="material-symbols:download" width="1.3rem" color='#000' /></button>
              <button className='ce' onClick={()=>copiarTexto()}>{msnCopyEmail} {msnCopyEmail === 'Copiar E-mail' ?<Icon icon="material-symbols:content-copy-outline" width="1.3rem" color='#fff' /> : null}</button>
            </div>
            
          </div>
          <div>
            <img src={computer} />
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default Sobre