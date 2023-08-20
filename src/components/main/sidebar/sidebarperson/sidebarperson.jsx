 import React from 'react';
 import * as S from './sidebarperson.style'

 
 
 function SidebarPerson(){
    return <S.SidebarPersonal>
    <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
    <S.SidebarIcon>
      <svg alt="logout">
        <use xlinkHref="img/icon/sprite.svg#logout"></use>
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>;
 }
 
 export default SidebarPerson;
 