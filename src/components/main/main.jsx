import React from 'react';
import Navigation from './navigation/navigation';
import Centerblock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';

import * as S from './main.style'

function Main({loading, tracks}){
  
return <S.Main>
          <Navigation />          
          <Centerblock loading ={loading} tracks={tracks}/>          
          <Sidebar loading ={loading}/>          
        </S.Main>;
}

export default Main;
