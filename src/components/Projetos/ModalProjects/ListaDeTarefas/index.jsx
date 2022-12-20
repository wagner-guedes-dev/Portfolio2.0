import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

import '../modalProjects.css'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'








const ListaDeTarefas = (props) => {


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
    <div className='modal-projects'>

        

        <div className='left-modal'>
        
            <div className='images-modal'>

                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing'}}>

                    <motion.div 
                    className='inner'
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    initial={{x:100}}
                    animate={{x:0}}
                    transition={{duration:1.2}}
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
                <a href='https://minhas-tarefas-wg.netlify.app/' target='_blank'><button className='cv'>Acessar projeto</button></a>
                <a href='https://github.com/wagnerwg0202/minhas-tarefas' target='_blank'><button className='cv'>Acessar repositório</button></a>

            </div>
            
        </div>

        <div className='right-modal'>
        <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' className='x' onClick={closeModal}/>
            <h1> Lista De Tarefas </h1>
            <p>
            Lista de tarefas desenvolvido utilizando ReactJS e FireBase sendo possível criar login, armazenar tarefas, editar, concluir e excluir-las.
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
                    FireBase
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default ListaDeTarefas