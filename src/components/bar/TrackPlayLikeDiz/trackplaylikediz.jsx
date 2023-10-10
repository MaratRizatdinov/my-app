import React from 'react';
import * as S from './trackplaylikediz.style';


function TrackPlayLikeDiz(){
    return <S.TrackPlayLikeDis>
    
    <S.TrackPlayLike className="_btn-icon">
      <S.TrackPlayLikeSvg alt="like">
        <use xlinkHref="../img/icon/sprite.svg#icon-like"></use>
      </S.TrackPlayLikeSvg>
    </S.TrackPlayLike>
    
    <S.TrackPlayDis className="_btn-icon">
      <S.TrackPlayDisSvg alt="dislike">
        <use
          xlinkHref="../img/icon/sprite.svg#icon-dislike"
        ></use>
      </S.TrackPlayDisSvg>
    </S.TrackPlayDis>
  </S.TrackPlayLikeDis>;
}

export default TrackPlayLikeDiz;

