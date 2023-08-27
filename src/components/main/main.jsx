import React from 'react';
import Navigation from './navigation/navigation';
import Centerblock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';

import * as S from './main.style'

function Main({loading, tracks, setTrackSelect}){
  
return <S.Main>
          <Navigation />          
          <Centerblock loading ={loading} tracks={tracks} setTrackSelect={setTrackSelect}  />          
          <Sidebar loading ={loading}/>          
        </S.Main>;
}

export default Main;
