import React from 'react';
import Navigation from './navigation/navigation';
import Centerblock from './centerblock/centerblock';
import Sidebar from './sidebar/sidebar';

import * as S from './main.style'

function Main({loading, tracks, setTrackSelect , addError}){
  
return <S.Main>
          <Navigation />          
          <Centerblock loading ={loading} tracks={tracks} setTrackSelect={setTrackSelect} addError={addError} />          
          <Sidebar loading ={loading}/>          
        </S.Main>;
}

export default Main;
