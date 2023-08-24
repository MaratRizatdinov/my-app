import React from 'react';
import Navigation from './navigation/navigation';
import Centerblock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';

import * as S from './main.style'

function Main({loading}){
return <S.Main>
          <Navigation />          
          <Centerblock loading ={loading}/>          
          <Sidebar loading ={loading}/>          
        </S.Main>;
}

export default Main;
