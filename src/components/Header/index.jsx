import React from 'react'
import './Header.css'

import { useState } from 'react';
import { Icon } from '@iconify/react';

import logo from '../../img/logo.png'

const Header = (props) => {
  
   const [menuResponsive, setMenuResponsive] = useState(false)

     function Sidebar() {
         if(menuResponsive){
           setMenuResponsive(!menuResponsive)
           props.setScrol(false)
        }else{
            setMenuResponsive(!menuResponsive)
            props.setScrol(true)
        }
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
                            <a href={`${props.menuDisable ? '#sobre' : 'javascript:void(0)'}`}>Sobre</a>
                        </li>
                        <li>
                            <a href={`${props.menuDisable ? '#habilidades' : 'javascript:void(0)'}`}>Habilidades</a>
                        </li>
                        <li>
                            <a href={`${props.menuDisable ? '#projetos' : 'javascript:void(0)'}`}>Projetos</a>
                        </li>
                        <li>
                            <a href={`${props.menuDisable ? '#contatos' : 'javascript:void(0)'}`}>Contatos</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div className='hamburger'>
                <Icon icon="ci:hamburger" width="45" color='var(--color-primary)' onClick={props.menuDisable ? Sidebar : ''}/>
            </div>
            
            <div className='menuMobile'>
                <nav className={menuResponsive ? 'block' : 'none'}>
                    <ul>
                        <li>
                            <Icon icon="material-symbols:close" width="45" color='var(--color-primary)' onClick={Sidebar} className='x'/>
                        </li>
                        <li>
                            <a href='#sobre' onClick={Sidebar}>Sobre</a>
                        </li>
                        <li>
                            <a href='#habilidades' onClick={Sidebar}>Habilidades</a>
                        </li>
                        <li>
                            <a href='#projetos' onClick={Sidebar}>Projetos</a>
                        </li>
                        <li>
                            <a href='#contatos' onClick={Sidebar}>Contatos</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
           
    </header>
  )
}

export default Header