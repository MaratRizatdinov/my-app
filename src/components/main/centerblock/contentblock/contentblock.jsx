import React from 'react';
import * as S from './contentblock.style';
import Titleblock from './titleblock/titleblock';
import Trackblock from './trackblock/trackblock';



function Contentblock({loading, tracks}){

return  <S.CenterBlockContent>
          <Titleblock/>
          <Trackblock loading={loading} tracks={tracks}/>             
        </S.CenterBlockContent>;}

export default Contentblock;