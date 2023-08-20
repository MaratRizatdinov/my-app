import React from 'react';
import * as S from './searchblock.style'


function Searchblock(){
    return <S.CenterBlockSearch>
    <S.SearchSvg>
      <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
    </S.SearchSvg>
    <S.SearchText      
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </S.CenterBlockSearch>;
}

export default Searchblock;