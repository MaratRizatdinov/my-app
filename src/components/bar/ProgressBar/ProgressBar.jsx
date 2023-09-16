import { React, useState, useEffect } from 'react';
import * as S from './progressbar.style';

function ProgressBar({audioRef, currentTime, duration}) {  

  const handleTimeChange =(newTime)=>{
    audioRef.current.currentTime=newTime;
    audioRef.current.play();
  }
  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => {        
        handleTimeChange(event.target.value);         
        }
      }
      $color="#b672ff"
    />
  );            
}
 
export default ProgressBar;