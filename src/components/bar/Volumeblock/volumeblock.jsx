import React from 'react';
import * as S from './volumeblock.style'

 function Volumeblock({audioRef, volume, setVolume}){
  const handleVolumeChange =(newVolume)=>{
    setVolume(newVolume);
    audioRef.current.volume=newVolume;    
  }



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
          value ={volume}
          min={0}
          max={1}
          step={0.1}
          onChange={(event) => {        
            handleVolumeChange(event.target.value);         
            }
          }
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  </S.BarVolumeBlock>;
 }
 
 export default Volumeblock;