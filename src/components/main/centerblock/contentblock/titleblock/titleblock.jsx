import React from 'react';
import * as S from './titleblock.style';

function Titleblock(){
    return <S.ContentTitle>
            <S.PlayListColumn01>Трек</S.PlayListColumn01>
            <S.PlayListColumn02>ИСПОЛНИТЕЛЬ</S.PlayListColumn02>
            <S.PlayListColumn03>АЛЬБОМ</S.PlayListColumn03>
            <S.PlayListColumn04>
              <S.PlayListTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </S.PlayListTitleSvg>
            </S.PlayListColumn04>
          </S.ContentTitle>;
}

export default Titleblock;
