import React from 'react'

import { Icon } from '@iconify/react';

import './contato.css'

const Contatos = () => {
  return (
    <footer id='contatos'>

      <div className='title'>
        <h1>Contatos</h1>
      </div>

      <div className='todos-contatos'>

        <div className='box-contato'>
          <a href='javascript:void(0)' >
            <Icon icon="mdi:email-outline" width="3rem" color='var(--color-primary)' />
            <h3>E-mail</h3>
            <p>wagnerguedes123@hotmail.com</p>
          </a>
        </div>

        <div className='box-contato'>
          <a href='https://www.linkedin.com/in/wagner-guedes-dev/' target='_blank'> 
            <Icon icon="ri:linkedin-fill" width="3rem" color='var(--color-primary)' />
            <h3>Linkedin</h3>
            <p>wagner-guedes-dev</p>
          </a>
        </div>

        <div className='box-contato'>
          <a href='https://github.com/wagner-guedes-dev' target='_blank'> 
            <Icon icon="mdi:github" width="3rem" color='var(--color-primary)' />
            <h3>GitHub</h3>
            <p>wagner-guedes-dev</p>
          </a>
        </div>

      </div>

    </footer>
  )
}

export default Contatos