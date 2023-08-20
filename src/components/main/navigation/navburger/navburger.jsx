import React from 'react';
import * as S from './navburger.style'


function Navburger({clickBurger}){
  
    
    return <S.NavBurger onClick={clickBurger}>
    <S.BurgerLine className="burger__line"></S.BurgerLine>
    <S.BurgerLine className="burger__line"></S.BurgerLine>
    <S.BurgerLine className="burger__line"></S.BurgerLine>
  </S.NavBurger>;
}




export default Navburger;
