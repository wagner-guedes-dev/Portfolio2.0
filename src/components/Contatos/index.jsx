import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Icon } from '@iconify/react';

import './contato.css'
import arrow from '../../img/arrow-rigth.png'

const Contatos = () => {

  
  useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])

  return (
    <footer id='contatos'>

      <div className='title' data-aos='fade-up'>
        <h1><img src={arrow} className='arrow'/>Contatos</h1>
      </div>

      <div className='todos-contatos'>

        <div data-aos='fade-up'>
          <div className='box-contato'>
            <a href={null} >
              <Icon icon="mdi:email-outline" width="3rem" color='var(--color-primary)' />
              <h3>E-mail</h3>
              <p>wagnerguedes123@hotmail.com</p>
            </a>
          </div>
        </div>

        <div data-aos='fade-up'>
          <div className='box-contato'>
            <a href='https://www.linkedin.com/in/wagner-guedes-dev/' target='_blank'> 
              <Icon icon="ri:linkedin-fill" width="3rem" color='var(--color-primary)' />
              <h3>Linkedin</h3>
              <p>wagner-guedes-dev</p>
            </a>
          </div>
        </div>

        <div data-aos='fade-up'>
          <div className='box-contato'>
            <a href='https://github.com/wagner-guedes-dev' target='_blank'> 
              <Icon icon="mdi:github" width="3rem" color='var(--color-primary)' />
              <h3>GitHub</h3>
              <p>wagner-guedes-dev</p>
            </a>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Contatos