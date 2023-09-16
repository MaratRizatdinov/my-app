 import React,{ useContext } from 'react';
 import * as S from './sidebarperson.style';
 import { UserContext } from '../../../../context';
 import { useNavigate } from "react-router-dom";
 

 
 
 function SidebarPerson(){

    const [isUser, setIsUser] = useContext(UserContext);
    const navigate = useNavigate();

    const buttonClick=()=>{
      window.localStorage.removeItem('user');
      setIsUser(window.localStorage.getItem('user'));
      navigate('/login');
    }

    return <S.SidebarPersonal> 
    <S.SidebarPersonalName>{isUser}</S.SidebarPersonalName>
    <S.SidebarIcon >
      <svg alt="logout" onClick={buttonClick}>
        <use xlinkHref="img/icon/sprite.svg#logout"></use>
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>;
 }
 
 export default SidebarPerson;
 