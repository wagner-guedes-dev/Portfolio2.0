import React from 'react'
import './Header.css'

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useSpring, animated } from 'react-spring'

import logo from '../../img/logo.png'

const Header = (props) => {
  
   const [menuResponsive, setMenuResponsive] = useState(false)
   const menuAnimation = useSpring({
    height: menuResponsive ? '200px' : '0px',
    opacity: menuResponsive ? 1 : 0,
  })
    
  function handleScroll() {
    setMenuResponsive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //onclick para scrol ir ao local desejado ao click, const offset é a diferenca entre o top e o conteudo
  function handleClickSobre() {
    const element = document.getElementById('sobre');
    const offset = 200;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  function handleClickHab() {
    const element = document.getElementById('habilidades');
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  function handleClickProj() {
    const element = document.getElementById('projetos');
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  return (
    <header>
            <div>
                <img className='logo' src={logo}/>
            </div>
            <div className='menu'>
                <nav>
                    <ul>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={()=> {if(props.menuDisable){handleClickSobre()}}}>Sobre</a>
                        </li>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={()=>{ if(props.menuDisable){handleClickHab()}}}>Habilidades</a>
                        </li>
                        <li>
                            <a style={{cursor: 'pointer'}} onClick={()=> {if(props.menuDisable){handleClickProj()}}}>Projetos</a>
                        </li>
                        <li>
                            <a style={{cursor: 'pointer'}} href={props.menuDisable ? '#contatos' : null}>Contatos</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div className='hamburger' onClick={()=> {if(props.menuDisable){setMenuResponsive(!menuResponsive)}}}>
                {menuResponsive && props.menuDisable ? (
                    <Icon icon="material-symbols:close" width="45" style={{color:'var(--color-background-secundary)'}} />
                ):
                (
                    <Icon icon="ci:hamburger" width="45" style={{color:'var(--color-primary)'}}/>
                )}
            </div>
            
            <animated.div style={menuAnimation} className={menuResponsive && props.menuDisable ? 'menuMobile' : 'none'}>
                <nav>
                        <ul>
                            <li>
                                <a style={{cursor: 'pointer'}} onClick={()=> {setMenuResponsive(!menuResponsive); handleClickSobre()}}>Sobre</a>
                            </li>
                            <li>
                                <a style={{cursor: 'pointer'}} onClick={()=> {setMenuResponsive(!menuResponsive);handleClickHab()} }>Habilidades</a>
                            </li>
                            <li>
                                <a style={{cursor: 'pointer'}} onClick={()=> {setMenuResponsive(!menuResponsive);handleClickProj() }}>Projetos</a>
                            </li>
                            <li>
                                <a style={{cursor: 'pointer'}} href='#contatos' onClick={()=> setMenuResponsive(!menuResponsive)}>Contatos</a>
                            </li>
                        </ul>
                    </nav>
            </animated.div>
           
            
           
    </header>
  )
}

export default Header