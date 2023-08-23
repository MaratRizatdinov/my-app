import React from 'react';
import * as S from './navburger.style'




function Navburger({clickBurger}){
  
    
    return <S.NavBurger onClick={clickBurger}>
              <S.BurgerLine />
              <S.BurgerLine />
              <S.BurgerLine />
            </S.NavBurger>;
}




export default Navburger;
