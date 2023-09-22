import React from 'react';
import * as S from './contentblock.style';
import Titleblock from './titleblock/titleblock';
import Trackblock from './trackblock/trackblock';



function Contentblock(){

return  <S.CenterBlockContent>
          <Titleblock/>
          <Trackblock />             
        </S.CenterBlockContent>;}

export default Contentblock;