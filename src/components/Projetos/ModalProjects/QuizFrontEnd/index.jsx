import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

import '../modalProjects.css'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'


const images = [img1, img2, img3, img4, img5]




const QuizFrontEnd = (props) => {


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
                <a href='https://quiz-front-end.netlify.app/' target='_blank'><button className='cv'>Acessar projeto</button></a>
                <a href='https://github.com/wagnerwg0202/quiz-front-end-react' target='_blank'><button className='cv'>Acessar repositório</button></a>
                
                
            </div>
            
        </div>

        <div className='right-modal'>
        <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' className='x' onClick={closeModal}/>
            <h1> Quiz Front-End</h1>
            <p>
            Projeto pessoal desenvolvido com ReactJS no intuito de testar conhecimentos front-end com 15 perguntas envolvendo HTML, CSS e JavaScript. Todas as respostas são somadas e o resultado é exibido ao final do quiz.
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
            </ul>
        </div>
        
    </div>
  )
}

export default QuizFrontEnd