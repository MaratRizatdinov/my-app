import React from 'react';
import Searchblock from './searchblock/searchblock';
import Filterblock from './filterblock/filterblock';
import Contentblock from './contentblock/contentblock';
import * as S from './centerblock.style'



function Centerblock({loading, tracks, setTrackSelect,addError}){

return <S.MainCenterBlock>
            <Searchblock/>  
            <Filterblock/>    
            {!addError ?
            <Contentblock loading={loading} tracks={tracks} setTrackSelect={setTrackSelect}/> 
            : <p>Извините, сервис временно недоступен</p>}            
            
          </S.MainCenterBlock>;
          }
export default Centerblock;