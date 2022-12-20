import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

import '../modalProjects.css'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'








const ControleFinanceiro = (props) => {


    function closeModal(){
        if(props.modal){
            props.setmodal(false)
            props.setScrol(false)
            props.podeClicar(true)
            props.menuEnable(true)
        }
    }

    const carousel = useRef()
    const [ width, setWidth ] = useState(0)

    useEffect(()=>{

        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth - 100)

    },[])


    const images = [img1, img2, img3]

    
    
  return (
    <div className='modal-projects test'>

        

        <div className='left-modal'>
        
            <div className='images-modal'>

                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing'}}>

                    <motion.div 
                    className='inner'
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    initial={{x:100}}
                    animate={{x:0}}
                    transition={{duration:1.5}}
                    >

                        {images.map(image => (
                            <motion.div className='item' key={image}>
                                <img src={image} alt='text alt'/>
                            </motion.div>
                        ))}

                    </motion.div>

                </motion.div>
            
            </div>

            <div className='buttons-projects'>
                <a href='https://controle-financeiro-wagner.netlify.app/' target='_blank'><button className='cv'>Acessar projeto</button></a>
                <a href='https://github.com/wagnerwg0202/controle-financeiro-react' target='_blank'><button className='cv'>Acessar repositório</button></a>

            </div>
            
        </div>

        <div className='right-modal'>
        <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' className='x' onClick={closeModal} />
            <h1> Controle Financeiro </h1>
            <p>
            Projeto pessoal desenvolvido com ReactJS, neste projeto é possível exibir a entrada, saída e valor total de seu montante salva-los no LocalStore. Também temos uma tabela com os detalhes de seu montante sendo possibilitado exclusão do mesmo.
            </p>
            <p>
                Esse projeto foi desenvolvido com as seguintes ferramentas:
            </p>
            <ul>
                <li>
                    ReactJS
                </li>
                <li>
                    CSS3
                </li>
                <li>
                    LocalStorage
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default ControleFinanceiro