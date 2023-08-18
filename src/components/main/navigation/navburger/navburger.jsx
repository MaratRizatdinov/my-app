import React from 'react';
import './navburger.css';




function Navburger({clickBurger}){
  
    
    return <div className="nav__burger burger" onClick={clickBurger}>
    <span className="burger__line"></span>
    <span className="burger__line"></span>
    <span className="burger__line"></span>
  </div>;
}




export default Navburger;
