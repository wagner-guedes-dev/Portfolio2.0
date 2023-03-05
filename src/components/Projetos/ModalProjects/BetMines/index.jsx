import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

import '../modalProjects.css'

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'






const BetMines = (props) => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8]
    

    

      

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
    <div className='modal-projects modal-pizza-responsive'>


        <div className='left-modal'>
            <div className='images-modal'>

            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing'}}>
                <motion.div 
                className='inner'
                drag='x'
                dragConstraints={{right: 0, left: -width}}
                initial={{x:100}}
                animate={{x:0}}
                transition={{duration:.8}}

                >
                {images.map((image, index) => (
                    <motion.div className='item' key={image}>
                    <img src={image} alt='text alt'/>
                    </motion.div>
                ))}
                </motion.div>
                
            </motion.div>

                
            </div>
            
            <div className='buttons-projects responsive-button'>
                <a href='https://bet-mines-ezx1-wagner-guedes-dev.vercel.app/' target='_blank'><button className='cv'>Acessar projeto</button></a>
                <a href='https://github.com/wagner-guedes-dev/BetMines' target='_blank'><button className='cv'>Acessar repositório</button></a>
                
                
            </div>
            
        </div>

        <div className='right-modal'>
        <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' className='x' onClick={()=>{closeModal(); handleEnableScroll()}}/>
            <h1> BetMines</h1>
            <p className='text-pizza-responsive'>
                Este projeto é uma amostra de um freelancer que desenvolvi junto a um amigo, onde fui responsável pelo front-end e ele pelo back-end. Nesta amostra baseada em meu FreeLancer temos a simulação de um jogo de apostas com a ideia de campo minado. Ao encontrar estrelas seu dinheiro vai multiplicando e ao encontrar a bombas você perde o valor apostado.
            </p>
            <p className='text-pizza-responsive'>
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

export default BetMines