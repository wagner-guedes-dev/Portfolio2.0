import React, { useEffect } from 'react'

import AOS from 'aos'

import 'aos/dist/aos.css'
import { Icon } from '@iconify/react';
import './habilidades.css'
import arrow from '../../img/arrow-rigth.png'

const Habilidades = () => {

  useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])

  return (
    <main id='habilidades' >
        <div className='title' data-aos='fade-up'>
           <h1><img src={arrow} className='arrow'/>Habilidades</h1> 
        </div>

        <div className='cards'>
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>HTML5</h5>
              <Icon icon="icomoon-free:html-five" width="4rem" color='var(--color-primary)' className='icon'/>
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>CSS3</h5>
              <Icon icon="uiw:css3" width="4rem" color='var(--color-primary)' className='icon'/>
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>JavaScript</h5>
              <Icon icon="ion:logo-javascript" width="4rem" color='var(--color-primary)' className='icon'/>
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>React.js</h5>
              <Icon icon="carbon:logo-react" width="4rem" color='var(--color-primary)' className='icon'/>
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='box' >
              <h5 style={{fontSize: '.8em'}}>React Native</h5>
              <Icon icon="tabler:brand-react-native" width="4rem" color='var(--color-primary)' className='icon' />
            </div>
          </div>

          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>Git</h5>
              <Icon icon="mdi:git" width="4rem" color='var(--color-primary)' className='icon'/>
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>GitHub</h5>
              <Icon icon="mdi:github" width="4rem" color='var(--color-primary)' className='icon'/>
            </div>
          </div>

        </div>
        <div className='services'>

          <div data-aos='fade-up' className='atribuicao'>
            <h3>Desenvolvimento Web</h3>
            <p>Um desenvolvimento focado na cria????o de sites, p??ginas ??nicas, e-commerce e outras aplica????es. Promovendo uma boa experi??ncia e uma boa otimiza????o do site.</p>
          </div>

          <div data-aos='fade-up' className='atribuicao'>
            <h3>Desenvolvimento Responsivo</h3>
            <p>Aplica????o web responsiva, dispon??vel para todos os dispositivos m??veis, tornando o site mais pr??tico e acess??vel.</p>
          </div>

          <div data-aos='fade-up' className='atribuicao'>
            <h3>Desenvolvimento de Aplicativos</h3>
            <p>Um desenvolvimento focado na cria????o de aplica????es mobiles. Como p??ginas ??nicas, e-commerce e aplicativos ??teis no cotidiano.</p>
          </div>

          <div data-aos='fade-up' className='atribuicao'>
            <h3>Experi??ncia do usu??rio</h3>
            <p>Aplica????es voltadas a um conjunto de elementos e fatores de um servi??o, produto ou sistema que tem como objetivo promover uma boa experi??ncia para o usu??rio.</p>
          </div>

        </div>
        



        
    </main>
  )
}

export default Habilidades