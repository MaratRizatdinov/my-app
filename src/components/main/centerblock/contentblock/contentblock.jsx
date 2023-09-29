import React from 'react';
import * as S from './contentblock.style';
import Titleblock from './titleblock/titleblock';
import { Outlet } from 'react-router-dom';




export default function Contentblock(){
  

return  <S.CenterBlockContent>
          <Titleblock/>
          <Outlet/>
        </S.CenterBlockContent>;}

