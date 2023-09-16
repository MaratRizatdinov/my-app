import React from 'react';
import * as S from './contentblock.style';
import Titleblock from './titleblock/titleblock';
import Trackblock from './trackblock/trackblock';



function Contentblock({loading, tracks, setTrackSelect}){

return  <S.CenterBlockContent>
          <Titleblock/>
          <Trackblock loading={loading} tracks={tracks} setTrackSelect={setTrackSelect}/>             
        </S.CenterBlockContent>;}

export default Contentblock;