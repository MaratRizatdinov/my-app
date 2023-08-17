import React from 'react';
import './navitem.css'


function Navitem(props){

    return  <li className="menu__item">
          <a href={props.address} className="menu__link">{props.content}</a>
        </li>;
        
}


export default Navitem;








