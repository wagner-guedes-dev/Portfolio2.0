import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

import '../modalProjects.css'
import './pizzaResponsive.css'

import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'






const Pizzaria = (props) => {

    const images = [img1, img2, img3, img4, img5, img6]
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {

        const newIndex = currentIndex === 0 ? images.length -  0.2 : currentIndex - 0.2;
        setCurrentIndex(newIndex);
      };
      
      const handleNextClick = () => {
        const newIndex = currentIndex === images.length - 0.2 ? 0 : currentIndex + 0.2;
        setCurrentIndex(newIndex);
      };

      

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

    
    const [isScrollDisabled, setIsScrollDisabled] = useState(true);

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (isScrollDisabled) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isScrollDisabled]);

  const handleEnableScroll = () => {
    setIsScrollDisabled(false);
  };
  
    
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
                animate={{x: -currentIndex * width}}
                transition={{duration:.8}}
                onDrag={()=>{
                    // EVITA BUG DE BOTAO DESABILITADO AO ESTAR NO MEIO DO CARROUSEL
                    setCurrentIndex(.2)
                }}
                >
                {images.map((image, index) => (
                    <motion.div className='item' key={image}>
                    <img src={image} alt='text alt'/>
                    </motion.div>
                ))}
                </motion.div>
                
            </motion.div>

            <div className='navigation-buttons'>
                    <button onClick={handlePrevClick} disabled={currentIndex < 0.2}>Anterior</button>
                    <button onClick={handleNextClick} disabled={currentIndex === 1}>Avançar</button>
            </div>

                
            </div>
            
            <div className='buttons-projects responsive-button'>
                <a href='https://gestaopizzaria.netlify.app/' target='_blank'><button className='cv'>Acessar projeto</button></a>
                <a href='https://github.com/wagnerwg0202/gestor-pizzaria' target='_blank'><button className='cv'>Acessar repositório</button></a>
                
                
            </div>
            
        </div>

        <div className='right-modal'>
        <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' className='x' onClick={()=>{closeModal(); handleEnableScroll()}}/>
            <h1> Administrativo pizzaria </h1>
            <p className='text-pizza-responsive'>
                Projeto pessoal feito no objetivo de administrar as mesas de uma pizzaria, sendo possível adicionar e remover mesas. Também é possível alterar o número da mesa e nome do cliente após a mesa ser criada. Foi adicionado um cardápio com alguns pedidos e após selecionados o valor do pedido é somado a mesa selecionada. E por fim ao finalizar o atendimento de uma mesa o valor total pago pelo cliente é somado ao caixa e ao clicar no 'caixa' é apresentado um histórico dos pedidos.
            </p>
            <p className='text-pizza-responsive'>
                Esse projeto foi desenvolvido com as seguintes ferramentas:
            </p>
            <ul>
                <li>
                    HTML5
                </li>
                <li>
                    CSS3
                </li>
                <li>
                    JavaScript
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Pizzaria