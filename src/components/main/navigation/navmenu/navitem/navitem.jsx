import React from 'react';
import * as S from './navitem.style'




function Navitem(props){

    return  <S.MenuItem>
              <S.MenuLink to={props.address} >{props.content}</S.MenuLink>
            </S.MenuItem>;        
}


export default Navitem;










