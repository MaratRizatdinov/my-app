import React from 'react';
import * as S from'./navmenu.style';
import Navitem from './navitem/navitem';




function Navmenu({isActive}){
    return isActive ? <S.NavMenu>
      <S.MenuList>        
        
        <Navitem address = '#' content='Главное'/>
        <Navitem address = '#' content='Мой плейлист'/>
        <Navitem address = '#' content='Войти'/>
        
      </S.MenuList>
    </S.NavMenu> :"";  
}

export default Navmenu;








