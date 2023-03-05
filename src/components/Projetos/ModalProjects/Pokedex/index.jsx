import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

import '../modalProjects.css'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'







const BetMines = (props) => {

    const images = [img1, img2]
    
      

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
                animate={{x: 0}}
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
                <a href='https://pokedex-simulator-by-wagner-guedes.vercel.app/' target='_blank'><button className='cv'>Acessar projeto</button></a>
                <a href='https://github.com/wagner-guedes-dev/pokedex-simulator-by-wagner-guedes' target='_blank'><button className='cv'>Acessar repositório</button></a>
                
                
            </div>
            
        </div>

        <div className='right-modal'>
        <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' className='x' onClick={()=>{closeModal(); handleEnableScroll()}}/>
            <h1> PokedexSimulator</h1>
            <p className='text-pizza-responsive'>
            Esta não é uma simples pokedex, ou um simples consumo de API. Este projeto foi totalmente elaborado por mim!
            Neste projeto temos o css de uma Pokedex, nela contém todos os 904 pokemons, todos eles separados por gerações e exibindo apenas o selecionado, onde seus atributos foram substituidos por Icons, também é possivél controlar a pokedex através de botões em formato de joystick e seu background é alterado conforme a geração selecionada. Para elaborção deste projeto foi utilizado ReactJS e alguns hooks e libs como UseState, UseEffect, Axios, React Icons... Projeto ainda não esta 100% concluido, mas, pretendo conclui-lo em breve.
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