import React from 'react';
import Searchblock from './searchblock/searchblock';
import Filterblock from './filterblock/filterblock';
import Contentblock from './contentblock/contentblock';
import * as S from './centerblock.style'



function Centerblock({loading}){

return <S.MainCenterBlock>
            <Searchblock/>  
            <Filterblock/>    
            <Contentblock loading={loading}/>                  
            
          </S.MainCenterBlock>;
          }
export default Centerblock;