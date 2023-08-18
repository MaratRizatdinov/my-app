import React from 'react';
import './navmenu.css';
import Navitem from './navitem/navitem';

function Navmenu({isActive}){
    return isActive ? <div className="nav__menu menu">
      <ul className="menu__list">        
        
        <Navitem address = '#' content='Главное'/>
        <Navitem address = '#' content='Мой плейлист'/>
        <Navitem address = '../signin.html' content='Войти'/>
        
      </ul>
    </div> :"";  
}

export default Navmenu;








