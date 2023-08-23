import React from 'react';
import * as S from './volumeblock.style'

 function Volumeblock(){
    return <S.BarVolumeBlock>
    <S.VolumeContent>
      <S.VolumeImage>
        <S.VolumeSvg alt="volume">
          <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
        </S.VolumeSvg>
      </S.VolumeImage>
      <S.VolumeProgress className="_btn">
        <S.VolumeProgressLine
          className="_btn"
          type="range"
          name="range"
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  </S.BarVolumeBlock>;
 }
 
 export default Volumeblock;