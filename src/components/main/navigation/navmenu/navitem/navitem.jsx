import React from 'react';
import * as S from './navitem.style';
import { useNavigate } from "react-router-dom";




function Navitem(props){
  let navigate = useNavigate();

  const goToPage = () => {
    if(props.setIsUser){
      window.localStorage.removeItem('user');
      props.setIsUser(window.localStorage.getItem('user'));
    } 
    navigate(props.address);
  };

    return  <S.MenuItem>
              <S.MenuLink onClick={goToPage} >{props.content}</S.MenuLink>
            </S.MenuItem>;        
}

export default Navitem;










