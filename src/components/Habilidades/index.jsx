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
              <Icon icon="icomoon-free:html-five" width="4rem" color='var(--color-primary)' />
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>CSS3</h5>
              <Icon icon="uiw:css3" width="4rem" color='var(--color-primary)' />
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>JavaScript</h5>
              <Icon icon="ion:logo-javascript" width="4rem" color='var(--color-primary)' />
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>React.js</h5>
              <Icon icon="carbon:logo-react" width="4rem" color='var(--color-primary)' />
            </div>
          </div>

          <div data-aos='fade-up'>
            <div className='box' >
              <h5>React Native</h5>
              <Icon icon="tabler:brand-react-native" width="4rem" color='var(--color-primary)' />
            </div>
          </div>

          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>Git</h5>
              <Icon icon="mdi:git" width="4rem" color='var(--color-primary)' />
            </div>
          </div>
          
          <div data-aos='fade-up'>
            <div className='box' >
              <h5>GitHub</h5>
              <Icon icon="mdi:github" width="4rem" color='var(--color-primary)' />
            </div>
          </div>

          
        </div>
        

        
    </main>
  )
}

export default Habilidades