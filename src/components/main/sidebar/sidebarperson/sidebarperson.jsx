 import React,{ useContext } from 'react';
 import * as S from './sidebarperson.style';
 import { UserContext } from '../../../../context';
 import { useNavigate } from "react-router-dom";
 import { useDispatch } from 'react-redux'
 import { exitFromTracksPage } from '../../../../store/actions/creators/exitFromTracksPage';
 

 
 
 function SidebarPerson(){

    const [isUser, setIsUser] = useContext(UserContext);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const buttonClick=()=>{
      window.localStorage.removeItem('user');
      setIsUser(window.localStorage.getItem('user'));
      dispatch(exitFromTracksPage())
      window.localStorage.removeItem('refresh')      
      navigate('/login');
    }

    return <S.SidebarPersonal> 
    <S.SidebarPersonalName>{isUser}</S.SidebarPersonalName>
    <S.SidebarIcon >
      <svg alt="logout" onClick={buttonClick}>
        <use xlinkHref="../img/icon/sprite.svg#logout"></use>
      </svg>
    </S.SidebarIcon>
  </S.SidebarPersonal>;
 }
 
 export default SidebarPerson;
 