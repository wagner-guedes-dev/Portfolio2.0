import React from 'react'

import { Icon } from '@iconify/react';
import './habilidades.css'


const Habilidades = () => {
  return (
    <main id='habilidades'>
        <div className='title'>
           <h1>Habilidades</h1> 
        </div>

        <div className='cards'>
          <div className='box'>
            <h5>HTML5</h5>
            <Icon icon="icomoon-free:html-five" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>CSS3</h5>
            <Icon icon="uiw:css3" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>JavaScript</h5>
            <Icon icon="ion:logo-javascript" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>React.js</h5>
            <Icon icon="carbon:logo-react" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>SASS</h5>
            <Icon icon="cib:sass-alt" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>Bootstrap</h5>
            <Icon icon="mdi:bootstrap" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>Git</h5>
            <Icon icon="mdi:git" width="4rem" color='var(--color-primary)' />
          </div>
          <div className='box'>
            <h5>GitHub</h5>
            <Icon icon="mdi:github" width="4rem" color='var(--color-primary)' />
          </div>
        </div>
        

        
    </main>
  )
}

export default Habilidades